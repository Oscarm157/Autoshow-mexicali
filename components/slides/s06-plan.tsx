import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const steps = [
  {
    n: "01",
    name: "Logo",
    status: "Ahora",
    items: [
      "Master sin año, dos rutas finalistas.",
      "Tag 2026 separable.",
      "Derivación cromática a tres zonas.",
    ],
    active: true,
  },
  {
    n: "02",
    name: "Invitación",
    status: "Siguiente",
    items: [
      "Digital: email, WhatsApp, stories.",
      "Opcional impresa para agencias.",
      "Gancho: registro, beneficio exclusivo.",
    ],
    active: false,
  },
  {
    n: "03",
    name: "Sistema completo",
    status: "Rollout",
    items: [
      "Lonas: fachada, direccionales, agencias aliadas.",
      "Redes: plantillas pre, during, post.",
      "Señalética, pulseras y merch por zona.",
    ],
    active: false,
  },
];

export function S06Plan() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Evergreen y plan
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.015em] max-w-4xl">
            Una marca a{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              10 años.
            </em>{" "}
            Un rollout en tres pasos.
          </h2>
        </FadeItem>

        <FadeItem>
          <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            El master no lleva año. El tag 2026 se separa y se rediseña cuando toque. El sistema de zonas absorbe cada edición sin tocar el logo.
          </p>
        </FadeItem>

        <FadeItem>
          <div className="relative mt-2">
            <div
              className="hidden md:block absolute top-[56px] left-[10%] right-[10%] h-[2px] -z-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent) 0%, var(--accent) 50%, var(--card-border) 100%)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl p-7 border flex flex-col gap-5"
                  style={{
                    background: "var(--card)",
                    borderColor: s.active ? "var(--accent)" : "var(--card-border)",
                    boxShadow: s.active
                      ? "0 0 0 1px var(--accent), 0 20px 40px -16px rgba(255,107,53,0.18)"
                      : "0 4px 12px -4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-festival"
                      style={{
                        background: s.active ? "var(--accent)" : "var(--surface-muted)",
                        color: s.active ? "#FFFFFF" : "var(--muted)",
                      }}
                    >
                      {s.n}
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: s.active ? "var(--accent)" : "var(--muted)",
                        background: s.active
                          ? "rgba(255,107,53,0.08)"
                          : "var(--surface-muted)",
                      }}
                    >
                      {s.status}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {s.name}
                  </h3>

                  <ul className="flex flex-col gap-2 text-[13.5px] leading-relaxed">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ background: s.active ? "var(--accent)" : "var(--muted)" }}
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
