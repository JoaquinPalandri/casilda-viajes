import { TarjetaViaje } from "./TarjetaViaje.jsx";

export function Viajes({ viajes, whatsapp }) {
  return (
    <section className="seccion" id="viajes">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <p className="etiqueta">Próximas salidas</p>
          <h2>Viajes destacados</h2>
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
