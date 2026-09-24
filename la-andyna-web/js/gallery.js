/**
 * Galerías: dibuja el carrusel de cada casa a partir de js/config.js.
 * Si la casa tiene video, va como primer elemento del carrusel,
 * del mismo tamaño que las fotos (se agranda con pantalla completa).
 *
 *   <div data-gallery="andyna-1"></div>
 */
(function () {
  "use strict";

  function fotoGrande(casaId, archivo) {
    return "img/" + casaId + "/" + archivo + ".jpg";
  }

  function fotoMiniatura(casaId, archivo) {
    return "img/thumbs/" + casaId + "-" + archivo + ".jpg";
  }

  function crearItemVideo(casaId, casa) {
    var item = document.createElement("li");
    item.className = "gallery__item gallery__item--video";

    var video = document.createElement("video");
    video.src = casa.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = casa.videoPortada || fotoGrande(casaId, casa.fotos[0].archivo);
    video.setAttribute("aria-label", "Video de " + casa.nombre);

    var etiqueta = document.createElement("span");
    etiqueta.className = "gallery__tag";
    etiqueta.textContent = "Video";

    item.appendChild(video);
    item.appendChild(etiqueta);
    return item;
  }

  function textoContador(casa) {
    var n = casa.fotos.length;
    var texto = n + (n === 1 ? " foto" : " fotos");
    if (casa.video) texto += " y 1 video";
    return texto;
  }

  function renderGaleria(contenedor) {
    var casaId = contenedor.getAttribute("data-gallery");
    var casa = window.ANDYNA.casas[casaId];
    if (!casa) return;

    var lista = document.createElement("ul");
    lista.className = "gallery__track";

    if (casa.video) lista.appendChild(crearItemVideo(casaId, casa));

    casa.fotos.forEach(function (foto, i) {
      var item = document.createElement("li");
      item.className = "gallery__item";

      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "gallery__btn";
      boton.setAttribute("aria-label", "Ampliar foto: " + foto.alt);
      boton.dataset.casa = casaId;
      boton.dataset.index = String(i);

      var img = document.createElement("img");
      img.src = fotoMiniatura(casaId, foto.archivo);
      img.alt = foto.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 480;
      img.height = 640;

      boton.appendChild(img);
      item.appendChild(boton);
      lista.appendChild(item);
    });

    contenedor.appendChild(lista);

    var contador = contenedor.parentElement.querySelector("[data-gallery-count]");
    if (contador) contador.textContent = textoContador(casa);
  }

  function init() {
    document.querySelectorAll("[data-gallery]").forEach(renderGaleria);
  }

  window.AndynaGallery = { init: init, fotoGrande: fotoGrande };
})();
