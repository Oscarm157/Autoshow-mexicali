import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S03Tagline() {
  return (
    <Slide mode="dark" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(242,233,214,0.04) 0%, transparent 40%, transparent 60%, rgba(242,233,214,0.04) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-14 items-center text-center">
        <FadeStack className="flex flex-col gap-12 items-center">
          <FadeItem>
            <div className="flex items-center gap-4">
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
              <span
                className="font-badge text-[10px] tracking-[0.4em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Tagline · KM 01
              </span>
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
            </div>
          </FadeItem>

          <FadeItem>
            <h1
              className="font-badge uppercase text-[44px] sm:text-[68px] md:text-[92px] leading-[0.95] tracking-[0.02em] max-w-5xl"
              style={{ color: "var(--accent)" }}
            >
              <HeroWord delay={0.15}>Mientras </HeroWord>
              <HeroWord delay={0.3}>ellos </HeroWord>
              <HeroWord delay={0.45}>exploran,</HeroWord>
              <br />
              <HeroWord delay={0.7}>
                <span style={{ color: "var(--stamp)" }}>tú decides.</span>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <div className="w-24 h-[4px]" style={{ background: "var(--accent)" }} />
          </FadeItem>

          <FadeItem>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-4 max-w-3xl">
              <div className="flex flex-col gap-2 items-center sm:items-start">
                <span
                  className="font-badge text-[10px] tracking-[0.32em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Comercial
                </span>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                  Todas las opciones. Todo un sábado. Toda la familia.
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center sm:items-start">
                <span
                  className="font-badge text-[10px] tracking-[0.32em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Gancho
                </span>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                  Regístrate antes del evento y participa por beneficios exclusivos.
                </p>
              </div>
            </div>
          </FadeItem>
        </FadeStack>
      </div>
    </Slide>
  );
}
