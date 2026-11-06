const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");
const { quoteConfig } = require("../data/quote-config");

function relatedCluster(lang) {
  const T = {
    fr: {
      h2: "Explorez notre offre de gazon naturel",
      links: [
        ["Gazon Tunisie", "/gazon-tunisie/", "La page de référence : prix, zones, commande"],
        ["Gazon naturel", "/gazon-naturel/", "Naturel vs synthétique, ce qu'il faut savoir"],
        ["Gazon en rouleau", "/gazon-en-rouleau/", "Format, dimensions, calcul de surface"],
        ["Acheter du gazon", "/acheter-gazon/", "Comment commander en 3 étapes"],
        ["Gazon Grand Tunis", "/gazon-grand-tunis/", "Livraison rapide dans le Grand Tunis"],
        ["Gazon Nabeul", "/gazon-nabeul/", "Livraison rapide depuis notre dépôt de Nabeul"],
        ["Palmier décoratif", "/palmier-tunisie/", "Notre autre produit phare, 500 DT/m"],
        ["Toutes les zones de livraison", "/livraison/", "Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet..."],
      ],
    },
    en: {
      h2: "Explore our natural lawn range",
      links: [
        ["Lawn Tunisia", "/gazon-tunisie/", "The reference page: price, zones, ordering"],
        ["Natural lawn", "/gazon-naturel/", "Natural vs synthetic, what you need to know"],
        ["Rolled lawn", "/gazon-en-rouleau/", "Format, dimensions, area calculation"],
        ["Buy lawn", "/acheter-gazon/", "How to order in 3 steps"],
        ["Lawn Greater Tunis", "/gazon-grand-tunis/", "Fast delivery in Greater Tunis"],
        ["Lawn Nabeul", "/gazon-nabeul/", "Fast delivery from our Nabeul depot"],
        ["Decorative palm tree", "/palmier-tunisie/", "Our other flagship product, 500 DT/m"],
        ["All delivery zones", "/livraison/", "Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet..."],
      ],
    },
    ar: {
      h2: "اكتشفوا عرضنا من العشب الطبيعي",
      links: [
        ["عشب تونس", "/gazon-tunisie/", "الصفحة المرجعية: السعر، المناطق، الطلب"],
        ["عشب طبيعي", "/gazon-naturel/", "طبيعي مقابل اصطناعي، ما يجب معرفته"],
        ["عشب على شكل لفائف", "/gazon-en-rouleau/", "الشكل، الأبعاد، حساب المساحة"],
        ["شراء العشب", "/acheter-gazon/", "كيفية الطلب في 3 خطوات"],
        ["عشب تونس الكبرى", "/gazon-grand-tunis/", "توصيل سريع في تونس الكبرى"],
        ["عشب نابل", "/gazon-nabeul/", "توصيل سريع من مستودعنا بنابل"],
        ["نخيل زينة", "/palmier-tunisie/", "منتجنا الرئيسي الآخر، 500 دينار/م"],
        ["كل مناطق التوصيل", "/livraison/", "سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات..."],
      ],
    },
  };
  const t = T[lang];
  return {
    h2: t.h2,
    links: t.links.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
  };
}

function guidesCluster(lang) {
  const T = {
    fr: {
      h2: "Guides et conseils pour réussir votre gazon naturel",
      links: [
        ["Comment poser du gazon en rouleau", "/blog/comment-poser-gazon-en-rouleau/", "Le guide étape par étape"],
        ["Entretenir son gazon après la pose", "/blog/entretien-gazon-apres-pose/", "Arrosage, tonte et engrais"],
        ["Quand planter du gazon en Tunisie", "/blog/quand-planter-gazon-tunisie/", "Le calendrier par saison"],
      ],
    },
    en: {
      h2: "Guides and tips for a successful natural lawn",
      links: [
        ["How to lay rolled lawn", "/blog/comment-poser-gazon-en-rouleau/", "The step-by-step guide"],
        ["Caring for your lawn after laying", "/blog/entretien-gazon-apres-pose/", "Watering, mowing and fertilizer"],
        ["When to plant lawn in Tunisia", "/blog/quand-planter-gazon-tunisie/", "The season-by-season calendar"],
      ],
    },
    ar: {
      h2: "أدلة ونصائح لعشب ناجح",
      links: [
        ["كيف تركبون العشب على شكل لفائف", "/blog/comment-poser-gazon-en-rouleau/", "الدليل خطوة بخطوة"],
        ["العناية بعشبكم بعد التركيب", "/blog/entretien-gazon-apres-pose/", "الري والجزّ والسماد"],
        ["متى تغرسون العشب في تونس", "/blog/quand-planter-gazon-tunisie/", "التقويم حسب الفصول"],
      ],
    },
  };
  const t = T[lang];
  return {
    h2: t.h2,
    links: t.links.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
  };
}

