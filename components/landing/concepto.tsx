"use client";

import Image from "next/image";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { concept } from "@/lib/landing-content";

export function Concepto() {
  return (
    <section
      id="concepto"
      className="py-24 md:py-32 relative"
      style={{ background: "var(--l-bg-deep)" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
              <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                {concept.eyebrow}
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-6">
            <RevealItem>
              <h2
                className="l-display max-w-[14ch]"
                style={{
                  fontSize: "clamp(28px, 4.2vw, 56px)",
                  color: "var(--l-ink)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {concept.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.55] max-w-2xl" style={{ color: "var(--l-ink-soft)" }}>
                {concept.intro}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" stagger={0.15}>
          {concept.zones.map((zone) => (
            <RevealItem key={zone.tag}>
              <ZoneCard {...zone} />
            </RevealItem>
          ))}
        </RevealStack>

      </div>
    </section>
  );
}

function ZoneCard({
  tag,
  label,
  title,
  lead,
  body,
  icon,
  photo,
}: {
  tag: string;
  label: string;
  title: string;
  lead: string;
  body: string;
  icon: string;
  photo: string;
}) {
  return (
    <article
      className="relative flex flex-col group"
      style={{ background: "var(--l-bg)", border: "1px solid var(--l-rule-strong)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.05) 0%, rgba(20,20,20,0.45) 100%)",
          }}
        />
        <div className="absolute top-5 left-5 flex items-center gap-2.5">
          <span
            className="px-2.5 py-1 l-mono text-[10px] tracking-[0.28em] uppercase"
            style={{ background: "var(--l-mustard)", color: "var(--l-ink)" }}
          >
            {tag}
          </span>
          <span
            className="px-2.5 py-1 l-mono text-[10px] tracking-[0.28em] uppercase"
            style={{
              background: "rgba(20,20,20,0.6)",
              color: "var(--l-bg)",
            }}
          >
            {label}
          </span>
        </div>
        <span
          className="material-symbols-outlined absolute bottom-5 right-5"
          style={{ fontSize: 32, color: "var(--l-bg)" }}
        >
          {icon}
        </span>
      </div>

      <div className="p-7 md:p-9 flex flex-col gap-3">
        <span className="l-mono text-[10.5px] tracking-[0.24em] uppercase" style={{ color: "var(--l-mustard)" }}>
          {lead}
        </span>
        <h3
          className="l-display"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "var(--l-ink)",
            lineHeight: 1,
          }}
        >
          {title}
        </h3>
        <p className="text-[14.5px] md:text-[15.5px] leading-[1.6]" style={{ color: "var(--l-ink-soft)" }}>
          {body}
        </p>
      </div>
    </article>
  );
}
