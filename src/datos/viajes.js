import { crearRutaPublica } from "../utilidades/rutas.js";

export const viajes = [
  {
    destino: "Mendoza, San Rafael y Las Leñas",
    imagen: crearRutaPublica("/viajes/mendoza-san-rafael-las-lenas.jpg"),
    destacado: "Ver flyer completo",
    resumen:
      "Salida desde Rosario con bus mix, asistencia incluida, coordinación permanente y traslado a Las Leñas.",
    detalles: {
      fecha: "25 Jun 2026",
      duracion: "4 noches",
      precio: "$ 444.990",
      origen: "Rosario",
      servicios: [
        "Bus mix",
        "Asistencia incluida",
        "Coordinación permanente",
        "Traslado a Las Leñas incluido",
      ],
    },
  },
  {
    destino: "Puerto Madryn",
    imagen: crearRutaPublica("/viajes/puerto-madryn.jpg"),
    destacado: "Ver flyer completo",
    resumen:
      "Salida desde Rosario con hotel Gran Madryn, desayuno, excursiones, asistencia incluida y coordinación permanente.",
    detalles: {
      fecha: "11 Jun 2026",
      duracion: "3 noches",
      precio: "$ 489.990",
      origen: "Rosario",
      hotel: "Hotel Gran Madryn",
      servicios: [
        "Bus mix",
        "Asistencia incluida",
        "Coordinación permanente",
        "Régimen desayuno",
        "Excursiones",
      ],
    },
  },
  {
    destino: "Caminos del Norte",
    imagen: crearRutaPublica("/viajes/caminos-del-norte.jpg"),
    destacado: "Ver flyer completo",
    resumen:
      "Salida desde Rosario con hotel Carlos I, III o IV, régimen media pensión, excursiones y asistencia incluida.",
    detalles: {
      fecha: "11 Jun 2026",
      duracion: "3 noches",
      precio: "$ 455.500",
      origen: "Rosario",
      hotel: "Hotel Carlos I, III o IV",
      servicios: [
        "Bus mix",
        "Asistencia incluida",
        "Coordinación permanente",
        "Régimen media pensión",
        "Excursiones",
      ],
    },
  },
];
