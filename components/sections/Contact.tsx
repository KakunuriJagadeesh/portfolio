import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { profile } from "@/lib/content";

export function Contact() {
  const contacts = [
    { label: "Email", href: `mailto:${profile.email}`, primary: true },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Phone", href: profile.phone ? `tel:${profile.phone.replace(/\s/g, "")}` : "" },
  ].filter((c) => c.href);

  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <RevealOnScroll index={0}>
          <span className="font-mono text-sm text-accent">08</span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something that scales.
          </h2>
          <p className="mt-4 text-text-muted">
            Open to senior backend and distributed systems roles. The fastest way to reach me is email.
          </p>
        </RevealOnScroll>

        <RevealOnScroll index={1} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {contacts.map((c) => (
            <MagneticButton
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-medium ${
                c.primary ? "bg-accent text-[#06060a]" : "border border-border text-text hover:border-border-strong"
              }`}
            >
              {c.label}
            </MagneticButton>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
