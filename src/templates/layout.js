const { SITE, absoluteUrl, buildWhatsAppUrl } = require("../data/site");
const { villes } = require("../data/villes");
const { LANGUAGES, LANGUAGE_LIST, localizedPath } = require("../data/i18n");
const { UI, CITY_NAMES } = require("../data/ui-strings");
const { jsonLdScript, organization, localBusiness, website } = require("./schema");

function getNav(lang) {
  const t = UI[lang];
  return [
    { label: t.nav.home, path: localizedPath("/", lang) },
    {
      label: t.nav.products,
      path: localizedPath("/produits/", lang),
      children: [
        { label: t.productsMenu.gazon, path: localizedPath("/gazon-tunisie/", lang) },
        { label: t.productsMenu.palmiers, path: localizedPath("/palmier-tunisie/", lang) },
        { label: t.productsMenu.all, path: localizedPath("/produits/", lang) },
      ],
    },
    {
      label: t.nav.services,
      path: localizedPath("/services/", lang),
      children: [
        { label: t.servicesMenu.poseGazon, path: localizedPath("/services/pose-gazon/", lang) },
        { label: t.servicesMenu.plantationPalmier, path: localizedPath("/services/plantation-palmier/", lang) },
        { label: t.servicesMenu.all, path: localizedPath("/services/", lang) },
      ],
    },
    {
      label: t.nav.delivery,
      path: localizedPath("/livraison/", lang),
      children: [
        ...villes.map((v) => ({ label: CITY_NAMES[v.slug][lang], path: localizedPath(`/livraison/${v.slug}/`, lang) })),
        { label: t.deliveryMenu.allZones, path: localizedPath("/livraison/", lang) },
      ],
    },
    { label: t.nav.blog, path: localizedPath("/blog/", lang) },
    { label: t.nav.why, path: localizedPath("/pourquoi-choisir-gazon-tunisie/", lang) },
    { label: t.nav.contact, path: localizedPath("/contact/", lang) },
  ];
}

function renderNavItem(item) {
  if (item.children) {
    return `
      <div class="nav-item has-dropdown">
        <a href="${item.path}" class="nav-link">${item.label}</a>
        <ul class="dropdown-menu">
          ${item.children.map((child) => `<li><a href="${child.path}">${child.label}</a></li>`).join("")}
        </ul>
      </div>`;
  }
  return `<div class="nav-item"><a href="${item.path}" class="nav-link">${item.label}</a></div>`;
}

function renderLangSwitch(lang, basePath) {
  const t = UI[lang];
  // Pages hors routage multilingue (ex: 404.html) : le sélecteur renvoie vers
  // l'accueil de chaque langue plutôt qu'un chemin qui n'existe pas.
  const switchBase = basePath.endsWith(".html") ? "/" : basePath;
  return `
    <nav class="lang-switch" aria-label="${t.langSwitchLabel}">
      ${LANGUAGE_LIST.map(
        (l) =>
          `<a href="${localizedPath(switchBase, l.code)}" class="lang-button${l.code === lang ? " is-active" : ""}" aria-label="${l.name}">${l.label}</a>`
      ).join("")}
    </nav>`;
}

function renderHeader(lang, basePath) {
  const t = UI[lang];
  return `
    <header class="site-header">
      <a class="brand" href="${localizedPath("/", lang)}" aria-label="${t.nav.home}">
        <img src="/logo.png" alt="" class="brand-mark" loading="lazy" width="40" height="40" />
        <span>Gazon Tunisie</span>
      </a>

      ${renderLangSwitch(lang, basePath)}

      <button class="nav-toggle" type="button" aria-label="${t.navToggleLabel}" aria-expanded="false">
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" aria-label="${t.nav.home}">
        ${getNav(lang).map(renderNavItem).join("")}
      </nav>
    </header>`;
}

