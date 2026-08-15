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
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading num="01" title="About" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <RevealOnScroll index={1} className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              I build the parts of a system that have to keep working when traffic spikes, a downstream service
              dies, or someone deploys at 4pm on a Friday.
            </p>
            <p>
              Most of my work sits at the intersection of <span className="text-text">event-driven architecture</span>{" "}
              and <span className="text-text">data-heavy backends</span> — Kafka pipelines that absorb bursty load,
              JSON-driven configuration engines that let business teams move without an engineering release,
              Elasticsearch and Redis layers that keep search under threshold, and validation frameworks that fail
              loudly and recover gracefully.
            </p>
            <p>
              I&apos;ve shipped in four fairly different domains — capital markets, supply chain compliance, OTT
              streaming, and enterprise infrastructure monitoring. The constant across all of them has been the same
              set of concerns: correctness under concurrency, sane failure modes, and systems that a person on-call
              can actually reason about.
            </p>
            <p>
              Recently I&apos;ve been integrating <span className="text-text">LLM-driven workflows</span> into
              production backends — not as a demo layer, but for validation and remediation paths where a model
              genuinely reduces manual review work.
            </p>
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
