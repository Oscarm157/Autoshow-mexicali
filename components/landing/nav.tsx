"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { nav, event } from "@/lib/landing-content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const editionLogo = "/autoshow-logo-arena.png";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 md:top-9 inset-x-0 z-40"
      style={{
        background: scrolled ? "rgba(var(--l-bg-rgb), 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px) saturate(120%)" : "none",
        borderBottom: scrolled ? "1px solid var(--l-rule)" : "1px solid transparent",
        transition: "background 280ms ease, border-color 280ms ease, backdrop-filter 280ms ease",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label={event.brand}>
          <Image
            src={editionLogo}
            alt={event.brand}
            width={240}
            height={96}
            priority
            className="h-[72px] md:h-[88px] w-auto object-contain"
          />
          <span
            className="hidden sm:inline-block w-6 h-px"
            style={{ background: "var(--l-rule-strong)" }}
          />
          <span
            className="hidden sm:inline l-mono text-[10.5px] tracking-[0.24em] uppercase"
            style={{ color: "var(--l-mustard)" }}
          >
            {event.edition}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="l-mono text-[12px] uppercase tracking-[0.16em] hover:text-[color:var(--l-mustard)] transition-colors"
              style={{ color: "var(--l-ink-soft)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#registro"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 group"
            style={{
              background: "var(--l-ink)",
              color: "var(--l-bg)",
            }}
          >
            <span className="l-eyebrow" style={{ color: "var(--l-bg)" }}>
              {nav.cta}
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            style={{ border: "1px solid var(--l-rule-strong)" }}
          >
            <span
              className="block w-4 h-[1.5px]"
              style={{
                background: "var(--l-ink)",
                transform: open ? "rotate(45deg) translate(2px, 2px)" : "none",
                transition: "transform 200ms",
              }}
            />
            <span
              className="block w-4 h-[1.5px]"
              style={{
                background: "var(--l-ink)",
                opacity: open ? 0 : 1,
                transition: "opacity 200ms",
              }}
            />
            <span
              className="block w-4 h-[1.5px]"
              style={{
                background: "var(--l-ink)",
                transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none",
                transition: "transform 200ms",
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: "var(--l-bg)",
              borderTop: "1px solid var(--l-rule)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="l-mono text-sm uppercase tracking-[0.16em]"
                  style={{ color: "var(--l-ink)" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#registro"
                onClick={() => setOpen(false)}
                className="l-eyebrow inline-flex items-center gap-2 mt-2"
                style={{ color: "var(--l-mustard)" }}
              >
                <span>{nav.cta}</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
