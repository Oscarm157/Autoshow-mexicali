// Copy comercial directo. Sin frases conceptuales.
// Lo que no se sepa con dato real va con [PLACEHOLDER] visible.

export const event = {
  brand: "Auto Show Baja California",
  edition: "Primera edición · Mexicali",
  year: "2026",
  date: "14 de noviembre, 2026",
  dateShort: "14 · NOV · 26",
  dateLong: "14 de noviembre",
  city: "Mexicali, Baja California",
  venue: "Museo Sol del Niño",
  access: "Acceso gratuito",
  audience: "Para toda la familia",
  ctaPrimary: "Regístrate gratis",
  ctaSecondary: "Ver más",
};

export const stickyBar = {
  parts: [
    { icon: "★", text: "Acceso gratuito" },
    { icon: "✿", text: "Para toda la familia" },
    { icon: "◎", text: "Museo del Niño" },
    { icon: "→", text: "Regístrate" },
  ],
};

export const hero = {
  badge: "Mexicali · 14 de noviembre, 2026",
  headline: "El Auto Show familiar de la Baja.",
  subhead:
    "Pasa el día con la familia. Los modelos más nuevos, las mejores marcas automotrices de Mexicali y diversión para los niños. La entrada no se paga.",
  meta: [
    { label: "Fecha", value: "14 de noviembre, 2026" },
    { label: "Sede", value: "Museo Sol del Niño · Mexicali" },
    { label: "Acceso", value: "Gratuito · Familiar" },
  ],
};

export const about = {
  eyebrow: "Sobre el evento",
  title: "Un día con autos y diversión, en un mismo lugar.",
  body: [
    "Las mejores marcas automotrices de Mexicali se juntan en el estacionamiento del Museo Sol del Niño con los modelos más nuevos. Puedes venir a ver los mejores autos, comparar y, si quieres, agendar prueba de manejo.",
    "Mientras tanto, los niños se divierten en las exhibiciones del Museo Sol del Niño. La entrada al evento incluye todo. Sin costo.",
  ],
  pills: [
    "Para la familia",
    "Modelos nuevos",
    "Entrada gratuita",
    "Museo del Niño",
    "Pruebas de manejo",
    "Mexicali",
  ],
};

export const concept = {
  eyebrow: "Cómo funciona",
  title: "Aquí nadie se aburre: autos para ti, diversión para ellos.",
  intro:
    "Todo el evento es en el área del Museo Sol del Niño. Una visita, dos planes.",
  zones: [
    {
      tag: "Zona 01",
      label: "Afuera",
      title: "Auto Show",
      lead: "Estacionamiento del museo",
      body: "Las agencias y distribuidores de las mejores marcas automotrices de Mexicali con los modelos más nuevos en el estacionamiento del museo. Pruebas de manejo, recorridos guiados, food trucks y música.",
      icon: "directions_car",
      photo: "/hero/concept-autoshow.webp",
    },
    {
      tag: "Zona 02",
      label: "Adentro",
      title: "Museo Sol del Niño",
      lead: "Acceso incluido",
      body: "Acceso incluido al museo para que los niños disfruten las exhibiciones interactivas mientras los papás recorren las marcas afuera.",
      icon: "child_care",
      photo: "/hero/concept-museo.webp",
    },
  ],
};

export const experiences = {
  eyebrow: "Qué encontrarás",
  title: "Autos para todos los gustos, en un mismo lugar.",
  body: "Las marcas traen lo más nuevo de cada categoría. Familiares, premium, off-road y más, para que cada quien encuentre el suyo.",
  items: [
    {
      tag: "01",
      icon: "directions_car",
      title: "Familiares",
      lead: "Autos del día a día",
      body: "SUV, pickup y sedán de las marcas que se ven en la calle. Lo más nuevo para conocer, comparar y agendar prueba.",
    },
    {
      tag: "02",
      icon: "diamond",
      title: "Premium",
      lead: "Autos de lujo",
      body: "Sedán de lujo, deportivos e importados. Detallados y posando para verse de cerca.",
    },
    {
      tag: "03",
      icon: "terrain",
      title: "Off-road",
      lead: "4x4 y aventura",
      body: "Polaris, RZR y todoterreno. Los autos que se van al desierto y a las dunas.",
    },
  ],
};

export const activities = {
  eyebrow: "Actividades del evento",
  title: "Para disfrutar el día completo.",
  body: "Programa preliminar. El detalle final se confirma con los expositores.",
  items: [
    { icon: "directions_car", text: "Recorridos guiados por marca" },
    { icon: "child_care", text: "Acceso al Museo del Niño" },
    { icon: "restaurant", text: "Food trucks y café" },
    { icon: "music_note", text: "Música en vivo" },
    { icon: "videocam", text: "Foto y video con los autos" },
    { icon: "local_activity", text: "Dinámicas y rifas con marcas" },
  ],
  status: "Programa preliminar",
};

export const lineup = {
  eyebrow: "Marcas confirmadas",
  title: "Las marcas más importantes en un solo evento.",
  intro:
    "12 marcas confirmadas para la primera edición. La lista crece conforme se cierran nuevos acuerdos.",
  status: "Más marcas por anunciar",
  closer: "Y muchas más marcas invitadas por anunciar.",
};

