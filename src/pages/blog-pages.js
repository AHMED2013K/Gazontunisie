const { sizeAttrs } = require("../data/image-size");
const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { renderSections, renderCards } = require("../templates/components");
const { faqPage, article: articleSchema } = require("../templates/schema");
const { categories, articles } = require("../data/blog");
const { localizedPath } = require("../data/i18n");
const { UI } = require("../data/ui-strings");

const MONTHS = {
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ar: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
};

const BLOG_TEXT = {
  fr: {
    label: "Blog",
    hubTitle: "Blog jardinage Gazon Tunisie | Gazon & Palmiers",
    hubDescription: "Conseils pratiques sur le gazon naturel, les palmiers décoratifs et l'aménagement extérieur en Tunisie, par Gazon Tunisie.",
    hubEyebrow: "Ressources",
    hubH1: "Blog jardinage Gazon Tunisie",
    hubIntro: "Conseils pratiques sur le gazon naturel, les palmiers et l'aménagement extérieur en Tunisie.",
    categoriesH2: "Catégories",
    allArticlesH2: "Tous les articles",
    categoryEyebrow: "Blog",
    otherCategoriesH2: "Autres catégories",
    categoryDescSuffix: (name) => `Retrouvez tous nos articles sur ${name.toLowerCase()}.`,
    publishedOn: "Publié le",
    faqH2: "Questions fréquentes",
    readAlsoH2: "À lire aussi",
  },
  en: {
    label: "Blog",
    hubTitle: "Gazon Tunisie Gardening Blog | Lawn & Palm Trees",
    hubDescription: "Practical advice on natural lawn, decorative palm trees and outdoor design in Tunisia, by Gazon Tunisie.",
    hubEyebrow: "Resources",
    hubH1: "Gazon Tunisie gardening blog",
    hubIntro: "Practical advice on natural lawn, palm trees and outdoor design in Tunisia.",
    categoriesH2: "Categories",
    allArticlesH2: "All articles",
    categoryEyebrow: "Blog",
    otherCategoriesH2: "Other categories",
    categoryDescSuffix: (name) => `Find all our articles about ${name.toLowerCase()}.`,
    publishedOn: "Published on",
    faqH2: "Frequently asked questions",
    readAlsoH2: "Read also",
  },
  ar: {
    label: "المدونة",
    hubTitle: "مدونة البستنة Gazon Tunisie | عشب ونخيل",
    hubDescription: "نصائح عملية حول العشب الطبيعي ونخيل الزينة والتهيئة الخارجية في تونس، من Gazon Tunisie.",
    hubEyebrow: "موارد",
    hubH1: "مدونة البستنة من Gazon Tunisie",
    hubIntro: "نصائح عملية حول العشب الطبيعي والنخيل والتهيئة الخارجية في تونس.",
    categoriesH2: "الفئات",
    allArticlesH2: "كل المقالات",
    categoryEyebrow: "المدونة",
    otherCategoriesH2: "فئات أخرى",
    categoryDescSuffix: (name) => `اعثروا على كل مقالاتنا حول ${name}.`,
    publishedOn: "نُشر في",
    faqH2: "أسئلة شائعة",
    readAlsoH2: "اقرؤوا أيضاً",
  },
};

function findArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

function findCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

