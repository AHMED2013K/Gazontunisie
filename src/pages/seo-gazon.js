// Cluster éditorial gazon : 40 sujets x 5 intentions = 200 pages de référence.
// Chaque page est localisée en FR/EN/AR par le générateur principal. Les sujets
// sont volontairement centrés sur des besoins différents afin d'éviter des pages
// satellites interchangeables et de créer un vrai maillage utile.
const { renderContentPage } = require("../templates/page");
const { localizedPath } = require("../data/i18n");

const TOPICS = [
  ["villa", "Villa et maison", "Villa and home", "فيلا ومنزل"],
  ["jardin", "Jardin familial", "Family garden", "حديقة عائلية"],
  ["piscine", "Abords de piscine", "Poolside", "محيط المسبح"],
  ["terrasse", "Terrasse et patio", "Terrace and patio", "الشرفة والفناء"],
  ["toit-terrasse", "Toit-terrasse", "Rooftop terrace", "سطح قابل للاستعمال"],
  ["cour", "Cour intérieure", "Inner courtyard", "الفناء الداخلي"],
  ["allee", "Allée de maison", "Home driveway", "مدخل المنزل"],
  ["entree", "Entrée de propriété", "Property entrance", "مدخل العقار"],
  ["residence", "Résidence collective", "Residential complex", "إقامة سكنية"],
  ["lotissement", "Lotissement", "Housing development", "تجمع سكني"],
  ["hotel", "Hôtel et maison d'hôtes", "Hotel and guesthouse", "فندق ودار ضيافة"],
  ["restaurant", "Restaurant et café", "Restaurant and café", "مطعم ومقهى"],
  ["bureau", "Bureau et entreprise", "Office and business", "مكتب وشركة"],
  ["commerce", "Commerce et showroom", "Shop and showroom", "محل وصالة عرض"],
  ["ecole", "École et établissement", "School and institution", "مدرسة ومؤسسة"],
  ["creche", "Crèche", "Nursery", "روضة أطفال"],
  ["clinique", "Clinique et cabinet", "Clinic and practice", "عيادة ومركز طبي"],
  ["mosquee", "Mosquée et espace communautaire", "Mosque and community space", "جامع وفضاء جماعي"],
  ["parc", "Petit parc privé", "Private park", "حديقة خاصة صغيرة"],
  ["aire-jeux", "Aire de jeux", "Play area", "فضاء ألعاب"],
  ["terrain-sport", "Terrain de sport amateur", "Amateur sports field", "ملعب رياضي للهواة"],
  ["football", "Terrain de football", "Football field", "ملعب كرة قدم"],
  ["petanque", "Terrain de pétanque", "Pétanque court", "ملعب البولينغ"],
  ["bord-de-mer", "Jardin en bord de mer", "Seaside garden", "حديقة قرب البحر"],
  ["zone-vente", "Zone commerciale", "Retail area", "منطقة تجارية"],
  ["grand-tunis", "Projet dans le Grand Tunis", "Greater Tunis project", "مشروع في تونس الكبرى"],
  ["tunis", "Gazon à Tunis", "Lawn in Tunis", "عشب في تونس"],
  ["ariana", "Gazon à Ariana", "Lawn in Ariana", "عشب في أريانة"],
  ["ben-arous", "Gazon à Ben Arous", "Lawn in Ben Arous", "عشب في بن عروس"],
  ["manouba", "Gazon à La Manouba", "Lawn in La Manouba", "عشب في منوبة"],
  ["nabeul", "Gazon à Nabeul", "Lawn in Nabeul", "عشب في نابل"],
  ["hammamet", "Gazon à Hammamet", "Lawn in Hammamet", "عشب في الحمامات"],
  ["grombalia", "Gazon à Grombalia", "Lawn in Grombalia", "عشب في قرمبالية"],
  ["sousse", "Gazon à Sousse", "Lawn in Sousse", "عشب في سوسة"],
  ["monastir", "Gazon à Monastir", "Lawn in Monastir", "عشب في المنستير"],
  ["sfax", "Gazon à Sfax", "Lawn in Sfax", "عشب في صفاقس"],
  ["bizerte", "Gazon à Bizerte", "Lawn in Bizerte", "عشب في بنزرت"],
  ["sud-tunisie", "Projet dans le Sud tunisien", "Southern Tunisia project", "مشروع في جنوب تونس"],
  ["faible-entretien", "Jardin facile à entretenir", "Low-maintenance garden", "حديقة سهلة العناية"],
  ["grande-surface", "Grande surface de gazon", "Large lawn area", "مساحة عشب كبيرة"],
];

