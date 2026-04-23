import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S04Tagline() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1200px 800px at 50% 50%, rgba(255,107,53,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 warm-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-14 items-center text-center">
        <FadeStack className="flex flex-col gap-12 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent-light)" }}
            >
              Tagline principal
            </span>
          </FadeItem>

          <FadeItem>
            <h1
              className="text-[44px] sm:text-[64px] md:text-[84px] leading-[1.05] tracking-[-0.02em] font-bold max-w-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HeroWord delay={0.15}>Mientras </HeroWord>
              <HeroWord delay={0.3}>ellos </HeroWord>
              <HeroWord delay={0.45}>exploran,</HeroWord>
              <br />
              <HeroWord delay={0.7}>
                <em
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  tú decides.
                </em>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8 max-w-3xl">
              <div className="flex flex-col gap-2 text-left">
                <span
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "var(--accent-light)" }}
                >
                  Tagline comercial
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-muted">
                  Todas las opciones. Todo un sábado. Toda la familia.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <span
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "var(--accent-light)" }}
                >
                  Gancho de conversión
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-muted">
                  Regístrate antes del evento y participa por beneficios
                  exclusivos.
                </p>
              </div>
            </div>
          </FadeItem>
        </FadeStack>
      </div>
    </Slide>
  );
}
