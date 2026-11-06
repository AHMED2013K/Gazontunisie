// Execute quote.js dans un DOM minimal simule.
//
// Ce que ce test protege : le formulaire de devis ne doit JAMAIS afficher ni
// transmettre de montant. Le client calcule seul a partir des tarifs publies,
// et c'est le vendeur qui chiffre apres reception de la demande. Une
// reintroduction de prix dans quote.js ou quote-config.js fait echouer ce test.
const path = require("path");
const REPO = path.join(__dirname, "..");

const { quoteConfig } = require(path.join(REPO, "src/data/quote-config.js"));
const { SITE } = require(path.join(REPO, "src/data/site.js"));

// --- DOM minimal ---------------------------------------------------------
function el(extra = {}) {
  return Object.assign(
    {
      hidden: false,
      innerHTML: "",
      textContent: "",
      href: "",
      _listeners: {},
      addEventListener(t, fn) {
        (this._listeners[t] = this._listeners[t] || []).push(fn);
      },
      dispatch(t) {
        (this._listeners[t] || []).forEach((fn) => fn({ preventDefault() {} }));
      },
    },
    extra
  );
}

const cfg = quoteConfig("fr");

const surfaceInput = el({ value: "" });
const terreSelect = el({ value: "" });
const typeSelect = el({
  value: "paspalum",
  selectedIndex: 0,
  options: [{ text: "Gazon Paspalum" }],
});
const cta = el({
  _attrs: {},
  classList: { _c: {}, add(c) { this._c[c] = true; }, remove(c) { delete this._c[c]; }, contains(c) { return !!this._c[c]; } },
  setAttribute(k, v) { this._attrs[k] = v; },
  getAttribute(k) { return Object.prototype.hasOwnProperty.call(this._attrs, k) ? this._attrs[k] : null; },
  removeAttribute(k) { delete this._attrs[k]; if (k === "href") this.href = ""; },
});
const errorEl = el({ hidden: true });
const configEl = el({ textContent: JSON.stringify(cfg) });

const section = {
  querySelector(sel) {
    if (sel === "[data-quote-config]") return configEl;
    if (sel === "[data-quote-cta]") return cta;
    if (sel === "[data-quote-error]") return errorEl;
    return null;
  },
};

const form = el({
  elements: { surface: surfaceInput, terre: terreSelect, type: typeSelect },
  closest: () => section,
});

global.document = { querySelector: (s) => (s === "[data-quote]" ? form : null) };

require(path.join(REPO, "quote.js"));

// --- Verifications -------------------------------------------------------
let echecs = 0;

function ok(label) {
  console.log(`  ok  ${label}`);
}
function ko(label, detail) {
  console.log(`  ECHEC ${label}${detail ? " -> " + detail : ""}`);
  echecs++;
}

function messageEnvoye() {
  return decodeURIComponent(String(cta.href).split("?text=")[1] || "");
}

function remplit(surface, epaisseur) {
  surfaceInput.value = String(surface);
  terreSelect.value = epaisseur ? String(epaisseur) : "";
  form.dispatch("input");
}

// 1. Aucun montant dans la config serialisee
const configBrut = JSON.stringify(cfg);
const MONTANT = /\b\d+\s*(DT|دينار)\b|"(price|prix|total|montant)/i;
if (MONTANT.test(configBrut)) {
  ko("config sans montant", configBrut.match(MONTANT)[0]);
} else {
  ok("la config serialisee ne contient aucun montant");
}

// 2. Aucun champ de prix expose
["threshold", "priceBelow", "priceFrom", "prixTerreM3"].forEach((champ) => {
  if (Object.prototype.hasOwnProperty.call(cfg, champ)) {
    ko(`la config ne doit pas exposer "${champ}"`);
  }
});
if (echecs === 0) ok("aucun champ de tarification expose a la page");

// 2 bis. Toute surface est commandable : sous 50 m2 le tarif differe, mais
// la demande doit pouvoir partir. Un blocage ici serait une regression.
[1, 20, 30, 49, 50, 200].forEach((surface) => {
  remplit(surface, 0);
  if (cta.getAttribute("aria-disabled") === "true" || !cta.href) {
    ko(`${surface} m² doit rester commandable`, `href="${cta.href}"`);
  } else if (!messageEnvoye().includes(`${surface} m²`)) {
    ko(`le message doit reprendre ${surface} m²`, messageEnvoye());
  }
});
if (echecs === 0) ok("toute surface reste commandable, sous comme au-dessus de 50 m²");

// 3. Le message compose reprend la demande, sans aucun chiffrage
remplit(60, 15);
const msg = messageEnvoye();
const attendus = ["60 m²", "Gazon Paspalum", "15 cm"];
attendus.forEach((frag) => {
  if (!msg.includes(frag)) ko(`le message doit contenir "${frag}"`, msg);
});
if (MONTANT.test(msg)) {
  ko("le message ne doit contenir aucun montant", msg.match(MONTANT)[0]);
} else {
  ok("message avec terre : demande complete, aucun montant");
}

// 4. Sans terre vegetale, la ligne correspondante disparait
remplit(80, 0);
const msgSansTerre = messageEnvoye();
if (msgSansTerre.includes("cm")) {
  ko("sans terre, le message ne doit pas mentionner d'epaisseur", msgSansTerre);
} else if (!msgSansTerre.includes("80 m²")) {
  ko("sans terre, le message doit garder la surface", msgSansTerre);
} else {
  ok("message sans terre : ligne epaisseur absente");
}

// 5. Sans surface saisie, on retombe sur le message generique
surfaceInput.value = "";
form.dispatch("input");
if (!messageEnvoye().startsWith(cfg.labels.fallbackMessage.slice(0, 20))) {
  ko("etat vide -> message generique", messageEnvoye());
} else {
  ok("etat vide : message generique conserve");
}

// 6. Le lien pointe bien vers le WhatsApp de Gazon Tunisie
if (!String(cta.href).startsWith("https://wa.me/" + SITE.whatsappNumber)) {
  ko("lien WhatsApp", cta.href);
} else {
  ok("lien WhatsApp vers le numero du site");
}

// 7. Les trois langues exposent les memes garanties
["fr", "en", "ar"].forEach((lang) => {
  const c = JSON.stringify(quoteConfig(lang));
  if (MONTANT.test(c)) ko(`config ${lang} sans montant`, c.match(MONTANT)[0]);
});
ok("les configs fr/en/ar sont toutes sans montant");

console.log(
  echecs === 0
    ? "\nOK : le formulaire de devis ne chiffre rien"
    : `\nECHEC : ${echecs} probleme(s)`
);
process.exit(echecs === 0 ? 0 : 1);
