import Chevron from "./Chevron";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div
        className={cn(
          "mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-volt",
          align === "center" && "justify-center"
        )}
      >
        <Chevron className="h-3 w-3 text-volt animate-chevron-slide" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-frost md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}

function cn(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(" ");
}