const ANGLES = ["choisir", "prix", "pose", "entretien", "comparaison"];
const IMAGES = ["/paspalum-04.jpeg", "/chantier-americain-after.jpeg", "/paspalum-02.jpeg"];

function topicData(topic) {
  return { slug: topic[0], fr: topic[1], en: topic[2], ar: topic[3] };
}

function copy(topic, angle, lang) {
  const name = topic[lang];
  if (lang === "en") {
    const titles = {
      choisir: `Which lawn for a ${name.toLowerCase()} in Tunisia?`,
      prix: `Lawn price for a ${name.toLowerCase()} in Tunisia`,
      pose: `How to prepare a ${name.toLowerCase()} for natural lawn`,
      entretien: `How to maintain lawn around a ${name.toLowerCase()}`,
      comparaison: `Paspalum or American lawn for a ${name.toLowerCase()}?`,
    };
    const intros = {
      choisir: `Choosing lawn for a ${name.toLowerCase()} depends on sunlight, soil, use, watering and access for delivery. This guide helps you prepare the right questions before requesting a quote from Gazon Tunisie.`,
      prix: `The lawn budget for a ${name.toLowerCase()} depends on total area, lawn type, ground preparation and delivery address. Gazon Tunisie provides a clear quote before confirmation.`,
      pose: `A durable lawn around a ${name.toLowerCase()} starts with careful soil preparation. The installation method must match drainage, foot traffic, access and watering conditions.`,
      entretien: `Lawn around a ${name.toLowerCase()} stays dense when watering, mowing and first-week care are adapted to Tunisian heat and the actual exposure of the site.`,
      comparaison: `Paspalum and American lawn can both suit a ${name.toLowerCase()}, but the best choice depends on exposure, expected use, water availability and the desired visual result.`,
    };
    return { title: titles[angle], intro: intros[angle], label: name, advice: ["Measure the exact area and note access for the delivery vehicle.", "Check exposure, drainage and the availability of regular watering.", "Send the city, surface and a photo of the land to Gazon Tunisie on WhatsApp."], faq: [`What should I send for a quote for this project?`, `Which lawn type is best for this use?`] };
  }
  if (lang === "ar") {
    const titles = {
      choisir: `أي عشب تختارون لـ${name} في تونس؟`,
      prix: `سعر العشب لـ${name} في تونس`,
      pose: `كيف تهيئون ${name} لتركيب العشب الطبيعي؟`,
      entretien: `كيف تعتنون بالعشب حول ${name}؟`,
      comparaison: `الباسبالوم أم العشب الأمريكي لـ${name}؟`,
    };
    const intros = {
      choisir: `اختيار العشب لـ${name} يعتمد على الشمس والتربة والاستعمال والري وإمكانية التوصيل. يساعدكم هذا الدليل على تجهيز المعلومات قبل طلب عرض السعر من Gazon Tunisie.`,
      prix: `تتغير ميزانية العشب لـ${name} حسب المساحة الإجمالية ونوع العشب وتحضير الأرض وعنوان التوصيل. تقدم Gazon Tunisie عرضاً واضحاً قبل التأكيد.`,
      pose: `يبدأ العشب المتين حول ${name} بتحضير دقيق للتربة. يجب أن يراعي التركيب التصريف وحركة الأشخاص وإمكانية الوصول والري.`,
      entretien: `يبقى العشب حول ${name} كثيفاً عندما يتكيف الري والجزّ والعناية الأولى مع حرارة تونس ودرجة تعرض المكان للشمس.`,
      comparaison: `يمكن أن يناسب الباسبالوم والعشب الأمريكي ${name}، لكن الاختيار الأفضل يعتمد على الشمس والاستعمال والماء والمظهر المطلوب.`,
    };
    return { title: titles[angle], intro: intros[angle], label: name, advice: ["قيسوا المساحة بدقة وسجلوا إمكانية وصول شاحنة التوصيل.", "تحققوا من التعرض للشمس وتصريف الماء وإمكانية الري المنتظم.", "أرسلوا المدينة والمساحة وصورة الأرض إلى Gazon Tunisie عبر واتساب."], faq: ["ما المعلومات اللازمة للحصول على عرض سعر؟", "أي نوع من العشب يناسب هذا الاستعمال؟"] };
  }
  const titles = {
    choisir: `Quel gazon choisir pour ${name.toLowerCase()} en Tunisie ?`,
    prix: `Prix du gazon pour ${name.toLowerCase()} en Tunisie`,
    pose: `Comment préparer ${name.toLowerCase()} pour poser du gazon naturel`,
    entretien: `Comment entretenir le gazon autour d’un espace ${name.toLowerCase()}`,
    comparaison: `Gazon Paspalum ou américain pour ${name.toLowerCase()} ?`,
  };
  const intros = {
    choisir: `Choisir un gazon pour ${name.toLowerCase()} dépend de l’exposition, du sol, de l’usage, de l’arrosage et de l’accès pour la livraison. Ce guide vous aide à préparer les bonnes questions avant de demander un devis à Gazon Tunisie.`,
    prix: `Le budget du gazon pour ${name.toLowerCase()} dépend de la surface totale, du type de gazon, de la préparation du terrain et de l’adresse de livraison. Gazon Tunisie confirme un devis clair avant la commande.`,
    pose: `Un gazon durable autour de ${name.toLowerCase()} commence par une préparation sérieuse du sol. La pose doit tenir compte du drainage, du passage, de l’accès et des possibilités d’arrosage.`,
    entretien: `Le gazon autour de ${name.toLowerCase()} reste dense lorsque l’arrosage, la tonte et les soins des premières semaines sont adaptés à la chaleur tunisienne et à l’exposition réelle du terrain.`,
    comparaison: `Le Paspalum et le gazon américain peuvent convenir à ${name.toLowerCase()}, mais le meilleur choix dépend de l’exposition, de l’usage, de l’eau disponible et du rendu recherché.`,
  };
  return { title: titles[angle], intro: intros[angle], label: name, advice: ["Mesurez la surface exacte et indiquez l’accès pour le véhicule de livraison.", "Vérifiez l’exposition, le drainage et la possibilité d’un arrosage régulier.", "Envoyez la ville, la surface et une photo du terrain à Gazon Tunisie sur WhatsApp."], faq: ["Quelles informations envoyer pour recevoir un devis ?", "Quel type de gazon convient à cet usage ?"] };
}

