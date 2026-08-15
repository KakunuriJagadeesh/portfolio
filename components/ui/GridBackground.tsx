"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function GridBackground() {
  const reduce = Boolean(useReducedMotion());
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const smx = useSpring(mx, { stiffness: 40, damping: 20 });
  const smy = useSpring(my, { stiffness: 40, damping: 20 });
  const background = useMotionTemplate`radial-gradient(560px circle at ${smx}% ${smy}%, rgba(79,156,249,0.10), transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    function onMove(e: PointerEvent) {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="grid-bg absolute inset-0" />
      <motion.div className="absolute inset-0" style={{ background }} />
    </div>
  );
}
