/**
 * WhatsApp: arma los enlaces de todos los botones con [data-wa].
 * Si el botón tiene data-casa="andyna-1", el mensaje nombra esa casa.
 */
(function () {
  "use strict";

  function buildUrl(nombreCasa) {
    var cfg = window.ANDYNA;
    var texto = cfg.mensajeWhatsapp.replace("{casa}", nombreCasa || "La Andyna");
    return "https://wa.me/" + cfg.contacto.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  function init() {
    var casas = window.ANDYNA.casas;
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var id = el.getAttribute("data-casa");
      var nombre = id && casas[id] ? casas[id].nombre : null;
      el.setAttribute("href", buildUrl(nombre));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  window.AndynaWhatsapp = { init: init, buildUrl: buildUrl };
})();
