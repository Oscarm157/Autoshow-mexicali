import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S02Contexto() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px]" style={{ background: "var(--accent)" }} />
            <span
              className="font-badge text-[11px] tracking-[0.36em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Punto de partida
            </span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.015em] max-w-5xl font-badge uppercase"
            style={{ color: "var(--accent)" }}
          >
            El logo anterior era{" "}
            <span style={{ color: "var(--muted)" }}>un punto.</span>
            <br />
            El evento es{" "}
            <span style={{ color: "var(--stamp)" }}>una ruta.</span>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div
              className="p-8 flex flex-col gap-5"
              style={{
                background: "var(--surface-muted)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-badge text-[14px] tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                  KM 00
                </span>
                <span className="flex-1 dashed-rule" style={{ opacity: 0.3 }} />
                <span
                  className="font-badge text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  Antes
                </span>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "Logo amarrado al museo como sede fija.",
                  "Un solo auto, sin narrativa.",
                  "Tono taller mecánico, no evento.",
                  "Estampa suelta, cada edición desde cero.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-2 w-2 h-[2px] shrink-0"
                      style={{ background: "var(--muted)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 flex flex-col gap-5 relative"
              style={{
                background: "var(--card)",
                border: "1px solid var(--accent)",
                boxShadow: "0 0 0 1px var(--accent), 0 20px 40px -12px rgba(30,30,30,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-badge text-[14px] tracking-[0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  RUTA 26
                </span>
                <span className="flex-1 h-[2px]" style={{ background: "var(--accent)" }} />
                <span
                  className="font-badge text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "var(--stamp)" }}
                >
                  Ahora
                </span>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "La Baja como territorio: Mexicali, Tijuana, Ensenada.",
                  "El evento es una ruta, no una sede.",
                  "Escudo vial: señal clara, sistema a 10 años.",
                  "Cada edición es una ruta numerada: 26, 27, 28.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-2 w-2 h-[2px] shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
