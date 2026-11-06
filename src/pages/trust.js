const { renderContentPage } = require("../templates/page");
const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { renderSections } = require("../templates/components");
const { faqPage } = require("../templates/schema");
const { SITE, buildWhatsAppUrl } = require("../data/site");
const { localizedPath } = require("../data/i18n");
const { UI } = require("../data/ui-strings");

const POURQUOI_TEXT = {
  fr: {
    title: "Pourquoi choisir Gazon Tunisie ? | Gazon & Palmier en Tunisie",
    metaDescription: "Prix clair, livraison dans toute la Tunisie, réactivité WhatsApp : pourquoi choisir Gazon Tunisie pour votre gazon et vos palmiers.",
    eyebrow: "Gazon Tunisie",
    h1: "Pourquoi choisir Gazon Tunisie ?",
    intro: "Un prix clair, une livraison organisée dans toute la Tunisie et des conseils concrets : voici ce qui distingue Gazon Tunisie pour votre gazon naturel et vos palmiers décoratifs.",
    label: "Pourquoi nous choisir",
    listH2: "Ce qui nous distingue",
    list: ["Un prix clair : sur devis sous 50 m² et à partir de 9 DT/m² dès 50 m² pour le gazon, 500 DT/m pour le palmier", "Une livraison dans toute la Tunisie, gazon naturel comme palmier décoratif", "Des frais de livraison calculés selon votre adresse et annoncés avant confirmation", "Une prise de contact rapide et directe par WhatsApp, sans compte à créer", "Des conseils de pose et d'entretien fournis avec chaque commande", "Une offre concentrée sur le gazon Paspalum, le gazon américain et le palmier"],
    ctaHeading: "Discutons de votre projet",
    ctaText: "Décrivez-nous votre jardin ou votre projet d'aménagement, nous vous conseillons la meilleure solution.",
    ctaButton: "Contacter Gazon Tunisie",
    ctaMessage: "Bonjour, je souhaite être conseillé pour mon projet de jardin.",
    ctaSecondary: "En savoir plus sur nous",
    relatedH2: "Découvrir nos produits",
    related: [
      ["Gazon Tunisie", "/gazon-tunisie/", "15 ou 9 DT/m² selon la surface, livraison selon votre adresse"],
      ["Palmier Tunisie", "/palmier-tunisie/", "500 DT/m, livraison selon votre adresse"],
    ],
  },
  en: {
    title: "Why Choose Gazon Tunisie? | Lawn & Palm Tree in Tunisia",
    metaDescription: "Clear pricing, nationwide delivery, WhatsApp responsiveness: why choose Gazon Tunisie for your lawn and palm trees.",
    eyebrow: "Gazon Tunisie",
    h1: "Why choose Gazon Tunisie?",
    intro: "A clear price, delivery arranged across Tunisia and concrete advice: here is what sets Gazon Tunisie apart for your natural lawn and decorative palm trees.",
    label: "Why choose us",
    listH2: "What sets us apart",
    list: ["Clear pricing: quoted under 50 sqm and from 9 DT/sqm from 50 sqm for lawn, 500 DT/m for the palm tree", "Delivery across all of Tunisia, both natural lawn and the decorative palm tree", "Delivery fees calculated for your address and confirmed before you order", "Fast, direct contact via WhatsApp, no account needed", "Laying and care advice provided with every order", "A focused offer: Paspalum lawn, American lawn and decorative palm trees"],
    ctaHeading: "Let's discuss your project",
    ctaText: "Tell us about your garden or landscaping project, we will advise you on the best solution.",
    ctaButton: "Contact Gazon Tunisie",
    ctaMessage: "Hello, I would like advice for my garden project.",
    ctaSecondary: "Learn more about us",
    relatedH2: "Discover our products",
    related: [
      ["Lawn Tunisia", "/gazon-tunisie/", "15 or 9 DT/sqm depending on area, delivery quoted by address"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "500 DT/m, delivery quoted by address"],
    ],
  },
  ar: {
    title: "لماذا تختارون Gazon Tunisie؟ | عشب ونخيل في تونس",
    metaDescription: "سعر واضح، توصيل في كل تونس، سرعة استجابة عبر واتساب: لماذا تختارون Gazon Tunisie لعشبكم ونخيلكم.",
    eyebrow: "Gazon Tunisie",
    h1: "لماذا تختارون Gazon Tunisie؟",
    intro: "سعر واضح، توصيل مُنظَّم في كل تونس ونصائح ملموسة: إليكم ما يميز Gazon Tunisie لعشبكم الطبيعي ونخيلكم الزينة.",
    label: "لماذا نحن",
    listH2: "ما يميزنا",
    list: ["سعر واضح: حسب العرض لأقل من 50 م² وابتداءً من 9 دنانير/م² من 50 م² للعشب، و500 دينار/م للنخلة", "توصيل في كل تونس، للعشب الطبيعي ونخيل الزينة معاً", "مصاريف توصيل تُحتسب حسب عنوانكم وتُبلَّغ قبل التأكيد", "تواصل سريع ومباشر عبر واتساب، دون حساب يُنشأ", "نصائح تركيب وعناية مع كل طلبية", "عرض مركز على عشب الباسبالوم والعشب الأمريكي ونخيل الزينة"],
    ctaHeading: "لنتحدث عن مشروعكم",
    ctaText: "صفوا لنا حديقتكم أو مشروع التهيئة، وسننصحكم بأفضل حل.",
    ctaButton: "تواصلوا مع Gazon Tunisie",
    ctaMessage: "مرحباً، أود الحصول على نصيحة لمشروع حديقتي.",
    ctaSecondary: "اعرفوا المزيد عنا",
    relatedH2: "اكتشفوا منتجاتنا",
    related: [
      ["عشب تونس", "/gazon-tunisie/", "15 أو 9 دينار/م² حسب المساحة، توصيل حسب عنوانكم"],
      ["نخيل تونس", "/palmier-tunisie/", "500 دينار/م، توصيل حسب عنوانكم"],
    ],
  },
};