function renderFooter(lang) {
  const t = UI[lang];
  const f = t.footer;
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-col footer-brand-col">
          <a class="brand footer-brand" href="${localizedPath("/", lang)}">
            <img src="/logo.png" alt="" class="brand-mark" loading="lazy" width="40" height="40" />
            <span>Gazon Tunisie</span>
          </a>
          <p>${SITE.address.locality}, ${SITE.address.region} — ${f.tagline}</p>
          <p><a href="tel:${SITE.phoneE164}">${SITE.phoneDisplay}</a></p>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <p>${t.hoursLabel}</p>
        </div>

        <div class="footer-col">
          <h3>${f.productsHeading}</h3>
          <ul class="footer-links">
            <li><a href="${localizedPath("/gazon-tunisie/", lang)}">${f.gazonLink}</a></li>
            <li><a href="${localizedPath("/palmier-tunisie/", lang)}">${f.palmierLink}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>${f.deliveryHeading}</h3>
          <ul class="footer-links">
            ${villes
              .slice(0, 6)
              .map((v) => `<li><a href="${localizedPath(`/livraison/${v.slug}/`, lang)}">${CITY_NAMES[v.slug][lang]}</a></li>`)
              .join("")}
            <li><a href="${localizedPath("/livraison/", lang)}">${f.allZonesLink}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>${f.resourcesHeading}</h3>
          <ul class="footer-links">
            <li><a href="${localizedPath("/services/", lang)}">${f.servicesLink}</a></li>
            <li><a href="${localizedPath("/blog/", lang)}">${f.blogLink}</a></li>
            <li><a href="${localizedPath("/faq/", lang)}">${f.faqLink}</a></li>
            <li><a href="${localizedPath("/a-propos/", lang)}">${f.aboutLink}</a></li>
            <li><a href="${localizedPath("/contact/", lang)}">${f.contactLink}</a></li>
            <li><a href="${localizedPath("/plan-du-site/", lang)}">${f.sitemapLink}</a></li>
          </ul>
        </div>

        <div class="footer-col footer-actions">
          <h3>${f.followHeading}</h3>
          <div class="footer-icons-row">
            <a class="footer-location" href="${SITE.social.googleMaps}" target="_blank" rel="noopener noreferrer" aria-label="${t.locationLabel}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 4.9 7 13 7 13s7-8.1 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" /></svg>
            </a>
            <div class="social-links" aria-label="${f.followHeading}">
              <a href="${SITE.social.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" /></svg>
              </a>
              <a href="${SITE.social.facebook}" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V3h-3c-4 0-6 2.4-6 6v3H5v5h3v5h5v-5h4l1-5h-5V9c0-.7.4-1 1-1Z" /></svg>
              </a>
              <a href="${buildWhatsAppUrl(t.footerWhatsappMessage || t.stickyWhatsappMessage)}" target="_blank" rel="noreferrer" aria-label="WhatsApp Gazon Tunisie">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.4 1.3-2 1.4-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l1 2.4c.1.3.1.5 0 .7l-.5.8c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.4 1.1c.3.2.6.3.7.5.1.1.1.8-.1 1.3Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-credits">
        <p>${f.copyright}</p>
        <p>${f.credit} <a href="${SITE.credit.url}" target="_blank" rel="noopener noreferrer">${SITE.credit.label}</a></p>
      </div>
    </footer>`;
}

function renderStickyWhatsApp(lang) {
  const t = UI[lang];
  return `
    <a class="sticky-whatsapp" href="${buildWhatsAppUrl(t.stickyWhatsappMessage)}" target="_blank" rel="noreferrer" aria-label="${t.stickyWhatsapp} Gazon Tunisie">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.4 1.3-2 1.4-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l1 2.4c.1.3.1.5 0 .7l-.5.8c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.4 1.1c.3.2.6.3.7.5.1.1.1.8-.1 1.3Z" /></svg>
      <span>${t.stickyWhatsapp}</span>
    </a>`;
}

function renderHreflangTags(basePath) {
  // Pas d'alternates pour les pages hors routage multilingue (ex: 404.html,
  // qui n'a qu'une seule version servie quel que soit le chemin demandé).
  if (basePath.endsWith(".html")) return "";
  const tags = LANGUAGE_LIST.map(
    (l) => `<link rel="alternate" hreflang="${l.hreflang || l.htmlLang}" href="${absoluteUrl(localizedPath(basePath, l.code))}" />`
  );
  tags.push(`<link rel="alternate" hreflang="x-default" href="${absoluteUrl(basePath)}" />`);
  return tags.join("\n    ");
}

function renderPage({
  basePath,
  lang = "fr",
  title,
  description,
  bodyHtml,
  jsonLd = [],
  ogImage,
  ogType = "website",
  robots = "index, follow",
  extraScripts = "",
}) {
  const normalizeLegacyOutput = (value) => {
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
    if (Array.isArray(value)) return value.map(normalizeLegacyOutput);
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeLegacyOutput(item)]));
    }
    return value;
  };
  title = normalizeLegacyOutput(title);
  description = normalizeLegacyOutput(description);
  bodyHtml = normalizeLegacyOutput(bodyHtml);
  jsonLd = normalizeLegacyOutput(jsonLd);
  const langConfig = LANGUAGES[lang];
  const path = localizedPath(basePath, lang);
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(ogImage || SITE.defaultOgImage);
  const schemas = [organization(), localBusiness(), website(LANGUAGES[lang].locale.replace("_", "-")), ...jsonLd];

  return `<!DOCTYPE html>
<html lang="${langConfig.htmlLang}" dir="${langConfig.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />
    ${renderHreflangTags(basePath)}

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="Gazon Tunisie" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="${langConfig.locale}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- Police variable : un seul fichier couvre 400 a 900. L'ancienne requete
         chargeait cinq graisses figees dont la 300, jamais utilisee, et omettait
         les 800 et 900 pourtant presentes dans styles.css : le navigateur les
         fabriquait en faux-gras. -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..900&family=Manrope:wght@500..800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css?v=${SITE.assetVersion}" />
    ${jsonLdScript(schemas)}
  </head>
  <body class="${langConfig.dir === "rtl" ? "rtl" : ""}">
    <div class="page-glow page-glow-left" aria-hidden="true"></div>
    <div class="page-glow page-glow-right" aria-hidden="true"></div>

    ${renderHeader(lang, basePath)}

    <main>
      ${bodyHtml}
    </main>

    ${renderFooter(lang)}
    ${renderStickyWhatsApp(lang)}

    <script src="/nav.js?v=${SITE.assetVersion}" defer></script>
    ${extraScripts}
  </body>
</html>
`;
}

module.exports = { renderPage, getNav };
