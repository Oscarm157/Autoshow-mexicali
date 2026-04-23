import { Slide } from "../slide";
import { FadeStack, FadeItem, ScaleIn } from "../ui/motion-primitives";
import { LogoImage } from "../ui/logo-image";

const razones = [
  {
    title: "Sol",
    desc: "Representa el clima y la identidad geográfica de Baja California.",
  },
  {
    title: "Tres vehículos",
    desc: "Cada uno representa una zona del evento: familiar, VIP y off-road.",
  },
  {
    title: "Rumorosa y palma",
    desc: "Referencia el territorio completo, no una sede específica.",
  },
];

export function S04Logo() {
  return (
    <Slide mode="light" className="relative overflow-hidden">
      <div className="absolute inset-0 sun-bg pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">
        <FadeStack className="flex flex-col gap-8">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Logo master
            </span>
          </FadeItem>

          <FadeItem>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.015em]">
              Un sistema de marca{" "}
              <em className="italic" style={{ color: "var(--accent)" }}>
                contenido en una sola pieza.
              </em>
            </h2>
          </FadeItem>

          <FadeItem>
            <ul className="flex flex-col gap-5 mt-2">
              {razones.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span
                    className="mt-1.5 w-8 h-[2px] shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
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

        <ScaleIn delay={0.3} className="w-full max-w-[520px] mx-auto">
          <LogoImage />
        </ScaleIn>
      </div>
    </Slide>
  );
}
