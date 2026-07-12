import { Construction } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-dashed border-steel text-center">
      <Construction className="h-8 w-8 text-muted" />
      <h2 className="mt-4 font-display text-lg font-bold uppercase text-frost">{title}</h2>
      <p className="mt-1 text-sm text-muted">This section is being built in an upcoming milestone.</p>
    </div>
  );
}