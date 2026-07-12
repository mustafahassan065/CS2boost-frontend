import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-steel bg-surface p-6 transition-colors duration-200 hover:border-volt/50",
        className
      )}
    >
      {children}
    </div>
  );
}