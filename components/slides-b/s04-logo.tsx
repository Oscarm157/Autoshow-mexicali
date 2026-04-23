import { Slide } from "../slide";
import { FadeStack, FadeItem, ScaleIn } from "../ui/motion-primitives";
import { RutaShield } from "../ui/ruta-shield";

const razones = [
  {
    num: "I",
    title: "Un escudo, no un cartel",
    desc: "Forma reconocible de lejos. La misma lógica de una señal de carretera: se lee en un segundo.",
  },
  {
    num: "II",
    title: "Número de ruta evergreen",
    desc: "RUTA 26, RUTA 27, RUTA 28. El año se convierte en identidad, no en fecha desechable.",
  },
  {
    num: "III",
    title: "Baja, no Mexicali",
    desc: "El escudo dice BAJA. El evento puede salir de Mexicali, Tijuana o Ensenada sin renombrarse.",
  },
];

export function S04Logo() {
  return (
    <Slide mode="light" className="relative overflow-hidden">
      <div className="absolute inset-0 asphalt-grid pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <FadeStack className="flex flex-col gap-8">
          <FadeItem>
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px]" style={{ background: "var(--accent)" }} />
              <span
                className="font-badge text-[11px] tracking-[0.36em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Logo master
              </span>
            </div>
          </FadeItem>

          <FadeItem>
            <h2
              className="font-badge uppercase text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[0.02em]"
              style={{ color: "var(--accent)" }}
            >
              Una señal.{" "}
              <span style={{ color: "var(--stamp)" }}>Un territorio.</span>
            </h2>
          </FadeItem>

          <FadeItem>
            <ul className="flex flex-col gap-6 mt-2">
              {razones.map((r) => (
                <li key={r.title} className="flex gap-5">
                  <span
                    className="font-badge text-xl shrink-0 w-10 text-center"
                    style={{ color: "var(--stamp)" }}
                  >
                    {r.num}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-badge text-base tracking-[0.12em] uppercase"
                      style={{ color: "var(--foreground)" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {r.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeItem>
        </FadeStack>

        <ScaleIn delay={0.3} className="flex items-center justify-center">
          <RutaShield size={360} number="26" />
        </ScaleIn>
      </div>
    </Slide>
  );
}
