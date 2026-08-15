import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roadmap, type RoadmapStatus } from "@/lib/content";

const STATUS_DOT: Record<RoadmapStatus, string> = {
  "in-progress": "bg-accent",
  exploring: "bg-accent-2",
  planned: "bg-text-faint",
};

const STATUS_BADGE: Record<RoadmapStatus, string> = {
  "in-progress": "border-accent/40 bg-accent/10 text-accent",
  exploring: "border-accent-2/40 bg-accent-2/10 text-accent-2",
  planned: "border-border-strong text-text-faint",
};

const STATUS_LABEL: Record<RoadmapStatus, string> = {
  "in-progress": "In Progress",
  exploring: "Exploring",
  planned: "Planned",
};

export function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading
            num="04"
            title="What's next"
            lede="The road ahead — where I'm deliberately pushing depth next, beyond what's already shipped in production."
          />
        </RevealOnScroll>

        <div className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute bottom-1 left-[3px] top-1 border-l-2 border-dashed border-border sm:left-[7px]" />

          <ul className="space-y-4">
            {roadmap.map((item, i) => (
              <RevealOnScroll as="li" key={item.title} index={i} className="relative list-none">
                <span
                  className={`absolute -left-8 top-6 h-2.5 w-2.5 rounded-full border-2 border-bg sm:-left-10 ${STATUS_DOT[item.status]}`}
                />
                <div className="rounded-2xl border border-border bg-bg-elevated p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-text">{item.title}</h3>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${STATUS_BADGE[item.status]}`}
                    >
                      {STATUS_LABEL[item.status]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
