"use client";

import { motion } from "motion/react";
import { event, hero } from "@/lib/landing-content";
import { RutaShield } from "@/components/ui/ruta-shield";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-full l-grid-bg pointer-events-none opacity-60" />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-end">
          <div className="flex flex-col gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="w-10 h-px" style={{ background: "var(--l-mustard)" }} />
              <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
                {hero.eyebrow}
              </span>
            </motion.div>

            <h1
              className="l-display"
              style={{
                fontSize: "clamp(64px, 13vw, 196px)",
                color: "var(--l-ink)",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {hero.display[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block"
                style={{ color: "var(--l-mustard)" }}
              >
                {hero.display[1]}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-xl text-xl md:text-2xl leading-snug"
              style={{ color: "var(--l-ink-soft)", fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              {hero.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5 max-w-3xl pt-6"
              style={{ borderTop: "1px solid var(--l-rule-strong)" }}
            >
              <MetaCell label="Edición" value={`${event.edition} ${event.year}`} />
              <MetaCell label="Fecha" value={event.date} pending />
              <MetaCell label="Ciudad" value={event.city} />
              <MetaCell label="Venue" value={event.venue} pending />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                href="#registro"
                className="group inline-flex items-center gap-3 px-7 py-4 l-eyebrow"
                style={{
                  background: "var(--l-ink)",
                  color: "var(--l-bg)",
                }}
              >
                <span>{event.ctaPrimary}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#paradas"
                className="inline-flex items-center gap-2 l-mono uppercase text-[12px] tracking-[0.16em]"
                style={{ color: "var(--l-ink)" }}
              >
                <span aria-hidden>↓</span>
                <span>{event.ctaSecondary}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            <RutaShield size={220} number="26" />
            <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-muted)" }}>
              Ruta 26 · Edición {event.year}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3"
      >
        <span className="block w-10 h-px" style={{ background: "var(--l-rule-strong)" }} />
        <span className="l-mono text-[10px] tracking-[0.32em] uppercase" style={{ color: "var(--l-muted)" }}>
          Avanza
        </span>
        <span className="block w-10 h-px" style={{ background: "var(--l-rule-strong)" }} />
      </motion.div>
    </section>
  );
}

function MetaCell({
  label,
  value,
  pending = false,
}: {
  label: string;
  value: string;
  pending?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="l-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--l-muted)" }}>
        {label}
      </span>
      <span
        className="l-mono text-[13px] uppercase tracking-[0.06em]"
        style={{ color: pending ? "var(--l-mustard)" : "var(--l-ink)" }}
      >
        {value}
      </span>
    </div>
  );
}
