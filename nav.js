// Comportement du menu mobile, partagé par toutes les pages du site.
(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (!navToggle || !mainNav) return;

  navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("is-open");
    var expanded = mainNav.classList.contains("is-open");
    navToggle.setAttribute("aria-expanded", String(expanded));
  });

  mainNav.addEventListener("click", function (event) {
    if (event.target.matches("a")) {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
