import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { agenticPipeline } from "@/lib/content";

export function AgenticAI() {
  return (
    <section id="agentic-ai" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading
            num="03"
            title="Agentic AI"
            lede="AI systems that go beyond text generation — reasoning, acting, and recovering inside real production infrastructure."
          />
        </RevealOnScroll>

        <RevealOnScroll index={1} className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          <p>
            Most &quot;AI features&quot; stop at generating text. I&apos;m interested in agents that reason about a
            problem, call real tools and APIs, touch real data, hold memory across steps, take action, and validate
            their own output before it reaches a human — or production.
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          index={2}
          className="mt-10 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-bg-elevated p-6 sm:gap-3"
        >
          {agenticPipeline.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-border-strong bg-bg-elevated-2 px-4 py-2 text-xs font-medium text-text sm:text-sm">
                {stage}
              </span>
              {i < agenticPipeline.length - 1 && (
                <span className="text-text-faint" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll index={3} className="mt-6 max-w-2xl text-sm text-text-muted">
          <p>
            Integrated into a real product, not demoed in isolation — held to the same standards as the rest of the
            system: retries, validation, observability, and a person on-call who can reason about what the agent
            did.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
