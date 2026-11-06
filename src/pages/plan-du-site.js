const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { villes } = require("../data/villes");
const { categories, articles } = require("../data/blog");
const { localizedPath } = require("../data/i18n");
const { UI, CITY_NAMES } = require("../data/ui-strings");

const PAGE_TEXT = {
  fr: {
    title: "Plan du site | Gazon Tunisie",
    description: "Toutes les pages du site Gazon Tunisie : produits, zones de livraison et blog jardinage.",
    eyebrow: "Navigation",
    h1: "Plan du site",
    intro: "Toutes les pages de Gazon Tunisie, classées par thème.",
    label: "Plan du site",
    mainTitle: "Pages principales",
    mainLinks: [
      ["Accueil", "/"],
      ["Nos produits", "/produits/"],
      ["Zones de livraison", "/livraison/"],
      ["Blog jardinage", "/blog/"],
      ["Pourquoi choisir Gazon Tunisie", "/pourquoi-choisir-gazon-tunisie/"],
      ["À propos", "/a-propos/"],
      ["Contact", "/contact/"],
      ["FAQ", "/faq/"],
    ],
    gazonTitle: "Gazon naturel",
    gazonLinks: [
      ["Gazon Tunisie", "/gazon-tunisie/"],
      ["Gazon naturel", "/gazon-naturel/"],
      ["Gazon en rouleau", "/gazon-en-rouleau/"],
      ["Acheter du gazon", "/acheter-gazon/"],
      ["Gazon Grand Tunis", "/gazon-grand-tunis/"],
      ["Gazon Nabeul", "/gazon-nabeul/"],
    ],
    palmierTitle: "Palmier décoratif",
    palmierLinks: [
      ["Palmier Tunisie", "/palmier-tunisie/"],
      ["Acheter un palmier", "/acheter-palmier/"],
      ["Palmier de jardin", "/palmier-jardin/"],
      ["Palmier décoratif", "/palmier-decoratif/"],
    ],
    categoriesTitle: "Catégories de produits",
    categoriesLinks: [["Gazon Paspalum", "/gazon-paspalum/"], ["Gazon américain", "/gazon-americain/"], ["Différence entre les deux", "/difference-paspalum-gazon-americain/"], ["Palmier décoratif", "/palmier-tunisie/"]],
    servicesTitle: "Services",
    servicesLinks: [
      ["Nos services", "/services/"],
      ["Pose de gazon", "/services/pose-gazon/"],
      ["Plantation de palmier", "/services/plantation-palmier/"],
    ],
    deliveryTitle: "Zones de livraison",
    deliveryPrefix: "Livraison",
    otherRegions: "Autres régions",
    blogCategoriesTitle: "Blog - Catégories",
    blogArticlesTitle: "Blog - Articles",
  },
  en: {
    title: "Sitemap | Gazon Tunisie",
    description: "All pages of the Gazon Tunisie site: products, delivery zones and gardening blog.",
    eyebrow: "Navigation",
    h1: "Sitemap",
    intro: "All Gazon Tunisie pages, organised by topic.",
    label: "Sitemap",
    mainTitle: "Main pages",
    mainLinks: [
      ["Home", "/"],
      ["Our products", "/produits/"],
      ["Delivery zones", "/livraison/"],
      ["Gardening blog", "/blog/"],
      ["Why choose Gazon Tunisie", "/pourquoi-choisir-gazon-tunisie/"],
      ["About", "/a-propos/"],
      ["Contact", "/contact/"],
      ["FAQ", "/faq/"],
    ],
    gazonTitle: "Natural lawn",
    gazonLinks: [
      ["Lawn Tunisia", "/gazon-tunisie/"],
      ["Natural lawn", "/gazon-naturel/"],
      ["Rolled lawn", "/gazon-en-rouleau/"],
      ["Buy lawn", "/acheter-gazon/"],
      ["Lawn Greater Tunis", "/gazon-grand-tunis/"],
      ["Lawn Nabeul", "/gazon-nabeul/"],
    ],
    palmierTitle: "Decorative palm tree",
    palmierLinks: [
      ["Palm Tree Tunisia", "/palmier-tunisie/"],
      ["Buy a palm tree", "/acheter-palmier/"],
      ["Garden palm tree", "/palmier-jardin/"],
      ["Decorative palm tree", "/palmier-decoratif/"],
    ],
    categoriesTitle: "Product categories",
    categoriesLinks: [["Paspalum lawn", "/gazon-paspalum/"], ["American lawn", "/gazon-americain/"], ["Difference between both", "/difference-paspalum-gazon-americain/"], ["Decorative palm tree", "/palmier-tunisie/"]],
    servicesTitle: "Services",
    servicesLinks: [
      ["Our services", "/services/"],
      ["Lawn laying", "/services/pose-gazon/"],
      ["Palm tree planting", "/services/plantation-palmier/"],
    ],
    deliveryTitle: "Delivery zones",
    deliveryPrefix: "Delivery",
    otherRegions: "Other regions",
    blogCategoriesTitle: "Blog - Categories",
    blogArticlesTitle: "Blog - Articles",
  },
  ar: {
    title: "خريطة الموقع | Gazon Tunisie",
    description: "كل صفحات موقع Gazon Tunisie: المنتجات، مناطق التوصيل ومدونة البستنة.",
    eyebrow: "التصفح",
    h1: "خريطة الموقع",
    intro: "كل صفحات Gazon Tunisie، مصنفة حسب الموضوع.",
    label: "خريطة الموقع",
    mainTitle: "الصفحات الرئيسية",
    mainLinks: [
      ["الرئيسية", "/"],
      ["منتجاتنا", "/produits/"],
      ["مناطق التوصيل", "/livraison/"],
      ["مدونة البستنة", "/blog/"],
      ["لماذا تختارون Gazon Tunisie", "/pourquoi-choisir-gazon-tunisie/"],
      ["من نحن", "/a-propos/"],
      ["اتصل بنا", "/contact/"],
      ["الأسئلة الشائعة", "/faq/"],
    ],
    gazonTitle: "عشب طبيعي",
    gazonLinks: [
      ["عشب تونس", "/gazon-tunisie/"],
      ["عشب طبيعي", "/gazon-naturel/"],
      ["عشب على شكل لفائف", "/gazon-en-rouleau/"],
      ["شراء العشب", "/acheter-gazon/"],
      ["عشب تونس الكبرى", "/gazon-grand-tunis/"],
      ["عشب نابل", "/gazon-nabeul/"],
    ],
    palmierTitle: "نخيل زينة",
    palmierLinks: [
      ["نخيل تونس", "/palmier-tunisie/"],
      ["شراء نخلة", "/acheter-palmier/"],
      ["نخيل الحديقة", "/palmier-jardin/"],
      ["نخيل زينة", "/palmier-decoratif/"],
    ],
    categoriesTitle: "فئات المنتجات",
    categoriesLinks: [["عشب باسبالوم", "/gazon-paspalum/"], ["عشب أمريكي", "/gazon-americain/"], ["الفرق بين النوعين", "/difference-paspalum-gazon-americain/"], ["نخيل زينة", "/palmier-tunisie/"]],
    servicesTitle: "الخدمات",
    servicesLinks: [
      ["خدماتنا", "/services/"],
      ["تركيب العشب", "/services/pose-gazon/"],
      ["غرس النخيل", "/services/plantation-palmier/"],
    ],
    deliveryTitle: "مناطق التوصيل",
    deliveryPrefix: "توصيل",
    otherRegions: "مناطق أخرى",
    blogCategoriesTitle: "المدونة - الفئات",
    blogArticlesTitle: "المدونة - المقالات",
  },
};

