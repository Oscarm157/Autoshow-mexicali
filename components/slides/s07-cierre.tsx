import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S07Cierre() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 sun-bg-dark pointer-events-none" />
      <div className="absolute inset-0 warm-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-12">
        <FadeStack className="flex flex-col gap-12 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Cierre
            </span>
          </FadeItem>

          <FadeItem>
            <h1
              className="text-[40px] sm:text-[64px] md:text-[88px] leading-[1.05] tracking-[-0.02em] font-bold max-w-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HeroWord delay={0.15}>Mientras </HeroWord>
              <HeroWord delay={0.3}>ellos </HeroWord>
              <HeroWord delay={0.45}>exploran,</HeroWord>
              <br />
              <HeroWord delay={0.7}>
                <em className="italic" style={{ color: "var(--accent)" }}>
                  tú decides.
                </em>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <div className="w-16 h-[2px]" style={{ background: "var(--accent)" }} />
          </FadeItem>

          <FadeItem>
            <p
              className="text-2xl sm:text-3xl font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              ¿Avanzamos?
            </p>
          </FadeItem>
        </FadeStack>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.28em]">
          <span style={{ color: "var(--muted-light)" }}>Propuesta por</span>
          <span className="font-semibold" style={{ color: "var(--accent)" }}>
            Bravo Publicidad
          </span>
          <span style={{ color: "var(--muted-light)" }}>·</span>
          <span style={{ color: "var(--muted-light)" }}>2026</span>
        </div>
      </div>
    </Slide>
  );
}
