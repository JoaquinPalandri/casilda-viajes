import { TarjetaViaje } from "./TarjetaViaje.jsx";

const resumenViajes =
  "Toca una publicacion para verla completa o escribinos por WhatsApp para reservar tu lugar.";

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
              key={viaje.destino}
              viaje={viaje}
              whatsapp={whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
