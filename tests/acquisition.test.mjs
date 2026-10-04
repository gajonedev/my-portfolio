import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { createRequire } from "node:module";

const nodeRequire = createRequire(import.meta.url);
const projectRoot = path.resolve(import.meta.dirname, "..");

// Load the real TypeScript modules with isolated external service mocks.
function load(file, mocks = {}, cache = new Map()) {
  const filename = path.resolve(projectRoot, file);
  if (cache.has(filename)) return cache.get(filename);
  const sandboxModule = { exports: {} };
  cache.set(filename, sandboxModule.exports);
  const js = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const localRequire = (name) => {
    if (name in mocks) return mocks[name];
    if (name.startsWith("@/")) return load(`${name.slice(2)}.ts`, mocks, cache);
    if (name.startsWith("."))
      return load(
        path.relative(
          projectRoot,
          path.resolve(path.dirname(filename), `${name}.ts`),
        ),
        mocks,
        cache,
      );
    return nodeRequire(name);
  };
  new Function("require", "module", "exports", "process", "fetch", js)(
    localRequire,
    sandboxModule,
    sandboxModule.exports,
    { env: mocks.env || {} },
    mocks.fetch || globalThis.fetch,
  );
  return sandboxModule.exports;
}

const acquisition = load("lib/acquisition.ts");
const { contactSchema } = load("lib/contact-schema.ts");
const payload = {
  name: "Client Test",
  email: "client@example.com",
  projectType: "creation-application-web",
  message: "Je souhaite une plateforme de gestion.",
  elapsedMs: 5000,
  token: "verified",
};

test("infer service from offers, projects and articles without confusing Mobile Money", () => {
  for (const [origin, expected] of [
    ["/services/creation-application-mobile", "creation-application-mobile"],
    ["/projects/afcom", "creation-application-mobile"],
    ["/projects/weman-lms", "creation-application-web"],
    ["/blog/accepter-paiements-mobile-money-site-web", "creation-ecommerce"],
    ["/developpeur-flutter-benin", "creation-application-mobile"],
    ["/about", undefined],
  ])
    assert.equal(acquisition.serviceFromPath(origin), expected, origin);
});

test("contact URL rejects unknown offers and strips query data from the origin", () => {
  assert.equal(
    acquisition.contactHref("unknown", "//external.example"),
    "/contact",
  );
  const url = new URL(
    acquisition.contactHref(
      "creation-application-web",
      "/tarifs?email=private",
    ),
    "https://example.com",
  );
  assert.equal(url.searchParams.get("service"), "creation-application-web");
  assert.equal(url.searchParams.get("source"), "/tarifs");
});

test("schema validates service choices and accepts unspecified budget and deadline", () => {
  assert.ok(contactSchema.safeParse(payload).success);
  assert.ok(
    !contactSchema.safeParse({ ...payload, projectType: "unknown" }).success,
  );
  assert.ok(
    !contactSchema.safeParse({ ...payload, budget: "unknown" }).success,
  );
});

test("contact sends labelled choices and origin, without calling real providers", async () => {
  const sent = [];
  const { sendContact } = load("app/actions/contact.ts", {
    "next/headers": {
      headers: async () => new Map([["x-forwarded-for", "127.0.0.1"]]),
    },
    resend: {
      Resend: class {
        emails = {
          send: async (message) => {
            sent.push(message);
            return { error: null };
          },
        };
      },
    },
    env: {
      TURNSTILE_SECRET_KEY: "test",
      RESEND_API_KEY: "test",
      CONTACT_FROM_EMAIL: "sender@example.com",
      CONTACT_TO_EMAIL: "owner@example.com",
    },
    fetch: async () => ({ json: async () => ({ success: true }) }),
  });
  assert.deepEqual(
    await sendContact({
      ...payload,
      budget: "1m-2m",
      deadline: "1-3-mois",
      source: "/tarifs?email=private",
    }),
    { ok: true },
  );
  assert.equal(sent.length, 1);
  assert.match(sent[0].text, /Plateforme web \/ logiciel métier/);
  assert.match(sent[0].text, /1 à 2 millions FCFA/);
  assert.match(sent[0].text, /Dans 1 à 3 mois/);
  assert.match(sent[0].text, /Origine\s+: \/tarifs/);
  assert.ok(!sent[0].text.includes("private"));
  assert.deepEqual(await sendContact({ ...payload, company: "bot" }), {
    ok: true,
  });
  assert.equal(sent.length, 1);
  assert.equal((await sendContact({ ...payload, elapsedMs: 1 })).ok, false);
  assert.equal(
    (await sendContact({ ...payload, projectType: "unknown" })).ok,
    false,
  );
});

test("failed anti-bot verification never sends email", async () => {
  let calls = 0;
  const { sendContact } = load("app/actions/contact.ts", {
    "next/headers": { headers: async () => new Map() },
    resend: {
      Resend: class {
        emails = {
          send: async () => {
            calls++;
            return { error: null };
          },
        };
      },
    },
    env: { TURNSTILE_SECRET_KEY: "test" },
    fetch: async () => ({ json: async () => ({ success: false }) }),
  });
  assert.equal((await sendContact(payload)).ok, false);
  assert.equal(calls, 0);
});
