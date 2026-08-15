"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : ""
      }`}
    >
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ scaleX: progress }}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-text">
          {profile.name}
        </a>
        <nav className="hidden gap-8 text-sm text-text-muted sm:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-text ${active === l.href.slice(1) ? "text-accent" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="space-y-[5px]">
            <span className={`block h-[1.5px] w-4 bg-text transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-text transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-text-muted hover:text-text"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
