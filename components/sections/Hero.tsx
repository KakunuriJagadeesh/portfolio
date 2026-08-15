"use client";

import { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { profile, stats } from "@/lib/content";

export function Hero() {
  const [resumeOk, setResumeOk] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(profile.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && !res.ok) setResumeOk(false);
      })
      .catch(() => {
        if (!cancelled) setResumeOk(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll
          index={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location}
        </RevealOnScroll>

        <RevealOnScroll index={1}>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll
          index={2}
          className="mt-5 flex flex-wrap items-baseline gap-x-3 text-xl text-text-muted sm:text-2xl"
        >
          <span>{profile.title}</span>
          <span className="text-text-faint">/</span>
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            {profile.tagline}
          </span>
        </RevealOnScroll>

        <RevealOnScroll
          index={3}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:text-lg"
        >
          {profile.summary}
        </RevealOnScroll>

        <RevealOnScroll index={4} className="mt-9 flex flex-wrap gap-3">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#06060a]"
          >
            Get in touch
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </MagneticButton>
          <MagneticButton
            href="#roadmap"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-border-strong"
          >
            View roadmap
          </MagneticButton>
          {resumeOk && (
            <MagneticButton
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-border-strong"
            >
              Résumé
            </MagneticButton>
          )}
        </RevealOnScroll>

        <ResumeModal
          open={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          resumeUrl={profile.resumeUrl}
          fileName="Jagadeesh_Kakunuri_Resume.pdf"
        />

        <RevealOnScroll index={5} className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-text sm:text-4xl">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1 text-xs text-text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
