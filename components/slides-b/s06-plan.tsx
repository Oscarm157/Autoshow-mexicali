import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const tramos = [
  {
    km: "KM 01",
    name: "Escudo",
    status: "Ahora",
    items: [
      "Shield master sin año, dos rutas finalistas.",
      "Número de edición integrado: RUTA 26.",
      "Sistema de paradas heredado del escudo.",
    ],
    active: true,
  },
  {
    km: "KM 02",
    name: "Invitación",
    status: "Siguiente",
    items: [
      "Digital: email, WhatsApp, stories con señal RUTA 26.",
      "Opcional impresa tipo ticket de peaje.",
      "Gancho: registro, beneficio al cruzar la primera parada.",
    ],
    active: false,
  },
  {
    km: "KM 03",
    name: "Sistema completo",
    status: "Rollout",
    items: [
      "Lonas tipo señalética vial en fachada y direccionales.",
      "Redes con plantillas de ruta (pre, durante, post).",
      "Pulseras numeradas por parada, merch con escudo.",
    ],
    active: false,
  },
];

export function S06Plan() {
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
              Evergreen y plan
            </span>
          </div>
        </FadeItem>

        <FadeItem>
          <h2
            className="font-badge uppercase text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[0.02em] max-w-4xl"
            style={{ color: "var(--accent)" }}
          >
            Una marca a{" "}
            <span style={{ color: "var(--stamp)" }}>10 años.</span>{" "}
            Un rollout en tres tramos.
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            El escudo no lleva año. El número de ruta sí: RUTA 26 se vuelve RUTA 27, RUTA 28. El sistema de paradas absorbe cada edición sin tocar el master.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="relative mt-2">
            <div
              className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-[2px]"
              style={{ background: "var(--accent)" }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {tramos.map((t) => (
                <div
                  key={t.km}
                  className="p-7 flex flex-col gap-5"
                  style={{
                    background: "var(--card)",
                    border: `1px solid ${t.active ? "var(--accent)" : "var(--card-border)"}`,
                    boxShadow: t.active
                      ? "0 0 0 1px var(--accent), 0 20px 40px -16px rgba(30,30,30,0.15)"
                      : "0 4px 12px -4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-badge text-base tracking-[0.24em]"
                      style={{ color: t.active ? "var(--stamp)" : "var(--muted)" }}
                    >
                      {t.km}
                    </span>
                    <span
                      className="font-badge text-[10px] tracking-[0.3em] uppercase px-2.5 py-1"
                      style={{
                        color: t.active ? "var(--accent)" : "var(--muted)",
                        border: `1px solid ${t.active ? "var(--accent)" : "var(--card-border)"}`,
                      }}
                    >
                      {t.status}
                    </span>
                  </div>

                  <div
                    className="w-10 h-[2px]"
                    style={{ background: t.active ? "var(--accent)" : "var(--muted-light)" }}
                  />

                  <h3
                    className="font-badge text-2xl tracking-[0.06em] uppercase"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.name}
                  </h3>

                  <ul className="flex flex-col gap-2 text-[13.5px] leading-relaxed">
                    {t.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-2 w-2 h-[2px] shrink-0"
                          style={{ background: t.active ? "var(--accent)" : "var(--muted)" }}
                        />
                        <span style={{ color: "var(--foreground)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
