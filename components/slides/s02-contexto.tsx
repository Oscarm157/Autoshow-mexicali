import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S02Contexto() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Punto de partida
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.015em] max-w-5xl">
            El logo anterior comunicaba{" "}
            <em className="italic" style={{ color: "var(--muted)" }}>taller mecánico.</em>{" "}
            La propuesta comunica{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              evento familiar de Baja California.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "var(--surface-muted)",
                borderColor: "var(--card-border)",
              }}
            >
              <div
                className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--muted)" }}
              >
                Identidad anterior
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "Paleta en negro, sin identidad regional.",
                  "Un solo vehículo, sin narrativa familiar.",
                  "Estética de taller mecánico.",
                  "Pieza aislada, sin sistema de aplicación.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--muted)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "var(--card)",
                borderColor: "var(--accent)",
                boxShadow:
                  "0 0 0 1px var(--accent), 0 20px 40px -12px rgba(255,107,53,0.16)",
              }}
            >
              <div
                className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Identidad propuesta
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "Doble experiencia: aventura para hijos, decisión para padres.",
                  "Tres vehículos que representan las tres zonas del evento.",
                  "Baja California como territorio: Mexicali, Tijuana, Ensenada.",
                  "Sistema aplicable en lonas, redes, señalética y merchandising.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
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
