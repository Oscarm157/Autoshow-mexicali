"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex shrink-0 items-center gap-16 pr-16"
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ minWidth: "200%" }}
        >
          <div className="flex items-center gap-16">{children}</div>
          <div className="flex items-center gap-16" aria-hidden>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
