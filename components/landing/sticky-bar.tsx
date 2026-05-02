"use client";

import { motion } from "motion/react";
import { stickyBar } from "@/lib/landing-content";

export function StickyBar() {
  return (
    <motion.div
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="hidden md:block w-full fixed top-0 inset-x-0 z-50"
      style={{
        background: "var(--l-ink)",
        color: "var(--l-bg)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-9 flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-7">
          {stickyBar.parts.slice(0, 3).map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: "var(--l-mustard)" }}>{p.icon}</span>
              <span className="l-mono text-[10.5px] tracking-[0.22em] uppercase">
                {p.text}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#registro"
          className="flex items-center gap-2 hover:text-[color:var(--l-mustard)] transition-colors"
        >
          <span className="l-mono text-[10.5px] tracking-[0.22em] uppercase">
            {stickyBar.parts[3].text}
          </span>
          <span aria-hidden style={{ color: "var(--l-mustard)" }}>
            {stickyBar.parts[3].icon}
          </span>
        </a>
      </div>
    </motion.div>
  );
}
