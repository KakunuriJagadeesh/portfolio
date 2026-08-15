import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/lib/content";

const FOCUS = [
  "Distributed system design",
  "Event-driven & async messaging",
  "API architecture & performance",
  "Resilience: retries, caching, fault tolerance",
  "Secure application design",
  "LLM integration in backend workflows",
];

export function About() {
  return (
    <section id="about" className="px-6 pb-16 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading num="01" title="About" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <RevealOnScroll index={1} className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              I started with distributed systems and backend engineering — building event-driven services,
              high-throughput APIs, and data-heavy platforms across capital markets, supply chain, OTT, and
              enterprise infrastructure.
            </p>
            <p>
              Over time, my focus moved toward AI-native systems. Today I work with LLMs, RAG, agent orchestration,
              tool calling, memory, structured outputs, and multi-step workflows — connecting AI to real backend
              systems instead of keeping it isolated as a chatbot.
            </p>
            <p>I like building systems that can reason, act, recover, and scale.</p>
          </RevealOnScroll>

          <div className="space-y-6">
            <RevealOnScroll index={2} className="rounded-2xl border border-border bg-bg-elevated p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-faint">What I focus on</h3>
              <ul className="mt-4 space-y-3 text-sm text-text-muted">
                {FOCUS.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll index={3} className="rounded-2xl border border-border bg-bg-elevated p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-faint">Education</h3>
              <div className="mt-4 text-sm">
                <div className="font-medium text-text">{education.school}</div>
                <div className="text-text-muted">{education.degree}</div>
                <div className="mt-1 text-text-faint">{education.period}</div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
