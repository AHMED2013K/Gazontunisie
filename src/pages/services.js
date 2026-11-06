const { renderContentPage } = require("../templates/page");
const { localizedPath } = require("../data/i18n");

const HUB_TEXT = {
  fr: {
    label: "Services",
    title: "Nos services | Pose de gazon et plantation de palmier - Gazon Tunisie",
    metaDescription: "Gazon Tunisie ne se limite pas à la vente : nous proposons aussi la pose de gazon naturel et la plantation de palmiers décoratifs en Tunisie.",
    eyebrow: "Installation",
    h1: "Nos services d'installation",
    intro: "En plus de la vente de gazon naturel et de palmiers décoratifs, Gazon Tunisie propose également leur installation. Un service pensé pour les clients qui préfèrent confier la pose à une équipe expérimentée plutôt que de s'en charger eux-mêmes.",
    cards: [
      ["Pose de gazon en rouleau", "Préparation du sol et installation par notre équipe.", "/services/pose-gazon/", "/gazon.jpg"],
      ["Plantation de palmier", "Mise en terre professionnelle de votre palmier décoratif.", "/services/plantation-palmier/", "/palmier-eventail.jpeg"],
    ],
    relatedH2: "Voir aussi",
    related: [
      ["Gazon Tunisie", "/gazon-tunisie/", "Prix, zones de livraison, commande"],
      ["Palmier Tunisie", "/palmier-tunisie/", "Prix, livraison, commande"],
      ["Contact", "/contact/", "Discutez de votre projet avec nous"],
    ],
  },
  en: {
    label: "Services",
    title: "Our Services | Lawn Laying and Palm Tree Planting - Gazon Tunisie",
    metaDescription: "Gazon Tunisie is not just a seller: we also offer natural lawn laying and decorative palm tree planting in Tunisia.",
    eyebrow: "Installation",
    h1: "Our installation services",
    intro: "In addition to selling natural lawn and decorative palm trees, Gazon Tunisie also offers to install them. A service designed for clients who prefer to leave the laying to an experienced team rather than doing it themselves.",
    cards: [
      ["Rolled lawn laying", "Soil preparation and installation by our team.", "/services/pose-gazon/", "/gazon.jpg"],
      ["Palm tree planting", "Professional planting of your decorative palm tree.", "/services/plantation-palmier/", "/palmier-eventail.jpeg"],
    ],
    relatedH2: "See also",
    related: [
      ["Lawn Tunisia", "/gazon-tunisie/", "Price, delivery zones, ordering"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "Price, delivery, ordering"],
      ["Contact", "/contact/", "Discuss your project with us"],
    ],
  },
  ar: {
    label: "الخدمات",
    title: "خدماتنا | تركيب العشب وغرس النخيل - Gazon Tunisie",
    metaDescription: "لا تقتصر Gazon Tunisie على البيع: نقدم أيضاً تركيب العشب الطبيعي وغرس نخيل الزينة في تونس.",
    eyebrow: "التركيب",
    h1: "خدمات التركيب لدينا",
    intro: "بالإضافة إلى بيع العشب الطبيعي ونخيل الزينة، تقدم Gazon Tunisie أيضاً تركيبها. خدمة مصممة للعملاء الذين يفضلون تكليف فريق ذي خبرة بالتركيب بدلاً من القيام به بأنفسهم.",
    cards: [
      ["تركيب العشب على شكل لفائف", "تحضير التربة والتركيب من طرف فريقنا.", "/services/pose-gazon/", "/gazon.jpg"],
      ["غرس النخيل", "غرس احترافي لنخلة الزينة الخاصة بكم.", "/services/plantation-palmier/", "/palmier-eventail.jpeg"],
    ],
    relatedH2: "شاهدوا أيضاً",
    related: [
      ["عشب تونس", "/gazon-tunisie/", "السعر، مناطق التوصيل، الطلب"],
      ["نخيل تونس", "/palmier-tunisie/", "السعر، التوصيل، الطلب"],
      ["اتصل بنا", "/contact/", "ناقشوا مشروعكم معنا"],
    ],
  },
};

