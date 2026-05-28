import { TarjetaViaje } from "./TarjetaViaje.jsx";

const resumenViajes =
  "Publicaciones listas para vender. Cambiando el archivo de datos se actualizan imagen, fecha, precio y consulta por WhatsApp.";

export function Viajes({ viajes, whatsapp }) {
  return (
    <section className="seccion" id="viajes">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <div>
            <p className="etiqueta">Proximas salidas</p>
            <h2>Viajes destacados</h2>
          </div>
          <p>{resumenViajes}</p>
        </div>

        <div className="grilla-viajes">
          {viajes.map((viaje) => (
            <TarjetaViaje
              key={`${viaje.destino}-${viaje.fecha}`}
              viaje={viaje}
              whatsapp={whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
