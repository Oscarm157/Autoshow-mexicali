"use client";

import { motion } from "motion/react";
import { useEdition, type Edition } from "./edition-context";

const OPTIONS: { value: Edition; label: string; sub: string }[] = [
  { value: "tierra", label: "Tierra", sub: "Desierto" },
  { value: "mar", label: "Mar", sub: "Costa" },
];

export function EditionToggle() {
  const { version, setVersion, ready } = useEdition();
  if (!ready) return null;

  return (
    <motion.div
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="fixed top-2 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 p-1"
      style={{
        background: "var(--l-bg)",
        border: "1px solid var(--l-rule-strong)",
        boxShadow: "0 6px 18px -10px rgba(0,0,0,0.35)",
      }}
    >
      {OPTIONS.map((opt) => {
        const active = version === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setVersion(opt.value)}
            className="flex flex-col items-start px-3 py-1.5 transition-colors"
            style={{
              background: active ? "var(--l-ink)" : "transparent",
              color: active ? "var(--l-bg)" : "var(--l-ink-soft)",
            }}
          >
            <span className="l-mono text-[10px] tracking-[0.24em] uppercase leading-none">
              {opt.label}
            </span>
            <span
              className="l-mono text-[8.5px] tracking-[0.22em] uppercase leading-none mt-1"
              style={{
                color: active ? "var(--l-mustard)" : "var(--l-muted)",
              }}
            >
              {opt.sub}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
