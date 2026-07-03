#!/usr/bin/env node
// Publie un brouillon : déplace content/drafts/<slug>.md vers content/blog/
// et met à jour la date du frontmatter avec la date du jour.
// Usage : npm run publish-post <slug>

import fs from "node:fs";
import path from "node:path";

const slug = process.argv[2];

if (!slug) {
  const drafts = fs
    .readdirSync("content/drafts")
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => f.replace(/\.md$/, ""));
  console.log("Usage : npm run publish-post <slug>\n");
  console.log("Brouillons disponibles :");
  for (const d of drafts) console.log(`  - ${d}`);
  process.exit(1);
}

const source = path.join("content/drafts", `${slug}.md`);
const target = path.join("content/blog", `${slug}.md`);

if (!fs.existsSync(source)) {
  console.error(`❌ Brouillon introuvable : ${source}`);
  process.exit(1);
}
if (fs.existsSync(target)) {
  console.error(`❌ Un article publié porte déjà ce slug : ${target}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
let content = fs.readFileSync(source, "utf-8");

if (!/^date: ".*"$/m.test(content)) {
  console.error("❌ Frontmatter sans champ date — vérifie le fichier.");
  process.exit(1);
}
content = content.replace(/^date: ".*"$/m, `date: "${today}"`);

fs.writeFileSync(target, content);
fs.unlinkSync(source);

console.log(`✅ Publié : ${target} (date: ${today})`);
console.log("Prochaines étapes : commit + déploiement, puis demander");
console.log("l'indexation de l'URL dans la Search Console.");
