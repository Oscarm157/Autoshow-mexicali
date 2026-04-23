import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";

export function S03Tagline() {
  return (
    <Slide mode="light" centered className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 70% 20%, rgba(255,107,53,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center max-w-6xl mx-auto">
        <FadeItem className="hidden lg:flex flex-col items-start gap-4">
          <span
            className="text-[10px] font-semibold tracking-[0.36em] uppercase rotate-[-90deg] origin-top-left translate-y-32 whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            Tagline · Eje narrativo
          </span>
        </FadeItem>

        <div className="flex flex-col gap-12">
          <FadeItem className="lg:hidden">
            <span
              className="text-[10px] font-semibold tracking-[0.32em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Tagline · Eje narrativo
            </span>
          </FadeItem>

          <FadeStack className="flex flex-col gap-10">
            <FadeItem>
              <span
                className="block text-[120px] sm:text-[160px] leading-[0.7] font-bold"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                &ldquo;
              </span>
            </FadeItem>

            <FadeItem>
              <h1
                className="text-[44px] sm:text-[72px] md:text-[96px] leading-[0.98] tracking-[-0.025em] font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
              >
                <HeroWord delay={0.15}>Mientras</HeroWord>{" "}
                <HeroWord delay={0.3}>ellos</HeroWord>{" "}
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
              <div
                className="w-32 h-[2px] mt-2"
                style={{ background: "var(--accent)" }}
              />
            </FadeItem>

            <FadeItem>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-4 max-w-3xl">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-semibold tracking-[0.32em] uppercase"
                    style={{ color: "var(--accent)" }}
                  >
                    Comercial
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--primary)" }}
                  >
                    Todas las opciones. Toda la familia. En un solo día.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-semibold tracking-[0.32em] uppercase"
                    style={{ color: "var(--accent)" }}
                  >
                    Gancho
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--primary)" }}
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
