const { renderPage } = require("../templates/layout");
const { renderCards } = require("../templates/components");
const { SITE } = require("../data/site");
const { sizeAttrs } = require("../data/image-size");
const { localizedPath } = require("../data/i18n");
const { buildWhatsAppUrl } = require("../data/site");
const { faqPage } = require("../templates/schema");

const HOME_TEXT = {
  fr: {
    title: "Gazon Tunisie | Gazon naturel en Tunisie : prix, pose et livraison",
    description: "Gazon Tunisie : gazon naturel en rouleau, prix du gazon au m², livraison partout en Tunisie et devis rapide pour votre projet jardin.",
    heroEyebrow: "Le spécialiste du gazon en Tunisie",
    heroTitle: "Gazon Tunisie : votre solution pour un jardin vert et durable",
    heroCopy: "Gazon Tunisie accompagne les particuliers et professionnels avec du gazon naturel en rouleau, des conseils de pose, des prix clairs selon la surface et un devis rapide sur WhatsApp.",
    heroImgAlt: "Gazon naturel en Tunisie : prix, pose et livraison",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nous contacter",
    flagshipH2: "Nos solutions gazon et aménagement extérieur",
    flagshipIntro: "Le bon gazon, le bon prix et la bonne préparation pour réussir votre projet de jardin en Tunisie.",
    flagshipCards: [
      [`Gazon naturel — ${SITE.products.gazon.priceLabel}`, "Prix transparent, livraison selon votre adresse et conseils pour bien choisir votre type de gazon.", "/gazon-tunisie/", "/gazon.jpg"],
      [`Palmier décoratif — ${SITE.products.palmier.priceLabel}`, "Idéal pour structurer un jardin, une allée ou une piscine avec un rendu premium.", "/palmier-tunisie/", "/palmier-eventail.jpeg"],
      ["Pose de gazon", "Une mise en œuvre qui tient compte du sol, de l’usage et du climat tunisien.", "/services/pose-gazon/", "/gazon.jpg"],
      ["Comparer les deux gazons", "Paspalum ou gazon américain : comparez l’usage, l’entretien et le rendu avant de demander votre devis.", "/difference-paspalum-gazon-americain/", "/gazon.jpg"],
    ],
    collectionsKicker: "Aménagement extérieur",
    collectionsTitle: "Créez un jardin plus beau, plus vert et plus rentable",
    collectionsCopy: "Un espace vert bien choisi augmente le confort, la valeur esthétique et la qualité de vie de votre maison ou de votre villa.",
    careKicker: "Conseils de pose",
    careTitle: "Les étapes clés pour un gazon durable",
    careLight: "Sol bien préparé",
    careWater: "Arrosage régulier",
    catalogKicker: "Guides pratiques",
    catalogTitle: "Tout ce qu’il faut savoir avant d’acheter du gazon",
    catalogCopy: "Comparez les types de gazon, les prix au m², les étapes de pose et les meilleures zones de livraison en Tunisie.",
    searchLabel: "Recherche",
    searchPlaceholder: "Ex: gazon, pose, prix, palmier...",
    emptyState: "Aucun article ne correspond à cette recherche pour le moment.",
    engraisKicker: "Entretien",
    engraisTitle: "Engrais et entretien du jardin",
    engraisCopy: "Des solutions pour renforcer votre gazon, vos fleurs et vos plantes tout au long de l’année.",
    engraisWhatsapp: "Je souhaite des conseils pour l’entretien de mon jardin",
    engraisCtaLabel: "Demander un conseil",
    engraisLink: "Voir la page engrais",
    gazonKicker: "Gazon",
    gazonTitle: "Gazon naturel en rouleau pour toute la Tunisie",
    gazonCopy: "À partir de 9 DT/m² dès 50 m². Sous 50 m² et pour la livraison, demandez un devis selon votre adresse.",
    gazonCta: "Voir le gazon",
    gazonCtaSecondary: "Comment l'acheter",
    palmierKicker: "Aménagement",
    palmierTitle: "Palmier décoratif pour embellir votre extérieur",
    palmierCopy: "Palmier décoratif à 500 DT/m, sur devis pour confirmer votre demande et le prix de la livraison.",
    palmierCta: "Voir les palmiers",
    palmierCtaSecondary: "Comment l'acheter",
    deliveryH2: "Livraison partout en Tunisie",
    deliveryIntro: "Profitez d’une livraison de gazon et de palmiers selon votre zone, avec un devis transparent avant confirmation.",
    deliveryCards: [
      ["Grand Tunis", "Livraison rapide pour villas, maisons et projets d’aménagement urbain.", "/livraison/grand-tunis/", "/gazon.jpg"],
      ["Nabeul", "Notre base la plus proche du terrain, avec des délais et un accompagnement optimisés.", "/livraison/nabeul/", "/gazon.jpg"],
      ["Toute la Tunisie", "Livraison sur devis pour Sousse, Sfax, Monastir, Bizerte, Gabès et bien d’autres zones.", "/livraison/", "/palmier-eventail.jpeg"],
    ],
    blogH2: "Guides et conseils SEO pour choisir votre gazon",
    blogIntro: "Nos articles vous aident à comparer les types de gazon, calculer le coût, préparer le sol et éviter les erreurs de pose.",
    blogCards: [
      ["Comment poser du gazon en rouleau", "Le guide le plus utile pour une pose réussie et durable.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["Quel gazon choisir en Tunisie", "Comparez les variétés selon le climat, le sol et l’usage.", "/blog/quel-gazon-choisir-tunisie/", "/gazon.jpg"],
      ["Prix du gazon en Tunisie au m²", "Comprenez le calcul du tarif et les frais de livraison avant de commander.", "/blog/prix-gazon-tunisie-m2/", "/gazon.jpg"],
    ],
    blogSeeAll: "Voir tous les articles du blog",
    aboutKicker: "À propos",
    aboutTitle: "Gazon Tunisie : des conseils utiles, un devis rapide et un site orienté recherche",
    aboutCopy: "Notre mission est de répondre aux recherches les plus concrètes sur Google : quel gazon choisir, combien ça coûte, comment le poser, où le livrer et comment obtenir un devis fiable.",
    aboutLink1: "En savoir plus sur Gazon Tunisie",
    aboutLink2: "Pourquoi nous choisir",
  },
  en: {
    title: "Gazon Tunisie | Natural lawn in Tunisia: price, installation and delivery",
    description: "Gazon Tunisie: natural rolled lawn in Tunisia, lawn price per sqm, delivery across Tunisia and fast quote for your garden project.",
    heroEyebrow: "The lawn specialist in Tunisia",
    heroTitle: "Gazon Tunisie: your solution for a green and durable garden",
    heroCopy: "Gazon Tunisie supports homeowners and professionals with natural rolled lawn, laying advice, clear pricing by area and a quick quote on WhatsApp.",
    heroImgAlt: "Natural lawn in Tunisia: price, installation and delivery",
    ctaPrimary: "Request a quote",
    ctaSecondary: "Contact us",
    flagshipH2: "Our lawn and outdoor solutions",
    flagshipIntro: "The right lawn, the right price and the right preparation for a successful garden project in Tunisia.",
    flagshipCards: [
      [`Natural lawn — ${SITE.products.gazon.priceLabel}`, "Transparent pricing, delivery by address and advice to choose the right type of lawn.", "/gazon-tunisie/", "/gazon.jpg"],
      [`Decorative palm tree — ${SITE.products.palmier.priceLabel}`, "Perfect for a garden, driveway or pool with a premium look.", "/palmier-tunisie/", "/palmier-eventail.jpeg"],
      ["Lawn installation", "A setup tailored to the soil, usage and Tunisian climate.", "/services/pose-gazon/", "/gazon.jpg"],
      ["Compare both lawn types", "Paspalum or American lawn: compare use, maintenance and appearance before requesting your quote.", "/difference-paspalum-gazon-americain/", "/gazon.jpg"],
    ],
    collectionsKicker: "Outdoor design",
    collectionsTitle: "Create a more beautiful, greener and more valuable garden",
    collectionsCopy: "A well-chosen green space improves comfort, aesthetics and the quality of life of your home or villa.",
    careKicker: "Laying advice",
    careTitle: "The essential steps for a durable lawn",
    careLight: "Well-prepared soil",
    careWater: "Regular watering",
    catalogKicker: "Practical guides",
    catalogTitle: "Everything you need to know before buying lawn",
    catalogCopy: "Compare lawn types, square-meter pricing, installation steps and best delivery areas in Tunisia.",
    searchLabel: "Search",
    searchPlaceholder: "Ex: lawn, installation, price, palm tree...",
    emptyState: "No item matches this search at the moment.",
    engraisKicker: "Maintenance",
    engraisTitle: "Fertilizer and garden maintenance",
    engraisCopy: "Solutions to strengthen your lawn, flowers and plants all year round.",
    engraisWhatsapp: "I want advice on maintaining my garden",
    engraisCtaLabel: "Ask for advice",
    engraisLink: "See fertilizer page",
    gazonKicker: "Lawn",
    gazonTitle: "Natural rolled lawn for all Tunisia",
    gazonCopy: "From 9 DT/sqm for 50 sqm or more. Under 50 sqm and for delivery, request a quote based on your address.",
    gazonCta: "See the lawn",
    gazonCtaSecondary: "How to buy it",
    palmierKicker: "Outdoor design",
    palmierTitle: "Decorative palm tree to enhance your exterior",
    palmierCopy: "Decorative palm tree at 500 DT/m, quoted to confirm your request and delivery cost.",
    palmierCta: "See palm trees",
    palmierCtaSecondary: "How to buy it",
    deliveryH2: "Delivery across Tunisia",
    deliveryIntro: "Enjoy delivery of lawn and palm trees in your area, with a transparent quote before confirmation.",
    deliveryCards: [
      ["Greater Tunis", "Fast delivery for villas, homes and urban landscaping projects.", "/livraison/grand-tunis/", "/gazon.jpg"],
      ["Nabeul", "Our closest base to the site, with optimized lead times and support.", "/livraison/nabeul/", "/gazon.jpg"],
      ["All Tunisia", "Delivery quote for Sousse, Sfax, Monastir, Bizerte, Gabès and other regions.", "/livraison/", "/palmier-eventail.jpeg"],
    ],
    blogH2: "Guides and advice to choose the right lawn",
    blogIntro: "Our articles help you compare lawn types, calculate costs, prepare the soil and avoid installation mistakes.",
    blogCards: [
      ["How to lay rolled lawn", "The most useful guide for a successful and durable installation.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["Which lawn to choose in Tunisia", "Compare varieties based on climate, soil and usage.", "/blog/quel-gazon-choisir-tunisie/", "/gazon.jpg"],
      ["Lawn prices in Tunisia per sqm", "Understand the tariff calculation and delivery costs before ordering.", "/blog/prix-gazon-tunisie-m2/", "/gazon.jpg"],
    ],
    blogSeeAll: "See all blog articles",
    aboutKicker: "About",
    aboutTitle: "Gazon Tunisie: useful advice, a fast quote and a search-focused site",
    aboutCopy: "Our mission is to answer the most concrete searches on Google: which lawn to choose, how much it costs, how to lay it, where to deliver it and how to get a reliable quote.",
    aboutLink1: "Learn more about Gazon Tunisie",
    aboutLink2: "Why choose us",
  },
  ar: {
    title: "Gazon Tunisie | العشب الطبيعي في تونس: السعر والتركيب والتوصيل",
    description: "Gazon Tunisie: عشب طبيعي على شكل لفائف في تونس، سعر العشب لكل متر مربع، توصيل في كل أنحاء تونس وعرض سعر سريع لمشروع حديقتكم.",
    heroEyebrow: "متخصصو العشب في تونس",
    heroTitle: "Gazon Tunisie: حلّ لحديقة خضراء ودائمة",
    heroCopy: "تساعدكم Gazon Tunisie في اختيار العشب الطبيعي على شكل لفائف، وتقديم نصائح التركيب، وسعر واضح حسب المساحة، مع عرض سعر سريع عبر واتساب.",
    heroImgAlt: "العشب الطبيعي في تونس: السعر والتركيب والتوصيل",
    ctaPrimary: "اطلبوا عرض سعر",
    ctaSecondary: "تواصلوا معنا",
    flagshipH2: "حلولنا للعشب والتنسيق الخارجي",
    flagshipIntro: "العشب المناسب، السعر المناسب، والتحضير المناسب لنجاح مشروعك في تونس.",
    flagshipCards: [
      [`العشب الطبيعي — ${SITE.products.gazon.priceLabel}`, "سعر شفاف، توصيل حسب العنوان ونصائح لاختيار نوع العشب المناسب.", "/gazon-tunisie/", "/gazon.jpg"],
      [`نخيل زينة — ${SITE.products.palmier.priceLabel}`, "مثالي لتجميل الحديقة أو المدخل أو المسبح بنتيجة فاخرة.", "/palmier-tunisie/", "/palmier-eventail.jpeg"],
      ["تركيب العشب", "تركيب يُراعي التربة والاستخدام والمناخ التونسي.", "/services/pose-gazon/", "/gazon.jpg"],
      ["مقارنة نوعي العشب", "قارنوا بين الباسبالوم والعشب الأمريكي من حيث الاستعمال والعناية والمظهر قبل طلب العرض.", "/difference-paspalum-gazon-americain/", "/gazon.jpg"],
    ],
    collectionsKicker: "تجهيزات خارجية",
    collectionsTitle: "صنع حديقة أكثر جمالاً وأكثر خضرة وأكثر قيمة",
    collectionsCopy: "كل مساحة خضراء جيدة الاختيار تحسن الراحة والجمال وجودة الحياة في منزلكم أو فيلتكم.",
    careKicker: "نصائح التركيب",
    careTitle: "الخطوات الأساسية للحصول على عشب متين",
    careLight: "تربة جيدة التحضير",
    careWater: "ري منتظم",
    catalogKicker: "أدلة عملية",
    catalogTitle: "كل ما تحتاجون معرفته قبل شراء العشب",
    catalogCopy: "قارنوا أنواع العشب، أسعاره لكل متر مربع، خطوات التركيب وأفضل مناطق التوصيل في تونس.",
    searchLabel: "بحث",
    searchPlaceholder: "مثال: عشب، تركيب، سعر، نخلة...",
    emptyState: "لا توجد عناصر تطابق هذا البحث حالياً.",
    engraisKicker: "العناية",
    engraisTitle: "الأسمدة والعناية بالحديقة",
    engraisCopy: "حلول لتعزيز عشبكم ونباتاتكم وأزهاركم على مدار السنة.",
    engraisWhatsapp: "أرغب في نصيحة بشأن العناية بحديقتي",
    engraisCtaLabel: "اطلبوا نصيحة",
    engraisLink: "شاهدوا صفحة الأسمدة",
    gazonKicker: "العشب",
    gazonTitle: "عشب طبيعي على شكل لفائف في كل تونس",
    gazonCopy: "ابتداءً من 9 دينار/م² للمساحات من 50 م² فأكثر. أقل من 50 م² والتوصيل: عرض سعر حسب عنوانكم.",
    gazonCta: "شاهدوا العشب",
    gazonCtaSecondary: "كيف تشتروه",
    palmierKicker: "التنسيق الخارجي",
    palmierTitle: "نخلة زينة لإضفاء جمال على الخارج",
    palmierCopy: "نخلة زينة بسعر 500 دينار/م، مع عرض سعر لتأكيد الطلب ومصاريف التوصيل.",
    palmierCta: "شاهدوا النخيل",
    palmierCtaSecondary: "كيف تشتروه",
    deliveryH2: "توصيل في كل أنحاء تونس",
    deliveryIntro: "استمتعوا بتوصيل العشب والنخيل إلى منطقتكم مع عرض سعر شفاف قبل التأكيد.",
    deliveryCards: [
      ["تونس الكبرى", "توصيل سريع للفيلات والمنازل ومشاريع التهيئة الحضرية.", "/livraison/grand-tunis/", "/gazon.jpg"],
      ["نابل", "قاعدة قريبة من الموقع مع أوقات تنفيذ محسّنة ودعم أفضل.", "/livraison/nabeul/", "/gazon.jpg"],
      ["كل تونس", "توصيل حسب الطلب إلى سوسة وصفاقس والمنستير وبنزرت وقابس وغيرها.", "/livraison/", "/palmier-eventail.jpeg"],
    ],
    blogH2: "أدلة ونصائح لاختيار العشب المناسب",
    blogIntro: "تساعدكم مقالاتنا على مقارنة أنواع العشب، حساب التكاليف، تحضير التربة وتجنب أخطاء التركيب.",
    blogCards: [
      ["كيف تركبون العشب على شكل لفائف", "أكثر دليل عملي لتركيب ناجح ومتين.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["أي عشب تختارون في تونس", "قارنوا الأنواع حسب المناخ والتربة والاستخدام.", "/blog/quel-gazon-choisir-tunisie/", "/gazon.jpg"],
      ["سعر العشب في تونس بالمتر المربع", "فهم حساب السعر وتكاليف التوصيل قبل الطلب.", "/blog/prix-gazon-tunisie-m2/", "/gazon.jpg"],
    ],
    blogSeeAll: "شاهدوا كل مقالات المدونة",
    aboutKicker: "من نحن",
    aboutTitle: "Gazon Tunisie: نصائح مفيدة، عرض سعر سريع وموقع موجه للبحث",
    aboutCopy: "مهمتنا هي الإجابة عن أكبر الاستفسارات البحثية على Google: أي عشب تختارون، وما سعره، وكيف تضعونه، وأين يُوجَّه التوصيل وكيف تحصلون على عرض سعر موثوق.",
    aboutLink1: "اعرفوا المزيد عن Gazon Tunisie",
    aboutLink2: "لماذا تختاروننا",
  },
};

function renderLegacyHome(lang) {
  const t = HOME_TEXT[lang];
  const p = (path) => localizedPath(path, lang);

  const bodyHtml = `
    <section id="accueil" class="hero hero-with-image section-shell">
      <div class="hero-content">
        <p class="eyebrow">${t.heroEyebrow}</p>
        <h1>${t.heroTitle}</h1>
        <p class="hero-copy">${t.heroCopy}</p>
        <div class="hero-actions">
          <a class="pill-button" href="${p("/produits/")}">${t.ctaPrimary}</a>
          <a class="pill-button pill-button-ghost" href="${p("/contact/")}">${t.ctaSecondary}</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="/gazon.jpg" alt="${t.heroImgAlt}" loading="eager" fetchpriority="high" decoding="async"${sizeAttrs("/gazon.jpg")} />
      </div>
    </section>

    <section id="produits-phares" class="section-shell">
      ${renderCards({
        h2: t.flagshipH2,
        intro: t.flagshipIntro,
        cards: t.flagshipCards.map(([title, text, path, image]) => ({
          title,
          text,
          path: path.startsWith("#") ? path : p(path),
          image,
        })),
      })}
    </section>

    <section id="nouveautes" class="organic-grid section-shell">
      <article class="collection-card">
        <span class="eyebrow">${t.collectionsKicker}</span>
        <h2>${t.collectionsTitle}</h2>
        <p>${t.collectionsCopy}</p>
        <div class="petal-stack" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>

      <div class="floating-leaf" aria-hidden="true">
        <svg viewBox="0 0 120 160" role="img">
          <path d="M103 8C49 18 13 55 15 103c1 28 22 48 47 45 38-4 56-50 41-140Z" />
          <path d="M62 143C63 88 75 48 103 8" />
        </svg>
      </div>

      <article class="care-card">
        <span class="eyebrow">${t.careKicker}</span>
        <h2>${t.careTitle}</h2>
        <div class="care-list">
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M22 25h20l-4 28H26L22 25Z" />
              <path d="M18 25h28" />
              <path d="M32 25c-9-5-10-13-4-18 6 5 8 12 4 18Z" />
              <path d="M34 24c3-9 10-12 17-9-2 8-8 12-17 9Z" />
            </svg>
            <span>${t.careLight}</span>
          </div>
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M14 31c9-10 20-14 32-12l4 8c-12-1-22 2-31 11l-5-7Z" />
              <path d="M48 27c5 2 8 5 9 10" />
              <path d="M15 38c4 0 7 3 7 7a7 7 0 1 1-14 0c0-4 3-7 7-7Z" />
            </svg>
            <span>${t.careWater}</span>
          </div>
        </div>
      </article>
    </section>

    <section id="gazon" class="feature-section feature-section-reverse section-shell">
      <div class="feature-copy">
        <span class="eyebrow">${t.gazonKicker}</span>
        <h2>${t.gazonTitle}</h2>
        <p>${t.gazonCopy}</p>
        <a class="pill-button" href="${p("/gazon-tunisie/")}">${t.gazonCta}</a>
        <p><a href="${p("/acheter-gazon/")}">${t.gazonCtaSecondary}</a></p>
      </div>
      <div class="feature-media">
        <img src="/gazon.jpg" alt="${t.gazonTitle}" loading="lazy" decoding="async"${sizeAttrs("/gazon.jpg")} />
      </div>
    </section>

    <section id="palmier" class="feature-section section-shell">
      <div class="feature-copy">
        <span class="eyebrow">${t.palmierKicker}</span>
        <h2>${t.palmierTitle}</h2>
        <p>${t.palmierCopy}</p>
        <a class="pill-button" href="${p("/palmier-tunisie/")}">${t.palmierCta}</a>
        <p><a href="${p("/acheter-palmier/")}">${t.palmierCtaSecondary}</a></p>
      </div>
      <div class="feature-media">
        <img src="/palmier-eventail.jpeg" alt="${t.palmierTitle}" loading="lazy" decoding="async"${sizeAttrs("/palmier-eventail.jpeg")} />
      </div>
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: t.deliveryH2,
        intro: t.deliveryIntro,
        cards: t.deliveryCards.map(([title, text, path, image]) => ({ title, text, path: p(path), image })),
      })}
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: t.blogH2,
        intro: t.blogIntro,
        cards: t.blogCards.map(([title, text, path, image]) => ({ title, text, path: p(path), image })),
      })}
      <p style="text-align:center; margin-top: 12px;"><a href="${p("/blog/")}">${t.blogSeeAll}</a></p>
    </section>

    <section id="apropos" class="about-section section-shell">
      <div>
        <span class="eyebrow">${t.aboutKicker}</span>
        <h2>${t.aboutTitle}</h2>
        <p>${t.aboutCopy}</p>
      </div>
      <p class="about-links">
        <a href="${p("/a-propos/")}">${t.aboutLink1}</a> ·
        <a href="${p("/pourquoi-choisir-gazon-tunisie/")}">${t.aboutLink2}</a>
      </p>
    </section>
  `;

  return renderPage({
    basePath: "/",
    lang,
    title: t.title,
    description: t.description,
    bodyHtml,
    extraScripts: "",
  });
}

const PREMIUM_HOME_TEXT = {
  fr: {
    kicker: "Gazon naturel · Grombalia, Nabeul",
    title: "Un gazon naturel. Un extérieur qui change tout.",
    intro: "Gazon Paspalum et gazon américain en rouleau, avec accompagnement, livraison et pose selon votre projet en Tunisie.",
    primary: "Demander un devis",
    secondary: "Découvrir nos solutions",
    trust: ["Gazon naturel", "Conseil professionnel", "Devis selon votre terrain", "Livraison selon disponibilité"],
    productsKicker: "Nos solutions",
    productsTitle: "Une sélection courte, pensée pour les beaux extérieurs.",
    productsIntro: "Deux gazons naturels à comparer et un palmier décoratif pour structurer votre jardin.",
    products: [["Gazon Paspalum", "Un rendu dense et une solution à étudier selon votre sol, votre soleil et votre arrosage.", "/gazon-paspalum/", "/paspalum-02.jpeg"], ["Gazon américain", "Une pelouse naturelle régulière pour villas, jardins et espaces professionnels.", "/gazon-americain/", "/chantier-americain-after.jpeg"], ["Palmier décoratif", "500 DT/m. Demandez le prix exact et la livraison selon votre adresse.", "/palmier-tunisie/", "/palmier-classique.jpeg"]],
    storyKicker: "Notre méthode",
    storyTitle: "Le bon choix commence par votre terrain.",
    storyText: "Surface, exposition, sol, usage et adresse de livraison : nous vous posons les bonnes questions avant de vous orienter vers la solution adaptée.",
    storyPoints: ["Recommandation selon votre exposition", "Prix clair : à partir de 9 DT/m² dès 50 m²", "Livraison toujours calculée selon l’adresse"],
    storyCta: "Parler de mon projet",
    processKicker: "Un parcours simple",
    processTitle: "De l’idée à la pelouse posée.",
    process: [["01", "Contactez-nous", "WhatsApp ou téléphone."], ["02", "Présentez votre projet", "Surface, ville, type de gazon."], ["03", "Recevez votre devis", "Prix du gazon et livraison."], ["04", "Organisez la suite", "Livraison ou installation selon disponibilité."]],
    galleryKicker: "L’esprit Gazon Tunisie",
    galleryTitle: "Des matières naturelles, une direction soignée.",
    gallery: [["Paspalum naturel", "/paspalum-04.jpeg"], ["Pose de gazon américain", "/chantier-americain-after.jpeg"], ["Washingtonia", "/palmier-washington.jpeg"], ["Palmier classique", "/palmier-classique.jpeg"]],
    faqKicker: "Questions fréquentes",
    faqTitle: "Avant de demander votre devis.",
    faq: [["Quel est le prix du gazon ?", "À partir de 9 DT/m² pour 50 m² ou plus. Sous 50 m², le prix est sur devis."], ["La livraison est-elle gratuite ?", "Non. La livraison est toujours calculée selon votre adresse, la quantité et les conditions d’accès."], ["Où êtes-vous situés ?", "Nous sommes à Grombalia, dans le gouvernorat de Nabeul, avec livraison partout en Tunisie." ]],
    finalKicker: "Votre projet commence ici",
    finalTitle: "Prêt à transformer votre extérieur ?",
    finalText: "Envoyez-nous votre surface et votre ville. Nous vous répondons directement sur WhatsApp.",
    finalCta: "Obtenir mon devis",
  },
  en: {
    kicker: "Natural lawn · Grombalia, Nabeul",
    title: "Natural lawn. An outdoor space that changes everything.",
    intro: "Paspalum and American rolled lawn, with guidance, delivery and installation according to your project in Tunisia.",
    primary: "Request a quote",
    secondary: "Explore our solutions",
    trust: ["Natural lawn", "Professional advice", "Quote for your land", "Delivery by availability"],
    productsKicker: "Our solutions",
    productsTitle: "A short selection, designed for beautiful outdoor spaces.",
    productsIntro: "Two natural lawns to compare and a decorative palm tree to structure your garden.",
    products: [["Paspalum lawn", "A dense look to assess according to soil, sunlight and watering.", "/gazon-paspalum/", "/paspalum-02.jpeg"], ["American lawn", "Regular natural lawn for villas, gardens and professional spaces.", "/gazon-americain/", "/chantier-americain-after.jpeg"], ["Decorative palm tree", "500 DT/m. Request the exact price and delivery for your address.", "/palmier-tunisie/", "/palmier-classique.jpeg"]],
    storyKicker: "Our method", storyTitle: "The right choice starts with your land.", storyText: "Area, exposure, soil, use and delivery address: we ask the right questions before recommending the right solution.", storyPoints: ["Recommendation based on exposure", "Clear pricing: from 9 DT/sqm from 50 sqm", "Delivery always calculated by address"], storyCta: "Discuss my project",
    processKicker: "A simple journey", processTitle: "From idea to installed lawn.", process: [["01", "Contact us", "WhatsApp or phone."], ["02", "Share your project", "Area, city and lawn type."], ["03", "Receive your quote", "Lawn and delivery price."], ["04", "Plan the next step", "Delivery or installation by availability."]],
    galleryKicker: "The Gazon Tunisie spirit", galleryTitle: "Natural materials, a considered direction.", gallery: [["Paspalum lawn", "/paspalum-04.jpeg"], ["American lawn installation", "/chantier-americain-after.jpeg"], ["Washingtonia palm", "/palmier-washington.jpeg"], ["Classic palm tree", "/palmier-classique.jpeg"]],
    faqKicker: "Frequently asked questions", faqTitle: "Before requesting your quote.", faq: [["What is the lawn price?", "From 9 DT/sqm for 50 sqm or more. Under 50 sqm, the price is quoted."], ["Is delivery free?", "No. Delivery is always calculated according to your address, quantity and access conditions."], ["Where are you located?", "We are based in Grombalia, Nabeul, and deliver across Tunisia."]],
    finalKicker: "Your project starts here", finalTitle: "Ready to transform your outdoor space?", finalText: "Send us your area and city. We will reply directly on WhatsApp.", finalCta: "Get my quote",
  },
  ar: {
    kicker: "عشب طبيعي · قرمبالية، نابل", title: "عشب طبيعي. مساحة خارجية تغيّر كل شيء.", intro: "عشب باسبالوم وعشب أمريكي على شكل لفائف، مع توجيه وتوصيل وتركيب حسب مشروعكم في تونس.", primary: "اطلبوا عرض السعر", secondary: "اكتشفوا حلولنا", trust: ["عشب طبيعي", "نصيحة مهنية", "عرض حسب أرضكم", "توصيل حسب التوفر"], productsKicker: "حلولنا", productsTitle: "اختيار مركز لمساحات خارجية أجمل.", productsIntro: "نوعان من العشب الطبيعي للمقارنة ونخيل زينة لتنظيم حديقتكم.", products: [["عشب باسبالوم", "مظهر كثيف يُدرس حسب التربة والشمس والري.", "/gazon-paspalum/", "/paspalum-02.jpeg"], ["عشب أمريكي", "عشب طبيعي منتظم للفلل والحدائق والمساحات المهنية.", "/gazon-americain/", "/chantier-americain-after.jpeg"], ["نخيل زينة", "500 دينار/م. اطلبوا السعر الدقيق والتوصيل حسب العنوان.", "/palmier-tunisie/", "/palmier-classique.jpeg"]], storyKicker: "منهجيتنا", storyTitle: "الاختيار الصحيح يبدأ من أرضكم.", storyText: "المساحة، الشمس، التربة، الاستعمال وعنوان التوصيل: نطرح الأسئلة المناسبة قبل توجيهكم إلى الحل الأنسب.", storyPoints: ["توصية حسب التعرض للشمس", "سعر واضح: ابتداءً من 9 دنانير/م² من 50 م²", "التوصيل يُحتسب دائماً حسب العنوان"], storyCta: "تحدثوا عن مشروعكم", processKicker: "مسار بسيط", processTitle: "من الفكرة إلى تركيب العشب.", process: [["01", "تواصلوا معنا", "عبر واتساب أو الهاتف."], ["02", "قدموا مشروعكم", "المساحة والمدينة والنوع."], ["03", "استلموا عرض السعر", "سعر العشب والتوصيل."], ["04", "نظموا المرحلة التالية", "التوصيل أو التركيب حسب التوفر."]], galleryKicker: "روح Gazon Tunisie", galleryTitle: "مواد طبيعية وتوجيه بصري أنيق.", gallery: [["عشب باسبالوم", "/paspalum-04.jpeg"], ["تركيب عشب أمريكي", "/chantier-americain-after.jpeg"], ["نخيل واشنطنيا", "/palmier-washington.jpeg"], ["نخيل كلاسيكي", "/palmier-classique.jpeg"]], faqKicker: "أسئلة شائعة", faqTitle: "قبل طلب عرض السعر.", faq: [["ما هو سعر العشب؟", "ابتداءً من 9 دنانير/م² للمساحات من 50 م² فأكثر. أقل من 50 م² حسب العرض."], ["هل التوصيل مجاني؟", "لا. يُحتسب التوصيل حسب العنوان والكمية وظروف الوصول."], ["أين يوجد مقرّكم؟", "نحن في قرمبالية، نابل، ونوصل إلى كل تونس."]], finalKicker: "مشروعكم يبدأ هنا", finalTitle: "هل أنتم مستعدون لتغيير مساحتكم الخارجية؟", finalText: "أرسلوا لنا المساحة والمدينة وسنجيبكم مباشرة عبر واتساب.", finalCta: "احصلوا على عرض السعر",
  },
};

function renderHome(lang) {
  const t = PREMIUM_HOME_TEXT[lang];
  const p = (path) => localizedPath(path, lang);
  const project = {
    fr: { kicker: "Réalisation réelle", title: "Un chantier de gazon américain, avant et après.", text: "Une préparation de terrain, une pose en rouleaux et un résultat visible. Découvrez une réalisation photographiée par notre équipe.", before: "Avant la pose", after: "Après la pose" },
    en: { kicker: "Real project", title: "An American lawn project, before and after.", text: "Ground preparation, rolled lawn installation and a visible result. Discover a project photographed by our team.", before: "Before installation", after: "After installation" },
    ar: { kicker: "مشروع حقيقي", title: "مشروع عشب أمريكي قبل وبعد التركيب.", text: "تحضير الأرض وتركيب العشب على شكل لفائف والنتيجة واضحة. اكتشفوا مشروعاً صورناه بأنفسنا.", before: "قبل التركيب", after: "بعد التركيب" },
  }[lang];
  const wa = buildWhatsAppUrl(lang === "fr" ? "Bonjour Gazon Tunisie, je souhaite obtenir un devis pour mon projet de gazon." : lang === "en" ? "Hello Gazon Tunisie, I would like a quote for my lawn project." : "مرحباً Gazon Tunisie، أود الحصول على عرض سعر لمشروع العشب.");
  const bodyHtml = `
    <section class="premium-hero section-shell">
      <img class="premium-hero-image" src="/paspalum-05.jpeg" alt="${t.title}" loading="eager" fetchpriority="high" decoding="async"${sizeAttrs("/paspalum-05.jpeg")} />
      <div class="premium-hero-shade"></div>
      <div class="premium-hero-content">
        <span class="premium-kicker">${t.kicker}</span>
        <h1>${t.title}</h1>
        <p>${t.intro}</p>
        <div class="premium-actions"><a class="premium-button premium-button-primary" href="${wa}" target="_blank" rel="noreferrer">${t.primary}</a><a class="premium-button premium-button-light" href="#solutions">${t.secondary}</a></div>
        <div class="premium-trust-line"><span>✓</span> ${t.trust[0]} <i></i><span>✓</span> ${t.trust[1]}</div>
      </div>
    </section>

    <section class="premium-trust section-shell" aria-label="${t.productsKicker}">${t.trust.map((item, i) => `<div class="premium-trust-item"><span>0${i + 1}</span><strong>${item}</strong></div>`).join("")}</section>

    <section id="solutions" class="premium-section section-shell">
      <div class="premium-heading"><span class="premium-kicker">${t.productsKicker}</span><h2>${t.productsTitle}</h2><p>${t.productsIntro}</p></div>
      <div class="premium-product-grid">${t.products.map(([title, text, path, image], i) => `<a class="premium-product-card" href="${p(path)}"><div class="premium-product-image"><img src="${image}" alt="${title}" loading="lazy" decoding="async"${sizeAttrs(image)} /></div><div class="premium-product-copy"><span>0${i + 1}</span><h3>${title}</h3><p>${text}</p><b>↗</b></div></a>`).join("")}</div>
    </section>

    <section class="premium-story section-shell"><div class="premium-story-image"><img src="/chantier-americain-after.jpeg" alt="${t.storyTitle}" loading="lazy" decoding="async"${sizeAttrs("/chantier-americain-after.jpeg")} /><span>GZ / TN</span></div><div class="premium-story-copy"><span class="premium-kicker">${t.storyKicker}</span><h2>${t.storyTitle}</h2><p>${t.storyText}</p><ul>${t.storyPoints.map((point) => `<li><span>✓</span>${point}</li>`).join("")}</ul><a class="text-arrow" href="${wa}" target="_blank" rel="noreferrer">${t.storyCta} ↗</a></div></section>

    <section class="premium-project section-shell"><div class="premium-heading"><span class="premium-kicker">${project.kicker}</span><h2>${project.title}</h2><p>${project.text}</p></div><div class="premium-before-after"><figure><div><img src="/chantier-americain-before.png" alt="${project.before}" loading="lazy" decoding="async"${sizeAttrs("/chantier-americain-before.png")} /><span>01</span></div><figcaption>${project.before}</figcaption></figure><div class="premium-project-arrow">→</div><figure><div><img src="/chantier-americain-after.jpeg" alt="${project.after}" loading="lazy" decoding="async"${sizeAttrs("/chantier-americain-after.jpeg")} /><span>02</span></div><figcaption>${project.after}</figcaption></figure></div></section>

    <section class="premium-process section-shell"><div class="premium-heading"><span class="premium-kicker">${t.processKicker}</span><h2>${t.processTitle}</h2></div><div class="premium-process-grid">${t.process.map(([number, title, text]) => `<div class="premium-step"><span>${number}</span><h3>${title}</h3><p>${text}</p></div>`).join("")}</div></section>

    <section class="premium-gallery section-shell"><div class="premium-heading"><span class="premium-kicker">${t.galleryKicker}</span><h2>${t.galleryTitle}</h2></div><div class="premium-gallery-grid">${t.gallery.map(([label, image], i) => `<figure class="premium-gallery-item item-${i + 1}"><img src="${image}" alt="${label}" loading="lazy" decoding="async"${sizeAttrs(image)} /><figcaption>${label}</figcaption></figure>`).join("")}</div></section>

    <section class="premium-faq section-shell"><div class="premium-heading"><span class="premium-kicker">${t.faqKicker}</span><h2>${t.faqTitle}</h2></div><div class="premium-faq-list">${t.faq.map(([q, a]) => `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join("")}</div></section>

    <section class="premium-final section-shell"><div><span class="premium-kicker">${t.finalKicker}</span><h2>${t.finalTitle}</h2><p>${t.finalText}</p></div><a class="premium-button premium-button-primary" href="${wa}" target="_blank" rel="noreferrer">${t.finalCta} ↗</a></section>
  `;
  return renderPage({
    basePath: "/",
    lang,
    title: HOME_TEXT[lang].title,
    description: HOME_TEXT[lang].description,
    bodyHtml,
    jsonLd: [faqPage(t.faq.map(([q, a]) => ({ q, a })))],
  });
}

module.exports = { renderHome };
