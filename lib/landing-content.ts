// Copy directo. Sin frases conceptuales que no comuniquen.
// Lo que no se sepa con dato real va con [PLACEHOLDER] visible.

export const event = {
  brand: "Autoshow Baja",
  edition: "Primera edición · Mexicali",
  year: "2026",
  date: "10 de noviembre, 2026",
  dateShort: "10 · NOV · 26",
  dateLong: "10 de noviembre",
  city: "Mexicali, Baja California",
  venue: "Museo Sol del Niño",
  access: "Acceso gratuito",
  audience: "Para toda la familia",
  ctaPrimary: "Regístrate gratis",
  ctaSecondary: "Ver actividades",
};

export const stickyBar = {
  parts: [
    { icon: "★", text: "Acceso gratuito" },
    { icon: "✿", text: "Para toda la familia" },
    { icon: "◎", text: "Museo Sol del Niño incluido" },
    { icon: "→", text: "Regístrate" },
  ],
};

export const hero = {
  badge: "Primera edición · Mexicali 2026",
  headline: "El Auto Show familiar de Baja California.",
  subhead:
    "Autos, marcas, experiencias y actividades para toda la familia. Primera edición en Mexicali el 10 de noviembre, en el Museo Sol del Niño. Acceso gratuito.",
  meta: [
    { label: "Fecha", value: "10 de noviembre, 2026" },
    { label: "Sede", value: "Museo Sol del Niño · Mexicali" },
    { label: "Acceso", value: "Gratuito · Familiar" },
  ],
};

export const about = {
  eyebrow: "Sobre el evento",
  title: "Autos afuera, museo adentro. Todo en un mismo lugar.",
  body: [
    "El Autoshow Baja se monta en el estacionamiento del Museo Sol del Niño. Afuera vas a encontrar las carpas de las agencias y marcas de Mexicali con sus modelos 2026. Adentro, el museo está abierto para que los niños se diviertan.",
    "Es el plan completo de un día: ir a buscar tu próximo carro mientras los niños la pasan bien. Sin elegir entre las dos cosas.",
  ],
  pills: [
    "Para la familia",
    "Autos 2026",
    "Agencias de Mexicali",
    "Museo del Niño",
    "Acceso gratuito",
  ],
};

export const concept = {
  eyebrow: "Cómo funciona",
  title: "Dos zonas, un solo día.",
  intro:
    "El evento se vive en dos áreas conectadas. Pasas de una a la otra cuando quieras.",
  zones: [
    {
      tag: "Zona 01",
      label: "Afuera",
      title: "El Auto Show",
      lead: "Estacionamiento del museo",
      body: "Carpas de las agencias y marcas de Mexicali. Modelos 2026 para conocer, abrir, subir y agendar prueba de manejo. Recorridos guiados, food trucks y música.",
      icon: "directions_car",
      photo: "/hero/concept-autoshow.webp",
    },
    {
      tag: "Zona 02",
      label: "Adentro",
      title: "Museo Sol del Niño",
      lead: "Acceso incluido durante el evento",
      body: "Las exhibiciones interactivas del museo abiertas para los niños. Mientras los papás recorren las marcas afuera, ellos se divierten, aprenden y juegan adentro.",
      icon: "child_care",
      photo: "/hero/concept-museo.webp",
    },
  ],
  closer:
    "Vienes una vez, haces los dos planes. La entrada al evento incluye el acceso al museo durante el día.",
};

