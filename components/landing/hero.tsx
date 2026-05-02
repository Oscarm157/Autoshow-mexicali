"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { event, hero, brands } from "@/lib/landing-content";
import { BrandMark } from "./brand-mark";

const heroBrands = brands.filter((b) => b.tier === "hero");

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-road.webp"
          alt="Carretera de Baja California al atardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(239,233,221,0.92) 0%, rgba(239,233,221,0.55) 38%, rgba(239,233,221,0.25) 60%, rgba(239,233,221,0.78) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 70% 100%, rgba(184,137,58,0.18), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 max-w-[1320px] mx-auto px-6 md:px-10 w-full pt-20 md:pt-28 pb-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5"
              style={{
                background: "var(--l-ink)",
                color: "var(--l-bg)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "var(--l-mustard)" }} />
              <span className="l-mono text-[10px] tracking-[0.32em] uppercase">
                {hero.badge}
              </span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-12 h-px" style={{ background: "var(--l-ink)" }} />
              <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-ink)" }}>
                {event.dateShort}
              </span>
            </span>
          </motion.div>

          <h1
            className="l-display"
            style={{
              fontSize: "clamp(72px, 14.5vw, 240px)",
              color: "var(--l-ink)",
              lineHeight: 0.88,
            }}
          >
            {hero.display.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.95, delay: 0.18 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="block"
                style={i === 1 ? { color: "var(--l-mustard)" } : undefined}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="max-w-2xl text-[19px] md:text-[24px] leading-snug mt-10"
            style={{
              color: "var(--l-ink)",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
            }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <a
              href="#registro"
              className="group inline-flex items-center gap-3 px-7 py-4"
              style={{
                background: "var(--l-ink)",
                color: "var(--l-bg)",
              }}
            >
              <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                {event.ctaPrimary}
              </span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#evento"
              className="inline-flex items-center gap-2 l-mono uppercase text-[12px] tracking-[0.18em]"
              style={{ color: "var(--l-ink)" }}
            >
              <span aria-hidden>↓</span>
              <span>{event.ctaSecondary}</span>
            </a>
          </motion.div>
        </div>

        <div
          className="relative z-10 border-t"
          style={{
            background: "rgba(20,20,20,0.92)",
            color: "var(--l-bg)",
            borderColor: "var(--l-mustard)",
          }}
        >
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-mustard)" }}>
                {hero.signage.label}
              </span>
              <span className="l-display text-[22px]" style={{ color: "var(--l-bg)" }}>
                {hero.signage.city}
              </span>
            </div>
            <span
              className="hidden md:block w-px h-8"
              style={{ background: "rgba(239,233,221,0.2)" }}
            />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 flex-1">
              {heroBrands.map((b) => (
                <span
                  key={b.slug}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ color: "var(--l-bg)" }}
                >
                  <BrandMark slug={b.slug} size={22} />
                </span>
              ))}
              <span
                className="l-mono text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "var(--l-mustard)" }}
              >
                · y 8 marcas más
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
