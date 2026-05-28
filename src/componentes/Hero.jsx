export function Hero({ marca, enlaceGeneral }) {
  const estiloHero = {
    "--imagen-hero": `linear-gradient(180deg, rgba(12, 32, 36, 0.84), rgba(12, 32, 36, 0.34)), url("${marca.hero.imagen}")`,
  };

  return (
    <section className="hero" id="inicio" style={estiloHero}>
      <div className="hero__contenido">
        <p className="etiqueta">{marca.rubro}</p>
        <h1>{marca.hero.titulo}</h1>
        <p>{marca.hero.descripcion}</p>
        <div className="hero__acciones">
          <a
            className="boton boton--principal"
            href={enlaceGeneral}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
          </a>
          <a className="boton boton--secundario" href="#viajes">
            Ver viajes
          </a>
        </div>
      </div>
    </section>
  );
}
