const enlacesNavegacion = [
  { href: "#viajes", texto: "Viajes" },
  { href: "#experiencia", texto: "Experiencia" },
  { href: "#contacto", texto: "Contacto" },
];

export function Encabezado({ marca }) {
  return (
    <header className="encabezado">
      <a className="marca" href="#inicio" aria-label="Ir al inicio">
        <span className="marca__isotipo">{marca.iniciales}</span>
        <span>
          <strong>{marca.nombre}</strong>
          <small>{marca.eslogan}</small>
        </span>
      </a>

      <nav className="navegacion" aria-label="Navegacion principal">
        {enlacesNavegacion.map((enlace) => (
          <a href={enlace.href} key={enlace.href}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}
