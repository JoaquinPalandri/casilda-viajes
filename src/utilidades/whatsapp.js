export function crearEnlaceWhatsapp(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export function crearMensajeViaje(viaje) {
  const partes = [`Hola, quiero recibir mas informacion sobre el viaje ${viaje.destino}.`];

  if (viaje.detalles?.fecha) {
    partes.push(`Fecha publicada: ${viaje.detalles.fecha}.`);
  }

  if (viaje.detalles?.precio) {
    partes.push(`Precio publicado: ${viaje.detalles.precio}.`);
  }

  return partes.join(" ");
}
