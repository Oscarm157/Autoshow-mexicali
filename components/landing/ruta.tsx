"use client";

import { Reveal, RevealStack, RevealItem } from "./reveal";
import { route } from "@/lib/landing-content";

export function Ruta() {
  return (
    <section
      id="ruta"
      className="l-dark relative overflow-hidden py-24 md:py-36"
    >
      <RoadDecor />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 mb-12 md:mb-20">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {route.eyebrow}
                </span>
              </div>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-7">
            <RevealItem>
              <h2
                className="l-display"
                style={{
                  fontSize: "clamp(56px, 11vw, 168px)",
                  color: "var(--l-ink)",
                  lineHeight: 0.92,
                }}
              >
                {route.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[18px] md:text-[20px] leading-[1.55] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {route.intro}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="flex flex-col" stagger={0.12}>
          {route.list.map((stop, idx) => (
            <div key={stop.city}>
              <RevealItem>
                <StopRow {...stop} index={idx} last={idx === route.list.length - 1} />
              </RevealItem>
              {idx < route.list.length - 1 && <TireTrack faded={idx >= 1} />}
            </div>
          ))}

          <RevealItem>
            <p
              className="mt-12 max-w-2xl text-[15px] italic"
              style={{ color: "var(--l-mustard)", fontFamily: "var(--font-display)" }}
            >
              {route.outro}
            </p>
          </RevealItem>
        </RevealStack>
      </div>
    </section>
  );
}

function StopRow({
  tag,
  city,
  date,
  status,
  note,
  active,
  index,
  last,
}: {
  tag: string;
  city: string;
  date: string;
  status: string;
  note: string;
  active: boolean;
  index: number;
  last: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_140px_1fr_auto] items-baseline gap-4 md:gap-12 py-7 md:py-12 group"
      style={{
        borderTop: "1px solid var(--l-rule-strong)",
        borderBottom: last ? "1px solid var(--l-rule-strong)" : "none",
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
        {tag} · {date}
      </span>

      <h3
        className="l-display"
        style={{
          fontSize: "clamp(48px, 8vw, 112px)",
          color: active ? "var(--l-ink)" : "var(--l-muted)",
          lineHeight: 0.92,
          transition: "color 240ms",
        }}
      >
        {city}
      </h3>

      <div className="flex flex-col gap-2 md:items-end col-span-2 md:col-span-1 max-w-[260px]">
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
        <span
          className="text-[13px] md:text-[14px] italic"
          style={{ color: "var(--l-ink-soft)", fontFamily: "var(--font-display)" }}
        >
          {note}
        </span>
      </div>
    </div>
  );
}

function TireTrack({ faded = false }: { faded?: boolean }) {
  return (
    <div
      className="relative h-16 md:h-24 ml-[60px] md:ml-[120px] overflow-hidden"
      aria-hidden
      style={{ opacity: faded ? 0.42 : 0.78 }}
    >
      <svg
        viewBox="0 0 600 96"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <pattern
            id={`tread-${faded ? "f" : "n"}`}
            x="0"
            y="0"
            width="14"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="9" height="6" fill="var(--l-mustard)" />
          </pattern>
        </defs>
        <path
          d="M -10 18 C 120 6, 240 70, 360 36 S 580 64, 620 30"
          fill="none"
          stroke={`url(#tread-${faded ? "f" : "n"})`}
          strokeWidth="6"
          strokeLinecap="butt"
        />
        <path
          d="M -10 28 C 120 16, 240 80, 360 46 S 580 74, 620 40"
          fill="none"
          stroke={`url(#tread-${faded ? "f" : "n"})`}
          strokeWidth="6"
          strokeLinecap="butt"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function RoadDecor() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 480 C 200 380, 400 520, 600 420 S 1000 320, 1200 380"
        fill="none"
        stroke="var(--l-mustard)"
        strokeWidth="1.4"
        strokeDasharray="2 12"
      />
      <path
        d="M 0 520 C 220 420, 420 560, 620 460 S 1000 360, 1200 420"
        fill="none"
        stroke="var(--l-ink-soft)"
        strokeWidth="0.8"
        strokeDasharray="1 14"
        opacity="0.4"
      />
    </svg>
  );
}
