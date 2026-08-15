"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";

const ORBS = [
  { color: "var(--accent)", top: "-8%", left: "8%", size: 460, duration: 24 },
  { color: "var(--accent-2)", top: "15%", left: "68%", size: 420, duration: 28 },
  { color: "var(--accent)", top: "62%", left: "-6%", size: 380, duration: 32 },
];

export function GradientOrbs() {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const reduce = hasMounted && Boolean(prefersReduced);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {ORBS.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-[110px]"
          style={{ top: o.top, left: o.left, width: o.size, height: o.size, background: o.color }}
          animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={reduce ? undefined : { duration: o.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
