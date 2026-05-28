import { crearEnlaceWhatsapp, crearMensajeViaje } from "../utilidades/whatsapp.js";

export function TarjetaViaje({ viaje, whatsapp }) {
  const enlaceConsulta = crearEnlaceWhatsapp(
    whatsapp,
    crearMensajeViaje(viaje),
  );

  return (
    <article className="tarjeta-viaje">
      <a
        className="tarjeta-viaje__imagen"
        href={viaje.imagen}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir flyer completo de ${viaje.destino}`}
      >
        <img
          className="tarjeta-viaje__flyer"
          src={viaje.imagen}
          alt={`Flyer promocional de ${viaje.destino}`}
          loading="lazy"
        />
      </a>
      <div className="tarjeta-viaje__contenido">
        <div className="tarjeta-viaje__encabezado">
          <span>{viaje.destacado}</span>
          <strong className="tarjeta-viaje__titulo">{viaje.destino}</strong>
        </div>
        <a
          className="boton boton--tarjeta"
          href={enlaceConsulta}
          target="_blank"
          rel="noreferrer"
        >
          Pedir informacion
        </a>
      </div>
    </article>
  );
}