export const route = {
  eyebrow: "La ruta",
  title: "Mexicali abre, después la ruta sigue.",
  intro:
    "El concepto del Autoshow Baja se mueve cada año a otra ciudad. Mexicali es la primera parada. Las siguientes ediciones se anuncian al cierre de cada evento.",
  list: [
    {
      tag: "1ª edición",
      city: "Mexicali",
      date: "10 · NOV · 26",
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

export const experiences = {
  eyebrow: "Qué autos vas a ver",
  title: "Tres tipos de autos en la zona del Auto Show.",
  body: "Las marcas de Mexicali traen lo más nuevo del año. Tres categorías para que cada quien encuentre lo que busca.",
  items: [
    {
      tag: "01",
      icon: "directions_car",
      title: "Familiares",
      lead: "Autos del día a día",
      body: "SUV, pickup y sedán de las marcas que se ven en la calle. Modelos 2026 para conocer, abrir, subir y agendar prueba.",
    },
    {
      tag: "02",
      icon: "diamond",
      title: "Premium",
      lead: "Autos de lujo",
      body: "Sedán premium, deportivos e importados. Detallados y posando para verse de cerca.",
    },
    {
      tag: "03",
      icon: "terrain",
      title: "Off-road",
      lead: "4x4 y aventura",
      body: "Polaris y los todoterreno que se van al desierto. Para los que disfrutan la parte más Baja del evento.",
    },
  ],
};

export const activities = {
  eyebrow: "Actividades de esta edición",
  title: "Qué pasa durante el evento.",
  body: "Programa preliminar. El detalle final se confirma con los expositores.",
  items: [
    { icon: "directions_car", text: "Recorridos guiados por marca" },
    { icon: "child_care", text: "Acceso al Museo Sol del Niño" },
    { icon: "restaurant", text: "Food trucks y café" },
    { icon: "music_note", text: "Música en vivo" },
    { icon: "videocam", text: "Foto y video con los autos" },
    { icon: "local_activity", text: "Dinámicas y rifas con marcas" },
  ],
  status: "Programa preliminar",
};

export const lineup = {
  eyebrow: "Marcas confirmadas",
  title: "Las marcas de esta edición.",
  intro:
    "12 marcas confirmadas para la primera edición. La lista crece conforme se cierran nuevos acuerdos.",
  status: "Más marcas por anunciar",
  closer: "Y muchas más marcas invitadas conforme se confirman.",
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

export const sponsors = {
  eyebrow: "Patrocinadores",
  title: "Quienes hacen posible el evento.",
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
  title: "Donde sucede el evento.",
  caption: "Imágenes referenciales. La edición Mexicali es el 10 de noviembre.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que conviene saber.",
  items: [
    {
      q: "¿Tiene costo el acceso?",
      a: "No. La entrada es gratuita. Solo necesitas registrarte aquí para asegurar tu lugar y recibir los avisos.",
    },
    {
      q: "¿Cuándo y dónde es?",
      a: "Martes 10 de noviembre de 2026, en el Museo Sol del Niño, Mexicali, Baja California.",
    },
    {
      q: "¿Es apto para niños?",
      a: "Sí. Está pensado para familias. La sede es el Museo Sol del Niño, así que el acceso a las áreas del museo está incluido durante el evento.",
    },
    {
      q: "¿Tengo que comprar boleto del museo aparte?",
      a: "No. El acceso al Autoshow incluye la zona del museo durante el día del evento.",
    },
    {
      q: "¿Hay food trucks o servicio de alimentos?",
      a: "[POR CONFIRMAR]. La oferta gastronómica se publica con el programa final.",
    },
    {
      q: "¿Puedo probar los autos?",
      a: "Sí, con las marcas que tengan zona de prueba. Cada marca define sus dinámicas durante el evento.",
    },
    {
      q: "¿Habrá ediciones en otras ciudades?",
      a: "Sí. La idea es que el evento se mueva a Tijuana y posteriormente a Ensenada. Las fechas se anuncian al cierre de cada edición.",
    },
    {
      q: "¿Cómo participo como expositor o patrocinador?",
      a: "Escríbenos a Bravo Publicidad. El cierre comercial se define caso por caso.",
    },
  ],
};

export const registro = {
  eyebrow: "Registro",
  badge: "Acceso gratuito",
  title: "Asegura tu lugar.",
  body: "Regístrate para confirmar tu acceso al Autoshow Baja, primera edición Mexicali. Incluye entrada al Museo Sol del Niño durante el evento. Sin costo.",
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
    party: "¿Cuántos los acompañan?",
    interest: "Lo que más te interesa ver",
  },
  partyOptions: ["Solo yo", "1 acompañante", "2 a 3", "4 o más"],
  interestOptions: [
    "Autos familiares",
    "Autos premium",
    "Off-road y 4x4",
    "Todas las áreas",
  ],
  submit: "Quiero mi acceso",
  successTitle: "Quedaste registrado.",
  successBody:
    "Te llega un correo con la confirmación. Más cerca de la fecha te avisamos detalles del programa, dinámicas y horarios.",
};

export const footer = {
  agency: "Bravo Publicidad",
  agencyLine: "Identidad y producción · 2026",
  cityLine: "Mexicali, Baja California",
  hashtag: "#AutoshowBaja",
  closing: "El Auto Show familiar de Baja California",
  links: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Contacto", href: "#" },
  ],
};

export const nav = {
  links: [
    { label: "Sobre el evento", href: "#evento" },
    { label: "La ruta", href: "#ruta" },
    { label: "Qué encontrarás", href: "#experiencias" },
    { label: "Marcas", href: "#lineup" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Regístrate gratis",
};

export const floatingCta = {
  primary: "Regístrate gratis",
  secondary: "Acceso libre · 10 NOV",
};
