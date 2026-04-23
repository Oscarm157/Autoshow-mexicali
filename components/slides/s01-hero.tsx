import { Slide } from "../slide";
import { FadeStack, FadeItem, HeroWord } from "../ui/motion-primitives";
import { brand } from "@/lib/brand";

export function S01Hero() {
  return (
    <Slide mode="dark" centered className="relative overflow-hidden">
      {/* Warm sun glow bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 700px at 50% 130%, rgba(255,107,53,0.30) 0%, rgba(255,201,60,0.14) 35%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 warm-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-10 items-center text-center">
        <FadeStack className="flex flex-col gap-8 items-center">
          <FadeItem>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "var(--accent-light)" }}
            >
              Bravo Publicidad · Propuesta de marca · 2026
            </span>
          </FadeItem>

          <FadeItem>
            <h1 className="font-festival leading-[0.9] text-[56px] sm:text-[88px] md:text-[120px] lg:text-[148px] tracking-tight">
              <HeroWord delay={0.15}>
                <span
                  style={{
                    color: "#FF6B35",
                    textShadow:
                      "3px 3px 0 #E64A15, 6px 6px 0 rgba(30,30,30,0.9)",
                  }}
                >
                  AUTOSHOW
                </span>
              </HeroWord>
              <br />
              <HeroWord delay={0.4}>
                <span
                  style={{
                    color: "#FFC93C",
                    fontSize: "0.5em",
                    letterSpacing: "0.12em",
                    fontWeight: 400,
                  }}
                >
                  · MEXICALI ·
                </span>
              </HeroWord>
            </h1>
          </FadeItem>

          <FadeItem>
            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted">
              Sistema visual evergreen.{" "}
              <em className="italic" style={{ color: "var(--accent-light)" }}>
                Un sol, una familia, tres zonas, toda Baja.
              </em>
            </p>
          </FadeItem>

          <FadeItem>
            <div className="flex items-center gap-3 mt-4 text-xs uppercase tracking-[0.22em]">
              <span
                className="pulse-dot w-1.5 h-1.5 rounded-full"
                style={{ background: "#FFC93C" }}
              />
              <span style={{ color: "var(--accent-light)" }}>
                {brand.route}
              </span>
              <span style={{ color: "var(--muted-light)" }}>·</span>
              <span style={{ color: "var(--muted)" }}>
                {brand.territory}
              </span>
            </div>
          </FadeItem>
        </FadeStack>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 text-center text-[10px] uppercase tracking-[0.28em]"
        style={{ color: "var(--muted)" }}
      >
        Presiona → para comenzar
      </div>
    </Slide>
  );
}
