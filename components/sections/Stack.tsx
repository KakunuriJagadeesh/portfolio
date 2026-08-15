import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/content";

export function Stack() {
  return (
    <section id="stack" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading num="04" title="Technical stack" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <RevealOnScroll
              key={group.group}
              index={i}
              className="rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong"
            >
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-faint">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-strong bg-bg-elevated-2 px-3 py-1 text-xs text-text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
