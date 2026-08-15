"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";

export function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const reduce = hasMounted && Boolean(prefersReduced);
  const [display, setDisplay] = useState(target === null ? target : 0);

  useEffect(() => {
    if (target === null || !hasMounted || !inView) return;
    const controls = animate(0, target, {
      duration: reduce ? 0 : 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce, hasMounted]);

  return (
    <span ref={ref} className={className}>
      {target !== null ? display : value}
      {suffix}
    </span>
  );
}
