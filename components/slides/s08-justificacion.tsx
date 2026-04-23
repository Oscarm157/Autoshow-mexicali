import { Slide } from "../slide";
import { FadeStack, FadeItem } from "../ui/motion-primitives";

const decisions = [
  {
    icon: "wb_sunny",
    title: "Sol abanico",
    desc: "Mexicali es el sol. Lo reclamamos, no lo decoramos.",
    color: "#FF6B35",
  },
  {
    icon: "directions_car",
    title: "3 vehículos = 3 zonas",
    desc: "RZR + pickup + sedán: el sistema vive dentro del logo.",
    color: "#FFC93C",
  },
  {
    icon: "groups",
    title: "Familia en ventanas",
    desc: "Evento familiar se ve, no se declara. Visible, no cursi.",
    color: "#C64A1A",
  },
  {
    icon: "landscape",
    title: "Horizonte Baja",
    desc: "El evento vive en todo el estado, no amarrado al museo.",
    color: "#D4AF37",
  },
  {
    icon: "text_fields",
    title: "Chisel orange",
    desc: "AUTOSHOW grita con oficio, no con ruido. Festival con dignidad.",
    color: "#E64A15",
  },
  {
    icon: "auto_awesome",
    title: "Dorado Mexicali",
    desc: "El nombre de la ciudad vale tanto como el del evento.",
    color: "#2E5EAA",
  },
];

export function S08Justificacion() {
  return (
    <Slide mode="light">
      <FadeStack className="flex flex-col gap-10">
        <FadeItem>
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Justificación de diseño
          </span>
        </FadeItem>

        <FadeItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.015em] max-w-4xl">
            Cada elemento tiene{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              una razón.
            </em>
          </h2>
        </FadeItem>

        <FadeItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {decisions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl p-6 border flex flex-col gap-4 hover:-translate-y-0.5 transition-transform duration-300"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${d.color}1A`,
                    color: d.color,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 22 }}
                  >
                    {d.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-base font-bold tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeItem>
      </FadeStack>
    </Slide>
  );
}
