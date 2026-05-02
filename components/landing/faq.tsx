"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealStack, RevealItem } from "./reveal";
import { faq } from "@/lib/landing-content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 md:py-40 relative"
      style={{ background: "var(--l-bg-deep)" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
          <Reveal>
            <div className="flex flex-col gap-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: "var(--l-olive)" }} />
                <span className="l-eyebrow" style={{ color: "var(--l-olive)" }}>
                  {faq.eyebrow}
                </span>
              </div>
              <span className="l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-muted)" }}>
                /07
              </span>
              <h2
                className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mt-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--l-ink)" }}
              >
                {faq.title}
              </h2>
            </div>
          </Reveal>

          <RevealStack className="flex flex-col" stagger={0.06}>
            {faq.items.map((item, idx) => (
              <RevealItem key={idx}>
                <FaqItem
                  q={item.q}
                  a={item.a}
                  isOpen={open === idx}
                  onToggle={() => setOpen(open === idx ? null : idx)}
                  index={idx}
                  last={idx === faq.items.length - 1}
                />
              </RevealItem>
            ))}
          </RevealStack>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
  last,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  last: boolean;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--l-rule-strong)",
        borderBottom: last ? "1px solid var(--l-rule-strong)" : "none",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left group"
      >
        <div className="flex items-start gap-5 md:gap-7 flex-1">
          <span
            className="l-mono text-[10px] tracking-[0.28em] uppercase pt-1.5"
            style={{ color: isOpen ? "var(--l-mustard)" : "var(--l-muted)" }}
          >
            /{String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="text-[18px] md:text-[22px] leading-[1.3] max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--l-ink)",
            }}
          >
            {q}
          </span>
        </div>
        <span
          className="l-display text-[24px] shrink-0 mt-1"
          style={{
            color: isOpen ? "var(--l-mustard)" : "var(--l-ink)",
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "transform 240ms ease, color 240ms ease",
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 md:pb-8 pl-8 md:pl-[58px] pr-12 max-w-2xl">
              <p className="text-[15px] md:text-[16px] leading-[1.65]" style={{ color: "var(--l-ink-soft)" }}>
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
