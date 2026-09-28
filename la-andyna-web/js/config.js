/**
 * La Andyna · Configuración del sitio
 * ------------------------------------------------------------
 * Este es el único archivo que hace falta tocar para el
 * mantenimiento diario: datos de contacto, fotos y videos.
 *
 *  - Fotos: van en img/andyna-1/ o img/andyna-2/ (tamaño grande)
 *           y en img/thumbs/ con el prefijo de la casa (miniatura).
 *           Se listan acá por nombre de archivo, sin extensión.
 *  - Videos: subir el archivo a videos/ y completar "video"
 *           con la ruta, por ejemplo "videos/andyna-1.mp4".
 *           "videoPortada" es la imagen que se ve antes de darle play
 *           (si se deja en null, se usa la primera foto de la casa).
 */
window.ANDYNA = {
  contacto: {
    whatsapp: "5492995773387",          // formato internacional, sin + ni espacios
    whatsappVisible: "299 577 3387",
    email: "laandyna@gmail.com",
    instagram: "laandyna.caviahue",
    facebook: "laandyna.Caviahue"
  },

  // {casa} se reemplaza por el nombre de la casa cuando el botón es de una casa puntual.
  mensajeWhatsapp: "Hola, quiero consultar disponibilidad en {casa}. Viajo el ___, somos ___ personas.",

  casas: {
    "andyna-1": {
      nombre: "La Andyna I",
      video: "videos/andyna-1.mp4",
      videoPortada: "img/andyna-1/video-portada.jpg",
      fotos: [
        { archivo: "exterior-invierno-1", alt: "Frente de La Andyna I con nieve" },
        { archivo: "exterior-invierno-2", alt: "La Andyna I después de una nevada" },
        { archivo: "exterior-verano-1", alt: "Frente de La Andyna I en otoño" },
        { archivo: "exterior-verano-2", alt: "La Andyna I y su jardín en verano" },
        { archivo: "living-2", alt: "Living integrado a la cocina" },
        { archivo: "living-tv", alt: "Living con Smart TV y salida al deck" },
        { archivo: "comedor-1", alt: "Comedor junto al ventanal" },
        { archivo: "comedor-cocina", alt: "Comedor y cocina" },
        { archivo: "cocina", alt: "Cocina equipada" },
        { archivo: "dormitorio-principal", alt: "Dormitorio principal con cama doble" },
        { archivo: "dormitorio-2", alt: "Segundo dormitorio con cama nido" },
        { archivo: "bano-1", alt: "Baño con ducha" }
      ]
    },

    "andyna-2": {
      nombre: "La Andyna II",
      video: "videos/andyna-2.mp4",
      videoPortada: "img/andyna-2/video-portada.jpg",
      fotos: [
        { archivo: "living-2", alt: "Living, hogar y escalera" },
        { archivo: "living-3", alt: "Sillones del living" },
        { archivo: "comedor-1", alt: "Comedor para seis personas" },
        { archivo: "comedor-2", alt: "Comedor con vista a la cocina" },
        { archivo: "cocina-1", alt: "Cocina equipada" },
        { archivo: "cocina-2", alt: "Cocina, vista lateral" },
        { archivo: "dormitorio-principal-1", alt: "Dormitorio principal con techo de madera" },
        { archivo: "dormitorio-principal-3", alt: "Dormitorio principal de noche" },
        { archivo: "dormitorio-2", alt: "Dormitorio con dos camas" },
        { archivo: "dormitorio-3", alt: "Dormitorio con dos camas y Smart TV" },
        { archivo: "bano-1", alt: "Baño con vanitory" },
        { archivo: "bano-2", alt: "Baño de planta alta" },
        { archivo: "bano-3", alt: "Segundo baño" }
      ]
    }
  }
};
