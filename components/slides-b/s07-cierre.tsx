import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord, ScaleIn } from "../ui/motion-primitives";
import { RutaShield } from "../ui/ruta-shield";

export function S07Cierre() {
  return (
    <Slide mode="light" centered className="relative overflow-hidden">
      <div className="absolute inset-0 asphalt-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 800px at 50% 120%, rgba(198,74,26,0.16) 0%, rgba(198,74,26,0.06) 35%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-10">
        <FadeStack className="flex flex-col gap-10 items-center">
          <FadeItem>
            <div className="flex items-center gap-4">
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
              <span
                className="font-badge text-[10px] tracking-[0.4em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Cierre · KM 07
              </span>
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
            </div>
          </FadeItem>

          <ScaleIn delay={0.2}>
            <RutaShield size={200} number="26" />
          </ScaleIn>

          <FadeItem>
            <h1
              className="font-badge uppercase text-[36px] sm:text-[56px] md:text-[76px] leading-[0.95] tracking-[0.02em] max-w-5xl"
              style={{ color: "var(--accent)" }}
            >
              <HeroWord delay={0.4}>Mientras</HeroWord>{" "}
              <HeroWord delay={0.55}>ellos</HeroWord>{" "}
              <HeroWord delay={0.7}>exploran,</HeroWord>
              <br />
              <HeroWord delay={0.9}>
                <span style={{ color: "var(--stamp)" }}>tú decides.</span>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <div className="w-16 h-[4px]" style={{ background: "var(--accent)" }} />
          </FadeItem>

          <FadeItem>
            <p
              className="font-badge uppercase text-2xl sm:text-3xl tracking-[0.12em]"
              style={{ color: "var(--accent)" }}
            >
              Quedamos a la espera de sus comentarios.
            </p>
          </FadeItem>
        </FadeStack>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="flex items-center justify-center gap-3 font-badge text-[10px] uppercase tracking-[0.36em]">
          <span style={{ color: "var(--muted)" }}>Propuesta por</span>
          <span style={{ color: "var(--stamp)" }}>Bravo Publicidad</span>
          <span style={{ color: "var(--muted-light)" }}>·</span>
          <span style={{ color: "var(--muted)" }}>2026</span>
        </div>
      </div>
    </Slide>
  );
}
