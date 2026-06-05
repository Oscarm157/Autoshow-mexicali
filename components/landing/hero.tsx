"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { event, hero, brands } from "@/lib/landing-content";
import { BrandMark } from "./brand-mark";

const heroBrands = brands.filter((b) => b.tier === "hero");

export function Hero() {
  const heroImage = "/hero/hero-road.webp";
  const heroAlt = "Carretera de Baja California al atardecer";

  return (
    <section
      id="top"
      className="relative flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(var(--l-bg-rgb),0.97) 0%, rgba(var(--l-bg-rgb),0.85) 50%, rgba(var(--l-bg-rgb),0.5) 75%, rgba(var(--l-bg-rgb),0.85) 100%)",
          }}
        />
      </div>


      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full pt-32 md:pt-40 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-7"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5"
              style={{
                background: "var(--l-ink)",
                color: "var(--l-bg)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot"
                style={{ background: "var(--l-mustard)" }}
              />
              <span className="l-mono text-[10px] tracking-[0.28em] uppercase">
                {hero.badge}
              </span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-12 h-px" style={{ background: "var(--l-ink)" }} />
              <span
                className="l-mono text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "var(--l-ink)" }}
              >
                {event.dateShort}
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="l-display max-w-[18ch]"
            style={{
              fontSize: "clamp(40px, 6.4vw, 96px)",
              color: "var(--l-ink)",
              lineHeight: 0.98,
            }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-2xl text-[18px] md:text-[22px] leading-[1.5] mt-7 font-medium"
            style={{ color: "var(--l-ink)" }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-4 max-w-3xl mt-10 pt-7"
            style={{ borderTop: "1px solid var(--l-rule-strong)" }}
          >
            {hero.meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-1.5">
                <span
                  className="l-mono text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "var(--l-muted)" }}
                >
                  {m.label}
                </span>
                <span
                  className="l-mono text-[13px] tracking-[0.04em] uppercase"
                  style={{ color: "var(--l-ink)" }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
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
              <span className="l-eyebrow" style={{ color: "var(--l-bg)" }}>
                {event.ctaPrimary}
              </span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#concepto"
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
            background: "rgba(var(--l-ink-rgb),0.94)",
            color: "var(--l-bg)",
            borderColor: "var(--l-mustard)",
          }}
        >
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <span
              className="l-mono text-[10px] tracking-[0.32em] uppercase shrink-0"
              style={{ color: "var(--l-mustard)" }}
            >
              Marcas confirmadas
            </span>
            <span
              className="hidden md:block w-px h-7"
              style={{ background: "rgba(var(--l-bg-rgb),0.2)" }}
            />
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 flex-1">
              {heroBrands.map((b) => (
                <span
                  key={b.slug}
                  className="opacity-95"
                  style={{ color: "var(--l-bg)" }}
                >
                  <BrandMark slug={b.slug} size={33} />
                </span>
              ))}
              <span
                className="l-mono text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "var(--l-mustard)" }}
              >
                + 8 marcas más
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
