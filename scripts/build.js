// Générateur de site statique Gazon Tunisie (FR/EN/AR).
// Régénère toutes les pages HTML + sitemap.xml (avec hreflang) + robots.txt
// depuis src/data + src/templates. Usage : node scripts/build.js
const fs = require("fs");
const path = require("path");
const { SITE, absoluteUrl } = require("../src/data/site");
const { LANGUAGE_LIST } = require("../src/data/i18n");

const ROOT = path.join(__dirname, "..");
const routes = [];

const LEGACY_PRODUCT_DIRS = [
  "produits/gazon",
  "produits/palmiers",
  "produits/plantes-interieur",
  "produits/engrais",
  "produits/arbres",
  "produits/arbustes",
  "produits/terre-vegetale",
  "produits/gravier-decoratif",
  "acheter-terre-vegetale",
];

function cleanLegacyProductPages() {
  LEGACY_PRODUCT_DIRS.forEach((relativeDir) => {
    fs.rmSync(path.join(ROOT, relativeDir), { recursive: true, force: true });
    fs.rmSync(path.join(ROOT, "en", relativeDir), { recursive: true, force: true });
    fs.rmSync(path.join(ROOT, "ar", relativeDir), { recursive: true, force: true });
  });
}

function registerPage(routePath, html) {
  const dir = routePath === "/" ? ROOT : path.join(ROOT, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  routes.push(routePath);
  return routePath;
}

function writeRootFile(name, content) {
  fs.writeFileSync(path.join(ROOT, name), content, "utf8");
}

function buildRobotsTxt() {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`;
  writeRootFile("robots.txt", content);
}

// Retrouve le chemin canonique FR (sans prefixe /en ou /ar) à partir d'une
// route localisée, pour regrouper les 3 versions d'une même page dans le
// sitemap (balises hreflang).
function toBasePath(routePath) {
  for (const lang of LANGUAGE_LIST) {
    if (lang.prefix && routePath.startsWith(`${lang.prefix}/`)) {
      const rest = routePath.slice(lang.prefix.length);
      return rest === "" ? "/" : rest;
    }
  }
  return routePath;
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);

  const groups = new Map();
  for (const route of routes) {
    const base = toBasePath(route);
    if (!groups.has(base)) groups.set(base, []);
    groups.get(base).push(route);
  }

  const urls = routes
    .map((route) => {
      const base = toBasePath(route);
      const alternates = (groups.get(base) || [])
        .map((altRoute) => {
          const lang = LANGUAGE_LIST.find((l) => (l.prefix ? altRoute.startsWith(`${l.prefix}/`) : altRoute === base));
          return lang ? `    <xhtml:link rel="alternate" hreflang="${lang.htmlLang}" href="${absoluteUrl(altRoute)}" />` : "";
        })
        .filter(Boolean)
        .join("\n");

      return `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`;
    })
    .join("\n");

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  writeRootFile("sitemap.xml", content);
}

function build404() {
  const { renderPage } = require("../src/templates/layout");
  const bodyHtml = `
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">404</p>
        <h1>Page introuvable / Page not found / الصفحة غير موجودة</h1>
        <p class="hero-copy">
          FR — La page que vous cherchez n'existe pas ou a été déplacée.<br />
          EN — The page you are looking for does not exist or has been moved.<br />
          AR — الصفحة التي تبحثون عنها غير موجودة أو تم نقلها.
        </p>
        <div class="hero-actions">
          <a class="pill-button" href="/">Accueil / Home / الرئيسية</a>
        </div>
      </div>
    </section>
    <div class="section-shell content-sections">
      <section class="content-block related-links">
        <h2>Pages populaires / Popular pages / صفحات شائعة</h2>
        <div class="related-grid">
          <a class="related-card" href="/gazon-tunisie/"><span>Gazon Tunisie</span><small>Gazon naturel, livraison selon votre adresse</small></a>
          <a class="related-card" href="/palmier-tunisie/"><span>Palmier Tunisie</span><small>490 DT/m, livraison dans toute la Tunisie</small></a>
          <a class="related-card" href="/blog/"><span>Blog jardinage</span><small>Conseils gazon, palmiers et aménagement</small></a>
          <a class="related-card" href="/contact/"><span>Contact</span><small>Par téléphone ou WhatsApp</small></a>
        </div>
      </section>
    </div>
  `;

  const html = renderPage({
    basePath: "/404.html",
    lang: "fr",
    title: "Page introuvable | Gazon Tunisie",
    description: "Cette page n'existe pas. Retrouvez le gazon naturel, les palmiers décoratifs et le blog jardinage Gazon Tunisie.",
    bodyHtml,
    robots: "noindex, follow",
  });

  writeRootFile("404.html", html);
}

function buildForLanguage(lang) {
  const { renderHome } = require("../src/pages/home");
  registerPage(require("../src/data/i18n").localizedPath("/", lang), renderHome(lang));

  require("../src/pages/gazon-cluster").build(registerPage, lang);
  require("../src/pages/palmier-cluster").build(registerPage, lang);
  require("../src/pages/produits").build(registerPage, lang);
  require("../src/pages/services").build(registerPage, lang);
  require("../src/pages/livraison").build(registerPage, lang);
  require("../src/pages/trust").build(registerPage, lang);
  require("../src/pages/blog-pages").build(registerPage, lang);
  require("../src/pages/seo-gazon").build(registerPage, lang);
  require("../src/pages/plan-du-site").build(registerPage, lang);
}

function build() {
  cleanLegacyProductPages();
  LANGUAGE_LIST.forEach((lang) => buildForLanguage(lang.code));

  build404();
  buildRobotsTxt();
  buildSitemap();

  console.log(`Build terminé : ${routes.length} pages générées (${LANGUAGE_LIST.length} langues).`);
}

build();
