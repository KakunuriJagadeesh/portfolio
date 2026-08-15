import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, type ServiceItem } from "@/lib/content";

function IconApi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconEvents() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7 7.5 10.3 16M17 7.5 13.7 16" />
    </svg>
  );
}

function IconArchitecture() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconMigration() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function IconAi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function IconReliability() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v6c0 5.25 3.75 9.75 8 11 4.25-1.25 8-5.75 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const ICONS: Record<ServiceItem["icon"], () => React.JSX.Element> = {
  api: IconApi,
  events: IconEvents,
  architecture: IconArchitecture,
  migration: IconMigration,
  ai: IconAi,
  reliability: IconReliability,
};

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll index={0}>
          <SectionHeading
            num="05"
            title="What I can take on"
            lede="Scoped engagements grounded in what I've actually shipped — not a generic services menu."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <RevealOnScroll
                key={service.title}
                index={i}
                className="rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon />
                </div>
                <h3 className="mt-4 font-medium text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.description}</p>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
