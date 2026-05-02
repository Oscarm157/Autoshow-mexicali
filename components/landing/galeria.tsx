"use client";

import Image from "next/image";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { gallery } from "@/lib/landing-content";

const images = [
  { src: "/hero/hero-road.webp", alt: "Carretera de la Rumorosa al atardecer", aspect: "aspect-[16/10]", span: "md:col-span-8" },
  { src: "/hero/gallery-toyota.webp", alt: "SUV Toyota 2026 en mirador de Baja California", aspect: "aspect-[3/4]", span: "md:col-span-4 md:row-span-2" },
  { src: "/hero/gallery-mazda.webp", alt: "Mazda CX-50 en carretera costera de Baja", aspect: "aspect-[4/3]", span: "md:col-span-4" },
  { src: "/hero/gallery-polaris.webp", alt: "Polaris RZR en mirador del desierto de Baja", aspect: "aspect-[4/3]", span: "md:col-span-4" },
];

export function Galeria() {
  return (
    <section id="galeria" className="py-28 md:py-40 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-12 md:mb-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {gallery.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /06
              </span>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col gap-6">
            <RevealItem>
              <h2
                className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", color: "var(--l-ink)" }}
              >
                {gallery.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p
                className="text-[14px] md:text-[15px] italic max-w-xl"
                style={{ color: "var(--l-muted)", fontFamily: "var(--font-display)" }}
              >
                {gallery.caption}
              </p>
            </RevealItem>
          </RevealStack>
        </div>

        <RevealStack className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4" stagger={0.1}>
          {images.map((img, idx) => (
            <RevealItem key={img.src} className={img.span}>
              <ImageTile {...img} index={idx} />
            </RevealItem>
          ))}
        </RevealStack>
      </div>
    </section>
  );
}

function ImageTile({
  src,
  alt,
  aspect,
  index,
}: {
  src: string;
  alt: string;
  aspect: string;
  index: number;
}) {
  return (
    <figure
      className={`relative w-full ${aspect} overflow-hidden`}
      style={{ background: "var(--l-bg-deep)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        onError={(e) => {
          // graceful fallback if Replicate image not yet generated
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <figcaption className="absolute bottom-3 left-3 flex items-center gap-2">
        <span
          className="l-mono text-[9px] tracking-[0.28em] uppercase px-2 py-1"
          style={{ background: "var(--l-bg)", color: "var(--l-ink)" }}
        >
          /0{index + 1}
        </span>
      </figcaption>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ outline: "1px solid var(--l-rule)" }}
      />
    </figure>
  );
}
