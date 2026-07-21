export function KeyTakeaways({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section
      aria-label="Key takeaways"
      className="mb-10 rounded-lg border border-border-subtle bg-surface-secondary p-6"
    >
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-secondary">
        Key takeaways
      </h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-text-primary">
            <span aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
