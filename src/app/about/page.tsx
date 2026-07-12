import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Trophy, Users, ShieldCheck, Target, Clock, Heart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Account safety first", desc: "Every session runs through region-matched VPNs and your login is never stored past delivery." },
  { icon: Target, title: "No shortcuts", desc: "We play real matches, in your normal mode, the same way you would — nothing artificial." },
  { icon: Clock, title: "Always reachable", desc: "24/7 live support, because rank anxiety doesn't wait for business hours." },
  { icon: Heart, title: "We actually play", desc: "We're not a reseller. Every order is boosted or coached by one of the two of us." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="About Us"
        title="Two players. Zero shortcuts."
        description="CS2Boost was built by two Premier-ranked players who got tired of boosting services run by anonymous freelancer pools. Every order here is handled personally, from the first message to the final rank-up."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-steel">
          <img src="/images/booster-1.jpeg" alt="Founder 1" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-display text-lg font-bold uppercase">Booster Name 1</h3>
            <p className="text-sm text-muted">Co-founder — 1500 Europe Rank, Faceit 2018</p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-steel">
          <img src="/images/booster-2.jpeg" alt="Founder 2" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-display text-lg font-bold uppercase">Booster Name 2</h3>
            <p className="text-sm text-muted">Co-founder — Premier Season Specialist</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl text-center">
        <p className="text-muted">
          We started CS2Boost after years of grinding Premier ourselves and
          getting frustrated with services that felt like handing your
          account to a stranger. So we built the version we'd want to use:
          two known players, transparent pricing, and every order played
          manually by one of us — no outsourcing, no offline padding, no
          disappearing after payment.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
        {values.map((v) => (
          <Card key={v.title} className="text-center">
            <v.icon className="mx-auto h-8 w-8 text-volt" />
            <h4 className="mt-4 font-display font-bold uppercase">{v.title}</h4>
            <p className="mt-2 text-sm text-muted">{v.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="text-center">
          <Trophy className="mx-auto h-8 w-8 text-volt" />
          <h4 className="mt-4 font-display font-bold uppercase">1500 Rank</h4>
          <p className="mt-2 text-sm text-muted">Faceit 2018, still actively climbing Premier every season.</p>
        </Card>
        <Card className="text-center">
          <Users className="mx-auto h-8 w-8 text-signal" />
          <h4 className="mt-4 font-display font-bold uppercase">600+ Accounts</h4>
          <p className="mt-2 text-sm text-muted">Boosted personally, no outsourced freelancers involved.</p>
        </Card>
        <Card className="text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-plasma" />
          <h4 className="mt-4 font-display font-bold uppercase">Zero Bans</h4>
          <p className="mt-2 text-sm text-muted">No cheats, no scripts — a clean track record since day one.</p>
        </Card>
      </div>
    </div>
  );
}