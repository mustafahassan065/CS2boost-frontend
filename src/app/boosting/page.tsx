import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Crosshair, ShieldCheck, Clock, MessageCircle, Check, X } from "lucide-react";

const steps = [
  { icon: Crosshair, title: "Pick Your Ranks", desc: "Select your current and desired Premier rank, plus any add-ons like duo queue or priority order." },
  { icon: ShieldCheck, title: "Secure Handoff", desc: "Share account access through a protected form. We never ask for details over chat." },
  { icon: Clock, title: "Boost In Progress", desc: "Track match-by-match progress live in your dashboard, updated after every game." },
  { icon: MessageCircle, title: "Rank Delivered", desc: "Get notified the moment your new rank is live, with a full match summary." },
];

const included = [
  "Manual gameplay by a verified, rank-appropriate booster",
  "Region-matched VPN protection for every session",
  "Live order tracking dashboard with match history",
  "Direct chat with your assigned booster",
  "Flexible scheduling — pause or resume anytime",
  "Free replay of any match you want reviewed",
];

const excluded = [
  "No cheats, scripts, or third-party software",
  "No offline mode or fake match padding",
  "No sharing your account details with anyone else",
  "No queueing outside your selected mode",
];

const addons = [
  { name: "Duo Queue", desc: "Play alongside your booster instead of handing over your account." },
  { name: "Priority Order", desc: "Jump the queue — your boost starts within the hour." },
  { name: "Stream Mode", desc: "Booster streams the session privately so you can watch live." },
  { name: "Specific Hours", desc: "Request your boost only run during certain hours of the day." },
];

export default function BoostingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Premier Boosting"
        title="Climb the ranked ladder, the honest way"
        description="No Faceit, no shortcuts — just skilled players grinding Premier matches on your account, exactly like you would, so your new rank actually reflects the games played."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <Card key={s.title}>
            <div className="font-mono text-xs text-volt">STEP {String(i + 1).padStart(2, "0")}</div>
            <s.icon className="mt-3 h-7 w-7 text-signal" />
            <h3 className="mt-4 font-display font-bold uppercase">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <h3 className="font-display text-lg font-bold uppercase text-frost">What's included</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="font-display text-lg font-bold uppercase text-frost">What we never do</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {excluded.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-plasma" /> {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-xl font-bold uppercase text-frost">Optional add-ons</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {addons.map((a) => (
            <Card key={a.name}>
              <h4 className="font-display font-bold uppercase text-frost">{a.name}</h4>
              <p className="mt-2 text-sm text-muted">{a.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-steel bg-surface p-8">
        <h3 className="font-display text-lg font-bold uppercase text-frost">A note on account safety</h3>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          We understand handing over account access is a big decision. That's
          why we only ever connect through a VPN matched to your usual
          playing region, keep no record of your login after the order is
          delivered, and let you change your password the moment the boost
          is complete. If you'd rather not share access at all, our Duo
          Queue add-on lets a booster play alongside you instead.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Button href="/prices" size="lg">See Boosting Prices</Button>
      </div>
    </div>
  );
}