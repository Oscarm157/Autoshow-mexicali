import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const columns = [
  {
    name: "Chicago",
    sub: "Auto Show",
    meta: "~211,000 asistentes",
    bullets: [
      "Family Zone · Supercar Gallery",
      "Partnership: Chicago Children's Museum",
      "Azul · blanco · rojo institucional",
    ],
    tone: "reference",
  },
  {
    name: "San Diego",
    sub: "International Auto Show",
    meta: "~100,000 asistentes",
    bullets: [
      "Electric Avenue · Mobility Zone",
      "Family Day · tickets 100% online",
      "Sobrio, editorial, clean",
    ],
    tone: "reference",
  },
  {
    name: "Mexicali",
    sub: "Autoshow",
    meta: "Regional · Baja California",
    bullets: [
      "Común · VIP · Off-Road — mapeadas al logo",
      "Baja como territorio, no solo museo",
      "Calor + oficio local = diferenciador",
    ],
    tone: "hero",
  },
];

export function S05Benchmark() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Benchmarking
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.015em] max-w-4xl">
            Anclados en su <em className="italic" style={{ color: "var(--muted)" }}>rigor institucional.</em>
            <br />
            Diferenciados por algo que ellos{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              no tienen.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {columns.map((col) => {
              const isHero = col.tone === "hero";
              return (
                <div
                  key={col.name}
                  className="rounded-2xl p-7 border flex flex-col gap-5"
                  style={{
                    background: isHero ? "var(--card)" : "var(--surface-muted)",
                    borderColor: isHero
                      ? "var(--accent)"
                      : "var(--card-border)",
                    boxShadow: isHero
                      ? "0 0 0 1px var(--accent), 0 20px 40px -16px rgba(255,107,53,0.25)"
                      : "none",
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-2xl font-bold tracking-tight"
                      style={{
                        color: isHero ? "var(--accent)" : "var(--foreground)",
                      }}
                    >
                      {col.name}
                    </h3>
                    <span className="text-sm text-muted">{col.sub}</span>
                  </div>
                  <div
                    className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {col.meta}
                  </div>
                  <ul className="flex flex-col gap-2.5 text-[14px] leading-relaxed">
                    {col.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{
                            background: isHero
                              ? "var(--accent)"
                              : "var(--muted)",
                          }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </FadeItem>

        <FadeItem>
          <p
            className="text-center mt-4 text-base sm:text-lg italic max-w-3xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Adoptamos su rigor. Ganamos con lo único que no pueden copiar:{" "}
            <strong
              className="not-italic"
              style={{ color: "var(--foreground)" }}
            >
              el calor Mexicali.
            </strong>
          </p>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