function gazonCta(lang) {
  const T = {
    fr: {
      heading: "Commandez votre gazon naturel dès aujourd'hui",
      text: `${SITE.products.gazon.priceLabel}, livraison calculée selon votre adresse partout en Tunisie.`,
      buttonLabel: "Commander sur WhatsApp",
      whatsappMessage: "Bonjour, je souhaite commander du gazon naturel en rouleau. Voici la surface à couvrir : ",
      secondaryLabel: "Voir les zones de livraison",
    },
    en: {
      heading: "Order your natural lawn today",
      text: `${SITE.products.gazon.priceLabel}, delivery quoted by address anywhere in Tunisia.`,
      buttonLabel: "Order on WhatsApp",
      whatsappMessage: "Hello, I would like to order natural rolled lawn. Here is the area to cover: ",
      secondaryLabel: "See delivery zones",
    },
    ar: {
      heading: "اطلبوا عشبكم الطبيعي اليوم",
      text: `${SITE.products.gazon.priceLabel}، توصيل حسب عنوانكم في كل تونس.`,
      buttonLabel: "اطلبوا عبر واتساب",
      whatsappMessage: "مرحباً، أود طلب عشب طبيعي على شكل لفائف. إليكم المساحة المطلوب تغطيتها: ",
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
      title: "Gazon Tunisie | Prix gazon naturel, pose et livraison en Tunisie",
      metaDescription: "Gazon Tunisie : gazon naturel en rouleau à prix clair, livraison partout en Tunisie, conseils pour la pose et devis rapide selon votre surface.",
      eyebrow: "Gazon américain & Paspalum",
      h1: "Gazon Tunisie : gazon naturel en rouleau, prix, pose et livraison",
      intro: "Gazon Tunisie aide les particuliers et les professionnels à choisir le bon gazon naturel en Tunisie, à calculer le prix au m² et à obtenir un devis rapide avant toute commande. Nous livrons du gazon en rouleau dans toute la Tunisie avec des conseils clairs, un tarif transparent et un accompagnement avant la pose.",
      breadcrumbLabel: "Gazon Tunisie",
      productDescription: "Gazon naturel en rouleau, prêt à poser, vendu au m² en Tunisie. Livraison partout en Tunisie, frais de transport calculés selon votre adresse.",
      h2a: "Le gazon naturel chez Gazon Tunisie",
      pa: ["Que vous aménagiez un jardin de villa, les abords d'une piscine, un terrain privé ou un espace vert professionnel, le gazon naturel en rouleau apporte un rendu immédiat, plus élégant et plus confortable qu'un terrain nu.", "Chez Gazon Tunisie, nous vous aidons à choisir entre les différents types de gazon selon votre surface, votre exposition au soleil, votre sol et votre budget. Nous vous indiquons le prix au m², les frais de livraison et la meilleure solution avant votre commande."],
      h2b: "Pourquoi choisir notre gazon naturel ?",
      listB: ["Prix clair et dégressif selon la surface commandée", "Gazon livré en rouleaux prêts à poser", "Conseils de choix, préparation du sol et pose", "Livraison dans toute la Tunisie selon votre région", "Accompagnement rapide via WhatsApp et devis personnalisé"],
      quoteH2: "Demandez votre devis en quelques secondes",
      quoteIntro: "Indiquez votre surface, votre ville et le type de gazon souhaité. Nous vous répondrons avec le tarif, les frais de livraison et le bon conseil avant toute commande.",
      h2types: "Deux types de gazon, au même tarif",
      pTypes: ["Gazon Tunisie propose deux références de gazon naturel en rouleau : le gazon américain et le gazon Paspalum. À partir de 9 DT/m² pour 50 m² ou plus ; sous 50 m², le prix est établi sur devis.", "Le seuil de 50 m² s'applique à la surface totale commandée, quel que soit le type choisi. Notre équipe vous oriente selon l'utilisation, la région et le niveau d'entretien souhaité."],
      h2c: "Tarif du gazon selon la surface commandée",
      headersC: ["Surface commandée", "Tarif du gazon", "Livraison"],
      rowsC: [["Moins de 50 m²", "Sur devis", "Selon votre adresse"], ["50 m² et plus", "À partir de 9 DT/m²", "Selon votre adresse"]],
      faqH2: "Questions fréquentes sur le gazon naturel en Tunisie",
      faq: [
        ["Quel est le prix du gazon en Tunisie chez Gazon Tunisie ?", "À partir de 9 DT/m² pour 50 m² ou plus. Pour une surface inférieure à 50 m², le prix et la livraison sont communiqués sur devis selon votre adresse."],
        ["Quel type de gazon choisir entre américain et Paspalum ?", "Le gazon américain convient souvent aux jardins très exposés au soleil et à des surfaces demandant un rendu dense. Le Paspalum est apprécié pour son aspect fin et sa bonne adaptation au climat tunisien. Nous vous recommandons le meilleur choix selon votre projet."],
        ["Le gazon est-il livré prêt à poser ?", "Oui. Le gazon est livré en rouleaux prêts à être installés sur un sol préparé. Nous recommandons de le poser rapidement après réception pour une meilleure reprise."],
        ["Livrez-vous dans toute la Tunisie ?", "Oui. Nous livrons dans la plupart des villes et régions de Tunisie, avec un devis de livraison adapté à votre zone et à la quantité commandée."],
      ],
    },
    en: {
      title: "Gazon Tunisie | Natural lawn Tunisia - Price, installation and delivery",
      metaDescription: "Find the best natural lawn in Tunisia: clear pricing, installation advice, fast delivery and a custom quote based on your surface area.",
      eyebrow: "American & Paspalum lawn",
      h1: "Gazon Tunisie: natural lawn, price, installation and delivery",
      intro: "Gazon Tunisie helps homeowners and professionals choose the right natural lawn in Tunisia, understand the price per m² and get a fast quote before placing an order. We deliver rolled lawn across Tunisia with clear advice, transparent pricing and support before installation.",
      breadcrumbLabel: "Gazon Tunisie",
      productDescription: "Natural rolled lawn, ready to lay, sold by square meter in Tunisia. Delivered throughout Tunisia, with freight quoted by address.",
      h2a: "Natural lawn at Gazon Tunisie",
      pa: ["Whether for a villa garden, pool area, private plot or professional green space, natural rolled lawn delivers an immediate and elegant result, with better comfort than bare soil.", "At Gazon Tunisie, we help you choose the right lawn based on your surface area, sun exposure, soil conditions and budget. We explain the price per m², delivery charges and the best option before you order."],
      h2b: "Why choose our natural lawn?",
      listB: ["Clear pricing that decreases with total area ordered", "Rolled lawn delivered ready to lay", "Advice on choice, soil preparation and installation", "Delivery across Tunisia depending on your region", "Fast support via WhatsApp and a personalized quote"],
      quoteH2: "Request your quote in a few seconds",
      quoteIntro: "Tell us your area, your city and the lawn type you want. We will send you the price, the delivery cost and the right recommendation before any order.",
      h2types: "Two lawn types, one price",
      pTypes: ["Gazon Tunisie offers two natural rolled lawn options: American lawn and Paspalum lawn. Pricing starts at 9 DT/sqm for 50 sqm or more; below 50 sqm, the price is quoted on request.", "The 50 sqm threshold applies to the total surface area ordered, regardless of the type chosen. Our team advises you based on usage, region and maintenance level."],
      h2c: "Lawn price by ordered area",
      headersC: ["Ordered area", "Lawn price", "Delivery"],
      rowsC: [["Under 50 sqm", "Quoted", "Quoted by address"], ["50 sqm and above", "From 9 DT/sqm", "Quoted by address"]],
      faqH2: "Frequently asked questions about natural lawn in Tunisia",
      faq: [
        ["What is the lawn price in Tunisia at Gazon Tunisie?", "Pricing starts at 9 DT/sqm for 50 sqm or more. For areas under 50 sqm, the lawn and delivery prices are quoted according to your address."],
        ["Which lawn type should I choose: American or Paspalum?", "American lawn is often preferred for dense coverage and strong sun resistance. Paspalum stands out for its finer leaves and good adaptation to the Tunisian climate. We recommend the best option according to your project."],
        ["Is the lawn delivered ready to lay?", "Yes. The lawn is delivered in rolls ready to install on prepared soil. We recommend laying it quickly after receiving it for better rooting."],
        ["Do you deliver across Tunisia?", "Yes. We deliver to most cities and regions of Tunisia, with delivery costs tailored to your area and the quantity ordered."],
      ],
    },
    ar: {
      title: "Gazon Tunisie | عشب طبيعي في تونس - السعر والتركيب والتوصيل",
      metaDescription: "اعثروا على أفضل عشب طبيعي في تونس: أسعار واضحة، نصائح تركيب، توصيل سريع وعرض سعر حسب المساحة المطلوبة.",
      eyebrow: "عشب أمريكي وباسبالوم",
      h1: "Gazon Tunisie: عشب طبيعي، السعر والتركيب والتوصيل",
      intro: "تساعدكم Gazon Tunisie على اختيار العشب الطبيعي المناسب في تونس، وفهم السعر لكل متر مربع، والحصول على عرض سعر سريع قبل الطلب. نوصل العشب على شكل لفائف في كل تونس، مع نصائح واضحة، أسعار شفافة ودعم قبل التركيب.",
      breadcrumbLabel: "Gazon Tunisie",
      productDescription: "عشب طبيعي على شكل لفائف، جاهز للتركيب، يُباع بالمتر المربع في تونس. توصيل في كل تونس مع حساب تكلفة التوصيل حسب عنوانكم.",
      h2a: "العشب الطبيعي عند Gazon Tunisie",
      pa: ["سواء كان الأمر حديقة فيلا، محيط مسبح، أرض خاصة أو مساحة خضراء مهنية، يوفر العشب الطبيعي على شكل لفائف نتيجة فورية أنيقة وأكثر راحة من التربة العارية.", "في Gazon Tunisie، نساعدكم على اختيار العشب المناسب حسب المساحة، التعرض للشمس، نوع التربة والميزانية. نوضح السعر لكل متر مربع ومصاريف التوصيل والخيار الأنسب قبل الطلب."],
      h2b: "لماذا تختارون عشبنا الطبيعي؟",
      listB: ["سعر واضح يتناقص حسب المساحة الإجمالية المطلوبة", "عشب على شكل لفائف يُوَصَّل جاهزاً للتركيب", "نصائح حول الاختيار، تحضير التربة والتركيب", "توصيل في كل تونس حسب منطقتكم", "دعم سريع عبر واتساب وعرض سعر شخصي"],
      quoteH2: "اطلبوا عرض سعركم خلال ثوانٍ",
      quoteIntro: "أخبرونا بمساحتكم، مدينتكم ونوع العشب المطلوب. سنرسل إليكم السعر، مصاريف التوصيل والنصيحة المناسبة قبل أي طلب.",
      h2types: "نوعان من العشب، بنفس السعر",
      pTypes: ["تقدّم Gazon Tunisie نوعين من العشب الطبيعي على شكل لفائف: العشب الأمريكي وعشب الباسبالوم. يبدأ السعر من 9 دنانير/م² للمساحات التي تساوي 50 م² أو أكثر، أما المساحات الأقل فتُحتسب حسب عرض السعر.", "تنطبق عتبة 50 م² على المساحة الإجمالية لطلبيتكم، مهما كان النوع المختار. يرشح لكم فريقنا النوع الأنسب حسب الاستخدام والمنطقة ومستوى الصيانة."],
      h2c: "سعر العشب حسب المساحة المطلوبة",
      headersC: ["المساحة المطلوبة", "سعر العشب", "التوصيل"],
      rowsC: [["أقل من 50 م²", "حسب العرض", "حسب عنوانكم"], ["50 م² فأكثر", "ابتداءً من 9 دنانير/م²", "حسب عنوانكم"]],
      faqH2: "أسئلة شائعة حول العشب الطبيعي في تونس",
      faq: [
        ["ما هو سعر العشب في تونس لدى Gazon Tunisie؟", "يبدأ السعر من 9 دنانير/م² للمساحات من 50 م² فأكثر. أما المساحات الأقل وسعر التوصيل فيتم تحديدهما حسب عنوانكم عبر عرض سعر."],
        ["ما نوع العشب الأنسب بين الأمريكي والباسبالوم؟", "يُفضّل العشب الأمريكي غالباً لظهوره الكثيف ومتانته في الشمس. يبرز الباسبالوم بأوراقه الأكثر نعومة وتحمله الجيد للمناخ التونسي. نرشّح لكم النوع الأنسب حسب المشروع."],
        ["هل يُوصَّل العشب جاهزاً للتركيب؟", "نعم. يُوصّل العشب على شكل لفائف جاهزة للتركيب مباشرة على تربة مُحضّرة. ننصح بتركيبه بسرعة بعد الاستلام لتحسين التجذر."],
        ["هل توصلون في كل تونس؟", "نعم. نوصل إلى أغلب المدن والمناطق في تونس، مع حساب تكلفة التوصيل حسب منطقتكم والكمية المطلوبة."],
      ],
    },
  };
  const t = T[lang];
  const orderText = {
    fr: {
      h2: "Choisissez votre formule de commande",
      paragraphs: ["Vous pouvez choisir le gazon avec livraison seulement, le gazon avec livraison et pose, ou récupérer votre gazon auprès de notre emplacement à Grombalia, Nabeul.", "Pour passer commande, envoyez-nous un message sur WhatsApp. L'un de nos conseillers vous accompagne dans le choix selon votre projet et votre besoin. Une avance est demandée lors de la confirmation de la commande ; le solde est payé à la livraison ou après la pose, selon la formule choisie."],
      listH2: "Les étapes de la commande",
      list: ["Envoyer votre ville, votre surface et votre besoin sur WhatsApp", "Choisir entre retrait à Grombalia, livraison seule ou livraison avec pose", "Régler l'avance au moment de confirmer la commande", "Payer le reste lors de la livraison ou après la pose"],
    },
    en: {
      h2: "Choose your order option",
      paragraphs: ["You can choose lawn with delivery only, lawn with delivery and installation, or collect your lawn from our location in Grombalia, Nabeul.", "To order, send us a WhatsApp message. One of our advisers will guide you according to your project and needs. A deposit is paid when the order is confirmed; the balance is paid on delivery or after installation, depending on the selected option."],
      listH2: "Order steps",
      list: ["Send your city, area and needs on WhatsApp", "Choose collection in Grombalia, delivery only or delivery with installation", "Pay the deposit when confirming the order", "Pay the balance on delivery or after installation"],
    },
    ar: {
      h2: "اختاروا طريقة طلبكم",
      paragraphs: ["يمكنكم اختيار العشب مع التوصيل فقط، أو العشب مع التوصيل والتركيب، أو استلام العشب من موقعنا في قرمبالية، نابل.", "للطلب، أرسلوا لنا رسالة عبر واتساب. يرافقكم أحد مستشارينا في الاختيار حسب مشروعكم وحاجتكم. يتم دفع عربون عند تأكيد الطلب، ثم دفع الباقي عند التوصيل أو بعد التركيب حسب الصيغة المختارة."],
      listH2: "مراحل الطلب",
      list: ["أرسلوا مدينتكم ومساحتكم وحاجتكم عبر واتساب", "اختاروا الاستلام من قرمبالية أو التوصيل فقط أو التوصيل مع التركيب", "ادفعوا العربون عند تأكيد الطلب", "ادفعوا الباقي عند التوصيل أو بعد التركيب"],
    },
  }[lang];
  return renderContentPage({
    basePath: "/gazon-tunisie/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: [{ label: t.breadcrumbLabel, path: localizedPath("/gazon-tunisie/", lang) }],
    product: {
      key: "gazon-naturel",
      name: SITE.products.gazon.name,
      price: SITE.products.gazon.priceFrom,
      priceHigh: SITE.products.gazon.priceBelow,
      currency: SITE.products.gazon.currency,
      unit: SITE.products.gazon.unit,
      description: t.productDescription,
      image: SITE.products.gazon.image,
    },
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "text", h2: t.h2types, paragraphs: t.pTypes },
      { type: "quote", h2: t.quoteH2, intro: t.quoteIntro, config: quoteConfig(lang) },
      { type: "text", h2: orderText.h2, paragraphs: orderText.paragraphs },
      { type: "list", h2: orderText.listH2, items: orderText.list, ordered: true },
      { type: "table", h2: t.h2c, headers: t.headersC, rows: t.rowsC },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "related", ...guidesCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonEnRouleauPage(lang) {
  const T = {
    fr: {
      title: "Gazon en rouleau Tunisie | Prix, dimensions et pose",
      metaDescription: "Tout savoir sur le gazon en rouleau en Tunisie : dimensions des plaques, calcul de la surface, préparation du sol, prix au m² et pose de gazon prêt à installer.",
      eyebrow: "Gazon en rouleau",
      h1: "Gazon en rouleau en Tunisie : format, prix et pose",
      intro: "Le gazon en rouleau est la solution la plus rapide pour obtenir un jardin vert dès les premiers jours. En Tunisie, il est très apprécié pour sa pose simple, son rendu immédiat et son adaptation aux villas, piscines, terrains privés et espaces professionnels. Avant de commander, il faut bien calculer la surface, préparer le sol et comparer le prix au m².",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon en rouleau", "/gazon-en-rouleau/"]],
      h2a: "Comment se présente le gazon en rouleau ?",
      pa: ["Chaque plaque de gazon en rouleau est livrée avec une fine couche de terre et des racines, ce qui permet un enracinement rapide une fois posé. Le rendu est immédiat et le terrain est utilisable beaucoup plus vite qu’avec un semis classique.", "Les rouleaux se présentent sous forme de plaques adaptées aux surfaces de jardin, de terrasse, de bac, de bordure ou d’espace verte. En Tunisie, ce format est très utilisé pour les projets de pose rapide et les travaux d’aménagement extérieur."],
      h2b: "Comment calculer la surface de gazon nécessaire ?",
      introB: "Avant de commander, mesurez votre terrain pour connaître le nombre de m² à couvrir :",
      listB: ["Mesurez la longueur et la largeur de chaque zone à engazonner", "Multipliez longueur x largeur pour obtenir la surface en m²", "Additionnez les surfaces si votre jardin comporte plusieurs zones distinctes", "Ajoutez une marge de 5 à 10% pour les découpes et les bords irréguliers", "Le prix est calculé selon la surface totale commandée, avec le tarif appliqué au m²"],
      h2c: "Les grandes étapes de la pose",
      listC: ["Désherber et niveler le sol, retirer cailloux et débris", "Enrichir la terre avec un peu de compost ou d’engrais si nécessaire", "Dérouler les plaques de gazon en quinconce, sans laisser d’espace entre elles", "Tasser légèrement avec un rouleau ou le dos d’un râteau pour assurer le contact avec le sol", "Arroser abondamment dans les heures qui suivent la pose"],
      ctaHeading: "Recevez votre gazon en rouleau prêt à poser",
      ctaText: "15 DT/m² sous 50 m², 9 DT/m² à partir de 50 m². Livraison calculée selon votre adresse.",
      ctaButton: "Commander sur WhatsApp",
      ctaMessage: "Bonjour, je souhaite commander du gazon en rouleau. Voici la surface à couvrir : ",
      ctaSecondary: "Lire le guide de pose complet",
      faqH2: "Questions fréquentes sur le gazon en rouleau",
      faq: [
        ["Quelle est la taille d'une plaque de gazon en rouleau ?", "Les plaques mesurent généralement entre 40x60 cm et 40x200 cm. Le prix est calculé au m² total commandé, quelle que soit la découpe."],
        ["Combien de temps le gazon en rouleau reste-t-il utilisable avant la pose ?", "Il est recommandé de poser le gazon dans les 24 à 48 heures suivant la livraison pour garantir une bonne reprise."],
        ["Faut-il préparer le sol avant de recevoir le gazon ?", "Oui, un sol nivelé, désherbé et légèrement ameubli donne les meilleurs résultats. Nous pouvons vous conseiller selon votre terrain."],
        ["Quel est le prix du gazon en rouleau en Tunisie ?", "Chez Gazon Tunisie, le tarif est de 15 DT/m² sous 50 m² et de 9 DT/m² à partir de 50 m², avec livraison calculée selon votre adresse."],
      ],
    },
    en: {
      title: "Rolled lawn Tunisia | Price, dimensions and installation",
      metaDescription: "Everything you need to know about rolled lawn in Tunisia: dimensions, area calculation, soil prep, m² price and fast installation advice.",
      eyebrow: "Rolled lawn",
      h1: "Rolled lawn in Tunisia: format, price and installation",
      intro: "Rolled lawn is the fastest way to get a green garden right away. In Tunisia, it is widely used for villas, pool areas, private plots and professional outdoor spaces because it offers immediate coverage and a neat finish. Before ordering, it is important to estimate the surface area, prepare the soil and compare the price per square metre.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Rolled lawn", "/gazon-en-rouleau/"]],
      h2a: "What does rolled lawn look like?",
      pa: ["Each rolled lawn slab comes with a thin layer of soil and roots, which allows rapid anchoring once laid. The visual effect is immediate, and the surface becomes usable much sooner than with seeding.", "The rolls are designed for gardens, terraces, planters, borders and other landscaped spaces. In Tunisia, this format is popular for fast, neat and practical outdoor project execution."],
      h2b: "How to calculate the lawn area needed?",
      introB: "Before ordering, measure the plot to know the number of square metres to cover:",
      listB: ["Measure the length and width of each area to be lawned", "Multiply length by width to get the area in m²", "Add up the surfaces if your garden has several distinct zones", "Add a 5 to 10% margin for cuts and irregular edges", "The price is calculated according to the total area ordered and applied to the m² rate"],
      h2c: "The main laying steps",
      listC: ["Weed and level the ground, remove stones and debris", "Enrich the soil with a little compost or fertiliser if needed", "Unroll the lawn slabs in a staggered pattern without leaving gaps", "Press gently with a roller or the back of a rake to ensure contact with the soil", "Water abundantly in the hours following the laying"],
      ctaHeading: "Get your rolled lawn ready to install",
      ctaText: "15 DT/sqm under 50 sqm, 9 DT/sqm from 50 sqm. Delivery quoted by address.",
      ctaButton: "Order on WhatsApp",
      ctaMessage: "Hello, I would like to order rolled lawn. Here is the area to cover: ",
      ctaSecondary: "Read the full laying guide",
      faqH2: "Frequently asked questions about rolled lawn",
      faq: [
        ["What size is a rolled lawn slab?", "Slabs generally measure between 40x60 cm and 40x200 cm. The price is calculated on the total m² ordered, regardless of the cut."],
        ["How long can rolled lawn wait before installation?", "It is recommended to lay the lawn within 24 to 48 hours after delivery to guarantee good rooting."],
        ["Do I need to prepare the soil before receiving the lawn?", "Yes, a levelled, weeded and slightly loosened soil gives the best results. We can advise you based on your land."],
        ["What is the price of rolled lawn in Tunisia?", "At Gazon Tunisie, the price is 15 DT/sqm under 50 sqm and 9 DT/sqm from 50 sqm, with delivery charged according to your address."],
      ],
    },
    ar: {
      title: "عشب على شكل لفائف تونس | السعر والأبعاد والتركيب",
      metaDescription: "كل ما تحتاج معرفته عن العشب على شكل لفائف في تونس: الأبعاد، حساب المساحة، تحضير التربة، السعر لكل متر مربع ونصائح التركيب.",
      eyebrow: "عشب على شكل لفائف",
      h1: "عشب على شكل لفائف في تونس: الشكل والسعر والتركيب",
      intro: "العشب على شكل لفائف هو أسرع طريقة للحصول على حديقة خضراء فوراً. في تونس، يُستخدم كثيراً في الفلل، مناطق المسابح، الأراضي الخاصة والمشاريع الخارجية المهنية لأنه يوفر تغطية فورية ومظهر مرتب. قبل الطلب، من المهم حساب المساحة، تحضير التربة ومقارنة السعر لكل متر مربع.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب على شكل لفائف", "/gazon-en-rouleau/"]],
      h2a: "كيف يُقدَّم العشب على شكل لفائف؟",
      pa: ["تُزوَّد كل لوحة من العشب على شكل لفائف بطبقة رقيقة من التربة وجذور، ما يسمح بالتجذر السريع بمجرد تركيبه. النتيجة خضراء فوراً، وتصبح المساحة صالحة للاستخدام بشكل أسرع من البذر التقليدي.", "تُصمَّم اللّفائف للمساحات الجدارية، الشرفات، أحواض الزراعة، الحواف والحدائق. في تونس، هذا الشكل شائع جداً خصوصاً في مشاريع التهيئة الخارجية السريعة والمرتبطة."],
      h2b: "كيف تحسب مساحة العشب اللازمة؟",
      introB: "قبل الطلب، قيسوا أرضكم لمعرفة عدد الأمتار المربعة الواجب تغطيتها:",
      listB: ["قيسوا الطول والعرض لكل منطقة يراد تعشيبها", "اضربوا الطول في العرض للحصول على المساحة بالمتر المربع", "اجمعوا المساحات إذا كان لديك أكثر من منطقة", "أضيفوا هامشاً من 5 إلى 10% للقطع والحواف غير المنتظمة", "يحسب السعر على أساس المساحة الإجمالية المطلوبة والتعريفة المطبقة للمتر المربع"],
      h2c: "المراحل الأساسية للتركيب",
      listC: ["إزالة الأعشاب الضارة وتسوية التربة وإزالة الحصى والمخلفات", "إثراء التربة بقليل من السماد إذا لزم الأمر", "فرد ألواح العشب بشكل متداخل بدون ترك فراغات", "الدك الخفيف بأسطوانة أو ظهر مِجرفة لضمان التلامس مع التربة", "الري الغزير في الساعات التي تلي التركيب"],
      ctaHeading: "احصلوا على عشبكم على شكل لفائف جاهزاً للتركيب",
      ctaText: "15 دينار/م² دون 50 م²، 9 دينار/م² ابتداءً من 50 م². توصيل حسب عنوانكم.",
      ctaButton: "اطلبوا عبر واتساب",
      ctaMessage: "مرحباً، أود طلب عشب على شكل لفائف. إليكم المساحة الواجب تغطيتها: ",
      ctaSecondary: "اقرؤوا دليل التركيب الكامل",
      faqH2: "أسئلة شائعة حول العشب على شكل لفائف",
      faq: [
        ["ما هو حجم لوح العشب على شكل لفائف؟", "تتراوح أبعاد الألواح عادة بين 40x60 سم و40x200 سم. يُحسب السعر حسب مجموع الأمتار المربعة المطلوبة، مهما كان القطع."],
        ["كم من الوقت يبقى العشب على شكل لفائف صالحاً قبل التركيب؟", "يُنصح بتركيب العشب خلال 24 إلى 48 ساعة من التوصيل لضمان تجذر جيد."],
        ["هل يجب تحضير التربة قبل استلام العشب؟", "نعم، تربة مستوية ومنزوعة الأعشاب ومفككة قليلاً تعطي أفضل النتائج. يمكننا إرشادكم حسب أرضكم."],
        ["ما هو سعر العشب على شكل لفائف في تونس؟", "عند Gazon Tunisie، يبلغ السعر 15 دينار/م² في حال المساحات أقل من 50 م²، و9 دينار/م² ابتداءً من 50 م² مع حساب تكلفة التوصيل حسب العنوان."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-en-rouleau/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, intro: t.introB, items: t.listB },
      { type: "list", h2: t.h2c, items: t.listC },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonNaturelPage(lang) {
  const T = {
    fr: {
      title: "Gazon naturel Tunisie | Prix, variétés et conseils de pose",
      metaDescription: "Tout savoir sur le gazon naturel en Tunisie : variétés adaptées au climat, prix au m², préparation du sol, pose et livraison selon votre région.",
      eyebrow: "Gazon naturel",
      h1: "Gazon naturel en Tunisie : variétés, prix et entretien",
      intro: "Le gazon naturel reste le choix privilégié pour créer un jardin plus beau, plus frais et plus agréable à vivre en Tunisie. Pour bien choisir, il faut tenir compte du climat, du type de sol, de la surface et du budget. Gazon Tunisie vous aide à comparer les solutions disponibles, à estimer le prix au m² et à préparer votre commande sereinement.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon naturel", "/gazon-naturel/"]],
      h2a: "Qu'est-ce que le gazon naturel en rouleau ?",
      pa: ["Le gazon naturel en rouleau est cultivé en pleine terre puis découpé en plaques avec ses racines et une fine couche de terre, avant d'être livré et posé directement sur un sol préparé. Contrairement au semis, il offre un rendu vert immédiat.", "En Tunisie, les variétés utilisées sont sélectionnées pour leur résistance à la chaleur, leur capacité à conserver une couleur dense malgré des étés secs et leur adaptation aux jardins de villa, aux espaces de piscine et aux terrains extérieurs."],
      h2b: "Gazon naturel vs gazon synthétique",
      headersB: ["Critère", "Gazon naturel", "Gazon synthétique"],
      rowsB: [["Sensation et aspect", "Naturel, évolutif selon les saisons", "Uniforme, identique toute l'année"], ["Effet rafraîchissant", "Oui, abaisse la température au sol", "Non, peut chauffer au soleil"], ["Entretien", "Arrosage et tonte régulière", "Nettoyage occasionnel, pas de tonte"], ["Impact environnemental", "Favorable (absorption d'eau, biodiversité)", "Matière plastique non biodégradable"], ["Prix Gazon Tunisie", "15 ou 9 DT/m² selon la surface", "Non proposé actuellement"]],
      h2c: "Le gazon naturel est-il adapté au climat tunisien ?",
      introC: "Oui, à condition de choisir la bonne variété et d'adopter quelques bons réflexes :",
      listC: ["Arroser tôt le matin ou en soirée pour limiter l'évaporation en été", "Tondre régulièrement sans couper trop court pour préserver la fraîcheur du sol", "Prévoir un arrosage plus soutenu les deux premières semaines suivant la pose", "Adapter la fréquence d'arrosage selon la région (plus fréquent à Sfax ou Gabès qu'à Bizerte)"],
      faqH2: "Questions fréquentes sur le gazon naturel",
      faq: [
        ["Le gazon naturel demande-t-il beaucoup d'eau en Tunisie ?", "Les besoins en eau sont plus importants dans les régions chaudes et sèches du sud, et plus modérés dans le nord. Un arrosage adapté à la saison permet de limiter la consommation d'eau."],
        ["Combien de temps met le gazon naturel à s'enraciner ?", "Généralement entre 2 et 3 semaines, à condition de maintenir un arrosage régulier durant cette période."],
        ["Peut-on marcher sur le gazon naturel juste après la pose ?", "Il est préférable d'attendre 2 à 3 semaines avant un usage intensif, le temps que les racines s'installent correctement dans le sol."],
        ["Quel est le prix d'un gazon naturel en Tunisie ?", "Chez Gazon Tunisie, le prix est de 15 DT/m² sous 50 m² et de 9 DT/m² à partir de 50 m², avec les frais de livraison calculés selon l'adresse."],
      ],
    },
    en: {
      title: "Natural lawn Tunisia | Price, varieties and laying tips",
      metaDescription: "Everything you need to know about natural lawn in Tunisia: varieties suited to the climate, price per m², soil preparation, laying and delivery across the country.",
      eyebrow: "Natural lawn",
      h1: "Natural lawn in Tunisia: varieties, price and care",
      intro: "Natural lawn remains the preferred choice for creating a greener, fresher and more pleasant garden in Tunisia. To choose well, you need to consider the climate, soil type, surface area and budget. Gazon Tunisie helps you compare options, estimate the cost per m² and prepare your order with confidence.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Natural lawn", "/gazon-naturel/"]],
      h2a: "What is rolled natural lawn?",
      pa: ["Rolled natural lawn is grown in open ground and then cut into slabs with its roots and a thin layer of soil before being delivered and laid directly on prepared ground. Unlike seeding, it provides an immediate green result.", "In Tunisia, the varieties selected are chosen for their heat resistance, their ability to remain dense even in dry summers, and their suitability for villas, pool areas and outdoor spaces."],
      h2b: "Natural lawn vs synthetic lawn",
      headersB: ["Criterion", "Natural lawn", "Synthetic lawn"],
      rowsB: [["Feel and look", "Natural, changes with the seasons", "Uniform, identical throughout the year"], ["Cooling effect", "Yes, lowers ground temperature", "No, can heat up in the sun"], ["Maintenance", "Regular watering and mowing", "Occasional cleaning, no mowing"], ["Environmental impact", "Positive (water absorption, biodiversity)", "Plastic material not biodegradable"], ["Gazon Tunisie price", "15 or 9 DT/m² depending on the area", "Not currently offered"]],
      h2c: "Is natural lawn suitable for the Tunisian climate?",
      introC: "Yes, provided you choose the right variety and follow a few good practices:",
      listC: ["Water early in the morning or in the evening to limit evaporation in summer", "Mow regularly without cutting too short to preserve soil freshness", "Plan for more watering during the first two weeks after laying", "Adjust the watering frequency by region (more often in Sfax or Gabès than in Bizerte)"],
      faqH2: "Frequently asked questions about natural lawn",
      faq: [
        ["Does natural lawn need a lot of water in Tunisia?", "Water needs are higher in hot, dry southern regions and lower in the north. Watering adapted to the season helps reduce consumption."],
        ["How long does natural lawn take to root?", "Usually between 2 and 3 weeks, provided regular watering is maintained during that period."],
        ["Can you walk on natural lawn immediately after laying?", "It is best to wait 2 to 3 weeks before heavy use, to let the roots establish properly in the soil."],
        ["What is the price of natural lawn in Tunisia?", "At Gazon Tunisie, the price is 15 DT/m² for areas under 50 m² and 9 DT/m² from 50 m², with delivery costs calculated by address."],
      ],
    },
    ar: {
      title: "عشب طبيعي تونس | السعر والأنواع ونصائح التركيب",
      metaDescription: "كل ما تحتاج معرفته عن العشب الطبيعي في تونس: الأنواع المناسبة للمناخ، السعر للمتر المربع، تحضير التربة، التركيب والتوصيل حسب منطقتكم.",
      eyebrow: "عشب طبيعي",
      h1: "عشب طبيعي في تونس: الأنواع والسعر والعناية",
      intro: "يظل العشب الطبيعي الخيار المفضل لإنشاء حديقة أكثر جمالاً ونضارة وراحة في تونس. لاختيار العشب المناسب، عليك مراعاة المناخ، نوع التربة، المساحة والميزانية. يساعدكم Gazon Tunisie على مقارنة الخيارات وتقدير السعر بالمتر المربع والتحضير لطلبكم بثقة.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب طبيعي", "/gazon-naturel/"]],
      h2a: "ما هو العشب الطبيعي على شكل لفائف؟",
      pa: ["يُزرع العشب الطبيعي على شكل لفائف في تربة مفتوحة ثم يُقطع إلى ألواح بجذوره وطبقة رقيقة من التراب قبل أن يُوصّل ويُركّب مباشرة على تربة مُحضّرة. على عكس البذر، يوفر نتيجة خضراء فورية.", "في تونس، تُختار الأصناف المستعملة لمقاومتها للحرارة وقدرتها على الحفاظ على كثافة لونها في الصيف الجاف، كما أنها مناسبة للفلل، مناطق المسابح والمساحات الخارجية."],
      h2b: "العشب الطبيعي مقابل العشب الاصطناعي",
      headersB: ["المعيار", "العشب الطبيعي", "العشب الاصطناعي"],
      rowsB: [["الإحساس والمظهر", "طبيعي، يتغير حسب الفصول", "موحد، مطابق طوال السنة"], ["تأثير التبريد", "نعم، يخفض درجة حرارة التربة", "لا، يمكن أن يسخن تحت الشمس"], ["الصيانة", "ري وجزّ منتظم", "تنظيف عرضي، بدون جزّ"], ["الأثر البيئي", "إيجابي (امتصاص الماء، التنوع البيولوجي)", "مادة بلاستيكية غير قابلة للتحلل"], ["سعر Gazon Tunisie", "15 أو 9 دينار/م² حسب المساحة", "غير متوفر حالياً"]],
      h2c: "هل العشب الطبيعي مناسب للمناخ التونسي؟",
      introC: "نعم، بشرط اختيار الصنف المناسب واتباع بعض الممارسات الجيدة:",
      listC: ["الري في الصباح الباكر أو المساء لتقليل التبخر صيفاً", "الجزّ بانتظام دون قَصٍّ شديد للحفاظ على نضارة التربة", "التوقع بزيادة الري خلال أول أسبوعين بعد التركيب", "تكييف وتيرة الري حسب الجهة (أكثر في صفاقس أو قابس مقارنة ببنزرت)"],
      faqH2: "أسئلة شائعة حول العشب الطبيعي",
      faq: [
        ["هل يحتاج العشب الطبيعي كميات كبيرة من الماء في تونس؟", "تزداد احتياجات الماء في المناطق الحارة والجافة بالجنوب وتقل في الشمال. يساعد الري المناسب حسب الموسم على تقليل الاستهلاك."],
        ["كم من الوقت يحتاج العشب الطبيعي ليتجذر؟", "عادةً بين أسبوعين و3 أسابيع، بشرط الحفاظ على ري منتظم خلال هذه الفترة."],
        ["هل يمكن السير على العشب الطبيعي فور التركيب؟", "يُفضّل الانتظار 2 إلى 3 أسابيع قبل الاستخدام المكثف، حتى تستقر الجذور جيداً في التربة."],
        ["ما هو سعر العشب الطبيعي في تونس؟", "عند Gazon Tunisie، يبلغ السعر 15 دينار/م² في حالة المساحات أقل من 50 م²، و9 دينار/م² ابتداءً من 50 م²، مع حساب تكلفة التوصيل حسب العنوان."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-naturel/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "table", h2: t.h2b, headers: t.headersB, rows: t.rowsB },
      { type: "list", h2: t.h2c, intro: t.introC, items: t.listC },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function acheterGazonPage(lang) {
  const T = {
    fr: {
      title: "Acheter du gazon naturel en Tunisie | Gazon Tunisie",
      metaDescription: "Acheter du gazon naturel en Tunisie : 15 ou 9 DT/m² selon la surface, livraison partout, commande simple par WhatsApp en 3 étapes.",
      eyebrow: "Commander",
      h1: "Acheter du gazon naturel en Tunisie avec Gazon Tunisie",
      intro: "Commander du gazon naturel en Tunisie n'a jamais été aussi simple : un prix clair au m², des frais de livraison annoncés avant confirmation et une commande finalisée directement par WhatsApp.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Acheter du gazon", "/acheter-gazon/"]],
      h2a: "Comment acheter votre gazon en 3 étapes",
      listA: ["Mesurez la surface de votre jardin en m² à couvrir", "Contactez-nous par WhatsApp avec la surface souhaitée et votre ville", "Recevez votre gazon (frais de livraison calculés selon votre adresse) et procédez à la pose"],
      h2b: "Récapitulatif du prix",
      headersB: ["Produit", "Prix", "Livraison"],
      rowsB: [["Gazon naturel en rouleau", "15 DT/m² sous 50 m² · 9 DT/m² à partir de 50 m²", "Selon votre adresse"]],
      faqH2: "Questions fréquentes avant d'acheter",
      faq: [
        ["Y a-t-il une surface minimum de commande ?", "Non, vous commandez la surface exacte dont vous avez besoin, calculée au m². C'est le tarif qui change selon la surface : 15 DT/m² en dessous de 50 m², 9 DT/m² à partir de 50 m²."],
        ["Comment se passe le paiement ?", "Les modalités de paiement (à la livraison ou autre) vous sont communiquées lors de la confirmation de commande sur WhatsApp."],
        ["Puis-je commander pour un chantier professionnel ?", "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme pour des volumes plus importants."],
      ],
    },
    en: {
      title: "Buy Lawn in Tunisia | Order in 3 Steps - Gazon Tunisie",
      metaDescription: "How to buy natural lawn in Tunisia with Gazon Tunisie: price, delivery zones and simple ordering via WhatsApp. Lawn at 15 or 9 DT/sqm depending on area.",
      eyebrow: "Order",
      h1: "Buy natural lawn in Tunisia with Gazon Tunisie",
      intro: "Ordering natural lawn in Tunisia has never been simpler: a clear price per sqm, delivery fees confirmed before you order and an order finalised directly on WhatsApp.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Buy lawn", "/acheter-gazon/"]],
      h2a: "How to buy your lawn in 3 steps",
      listA: ["Measure the area of your garden in sqm to cover", "Contact us on WhatsApp with the desired area and your city", "Receive your lawn (delivery fees calculated for your address) and lay it"],
      h2b: "Price summary",
      headersB: ["Product", "Price", "Delivery"],
      rowsB: [["Natural rolled lawn", "15 DT/sqm under 50 sqm · 9 DT/sqm from 50 sqm", "Quoted by address"]],
      faqH2: "Frequently asked questions before buying",
      faq: [
        ["Is there a minimum order area?", "No, you order the exact area you need, calculated per sqm. It is the rate that changes with the area: 15 DT/sqm below 50 sqm, 9 DT/sqm from 50 sqm."],
        ["How does payment work?", "Payment terms (on delivery or otherwise) are communicated when you confirm your order on WhatsApp."],
        ["Can I order for a professional project?", "Yes, we supply both individuals and landscaping professionals for larger volumes."],
      ],
    },
    ar: {
      title: "شراء عشب طبيعي تونس – 15 أو 9 دينار/م² | Gazon Tunisie",
      metaDescription: "اشتروا عشباً طبيعياً في تونس بسعر 15 أو 9 دينار/م² حسب المساحة، بمصاريف توصيل تُحتسب حسب عنوانكم. طلب بسيط في 3 خطوات عبر واتساب.",
      eyebrow: "الطلب",
      h1: "شراء العشب الطبيعي في تونس مع Gazon Tunisie",
      intro: "لم يكن طلب العشب الطبيعي في تونس يوماً بهذه البساطة: سعر واضح بالمتر المربع، مصاريف توصيل تُبلَّغ قبل التأكيد وطلب يُنجز مباشرة عبر واتساب.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["شراء العشب", "/acheter-gazon/"]],
      h2a: "كيف تشترون عشبكم في 3 خطوات",
      listA: ["قيسوا مساحة حديقتكم بالمتر المربع الواجب تغطيتها", "تواصلوا معنا عبر واتساب مع المساحة المرغوبة ومدينتكم", "استلموا عشبكم (مصاريف التوصيل تُحتسب حسب عنوانكم) وابدؤوا التركيب"],
      h2b: "ملخص السعر",
      headersB: ["المنتج", "السعر", "التوصيل"],
      rowsB: [["عشب طبيعي على شكل لفائف", "15 دينار/م² دون 50 م² · 9 دينار/م² ابتداءً من 50 م²", "حسب عنوانكم"]],
      faqH2: "أسئلة شائعة قبل الشراء",
      faq: [
        ["هل توجد مساحة دنيا للطلب؟", "لا، تطلبون المساحة الدقيقة التي تحتاجونها، محسوبة بالمتر المربع. التعريفة هي التي تتغير حسب المساحة: 15 دينار/م² دون 50 م²، و9 دينار/م² ابتداءً من 50 م²."],
        ["كيف يتم الدفع؟", "تُبلَّغ لكم طرق الدفع (عند التسليم أو غيرها) عند تأكيد الطلب عبر واتساب."],
        ["هل يمكنني الطلب لمشروع مهني؟", "نعم، نزود الأفراد ومهنيي تهيئة الحدائق على حد سواء بكميات أكبر."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/acheter-gazon/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    product: {
      key: "gazon-naturel",
      name: SITE.products.gazon.name,
      price: SITE.products.gazon.priceFrom,
      priceHigh: SITE.products.gazon.priceBelow,
      currency: SITE.products.gazon.currency,
      unit: SITE.products.gazon.unit,
      description: t.intro,
      image: SITE.products.gazon.image,
    },
    sections: [
      { type: "list", h2: t.h2a, ordered: true, items: t.listA },
      { type: "table", h2: t.h2b, headers: t.headersB, rows: t.rowsB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonGrandTunisPage(lang) {
  const T = {
    fr: {
      title: "Gazon Grand Tunis | Livraison rapide, 15 ou 9 DT/m² - Gazon Tunisie",
      metaDescription: "Gazon naturel en rouleau livré dans tout le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba), à 15 ou 9 DT/m² selon la surface. Commandez avec Gazon Tunisie.",
      eyebrow: "Gazon local",
      h1: "Gazon Grand Tunis : livraison rapide, 15 ou 9 DT/m² selon la surface",
      intro: "Le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) est l'une des régions que nous livrons le plus rapidement en gazon naturel en rouleau, à 15 DT/m² sous 50 m² et 9 DT/m² à partir de 50 m². Les frais de livraison sont calculés selon votre adresse et communiqués avant confirmation.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon Grand Tunis", "/gazon-grand-tunis/"]],
      h2a: "Gazon naturel livré partout dans le Grand Tunis",
      pa: ["Tunis, Ariana, Ben Arous et Manouba comptent parmi les secteurs que nous desservons le plus souvent, sans minimum de commande. Que vous soyez à La Marsa, au Bardo, à Ariana ville ou à Ben Arous, notre équipe organise la livraison selon votre disponibilité et vous communique les frais avant confirmation."],
      h2b: "Secteurs desservis dans le Grand Tunis",
      listB: ["Tunis et ses banlieues nord : La Marsa, Carthage, Sidi Bou Said, Le Kram", "Ariana : Ariana ville, La Soukra, Raoued", "Ben Arous : Ben Arous ville, Rades, Mégrine, Hammam Lif", "Manouba : Manouba ville, Den Den, Oued Ellil"],
      faqH2: "Questions fréquentes - Gazon Grand Tunis",
      faq: [
        ["Comment sont calculés les frais de livraison dans le Grand Tunis ?", "Ils dépendent de votre adresse exacte et du volume commandé. Indiquez-nous votre quartier par WhatsApp : le montant vous est communiqué avant toute confirmation de commande."],
        ["Quel délai de livraison dans le Grand Tunis ?", "En général 24 à 72h ouvrées selon le stock disponible et votre secteur précis."],
      ],
    },
    en: {
      title: "Lawn Greater Tunis | Fast Delivery, 15 or 9 DT/sqm - Gazon Tunisie",
      metaDescription: "Natural rolled lawn delivered across Greater Tunis (Tunis, Ariana, Ben Arous, Manouba), at 15 or 9 DT/sqm depending on area. Order with Gazon Tunisie.",
      eyebrow: "Local lawn",
      h1: "Lawn Greater Tunis: fast delivery, 15 or 9 DT/sqm by area",
      intro: "Greater Tunis (Tunis, Ariana, Ben Arous, Manouba) is one of the regions we deliver natural rolled lawn to fastest, at 15 DT/sqm below 50 sqm and 9 DT/sqm from 50 sqm. Delivery fees are calculated for your address and confirmed before you order.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Lawn Greater Tunis", "/gazon-grand-tunis/"]],
      h2a: "Natural lawn delivered everywhere in Greater Tunis",
      pa: ["Tunis, Ariana, Ben Arous and Manouba are among the areas we serve most often, with no minimum order. Whether you are in La Marsa, Le Bardo, Ariana city or Ben Arous, our team arranges delivery according to your availability and confirms the fee before you order."],
      h2b: "Areas served in Greater Tunis",
      listB: ["Tunis and its northern suburbs: La Marsa, Carthage, Sidi Bou Said, Le Kram", "Ariana: Ariana city, La Soukra, Raoued", "Ben Arous: Ben Arous city, Rades, Megrine, Hammam Lif", "Manouba: Manouba city, Den Den, Oued Ellil"],
      faqH2: "Frequently asked questions - Lawn Greater Tunis",
      faq: [
        ["How are delivery fees calculated in Greater Tunis?", "They depend on your exact address and the volume ordered. Send us your neighbourhood on WhatsApp: the amount is confirmed before you place your order."],
        ["What is the delivery timeframe in Greater Tunis?", "Generally 24 to 72 business hours depending on available stock and your specific area."],
      ],
    },
    ar: {
      title: "عشب تونس الكبرى | توصيل سريع، 15 أو 9 دينار/م² - Gazon Tunisie",
      metaDescription: "عشب طبيعي على شكل لفائف يُوصَّل في كل تونس الكبرى (تونس، أريانة، بن عروس، منوبة)، بسعر 15 أو 9 دينار/م² حسب المساحة. اطلبوا مع Gazon Tunisie.",
      eyebrow: "عشب محلي",
      h1: "عشب تونس الكبرى: توصيل سريع، 15 أو 9 دينار/م² حسب المساحة",
      intro: "تُعد تونس الكبرى (تونس، أريانة، بن عروس، منوبة) من أسرع الجهات التي نوصل إليها العشب الطبيعي على شكل لفائف، بسعر 15 دينار/م² دون 50 م² و9 دينار/م² ابتداءً من 50 م². تُحتسب مصاريف التوصيل حسب عنوانكم وتُبلَّغ قبل تأكيد الطلب.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب تونس الكبرى", "/gazon-grand-tunis/"]],
      h2a: "عشب طبيعي يُوصَّل في كل أنحاء تونس الكبرى",
      pa: ["تُعد تونس وأريانة وبن عروس ومنوبة من أكثر المناطق التي نخدمها، دون حد أدنى للطلب. سواء كنتم بالمرسى أو الباردو أو مدينة أريانة أو بن عروس، ينظم فريقنا التوصيل حسب توفركم ويبلغكم بالمصاريف قبل التأكيد."],
      h2b: "المناطق المخدومة في تونس الكبرى",
      listB: ["تونس وضواحيها الشمالية: المرسى، قرطاج، سيدي بوسعيد، الكرم", "أريانة: مدينة أريانة، السوقرة، رواد", "بن عروس: مدينة بن عروس، رادس، مقرين، حمام الأنف", "منوبة: مدينة منوبة، دن دن، وادي الليل"],
      faqH2: "أسئلة شائعة - عشب تونس الكبرى",
      faq: [
        ["كيف تُحتسب مصاريف التوصيل في تونس الكبرى؟", "تعتمد على عنوانكم الدقيق والكمية المطلوبة. أرسلوا لنا حيّكم عبر واتساب: يُبلَّغ المبلغ قبل تأكيد أي طلب."],
        ["ما هي مدة التوصيل في تونس الكبرى؟", "عادة بين 24 و72 ساعة عمل حسب المخزون المتوفر ومنطقتكم الدقيقة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-grand-tunis/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonNabeulPage(lang) {
  const T = {
    fr: {
      title: "Gazon Nabeul | Livraison rapide, 15 ou 9 DT/m² - Gazon Tunisie",
      metaDescription: "Gazon naturel en rouleau livré à Nabeul et sa région, à 15 ou 9 DT/m² selon la surface. Gazon Tunisie est basé à Nabeul : délais les plus courts du réseau.",
      eyebrow: "Gazon local",
      h1: "Gazon Nabeul : livraison rapide, 15 ou 9 DT/m² selon la surface",
      intro: "Nabeul est la région où se trouve notre dépôt Gazon Tunisie. Les délais de livraison du gazon naturel y sont donc les plus courts de tout notre réseau, et les frais de livraison sont calculés selon votre adresse.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon Nabeul", "/gazon-nabeul/"]],
      h2a: "Gazon naturel à Nabeul : notre région de base",
      pa: ["Nabeul, Hammamet, Dar Chaabane El Fehri et Béni Khiar font partie des localités que nous livrons quotidiennement. Étant notre région de base, les délais de livraison y sont les plus courts de tout notre réseau."],
      h2b: "Secteurs desservis dans la région de Nabeul",
      listB: ["Nabeul ville", "Hammamet Nord et Sud", "Dar Chaabane El Fehri", "Béni Khiar", "Korba et Menzel Temime"],
      faqH2: "Questions fréquentes - Gazon Nabeul",
      faq: [
        ["Quels sont les délais de livraison dans le gouvernorat de Nabeul ?", "Nabeul ville et les localités proches comme Hammamet sont livrées quotidiennement ; pour les zones plus éloignées du gouvernorat, comptez un délai un peu plus long. Les frais sont calculés selon votre adresse exacte et communiqués avant confirmation."],
        ["Peut-on retirer sa commande directement au dépôt ?", "Selon la disponibilité, un retrait peut être organisé. Contactez-nous par WhatsApp pour le vérifier."],
      ],
    },
    en: {
      title: "Lawn Nabeul | Fast Delivery, 15 or 9 DT/sqm - Gazon Tunisie",
      metaDescription: "Natural rolled lawn delivered to Nabeul and its region, at 15 or 9 DT/sqm depending on area. Gazon Tunisie is based in Nabeul: shortest lead times in the network.",
      eyebrow: "Local lawn",
      h1: "Lawn Nabeul: fast delivery, 15 or 9 DT/sqm by area",
      intro: "Nabeul is home to our Gazon Tunisie depot. Natural lawn lead times there are therefore the shortest of our entire network, and delivery fees are calculated for your address.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Lawn Nabeul", "/gazon-nabeul/"]],
      h2a: "Natural lawn in Nabeul: our home base",
      pa: ["Nabeul, Hammamet, Dar Chaabane El Fehri and Béni Khiar are among the towns we deliver to daily. As our home base, delivery times there are the shortest in our entire network."],
      h2b: "Areas served in the Nabeul region",
      listB: ["Nabeul city", "Hammamet North and South", "Dar Chaabane El Fehri", "Béni Khiar", "Korba and Menzel Temime"],
      faqH2: "Frequently asked questions - Lawn Nabeul",
      faq: [
        ["What are the delivery times in Nabeul governorate?", "Nabeul city and nearby towns like Hammamet are served daily; for areas further out in the governorate, allow slightly longer. Fees are calculated for your exact address and confirmed before you order."],
        ["Can I pick up my order directly at the depot?", "Depending on availability, pickup can be arranged. Contact us on WhatsApp to check."],
      ],
    },
    ar: {
      title: "عشب نابل | توصيل سريع، 15 أو 9 دينار/م² - Gazon Tunisie",
      metaDescription: "عشب طبيعي على شكل لفائف يُوصَّل إلى نابل وجهتها، بسعر 15 أو 9 دينار/م² حسب المساحة. مقر Gazon Tunisie في نابل: أقصر آجال في الشبكة.",
      eyebrow: "عشب محلي",
      h1: "عشب نابل: توصيل سريع، 15 أو 9 دينار/م² حسب المساحة",
      intro: "نابل هي الجهة التي يوجد بها مستودع Gazon Tunisie. لذلك تكون آجال توصيل العشب الطبيعي هناك الأقصر في كل شبكتنا، وتُحتسب مصاريف التوصيل حسب عنوانكم.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب نابل", "/gazon-nabeul/"]],
      h2a: "العشب الطبيعي في نابل: جهتنا الأساسية",
      pa: ["نابل والحمامات ودار شعبان الفهري وبني خيار من بين المناطق التي نوصل إليها يومياً. بما أنها جهتنا الأساسية، فإن آجال التوصيل هناك هي الأقصر في كل شبكتنا."],
      h2b: "المناطق المخدومة في جهة نابل",
      listB: ["مدينة نابل", "الحمامات الشمالية والجنوبية", "دار شعبان الفهري", "بني خيار", "قربة ومنزل تميم"],
      faqH2: "أسئلة شائعة - عشب نابل",
      faq: [
        ["ما هي آجال التوصيل في ولاية نابل؟", "تُخدم مدينة نابل والمناطق القريبة مثل الحمامات يومياً؛ أما المناطق الأبعد في الولاية فتتطلب أجلاً أطول قليلاً. تُحتسب المصاريف حسب عنوانكم الدقيق وتُبلَّغ قبل تأكيد الطلب."],
        ["هل يمكن استلام الطلبية مباشرة من المستودع؟", "حسب التوفر، يمكن تنظيم استلام. تواصلوا معنا عبر واتساب للتحقق من ذلك."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-nabeul/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/paspalum-04.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function comparisonPage(kind, lang) {
  const T = {
    fr: {
      paspalum: { title: "Gazon Paspalum en Tunisie | Prix, choix et pose", eyebrow: "Gazon Paspalum", h1: "Gazon Paspalum : comprendre avant de commander", intro: "Le gazon Paspalum est une solution de pelouse naturelle à étudier selon l’exposition, le sol, l’arrosage et l’usage de votre jardin.", h2: "C’est quoi le gazon Paspalum ?", body: "Le Paspalum est un gazon naturel apprécié pour son rendu dense et sa capacité d’adaptation lorsqu’il est installé dans de bonnes conditions. Gazon Tunisie vous aide à vérifier si cette solution correspond à votre terrain.", price: "À partir de 9 DT/m² pour 50 m² ou plus. En dessous de 50 m², le prix est sur devis." },
      americain: { title: "Gazon américain en Tunisie | Prix et devis", eyebrow: "Gazon américain", h1: "Gazon américain : une pelouse naturelle au rendu dense", intro: "Le gazon américain est proposé pour les jardins, villas et espaces professionnels qui recherchent une pelouse naturelle régulière et soignée.", h2: "C’est quoi le gazon américain ?", body: "Le gazon américain est une solution de gazon naturel dont le résultat dépend du sol, de l’exposition, de l’arrosage et de l’entretien. Nous étudions votre besoin avant de confirmer la disponibilité.", price: "Prix sur devis. La livraison est également sur devis selon votre adresse." },
      difference: { title: "Gazon Paspalum ou gazon américain : quelle différence ?", eyebrow: "Guide comparatif", h1: "Paspalum ou gazon américain : lequel choisir ?", intro: "Comparez les deux solutions de gazon naturel avant de demander votre devis.", h2: "Une comparaison simple", body: "Le Paspalum est à étudier lorsque l’adaptation et la résistance sont prioritaires. Le gazon américain est souvent recherché pour un rendu dense et régulier. Aucun choix ne convient à tous les terrains : partagez votre exposition, votre sol, votre surface et votre usage.", price: "Les deux options sont proposées selon disponibilité. Le gazon est à partir de 9 DT/m² dès 50 m² ; sous 50 m², le prix est sur devis." },
    },
    en: {
      paspalum: { title: "Paspalum lawn in Tunisia | Price and installation", eyebrow: "Paspalum lawn", h1: "Paspalum lawn: understand it before ordering", intro: "Paspalum is a natural lawn option to assess according to your soil, exposure, watering and garden use.", h2: "What is Paspalum lawn?", body: "Paspalum is a natural lawn appreciated for a dense look when installed in suitable conditions. We help you assess whether it fits your land.", price: "From 9 DT/sqm for 50 sqm or more. Under 50 sqm, quoted on request." },
      americain: { title: "American lawn in Tunisia | Price and quote", eyebrow: "American lawn", h1: "American lawn: natural lawn with a dense look", intro: "American lawn is offered for gardens, villas and professional spaces looking for a regular natural lawn.", h2: "What is American lawn?", body: "The final result depends on soil, exposure, watering and maintenance. We assess your project before confirming availability.", price: "Quoted on request. Delivery is also quoted according to your address." },
      difference: { title: "Paspalum or American lawn: what is the difference?", eyebrow: "Comparison guide", h1: "Paspalum or American lawn: which should you choose?", intro: "Compare the two natural lawn options before requesting a quote.", h2: "A simple comparison", body: "Paspalum can be considered when adaptation and resistance matter most. American lawn is often chosen for a dense and regular look. Share your soil, exposure, area and use so we can guide you.", price: "Both options depend on availability. Lawn starts at 9 DT/sqm from 50 sqm; under 50 sqm, it is quoted." },
    },
    ar: {
      paspalum: { title: "عشب باسبالوم في تونس | السعر والتركيب", eyebrow: "عشب باسبالوم", h1: "عشب باسبالوم: افهموا الحل قبل الطلب", intro: "الباسبالوم عشب طبيعي يُدرس حسب التربة والتعرض للشمس والري واستعمال الحديقة.", h2: "ما هو عشب الباسبالوم؟", body: "الباسبالوم عشب طبيعي يتميز بمظهر كثيف عند تركيبه في ظروف مناسبة. نساعدكم على معرفة مدى ملاءمته لأرضكم.", price: "ابتداءً من 9 دينار/م² لمساحة 50 م² فأكثر. أقل من 50 م²: عرض سعر." },
      americain: { title: "عشب أمريكي في تونس | السعر وعرض السعر", eyebrow: "عشب أمريكي", h1: "عشب أمريكي: عشب طبيعي بمظهر كثيف", intro: "عشب طبيعي للحدائق والفلل والمساحات المهنية، حسب طبيعة أرضكم.", h2: "ما هو العشب الأمريكي؟", body: "تعتمد النتيجة على التربة والتعرض للشمس والري والصيانة. ندرس مشروعكم قبل تأكيد التوفر.", price: "السعر حسب الطلب. التوصيل أيضاً حسب عنوانكم." },
      difference: { title: "الباسبالوم أم العشب الأمريكي: ما الفرق؟", eyebrow: "دليل المقارنة", h1: "الباسبالوم أم العشب الأمريكي: أيهما تختارون؟", intro: "قارنوا بين الحلين الطبيعيين قبل طلب عرض السعر.", h2: "مقارنة بسيطة", body: "يُدرس الباسبالوم عندما تكون الملاءمة والمقاومة أولوية. ويُطلب العشب الأمريكي غالباً لمظهر كثيف ومنتظم. أرسلوا لنا التربة والمساحة والاستعمال والتعرض للشمس لنوجهكم.", price: "الخياران حسب التوفر. ابتداءً من 9 دينار/م² من 50 م²؛ أقل من 50 م² حسب عرض السعر." },
    },
  };
  const t = T[lang][kind];
  const basePath = kind === "difference" ? "/difference-paspalum-gazon-americain/" : `/gazon-${kind}/`;
  const heroImage = kind === "paspalum" ? "/paspalum-02.jpeg" : kind === "americain" ? "/chantier-americain-after.jpeg" : "/paspalum-03.jpeg";
  return renderContentPage({ basePath, lang, title: t.title, metaDescription: t.intro, eyebrow: t.eyebrow, h1: t.h1, intro: t.intro, heroImage: { src: heroImage, alt: t.h1 }, breadcrumb: [{ label: t.eyebrow, path: localizedPath(basePath, lang) }], sections: [{ type: "text", h2: t.h2, paragraphs: [t.body, t.price] }, { type: "cta", ...gazonCta(lang) }, { type: "faq", h2: "Questions fréquentes", items: [{ q: "La livraison est-elle gratuite ?", a: "Non. La livraison est sur devis selon l’adresse, la quantité et les conditions d’accès." }, { q: "Comment demander le prix exact ?", a: "Envoyez votre ville, votre surface et le type de gazon sur WhatsApp en commençant par Bonjour Gazon Tunisie." }] }] });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/gazon-paspalum/", lang), comparisonPage("paspalum", lang));
  registerPage(localizedPath("/gazon-americain/", lang), comparisonPage("americain", lang));
  registerPage(localizedPath("/difference-paspalum-gazon-americain/", lang), comparisonPage("difference", lang));
  registerPage(localizedPath("/gazon-tunisie/", lang), pillarPage(lang));
  registerPage(localizedPath("/gazon-naturel/", lang), gazonNaturelPage(lang));
  registerPage(localizedPath("/gazon-en-rouleau/", lang), gazonEnRouleauPage(lang));
  registerPage(localizedPath("/acheter-gazon/", lang), acheterGazonPage(lang));
  registerPage(localizedPath("/gazon-grand-tunis/", lang), gazonGrandTunisPage(lang));
  registerPage(localizedPath("/gazon-nabeul/", lang), gazonNabeulPage(lang));
}

module.exports = { build };
