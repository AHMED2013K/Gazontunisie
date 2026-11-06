const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");

function relatedCluster(lang) {
  const T = {
    fr: {
      h2: "Explorez notre offre palmier",
      links: [
        ["Palmier Tunisie", "/palmier-tunisie/", "La page de référence : prix, livraison, commande"],
        ["Acheter un palmier", "/acheter-palmier/", "Comment commander en 3 étapes"],
        ["Palmier de jardin", "/palmier-jardin/", "Pour l'aménagement paysager"],
        ["Palmier décoratif", "/palmier-decoratif/", "Pour terrasses, entrées et intérieurs"],
        ["Gazon naturel", "/gazon-tunisie/", "Notre autre produit phare, 15 ou 9 DT/m² selon la surface"],
        ["Toutes les zones de livraison", "/livraison/", "Frais calculés selon votre région"],
      ],
    },
    en: {
      h2: "Explore our palm tree range",
      links: [
        ["Palm Tree Tunisia", "/palmier-tunisie/", "The reference page: price, delivery, ordering"],
        ["Buy a palm tree", "/acheter-palmier/", "How to order in 3 steps"],
        ["Garden palm tree", "/palmier-jardin/", "For landscape design"],
        ["Decorative palm tree", "/palmier-decoratif/", "For terraces, entrances and interiors"],
        ["Natural lawn", "/gazon-tunisie/", "Our other flagship product, 15 or 9 DT/sqm depending on area"],
        ["All delivery zones", "/livraison/", "Fees calculated based on your region"],
      ],
    },
    ar: {
      h2: "اكتشفوا عرضنا من النخيل",
      links: [
        ["نخيل تونس", "/palmier-tunisie/", "الصفحة المرجعية: السعر، التوصيل، الطلب"],
        ["شراء نخلة", "/acheter-palmier/", "كيفية الطلب في 3 خطوات"],
        ["نخيل الحديقة", "/palmier-jardin/", "لتهيئة المساحات الخضراء"],
        ["نخيل زينة", "/palmier-decoratif/", "للتراسات والمداخل والداخل"],
        ["عشب طبيعي", "/gazon-tunisie/", "منتجنا الرئيسي الآخر، 15 أو 9 دينار/م² حسب المساحة"],
        ["كل مناطق التوصيل", "/livraison/", "مصاريف تُحسب حسب جهتكم"],
      ],
    },
  };
  const t = T[lang];
  return {
    h2: t.h2,
    links: t.links.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
  };
}

function palmierCta(lang) {
  const T = {
    fr: {
      heading: "Commandez votre palmier décoratif",
      text: `${SITE.products.palmier.priceLabel}. Livraison calculée selon votre adresse partout en Tunisie.`,
      buttonLabel: "Commander sur WhatsApp",
      whatsappMessage: "Bonjour Gazon Tunisie, je souhaite recevoir le prix exact d'un palmier et de sa livraison (500 DT/m).",
      secondaryLabel: "Voir les zones de livraison",
    },
    en: {
      heading: "Order your decorative palm tree",
      text: `${SITE.products.palmier.priceLabel}. Delivery quoted by address anywhere in Tunisia.`,
      buttonLabel: "Order on WhatsApp",
      whatsappMessage: "Hello Gazon Tunisie, I would like the exact price of a palm tree and delivery (500 DT/m).",
      secondaryLabel: "See delivery zones",
    },
    ar: {
      heading: "اطلبوا نخلة الزينة الخاصة بكم",
      text: `${SITE.products.palmier.priceLabel}. توصيل حسب عنوانكم في كل تونس.`,
      buttonLabel: "اطلبوا عبر واتساب",
      whatsappMessage: "مرحباً Gazon Tunisie، أود معرفة السعر الدقيق للنخلة والتوصيل (500 دينار/م).",
      secondaryLabel: "شاهدوا مناطق التوصيل",
    },
  };
  const t = T[lang];
  return {
    heading: t.heading,
    text: t.text,
    buttonLabel: t.buttonLabel,
    whatsappMessage: t.whatsappMessage,
    secondary: { label: t.secondaryLabel, path: localizedPath("/livraison/", lang) },
  };
}

