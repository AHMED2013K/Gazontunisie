const { breadcrumbList } = require("./schema");

// items: [{ label, path }] – le dernier élément est la page courante (non cliquable).
function renderBreadcrumb(items) {
  const html = `
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <ol>
        ${items
          .map((item, index) => {
            const isLast = index === items.length - 1;
            return `<li>${
              isLast
                ? `<span aria-current="page">${item.label}</span>`
                : `<a href="${item.path}">${item.label}</a>`
            }</li>`;
          })
          .join("")}
      </ol>
    </nav>`;

  return { html, jsonLd: breadcrumbList(items) };
}

module.exports = { renderBreadcrumb };
