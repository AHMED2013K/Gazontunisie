// Générateurs de données structurées schema.org (JSON-LD).
const { SITE, absoluteUrl } = require("../data/site");

function jsonLdScript(data) {
  const payload = Array.isArray(data) ? data : [data];
  return `<script type="application/ld+json">${JSON.stringify(
    payload.length === 1 ? payload[0] : payload
  )}</script>`;
}

function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: absoluteUrl(SITE.logo),
    image: [
      absoluteUrl(SITE.defaultOgImage),
      absoluteUrl("/chantier-americain-after.jpeg"),
      absoluteUrl("/palmier-classique.jpeg"),
    ],
    telephone: SITE.phoneE164,
    email: SITE.email,
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.whatsapp]
      .filter((url) => url && url !== "https://www.facebook.com/"),
    knowsAbout: [
      "Gazon Paspalum en Tunisie",
      "Gazon américain en Tunisie",
      "Pose de gazon naturel",
      "Livraison de gazon dans le Grand Tunis",
      "Palmiers décoratifs en Tunisie",
    ],
  };
}

function localBusiness({ areaServed } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    url: SITE.domain,
    image: [
      absoluteUrl(SITE.defaultOgImage),
      absoluteUrl("/chantier-americain-after.jpeg"),
      absoluteUrl("/palmier-classique.jpeg"),
    ],
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "9 DT - 500 DT",
    currenciesAccepted: "TND",
    paymentAccepted: "Acompte à la confirmation, solde à la livraison ou après la pose",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      streetAddress: SITE.address.streetAddress,
      addressCountry: SITE.address.country,
    },
    hasMap: SITE.social.googleMaps,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "sales",
      availableLanguage: ["French", "Arabic", "English"],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SITE.hours.days,
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
    areaServed: (areaServed || ["Tunis", "Ariana", "Ben Arous", "La Manouba", "Nabeul", "Tunisie"]).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.whatsapp]
      .filter((url) => url && url !== "https://www.facebook.com/"),
    knowsAbout: [
      "Gazon Paspalum",
      "Gazon américain",
      "Pose et livraison de gazon",
      "Palmiers décoratifs",
    ],
  };
}

function website(lang = "fr-TN") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    inLanguage: lang,
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}

function webPage({ path, name, description, lang = "fr-TN" }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${SITE.domain}/#website` },
    about: { "@id": `${SITE.domain}/#localbusiness` },
  };
}

function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

// Aucun shippingDetails n'est émis : les frais de livraison dépendent de l'adresse
// du client et sont communiqués avant confirmation. Ne jamais réintroduire de
// shippingRate à 0 ni de montant estimé ici — ce serait une promesse non tenue
// déclarée à Google.
// `priceHigh` : à passer uniquement pour un produit à tarif dégressif. Le schema
// devient alors une fourchette (AggregateOffer lowPrice/highPrice) au lieu d'un
// prix unique — déclarer 9 DT/m² seul serait faux pour une commande sous le seuil.
function product({ key, name, price, priceHigh, currency, unit, description, image, path }) {
  const isRange = typeof priceHigh === "number" && priceHigh !== price;
  const offer = {
    "@type": isRange ? "AggregateOffer" : "Offer",
    url: absoluteUrl(path),
    priceCurrency: currency,
    ...(isRange
      ? { lowPrice: String(Math.min(price, priceHigh)), highPrice: String(Math.max(price, priceHigh)) }
      : { price: String(price) }),
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    validFrom: "2026-01-01",
    seller: { "@id": `${SITE.domain}/#organization` },
    // Produits vivants / coupés sur mesure : pas de retour possible (confirmé par le client).
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      applicableCountry: "TN",
    },
    ...(unit ? { eligibleQuantity: { "@type": "QuantitativeValue", unitText: unit } } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.domain}${path}#product`,
    name,
    description,
    image: absoluteUrl(image),
    brand: { "@type": "Brand", name: SITE.name },
    sku: key,
    offers: offer,
  };
}

function service({ name, description, path, areaServed }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.domain}${path}#service`,
    serviceType: name,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE.domain}/#organization` },
    areaServed: (areaServed || ["Grand Tunis", "Nabeul"]).map((areaName) => ({
      "@type": "AdministrativeArea",
      name: areaName,
    })),
  };
}

function faqPage(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function article({ headline, description, datePublished, dateModified, image, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@id": `${SITE.domain}/#organization` },
    publisher: { "@id": `${SITE.domain}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
  };
}

module.exports = {
  jsonLdScript,
  organization,
  localBusiness,
  website,
  webPage,
  breadcrumbList,
  product,
  service,
  faqPage,
  article,
};