function pillarPage(lang) {
  const T = {
    fr: {
      title: "Palmier Tunisie – 490 DT/m, Livraison dans tout le pays | Gazon Tunisie",
      metaDescription: "Palmier décoratif à 490 DT/m en Tunisie, livré partout dans le pays avec des frais calculés selon votre adresse. Commandez facilement sur WhatsApp.",
      eyebrow: "Palmier décoratif",
      h1: "Palmier Tunisie : palmier décoratif à 490 DT/m",
      intro: "Gazon Tunisie vend et livre des palmiers décoratifs partout en Tunisie, au prix de 490 DT/m. Les frais de livraison sont calculés selon votre adresse et vous sont communiqués avant confirmation de commande.",
      breadcrumbLabel: "Palmier Tunisie",
      productDescription: "Palmier décoratif d'ornement pour jardin, terrasse ou entrée de villa, livrable dans toute la Tunisie. Frais de livraison calculés selon votre adresse.",
      h2a: "Le palmier décoratif Gazon Tunisie",
      pa: ["Symbole du jardin méditerranéen et tunisien, le palmier structure un extérieur en un seul sujet : il apporte de la hauteur, de l'ombre légère et un effet immédiatement qualitatif à une allée, une piscine ou une entrée de villa.",
        "Notre palmier décoratif est vendu au mètre, à 490 DT/m, et livrable dans toute la Tunisie. Comme pour le gazon, la livraison est calculée selon la distance depuis notre dépôt et votre adresse exacte, puis confirmée avant toute commande."],
      h2b: "Pourquoi choisir notre palmier décoratif ?",
      listB: ["Un sujet adapté au climat tunisien, résistant à la chaleur estivale", "Un effet visuel immédiat pour structurer un jardin, une entrée ou une terrasse", "Un entretien limité une fois le palmier bien installé", "Un prix clair au mètre : 490 DT/m", "Une livraison partout en Tunisie, calculée selon votre adresse"],
      faqH2: "Questions fréquentes sur le palmier Gazon Tunisie",
      faq: [
        ["Quel est le prix du palmier décoratif chez Gazon Tunisie ?", "Le palmier décoratif est vendu 490 DT/m. Les frais de livraison sont calculés selon votre adresse et communiqués avant confirmation de commande."],
        ["Le palmier est-il livrable partout en Tunisie ?", "Oui, nous organisons la livraison dans toute la Tunisie. Le tarif dépend de la distance depuis notre dépôt de Nabeul et de votre adresse exacte ; il vous est communiqué avant confirmation de commande."],
        ["Quel entretien pour un palmier après plantation ?", "Un arrosage régulier les premières semaines, puis un arrosage plus espacé suffit pour la plupart des variétés adaptées au climat tunisien. Consultez notre guide d'entretien sur le blog."],
        ["Vendez-vous aussi du gazon naturel ?", "Oui, notre gazon naturel en rouleau est vendu 15 DT/m² sous 50 m² et 9 DT/m² à partir de 50 m², livré partout en Tunisie avec des frais calculés selon votre adresse. Découvrez notre offre sur la page dédiée au gazon."],
      ],
    },
    en: {
      title: "Palm Tree Tunisia – 490 DT/m, Nationwide Delivery | Gazon Tunisie",
      metaDescription: "Decorative palm tree at 490 DT/m in Tunisia, delivered nationwide with fees calculated for your address. Order easily on WhatsApp.",
      eyebrow: "Decorative palm tree",
      h1: "Palm Tree Tunisia: decorative palm tree at 490 DT/m",
      intro: "Gazon Tunisie sells and delivers decorative palm trees across Tunisia, at 490 DT/m. Delivery fees are calculated for your address and communicated to you before order confirmation.",
      breadcrumbLabel: "Palm Tree Tunisia",
      productDescription: "Ornamental decorative palm tree for a garden, terrace or villa entrance, deliverable across Tunisia. Delivery fees calculated for your address.",
      h2a: "The Gazon Tunisie decorative palm tree",
      pa: ["A symbol of the Mediterranean and Tunisian garden, the palm tree structures an outdoor space with a single subject: it adds height, light shade and an immediately upscale effect to a driveway, pool or villa entrance.",
        "Our decorative palm tree is sold by the metre, at 490 DT/m, and can be delivered across Tunisia. Like our lawn, delivery is calculated based on the distance from our depot and your exact address, then confirmed before any order."],
      h2b: "Why choose our decorative palm tree?",
      listB: ["A specimen suited to the Tunisian climate, resistant to summer heat", "An immediate visual effect to structure a garden, entrance or terrace", "Limited maintenance once the palm tree is well established", "A clear price per metre: 490 DT/m", "Delivery anywhere in Tunisia, calculated for your address"],
      faqH2: "Frequently asked questions about the Gazon Tunisie palm tree",
      faq: [
        ["What is the price of the decorative palm tree at Gazon Tunisie?", "The decorative palm tree is sold at 490 DT/m. Delivery fees are calculated for your address and confirmed before you place your order."],
        ["Can the palm tree be delivered anywhere in Tunisia?", "Yes, we arrange delivery across Tunisia. The rate depends on the distance from our Nabeul depot and your exact address, and is confirmed before you place your order."],
        ["What care does a palm tree need after planting?", "Regular watering for the first few weeks, then less frequent watering is enough for most varieties suited to the Tunisian climate. Check our care guide on the blog."],
        ["Do you also sell natural lawn?", "Yes, our natural rolled lawn is sold at 15 DT/sqm under 50 sqm and 9 DT/sqm from 50 sqm, delivered across Tunisia with fees calculated for your address. Discover our offer on the dedicated lawn page."],
      ],
    },
    ar: {
      title: "نخيل تونس – 490 دينار/م، توصيل في كل تونس | Gazon Tunisie",
      metaDescription: "نخيل زينة بسعر 490 دينار/م في تونس، يُوصَّل في كل الجهات بمصاريف تُحتسب حسب عنوانكم. اطلبوا بسهولة عبر واتساب.",
      eyebrow: "نخيل زينة",
      h1: "نخيل تونس: نخيل زينة بسعر 490 دينار/م",
      intro: "تبيع Gazon Tunisie وتوصل نخيل الزينة في كل تونس، بسعر 490 دينار/م. تُحتسب مصاريف التوصيل حسب عنوانكم وتُبلَّغ لكم قبل تأكيد الطلب.",
      breadcrumbLabel: "نخيل تونس",
      productDescription: "نخلة زينة للحديقة أو التراس أو مدخل الفيلا، قابلة للتوصيل في كل تونس. تُحتسب مصاريف التوصيل حسب عنوانكم.",
      h2a: "نخيل الزينة من Gazon Tunisie",
      pa: ["رمز الحديقة المتوسطية والتونسية، ينظم النخيل المساحة الخارجية بعنصر واحد: يضيف ارتفاعاً وظلاً خفيفاً وتأثيراً راقياً فورياً لممر أو مسبح أو مدخل فيلا.",
        "تُباع نخلة الزينة لدينا بالمتر، بسعر 490 دينار/م، وقابلة للتوصيل في كل تونس. مثل العشب، يُحسب التوصيل حسب المسافة من مستودعنا وعنوانكم الدقيق، ثم يُؤكَّد قبل أي طلب."],
      h2b: "لماذا تختارون نخلة الزينة لدينا؟",
      listB: ["نخلة مكيّفة مع المناخ التونسي، مقاومة لحرارة الصيف", "تأثير بصري فوري لتنظيم حديقة أو مدخل أو تراس", "عناية محدودة بمجرد استقرار النخلة جيداً", "سعر واضح بالمتر: 490 دينار/م", "توصيل في كل تونس، يُحتسب حسب عنوانكم"],
      faqH2: "أسئلة شائعة حول نخيل Gazon Tunisie",
      faq: [
        ["ما هو سعر نخلة الزينة لدى Gazon Tunisie؟", "تُباع نخلة الزينة بسعر 490 دينار/م. تُحتسب مصاريف التوصيل حسب عنوانكم وتُبلَّغ قبل تأكيد الطلب."],
        ["هل النخلة قابلة للتوصيل في كل تونس؟", "نعم، ننظم التوصيل في كل تونس. تعتمد التعريفة على المسافة من مستودعنا بنابل وعلى عنوانكم الدقيق، وتُبلَّغ قبل تأكيد الطلب."],
        ["ما هي العناية اللازمة بالنخلة بعد الغرس؟", "ري منتظم خلال الأسابيع الأولى، ثم يكفي ري أقل تكراراً لمعظم الأصناف المكيّفة مع المناخ التونسي. اطلعوا على دليل العناية في المدونة."],
        ["هل تبيعون أيضاً العشب الطبيعي؟", "نعم، يُباع عشبنا الطبيعي على شكل لفائف بسعر 15 دينار/م² دون 50 م² و9 دينار/م² ابتداءً من 50 م²، ويُوصَّل في كل تونس بمصاريف تُحتسب حسب عنوانكم. اكتشفوا عرضنا في صفحة العشب المخصصة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/palmier-tunisie/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/palmier-classique.jpeg", alt: t.h1 },
    breadcrumb: [{ label: t.breadcrumbLabel, path: localizedPath("/palmier-tunisie/", lang) }],
    product: {
      key: "palmier-decoratif",
      name: SITE.products.palmier.name,
      price: SITE.products.palmier.price,
      currency: SITE.products.palmier.currency,
      unit: SITE.products.palmier.unit,
      description: t.productDescription,
      image: SITE.products.palmier.image,

    },
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...palmierCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function acheterPalmierPage(lang) {
  const T = {
    fr: {
      title: "Acheter un palmier en Tunisie - Gazon Tunisie",
      metaDescription: "Comment acheter un palmier décoratif en Tunisie avec Gazon Tunisie : prix 490 DT/m, livraison selon votre adresse, commande simple par WhatsApp.",
      eyebrow: "Commander",
      h1: "Acheter un palmier en Tunisie avec Gazon Tunisie",
      intro: "Acheter un palmier décoratif en Tunisie est simple avec Gazon Tunisie : un prix fixe, des frais de livraison calculés selon votre adresse et une commande finalisée par WhatsApp.",
      crumb: [["Palmier Tunisie", "/palmier-tunisie/"], ["Acheter un palmier", "/acheter-palmier/"]],
      h2a: "Comment acheter votre palmier en 3 étapes",
      listA: ["Contactez-nous par WhatsApp en précisant votre ville de livraison", "Recevez le tarif de livraison calculé selon votre adresse, puis confirmez votre commande", "Recevez votre palmier décoratif à 490 DT/m et procédez à la plantation"],
      h2b: "Récapitulatif du prix",
      headersB: ["Produit", "Prix", "Livraison"],
      rowsB: [["Palmier décoratif", "490 DT/m", "Selon votre adresse"]],
      faqH2: "Questions fréquentes avant d'acheter un palmier",
      faq: [
        ["Puis-je commander plusieurs palmiers en une seule fois ?", "Oui, il n'y a pas de limite de quantité. Indiquez le nombre souhaité lors de votre demande sur WhatsApp pour recevoir un devis de livraison groupé."],
        ["Comment est calculé le tarif de livraison ?", "Elle dépend de la distance entre notre dépôt de Nabeul et votre adresse, ainsi que du nombre de palmiers commandés. Le montant vous est communiqué avant toute confirmation de commande."],
      ],
    },
    en: {
      title: "Buy a Palm Tree in Tunisia - Gazon Tunisie",
      metaDescription: "How to buy a decorative palm tree in Tunisia with Gazon Tunisie: price 490 DT/m, delivery quoted by address, simple ordering via WhatsApp.",
      eyebrow: "Order",
      h1: "Buy a palm tree in Tunisia with Gazon Tunisie",
      intro: "Buying a decorative palm tree in Tunisia is simple with Gazon Tunisie: a fixed price, delivery fees calculated for your address and an order finalised on WhatsApp.",
      crumb: [["Palm Tree Tunisia", "/palmier-tunisie/"], ["Buy a palm tree", "/acheter-palmier/"]],
      h2a: "How to buy your palm tree in 3 steps",
      listA: ["Contact us on WhatsApp specifying your delivery city", "Receive the delivery rate calculated for your address, then confirm your order", "Receive your decorative palm tree at 490 DT/m and plant it"],
      h2b: "Price summary",
      headersB: ["Product", "Price", "Delivery"],
      rowsB: [["Decorative palm tree", "490 DT/m", "Quoted by address"]],
      faqH2: "Frequently asked questions before buying a palm tree",
      faq: [
        ["Can I order several palm trees at once?", "Yes, there is no quantity limit. Tell us the number you want when you contact us on WhatsApp to receive a grouped delivery quote."],
        ["How is the delivery rate calculated?", "It depends on the distance between our Nabeul depot and your address, as well as the number of palm trees ordered. The amount is confirmed before you place your order."],
      ],
    },
    ar: {
      title: "شراء نخلة في تونس - Gazon Tunisie",
      metaDescription: "كيفية شراء نخلة زينة في تونس مع Gazon Tunisie: سعر 490 دينار/م، توصيل يُحتسب حسب عنوانكم، طلب بسيط عبر واتساب.",
      eyebrow: "الطلب",
      h1: "شراء نخلة في تونس مع Gazon Tunisie",
      intro: "شراء نخلة زينة في تونس أمر بسيط مع Gazon Tunisie: سعر ثابت، مصاريف توصيل تُحتسب حسب عنوانكم وطلب يُنجز عبر واتساب.",
      crumb: [["نخيل تونس", "/palmier-tunisie/"], ["شراء نخلة", "/acheter-palmier/"]],
      h2a: "كيف تشترون نخلتكم في 3 خطوات",
      listA: ["تواصلوا معنا عبر واتساب مع تحديد مدينة التوصيل", "استلموا تعريفة التوصيل المحسوبة حسب عنوانكم، ثم أكدوا طلبيتكم", "استلموا نخلة الزينة بسعر 490 دينار/م وابدؤوا الغرس"],
      h2b: "ملخص السعر",
      headersB: ["المنتج", "السعر", "التوصيل"],
      rowsB: [["نخلة زينة", "490 دينار/م", "حسب عنوانكم"]],
      faqH2: "أسئلة شائعة قبل شراء نخلة",
      faq: [
        ["هل يمكنني طلب عدة نخيل دفعة واحدة؟", "نعم، لا يوجد حد للكمية. أذكروا العدد المرغوب عند تواصلكم عبر واتساب لتلقي عرض سعر توصيل مجمّع."],
        ["كيف تُحسب تعريفة التوصيل؟", "تعتمد التعريفة على المسافة بين مستودعنا بنابل وعنوانكم، وكذلك عدد النخيل المطلوب. يُبلَّغ المبلغ قبل تأكيد الطلب."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/acheter-palmier/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/palmier-washington.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    product: {
      key: "palmier-decoratif",
      name: SITE.products.palmier.name,
      price: SITE.products.palmier.price,
      currency: SITE.products.palmier.currency,
      unit: SITE.products.palmier.unit,
      description: t.intro,
      image: SITE.products.palmier.image,

    },
    sections: [
      { type: "list", h2: t.h2a, ordered: true, items: t.listA },
      { type: "table", h2: t.h2b, headers: t.headersB, rows: t.rowsB },
      { type: "cta", ...palmierCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function palmierJardinPage(lang) {
  const T = {
    fr: {
      title: "Palmier de jardin Tunisie | Aménagement paysager - Gazon Tunisie",
      metaDescription: "Palmier de jardin en Tunisie pour structurer une allée, une piscine ou un espace vert. Palmier décoratif Gazon Tunisie à 490 DT/m, livré dans toute la Tunisie.",
      eyebrow: "Aménagement extérieur",
      h1: "Palmier de jardin en Tunisie : structurer votre extérieur",
      intro: "Dans un jardin tunisien, le palmier joue souvent le rôle de point focal : il attire le regard, structure les allées et apporte une ombre légère sans alourdir l'espace. Voici comment bien l'intégrer à votre aménagement.",
      crumb: [["Palmier Tunisie", "/palmier-tunisie/"], ["Palmier de jardin", "/palmier-jardin/"]],
      h2a: "Le rôle du palmier dans l'aménagement d'un jardin",
      pa: ["Contrairement à une haie ou un massif, un seul palmier bien positionné suffit à donner du caractère à un jardin. Il est souvent utilisé en bordure d'allée, autour d'une piscine, ou en isolé au centre d'une pelouse.",
        "Associé à notre gazon naturel en rouleau, le palmier permet de composer rapidement un extérieur complet, du sol jusqu'à la canopée."],
      h2b: "Où positionner un palmier dans son jardin ?",
      listB: ["En bordure d'allée pour accompagner un cheminement", "Autour d'une piscine pour un effet resort", "En isolé au centre d'une pelouse comme point focal", "Près d'une entrée de villa pour marquer l'accès"],
      ctaHeading: "Composez votre jardin avec palmier et gazon naturel",
      ctaText: "Palmier décoratif à 490 DT/m et gazon naturel de 15 à 9 DT/m² selon la surface, livraison calculée selon votre adresse.",
      ctaButton: "Demander un devis",
      ctaMessage: "Bonjour, je souhaite un devis pour un palmier et du gazon naturel pour mon jardin.",
      ctaSecondary: "Découvrir le gazon naturel",
      faqH2: "Questions fréquentes - Palmier de jardin",
      faq: [
        ["Quel espace prévoir autour d'un palmier planté en pleine terre ?", "Prévoyez un espace dégagé suffisant pour l'étalement futur des racines et des palmes, généralement à au moins 1,5 à 2 mètres de toute construction ou canalisation."],
        ["Peut-on associer plusieurs palmiers dans un même jardin ?", "Oui, un alignement de palmiers le long d'une allée est un choix d'aménagement fréquent. Contactez-nous pour un devis groupé."],
      ],
    },
    en: {
      title: "Garden Palm Tree Tunisia | Landscape Design - Gazon Tunisie",
      metaDescription: "Garden palm tree in Tunisia to structure a driveway, pool or green space. Gazon Tunisie decorative palm tree at 490 DT/m, delivered across Tunisia.",
      eyebrow: "Outdoor design",
      h1: "Garden palm tree in Tunisia: structuring your outdoor space",
      intro: "In a Tunisian garden, the palm tree often plays the role of focal point: it draws the eye, structures pathways and provides light shade without weighing down the space. Here is how to integrate it well into your design.",
      crumb: [["Palm Tree Tunisia", "/palmier-tunisie/"], ["Garden palm tree", "/palmier-jardin/"]],
      h2a: "The role of the palm tree in garden design",
      pa: ["Unlike a hedge or flower bed, a single well-positioned palm tree is enough to give a garden character. It is often used along a driveway, around a pool, or standing alone in the centre of a lawn.",
        "Paired with our natural rolled lawn, the palm tree lets you quickly compose a complete outdoor space, from the ground up to the canopy."],
      h2b: "Where to position a palm tree in your garden?",
      listB: ["Along a driveway to accompany a walkway", "Around a pool for a resort effect", "Standing alone at the centre of a lawn as a focal point", "Near a villa entrance to mark the access"],
      ctaHeading: "Design your garden with palm tree and natural lawn",
      ctaText: "Decorative palm tree at 490 DT/m and natural lawn from 15 down to 9 DT/sqm depending on area, delivery quoted by address.",
      ctaButton: "Request a quote",
      ctaMessage: "Hello, I would like a quote for a palm tree and natural lawn for my garden.",
      ctaSecondary: "Discover natural lawn",
      faqH2: "Frequently asked questions - Garden palm tree",
      faq: [
        ["How much space should I leave around a palm tree planted in open ground?", "Leave enough clear space for future root and frond spread, generally at least 1.5 to 2 metres from any construction or pipework."],
        ["Can several palm trees be combined in the same garden?", "Yes, a row of palm trees along a driveway is a common design choice. Contact us for a grouped quote."],
      ],
    },
    ar: {
      title: "نخيل الحديقة تونس | تهيئة المساحات الخضراء - Gazon Tunisie",
      metaDescription: "نخيل الحديقة في تونس لتنظيم ممر أو مسبح أو مساحة خضراء. نخيل زينة من Gazon Tunisie بسعر 490 دينار/م، يُوصَّل في كل تونس.",
      eyebrow: "تهيئة خارجية",
      h1: "نخيل الحديقة في تونس: تنظيم مساحتكم الخارجية",
      intro: "في الحديقة التونسية، غالباً ما يلعب النخيل دور نقطة التركيز: يجذب الأنظار، ينظم الممرات ويوفر ظلاً خفيفاً دون إثقال المساحة. إليكم كيفية دمجه جيداً في تهيئتكم.",
      crumb: [["نخيل تونس", "/palmier-tunisie/"], ["نخيل الحديقة", "/palmier-jardin/"]],
      h2a: "دور النخيل في تهيئة الحديقة",
      pa: ["على عكس السياج أو الحوض، تكفي نخلة واحدة موضوعة جيداً لإضفاء طابع على الحديقة. تُستعمل غالباً على حافة ممر، حول مسبح، أو منفردة في وسط العشب.",
        "بالاقتران مع عشبنا الطبيعي على شكل لفائف، تتيح النخلة تكوين مساحة خارجية كاملة بسرعة، من الأرض حتى القمة."],
      h2b: "أين تضعون النخلة في حديقتكم؟",
      listB: ["على حافة ممر لمرافقة مسار", "حول مسبح لتأثير المنتجع", "منفردة في وسط العشب كنقطة تركيز", "قرب مدخل فيلا لتمييز الدخول"],
      ctaHeading: "كوّنوا حديقتكم بنخلة وعشب طبيعي",
      ctaText: "نخلة زينة بسعر 490 دينار/م وعشب طبيعي بسعر 15 أو 9 دينار/م² حسب المساحة، توصيل حسب عنوانكم.",
      ctaButton: "اطلبوا عرض سعر",
      ctaMessage: "مرحباً، أود عرض سعر لنخلة وعشب طبيعي لحديقتي.",
      ctaSecondary: "اكتشفوا العشب الطبيعي",
      faqH2: "أسئلة شائعة - نخيل الحديقة",
      faq: [
        ["ما هي المساحة الواجب توفيرها حول نخلة مغروسة في تربة مفتوحة؟", "وفروا مساحة كافية لامتداد الجذور والسعف مستقبلاً، عادة على بعد 1.5 إلى 2 متر على الأقل من أي بناء أو أنابيب."],
        ["هل يمكن الجمع بين عدة نخيل في نفس الحديقة؟", "نعم، صف من النخيل على طول ممر خيار تهيئة شائع. تواصلوا معنا لعرض سعر مجمّع."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/palmier-jardin/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
      heroImage: { src: "/palmier-classique.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/gazon-tunisie/", lang) },
      },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function palmierDecoratifPage(lang) {
  const T = {
    fr: {
      title: "Palmier décoratif Tunisie - Gazon Tunisie",
      metaDescription: "Palmier décoratif en Tunisie pour terrasse, entrée de villa ou intérieur lumineux. Palmier Gazon Tunisie à 490 DT/m, livraison dans toute la Tunisie.",
      eyebrow: "Décoration extérieure",
      h1: "Palmier décoratif en Tunisie : effet immédiat pour votre extérieur",
      intro: "Au-delà du grand jardin, le palmier décoratif trouve aussi sa place sur une terrasse, près d'une entrée ou dans un patio lumineux, pour un effet exotique immédiat et peu d'entretien.",
      crumb: [["Palmier Tunisie", "/palmier-tunisie/"], ["Palmier décoratif", "/palmier-decoratif/"]],
      h2a: "Un palmier décoratif pour chaque type d'espace",
      pa: ["Selon la variété et la taille, un palmier décoratif s'adapte aussi bien à une grande propriété qu'à une terrasse urbaine ou un patio. Il apporte une touche méditerranéenne reconnaissable en un seul élément."],
      h2b: "Usages courants du palmier décoratif",
      listB: ["En pot sur une terrasse ou un balcon spacieux", "De part et d'autre d'une entrée de villa ou d'un portail", "Dans un patio ou une cour intérieure lumineuse", "Pour habiller les abords d'une piscine résidentielle"],
      faqH2: "Questions fréquentes - Palmier décoratif",
      faq: [
        ["Un palmier décoratif peut-il rester en pot durablement ?", "Certaines variétés s'adaptent bien à la culture en pot pendant plusieurs années, à condition de prévoir un contenant suffisamment grand et un arrosage régulier."],
        ["Le palmier décoratif convient-il aux professionnels (hôtels, restaurants) ?", "Oui, de nombreux établissements السياحية والتجارية choisissent le palmier décoratif pour leur entrée ou leur terrasse. Contactez-nous pour une commande en volume."],
      ],
    },
    en: {
      title: "Decorative Palm Tree Tunisia - Gazon Tunisie",
      metaDescription: "Decorative palm tree in Tunisia for terrace, villa entrance or bright interior. Gazon Tunisie palm tree at 490 DT/m, delivery across Tunisia.",
      eyebrow: "Outdoor decoration",
      h1: "Decorative palm tree in Tunisia: instant effect for your outdoor space",
      intro: "Beyond the large garden, the decorative palm tree also finds its place on a terrace, near an entrance or in a bright patio, for an immediate exotic effect and little maintenance.",
      crumb: [["Palm Tree Tunisia", "/palmier-tunisie/"], ["Decorative palm tree", "/palmier-decoratif/"]],
      h2a: "A decorative palm tree for every type of space",
      pa: ["Depending on the variety and size, a decorative palm tree suits a large property just as well as an urban terrace or patio. It brings a recognisable Mediterranean touch in a single element."],
      h2b: "Common uses of the decorative palm tree",
      listB: ["Potted on a spacious terrace or balcony", "On either side of a villa entrance or gate", "In a bright patio or interior courtyard", "To dress the surroundings of a residential pool"],
      faqH2: "Frequently asked questions - Decorative palm tree",
      faq: [
        ["Can a decorative palm tree stay potted long term?", "Some varieties adapt well to pot cultivation for several years, provided you use a sufficiently large container and water regularly."],
        ["Is the decorative palm tree suitable for businesses (hotels, restaurants)?", "Yes, many tourist establishments and businesses choose the decorative palm tree for their entrance or terrace. Contact us for a bulk order."],
      ],
    },
    ar: {
      title: "نخيل زينة تونس - Gazon Tunisie",
      metaDescription: "نخيل زينة في تونس للتراس أو مدخل الفيلا أو الداخل المضيء. نخيل Gazon Tunisie بسعر 490 دينار/م، توصيل في كل تونس.",
      eyebrow: "زينة خارجية",
      h1: "نخيل زينة في تونس: تأثير فوري لمساحتكم الخارجية",
      intro: "بخلاف الحديقة الكبيرة، تجد نخلة الزينة مكانها أيضاً على تراس، قرب مدخل، أو في فناء مضيء، لتأثير استوائي فوري وعناية قليلة.",
      crumb: [["نخيل تونس", "/palmier-tunisie/"], ["نخيل زينة", "/palmier-decoratif/"]],
      h2a: "نخلة زينة لكل نوع من المساحات",
      pa: ["حسب الصنف والحجم، تتكيف نخلة الزينة مع عقار كبير كما مع تراس حضري أو فناء. تضيف لمسة متوسطية مميزة بعنصر واحد."],
      h2b: "الاستعمالات الشائعة لنخيل الزينة",
      listB: ["في أصيص على تراس أو شرفة واسعة", "على جانبي مدخل فيلا أو بوابة", "في فناء أو باحة داخلية مضيئة", "لتزيين محيط مسبح سكني"],
      faqH2: "أسئلة شائعة - نخيل زينة",
      faq: [
        ["هل يمكن أن تبقى نخلة الزينة في أصيص لمدة طويلة؟", "تتكيف بعض الأصناف جيداً مع الزراعة في أصيص لعدة سنوات، بشرط توفير وعاء كبير بما فيه الكفاية وري منتظم."],
        ["هل تناسب نخلة الزينة المهنيين (فنادق، مطاعم)؟", "نعم، تختار العديد من المؤسسات السياحية والتجارية نخلة الزينة لمدخلها أو تراسها. تواصلوا معنا لطلبية بكميات كبيرة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/palmier-decoratif/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
      heroImage: { src: "/palmier-washington.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...palmierCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/palmier-tunisie/", lang), pillarPage(lang));
  registerPage(localizedPath("/acheter-palmier/", lang), acheterPalmierPage(lang));
  registerPage(localizedPath("/palmier-jardin/", lang), palmierJardinPage(lang));
  registerPage(localizedPath("/palmier-decoratif/", lang), palmierDecoratifPage(lang));
}

module.exports = { build };
