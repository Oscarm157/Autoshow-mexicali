import { Reveal, RevealStack, RevealItem } from "./reveal";
import { lineup } from "@/lib/landing-content";

export function Lineup() {
  return (
    <section id="lineup" className="py-28 md:py-40 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16 md:mb-20">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {lineup.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /03
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-8">
            <RevealItem>
              <h2
                className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", color: "var(--l-ink)" }}
              >
                {lineup.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <div className="flex flex-wrap items-baseline gap-3">
                <span
                  className="l-mono text-[11px] tracking-[0.32em] uppercase px-3 py-1.5"
                  style={{ background: "var(--l-mustard)", color: "var(--l-bg)" }}
                >
                  {lineup.status}
                </span>
                <span className="l-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--l-muted)" }}>
                  Próxima publicación
                </span>
              </div>
            </RevealItem>
            <RevealItem>
              <p className="text-[16px] md:text-[18px] leading-[1.65] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {lineup.body}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px"
          stagger={0.04}
        >
          {Array.from({ length: lineup.slots }).map((_, i) => (
            <RevealItem key={i}>
              <SlotCard index={i} />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function SlotCard({ index }: { index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div
      className="aspect-[4/3] flex flex-col items-center justify-center gap-3 relative"
      style={{
        background: "var(--l-bg-deep)",
        outline: "1px solid var(--l-rule)",
      }}
    >
      <span
        className="l-mono text-[10px] tracking-[0.32em] uppercase"
        style={{ color: "var(--l-muted)" }}
      >
        Slot {num}
      </span>
      <span
        className="l-display text-[28px]"
        style={{ color: "var(--l-rule-strong)" }}
      >
        ◇
      </span>
      <span
        className="l-mono text-[9px] tracking-[0.28em] uppercase"
        style={{ color: "var(--l-muted)" }}
      >
        Por anunciar
      </span>
    </div>
  );
}
