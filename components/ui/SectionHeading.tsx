export function SectionHeading({ num, title, lede }: { num?: string; title: string; lede?: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        {num && <span className="font-mono text-sm text-accent">{num}</span>}
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {lede && <p className="mt-3 max-w-xl text-text-muted">{lede}</p>}
    </div>
  );
}
