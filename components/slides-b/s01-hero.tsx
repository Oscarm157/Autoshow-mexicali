import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord, ScaleIn } from "../ui/motion-primitives";
import { RutaShield } from "../ui/ruta-shield";
import { brand, rutas } from "@/lib/brand";

export function S01Hero() {
  return (
    <Slide mode="light" centered className="relative overflow-hidden">
      <div className="absolute inset-0 asphalt-grid pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10 items-center text-center">
        <FadeStack className="flex flex-col gap-8 items-center">
          <FadeItem>
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
              <span
                className="font-badge text-[10px] tracking-[0.36em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Bravo Publicidad · Propuesta de marca · 2026
              </span>
              <span className="w-10 h-[1px]" style={{ background: "var(--accent)" }} />
            </div>
          </FadeItem>

          <ScaleIn delay={0.2}>
            <RutaShield size={320} number="26" />
          </ScaleIn>

          <FadeItem>
            <h1
              className="font-badge leading-none text-[44px] sm:text-[64px] md:text-[88px] tracking-[0.04em] uppercase max-w-4xl"
              style={{ color: "var(--accent)" }}
            >
              <HeroWord delay={0.5}>Baja California</HeroWord>{" "}
              <HeroWord delay={0.75}>
                <span style={{ color: "var(--muted)" }}>como territorio.</span>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <p
              className="max-w-2xl text-base sm:text-lg leading-relaxed italic"
              style={{ color: "var(--muted)", fontFamily: "var(--font-display)" }}
            >
              {brand.taglineMain}
            </p>
          </FadeItem>

          <FadeItem>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] font-badge">
              <span
                className="pulse-dot w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--stamp)" }}
              />
              <span style={{ color: "var(--accent)" }}>{rutas.b.name}</span>
              <span style={{ color: "var(--muted-light)" }}>·</span>
              <span style={{ color: "var(--muted)" }}>Mexicali · Tijuana · Ensenada</span>
            </div>
          </FadeItem>
        </FadeStack>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 text-center font-badge text-[10px] uppercase tracking-[0.36em]"
        style={{ color: "var(--muted)" }}
      >
        Avanzar con la flecha derecha
      </div>
    </Slide>
  );
}
