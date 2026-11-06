// Formulaire de devis : construit un message WhatsApp structuré à partir des champs saisis.
// Aucune donnée n'est envoyée à un serveur : tout se passe côté client, comme le reste du site.
(function () {
  var form = document.getElementById("devisForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("devisName").value.trim();
    var phone = document.getElementById("devisPhone").value.trim();
    var product = document.getElementById("devisProduct").value;
    var city = document.getElementById("devisCity").value.trim();
    var message = document.getElementById("devisMessage").value.trim();

    var lines = [
      "Bonjour, je souhaite une demande de devis Gazon Tunisie.",
      "Nom : " + name,
      "Téléphone : " + phone,
      "Produit souhaité : " + product,
      city ? "Ville : " + city : "",
      message ? "Message : " + message : "",
    ].filter(Boolean);

    var url = "https://wa.me/21658233020?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noreferrer");
  });
})();
