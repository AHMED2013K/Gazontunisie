/* Formulaire de demande de devis Gazon Tunisie.
   Aucune donnée n'est envoyée à un serveur : tout se passe côté client, comme le reste du site. */
(function () {
  "use strict";

  var form = document.querySelector("[data-quote]");
  if (!form) return;

  var section = form.closest(".quote-calc");
  var configEl = section.querySelector("[data-quote-config]");
  var ctaEl = section.querySelector("[data-quote-cta]");

  var cfg;
  try {
    cfg = JSON.parse(configEl.textContent);
  } catch (e) {
    return; // config illisible : on laisse le lien WhatsApp generique en place
  }
  var L = cfg.labels;

  function fill(tpl, values) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : m;
    });
  }

  function waUrl(message) {
    return "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(message);
  }

  function render() {
    var brut = form.elements.surface.value.trim();
    var epaisseur = form.elements.terre.value;
    var typeSelect = form.elements.type;
    var typeLabel = typeSelect.options[typeSelect.selectedIndex].text;
    var serviceSelect = form.elements.service;
    var serviceLabel = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "";

    /* Toute surface est commandable : sous 50 m2 le tarif est simplement
       different (voir le tableau des tarifs sur la page). Le formulaire ne
       bloque rien et ne chiffre rien. */
    if (!brut) {
      ctaEl.href = waUrl(L.fallbackMessage);
      return;
    }

    ctaEl.href = waUrl(
      fill(epaisseur ? L.message : L.messageNoTerre, {
        surface: brut,
        type: typeLabel,
        service: serviceLabel,
        terre: epaisseur
      })
    );
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  render();
})();
