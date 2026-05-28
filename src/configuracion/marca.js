import { crearRutaPublica } from "../utilidades/rutas.js";

export const marca = {
  nombre: "AgroGroup Turismo",
  iniciales: "AG",
  logo: crearRutaPublica("/marca/logo-agrogroup-turismo.png"),
  eslogan: "Viajes que inspiran, recuerdos que perduran",
  rubro: "Agencia de viajes",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMERO || "5490000000000",
  mensajeGeneral:
    "Hola, quiero recibir información sobre los viajes disponibles.",
  hero: {
    titulo: "AgroGroup Turismo",
    descripcion:
      "Escapadas, playas y experiencias pensadas para viajar con confianza, atención cercana y propuestas listas para consultar por WhatsApp.",
    imagen:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  },
  confianza: {
    titulo: "Te acompañamos antes, durante y después del viaje.",
    beneficios: [
      "Propuestas claras y actualizadas",
      "Consulta directa por WhatsApp",
      "Atención cercana para cada viajero",
    ],
  },
  contacto: {
    texto:
      "Contanos qué destino tenés en mente, cuántas personas viajan y en qué fecha. Te respondemos por WhatsApp con opciones claras.",
  },
};
