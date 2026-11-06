const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");
const { PACK_BASE_SURFACE, TERRE_PACKS, quote } = require("../data/pricing");

const HERO_IMAGE = SITE.products.terreVegetale.image;
const PRIX_TERRE_M3 = SITE.products.terreVegetale.price;

// La terre végétale n'est plus vendue seule : elle n'existe qu'en pack adossé
// à une commande de gazon. Les montants ci-dessous sont calculés à partir de
// pricing.js (source unique) et jamais écrits en dur, pour qu'un changement de
// tarif ne puisse pas laisser cette page en contradiction avec le reste du site.
const PACKS = TERRE_PACKS.map((pack) => ({
  ...pack,
  devis: quote({
    surfaceM2: PACK_BASE_SURFACE,
    epaisseurCm: pack.epaisseurCm,
    prixTerreM3: PRIX_TERRE_M3,
  }),
}));

/** 1200 -> "1 200" (espace insécable fine, lisible dans les trois langues). */
function fmt(n, lang) {
  const [entier, dec] = String(n).split(".");
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (!dec) return groupe;
  return groupe + (lang === "fr" ? "," : ".") + dec;
}

function packRows(lang) {
  const unit = { fr: "cm", en: "cm", ar: "سم" }[lang];
  return PACKS.map((p) => [
    `${p.epaisseurCm} ${unit}`,
    `${fmt(p.devis.terre.volumeM3, lang)} m³`,
    `${fmt(p.devis.terre.total, lang)} DT`,
    `${fmt(p.devis.gazon.total, lang)} DT`,
    `${fmt(p.devis.sousTotal, lang)} DT`,
  ]);
}

