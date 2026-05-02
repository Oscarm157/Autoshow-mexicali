// Copy ES literal — pivote roadtrip / familiar / multi-ciudad.
// Donde no hay datos reales, [PLACEHOLDER] visible para que se llene.
// Nada se inventa: marcas extras, patrocinadores, actividades.

export const event = {
  brand: "Autoshow Baja",
  edition: "Primera parada · Mexicali",
  year: "2026",
  date: "10 de noviembre, 2026",
  dateShort: "10 · NOV · 26",
  dateLong: "Martes 10 de noviembre",
  city: "Mexicali, Baja California",
  venue: "Museo Sol del Niño",
  access: "Acceso gratuito",
  audience: "Para toda la familia",
  ctaPrimary: "Regístrate gratis",
  ctaSecondary: "Conoce la ruta",
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
  badge: "Ruta Baja · Edición 2026",
  display: ["La ruta", "automotriz", "de la Baja"],
  subhead:
    "Un recorrido entre autos, familia y cultura Baja. Arrancamos en Mexicali el 10 de noviembre y desde ahí seguimos por toda la península.",
  signage: {
    label: "Primera parada",
    city: "Mexicali",
  },
  meta: [
    { label: "Arranca", value: "10 · NOV · 26" },
    { label: "Sede", value: "Museo Sol del Niño" },
    { label: "Acceso", value: "Gratuito" },
    { label: "Audiencia", value: "Familiar" },
  ],
};

export const about = {
  eyebrow: "El plan",
  title: "Una ruta. La Baja entera. Empieza en Mexicali.",
  body: [
    "No es un evento más. Es un recorrido entre autos, familia y cultura del norte. Arrancamos en Mexicali, dentro del Museo Sol del Niño, y desde ahí la ruta se mueve cada año a otra ciudad de Baja California.",
    "Vienes a manejar, a ver, a probar y a pasar el día con la familia. Hay autos para curiosear, espacios para los niños y rincones del museo abiertos para todos. La entrada es gratis.",
  ],
  pills: [
    "Roadtrip",
    "Familia",
    "Cultura Baja",
    "Autos",
    "Museo del Niño",
    "Carretera",
    "Aventura",
    "Comunidad",
  ],
};

export const route = {
  eyebrow: "La ruta",
  title: "Mexicali abre el mapa.",
  intro:
    "Cada año la ruta se mueve a otra ciudad de Baja California. Mexicali es la primera parada. Lo que sigue se anuncia al cierre de esta edición.",
  list: [
    {
      tag: "Parada 01",
      city: "Mexicali",
      date: "10 · NOV · 26",
      status: "Confirmada",
      note: "Museo Sol del Niño. Acceso gratuito.",
      active: true,
    },
    {
      tag: "Parada 02",
      city: "Tijuana",
      date: "2027",
      status: "En planeación",
      note: "Fecha y venue por anunciar.",
      active: false,
    },
    {
      tag: "Parada 03",
      city: "Ensenada",
      date: "2028",
      status: "Por confirmar",
      note: "Sujeta a calendario regional.",
      active: false,
    },
  ],
  outro: "Y lo que la ruta vaya pidiendo. La Baja es larga.",
};

export const experiences = {
  eyebrow: "Qué vas a encontrar",
  title: "Una pasada relajada por todos los autos del momento.",
  body:
    "Tres ambientes dentro del mismo recorrido. Vas a tu paso, te detienes en lo que te llama, te subes a lo que se pueda subir.",
  items: [
    {
      tag: "01",
      icon: "directions_car",
      title: "Para la familia",
      lead: "Autos del día a día",
      body: "SUV, pickup, sedán, los modelos que se ven en la calle. Súbete, abre puertas, prueba la cajuela, mete a los niños. Sin presión de venta.",
    },
    {
      tag: "02",
      icon: "diamond",
      title: "Para los que ven detalle",
      lead: "Autos premium",
      body: "Sedán, deportivos, importados. Detallados y posando. La zona donde te paras a ver bien.",
    },
    {
      tag: "03",
      icon: "terrain",
      title: "Para los aventureros",
      lead: "4x4, off-road y RZR",
      body: "Lo que se va al cerro, al desierto, al arroyo. Polaris y compañía. Ideal para los niños fanáticos del polvo.",
    },
  ],
};

export const activities = {
  eyebrow: "Actividades",
  title: "Cosas que pasan durante el día.",
  body: "El programa final se confirma con los expositores. Mientras tanto, esta es la lista en construcción.",
  items: [
    { icon: "directions_car", text: "Recorridos guiados por marca" },
    { icon: "child_care", text: "Zona kids dentro del museo" },
    { icon: "restaurant", text: "Food trucks y café" },
    { icon: "music_note", text: "Música en vivo y DJ sets" },
    { icon: "videocam", text: "Foto y video con los autos" },
    { icon: "local_activity", text: "Rifas y dinámicas con marcas" },
  ],
  status: "Programa preliminar",
};

