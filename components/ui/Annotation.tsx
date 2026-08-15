"use client";

import { motion } from "framer-motion";

type AnnotationProps = {
  text: string;
  className?: string;
  rotate?: number;
  delay?: number;
  circled?: boolean;
};

export function Annotation({ text, className, rotate = 0, delay = 0, circled = false }: AnnotationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate }}
      className={`pointer-events-none absolute select-none whitespace-nowrap font-hand text-lg text-text-muted/90 sm:text-xl ${className ?? ""}`}
    >
      {circled ? (
        <span className="relative inline-block px-3 py-1.5">
          {text}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6,30 C5,12 28,2 55,3 C85,4 97,14 95,31 C93,49 68,58 38,57 C13,56 7,47 6,30 Z"
              stroke="var(--accent)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ) : (
        text
      )}
    </motion.div>
  );
}