const TEXT = {
  fr: {
    title: "Terre Végétale en Pack avec Gazon | Gazon Tunisie Tunisie",
    metaDescription: "La terre végétale Gazon Tunisie s'achète en pack avec votre gazon naturel, à 100 DT/m³. Packs 10, 15 ou 20 cm pour 50 m² de gazon, livrés en Tunisie.",
    eyebrow: "Terre végétale",
    h1: "Terre végétale : en pack avec votre gazon naturel",
    heroAlt: "terre végétale livrée avec du gazon naturel en Tunisie",
    intro: "La terre végétale Gazon Tunisie n'est pas vendue seule : elle accompagne une commande de gazon naturel, pour préparer le sol avant la pose. Elle est facturée 100 DT le mètre cube (m³), et les frais de livraison sont calculés selon votre adresse puis communiqués avant confirmation de commande.",
    breadcrumbLabel: "Terre végétale",
    packH2: "Nos packs terre végétale + gazon naturel",
    packIntro: `Les packs de référence ci-dessous couvrent ${PACK_BASE_SURFACE} m² de gazon naturel. Le volume de terre dépend de l'épaisseur que vous souhaitez apporter :`,
    packHeaders: [`Épaisseur de terre (pour ${PACK_BASE_SURFACE} m² de gazon)`, "Volume de terre", "Terre végétale", "Gazon naturel", "Total hors livraison"],
    packNote: "Les totaux n'incluent pas la livraison, qui dépend de votre adresse et vous est communiquée avant toute confirmation de commande.",
    otherH2: "Pour une autre surface que 50 m²",
    otherPa: [
      "Le volume de terre se calcule simplement : surface à couvrir multipliée par l'épaisseur souhaitée. Pour 80 m² en 15 cm, comptez par exemple 80 × 0,15 = 12 m³ de terre végétale.",
      "Le gazon, lui, suit son tarif dégressif : 15 DT/m² en dessous de 50 m², 9 DT/m² à partir de 50 m². Indiquez-nous votre surface et l'épaisseur souhaitée par WhatsApp, nous vous établissons le devis complet.",
    ],
    whatH2: "Qu'est-ce que la terre végétale et pourquoi l'ajouter sous un gazon ?",
    whatPa: [
      "La terre végétale est la couche de terre fertile prélevée en surface, riche en matière organique. Contrairement au terreau (souvent allégé et enrichi artificiellement pour les pots), elle sert de base pour préparer un sol en pleine terre avant d'y installer du gazon.",
      "Elle est particulièrement utile avant la pose d'un gazon en rouleau sur un sol pauvre ou sableux : elle donne aux racines une épaisseur meuble et nourrissante dans laquelle s'installer, ce qui améliore nettement la reprise après la pose.",
    ],
    deliveryH2: "Livraison dans toute la Tunisie",
    deliveryPa: [
      "Les packs sont livrables partout en Tunisie — Grand Tunis, Nabeul, Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet et autres régions. Le tarif de livraison est calculé selon la distance depuis notre dépôt de Nabeul et le volume commandé, puis communiqué avant confirmation de commande.",
    ],
    ctaHeading: "Demandez votre pack terre végétale + gazon",
    ctaText: "Indiquez-nous la surface de gazon et l'épaisseur de terre souhaitée : nous calculons votre devis complet.",
    ctaButton: "Demander mon devis",
    ctaMessage: "Bonjour, je souhaite un pack gazon naturel + terre végétale. Voici ma surface et l'épaisseur souhaitée : ",
    ctaSecondary: "Voir le gazon naturel",
    faqH2: "Questions fréquentes sur la terre végétale",
    faq: [
      ["Puis-je acheter de la terre végétale seule ?", "Non. La terre végétale Gazon Tunisie est proposée uniquement en complément d'une commande de gazon naturel, pour préparer le sol avant la pose. Si vous souhaitez du gazon et de la terre, indiquez-nous la surface et l'épaisseur souhaitée : nous vous établissons un devis complet."],
      ["Quel est le prix de la terre végétale ?", "Elle est facturée 100 DT le mètre cube (m³), en complément du gazon. Pour 50 m² de gazon, un pack de 10 cm représente 5 m³ de terre, soit 500 DT, auxquels s'ajoute le prix du gazon."],
      ["Quelle épaisseur de terre choisir ?", "Cela dépend de l'état de votre sol. Nous proposons trois épaisseurs de référence — 10, 15 et 20 cm. Décrivez-nous votre terrain par WhatsApp, nous vous orientons vers l'épaisseur adaptée."],
      ["Quelle différence entre terre végétale et terreau ?", "La terre végétale est une terre naturelle de pleine terre, utilisée pour préparer un sol de jardin en grande quantité. Le terreau est un substrat plus léger, souvent enrichi, conçu pour la culture en pot ou en jardinière."],
      ["Comment se passe la livraison ?", "Contactez-nous par WhatsApp avec votre ville, la surface de gazon et l'épaisseur de terre souhaitée. Le tarif de livraison vous est communiqué avant toute confirmation de commande."],
    ],
  },
  en: {
    title: "Topsoil in a Pack with Lawn | Gazon Tunisie Tunisia",
    metaDescription: "Gazon Tunisie topsoil comes as a pack with your natural lawn, at 100 DT/m³. Packs of 10, 15 or 20 cm for 50 sqm of lawn, delivered across Tunisia.",
    eyebrow: "Topsoil",
    h1: "Topsoil: in a pack with your natural lawn",
    heroAlt: "topsoil delivered with natural lawn in Tunisia",
    intro: "Gazon Tunisie topsoil is not sold on its own: it comes with a natural lawn order, to prepare the ground before laying. It is charged at 100 DT per cubic metre (m³), and delivery fees are calculated for your address and confirmed before you place your order.",
    breadcrumbLabel: "Topsoil",
    packH2: "Our topsoil + natural lawn packs",
    packIntro: `The reference packs below cover ${PACK_BASE_SURFACE} sqm of natural lawn. The soil volume depends on the depth you want to add:`,
    packHeaders: [`Soil depth (for ${PACK_BASE_SURFACE} sqm of lawn)`, "Soil volume", "Topsoil", "Natural lawn", "Total excluding delivery"],
    packNote: "Totals exclude delivery, which depends on your address and is confirmed before you place your order.",
    otherH2: "For an area other than 50 sqm",
    otherPa: [
      "The soil volume is a simple calculation: the area to cover multiplied by the depth you want. For 80 sqm at 15 cm, that is 80 × 0.15 = 12 m³ of topsoil.",
      "The lawn follows its tapering rate: 15 DT/sqm below 50 sqm, 9 DT/sqm from 50 sqm. Send us your area and the depth you want on WhatsApp and we will put together the full quote.",
    ],
    whatH2: "What is topsoil and why add it under a lawn?",
    whatPa: [
      "Topsoil is the fertile surface layer of soil, rich in organic matter. Unlike potting soil (usually lighter and artificially enriched for containers), it is used as a base to prepare open ground before installing lawn.",
      "It is especially useful before laying rolled lawn on poor or sandy soil: it gives the roots a loose, nourishing layer to settle into, which markedly improves how well the lawn takes after laying.",
    ],
    deliveryH2: "Delivery across Tunisia",
    deliveryPa: [
      "Packs can be delivered anywhere in Tunisia — Greater Tunis, Nabeul, Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet and other regions. The delivery rate is based on the distance from our Nabeul depot and the volume ordered, and is given before you confirm your order.",
    ],
    ctaHeading: "Request your topsoil + lawn pack",
    ctaText: "Tell us your lawn area and the soil depth you want: we will work out your full quote.",
    ctaButton: "Request my quote",
    ctaMessage: "Hello, I would like a natural lawn + topsoil pack. Here is my area and the depth I want: ",
    ctaSecondary: "See natural lawn",
    faqH2: "Frequently asked questions about topsoil",
    faq: [
      ["Can I buy topsoil on its own?", "No. Gazon Tunisie topsoil is offered only alongside a natural lawn order, to prepare the ground before laying. If you want both lawn and soil, tell us the area and the depth you want and we will put together a full quote."],
      ["What is the price of topsoil?", "It is charged at 100 DT per cubic metre (m³), in addition to the lawn. For 50 sqm of lawn, a 10 cm pack means 5 m³ of soil, so 500 DT, on top of the price of the lawn."],
      ["Which soil depth should I choose?", "It depends on the state of your ground. We offer three reference depths — 10, 15 and 20 cm. Describe your plot on WhatsApp and we will point you to the right depth."],
      ["What is the difference between topsoil and potting soil?", "Topsoil is natural open-ground soil, used to prepare a garden's soil in large quantities. Potting soil is a lighter, often enriched substrate designed for growing in pots or planters."],
      ["How does delivery work?", "Contact us on WhatsApp with your city, the lawn area and the soil depth you want. The delivery rate is given before you confirm your order."],
    ],
  },
  ar: {
    title: "التربة الزراعية ضمن باقة مع العشب | Gazon Tunisie تونس",
    metaDescription: "تُقتنى التربة الزراعية من Gazon Tunisie ضمن باقة مع عشبكم الطبيعي، بسعر 100 دينار/م³. باقات 10 أو 15 أو 20 سم لـ 50 م² من العشب.",
    eyebrow: "التربة الزراعية",
    h1: "التربة الزراعية: ضمن باقة مع عشبكم الطبيعي",
    heroAlt: "تربة زراعية تُوصَّل مع العشب الطبيعي في تونس",
    intro: "لا تُباع التربة الزراعية من Gazon Tunisie بمفردها: فهي ترافق طلبية عشب طبيعي، لتحضير التربة قبل التركيب. تُحتسب بسعر 100 دينار للمتر المكعب (م³)، وتُحسب مصاريف التوصيل حسب عنوانكم وتُبلَّغ قبل تأكيد الطلب.",
    breadcrumbLabel: "التربة الزراعية",
    packH2: "باقاتنا: تربة زراعية + عشب طبيعي",
    packIntro: `تغطي الباقات المرجعية أدناه ${PACK_BASE_SURFACE} م² من العشب الطبيعي. يعتمد حجم التربة على السمك الذي ترغبون في إضافته:`,
    packHeaders: [`سمك التربة (لـ ${PACK_BASE_SURFACE} م² من العشب)`, "حجم التربة", "التربة الزراعية", "العشب الطبيعي", "المجموع دون التوصيل"],
    packNote: "لا تشمل المجاميع مصاريف التوصيل، التي تعتمد على عنوانكم وتُبلَّغ قبل تأكيد أي طلب.",
    otherH2: "لمساحة غير 50 م²",
    otherPa: [
      "يُحسب حجم التربة ببساطة: المساحة المطلوب تغطيتها مضروبة في السمك المرغوب. فلـ 80 م² بسمك 15 سم، احسبوا 80 × 0.15 = 12 م³ من التربة الزراعية.",
      "أما العشب فيتبع تعريفته المتناقصة: 15 دينار/م² دون 50 م²، و9 دينار/م² ابتداءً من 50 م². أرسلوا لنا مساحتكم والسمك المرغوب عبر واتساب، ونُعدّ لكم عرض السعر الكامل.",
    ],
    whatH2: "ما هي التربة الزراعية ولماذا تُضاف تحت العشب؟",
    whatPa: [
      "التربة الزراعية هي الطبقة السطحية الخصبة من التربة، الغنية بالمواد العضوية. على عكس التراب الجاهز (الأخف وزناً والمُثرى صناعياً للأصص عادة)، تُستعمل كأساس لتحضير تربة مفتوحة قبل تركيب العشب.",
      "تُعد مفيدة بشكل خاص قبل تركيب العشب على شكل لفائف على تربة فقيرة أو رملية: فهي تمنح الجذور طبقة هشة ومغذية تستقر فيها، مما يحسّن بوضوح التصاق العشب بعد التركيب.",
    ],
    deliveryH2: "توصيل في كل تونس",
    deliveryPa: [
      "الباقات قابلة للتوصيل في كل تونس — تونس الكبرى، نابل، سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات وجهات أخرى. تُحسب تعريفة التوصيل حسب المسافة من مستودعنا بنابل والحجم المطلوب، وتُبلَّغ قبل تأكيد الطلب.",
    ],
    ctaHeading: "اطلبوا باقتكم: تربة زراعية + عشب",
    ctaText: "أذكروا لنا مساحة العشب وسمك التربة المرغوب: نحسب لكم عرض السعر الكامل.",
    ctaButton: "اطلبوا عرض سعري",
    ctaMessage: "مرحباً، أود باقة عشب طبيعي + تربة زراعية. إليكم مساحتي والسمك المرغوب: ",
    ctaSecondary: "شاهدوا العشب الطبيعي",
    faqH2: "أسئلة شائعة حول التربة الزراعية",
    faq: [
      ["هل يمكنني شراء التربة الزراعية بمفردها؟", "لا. تُقترح التربة الزراعية من Gazon Tunisie فقط كمكمّل لطلبية عشب طبيعي، لتحضير التربة قبل التركيب. إذا رغبتم في العشب والتربة معاً، أذكروا لنا المساحة والسمك المرغوب: نُعدّ لكم عرض سعر كاملاً."],
      ["ما هو سعر التربة الزراعية؟", "تُحتسب بسعر 100 دينار للمتر المكعب (م³)، إضافة إلى العشب. فلـ 50 م² من العشب، تمثل باقة 10 سم حجماً قدره 5 م³ من التربة، أي 500 دينار، يُضاف إليها سعر العشب."],
      ["أي سمك تربة أختار؟", "يعتمد ذلك على حالة تربتكم. نقترح ثلاثة أسماك مرجعية — 10 و15 و20 سم. صفوا لنا أرضكم عبر واتساب، ونوجهكم إلى السمك المناسب."],
      ["ما الفرق بين التربة الزراعية والتراب الجاهز؟", "التربة الزراعية تربة طبيعية من الأرض المفتوحة، تُستعمل لتحضير تربة الحديقة بكميات كبيرة. أما التراب الجاهز فهو ركيزة أخف وزناً ومُثراة غالباً، مصممة للزراعة في أصص أو صناديق."],
      ["كيف يتم التوصيل؟", "تواصلوا معنا عبر واتساب مع مدينتكم ومساحة العشب وسمك التربة المرغوب. تُبلَّغ تعريفة التوصيل قبل تأكيد أي طلب."],
    ],
  },
};

// Pas de bloc `product:` ici : la terre végétale n'ayant plus d'existence
// commerciale autonome, déclarer une Offer schema.org pour elle laisserait
// Google proposer un produit qu'on ne vend pas seul.
function acheterTerreVegetalePage(lang) {
  const t = TEXT[lang];
  return renderContentPage({
    basePath: "/acheter-terre-vegetale/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: HERO_IMAGE, alt: t.heroAlt },
    breadcrumb: [{ label: t.breadcrumbLabel, path: localizedPath("/acheter-terre-vegetale/", lang) }],
    sections: [
      { type: "text", h2: t.packH2, paragraphs: [t.packIntro] },
      { type: "table", headers: t.packHeaders, rows: packRows(lang) },
      { type: "text", paragraphs: [t.packNote] },
      { type: "text", h2: t.otherH2, paragraphs: t.otherPa },
      { type: "text", h2: t.whatH2, paragraphs: t.whatPa },
      { type: "text", h2: t.deliveryH2, paragraphs: t.deliveryPa },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/gazon-tunisie/", lang) },
      },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/acheter-terre-vegetale/", lang), acheterTerreVegetalePage(lang));
}

module.exports = { build };
