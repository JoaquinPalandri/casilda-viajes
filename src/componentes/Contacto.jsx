export function Contacto({ marca, enlaceGeneral }) {
  return (
    <section className="seccion contacto" id="contacto">
      <div className="contenedor contacto__contenido">
        <div>
          <p className="etiqueta">Atención personalizada</p>
          <h2>Armemos tu próxima salida.</h2>
          <p>{marca.contacto.texto}</p>
        </div>
        <a
          className="boton boton--principal"
          href={enlaceGeneral}
          target="_blank"
          rel="noreferrer"
        >
          Escribir ahora
        </a>
      </div>
    </section>
  );
}
