import { Slide } from "../slide";
import { FadeStack, FadeItem, ScaleIn } from "../ui/motion-primitives";
import { LogoImage } from "../ui/logo-image";

export function S07Logo() {
  return (
    <Slide mode="light" className="relative overflow-hidden">
      <div className="absolute inset-0 sun-bg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <FadeStack className="flex flex-col gap-6 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Ruta A — Sunbelt Family
            </span>
          </FadeItem>

          <FadeItem>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] tracking-[-0.015em] max-w-3xl">
              El logo master.
            </h2>
          </FadeItem>
        </FadeStack>

        <ScaleIn delay={0.4} className="w-full max-w-[560px] mt-4">
          <LogoImage />
        </ScaleIn>

        <FadeStack className="flex flex-col gap-3 items-center mt-6 max-w-2xl">
          <FadeItem>
            <p
              className="text-base sm:text-lg italic leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Festival warmth meets automotive confidence.
            </p>
          </FadeItem>
          <FadeItem>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {[
                "Sol héroe",
                "3 vehículos frontales",
                "Familias visibles",
                "Horizonte Baja",
                "Chisel orange",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                    background: "rgba(255,107,53,0.06)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeItem>
        </FadeStack>
      </div>
    </Slide>
  );
}
