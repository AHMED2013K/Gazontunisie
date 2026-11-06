// Données globales du site : identité de marque, coordonnées (NAP), horaires,
// tarifs des produits phares et réseaux sociaux. Modifier ici se répercute
// automatiquement sur tout le site généré (schema.org, footer, CTA...).

// Incrémenter cette valeur à chaque modification de styles.css / app.js / nav.js /
// contact.js pour forcer les navigateurs à récupérer la nouvelle version au lieu
// de servir un fichier mis en cache (évite un site "cassé" après une mise à jour).
const ASSET_VERSION = "22";

// Le tarif du gazon vient de src/data/pricing.js, source unique de vérité :
// aucun prix de gazon ne doit être écrit en dur ailleurs.
const {
  GAZON_TIER_THRESHOLD,
  GAZON_PRICE_BELOW,
  GAZON_PRICE_FROM,
  GAZON_TYPES,
} = require("./pricing");

const SITE = {
  name: "Gazon Tunisie",
  assetVersion: ASSET_VERSION,
  legalName: "Gazon Tunisie",
  domain: "https://gazontunisie.shop",
  defaultLocale: "fr_TN",
  language: "fr",
  country: "Tunisie",
  description:
    "Gazon Tunisie, basé à Grombalia dans le gouvernorat de Nabeul, propose du gazon Paspalum, du gazon américain, la pose et la livraison sur toute la Tunisie.",

  phoneDisplay: "+216 58 233 020",
  phoneE164: "+21658233020",
  whatsappNumber: "21658233020",
  email: "contact@dcbag.net",

  address: {
    locality: "Grombalia",
    region: "Nabeul",
    streetAddress: "Grombalia",
    country: "TN",
    countryName: "Tunisie",
  },

  hours: {
    opens: "08:00",
    closes: "19:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    label: "Tous les jours, 8h - 19h",
  },

  social: {
    instagram: "",
    facebook: "https://www.facebook.com/",
    whatsapp: "https://wa.me/21658233020",
    googleMaps:
      "https://www.google.com/maps/search/Grombalia+Nabeul+Tunisie",
  },

  logo: "/logo.png",
  defaultOgImage: "/photo-principale.png",

  products: {
    gazon: {
      name: "Gazon américain & Paspalum",
      // Prix dégressif selon la surface TOTALE commandée, identique pour les
      // deux types (américain et Paspalum). `price` reste le tarif le plus bas :
      // c'est celui que le schema.org déclare comme lowPrice.
      price: GAZON_PRICE_FROM,
      priceBelow: null,
      priceFrom: GAZON_PRICE_FROM,
      tierThreshold: GAZON_TIER_THRESHOLD,
      types: GAZON_TYPES,
      currency: "TND",
      unit: "m²",
      // Étiquette courte, purement numérique, utilisable dans les trois langues.
      // Ne jamais y mettre de < ou > : cette chaîne est injectée telle quelle dans
      // le HTML (y compris dans des attributs alt), un chevron casserait le balisage.
      priceLabel: `Sur devis sous ${GAZON_TIER_THRESHOLD} m² · à partir de ${GAZON_PRICE_FROM} DT/m² dès ${GAZON_TIER_THRESHOLD} m²`,
      // Formulations complètes, une par langue, pour les phrases rédigées.
      priceLabels: {
        fr: `Sur devis sous ${GAZON_TIER_THRESHOLD} m², à partir de ${GAZON_PRICE_FROM} DT/m² dès ${GAZON_TIER_THRESHOLD} m²`,
        en: `Quoted under ${GAZON_TIER_THRESHOLD} sqm, from ${GAZON_PRICE_FROM} DT/sqm from ${GAZON_TIER_THRESHOLD} sqm`,
        ar: `عرض سعر دون ${GAZON_TIER_THRESHOLD} م²، ابتداءً من ${GAZON_PRICE_FROM} دينار/م² من ${GAZON_TIER_THRESHOLD} م²`,
      },
      image: "/paspalum-04.jpeg",
    },
      palmier: {
      name: "Palmier décoratif",
      price: 500,
      currency: "TND",
      unit: "m",
      priceLabel: "500 DT / m",
      deliveryNote: "Livraison calculée selon votre adresse, communiquée avant confirmation de commande.",
      image: "/palmier-classique.jpeg",
    },
  },

  credit: {
    label: "DCB Authority Group",
    url: "https://dcbag.net/",
  },
};

function buildWhatsAppUrl(message) {
  const rawMessage = String(message || "").trim();
  const normalizedMessage = /^(Bonjour|Hello|مرحباً)\s+Gazon Tunisie/i.test(rawMessage)
    ? rawMessage
    : `Bonjour Gazon Tunisie, ${rawMessage.replace(/Gazon Tunisie/gi, "").replace(/^[,،\s]+/, "")}`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(normalizedMessage)}`;
}

function absoluteUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${clean}`;
}

module.exports = { SITE, buildWhatsAppUrl, absoluteUrl };
