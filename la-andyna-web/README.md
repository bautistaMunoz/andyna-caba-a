# La Andyna · Sitio web

Landing de una sola página para La Andyna, casas de montaña en Caviahue (Neuquén).
Es un sitio estático: HTML, CSS y JavaScript sin dependencias ni proceso de compilación.

## Estructura

```
index.html            Estructura y textos de la página
css/
  variables.css       Colores, tipografías y espaciados (tomados del logo)
  base.css            Reset y estilos generales
  components.css      Botones, títulos y botón fijo de WhatsApp
  header.css          Encabezado y menú
  hero.css            1. Portada
  casas.css           2. Las casas (ficha, equipamiento, galería, video)
  caviahue.css        3. Caviahue
  contacto.css        4. Contacto y pie de página
  lightbox.css        Visor de fotos a pantalla completa
js/
  config.js           ← DATOS EDITABLES: contacto, mensaje de WhatsApp, fotos y videos
  whatsapp.js         Arma los enlaces de WhatsApp con el mensaje predeterminado
  gallery.js          Dibuja el carrusel de cada casa (fotos + video)
  lightbox.js         Visor de fotos (flechas, teclado y deslizar en celular)
  main.js             Inicializa todo
img/
  andyna-1/           Fotos grandes de La Andyna I
  andyna-2/           Fotos grandes de La Andyna II
  thumbs/             Miniaturas (480 px) para la galería
  caviahue/           Fotos de paisaje de la sección Caviahue
  logo.jpg, logo-emblema.jpg, favicon.png
videos/               Videos de cada casa
```

## Tareas comunes

**Agregar el video de una casa**
1. Subir el archivo a `videos/` (por ejemplo `videos/andyna-1.mp4`).
2. En `js/config.js`, completar `video: "videos/andyna-1.mp4"`.
3. Opcional: en `videoPortada` poner la imagen que se ve antes de darle play.
   El video aparece primero en el carrusel de fotos de esa casa.

**Agregar o cambiar fotos**
1. Guardar la foto grande en `img/andyna-1/nombre.jpg` (unos 1080 px de ancho).
2. Guardar una copia chica en `img/thumbs/andyna-1-nombre.jpg` (unos 480 px).
3. Sumarla a la lista `fotos` de esa casa en `js/config.js`, en el orden en que debe aparecer.

**Cambiar teléfono, email o redes**
Todo está en `contacto` dentro de `js/config.js`.

**Cambiar la foto de la sección Caviahue**
Reemplazar `img/caviahue/vista-aerea.jpg` y `img/caviahue/cascada.jpg` por fotos nuevas con el mismo nombre
(verticales, idealmente de 1080 × 1440 px).

## Publicación

Se puede subir la carpeta completa tal cual a cualquier hosting estático
(Netlify, Vercel, GitHub Pages, Hostinger, etc.). No requiere servidor.
