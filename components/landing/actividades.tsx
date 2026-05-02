import { Reveal, RevealStack, RevealItem } from "./reveal";
import { activities } from "@/lib/landing-content";

export function Actividades() {
  return (
    <section id="actividades" className="py-24 md:py-36 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-14 md:mb-16">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {activities.eyebrow}
                </span>
              </div>
              <span
                className="inline-flex w-fit l-mono text-[10px] tracking-[0.28em] uppercase mt-3 px-2.5 py-1"
                style={{
                  background: "var(--l-ink)",
                  color: "var(--l-bg)",
                }}
              >
                {activities.status}
              </span>
            </div>
          </Reveal>
          <RevealStack className="flex flex-col gap-7">
            <RevealItem>
              <h2
                className="l-display"
                style={{
                  fontSize: "clamp(40px, 7vw, 96px)",
                  color: "var(--l-ink)",
                  lineHeight: 0.95,
                }}
              >
                {activities.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.55] max-w-xl" style={{ color: "var(--l-ink-soft)" }}>
                {activities.body}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" stagger={0.06}>
          {activities.items.map((item, idx) => (
            <RevealItem key={idx}>
              <ActivityTile icon={item.icon} text={item.text} index={idx} />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function ActivityTile({
  icon,
  text,
  index,
}: {
  icon: string;
  text: string;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div
      className="flex items-center gap-5 px-7 py-9 group"
      style={{
        background: "var(--l-bg)",
        outline: "1px solid var(--l-rule-strong)",
      }}
    >
      <span
        className="material-symbols-outlined transition-colors"
        style={{
          fontSize: 36,
          color: "var(--l-mustard)",
        }}
      >
        {icon}
      </span>
      <div className="flex flex-col gap-1.5">
        <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
          /{num}
        </span>
        <span className="text-[17px] md:text-[18px]" style={{ color: "var(--l-ink)", fontFamily: "var(--font-display)" }}>
          {text}
        </span>
      </div>
    </div>
  );
}
