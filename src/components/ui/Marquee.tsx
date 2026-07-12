export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-steel bg-surface/60 py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {item}
            <span className="text-volt">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}