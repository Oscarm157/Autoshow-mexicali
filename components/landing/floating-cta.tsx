"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { floatingCta } from "@/lib/landing-content";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const formEl = document.getElementById("registro");
      if (!formEl) {
        setVisible(y > 280);
        return;
      }
      const rect = formEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      setVisible(y > 280 && !inView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#registro"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed left-4 right-4 bottom-4 z-[55] flex items-center justify-between gap-4 px-5 py-4 group"
          style={{
            background: "var(--l-ink)",
            color: "var(--l-bg)",
            boxShadow: "0 18px 36px -12px rgba(0,0,0,0.45)",
          }}
        >
          <div className="flex flex-col gap-0.5">
            <span className="l-eyebrow" style={{ color: "var(--l-mustard)" }}>
              {floatingCta.primary}
            </span>
            <span
              className="l-mono text-[10px] tracking-[0.24em] uppercase"
              style={{ color: "var(--l-bg)", opacity: 0.7 }}
            >
              {floatingCta.secondary}
            </span>
          </div>
          <span
            aria-hidden
            className="l-display text-[28px] transition-transform group-hover:translate-x-1"
            style={{ color: "var(--l-mustard)" }}
          >
            →
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
