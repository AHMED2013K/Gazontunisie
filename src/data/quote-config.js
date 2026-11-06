// Configuration du formulaire de demande de devis, sérialisée dans la page et
// lue par /quote.js.
//
// IMPORTANT : ce formulaire ne calcule RIEN et n'affiche AUCUN montant. Le
// client fait son propre calcul à partir des tarifs publiés sur la page ; le
// formulaire ne sert qu'à composer proprement sa demande WhatsApp. Ne pas y
// réintroduire de prix, de total ni de sous-total : c'est le vendeur qui
// chiffre, après réception de la demande.
const { SITE } = require("./site");
const { GAZON_TYPES, TERRE_PACKS } = require("./pricing");

const LABELS = {
  fr: {
    surface: "Surface de gazon à couvrir (m²)",
    type: "Type de gazon naturel",
    service: "Mode de commande",
    services: ["Gazon avec livraison seulement", "Gazon avec livraison et pose", "Retrait du gazon à Grombalia"],
    terre: "Terre végétale (épaisseur)",
    terreNone: "Sans terre végétale",
    terreOption: (cm) => `${cm} cm d'épaisseur`,
    cta: "Envoyer ma demande sur WhatsApp",
    note: "Le prix et les frais de livraison vous sont communiqués par WhatsApp avant toute confirmation de commande.",
      fallbackMessage: "Bonjour Gazon Tunisie, je souhaite un devis pour du gazon naturel. Voici ma surface : ",
    message: ({ surface, type, service, terre }) =>
      `Bonjour Gazon Tunisie, je souhaite un devis.\n` +
      `• Gazon naturel : ${type}\n` +
      `• Surface : ${surface} m²\n` +
      `• Mode choisi : ${service}\n` +
      (terre ? `• Terre végétale : ${terre} cm\n` : "") +
      `Pouvez-vous me communiquer le prix et les frais de livraison ?`,
  },
  en: {
    surface: "Lawn area to cover (sqm)",
    type: "Type of natural lawn",
    service: "Order option",
    services: ["Lawn with delivery only", "Lawn with delivery and installation", "Collect the lawn in Grombalia"],
    terre: "Topsoil (depth)",
    terreNone: "No topsoil",
    terreOption: (cm) => `${cm} cm deep`,
    cta: "Send my request on WhatsApp",
    note: "The price and delivery fees are confirmed on WhatsApp before you place your order.",
      fallbackMessage: "Hello Gazon Tunisie, I would like a quote for natural lawn. Here is my area: ",
    message: ({ surface, type, service, terre }) =>
      `Hello Gazon Tunisie, I would like a quote.\n` +
      `• Natural lawn: ${type}\n` +
      `• Area: ${surface} sqm\n` +
      `• Selected option: ${service}\n` +
      (terre ? `• Topsoil: ${terre} cm\n` : "") +
      `Could you confirm the price and the delivery fees?`,
  },
  ar: {
    surface: "مساحة العشب المطلوب تغطيتها (م²)",
    type: "نوع العشب الطبيعي",
    service: "طريقة الطلب",
    services: ["عشب مع التوصيل فقط", "عشب مع التوصيل والتركيب", "استلام العشب من قرمبالية"],
    terre: "التربة الزراعية (السمك)",
    terreNone: "دون تربة زراعية",
    terreOption: (cm) => `سمك ${cm} سم`,
    cta: "أرسلوا طلبي عبر واتساب",
    note: "يُبلَّغ السعر ومصاريف التوصيل عبر واتساب قبل تأكيد أي طلب.",
      fallbackMessage: "مرحباً Gazon Tunisie، أود عرض سعر لعشب طبيعي. إليكم مساحتي: ",
    message: ({ surface, type, service, terre }) =>
      `مرحباً، أود عرض سعر من Gazon Tunisie.\n` +
      `• عشب طبيعي: ${type}\n` +
      `• المساحة: ${surface} م²\n` +
      `• طريقة الطلب: ${service}\n` +
      (terre ? `• تربة زراعية: ${terre} سم\n` : "") +
      `هل يمكنكم إبلاغي بالسعر ومصاريف التوصيل؟`,
  },
};

// Les fonctions ne sont pas sérialisables en JSON : on les applique ici pour
// produire des gabarits texte que /quote.js remplit par simple substitution.
function quoteConfig(lang) {
  const L = LABELS[lang];
  return {
    lang,
    whatsappNumber: SITE.whatsappNumber,
    types: GAZON_TYPES.map((t) => ({ key: t.key, label: t.t[lang] })),
    services: L.services.map((label, index) => ({ key: String(index + 1), label })),
    packs: TERRE_PACKS.map((p) => ({
      epaisseurCm: p.epaisseurCm,
      label: L.terreOption(p.epaisseurCm),
    })),
    labels: {
      surface: L.surface,
      type: L.type,
      service: L.service,
      terre: L.terre,
      terreNone: L.terreNone,
      cta: L.cta,
      note: L.note,
      fallbackMessage: L.fallbackMessage,
      // Gabarits : {surface}, {type}, {terre}
      message: L.message({ surface: "{surface}", type: "{type}", service: "{service}", terre: "{terre}" }),
      messageNoTerre: L.message({ surface: "{surface}", type: "{type}", service: "{service}", terre: null }),
    },
  };
}

module.exports = { quoteConfig };
