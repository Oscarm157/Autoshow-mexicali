// Copy ES literal de la landing pública.
// Donde no hay datos reales, [PLACEHOLDER] visible para que se llene.
// Nada se inventa: marcas, patrocinadores, costos, horarios.

export const event = {
  brand: "Autoshow Baja",
  edition: "Edición Mexicali",
  year: "2026",
  date: "10 de noviembre, 2026",
  dateShort: "10 · NOV · 26",
  city: "Mexicali, Baja California",
  venue: "Museo Sol del Niño",
  schedule: "[HORARIO POR CONFIRMAR]",
  cost: "[COSTO POR CONFIRMAR]",
  ctaPrimary: "Reservar lugar",
  ctaSecondary: "Conocer las paradas",
};

export const hero = {
  eyebrow: "Ruta 26 · Baja California",
  display: ["Autoshow", "Baja"],
  subhead: "Una ruta. Tres paradas. Un solo día en la Baja.",
  metaLabel: "Edición Mexicali",
};

export const about = {
  eyebrow: "Sobre el evento",
  title: "El primer Autoshow familiar de la Baja, organizado como una ruta.",
  body: [
    "Autoshow Baja es una exposición automotriz que se mueve entre ciudades de Baja California. La edición Mexicali abre el recorrido. Después siguen Tijuana y Ensenada. La identidad es del territorio, no de un solo venue.",
    "El visitante no escoge entre áreas: avanza por la ruta. Tres paradas dentro del evento, cada una con su propio carácter. Familiar, lujo y off-road comparten el mismo día.",
  ],
};

export const stops = {
  eyebrow: "Sistema de paradas",
  title: "Tres paradas. Una sola ruta.",
  description:
    "El recorrido empieza en lo accesible y termina en el desierto. Cada parada tiene su señalética y su propia experiencia.",
};

export const lineup = {
  eyebrow: "Lineup",
  title: "Marcas y expositores.",
  status: "Lineup en breve",
  body: "Las marcas confirmadas se publican conforme se cierran los acuerdos comerciales. Esta sección se llena directamente desde el equipo de Bravo Publicidad.",
  slots: 12,
};

export const sponsors = {
  eyebrow: "Patrocinadores",
  title: "Quienes hacen posible la ruta.",
  body: "Bloque reservado para los patrocinadores oficiales de la edición. Los logos se publican conforme se cierran los acuerdos.",
  status: "Por anunciar",
  tiers: [
    { name: "Presenta", slots: 1 },
    { name: "Patrocinadores principales", slots: 4 },
    { name: "Aliados de la ruta", slots: 8 },
  ],
  venuePartner: {
    label: "Sede oficial",
    name: "Museo Sol del Niño",
    note: "Mexicali, Baja California",
  },
};

export const editions = {
  eyebrow: "Calendario evergreen",
  title: "Mexicali primero. La Baja después.",
  body: "El nombre del evento es Autoshow Baja. Cada año cambia la ciudad sede. La edición Mexicali abre el formato; las siguientes ediciones rotan dentro del territorio.",
  list: [
    {
      tag: "Edición 2026",
      city: "Mexicali",
      status: "En curso",
      note: "Inscripciones abiertas.",
    },
    {
      tag: "Próxima edición",
      city: "Tijuana",
      status: "En planeación",
      note: "Fecha y venue por anunciar.",
    },
    {
      tag: "Edición futura",
      city: "Ensenada",
      status: "Por confirmar",
      note: "Sujeta a calendario regional.",
    },
  ],
};

export const gallery = {
  eyebrow: "Territorio",
  title: "La Baja como escenario.",
  caption: "Fotografía referencial de la ruta. No representa el evento final.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que conviene saber.",
  items: [
    {
      q: "¿Cuándo y dónde es la Edición Mexicali?",
      a: "10 de noviembre de 2026, en el Museo Sol del Niño, Mexicali, Baja California.",
    },
    {
      q: "¿Tiene costo el acceso?",
      a: "[COSTO POR CONFIRMAR]. La definición final se anuncia con la apertura formal de boletos.",
    },
    {
      q: "¿Es apto para niños?",
      a: "Sí. El evento está diseñado para familias. La parada KM 01 (Paso Familiar) es la zona principal de actividades para acompañantes.",
    },
    {
      q: "¿Hay food trucks o servicio de alimentos?",
      a: "[POR CONFIRMAR]. La oferta gastronómica se publica junto con el lineup.",
    },
    {
      q: "¿Cómo participo como expositor o patrocinador?",
      a: "Escribir directo a Bravo Publicidad. El cierre comercial se define caso por caso.",
    },
    {
      q: "¿Habrá ediciones en Tijuana o Ensenada?",
      a: "Sí. Después de Mexicali, la ruta continúa en Tijuana y posteriormente en Ensenada. Las fechas se anuncian al cierre de cada edición.",
    },
  ],
};

export const registro = {
  eyebrow: "Registro",
  title: "Reserva tu lugar.",
  body: "Llena el formulario para recibir la confirmación de fecha, venue y apertura de boletos. El registro no compromete asistencia.",
  fields: {
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (WhatsApp)",
    party: "¿Cuántos los acompañan?",
    interest: "Parada de mayor interés",
  },
  partyOptions: ["Solo yo", "1 acompañante", "2 a 3", "4 o más"],
  interestOptions: [
    "KM 01 · Paso Familiar",
    "KM 02 · Mirador VIP",
    "KM 03 · Desvío Off-Road",
    "Toda la ruta",
  ],
  submit: "Enviar registro",
  successTitle: "Registro recibido.",
  successBody:
    "Te avisamos por correo cuando se confirme fecha, venue y apertura de boletos. Mientras tanto, sigue la cuenta del evento para los avances.",
};

export const footer = {
  agency: "Bravo Publicidad",
  agencyLine: "Identidad y producción · 2026",
  cityLine: "Mexicali, Baja California",
  links: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Contacto", href: "#" },
  ],
};

export const nav = {
  links: [
    { label: "El evento", href: "#evento" },
    { label: "Paradas", href: "#paradas" },
    { label: "Ediciones", href: "#ediciones" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Registro",
};
