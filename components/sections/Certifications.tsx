import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <section id="certs" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading num="06" title="Certifications" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <RevealOnScroll
              key={c.name}
              index={i}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated px-5 py-4"
            >
              <span className="text-sm text-text">{c.name}</span>
              <span className="shrink-0 font-mono text-xs text-text-faint">{c.year}</span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