function pageFor(topic, angle, lang, index) {
  const c = copy(topic, angle, lang);
  const topicSlug = topic.slug;
  const basePath = `/guides-gazon/${topicSlug}-${angle}/`;
  const other = angle === "comparaison" ? "/difference-paspalum-gazon-americain/" : angle === "prix" ? "/blog/prix-gazon-tunisie-m2/" : "/gazon-tunisie/";
  const faq = lang === "en"
    ? [[c.faq[0], "Send the city, total area, lawn type if known, a photo of the land and the desired delivery date."], [c.faq[1], "We compare Paspalum and American lawn according to exposure, soil, use, watering and maintenance."], ["Is delivery free?", "No. Delivery is quoted according to the address, quantity and access conditions."]]
    : lang === "ar"
      ? [[c.faq[0], "أرسلوا المدينة والمساحة الإجمالية ونوع العشب إن كان معروفاً وصورة الأرض وتاريخ التوصيل المطلوب."], [c.faq[1], "نقارن بين الباسبالوم والعشب الأمريكي حسب الشمس والتربة والاستعمال والري والعناية."], ["هل التوصيل مجاني؟", "لا، يتم احتساب التوصيل حسب العنوان والكمية وظروف الوصول."]]
      : [[c.faq[0], "Envoyez la ville, la surface totale, le type de gazon si vous le connaissez, une photo du terrain et la date souhaitée."], [c.faq[1], "Nous comparons le Paspalum et le gazon américain selon l’exposition, le sol, l’usage, l’arrosage et l’entretien."], ["La livraison est-elle gratuite ?", "Non. La livraison est sur devis selon l’adresse, la quantité et les conditions d’accès."]];
  const cta = lang === "en" ? "Hello Gazon Tunisie, I would like advice for my lawn project." : lang === "ar" ? "مرحباً Gazon Tunisie، أريد نصيحة حول مشروع العشب." : "Bonjour Gazon Tunisie, je souhaite un conseil pour mon projet de gazon.";
  const relatedLabel = lang === "en" ? "Explore the main lawn guide" : lang === "ar" ? "اكتشفوا دليل العشب الرئيسي" : "Consulter le guide principal du gazon";
  return renderContentPage({
    basePath,
    lang,
    title: `${c.title} | Gazon Tunisie`,
    metaDescription: `${c.intro} Prix à partir de 9 DT/m² dès 50 m², livraison sur devis en Tunisie.`,
    eyebrow: lang === "en" ? "Lawn guide" : lang === "ar" ? "دليل العشب" : "Guide gazon",
    h1: c.title,
    intro: c.intro,
    heroImage: { src: IMAGES[index % IMAGES.length], alt: c.title },
    breadcrumb: [{ label: lang === "en" ? "Lawn guides" : lang === "ar" ? "أدلة العشب" : "Guides gazon", path: localizedPath("/guides-gazon/", lang) }, { label: c.label, path: localizedPath(basePath, lang) }],
    sections: [
      { type: "text", h2: lang === "en" ? "What to assess before ordering" : lang === "ar" ? "ما الذي يجب تقييمه قبل الطلب؟" : "Les points à vérifier avant de commander", paragraphs: [c.intro, lang === "en" ? "A precise quote is more reliable when the surface, location, exposure and delivery access are known." : lang === "ar" ? "يكون عرض السعر أدق عندما تكون المساحة والمكان والتعرض للشمس وإمكانية التوصيل معروفة." : "Un devis précis est plus fiable lorsque la surface, la ville, l’exposition et l’accès pour la livraison sont connus."] },
      { type: "list", h2: lang === "en" ? "Practical checklist" : lang === "ar" ? "قائمة عملية" : "Checklist pratique", items: c.advice },
      { type: "text", h2: lang === "en" ? "Gazon Tunisie advice" : lang === "ar" ? "نصيحة Gazon Tunisie" : "Le conseil Gazon Tunisie", paragraphs: [lang === "en" ? `For ${c.label.toLowerCase()}, compare the visual result, maintenance and water needs before selecting Paspalum or American lawn. Our team is based in Grombalia, Nabeul, and delivers across Tunisia.` : lang === "ar" ? `بالنسبة إلى ${c.label}، قارنوا المظهر والعناية واحتياجات الماء قبل اختيار الباسبالوم أو العشب الأمريكي. مقرنا في قرمبالية، نابل، ونوصل إلى كل تونس.` : `Pour ${c.label.toLowerCase()}, comparez le rendu, l’entretien et les besoins en eau avant de choisir le Paspalum ou le gazon américain. Notre équipe est basée à Grombalia, Nabeul, et livre partout en Tunisie.`] },
      { type: "faq", h2: lang === "en" ? "Frequently asked questions" : lang === "ar" ? "أسئلة شائعة" : "Questions fréquentes", items: faq },
      { type: "cta", heading: lang === "en" ? "Need a quote for your lawn?" : lang === "ar" ? "تحتاجون عرض سعر للعشب؟" : "Besoin d’un devis pour votre gazon ?", text: lang === "en" ? "Send your city, area and a photo on WhatsApp." : lang === "ar" ? "أرسلوا المدينة والمساحة وصورة عبر واتساب." : "Envoyez votre ville, votre surface et une photo sur WhatsApp.", buttonLabel: lang === "en" ? "Contact Gazon Tunisie" : lang === "ar" ? "تواصلوا مع Gazon Tunisie" : "Contacter Gazon Tunisie", whatsappMessage: cta, secondary: { label: relatedLabel, path: localizedPath(other, lang) } },
    ],
    service: { name: c.title, description: c.intro, path: localizedPath(basePath, lang), areaServed: ["Grand Tunis", "Nabeul", "Tunisie"] },
  });
}

