"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpStagger, viewportOnce } from "@/lib/motion";
import { useHasMounted } from "@/lib/useHasMounted";

type RevealOnScrollProps = {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

export function RevealOnScroll({ children, index = 0, className, as = "div" }: RevealOnScrollProps) {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const reduce = hasMounted && Boolean(prefersReduced);
  const Comp = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUpStagger(index)}
      className={className}
    >
      {children}
    </Comp>
  );
}