function pourquoiChoisirPage(lang) {
  const t = POURQUOI_TEXT[lang];
  return renderContentPage({
    basePath: "/pourquoi-choisir-gazon-tunisie/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/pourquoi-choisir-gazon-tunisie/", lang) }],
    sections: [
      { type: "list", h2: t.listH2, items: t.list },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/a-propos/", lang) },
      },
      {
        type: "related",
        h2: t.relatedH2,
        links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
      },
    ],
  });
}

const APROPOS_TEXT = {
  fr: {
    title: "À propos de Gazon Tunisie | Jardinerie en Tunisie",
    metaDescription: "Gazon Tunisie, basée à Grombalia dans le gouvernorat de Nabeul, vend du gazon Paspalum, du gazon américain et des palmiers décoratifs avec livraison en Tunisie.",
    eyebrow: "À propos",
    h1: "Gazon Tunisie, une jardinerie tunisienne basée à Nabeul",
    intro: "Gazon Tunisie accompagne particuliers et professionnels dans leurs projets extérieurs avec du gazon Paspalum, du gazon américain et des palmiers décoratifs.",
    label: "À propos",
    h2a: "Notre activité",
    pa: [
      `Basé à ${SITE.address.locality}, Gazon Tunisie livre du gazon naturel en rouleau et des palmiers décoratifs dans toute la Tunisie, avec des frais de livraison calculés selon votre adresse et communiqués avant confirmation.`,
      "Nous privilégions une offre claire : deux types de gazon naturel et des palmiers décoratifs, avec un devis adapté à la surface, à la ville et aux conditions de livraison.",
    ],
    h2b: "Notre approche",
    pb: ["Nous privilégions un contact direct et rapide par WhatsApp pour répondre à vos questions, établir un devis de livraison ou vous conseiller sur le choix d'une variété adaptée à votre région et à votre projet."],
    ctaHeading: "Une question sur nos produits ou nos délais ?",
    ctaText: "Contactez-nous directement, nous répondons rapidement.",
    ctaButton: "Nous contacter sur WhatsApp",
    ctaMessage: "Bonjour, j'ai une question sur Gazon Tunisie.",
    ctaSecondary: "Voir nos coordonnées",
  },
  en: {
    title: "About Gazon Tunisie | Garden Center in Tunisia",
    metaDescription: "Gazon Tunisie, based in Grombalia, Nabeul, supplies Paspalum lawn, American lawn and decorative palm trees with delivery across Tunisia.",
    eyebrow: "About",
    h1: "Gazon Tunisie, a Tunisian garden center based in Nabeul",
    intro: "Gazon Tunisie supports homeowners and professionals with Paspalum lawn, American lawn and decorative palm trees for outdoor projects.",
    label: "About",
    h2a: "Our activity",
    pa: [
      `Based in ${SITE.address.locality}, Gazon Tunisie delivers natural rolled lawn and decorative palm trees across Tunisia, with delivery fees calculated for your address and confirmed before you order.`,
      "We keep the offer focused: two natural lawn types and decorative palm trees, with a quote based on area, city and delivery conditions.",
    ],
    h2b: "Our approach",
    pb: ["We favour fast, direct contact via WhatsApp to answer your questions, provide a delivery quote or advise you on a variety suited to your region and project."],
    ctaHeading: "A question about our products or lead times?",
    ctaText: "Contact us directly, we reply quickly.",
    ctaButton: "Contact us on WhatsApp",
    ctaMessage: "Hello, I have a question about Gazon Tunisie.",
    ctaSecondary: "See our contact details",
  },
  ar: {
    title: "من نحن - Gazon Tunisie | جردينري في تونس",
    metaDescription: "Gazon Tunisie مقرها قرمبالية من ولاية نابل، وتوفر عشب الباسبالوم والعشب الأمريكي ونخيل الزينة مع التوصيل في تونس.",
    eyebrow: "من نحن",
    h1: "Gazon Tunisie، جردينري تونسية مقرها نابل",
    intro: "ترافق Gazon Tunisie الأفراد والمهنيين في مشاريعهم الخارجية عبر توفير عشب الباسبالوم والعشب الأمريكي ونخيل الزينة.",
    label: "من نحن",
    h2a: "نشاطنا",
    pa: [
      `تُوصل Gazon Tunisie، ومقرها ${SITE.address.locality}، العشب الطبيعي على شكل لفائف ونخيل الزينة في كل تونس، بمصاريف توصيل تُحتسب حسب عنوانكم وتُبلَّغ قبل التأكيد.`,
      "نحافظ على عرض واضح يضم نوعين من العشب الطبيعي ونخيل الزينة، مع عرض سعر حسب المساحة والمدينة وظروف التوصيل.",
    ],
    h2b: "نهجنا",
    pb: ["نُفضل التواصل المباشر والسريع عبر واتساب للإجابة على أسئلتكم أو تقديم عرض سعر توصيل أو إرشادكم حول اختيار صنف مناسب لجهتكم ومشروعكم."],
    ctaHeading: "سؤال حول منتجاتنا أو آجالنا؟",
    ctaText: "تواصلوا معنا مباشرة، نرد بسرعة.",
    ctaButton: "تواصلوا معنا عبر واتساب",
    ctaMessage: "مرحباً، لدي سؤال حول Gazon Tunisie.",
    ctaSecondary: "شاهدوا معلومات الاتصال",
  },
};

