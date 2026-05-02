import { Reveal, RevealStack, RevealItem } from "./reveal";
import { stops } from "@/lib/landing-content";
import { paradas } from "@/lib/brand";

export function Paradas() {
  return (
    <section
      id="paradas"
      className="py-28 md:py-40 relative"
      style={{ background: "var(--l-bg-deep)" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16 md:mb-20">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {stops.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /02
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-8">
            <RevealItem>
              <h2
                className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", color: "var(--l-ink)" }}
              >
                {stops.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.65] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {stops.description}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="grid grid-cols-1 md:grid-cols-3" stagger={0.12}>
          {paradas.map((p, idx) => (
            <RevealItem key={p.slug}>
              <ParadaCard
                km={p.km}
                title={p.name}
                subtitle={p.subtitle}
                vehicle={p.vehicle}
                tone={p.tone}
                index={idx}
                last={idx === paradas.length - 1}
              />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function ParadaCard({
  km,
  title,
  subtitle,
  vehicle,
  tone,
  index,
  last,
}: {
  km: string;
  title: string;
  subtitle: string;
  vehicle: string;
  tone: string;
  index: number;
  last: boolean;
}) {
  return (
    <div
      className="relative flex flex-col gap-7 p-7 md:p-9 min-h-[420px]"
      style={{
        background: "var(--l-bg)",
        borderTop: "1px solid var(--l-rule-strong)",
        borderRight: last ? "1px solid var(--l-rule-strong)" : "none",
        borderLeft: index === 0 ? "1px solid var(--l-rule-strong)" : "none",
        borderBottom: "1px solid var(--l-rule-strong)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="l-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: "var(--l-mustard)" }}>
          {km}
        </span>
        <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
          /0{index + 1}
        </span>
      </div>

      <div className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />

      <div className="flex flex-col gap-2">
        <h3
          className="l-display text-[36px] md:text-[44px]"
          style={{ color: "var(--l-ink)" }}
        >
          {title}
        </h3>
        <p className="text-[14px]" style={{ color: "var(--l-ink-soft)" }}>
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-auto pt-6" style={{ borderTop: "1px solid var(--l-rule)" }}>
        <p
          className="text-[14px] leading-[1.55] italic"
          style={{ color: "var(--l-olive)", fontFamily: "var(--font-display)" }}
        >
          {tone}
        </p>
        <span className="l-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "var(--l-muted)" }}>
          {vehicle}
        </span>
      </div>
    </div>
  );
}
