import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const layers = [
  {
    n: "01",
    name: "Logo Master",
    period: "Perdura 10 años",
    desc: "Wordmark + emblema. Sin año. Se rediseña una vez por década, no cada edición.",
    color: "#FF6B35",
    bg: "linear-gradient(135deg, #FFC93C 0%, #FF6B35 100%)",
  },
  {
    n: "02",
    name: "Tag de Edición",
    period: "Cambia cada año",
    desc: "Pequeño badge con el año (2026 / 2027 / ...). Separable, rediseñable, firma anual.",
    color: "#D4AF37",
    bg: "linear-gradient(135deg, #F4D373 0%, #D4AF37 100%)",
  },
  {
    n: "03",
    name: "Sistema de Zonas",
    period: "Aplicación cromática",
    desc: "Cada zona (Común / VIP / Off-Road) hereda el ADN del master con paleta y tratamiento propio.",
    color: "#1E3A5F",
    bg: "linear-gradient(135deg, #2E5EAA 0%, #1E3A5F 100%)",
  },
];

export function S06Evergreen() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Arquitectura evergreen
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.015em] max-w-4xl">
            Una marca que dura{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              10 años,
            </em>
            <br />
            no una que se tira{" "}
            <em className="italic" style={{ color: "var(--muted)" }}>
              cada edición.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {layers.map((l) => (
              <div
                key={l.n}
                className="rounded-2xl p-7 border flex flex-col gap-5 min-h-[280px]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-festival text-lg"
                    style={{
                      background: l.bg,
                      color: "#FFFFFF",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    {l.n}
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      color: l.color,
                      background: "var(--surface-muted)",
                    }}
                  >
                    {l.period}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-xl font-bold tracking-tight"
                    style={{ color: l.color }}
                  >
                    {l.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted">
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
