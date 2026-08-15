"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  id?: string;
};

export function MagneticButton({ href, onClick, children, className, target, rel, download, id }: MagneticButtonProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 16, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = elRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (href) {
    return (
      <motion.a
        id={id}
        ref={(el) => {
          elRef.current = el;
        }}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type="button"
      ref={(el) => {
        elRef.current = el;
      }}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}