function aProposPage(lang) {
  const t = APROPOS_TEXT[lang];
  return renderContentPage({
    basePath: "/a-propos/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/a-propos/", lang) }],
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "text", h2: t.h2b, paragraphs: t.pb },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/contact/", lang) },
      },
    ],
  });
}

const FAQ_TEXT = {
  fr: {
    title: "Questions fréquentes | Gazon Tunisie",
    description: "Livraison, prix, commande, entretien : retrouvez les réponses aux questions les plus fréquentes sur les produits Gazon Tunisie.",
    eyebrow: "Aide",
    h1: "Questions fréquentes",
    intro: "Tout ce que vous devez savoir sur nos produits, notre livraison et nos délais.",
    label: "FAQ",
    generalH2: "Questions générales",
    items: [
      ["Quels produits vend Gazon Tunisie ?", "Gazon Tunisie propose du gazon Paspalum, du gazon américain et des palmiers décoratifs. Le gazon est à partir de 9 DT/m² dès 50 m² ; sous 50 m², le prix est sur devis. Le palmier est à partir de 500 DT/m, sur devis."],
      ["Dans quelles régions livrez-vous ?", "Le gazon naturel et le palmier décoratif sont livrables partout en تونس. Les frais de livraison dépendent de votre adresse et vous sont communiqués avant toute confirmation de commande."],
      ["Comment commander un produit ?", "La commande se fait directement par WhatsApp : indiquez le produit souhaité, la quantité et votre ville de livraison pour recevoir une confirmation rapide."],
      ["Quels sont vos horaires de disponibilité ?", `Nous sommes disponibles ${UI.fr.hoursLabel.toLowerCase()} pour répondre à vos demandes par téléphone ou WhatsApp.`],
      ["Proposez-vous des conseils d'entretien après l'achat ?", "Oui, nous fournissons des conseils de pose et d'entretien avec chaque commande, et vous pouvez retrouver des guides détaillés sur notre blog."],
      ["Livrez-vous les professionnels (paysagistes, hôtels, entreprises) ?", "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme et des établissements touristiques pour des commandes en volume."],
    ],
    relatedH2: "Vous ne trouvez pas votre réponse ?",
    related: [
      ["Contactez-nous", "/contact/", "Par téléphone ou WhatsApp"],
      ["Gazon Tunisie", "/gazon-tunisie/", "FAQ dédiée au gazon"],
      ["Palmier Tunisie", "/palmier-tunisie/", "FAQ dédiée au palmier"],
    ],
  },
  en: {
    title: "Frequently Asked Questions | Gazon Tunisie",
    description: "Delivery, price, ordering, care: find answers to the most frequently asked questions about Gazon Tunisie products.",
    eyebrow: "Help",
    h1: "Frequently asked questions",
    intro: "Everything you need to know about our products, delivery and lead times.",
    label: "FAQ",
    generalH2: "General questions",
    items: [
      ["What products does Gazon Tunisie sell?", "Gazon Tunisie supplies Paspalum lawn, American lawn and decorative palm trees. Lawn starts from 9 DT/sqm for 50 sqm or more; below 50 sqm it is quoted. Palm trees start from 500 DT/m and are quoted."],
      ["Which regions do you deliver to?", "Natural lawn and the decorative palm tree can be delivered anywhere in Tunisia. Delivery fees depend on your address and are confirmed before you place your order."],
      ["How do I order a product?", "Orders are placed directly on WhatsApp: tell us the desired product, quantity and delivery city to receive a quick confirmation."],
      ["What are your availability hours?", `We are available ${UI.en.hoursLabel.toLowerCase()} to answer your requests by phone or WhatsApp.`],
      ["Do you offer care advice after purchase?", "Yes, we provide laying and care advice with every order, and you can find detailed guides on our blog."],
      ["Do you deliver to professionals (landscapers, hotels, businesses)?", "Yes, we supply both individuals and landscaping professionals and tourist establishments for bulk orders."],
    ],
    relatedH2: "Can't find your answer?",
    related: [
      ["Contact us", "/contact/", "By phone or WhatsApp"],
      ["Lawn Tunisia", "/gazon-tunisie/", "Lawn-specific FAQ"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "Palm tree-specific FAQ"],
    ],
  },
  ar: {
    title: "الأسئلة الشائعة | Gazon Tunisie",
    description: "التوصيل، السعر، الطلب، العناية: اعثروا على إجابات لأكثر الأسئلة شيوعاً حول منتجات Gazon Tunisie.",
    eyebrow: "مساعدة",
    h1: "الأسئلة الشائعة",
    intro: "كل ما تحتاجون معرفته حول منتجاتنا وتوصيلنا وآجالنا.",
    label: "الأسئلة الشائعة",
    generalH2: "أسئلة عامة",
    items: [
      ["ما هي المنتجات التي تبيعها Gazon Tunisie؟", "توفر Gazon Tunisie عشب الباسبالوم والعشب الأمريكي ونخيل الزينة. يبدأ سعر العشب من 9 دنانير/م² للمساحات من 50 م² فأكثر، وما دون ذلك حسب عرض السعر. ويبدأ سعر النخيل من 500 دينار/م حسب الطلب."],
      ["إلى أي جهات توصلون؟", "يمكن توصيل العشب الطبيعي ونخيل الزينة في كل أنحاء تونس. تعتمد مصاريف التوصيل على عنوانكم وتُبلَّغ قبل تأكيد أي طلب."],
      ["كيف أطلب منتجاً؟", "يتم الطلب مباشرة عبر واتساب: أذكروا المنتج المرغوب والكمية ومدينة التوصيل لتلقي تأكيد سريع."],
      ["ما هي أوقات توفركم؟", `نحن متوفرون ${UI.ar.hoursLabel} للرد على طلباتكم هاتفياً أو عبر واتساب.`],
      ["هل تقدمون نصائح عناية بعد الشراء؟", "نعم، نقدم نصائح تركيب وعناية مع كل طلبية، ويمكنكم الاطلاع على أدلة مفصلة في مدونتنا."],
      ["هل توصلون المهنيين (مهيئي الحدائق، الفنادق، الشركات)؟", "نعم، نزود الأفراد ومهنيي تهيئة الحدائق والمؤسسات السياحية على حد سواء بطلبيات بكميات كبيرة."],
    ],
    relatedH2: "لم تجدوا إجابتكم؟",
    related: [
      ["تواصلوا معنا", "/contact/", "هاتفياً أو عبر واتساب"],
      ["عشب تونس", "/gazon-tunisie/", "أسئلة شائعة خاصة بالعشب"],
      ["نخيل تونس", "/palmier-tunisie/", "أسئلة شائعة خاصة بالنخيل"],
    ],
  },
};

