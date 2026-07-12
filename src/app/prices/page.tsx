import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const boostingTiers = [
  { rank: "Silver → Gold Nova", price: "$8", note: "Fastest turnaround" },
  { rank: "Gold Nova → MG", price: "$15", note: "Most popular" },
  { rank: "MG → DMG", price: "$25", note: "" },
  { rank: "DMG → LE", price: "$40", note: "" },
  { rank: "LE → Global Elite", price: "$70", note: "Premium boosters only" },
];

const coachingPlans = [
  { name: "Single Session", price: "$15", features: ["1-hour session", "VOD review", "Written summary"] },
  { name: "3-Session Pack", price: "$40", features: ["3 sessions", "Aim + strategy focus", "Priority scheduling"] },
  { name: "Monthly Coaching", price: "$120", features: ["4 sessions/month", "Duo queue access", "Direct chat support"] },
];

export default function PricesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Pricing" title="Simple, transparent pricing" align="center" />

      <div className="mt-14">
        <h3 className="font-display text-xl font-bold uppercase text-frost">Boosting</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          {boostingTiers.map((t) => (
            <Card key={t.rank} className="text-center">
              {t.note && (
                <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-signal">{t.note}</div>
              )}
              <div className="font-mono text-2xl font-bold text-volt">{t.price}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-muted">{t.rank}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-xl font-bold uppercase text-frost">Coaching</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {coachingPlans.map((plan) => (
            <Card key={plan.name}>
              <h4 className="font-display font-bold uppercase text-frost">{plan.name}</h4>
              <div className="mt-2 font-mono text-3xl font-bold text-gradient">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-signal" /> {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button href="/order" size="lg">Order Now</Button>
      </div>
    </div>
  );
}