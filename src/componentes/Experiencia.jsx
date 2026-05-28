export function Experiencia({ confianza }) {
  return (
    <section className="seccion seccion--intro" id="experiencia">
      <div className="contenedor grilla-intro">
        <div>
          <p className="etiqueta">Por que elegirnos</p>
          <h2>{confianza.titulo}</h2>
        </div>
        <div className="beneficios">
          {confianza.beneficios.map((beneficio) => (
            <article className="beneficio" key={beneficio}>
              <span aria-hidden="true">+</span>
              <p>{beneficio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
