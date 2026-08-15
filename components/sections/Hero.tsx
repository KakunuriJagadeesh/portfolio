"use client";

import { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { Annotation } from "@/components/ui/Annotation";
import { profile, stats } from "@/lib/content";

const [heroBefore, heroAfter] = profile.heroParagraph.split("agentic AI");

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
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Scattered annotations — desktop only, drawn from real About/Services copy */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Annotation text="Idempotent by default" className="right-[14%] top-[20%]" rotate={-4} delay={0.9} />
        <Annotation
          text="Boring in production — on purpose"
          circled
          className="right-[6%] top-[34%]"
          rotate={2}
          delay={1.05}
        />
        <Annotation text="Fails loudly, recovers gracefully" className="right-[16%] top-[48%]" rotate={-2} delay={1.2} />
        <Annotation text="Agents with a job, not a demo" className="right-[8%] top-[62%]" rotate={-3} delay={1.3} />
        <Annotation text="On-call for what I build" className="right-[14%] top-[75%]" rotate={3} delay={1.4} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <RevealOnScroll
          index={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location} · Open to senior backend &amp; agentic AI roles
        </RevealOnScroll>

        <RevealOnScroll index={1} className="max-w-2xl">
          <h1 className="text-balance font-serif text-4xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.heroHeadline}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll
          index={2}
          className="mt-4 max-w-xl text-balance font-serif text-base leading-relaxed text-text-muted sm:text-lg"
        >
          {heroBefore}
          <strong className="font-semibold text-text">agentic AI</strong>
          {heroAfter}
        </RevealOnScroll>

        <RevealOnScroll
          index={3}
          className="mt-4 max-w-xl text-balance text-sm font-semibold tracking-wide text-text sm:text-base"
        >
          {profile.heroClosing}
        </RevealOnScroll>

        <RevealOnScroll index={4} className="mt-7 flex flex-wrap items-center gap-3">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#06060a]"
          >
            Get in touch
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </MagneticButton>
          <MagneticButton
            href="#roadmap"
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
          >
            View roadmap
          </MagneticButton>
          {resumeOk && (
            <MagneticButton
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
            >
              Résumé
            </MagneticButton>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          )}
        </RevealOnScroll>

        <ResumeModal
          open={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          resumeUrl={profile.resumeUrl}
          fileName="Jagadeesh_Kakunuri_Resume.pdf"
        />

        <RevealOnScroll index={5} className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold text-text sm:text-3xl">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1 text-xs text-text-muted">{s.label}</div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