export const lineup = {
  eyebrow: "Las marcas que mueven Baja",
  title: "Exhibición multimarca.",
  intro:
    "12 marcas confirmadas. Las que se ven todos los días en Baja, las que cruzan la frontera, las que se llevan el desierto. Y muchas más por anunciar.",
  status: "Más marcas por anunciar",
  closer: "Y más marcas invitadas conforme se cierran los acuerdos.",
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
  title: "Quienes hacen posible la ruta.",
  body: "Bloque reservado para los patrocinadores oficiales. Los logos se publican conforme se cierran los acuerdos.",
  status: "Por anunciar",
  tiers: [
    { name: "Presenta", slots: 1 },
    { name: "Patrocinadores principales", slots: 4 },
    { name: "Aliados de la ruta", slots: 8 },
  ],
  venuePartner: {
    label: "Sede oficial · Primera parada",
    name: "Museo Sol del Niño",
    note: "Mexicali, Baja California",
    web: "soldelnino.org",
  },
};

export const gallery = {
  eyebrow: "Postales de la ruta",
  title: "La Baja como escenario.",
  caption: "Imágenes referenciales. La ruta real arranca el 10 de noviembre.",
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
      q: "¿Cuándo y dónde es la primera parada?",
      a: "Martes 10 de noviembre de 2026, en el Museo Sol del Niño, Mexicali, Baja California.",
    },
    {
      q: "¿Es apto para niños?",
      a: "Sí. Está pensado para familias. La sede es el Museo Sol del Niño, así que las actividades del museo están incluidas.",
    },
    {
      q: "¿Tengo que comprar boleto del museo aparte?",
      a: "No. El acceso al Autoshow incluye la zona del museo durante el evento.",
    },
    {
      q: "¿Hay food trucks o servicio de alimentos?",
      a: "[POR CONFIRMAR]. La oferta gastronómica se publica con el programa final.",
    },
    {
      q: "¿Voy a poder probar los autos?",
      a: "Sí, con las marcas que tengan zona de prueba. Cada marca define sus dinámicas el día del evento.",
    },
    {
      q: "¿Habrá ediciones en otras ciudades de Baja?",
      a: "Sí. La ruta se mueve cada año. Después de Mexicali sigue Tijuana y, posteriormente, Ensenada. Las fechas se anuncian al cierre de cada edición.",
    },
    {
      q: "¿Cómo participo como expositor o patrocinador?",
      a: "Escribe directo a Bravo Publicidad. El cierre comercial se define caso por caso.",
    },
  ],
};

export const registro = {
  eyebrow: "Registro",
  badge: "Acceso gratuito",
  title: "Súmate a la ruta.",
  body: "Regístrate para asegurar tu acceso al Autoshow Baja, primera parada Mexicali. Incluye entrada al Museo Sol del Niño durante el evento. Cero costo.",
  benefits: [
    { icon: "★", text: "Acceso gratuito al evento" },
    { icon: "◎", text: "Entrada al Museo Sol del Niño" },
    { icon: "✿", text: "Actividades para toda la familia" },
    { icon: "✦", text: "Aviso de aperturas y dinámicas" },
  ],
  fields: {
    name: "Nombre completo",
    email: "Correo",
    phone: "Teléfono · WhatsApp",
    party: "¿Cuántos los acompañan?",
    interest: "Lo que más te late ver",
  },
  partyOptions: ["Solo yo", "1 acompañante", "2 a 3", "4 o más"],
  interestOptions: [
    "Autos del día a día",
    "Autos premium",
    "4x4 y off-road",
    "Todo el recorrido",
  ],
  submit: "Quiero mi acceso",
  successTitle: "Quedaste en la lista.",
  successBody:
    "Te llega un correo con la confirmación. Más cerca de la fecha te avisamos detalles del programa, dinámicas y horarios.",
};

export const footer = {
  agency: "Bravo Publicidad",
  agencyLine: "Identidad y producción · 2026",
  cityLine: "Mexicali, Baja California",
  hashtag: "#RutaBaja",
  links: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Contacto", href: "#" },
  ],
};

export const nav = {
  links: [
    { label: "El plan", href: "#evento" },
    { label: "La ruta", href: "#ruta" },
    { label: "Qué hay", href: "#experiencias" },
    { label: "Marcas", href: "#lineup" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Regístrate gratis",
};

export const floatingCta = {
  primary: "Regístrate gratis",
  secondary: "Acceso libre · 10 NOV",
};
