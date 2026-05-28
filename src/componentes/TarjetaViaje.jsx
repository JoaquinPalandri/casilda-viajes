import { crearEnlaceWhatsapp, crearMensajeViaje } from "../utilidades/whatsapp.js";

function DatosViaje({ viaje }) {
  const datos = [
    { etiqueta: "Fecha", valor: viaje.fecha },
    { etiqueta: "Duracion", valor: viaje.duracion },
    { etiqueta: "Precio", valor: viaje.precio },
  ];

  return (
    <dl className="tarjeta-viaje__datos">
      {datos.map((dato) => (
        <div key={dato.etiqueta}>
          <dt>{dato.etiqueta}</dt>
          <dd>{dato.valor}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TarjetaViaje({ viaje, whatsapp }) {
  const enlaceConsulta = crearEnlaceWhatsapp(
    whatsapp,
    crearMensajeViaje(viaje),
  );

  return (
    <article className="tarjeta-viaje">
      <img
        className="tarjeta-viaje__flyer"
        src={viaje.imagen}
        alt={`Flyer promocional de ${viaje.destino}`}
        loading="lazy"
      />
      <div className="tarjeta-viaje__contenido">
        <div className="tarjeta-viaje__encabezado">
          <span>{viaje.destacado}</span>
          <strong>{viaje.destino}</strong>
        </div>
        <p>{viaje.resumen}</p>
        <DatosViaje viaje={viaje} />
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
