export const brand = {
  name: "Autoshow Mexicali",
  client: "Autoshow Mexicali",
  agency: "Bravo Publicidad",
  edition: "2026",
  taglineMain: "Mientras ellos exploran, tú decides.",
  taglineCommercial: "Todas las opciones. Todo un sábado. Toda la familia.",
  hook: "Regístrate antes del evento y participa por beneficios exclusivos.",
  insight:
    "Este evento no es un autoshow donde llevas a tus hijos. Son dos experiencias premium al mismo tiempo: mientras los niños viven la aventura, los papás deciden el auto que los va a llevar a la próxima.",
  territory: "La Baja",
  territoryFull: "Baja California",
};

export const rutas = {
  a: {
    id: "a",
    name: "Ruta A — Sunbelt Family",
    shortName: "Sunbelt Family",
    tone: "Cálido, festivo, familiar.",
    bg: "#F7EFE0",
    fg: "#1E3A5F",
    accent: "#FF6B35",
  },
  b: {
    id: "b",
    name: "Ruta B — Ruta Baja",
    shortName: "Ruta Baja",
    tone: "Señalética vial, ruta que cruza el territorio.",
    bg: "#F2E9D6",
    fg: "#1E1E1E",
    accent: "#1E1E1E",
    stamp: "#C64A1A",
  },
};

export const paradas = [
  {
    slug: "paso-familiar",
    km: "KM 01",
    name: "Paso Familiar",
    subtitle: "Vehículos familiares y comerciales",
    vehicle: "Pickup, SUV, sedán de volumen",
    tone: "La primera parada. Accesible, cálida, cotidiana.",
    icon: "directions_car",
  },
  {
    slug: "mirador-vip",
    km: "KM 02",
    name: "Mirador VIP",
    subtitle: "Vehículos de lujo",
    vehicle: "Sedán premium, exóticos, importados",
    tone: "El punto alto del recorrido. Sobrio, silencioso, premium.",
    icon: "diamond",
  },
  {
    slug: "desvio-offroad",
    km: "KM 03",
    name: "Desvío Off-Road",
    subtitle: "4x4 y desierto",
    vehicle: "RZR, pickup 4x4, off-roaders",
    tone: "La salida al desierto. Polvo, adrenalina, desvío.",
    icon: "terrain",
  },
];

export const palette = {
  cream: "#F7EFE0",
  navy: "#1E3A5F",
  navyDeep: "#0F2945",
  sunset: "#FF6B35",
  sunsetDeep: "#E64A15",
  yellow: "#FFC93C",
  yellowSoft: "#FFE08A",
  terracota: "#C64A1A",
  terracotaDark: "#8F3814",
  gold: "#D4AF37",
  goldSoft: "#F4D373",
  electric: "#2E5EAA",
  charcoal: "#1E1E1E",
  sand: "#E6D9C2",
};

export const zones = [
  {
    slug: "comun",
    name: "Área Común",
    subtitle: "Vehículos familiares y comerciales",
    vehicle: "Pickup / SUV / Sedán volumen",
    primary: "#FFC93C",
    secondary: "#E07856",
    accent: "#1E3A5F",
    text: "#1E3A5F",
    tone: "Accesible, cálido, cotidiano.",
    icon: "directions_car",
  },
  {
    slug: "vip",
    name: "Área VIP",
    subtitle: "Vehículos de lujo",
    vehicle: "Sedán premium / Exóticos / Importados",
    primary: "#1E3A5F",
    secondary: "#D4AF37",
    accent: "#F7EFE0",
    text: "#F7EFE0",
    tone: "Sofisticado, sobrio, premium.",
    icon: "diamond",
  },
  {
    slug: "offroad",
    name: "Off-Road",
    subtitle: "4x4 y zona desértica",
    vehicle: "RZR / Pickup 4x4 / Off-roaders",
    primary: "#C64A1A",
    secondary: "#D4B896",
    accent: "#F7EFE0",
    text: "#F7EFE0",
    tone: "Aventurero, terroso, robusto.",
    icon: "terrain",
  },
];

export const paletteSwatches = [
  { name: "Crema arena", hex: "#F7EFE0", use: "Fondo base. Respiración.", text: "#1E3A5F" },
  { name: "Azul tarde", hex: "#1E3A5F", use: "Estructura, tipografía, VIP.", text: "#F7EFE0" },
  { name: "Naranja atardecer", hex: "#FF6B35", use: "AUTOSHOW. Co-héroe.", text: "#F7EFE0" },
  { name: "Amarillo sol", hex: "#FFC93C", use: "Zona Común. Alegría.", text: "#1E3A5F" },
  { name: "Terracota", hex: "#C64A1A", use: "Zona Off-Road. Tierra.", text: "#F7EFE0" },
  { name: "Dorado champagne", hex: "#D4AF37", use: "Zona VIP. Acento premium.", text: "#1E3A5F" },
  { name: "Azul eléctrico", hex: "#2E5EAA", use: "Detalle, línea base, MEXICALI.", text: "#F7EFE0" },
  { name: "Carbón", hex: "#1E1E1E", use: "Sombras, línea, tipografía oscura.", text: "#F7EFE0" },
];
