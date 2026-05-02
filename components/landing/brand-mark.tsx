// Logos monocromáticos: usan mask-image + currentColor para heredar el color
// del contenedor. Las marcas sin SVG oficial (polaris, autostar) caen a
// wordmark consistente con la tipografía display del sitio.

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

// width / height ratio of each official logo. Height is the controlling
// dimension; width is height * ratio.
const ratios: Record<Slug, { ratio: number; type: "mark" | "wordmark" }> = {
  toyota: { ratio: 1, type: "mark" },
  ford: { ratio: 2.55, type: "wordmark" },
  mazda: { ratio: 1, type: "mark" },
  polaris: { ratio: 0, type: "mark" },
  jeep: { ratio: 1, type: "mark" },
  "mercedes-benz": { ratio: 1, type: "mark" },
  ram: { ratio: 1, type: "mark" },
  dodge: { ratio: 5.7, type: "wordmark" },
  fiat: { ratio: 2.4, type: "wordmark" },
  peugeot: { ratio: 1, type: "mark" },
  mitsubishi: { ratio: 1, type: "mark" },
  autostar: { ratio: 0, type: "mark" },
};

const wordmarks: Partial<Record<Slug, string>> = {
  polaris: "POLARIS",
  autostar: "Autostar",
};

export function BrandMark({
  slug,
  size = 28,
  className = "",
}: {
  slug: Slug;
  size?: number;
  className?: string;
}) {
  const meta = ratios[slug];
  const fallback = wordmarks[slug];

  if (fallback) {
    return (
      <span
        className={`inline-flex items-center ${className}`}
        style={{ height: size, color: "currentColor" }}
      >
        <span
          style={{
            fontFamily: "var(--font-festival)",
            fontSize: size * 0.78,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          {fallback}
        </span>
      </span>
    );
  }

  const width = meta.ratio === 1 ? size : size * meta.ratio;

  return (
    <span
      aria-label={slug.replace("-", " ")}
      role="img"
      className={`inline-block align-middle ${className}`}
      style={{
        width,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(/brands/${slug}.svg)`,
        maskImage: `url(/brands/${slug}.svg)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
