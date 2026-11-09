const { SITE, buildWhatsAppUrl } = require("../data/site");
const { sizeAttrs } = require("../data/image-size");

function renderCta({ heading, text, buttonLabel, whatsappMessage, secondary }) {
  return `
    <section class="content-cta">
      <div>
        <h2>${heading}</h2>
        <p>${text}</p>
      </div>
      <div class="content-cta-actions">
        <a class="pill-button" href="${buildWhatsAppUrl(whatsappMessage)}" target="_blank" rel="noreferrer">${buttonLabel}</a>
        ${secondary ? `<a class="pill-button pill-button-ghost" href="${secondary.path}">${secondary.label}</a>` : ""}
      </div>
    </section>`;
}

function renderText({ h2, paragraphs, id }) {
  const safeParagraphs = Array.isArray(paragraphs) ? paragraphs : [];
  return `
    <section class="content-block"${id ? ` id="${id}"` : ""}>
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${safeParagraphs.map((p) => `<p>${p}</p>`).join("")}
    </section>`;
}

function renderList({ h2, intro, items, ordered }) {
  const safeItems = Array.isArray(items) ? items : [];
  const Tag = ordered ? "ol" : "ul";
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${intro ? `<p>${intro}</p>` : ""}
      <${Tag} class="content-list">
        ${safeItems.map((item) => `<li>${item}</li>`).join("")}
      </${Tag}>
    </section>`;
}

function renderTable({ h2, headers, rows }) {
  const safeHeaders = Array.isArray(headers) ? headers : [];
  const safeRows = Array.isArray(rows) ? rows : [];
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      <div class="table-wrap">
        <table class="content-table">
          <thead><tr>${safeHeaders.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>
            ${safeRows.map((row) => `<tr>${(Array.isArray(row) ? row : []).map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>`;
}

function renderFaq({ h2, items }) {
  return `
    <section class="content-block faq-block">
      <h2>${h2 || "Questions fréquentes"}</h2>
      <div class="faq-list">
        ${items
          .map(
            (item) => `
          <details class="faq-item">
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderRelated({ h2, links }) {
  return `
    <section class="content-block related-links">
      <h2>${h2 || "Pages liées"}</h2>
      <div class="related-grid">
        ${links
          .map(
            (link) => `
          <a class="related-card" href="${link.path}">
            <span>${link.label}</span>
            ${link.description ? `<small>${link.description}</small>` : ""}
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderImageText({ h2, paragraphs, image, reverse, cta }) {
  return `
    <section class="content-block feature-section${reverse ? " feature-section-reverse" : ""}">
      <div class="feature-copy">
        ${h2 ? `<h2>${h2}</h2>` : ""}
        ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
        ${
          cta
            ? `<a class="pill-button" href="${buildWhatsAppUrl(cta.whatsappMessage)}" target="_blank" rel="noreferrer">${cta.label}</a>`
            : ""
        }
      </div>
      <div class="feature-media">
        <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async"${sizeAttrs(image.src)} />
      </div>
    </section>`;
}

function renderCards({ h2, intro, cards }) {
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${intro ? `<p>${intro}</p>` : ""}
      <div class="card-grid">
        ${cards
          .map(
            (card) => `
          <a class="info-card" href="${card.path}">
            ${card.image ? `<div class="info-card-image"><img src="${card.image}" alt="${card.title}" loading="lazy" decoding="async"${sizeAttrs(card.image)} /></div>` : ""}
            <div class="info-card-body">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderAvailability(keys, lang = "fr") {
  const statusLabels = {
    available: { fr: "Produit disponible", en: "Product available", ar: "المنتج متوفر" },
    out: { fr: "Produit hors stock", en: "Out of stock", ar: "المنتج غير متوفر" },
  };
  const dateLabels = { fr: "Dernière mise à jour", en: "Last updated", ar: "آخر تحديث" };
  return `<div class="availability-list" aria-label="Disponibilité des produits">${keys.map((key) => {
    const item = SITE.inventory[key];
    if (!item) return "";
    const status = item.available ? statusLabels.available[lang] : statusLabels.out[lang];
    return `<span class="availability-badge ${item.available ? "is-available" : "is-out-of-stock"}"><strong>${item[lang] || item.fr} : ${status}</strong><small>${dateLabels[lang]} : ${SITE.inventory.lastUpdated}</small></span>`;
  }).join("")}</div>`;
}

// Formulaire de demande de devis. Il n'affiche AUCUN montant : le client fait
// son propre calcul à partir des tarifs publiés sur la page, le formulaire ne
// sert qu'à composer sa demande WhatsApp, que le vendeur chiffre ensuite.
// Les libellés traduits sont sérialisés dans un <script type="application/json">
// pour que /quote.js ne contienne aucune traduction en dur.
function renderQuote({ h2, intro, config }) {
  return `
    <section class="content-block quote-calc" id="devis">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${intro ? `<p>${intro}</p>` : ""}
      <script type="application/json" data-quote-config>${JSON.stringify(config).replace(/</g, "\\u003c")}</script>
      <form class="quote-form" data-quote novalidate>
        <label class="quote-field">
          <span>${config.labels.surface}</span>
          <input type="number" name="surface" min="1" step="1" inputmode="numeric" placeholder="50" />
        </label>
        <label class="quote-field">
          <span>${config.labels.city}</span>
          <input type="text" name="city" autocomplete="address-level2" placeholder="${config.labels.cityPlaceholder}" />
        </label>
        <label class="quote-field">
          <span>${config.labels.type}</span>
          <select name="type">
            ${config.types.map((t) => `<option value="${t.key}">${t.label}</option>`).join("")}
          </select>
        </label>
          <label class="quote-field">
            <span>${config.labels.service}</span>
            <select name="service">
              ${config.services.map((s) => `<option value="${s.key}">${s.label}</option>`).join("")}
            </select>
          </label>
        <label class="quote-field">
          <span>${config.labels.terre}</span>
          <select name="terre">
            <option value="">${config.labels.terreNone}</option>
            ${config.packs.map((p) => `<option value="${p.epaisseurCm}">${p.label}</option>`).join("")}
          </select>
        </label>
      </form>
      <div class="content-cta-actions">
        <a class="pill-button" data-quote-cta href="${buildWhatsAppUrl(config.labels.fallbackMessage)}" target="_blank" rel="noreferrer">${config.labels.cta}</a>
      </div>
      <p class="quote-note">${config.labels.note}</p>
    </section>`;
}

const RENDERERS = {
  text: renderText,
  list: renderList,
  table: renderTable,
  cta: renderCta,
  faq: renderFaq,
  related: renderRelated,
  quote: renderQuote,
  "image-text": renderImageText,
  cards: renderCards,
};

function renderSections(sections = []) {
  return sections.map((section) => RENDERERS[section.type](section)).join("\n");
}

function collectFaqItems(sections = []) {
  return sections.filter((s) => s.type === "faq").flatMap((s) => s.items);
}

module.exports = { renderSections, collectFaqItems, renderCards, renderCta, renderFaq, renderAvailability };
