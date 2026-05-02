"use client";

import { Reveal, RevealStack, RevealItem } from "./reveal";
import { lineup, brands } from "@/lib/landing-content";
import { Marquee } from "./marquee";
import { BrandMark } from "./brand-mark";

export function Lineup() {
  return (
    <section
      id="lineup"
      className="l-dark relative py-24 md:py-36 overflow-hidden"
    >
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-12 md:mb-16">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {lineup.eyebrow}
                </span>
              </div>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-7">
            <RevealItem>
              <h2
                className="l-display"
                style={{
                  fontSize: "clamp(36px, 6vw, 80px)",
                  color: "var(--l-ink)",
                  lineHeight: 1,
                }}
              >
                {lineup.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.55] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {lineup.intro}
              </p>
            </RevealItem>
          </RevealStack>
        </div>
      </div>

      <Reveal>
        <div
          className="border-y py-6 md:py-7 mb-10 md:mb-14"
          style={{
            borderColor: "var(--l-rule-strong)",
            background: "var(--l-bg-deep)",
          }}
        >
          <Marquee speed={48}>
            {brands.map((b) => (
              <span
                key={b.slug}
                className="inline-flex items-center gap-10"
                style={{ color: "var(--l-ink)" }}
              >
                <BrandMark slug={b.slug} size={28} />
                <span style={{ color: "var(--l-mustard)", opacity: 0.6 }}>·</span>
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <RevealStack
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px"
          stagger={0.04}
        >
          {brands.map((b) => (
            <RevealItem key={b.slug}>
              <div
                className="aspect-[5/3] flex flex-col items-center justify-center gap-2 p-6 transition-colors hover:bg-[color:var(--l-mustard)]/8 group"
                style={{
                  background: "var(--l-bg)",
                  outline: "1px solid var(--l-rule)",
                }}
              >
                <span style={{ color: "var(--l-ink)" }}>
                  <BrandMark slug={b.slug} size={24} />
                </span>
              </div>
            </RevealItem>
          ))}

          {Array.from({ length: 4 }).map((_, i) => (
            <RevealItem key={`slot-${i}`}>
              <div
                className="aspect-[5/3] flex flex-col items-center justify-center gap-2 p-6"
                style={{
                  background: "var(--l-bg-deep)",
                  outline: "1px dashed var(--l-rule-strong)",
                }}
              >
                <span
                  className="l-display text-[24px]"
                  style={{ color: "var(--l-rule-strong)" }}
                >
                  +
                </span>
                <span
                  className="l-mono text-[9.5px] tracking-[0.26em] uppercase"
                  style={{ color: "var(--l-muted)" }}
                >
                  Por anunciar
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealStack>

        <Reveal delay={0.2}>
          <p
            className="mt-10 text-[16px] md:text-[18px] italic max-w-xl"
            style={{ color: "var(--l-mustard)", fontFamily: "var(--font-display)" }}
          >
            {lineup.closer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
