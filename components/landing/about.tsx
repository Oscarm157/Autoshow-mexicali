import { Reveal, RevealStack, RevealItem } from "./reveal";
import { about } from "@/lib/landing-content";

export function About() {
  return (
    <section id="evento" className="py-28 md:py-40 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {about.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /01
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-10">
            <RevealItem>
              <h2
                className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--l-ink)",
                }}
              >
                {about.title}
              </h2>
            </RevealItem>

            {about.body.map((p, i) => (
              <RevealItem key={i}>
                <p
                  className="text-[17px] md:text-[19px] leading-[1.65] max-w-3xl"
                  style={{ color: "var(--l-ink-soft)" }}
                >
                  {p}
                </p>
              </RevealItem>
            ))}

            <RevealItem>
              <div className="grid grid-cols-3 max-w-2xl mt-6 gap-px" style={{ background: "var(--l-rule)" }}>
                <Stat n="03" label="Paradas" />
                <Stat n="01" label="Día" />
                <Stat n="∞" label="Ediciones" />
              </div>
            </RevealItem>
          </RevealStack>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div
      className="flex flex-col gap-1.5 px-5 py-6"
      style={{ background: "var(--l-bg)" }}
    >
      <span
        className="l-display text-[44px] md:text-[56px]"
        style={{ color: "var(--l-mustard)" }}
      >
        {n}
      </span>
      <span className="l-mono text-[10px] tracking-[0.24em] uppercase" style={{ color: "var(--l-muted)" }}>
        {label}
      </span>
    </div>
  );
}