function formatDate(iso, lang) {
  const [year, month, day] = iso.split("-");
  const months = MONTHS[lang];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

function hubPage(lang) {
  const bt = BLOG_TEXT[lang];
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: bt.label, path: localizedPath("/blog/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

  const sortedArticles = [...articles].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${bt.hubEyebrow}</p>
        <h1>${bt.hubH1}</h1>
        <p class="hero-copy">${bt.hubIntro}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections([
        {
          type: "related",
          h2: bt.categoriesH2,
          links: categories.map((c) => ({
            label: c.t[lang].name,
            path: localizedPath(`/blog/categorie/${c.slug}/`, lang),
            description: c.t[lang].description,
          })),
        },
      ])}
      ${renderCards({
        h2: bt.allArticlesH2,
        cards: sortedArticles.map((a) => ({
          title: a.t[lang].title,
          text: findCategory(a.category).t[lang].name,
          path: localizedPath(`/blog/${a.slug}/`, lang),
          image: a.heroImage.src,
        })),
      })}
    </div>
  `;

  return renderPage({
    basePath: "/blog/",
    lang,
    title: bt.hubTitle,
    description: bt.hubDescription,
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function categoryPage(category, lang) {
  const bt = BLOG_TEXT[lang];
  const catText = category.t[lang];
  const categoryArticles = articles.filter((a) => a.category === category.slug);
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: bt.label, path: localizedPath("/blog/", lang) },
    { label: catText.name, path: localizedPath(`/blog/categorie/${category.slug}/`, lang) },
  ];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${bt.categoryEyebrow}</p>
        <h1>${catText.name}</h1>
        <p class="hero-copy">${catText.description}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderCards({
        cards: categoryArticles.map((a) => ({
          title: a.t[lang].title,
          text: formatDate(a.datePublished, lang),
          path: localizedPath(`/blog/${a.slug}/`, lang),
          image: a.heroImage.src,
        })),
      })}
      ${renderSections([
        {
          type: "related",
          h2: bt.otherCategoriesH2,
          links: categories
            .filter((c) => c.slug !== category.slug)
            .map((c) => ({ label: c.t[lang].name, path: localizedPath(`/blog/categorie/${c.slug}/`, lang), description: c.t[lang].description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    basePath: `/blog/categorie/${category.slug}/`,
    lang,
    title: `${catText.name} | Blog Gazon Tunisie`,
    description: `${catText.description} ${bt.categoryDescSuffix(catText.name)}`,
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function articlePage(a, lang) {
  const bt = BLOG_TEXT[lang];
  const at = a.t[lang];
  const category = findCategory(a.category);
  const catText = category.t[lang];
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: bt.label, path: localizedPath("/blog/", lang) },
    { label: catText.name, path: localizedPath(`/blog/categorie/${category.slug}/`, lang) },
    { label: at.title, path: localizedPath(`/blog/${a.slug}/`, lang) },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const localizedBase = localizedPath(`/blog/${a.slug}/`, lang);
  const jsonLd = [
    breadcrumbJsonLd,
    articleSchema({
      headline: at.title,
      description: at.metaDescription,
      datePublished: a.datePublished,
      image: a.heroImage.src,
      path: localizedBase,
    }),
  ];

  const faqItems = (at.faq || []).map(([q, ans]) => ({ q, a: ans }));
  if (faqItems.length) jsonLd.push(faqPage(faqItems));

  const relatedArticles = (a.related || [])
    .map((slug) => findArticle(slug))
    .filter(Boolean)
    .map((rel) => ({
      label: rel.t[lang].title,
      path: localizedPath(`/blog/${rel.slug}/`, lang),
      description: formatDate(rel.datePublished, lang),
    }));

  // La section CTA de chaque article est décrite séparément (ctaHeading/ctaText/...)
  const ctaSection = at.ctaHeading
    ? [
        {
          type: "cta",
          heading: at.ctaHeading,
          text: at.ctaText,
          buttonLabel: at.ctaButton,
          whatsappMessage: at.ctaMessage,
          secondary: at.ctaSecondary ? { label: at.ctaSecondary, path: localizedPath(a.ctaSecondaryPath, lang) } : undefined,
        },
      ]
    : [];

  const allSections = [...at.sections, ...ctaSection];
  if (faqItems.length) allSections.push({ type: "faq", h2: bt.faqH2, items: faqItems });
  if (relatedArticles.length) allSections.push({ type: "related", h2: bt.readAlsoH2, links: relatedArticles });

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${catText.name}</p>
        <h1>${at.h1}</h1>
        <p class="blog-meta">${bt.publishedOn} ${formatDate(a.datePublished, lang)}</p>
        <p class="hero-copy">${at.intro}</p>
      </div>
      <div class="page-hero-media">
        <img src="${a.heroImage.src}" alt="${at.heroAlt}" loading="eager" fetchpriority="high" decoding="async"${sizeAttrs(a.heroImage.src)} />
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections(allSections)}
    </div>
  `;

  return renderPage({
    basePath: `/blog/${a.slug}/`,
    lang,
    title: `${at.metaTitle || at.title} - Gazon Tunisie`,
    description: at.metaDescription,
    bodyHtml,
    jsonLd,
    ogImage: a.heroImage.src,
    ogType: "article",
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/blog/", lang), hubPage(lang));
  categories.forEach((category) => registerPage(localizedPath(`/blog/categorie/${category.slug}/`, lang), categoryPage(category, lang)));
  articles.forEach((a) => registerPage(localizedPath(`/blog/${a.slug}/`, lang), articlePage(a, lang)));
}

module.exports = { build };
