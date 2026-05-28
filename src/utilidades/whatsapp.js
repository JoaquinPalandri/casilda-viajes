export function crearEnlaceWhatsapp(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export function crearMensajeViaje(viaje) {
  return `Hola, quiero recibir mas informacion sobre ${viaje.destino}. Fecha: ${viaje.fecha}. Precio publicado: ${viaje.precio}.`;
}
