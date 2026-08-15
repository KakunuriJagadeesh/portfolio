"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/content";

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.85", "end 0.6"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading num="05" title="Experience" />
        </RevealOnScroll>

        <div ref={containerRef} className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute bottom-1 left-[3px] top-1 w-px bg-border sm:left-[7px]" />
          <motion.div
            className="absolute left-[3px] top-1 w-px bg-gradient-to-b from-accent to-accent-2 sm:left-[7px]"
            style={{ scaleY: lineScale, transformOrigin: "top", height: "100%" }}
          />

          <ul className="space-y-4">
            {experience.map((job, i) => {
              const open = openIndex === i;
              const current = /present/i.test(job.period);
              return (
                <RevealOnScroll as="li" key={job.company + job.period} index={i} className="relative list-none">
                  <span
                    className={`absolute -left-8 top-6 h-2.5 w-2.5 rounded-full border-2 border-bg sm:-left-10 ${
                      current ? "bg-accent" : "bg-text-faint"
                    }`}
                  />
                  <div className="rounded-2xl border border-border bg-bg-elevated">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="flex w-full flex-col gap-1 px-5 py-4 text-left sm:px-6 sm:py-5"
                      aria-expanded={open}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-text">{job.company}</span>
                        {current && (
                          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                            Current
                          </span>
                        )}
                        <span className="rounded-full border border-border-strong px-2 py-0.5 text-[10px] uppercase tracking-wide text-text-faint">
                          {job.domain}
                        </span>
                      </div>
                      <div className="text-sm text-text-muted">{job.role}</div>
                      <div className="font-mono text-xs text-text-faint">
                        {job.period} · {job.location}
                      </div>
                    </button>
                    <motion.div initial={false} animate={{ height: open ? "auto" : 0 }} className="overflow-hidden">
                      <div className="space-y-3 px-5 pb-5 sm:px-6 sm:pb-6">
                        <ul className="space-y-2 text-sm text-text-muted">
                          {job.highlights.map((h) => (
                            <li key={h} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {job.stack.map((s) => (
                            <span key={s} className="rounded-full border border-border-strong px-2.5 py-1 text-[11px] text-text-muted">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
