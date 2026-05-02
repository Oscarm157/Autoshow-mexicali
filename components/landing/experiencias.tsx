"use client";

import Image from "next/image";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { experiences } from "@/lib/landing-content";

const photos = [
  "/hero/gallery-toyota.webp",
  "/hero/gallery-mazda.webp",
  "/hero/gallery-polaris.webp",
];

export function Experiencias() {
  return (
    <section id="experiencias" className="py-24 md:py-36 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 mb-14 md:mb-20">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px" style={{ background: "var(--l-mustard)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                  {experiences.eyebrow}
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
                  lineHeight: 0.96,
                }}
              >
                {experiences.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-[17px] md:text-[19px] leading-[1.55] max-w-xl" style={{ color: "var(--l-ink-soft)" }}>
                {experiences.body}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" stagger={0.12}>
          {experiences.items.map((item, idx) => (
            <RevealItem key={item.tag}>
              <ExperienceCard {...item} photo={photos[idx]} />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function ExperienceCard({
  tag,
  icon,
  title,
  lead,
  body,
  photo,
}: {
  tag: string;
  icon: string;
  title: string;
  lead: string;
  body: string;
  photo: string;
}) {
  return (
    <article
      className="relative flex flex-col group"
      style={{
        background: "var(--l-bg-deep)",
        border: "1px solid var(--l-rule-strong)",
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.05) 0%, rgba(20,20,20,0.5) 100%)",
          }}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 l-mono text-[10px] tracking-[0.28em] uppercase"
            style={{ background: "var(--l-mustard)", color: "var(--l-ink)" }}
          >
            {tag}
          </span>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 22, color: "var(--l-bg)" }}
          >
            {icon}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-8 flex flex-col gap-3">
        <span
          className="l-mono text-[10.5px] tracking-[0.24em] uppercase"
          style={{ color: "var(--l-mustard)" }}
        >
          {lead}
        </span>
        <h3
          className="l-display text-[30px] md:text-[36px]"
          style={{ color: "var(--l-ink)" }}
        >
          {title}
        </h3>
        <p className="text-[14.5px] leading-[1.55]" style={{ color: "var(--l-ink-soft)" }}>
          {body}
        </p>
      </div>
    </article>
  );
}
