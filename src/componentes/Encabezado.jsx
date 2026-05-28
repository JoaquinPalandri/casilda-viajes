import { useState } from "react";

const enlacesNavegacion = [
  { href: "#viajes", texto: "Viajes" },
  { href: "#experiencia", texto: "Experiencia" },
  { href: "#contacto", texto: "Contacto" },
];

export function Encabezado({ marca }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function alternarMenu() {
    setMenuAbierto((abierto) => !abierto);
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className={`encabezado ${menuAbierto ? "encabezado--abierto" : ""}`}>
      <div className="encabezado__barra">
        <a className="marca" href="#inicio" aria-label="Ir al inicio" onClick={cerrarMenu}>
          <img
            className="marca__logo"
            src={marca.logo}
            alt={`Logo de ${marca.nombre}`}
            width="48"
            height="48"
          />
          <span>
            <strong>{marca.nombre}</strong>
            <small>{marca.eslogan}</small>
          </span>
        </a>

        <button
          className="menu-boton"
          type="button"
          aria-expanded={menuAbierto}
          aria-controls="navegacion-principal"
          aria-label={menuAbierto ? "Cerrar navegación" : "Abrir navegación"}
          onClick={alternarMenu}
        >
          <span className="menu-boton__linea" aria-hidden="true" />
          <span className="menu-boton__linea" aria-hidden="true" />
          <span className="menu-boton__linea" aria-hidden="true" />
        </button>
      </div>

      <nav
        className="navegacion"
        id="navegacion-principal"
        aria-label="Navegación principal"
      >
        {enlacesNavegacion.map((enlace) => (
          <a href={enlace.href} key={enlace.href} onClick={cerrarMenu}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}
