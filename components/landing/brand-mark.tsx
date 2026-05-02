// Wordmarks monocromáticos consistentes para todas las marcas.
// Usan currentColor — heredan del contenedor y se adaptan a la paleta.
// Cuando el cliente nos pase los SVG oficiales, se sustituyen aquí
// manteniendo el mismo wrapper/tamaño.

type Slug =
  | "toyota"
  | "ford"
  | "mazda"
  | "polaris"
  | "jeep"
  | "mercedes-benz"
  | "ram"
  | "dodge"
  | "fiat"
  | "peugeot"
  | "mitsubishi"
  | "autostar";

export function BrandMark({
  slug,
  size = 28,
  className = "",
}: {
  slug: Slug;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ height: size, lineHeight: 1, color: "currentColor" }}
    >
      <span
        style={{
          fontFamily: "var(--font-festival)",
          fontSize: size * 0.7,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontWeight: 800,
          whiteSpace: "nowrap",
        }}
      >
        {label(slug)}
      </span>
    </span>
  );
}

function label(slug: Slug): string {
  switch (slug) {
    case "mercedes-benz":
      return "Mercedes-Benz";
    case "toyota":
      return "Toyota";
    case "ford":
      return "Ford";
    case "mazda":
      return "Mazda";
    case "polaris":
      return "Polaris";
    case "jeep":
      return "Jeep";
    case "ram":
      return "Ram";
    case "dodge":
      return "Dodge";
    case "fiat":
      return "Fiat";
    case "peugeot":
      return "Peugeot";
    case "mitsubishi":
      return "Mitsubishi";
    case "autostar":
      return "Autostar";
  }
}