function hubPage(lang) {
  const t = HUB_TEXT[lang];
  return renderContentPage({
    basePath: "/services/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/services/", lang) }],
    sections: [
      {
        type: "cards",
        cards: t.cards.map(([title, text, path, image]) => ({ title, text, path: localizedPath(path, lang), image })),
      },
      {
        type: "related",
        h2: t.relatedH2,
        links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
      },
    ],
  });
}

function poseGazonPage(lang) {
  const T = {
    fr: {
      title: "Pose de gazon en rouleau | Service d'installation - Gazon Tunisie",
      metaDescription: "Gazon Tunisie installe votre gazon naturel en rouleau : préparation du sol et pose par une équipe expérimentée. Devis sur WhatsApp.",
      eyebrow: "Service",
      h1: "Pose de gazon en rouleau par notre équipe",
      intro: "Vous préférez ne pas poser vous-même votre gazon ? Gazon Tunisie propose un service de pose complet, réalisé par une équipe habituée à ce type d'installation, en plus de la vente du gazon lui-même.",
      crumb: [["Services", "/services/"], ["Pose de gazon", "/services/pose-gazon/"]],
      h2a: "Ce que comprend le service de pose",
      listA: ["Préparation du terrain : désherbage, nivellement et amendement si nécessaire", "Livraison du gazon en rouleau le jour de la pose pour une fraîcheur optimale", "Installation soignée, plaque par plaque, sans espace ni chevauchement", "Premier arrosage effectué sur place pour lancer l'enracinement", "Conseils d'entretien adaptés remis à la fin de l'intervention"],
      h2b: "Pour qui est fait ce service ?",
      pb: ["Ce service s'adresse aux particuliers qui souhaitent un résultat professionnel sans s'occuper eux-mêmes de la préparation du sol et de la pose, ainsi qu'aux professionnels ayant besoin d'une exécution rapide et fiable sur un chantier."],
      ctaHeading: "Demandez un devis pour la pose de votre gazon",
      ctaText: "Indiquez-nous la surface de votre jardin et votre ville, nous vous répondons rapidement.",
      ctaButton: "Demander un devis sur WhatsApp",
      ctaMessage: "Bonjour, je souhaite un devis pour la pose de gazon naturel (pas seulement l'achat).",
      ctaSecondary: "Voir le produit gazon naturel",
      faqH2: "Questions fréquentes sur la pose de gazon",
      faq: [
        ["La pose est-elle disponible partout en Tunisie ?", "Le service de pose est organisé au cas par cas selon la localisation du chantier. Contactez-nous par WhatsApp avec votre ville pour vérifier la disponibilité."],
        ["Le prix de la pose est-il inclus dans le prix du gazon ?", "Non, la pose est un service à part, facturé séparément de l'achat du gazon. Le tarif dépend de la surface et de l'état du terrain, communiqué après évaluation."],
        ["Dois-je préparer quelque chose avant votre intervention ?", "Non, si vous optez pour le service de pose complet, notre équipe se charge aussi de la préparation du sol."],
      ],
    },
    en: {
      title: "Rolled Lawn Laying | Installation Service - Gazon Tunisie",
      metaDescription: "Gazon Tunisie installs your natural rolled lawn: soil preparation and laying by an experienced team. Get a quote on WhatsApp.",
      eyebrow: "Service",
      h1: "Rolled lawn laying by our team",
      intro: "Would rather not lay your lawn yourself? Gazon Tunisie offers a complete laying service, carried out by a team experienced in this type of installation, in addition to selling the lawn itself.",
      crumb: [["Services", "/services/"], ["Lawn laying", "/services/pose-gazon/"]],
      h2a: "What the laying service includes",
      listA: ["Ground preparation: weeding, levelling and amending if needed", "Lawn delivered on the day of laying for optimal freshness", "Careful installation, slab by slab, with no gaps or overlaps", "First watering done on site to kick-start rooting", "Suitable care advice given at the end of the visit"],
      h2b: "Who is this service for?",
      pb: ["This service is aimed at homeowners who want a professional result without handling the soil preparation and laying themselves, as well as professionals who need fast, reliable execution on a project."],
      ctaHeading: "Request a quote for your lawn laying",
      ctaText: "Tell us the area of your garden and your city, we will respond quickly.",
      ctaButton: "Request a quote on WhatsApp",
      ctaMessage: "Hello, I would like a quote for laying natural lawn (not just buying it).",
      ctaSecondary: "See the natural lawn product",
      faqH2: "Frequently asked questions about lawn laying",
      faq: [
        ["Is laying available everywhere in Tunisia?", "The laying service is arranged case by case depending on the project's location. Contact us on WhatsApp with your city to check availability."],
        ["Is the laying price included in the lawn price?", "No, laying is a separate service, billed apart from buying the lawn. The rate depends on the area and the state of the ground, communicated after assessment."],
        ["Do I need to prepare anything before your visit?", "No, if you choose the full laying service, our team also takes care of soil preparation."],
      ],
    },
    ar: {
      title: "تركيب العشب على شكل لفائف | خدمة التركيب - Gazon Tunisie",
      metaDescription: "تُركِّب Gazon Tunisie عشبكم الطبيعي على شكل لفائف: تحضير التربة والتركيب من طرف فريق ذي خبرة. عرض سعر عبر واتساب.",
      eyebrow: "خدمة",
      h1: "تركيب العشب على شكل لفائف من طرف فريقنا",
      intro: "تفضلون عدم تركيب عشبكم بأنفسكم؟ تقدم Gazon Tunisie خدمة تركيب كاملة، ينفذها فريق معتاد على هذا النوع من التركيب، بالإضافة إلى بيع العشب نفسه.",
      crumb: [["الخدمات", "/services/"], ["تركيب العشب", "/services/pose-gazon/"]],
      h2a: "ما تتضمنه خدمة التركيب",
      listA: ["تحضير الأرض: إزالة الأعشاب، التسوية والتحسين إذا لزم الأمر", "توصيل العشب يوم التركيب لضمان أفضل نضارة", "تركيب دقيق، لوحاً بلوح، دون فراغات أو تراكب", "ري أول يُنجز في الموقع لبدء التجذر", "نصائح عناية مناسبة تُسلَّم في نهاية التدخل"],
      h2b: "لمن هذه الخدمة؟",
      pb: ["تستهدف هذه الخدمة الأفراد الراغبين في نتيجة احترافية دون التعامل بأنفسهم مع تحضير التربة والتركيب، وكذلك المهنيين المحتاجين لتنفيذ سريع وموثوق في مشروع."],
      ctaHeading: "اطلبوا عرض سعر لتركيب عشبكم",
      ctaText: "أذكروا لنا مساحة حديقتكم ومدينتكم، وسنرد عليكم بسرعة.",
      ctaButton: "اطلبوا عرض سعر عبر واتساب",
      ctaMessage: "مرحباً، أود عرض سعر لتركيب العشب الطبيعي (وليس الشراء فقط).",
      ctaSecondary: "شاهدوا منتج العشب الطبيعي",
      faqH2: "أسئلة شائعة حول تركيب العشب",
      faq: [
        ["هل التركيب متوفر في كل تونس؟", "تُنظَّم خدمة التركيب حالة بحالة حسب موقع المشروع. تواصلوا معنا عبر واتساب مع مدينتكم للتحقق من التوفر."],
        ["هل سعر التركيب مشمول في سعر العشب؟", "لا، التركيب خدمة منفصلة، تُحتسب بشكل منفصل عن شراء العشب. تعتمد التعريفة على المساحة وحالة الأرض، وتُبلَّغ بعد التقييم."],
        ["هل يجب أن أحضّر شيئاً قبل تدخلكم؟", "لا، إذا اخترتم خدمة التركيب الكاملة، يتكفل فريقنا أيضاً بتحضير التربة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/services/pose-gazon/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    service: {
      name: t.h1,
      description: t.metaDescription,
      areaServed: ["Grand Tunis", "Nabeul", "Tunisie"],
    },
    sections: [
      { type: "list", h2: t.h2a, items: t.listA },
      { type: "text", h2: t.h2b, paragraphs: t.pb },
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

function plantationPalmierPage(lang) {
  const T = {
    fr: {
      title: "Plantation de palmier | Service d'installation - Gazon Tunisie",
      metaDescription: "Gazon Tunisie plante votre palmier décoratif dans les règles de l'art : mise en terre, tuteurage et premier arrosage. Devis sur WhatsApp.",
      eyebrow: "Service",
      h1: "Plantation de palmier par notre équipe",
      intro: "Un palmier bien planté démarre mieux et s'enracine plus vite. En plus de la vente, Gazon Tunisie propose la mise en terre professionnelle de votre palmier décoratif.",
      crumb: [["Services", "/services/"], ["Plantation de palmier", "/services/plantation-palmier/"]],
      h2a: "Ce que comprend le service de plantation",
      listA: ["Choix de l'emplacement adapté (exposition, distance aux constructions et réseaux)", "Creusement d'un trou aux dimensions adaptées à la motte", "Mise en terre avec amendement du sol si nécessaire", "Tuteurage si la taille du palmier le justifie", "Premier arrosage abondant et conseils d'entretien"],
      h2b: "Pourquoi confier la plantation à une équipe expérimentée ?",
      pb: ["Une plantation mal réalisée (trou trop petit, sol mal préparé, absence de tuteurage sur un sujet haut) peut ralentir la reprise du palmier, voire la compromettre. Notre équipe applique les bons gestes pour maximiser les chances de reprise."],
      ctaHeading: "Demandez un devis pour la plantation de votre palmier",
      ctaText: "Indiquez-nous votre ville et l'emplacement prévu, nous vous répondons rapidement.",
      ctaButton: "Demander un devis sur WhatsApp",
      ctaMessage: "Bonjour, je souhaite un devis pour la plantation d'un palmier (pas seulement l'achat).",
      ctaSecondary: "Voir le produit palmier décoratif",
      faqH2: "Questions fréquentes sur la plantation de palmier",
      faq: [
        ["La plantation est-elle disponible partout en Tunisie ?", "Le service de plantation est organisé au cas par cas selon la localisation du chantier. Contactez-nous par WhatsApp avec votre ville pour vérifier la disponibilité."],
        ["Le prix de la plantation est-il inclus dans le prix du palmier ?", "Non, la plantation est un service à part, facturé séparément de l'achat du palmier à 490 DT/m. Le tarif dépend de l'accessibilité du terrain, communiqué après évaluation."],
        ["Quelle est la meilleure période pour planter un palmier ?", "Le printemps et l'automne, aux températures plus douces, sont généralement les plus favorables, mais la plantation reste possible sur une bonne partie de l'année avec un arrosage adapté."],
      ],
    },
    en: {
      title: "Palm Tree Planting | Installation Service - Gazon Tunisie",
      metaDescription: "Gazon Tunisie plants your decorative palm tree properly: planting, staking and first watering. Get a quote on WhatsApp.",
      eyebrow: "Service",
      h1: "Palm tree planting by our team",
      intro: "A properly planted palm tree gets off to a better start and roots faster. In addition to selling it, Gazon Tunisie offers professional planting of your decorative palm tree.",
      crumb: [["Services", "/services/"], ["Palm tree planting", "/services/plantation-palmier/"]],
      h2a: "What the planting service includes",
      listA: ["Choosing a suitable spot (sun exposure, distance from buildings and utility lines)", "Digging a hole sized to fit the root ball", "Planting with soil amendment if needed", "Staking if the palm tree's size warrants it", "Abundant first watering and care advice"],
      h2b: "Why leave planting to an experienced team?",
      pb: ["A poorly done planting (hole too small, poorly prepared soil, no staking on a tall specimen) can slow the palm tree's establishment, or even compromise it. Our team applies the right steps to maximise the chances of success."],
      ctaHeading: "Request a quote for planting your palm tree",
      ctaText: "Tell us your city and the planned location, we will respond quickly.",
      ctaButton: "Request a quote on WhatsApp",
      ctaMessage: "Hello, I would like a quote for planting a palm tree (not just buying it).",
      ctaSecondary: "See the decorative palm tree product",
      faqH2: "Frequently asked questions about palm tree planting",
      faq: [
        ["Is planting available everywhere in Tunisia?", "The planting service is arranged case by case depending on the project's location. Contact us on WhatsApp with your city to check availability."],
        ["Is the planting price included in the palm tree price?", "No, planting is a separate service, billed apart from buying the palm tree at 490 DT/m. The rate depends on site accessibility, communicated after assessment."],
        ["What is the best time to plant a palm tree?", "Spring and autumn, with milder temperatures, are generally the most favourable, but planting remains possible for much of the year with suitable watering."],
      ],
    },
    ar: {
      title: "غرس النخيل | خدمة التركيب - Gazon Tunisie",
      metaDescription: "تغرس Gazon Tunisie نخلة الزينة الخاصة بكم حسب الأصول: الغرس، التدعيم والري الأول. عرض سعر عبر واتساب.",
      eyebrow: "خدمة",
      h1: "غرس النخيل من طرف فريقنا",
      intro: "تبدأ النخلة المغروسة جيداً بشكل أفضل وتتجذر أسرع. بالإضافة إلى البيع، تقدم Gazon Tunisie غرساً احترافياً لنخلة الزينة الخاصة بكم.",
      crumb: [["الخدمات", "/services/"], ["غرس النخيل", "/services/plantation-palmier/"]],
      h2a: "ما تتضمنه خدمة الغرس",
      listA: ["اختيار الموقع المناسب (التعرض للشمس، المسافة عن البنايات والشبكات)", "حفر حفرة بأبعاد مناسبة لكتلة الجذور", "الغرس مع تحسين التربة إذا لزم الأمر", "التدعيم إذا كان حجم النخلة يستدعي ذلك", "ري أول غزير ونصائح عناية"],
      h2b: "لماذا تكلفون فريقاً ذا خبرة بالغرس؟",
      pb: ["يمكن لغرس سيء التنفيذ (حفرة صغيرة جداً، تربة غير مُحضَّرة جيداً، غياب التدعيم لنخلة طويلة) أن يبطئ تجذر النخلة، بل ويعرضه للخطر. يطبق فريقنا الخطوات الصحيحة لتعظيم فرص النجاح."],
      ctaHeading: "اطلبوا عرض سعر لغرس نخلتكم",
      ctaText: "أذكروا لنا مدينتكم والموقع المزمع، وسنرد عليكم بسرعة.",
      ctaButton: "اطلبوا عرض سعر عبر واتساب",
      ctaMessage: "مرحباً، أود عرض سعر لغرس نخلة (وليس الشراء فقط).",
      ctaSecondary: "شاهدوا منتج نخلة الزينة",
      faqH2: "أسئلة شائعة حول غرس النخيل",
      faq: [
        ["هل الغرس متوفر في كل تونس؟", "تُنظَّم خدمة الغرس حالة بحالة حسب موقع المشروع. تواصلوا معنا عبر واتساب مع مدينتكم للتحقق من التوفر."],
        ["هل سعر الغرس مشمول في سعر النخلة؟", "لا، الغرس خدمة منفصلة، تُحتسب بشكل منفصل عن شراء النخلة بسعر 490 دينار/م. تعتمد التعريفة على سهولة الوصول إلى الأرض، وتُبلَّغ بعد التقييم."],
        ["ما هي أفضل فترة لغرس نخلة؟", "الربيع والخريف، بدرجات حرارتهما المعتدلة، هما عموماً الأنسب، لكن الغرس يبقى ممكناً في جزء كبير من السنة مع ري مناسب."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/services/plantation-palmier/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/palmier-eventail.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    service: {
      name: t.h1,
      description: t.metaDescription,
      areaServed: ["Grand Tunis", "Nabeul", "Tunisie"],
    },
    sections: [
      { type: "list", h2: t.h2a, items: t.listA },
      { type: "text", h2: t.h2b, paragraphs: t.pb },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/palmier-tunisie/", lang) },
      },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/services/", lang), hubPage(lang));
  registerPage(localizedPath("/services/pose-gazon/", lang), poseGazonPage(lang));
  registerPage(localizedPath("/services/plantation-palmier/", lang), plantationPalmierPage(lang));
}

module.exports = { build };