function faqPageContent(lang) {
  const t = FAQ_TEXT[lang];
  const items = t.items.map(([q, a]) => ({ q, a }));
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: t.label, path: localizedPath("/faq/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="hero-copy">${t.intro}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections([{ type: "faq", h2: t.generalH2, items }])}
      ${renderSections([
        {
          type: "related",
          h2: t.relatedH2,
          links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    basePath: "/faq/",
    lang,
    title: t.title,
    description: t.description,
    bodyHtml,
    jsonLd: [breadcrumbJsonLd, faqPage(items)],
  });
}

const CONTACT_TEXT = {
  fr: {
    title: "Contact Gazon Tunisie | Jardinerie à Nabeul, Tunisie",
    description: (p) => `Contactez Gazon Tunisie par téléphone (${p}), WhatsApp ou via notre formulaire de devis. Jardinerie basée à ${SITE.address.locality}, livraison dans toute la Tunisie.`,
    eyebrow: "Contact",
    h1: "Contactez Gazon Tunisie",
    intro: "Par téléphone, WhatsApp ou via le formulaire de devis ci-dessous.",
    label: "Contact",
    coordsH2: "Nos coordonnées",
    whatsappLink: "Discuter sur WhatsApp",
    devisH2: "Demande de devis",
    devisIntro: "Remplissez ce formulaire : il ouvre directement une conversation WhatsApp pré-remplie avec vos informations.",
    nameLabel: "Nom",
    phoneLabel: "Téléphone",
    productLabel: "Produit souhaité",
    products: ["Gazon naturel", "Palmier décoratif", "Plantes d'intérieur", "Engrais", "Autre"],
    cityLabel: "Ville de livraison",
    messageLabel: "Message",
    submitLabel: "Envoyer via WhatsApp",
    relatedH2: "Voir aussi",
    related: [
      ["Zones de livraison", "/livraison/", "Grand Tunis, Nabeul et le reste de la Tunisie"],
      ["FAQ", "/faq/", "Questions fréquentes"],
    ],
  },
  en: {
    title: "Contact Gazon Tunisie | Garden Centre in Nabeul, Tunisia",
    description: (p) => `Contact Gazon Tunisie by phone (${p}), WhatsApp or via our quote form. Garden centre based in ${SITE.address.locality}, delivering across Tunisia.`,
    eyebrow: "Contact",
    h1: "Contact Gazon Tunisie",
    intro: "By phone, WhatsApp or via the quote form below.",
    label: "Contact",
    coordsH2: "Our contact details",
    whatsappLink: "Chat on WhatsApp",
    devisH2: "Quote request",
    devisIntro: "Fill in this form: it opens a WhatsApp conversation directly pre-filled with your information.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    productLabel: "Desired product",
    products: ["Natural lawn", "Decorative palm tree", "Indoor plants", "Fertilizer", "Other"],
    cityLabel: "Delivery city",
    messageLabel: "Message",
    submitLabel: "Send via WhatsApp",
    relatedH2: "See also",
    related: [
      ["Delivery zones", "/livraison/", "Greater Tunis, Nabeul and the rest of Tunisia"],
      ["FAQ", "/faq/", "Frequently asked questions"],
    ],
  },
  ar: {
    title: "اتصل بـ Gazon Tunisie | مشتل في نابل، تونس",
    description: (p) => `تواصلوا مع Gazon Tunisie هاتفياً (${p})، عبر واتساب أو عبر نموذج طلب عرض السعر. مقرنا ${SITE.address.locality}.`,
    eyebrow: "اتصل بنا",
    h1: "تواصلوا مع Gazon Tunisie",
    intro: "هاتفياً أو عبر واتساب أو عبر نموذج طلب عرض السعر أدناه.",
    label: "اتصل بنا",
    coordsH2: "معلومات الاتصال",
    whatsappLink: "التحدث عبر واتساب",
    devisH2: "طلب عرض سعر",
    devisIntro: "املؤوا هذا النموذج: سيفتح مباشرة محادثة واتساب مُعبأة مسبقاً بمعلوماتكم.",
    nameLabel: "الاسم",
    phoneLabel: "الهاتف",
    productLabel: "المنتج المرغوب",
    products: ["عشب باسبالوم", "عشب أمريكي", "نخلة زينة", "آخر"],
    cityLabel: "مدينة التوصيل",
    messageLabel: "الرسالة",
    submitLabel: "إرسال عبر واتساب",
    relatedH2: "شاهدوا أيضاً",
    related: [
      ["مناطق التوصيل", "/livraison/", "تونس الكبرى، نابل وبقية تونس"],
      ["الأسئلة الشائعة", "/faq/", "الأسئلة الشائعة"],
    ],
  },
};

function contactPage(lang) {
  const t = CONTACT_TEXT[lang];
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: t.label, path: localizedPath("/contact/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="hero-copy">${t.intro}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      <section class="content-block">
        <h2>${t.coordsH2}</h2>
        <div class="contact-info">
          <p>📍 ${SITE.address.locality}, ${SITE.country}</p>
          <p>📞 <a href="tel:${SITE.phoneE164}">${SITE.phoneDisplay}</a></p>
          <p>💬 <a href="${buildWhatsAppUrl(t.ctaMessage)}" target="_blank" rel="noreferrer">${t.whatsappLink} — Gazon Tunisie</a></p>
          <p>🕐 ${UI[lang].hoursLabel}</p>
        </div>
      </section>

      <section class="content-block">
        <h2>${t.devisH2}</h2>
        <p>${t.devisIntro}</p>
        <form id="devisForm" class="devis-form">
          <label>${t.nameLabel}
            <input id="devisName" type="text" required autocomplete="name" />
          </label>
          <label>${t.phoneLabel}
            <input id="devisPhone" type="tel" required autocomplete="tel" />
          </label>
          <label>${t.productLabel}
            <select id="devisProduct">
              ${t.products.map((p) => `<option>${p}</option>`).join("")}
            </select>
          </label>
          <label>${t.cityLabel}
            <input id="devisCity" type="text" autocomplete="address-level2" />
          </label>
          <label>${t.messageLabel}
            <textarea id="devisMessage" rows="4"></textarea>
          </label>
          <button type="submit" class="pill-button">${t.submitLabel}</button>
        </form>
      </section>

      ${renderSections([
        {
          type: "related",
          h2: t.relatedH2,
          links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    basePath: "/contact/",
    lang,
    title: t.title,
    description: t.description(SITE.phoneDisplay),
    bodyHtml,
    jsonLd: [breadcrumbJsonLd],
    extraScripts: `<script src="/contact.js?v=${SITE.assetVersion}" defer></script>`,
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/pourquoi-choisir-gazon-tunisie/", lang), pourquoiChoisirPage(lang));
  registerPage(localizedPath("/a-propos/", lang), aProposPage(lang));
  registerPage(localizedPath("/faq/", lang), faqPageContent(lang));
  registerPage(localizedPath("/contact/", lang), contactPage(lang));
}

module.exports = { build };
