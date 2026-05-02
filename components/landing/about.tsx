"use client";

import Image from "next/image";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { about } from "@/lib/landing-content";

export function About() {
  return (
    <section id="evento" className="py-24 md:py-36 relative overflow-hidden">
      <Decor />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-24 items-start">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {about.eyebrow}
                </span>
              </div>
            </Reveal>

            <RevealStack className="flex flex-col gap-9">
              <RevealItem>
                <h2
                  className="l-display"
                  style={{
                    fontSize: "clamp(32px, 5vw, 64px)",
                    color: "var(--l-ink)",
                    lineHeight: 1.02,
                  }}
                >
                  {about.title}
                </h2>
              </RevealItem>

              {about.body.map((p, i) => (
                <RevealItem key={i}>
                  <p
                    className="text-[18px] md:text-[21px] leading-[1.55] max-w-2xl"
                    style={{ color: "var(--l-ink-soft)" }}
                  >
                    {p}
                  </p>
                </RevealItem>
              ))}

              <RevealItem>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {about.pills.map((pill, i) => (
                    <span
                      key={pill}
                      className="l-mono text-[10.5px] tracking-[0.16em] uppercase px-3.5 py-2"
                      style={{
                        background: i % 2 === 0 ? "var(--l-ink)" : "transparent",
                        color: i % 2 === 0 ? "var(--l-bg)" : "var(--l-ink)",
                        border: i % 2 === 0 ? "none" : "1px solid var(--l-rule-strong)",
                        transform: i % 3 === 1 ? "rotate(-1.2deg)" : i % 3 === 2 ? "rotate(0.8deg)" : "none",
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </RevealItem>
            </RevealStack>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/hero/about-polaris.webp"
                alt="Polaris RZR en mirador de Baja California"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute -top-4 -left-4 px-4 py-2 rotate-[-3deg]"
                style={{
                  background: "var(--l-mustard)",
                  color: "var(--l-ink)",
                }}
              >
                <span className="l-mono text-[10.5px] tracking-[0.24em] uppercase">
                  Modelos nuevos
                </span>
              </div>
              <div
                className="absolute -bottom-3 -right-3 px-4 py-2 rotate-[2deg]"
                style={{
                  background: "var(--l-ink)",
                  color: "var(--l-bg)",
                }}
              >
                <span className="l-mono text-[10.5px] tracking-[0.24em] uppercase">
                  Mexicali · 14 NOV
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Decor() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 320"
      className="absolute -top-10 right-0 w-[60%] max-w-[800px] opacity-40 pointer-events-none"
    >
      <path
        d="M -50 200 C 200 80, 400 280, 600 160 S 1000 80, 1300 200"
        fill="none"
        stroke="var(--l-mustard)"
        strokeWidth="1.2"
        strokeDasharray="6 8"
        opacity="0.6"
      />
    </svg>
  );
}
