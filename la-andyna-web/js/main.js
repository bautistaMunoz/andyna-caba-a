/**
 * Punto de entrada: inicializa cada módulo en orden.
 */
(function () {
  "use strict";

  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initContacto() {
    var c = window.ANDYNA.contacto;
    document.querySelectorAll("[data-contacto]").forEach(function (el) {
      var tipo = el.getAttribute("data-contacto");
      if (tipo === "whatsapp") el.textContent = c.whatsappVisible;
      if (tipo === "email") { el.textContent = c.email; el.href = "mailto:" + c.email; }
      if (tipo === "instagram") { el.textContent = "@" + c.instagram; el.href = "https://www.instagram.com/" + c.instagram; }
      if (tipo === "facebook") { el.textContent = c.facebook; el.href = "https://www.facebook.com/" + c.facebook; }
    });
  }

  function initAnio() {
    var el = document.querySelector("[data-anio]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.AndynaGallery.init();
    window.AndynaLightbox.init();
    window.AndynaWhatsapp.init();
    initContacto();
    initHeader();
    initAnio();
  });
})();
