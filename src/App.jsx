import { Contacto } from "./componentes/Contacto.jsx";
import { Encabezado } from "./componentes/Encabezado.jsx";
import { Experiencia } from "./componentes/Experiencia.jsx";
import { Hero } from "./componentes/Hero.jsx";
import { Viajes } from "./componentes/Viajes.jsx";
import { marca } from "./configuracion/marca.js";
import { viajes } from "./datos/viajes.js";
import { crearEnlaceWhatsapp } from "./utilidades/whatsapp.js";

export function App() {
  const enlaceGeneral = crearEnlaceWhatsapp(marca.whatsapp, marca.mensajeGeneral);

  return (
    <>
      <Encabezado marca={marca} />
      <main>
        <Hero marca={marca} enlaceGeneral={enlaceGeneral} />
        <Experiencia confianza={marca.confianza} />
        <Viajes viajes={viajes} whatsapp={marca.whatsapp} />
        <Contacto marca={marca} enlaceGeneral={enlaceGeneral} />
      </main>
    </>
  );
}
