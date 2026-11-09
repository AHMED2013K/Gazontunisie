const { renderPage } = require("./layout");
const { renderBreadcrumb } = require("./breadcrumb");
const { renderSections, collectFaqItems, renderAvailability } = require("./components");
const { faqPage, product: productSchema, service: serviceSchema } = require("./schema");
const { localizedPath } = require("../data/i18n");
const { UI } = require("../data/ui-strings");
const { SITE } = require("../data/site");
const { sizeAttrs } = require("../data/image-size");

// Garde les pages SEO historiques cohérentes avec la grille tarifaire actuelle
// même lorsque leur contenu source contient encore une ancienne formulation.
function normalizeLegacyPricing(value) {
  if (typeof value === "string") {
    return value
      .replaceAll("490 DT/m", "500 DT/m")
      .replaceAll("490 دينار/م", "500 دينار/م")
      .replaceAll("15 DT/m² sous 50 m²", "sur devis sous 50 m²")
      .replaceAll("15 DT/sqm under 50 sqm", "quoted under 50 sqm")
      .replaceAll("15 دينار/م² دون 50 م²", "حسب عرض السعر للمساحات دون 50 م²")
      .replaceAll("15 DT/m²", "sur devis")
      .replaceAll("15 DT/sqm", "quoted")
      .replaceAll("15 دينار/م²", "حسب العرض");
  }
  if (Array.isArray(value)) return value.map(normalizeLegacyPricing);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeLegacyPricing(item)]));
  }
  return value;
}

// Renderer générique utilisé par la quasi-totalité des pages de contenu
// (piliers gazon/palmier, pages villes, catégories, pages confiance, FAQ).
// `page.sections` suit le modèle défini dans components.js.
// `page.basePath` est le chemin canonique FR (ex: "/gazon-tunisie/") ;
// `page.lang` ("fr"/"en"/"ar") détermine le préfixe d'URL réel et les libellés.
// `page.breadcrumb` contient déjà les segments traduits pour cette langue
// (hors "Accueil", ajouté automatiquement ici).
function renderContentPage(page) {
  page = normalizeLegacyPricing(page);
  const lang = page.lang || "fr";
  if (!page.availability) {
    const path = page.basePath || "";
    if (path.includes("acheter-terre-vegetale")) page.availability = ["terre"];
    else if (path.includes("palmier")) page.availability = ["palmier"];
    else if (path.includes("gazon-paspalum")) page.availability = ["paspalum"];
    else if (path.includes("gazon-americain")) page.availability = ["americain"];
    else if (path.includes("gazon") || path.includes("difference-paspalum")) page.availability = ["paspalum", "americain"];
  }
  const localizedBase = localizedPath(page.basePath, lang);
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    ...page.breadcrumb,
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const jsonLd = [breadcrumbJsonLd];

  const faqItems = collectFaqItems(page.sections);
  if (faqItems.length) jsonLd.push(faqPage(faqItems));

  if (page.product) jsonLd.push(productSchema({ ...page.product, path: localizedBase }));
  if (page.service) jsonLd.push(serviceSchema({ ...page.service, path: localizedBase }));

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${page.eyebrow || ""}</p>
        <h1>${page.h1}</h1>
        <p class="hero-copy">${page.intro}</p>
        ${page.availability && page.availability.length ? renderAvailability(page.availability, lang) : ""}
      </div>
      ${
        page.heroImage
          ? `<div class="page-hero-media"><img src="${page.heroImage.src}" alt="${page.heroImage.alt}" loading="eager" fetchpriority="high" decoding="async"${sizeAttrs(page.heroImage.src)} /></div>`
          : ""
      }
    </section>
    <div class="section-shell content-sections">
      ${renderSections(page.sections)}
    </div>
  `;

  // /quote.js n'est chargé que sur les pages qui portent réellement un
  // calculateur, pour ne pas alourdir les ~190 autres.
  const hasQuote = (page.sections || []).some((s) => s.type === "quote");

  return renderPage({
    basePath: page.basePath,
    lang,
    title: page.title,
    description: page.metaDescription,
    bodyHtml,
    jsonLd,
    ogImage: page.heroImage ? page.heroImage.src : undefined,
    extraScripts: hasQuote
      ? `<script src="/quote.js?v=${SITE.assetVersion}" defer></script>`
      : "",
  });
}

module.exports = { renderContentPage };
