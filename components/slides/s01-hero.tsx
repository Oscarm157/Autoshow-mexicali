import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";
import { brand, rutas } from "@/lib/brand";

export function S01Hero() {
  return (
    <Slide mode="dark" centered className="relative overflow-hidden">
      <div className="absolute inset-0 sun-bg-dark pointer-events-none" />
      <div className="absolute inset-0 warm-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10 items-center text-center">
        <FadeStack className="flex flex-col gap-8 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Bravo Publicidad · Propuesta de marca · 2026
            </span>
          </FadeItem>

          <FadeItem>
            <h1 className="font-festival leading-[0.9] text-[56px] sm:text-[88px] md:text-[120px] lg:text-[148px] tracking-tight">
              <HeroWord delay={0.15}>
                <span className="chisel-orange">AUTOSHOW</span>
              </HeroWord>
              <br />
              <HeroWord delay={0.4}>
                <span
                  style={{
                    color: "var(--foreground)",
                    fontSize: "0.5em",
                    letterSpacing: "0.12em",
                    fontWeight: 400,
                    opacity: 0.85,
                  }}
                >
                  · MEXICALI ·
                </span>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed" style={{ color: "var(--muted)" }}>
              Propuesta de sistema de marca para la edición 2026.{" "}
              <em className="italic" style={{ color: "var(--accent)" }}>
                {brand.taglineMain}
              </em>
            </p>
          </FadeItem>

          <FadeItem>
            <div className="flex items-center gap-3 mt-4 text-xs uppercase tracking-[0.22em]">
              <span
                className="pulse-dot w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <span style={{ color: "var(--accent)" }}>{rutas.a.name}</span>
              <span style={{ color: "var(--muted-light)" }}>·</span>
              <span style={{ color: "var(--muted)" }}>{brand.territory}</span>
            </div>
          </FadeItem>
        </FadeStack>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 text-center text-[10px] uppercase tracking-[0.28em]"
        style={{ color: "var(--muted)" }}
      >
        Avanzar con la flecha derecha
      </div>
    </Slide>
  );
}
