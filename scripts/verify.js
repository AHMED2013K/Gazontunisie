// Contrôle qualité post-build : liens internes valides, un seul <h1> par page,
// canonical présent, JSON-LD bien formé. Usage : node scripts/verify.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IGNORE_DIRS = new Set([".git", "node_modules", "src", "scripts", "Image", ".claude"]);

function listHtmlFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      results = results.concat(listHtmlFiles(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".html")) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

function fileExistsForHref(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return fs.existsSync(path.join(ROOT, "index.html"));
  const hasExtension = /\.[a-z0-9]+$/i.test(clean);
  const target = hasExtension
    ? path.join(ROOT, clean)
    : path.join(ROOT, clean, "index.html");
  return fs.existsSync(target);
}

function verify() {
  const files = listHtmlFiles(ROOT);
  let errors = [];
  let brokenLinks = new Set();

  for (const file of files) {
    const relPath = path.relative(ROOT, file);
    const html = fs.readFileSync(file, "utf8");

    const h1Count = (html.match(/<h1[\s>]/g) || []).length;
    if (h1Count !== 1) {
      errors.push(`${relPath}: ${h1Count} balise(s) <h1> (attendu 1)`);
    }

    const isErrorPage = relPath === "404.html";
    if (!isErrorPage && !html.includes('<link rel="canonical"')) {
      errors.push(`${relPath}: balise canonical manquante`);
    }

    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!jsonLdBlocks.length) {
      errors.push(`${relPath}: aucun JSON-LD trouvé`);
    }
    for (const [, jsonText] of jsonLdBlocks) {
      try {
        JSON.parse(jsonText);
      } catch (e) {
        errors.push(`${relPath}: JSON-LD invalide (${e.message})`);
      }
    }

    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (!fileExistsForHref(href)) {
        brokenLinks.add(`${relPath} -> ${href}`);
      }
    }
  }

  console.log(`Pages vérifiées : ${files.length}`);

  if (errors.length) {
    console.log(`\n${errors.length} problème(s) de structure :`);
    errors.forEach((e) => console.log(`  - ${e}`));
  } else {
    console.log("Aucun problème de structure (H1 / canonical / JSON-LD).");
  }

  if (brokenLinks.size) {
    console.log(`\n${brokenLinks.size} lien(s) interne(s) cassé(s) :`);
    [...brokenLinks].forEach((l) => console.log(`  - ${l}`));
  } else {
    console.log("Aucun lien interne cassé.");
  }

  if (errors.length || brokenLinks.size) {
    process.exitCode = 1;
  }
}

verify();
