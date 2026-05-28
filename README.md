# AgroGroup Turismo

Página vidriera mobile first hecha con React + Vite para publicar viajes,
mostrar flyers comerciales y derivar consultas a WhatsApp.

## Objetivo

El proyecto está pensado para empezar simple y poder escalar:

- Hoy: los viajes se cargan a mano editando datos e imágenes.
- Después: el mismo listado puede venir de un backoffice, CMS o base de datos.
- La marca puede cambiarse para reutilizar la base con otra empresa.

## Estructura

```txt
src/
  App.jsx
  main.jsx
  componentes/
    Contacto.jsx
    Encabezado.jsx
    Experiencia.jsx
    Hero.jsx
    TarjetaViaje.jsx
    Viajes.jsx
  configuracion/
    marca.js
  datos/
    viajes.js
  estilos/
    base.css
    componentes.css
    layout.css
    reset.css
    responsive.css
    tokens.css
  utilidades/
    whatsapp.js
public/
  marca/
  viajes/
index.html
package.json
vite.config.js
.gitignore
```

## Responsabilidades

- `src/main.jsx`: punto de entrada de React. Monta la app en `#root`.
- `src/App.jsx`: compone las secciones principales de la página.
- `src/componentes/`: elementos visuales reutilizables de la interfaz.
- `src/configuracion/marca.js`: datos de marca, WhatsApp, hero y textos globales.
- `src/datos/viajes.js`: listado editable de viajes publicados.
- `src/utilidades/whatsapp.js`: armado centralizado de enlaces y mensajes de WhatsApp.
- `src/estilos/base.css`: archivo principal que importa las capas CSS.
- `public/viajes/`: imágenes/flyers que se publican en las tarjetas.

## Estilos

Los estilos están separados por capas para que escalen sin volverse un archivo
gigante:

- `tokens.css`: colores, radios, sombras, anchos y variables globales.
- `reset.css`: normalización básica de HTML, body, links, imágenes y tipografía.
- `layout.css`: contenedores, secciones y grillas generales.
- `componentes.css`: clases de componentes visuales como header, botones, hero y tarjetas.
- `responsive.css`: media queries mobile first para tablet y desktop.
- `base.css`: importa todas las capas en orden.

El enfoque es mobile first: primero se definen estilos para Android/iOS web y
luego se agregan mejoras con `min-width`.

### Theme Visual

La identidad visual usa una base moderna, premium y turística:

- Blanco y fondos claros para limpieza.
- Azul oscuro como contraste confiable.
- Dorado solo como acento en botones principales, badges, foco y detalles.
- Negro/gris para texto y jerarquía.
- Inter como tipografía principal.
- Montserrat como tipografía opcional para títulos.

Escala tipográfica definida en `src/estilos/tokens.css`:

- `--font-size-hero`: 34px
- `--font-size-title`: 26px
- `--font-size-section-title`: 22px
- `--font-size-card-title`: 18px
- `--font-size-body`: 16px
- `--font-size-caption`: 12px

Pesos:

- Títulos: 700
- Subtítulos/cards: 600
- Botones: 600
- Texto común: 400
- Labels: 500

Componentes:

- Cards con `--radius-card` de 18px, fondo blanco, borde `#E7E2D8`, padding 16 y sombra sutil.
- Botones principales de 48px de alto, radio 14, font size 16 y peso 600.
- Espaciados globales definidos con tokens `--space-*`.

## Dónde Editar

- Cambiar marca, número de WhatsApp y textos principales:
  `src/configuracion/marca.js`
- Cambiar el número real de WhatsApp en tu máquina:
  `.env`
- Agregar, quitar o editar viajes:
  `src/datos/viajes.js`
- Subir flyers de viajes:
  `public/viajes/`
- Cambiar logo:
  `public/marca/` y la propiedad `logo` en `src/configuracion/marca.js`
- Cambiar colores, espaciado y apariencia:
  `src/estilos/tokens.css` y `src/estilos/componentes.css`
- Cambiar SEO básico:
  `index.html`

## Agregar Un Viaje

1. Copiar el flyer dentro de `public/viajes/`.
2. Agregar un objeto en `src/datos/viajes.js`.
3. Usar una ruta pública empezando con `/viajes/`.

Ejemplo:

```js
{
  destino: "Nuevo destino",
  imagen: "/viajes/nuevo-destino.jpg",
  destacado: "Ver flyer completo",
  resumen: "Descripción interna o futura descripción visible.",
  detalles: {
    fecha: "15 Jul 2026",
    duracion: "3 noches",
    precio: "$ 000.000",
    origen: "Rosario",
    hotel: "Hotel ejemplo",
    servicios: ["Bus mix", "Asistencia incluida"],
  },
}
```

La información comercial detallada vive en el flyer. La web solo muestra la
publicación, permite abrirla completa y deriva la consulta a WhatsApp.

El modelo igualmente conserva `resumen` y `detalles` para escalar a backoffice:
cuando el cliente cargue fecha, precio, hotel o servicios desde un panel, la UI
puede empezar a mostrar esos campos sin cambiar la estructura base.

## Número De WhatsApp

El número real se lee desde `.env`:

```txt
VITE_WHATSAPP_NUMERO=5490000000000
```

Ese archivo está ignorado por git para no subir datos personales o de entorno.
El repo incluye `.env.example` como plantilla.

Importante: en una web frontend el número de WhatsApp no es secreto si se usa
en un botón público. Cualquier visitante puede verlo en el enlace final. Para
producción conviene usar un número comercial de la agencia, no un número
personal.

## Preparado Para Backoffice

Cuando haya backoffice, `src/datos/viajes.js` puede reemplazarse por datos de:

- una API propia,
- un CMS,
- Supabase/Firebase,
- Airtable/Google Sheets,
- o cualquier panel administrativo.

La UI no debería cambiar: `Viajes.jsx` solo necesita recibir un array con la
misma forma de datos.

## Dónde No Editar

- `dist/`: lo genera Vite con `npm run build`.
- `node_modules/`: dependencias instaladas por `npm install`.
- `.env`: variables locales como el número real de WhatsApp.

Si hay que cambiar textos, viajes, fotos o estilos, hacerlo siempre en `src/`,
`public/` o `index.html`, nunca en `dist/`.

`dist/` y `node_modules/` están ignorados en `.gitignore` porque no son código
fuente.

## Ejecutar Localmente

Instalar dependencias:

```bash
npm install
```

Levantar el servidor:

```bash
npm run dev
```

Abrir en Chrome:

```txt
http://127.0.0.1:5173/
```

## Generar Versión Publicable

```bash
npm run build
```

Esto crea la carpeta `dist/`, que es la versión final para subir a hosting.

## Reutilizar Para Otra Empresa

1. Cambiar `src/configuracion/marca.js`.
2. Reemplazar `src/datos/viajes.js`.
3. Reemplazar imágenes dentro de `public/viajes/`.
4. Ajustar variables de marca en `src/estilos/tokens.css`.
5. Cambiar título y descripción SEO en `index.html`.
