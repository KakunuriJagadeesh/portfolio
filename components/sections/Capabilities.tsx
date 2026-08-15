import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading
            num="02"
            title="What I can deliver"
            lede="Not a list of technologies — the outcomes I actually build with them."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {capabilities.map((item, i) => (
            <RevealOnScroll
              key={item}
              index={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-text-muted transition-colors hover:border-border-strong sm:text-base"
            >
              <svg
                className="mt-0.5 shrink-0 text-accent"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{item}</span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
