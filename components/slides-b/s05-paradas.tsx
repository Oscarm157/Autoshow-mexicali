import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";
import { paradas } from "@/lib/brand";

export function S05Paradas() {
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
              Sistema de paradas
            </span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2
            className="font-badge uppercase text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[0.02em] max-w-4xl"
            style={{ color: "var(--accent)" }}
          >
            Tres paradas.{" "}
            <span style={{ color: "var(--stamp)" }}>Una sola ruta.</span>
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            El recorrido sustituye al mapa de zonas. Cada parada es un kilómetro del evento, un tramo reconocible, con señalética propia. El visitante no elige entre áreas, avanza por la ruta.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="relative mt-2">
            <div
              className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-[2px]"
              style={{ background: "var(--accent)" }}
            />
            <div
              className="hidden md:flex absolute top-[32px] left-[8%] right-[8%] justify-between"
              style={{ pointerEvents: "none" }}
            >
              {paradas.map((p) => (
                <span
                  key={p.slug}
                  className="w-3 h-3 rounded-full"
                  style={{ background: "var(--background)", border: "2px solid var(--accent)" }}
                />
              ))}
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {paradas.map((p) => (
                <div
                  key={p.slug}
                  className="p-7 flex flex-col gap-5 min-h-[320px]"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--accent)",
                    boxShadow: "0 20px 40px -16px rgba(30,30,30,0.12)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-badge text-base tracking-[0.24em]"
                      style={{ color: "var(--stamp)" }}
                    >
                      {p.km}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 26, color: "var(--accent)", opacity: 0.85 }}
                    >
                      {p.icon}
                    </span>
                  </div>

                  <div className="w-10 h-[2px]" style={{ background: "var(--accent)" }} />

                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="font-badge text-xl sm:text-2xl tracking-[0.06em] uppercase"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-[13px]" style={{ color: "var(--muted)" }}>{p.subtitle}</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <div
                      className="text-[13px] leading-relaxed italic"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                    >
                      {p.tone}
                    </div>
                    <div
                      className="font-badge text-[11px] tracking-[0.2em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.vehicle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeItem>

        <FadeItem>
          <p
            className="text-center text-sm italic max-w-3xl mx-auto"
            style={{ color: "var(--muted)", fontFamily: "var(--font-display)" }}
          >
            La ruta cambia de tramo. El escudo se mantiene.
          </p>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