export const brands = [
  { name: "Toyota", slug: "toyota", tier: "hero" },
  { name: "Ford", slug: "ford", tier: "hero" },
  { name: "Mazda", slug: "mazda", tier: "hero" },
  { name: "Polaris", slug: "polaris", tier: "hero" },
  { name: "Jeep", slug: "jeep", tier: "regular" },
  { name: "Mercedes-Benz", slug: "mercedes-benz", tier: "regular" },
  { name: "Ram", slug: "ram", tier: "regular" },
  { name: "Dodge", slug: "dodge", tier: "regular" },
  { name: "Fiat", slug: "fiat", tier: "regular" },
  { name: "Peugeot", slug: "peugeot", tier: "regular" },
  { name: "Mitsubishi", slug: "mitsubishi", tier: "regular" },
  { name: "Autostar", slug: "autostar", tier: "regular" },
] as const;

export const route = {
  eyebrow: "Próximas ediciones",
  title: "Empezamos en Mexicali. La ruta sigue por Baja.",
  intro:
    "De Mexicali al resto de la península. El Auto Show no se queda en una sola ciudad.",
  list: [
    {
      tag: "1ª edición",
      city: "Mexicali",
      date: "14 · NOV · 26",
      status: "Confirmada",
      note: "Museo Sol del Niño. Acceso gratuito.",
      active: true,
    },
    {
      tag: "2ª edición",
      city: "Tijuana",
      date: "2027",
      status: "En planeación",
      note: "Fecha y venue por anunciar.",
      active: false,
    },
    {
      tag: "3ª edición",
      city: "Ensenada",
      date: "2028",
      status: "Por confirmar",
      note: "Sujeta a calendario regional.",
      active: false,
    },
  ],
};

export const sponsors = {
  eyebrow: "Patrocinadores",
  title: "Hacen posible este evento.",
  body: "Bloque reservado para los patrocinadores oficiales. Los logos se publican conforme se cierran los acuerdos.",
  status: "Por anunciar",
  tiers: [
    { name: "Presenta", slots: 1 },
    { name: "Patrocinadores principales", slots: 4 },
    { name: "Aliados", slots: 8 },
  ],
  venuePartner: {
    label: "Sede oficial",
    name: "Museo Sol del Niño",
    note: "Mexicali, Baja California",
    logo: "/sponsors/museo-sol-del-nino.png",
  },
};

export const gallery = {
  eyebrow: "Postales de Baja",
  title: "La Baja como escenario.",
  caption: "Imágenes referenciales. La edición Mexicali es el 14 de noviembre.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que necesitas saber.",
  items: [
    {
      q: "¿Tiene costo el acceso?",
      a: "No. La entrada es gratuita. Solo necesitas registrarte aquí para asegurar tu lugar y recibir los avisos.",
    },
    {
      q: "¿Cuándo y dónde es?",
      a: "Sábado 14 de noviembre de 2026, en el Museo Sol del Niño, Mexicali, Baja California.",
    },
    {
      q: "¿Es apto para niños?",
      a: "Sí. Está pensado para toda la familia. La sede es el Museo Sol del Niño y el acceso a las áreas del museo está incluido durante el evento.",
    },
    {
      q: "¿Tengo que comprar boleto del museo aparte?",
      a: "Si te registras aquí, el acceso al museo durante el evento queda incluido sin costo. Si no te registras, aplica la tarifa normal del museo.",
    },
    {
      q: "¿Puedo probar los autos?",
      a: "Sí, con las marcas que tengan zona de prueba de manejo. Cada marca define sus dinámicas durante el evento.",
    },
    {
      q: "¿Habrá ediciones en otras ciudades?",
      a: "Sí. La idea es que el evento se mueva a Tijuana y posteriormente a Ensenada. Las fechas se anuncian al cierre de cada edición.",
    },
  ],
};

export const registro = {
  eyebrow: "Registro",
  badge: "Acceso gratuito",
  title: "Regístrate para acceso gratuito.",
  body: "Llena tus datos y listo. Te mandamos la confirmación al correo.",
  benefits: [
    { icon: "★", text: "Acceso gratuito al evento" },
    { icon: "◎", text: "Entrada al Museo Sol del Niño" },
    { icon: "✿", text: "Actividades para toda la familia" },
    { icon: "✦", text: "Avisos del programa y dinámicas" },
  ],
  fields: {
    name: "Nombre completo",
    email: "Correo",
    phone: "Teléfono · WhatsApp",
    interest: "Lo que más te interesa ver",
  },
  interestOptions: [
    "Autos familiares",
    "Autos premium",
    "Off-road y 4x4",
    "Todas las áreas",
  ],
  submit: "Obtener pase",
  successTitle: "Te esperamos.",
  successBody:
    "Listo. Te llega un correo con la confirmación. Más cerca de la fecha te avisamos del programa y los horarios.",
};

export const footer = {
  agency: "Bravo Publicidad",
  agencyLine: "Identidad y producción · 2026",
  cityLine: "Mexicali, Baja California",
  hashtag: "#AutoShowBaja2026",
  closing: "Mexicali, 14 de noviembre. Te esperamos.",
};

export const nav = {
  links: [
    { label: "Sobre el evento", href: "#evento" },
    { label: "Cómo funciona", href: "#concepto" },
    { label: "Marcas", href: "#lineup" },
    { label: "Actividades", href: "#actividades" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Regístrate gratis",
};

export const floatingCta = {
  primary: "Regístrate gratis",
  secondary: "Acceso libre · 14 NOV",
};
