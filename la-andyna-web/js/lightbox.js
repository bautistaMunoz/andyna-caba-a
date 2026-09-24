/**
 * Visor de fotos a pantalla completa.
 * Se abre con cualquier botón [data-casa][data-index].
 * Teclado: ← → para navegar, Esc para cerrar. En celular: deslizar.
 */
(function () {
  "use strict";

  var el, img, caption, counter;
  var fotos = [];
  var casaId = null;
  var actual = 0;
  var ultimoFoco = null;
  var toqueX = null;

  function mostrar(i) {
    actual = (i + fotos.length) % fotos.length;
    var foto = fotos[actual];
    img.src = window.AndynaGallery.fotoGrande(casaId, foto.archivo);
    img.alt = foto.alt;
    caption.textContent = foto.alt;
    counter.textContent = actual + 1 + " / " + fotos.length;
  }

  function abrir(casa, index) {
    casaId = casa;
    fotos = window.ANDYNA.casas[casa].fotos;
    ultimoFoco = document.activeElement;
    mostrar(index);
    el.hidden = false;
    document.body.classList.add("is-locked");
    el.querySelector(".lightbox__close").focus();
  }

  function cerrar() {
    el.hidden = true;
    img.removeAttribute("src");
    document.body.classList.remove("is-locked");
    if (ultimoFoco) ultimoFoco.focus();
  }

  function onKey(e) {
    if (el.hidden) return;
    if (e.key === "Escape") cerrar();
    if (e.key === "ArrowRight") mostrar(actual + 1);
    if (e.key === "ArrowLeft") mostrar(actual - 1);
  }

  function init() {
    el = document.getElementById("lightbox");
    if (!el) return;
    img = el.querySelector(".lightbox__img");
    caption = el.querySelector(".lightbox__caption");
    counter = el.querySelector(".lightbox__counter");

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-casa][data-index]");
      if (btn) abrir(btn.dataset.casa, parseInt(btn.dataset.index, 10));
    });

    el.querySelector(".lightbox__close").addEventListener("click", cerrar);
    el.querySelector(".lightbox__prev").addEventListener("click", function () { mostrar(actual - 1); });
    el.querySelector(".lightbox__next").addEventListener("click", function () { mostrar(actual + 1); });
    el.addEventListener("click", function (e) { if (e.target === el) cerrar(); });
    document.addEventListener("keydown", onKey);

    el.addEventListener("touchstart", function (e) { toqueX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (toqueX === null) return;
      var dx = e.changedTouches[0].clientX - toqueX;
      if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
      toqueX = null;
    });
  }

  window.AndynaLightbox = { init: init };
})();
