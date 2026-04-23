import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S03Tagline() {
  return (
    <Slide mode="light" centered className="relative overflow-hidden">
      <div className="absolute inset-0 asphalt-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 30% 80%, rgba(198,74,26,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center max-w-6xl mx-auto">
        <FadeItem className="hidden lg:flex flex-col items-start gap-4">
          <span
            className="font-badge text-[10px] tracking-[0.4em] uppercase rotate-[-90deg] origin-top-left translate-y-32 whitespace-nowrap"
            style={{ color: "var(--stamp)" }}
          >
            Tagline · KM 01
          </span>
        </FadeItem>

        <div className="flex flex-col gap-12">
          <FadeItem className="lg:hidden">
            <span
              className="font-badge text-[10px] tracking-[0.36em] uppercase"
              style={{ color: "var(--stamp)" }}
            >
              Tagline · KM 01
            </span>
          </FadeItem>

          <FadeStack className="flex flex-col gap-10">
            <FadeItem>
              <div className="flex items-center gap-4">
                <span className="w-16 h-[2px]" style={{ background: "var(--accent)" }} />
                <span
                  className="font-badge text-[12px] tracking-[0.32em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Mensaje principal
                </span>
              </div>
            </FadeItem>

            <FadeItem>
              <h1
                className="font-badge uppercase text-[48px] sm:text-[76px] md:text-[104px] leading-[0.92] tracking-[0.01em]"
                style={{ color: "var(--accent)" }}
              >
                <HeroWord delay={0.15}>Mientras</HeroWord>{" "}
                <HeroWord delay={0.3}>ellos</HeroWord>{" "}
                <HeroWord delay={0.45}>exploran,</HeroWord>
                <br />
                <HeroWord delay={0.7}>
                  <span style={{ color: "var(--stamp)" }}>tú decides.</span>
                </HeroWord>
              </h1>
            </FadeItem>

            <FadeItem>
              <div className="w-32 h-[3px]" style={{ background: "var(--accent)" }} />
            </FadeItem>

            <FadeItem>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-4 max-w-3xl">
                <div className="flex flex-col gap-2">
                  <span
                    className="font-badge text-[10px] tracking-[0.32em] uppercase"
                    style={{ color: "var(--stamp)" }}
                  >
                    Comercial
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--foreground)" }}
                  >
                    Todas las opciones. Toda la familia. En un solo día.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="font-badge text-[10px] tracking-[0.32em] uppercase"
                    style={{ color: "var(--stamp)" }}
                  >
                    Gancho
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--foreground)" }}
                  >
                    Regístrate antes del evento y participa por beneficios exclusivos.
                  </p>
                </div>
              </div>
            </FadeItem>
          </FadeStack>
        </div>
      </div>
    </Slide>
  );
}
