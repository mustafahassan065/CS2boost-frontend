import { cn } from "@/lib/utils";

// Signature element: targeting-bracket corners — ties into the "tracking/coaching"
// theme literally, and reads as premium-tactical rather than a generic rounded card.
export default function CornerFrame({
  children,
  className = "",
  accent = "volt",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "volt" | "signal";
}) {
  const color = accent === "signal" ? "border-signal" : "border-volt";

  return (
    <div className={cn("group relative p-6", className)}>
      <span className={cn("absolute left-0 top-0 h-4 w-4 border-l border-t transition-all duration-300 group-hover:h-6 group-hover:w-6", color)} />
      <span className={cn("absolute right-0 top-0 h-4 w-4 border-r border-t transition-all duration-300 group-hover:h-6 group-hover:w-6", color)} />
      <span className={cn("absolute bottom-0 left-0 h-4 w-4 border-b border-l transition-all duration-300 group-hover:h-6 group-hover:w-6", color)} />
      <span className={cn("absolute bottom-0 right-0 h-4 w-4 border-b border-r transition-all duration-300 group-hover:h-6 group-hover:w-6", color)} />
      {children}
    </div>
  );
}