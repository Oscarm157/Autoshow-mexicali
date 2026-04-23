import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

export function S02Diagnostico() {
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.015em]">
            El logo anterior decía <em className="italic" style={{ color: "var(--muted)" }}>taller.</em>
            <br />
            El nuevo debe decir{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>evento.</em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                Lo que leía antes
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "Negro pesado que apagaba cualquier color.",
                  "Un solo auto genérico, sin narrativa familiar.",
                  "Estética de taller mecánico / velocidad agresiva.",
                  "Logo sin sistema: solo servía como estampa.",
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
                boxShadow: "0 0 0 1px var(--accent), 0 20px 40px -12px rgba(255,107,53,0.20)",
              }}
            >
              <div
                className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Lo que debe decir ahora
              </div>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
                {[
                  "Calor Mexicali: sol como héroe, no ornamento.",
                  "Tres autos = tres zonas = un solo evento.",
                  "Experiencia familiar visible, no declarada.",
                  "Sistema que vive en lonas, redes, señalética y merch.",
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
