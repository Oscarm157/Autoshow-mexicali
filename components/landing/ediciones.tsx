import { Reveal, RevealStack, RevealItem } from "./reveal";
import { editions } from "@/lib/landing-content";

export function Ediciones() {
  return (
    <section
      id="ediciones"
      className="l-dark py-28 md:py-44 relative"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16 md:mb-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-px"
                  style={{ background: "var(--l-mustard)" }}
                />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {editions.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /05
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-8">
            <RevealItem>
              <h2
                className="text-[40px] sm:text-[56px] md:text-[80px] leading-[0.98] tracking-[-0.025em]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--l-ink)",
                }}
              >
                {editions.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.65] max-w-3xl" style={{ color: "var(--l-ink-soft)" }}>
                {editions.body}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="flex flex-col" stagger={0.12}>
          {editions.list.map((e, idx) => (
            <RevealItem key={e.city}>
              <EditionRow
                tag={e.tag}
                city={e.city}
                status={e.status}
                note={e.note}
                index={idx}
                last={idx === editions.list.length - 1}
                active={idx === 0}
              />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function EditionRow({
  tag,
  city,
  status,
  note,
  index,
  last,
  active,
}: {
  tag: string;
  city: string;
  status: string;
  note: string;
  index: number;
  last: boolean;
  active: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_120px_1fr_auto] items-baseline gap-4 md:gap-10 py-8 md:py-12 group"
      style={{
        borderTop: "1px solid var(--l-rule)",
        borderBottom: last ? "1px solid var(--l-rule)" : "none",
      }}
    >
      <span
        className="l-mono text-[11px] tracking-[0.28em] uppercase"
        style={{ color: active ? "var(--l-mustard)" : "var(--l-muted)" }}
      >
        /{String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="hidden md:inline l-mono text-[11px] tracking-[0.28em] uppercase"
        style={{ color: "var(--l-muted)" }}
      >
        {tag}
      </span>

      <h3
        className="l-display text-[44px] sm:text-[64px] md:text-[88px]"
        style={{
          color: active ? "var(--l-ink)" : "var(--l-muted)",
          transition: "color 240ms",
        }}
      >
        {city}
      </h3>

      <div className="flex flex-col gap-2 md:items-end col-span-2 md:col-span-1">
        <span
          className="l-mono text-[10px] tracking-[0.28em] uppercase inline-flex items-center gap-2"
          style={{ color: active ? "var(--l-mustard)" : "var(--l-muted)" }}
        >
          {active && (
            <span
              className="pulse-dot w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "var(--l-mustard)" }}
            />
          )}
          {status}
        </span>
        <span className="text-[13px] md:text-[14px] italic max-w-[260px]" style={{
          color: "var(--l-ink-soft)",
          fontFamily: "var(--font-display)",
        }}>
          {note}
        </span>
      </div>
    </div>
  );
}
