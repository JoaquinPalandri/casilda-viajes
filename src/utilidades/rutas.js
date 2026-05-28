export function crearRutaPublica(ruta) {
  return `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, "")}`;
}
