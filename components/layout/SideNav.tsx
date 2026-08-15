"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sectionNav } from "@/lib/content";

export function SideNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = sectionNav
      .map((l) => document.getElementById(l.href.split("#")[1]))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-3 sm:right-6 sm:gap-4"
    >
      {sectionNav.map((l) => {
        const id = l.href.split("#")[1];
        const isActive = active === id;
        return (
          <a key={l.href} href={l.href} aria-label={l.label} aria-current={isActive ? "true" : undefined} className="group flex items-center gap-3 py-0.5">
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap rounded-full border border-border bg-bg-elevated/95 px-3 py-1 text-xs font-medium uppercase tracking-wider text-text shadow-lg backdrop-blur-sm"
                >
                  {l.label}
                </motion.span>
              )}
            </AnimatePresence>
            <span
              className={`block rounded-full transition-all ${
                isActive
                  ? "h-2.5 w-5 bg-accent"
                  : "h-1.5 w-1.5 bg-text-faint group-hover:bg-text-muted"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
