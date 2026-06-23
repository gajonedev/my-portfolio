"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactSchema, MIN_FILL_MS } from "@/lib/contact-schema";

export type ContactResult = { ok: true } | { ok: false; error: string };

// Payload sent from the client (validated fields + anti-bot extras)
interface ContactPayload {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — must stay empty
  elapsedMs?: unknown; // time spent on the form
  token?: unknown; // Cloudflare Turnstile token
}

// ---- Naive in-memory rate limit (per server instance) ----
const RATE_MAX = 3;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Misconfiguration — fail closed so we never send unverified mail.
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          ...(ip ? { remoteip: ip } : {}),
        }),
      },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function sendContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  // 1. Honeypot — silently "succeed" so bots don't learn anything.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return { ok: true };
  }

  // 2. Time-trap — reject submissions that are implausibly fast.
  const elapsed = Number(payload.elapsedMs);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return { ok: false, error: "Soumission trop rapide, réessayez." };
  }

  // 3. Field validation (server-side, never trust the client).
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, error: "Formulaire invalide, vérifiez vos champs." };
  }

  // 4. Rate limit by IP.
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      ok: false,
      error: "Trop de tentatives. Réessayez dans une minute.",
    };
  }

  // 5. Cloudflare Turnstile (anti-robot).
  const token = typeof payload.token === "string" ? payload.token : "";
  if (!token || !(await verifyTurnstile(token, ip))) {
    return { ok: false, error: "Vérification anti-robot échouée." };
  }

  // 6. Send the email via Resend.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Missing Resend env vars (RESEND_API_KEY/FROM/TO)");
    return { ok: false, error: "Service d'envoi indisponible pour le moment." };
  }

  const { name, email, projectType, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message — ${projectType}`,
      text: [
        `Nom        : ${name}`,
        `Email      : ${email}`,
        `Projet     : ${projectType}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend error:", error);
      return { ok: false, error: "Échec de l'envoi. Réessayez plus tard." };
    }
    return { ok: true };
  } catch (e) {
    console.error("Contact send failed:", e);
    return {
      ok: false,
      error: "Échec de l'envoi. Réessayez ou écrivez-moi directement.",
    };
  }
}