function hubPage(lang) {
  const t = lang === "en"
    ? { title: "Lawn guides for Tunisia | Gazon Tunisie", eyebrow: "Resources", h1: "Lawn guides for every project in Tunisia", intro: "A structured library about choosing, pricing, laying, maintaining and comparing Paspalum and American lawn.", h2: "Start with your project", items: [["Paspalum lawn", "/gazon-paspalum/"], ["American lawn", "/gazon-americain/"], ["Compare both types", "/difference-paspalum-gazon-americain/"], ["Lawn prices", "/blog/prix-gazon-tunisie-m2/"]] }
    : lang === "ar"
      ? { title: "أدلة العشب في تونس | Gazon Tunisie", eyebrow: "موارد", h1: "أدلة العشب لكل مشروع في تونس", intro: "مكتبة منظمة حول اختيار العشب وتسعيره وتركيبه والعناية به ومقارنة الباسبالوم بالعشب الأمريكي.", h2: "ابدؤوا حسب مشروعكم", items: [["عشب الباسبالوم", "/gazon-paspalum/"], ["العشب الأمريكي", "/gazon-americain/"], ["مقارنة النوعين", "/difference-paspalum-gazon-americain/"], ["أسعار العشب", "/blog/prix-gazon-tunisie-m2/"]] }
      : { title: "Guides gazon en Tunisie | Gazon Tunisie", eyebrow: "Ressources", h1: "Guides gazon pour chaque projet en Tunisie", intro: "Une bibliothèque organisée sur le choix, le prix, la pose, l’entretien et la comparaison entre Paspalum et gazon américain.", h2: "Commencez par votre projet", items: [["Gazon Paspalum", "/gazon-paspalum/"], ["Gazon américain", "/gazon-americain/"], ["Comparer les deux types", "/difference-paspalum-gazon-americain/"], ["Prix du gazon", "/blog/prix-gazon-tunisie-m2/"]] };
  return renderContentPage({
    basePath: "/guides-gazon/",
    lang,
    title: t.title,
    metaDescription: t.intro,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: lang === "en" ? "Lawn guides" : lang === "ar" ? "أدلة العشب" : "Guides gazon", path: localizedPath("/guides-gazon/", lang) }],
    sections: [{ type: "related", h2: t.h2, links: t.items.map(([label, path]) => ({ label, path: localizedPath(path, lang), description: t.intro })) }],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/guides-gazon/", lang), hubPage(lang));
  let index = 0;
  TOPICS.forEach((rawTopic) => {
    const topic = topicData(rawTopic);
    ANGLES.forEach((angle) => {
      registerPage(localizedPath(`/guides-gazon/${topic.slug}-${angle}/`, lang), pageFor(topic, angle, lang, index));
      index += 1;
    });
  });
}

module.exports = { build, TOPICS, ANGLES };