function renderSitemapPage(lang) {
  const t = PAGE_TEXT[lang];
  const p = (path) => localizedPath(path, lang);

  const SECTIONS = [
    { title: t.mainTitle, links: t.mainLinks.map(([label, path]) => ({ label, path: p(path) })) },
    { title: t.gazonTitle, links: t.gazonLinks.map(([label, path]) => ({ label, path: p(path) })) },
    { title: t.palmierTitle, links: t.palmierLinks.map(([label, path]) => ({ label, path: p(path) })) },
    { title: t.categoriesTitle, links: t.categoriesLinks.map(([label, path]) => ({ label, path: p(path) })) },
    { title: t.servicesTitle, links: t.servicesLinks.map(([label, path]) => ({ label, path: p(path) })) },
    {
      title: t.deliveryTitle,
      links: [
        ...villes.map((v) => ({ label: `${t.deliveryPrefix} ${CITY_NAMES[v.slug][lang]}`, path: p(`/livraison/${v.slug}/`) })),
        { label: t.otherRegions, path: p("/livraison/autres-regions/") },
      ],
    },
    { title: t.blogCategoriesTitle, links: categories.map((c) => ({ label: c.t[lang].name, path: p(`/blog/categorie/${c.slug}/`) })) },
    { title: t.blogArticlesTitle, links: articles.map((a) => ({ label: a.t[lang].title, path: p(`/blog/${a.slug}/`) })) },
  ];

  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: t.label, path: localizedPath("/plan-du-site/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

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
      ${SECTIONS.map(
        (section) => `
        <section class="content-block">
          <h2>${section.title}</h2>
          <ul class="content-list">
            ${section.links.map((link) => `<li><a href="${link.path}">${link.label}</a></li>`).join("")}
          </ul>
        </section>`
      ).join("")}
    </div>
  `;

  return renderPage({
    basePath: "/plan-du-site/",
    lang,
    title: t.title,
    description: t.description,
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/plan-du-site/", lang), renderSitemapPage(lang));
}

module.exports = { build };
