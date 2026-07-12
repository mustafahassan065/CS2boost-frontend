import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Video, BarChart3, Users2, Check } from "lucide-react";

const sessions = [
  {
    icon: Target,
    title: "Aim & Utility",
    desc: "Crosshair placement, spray control, and lineup practice tailored to your maps and problem angles.",
  },
  {
    icon: Video,
    title: "VOD Review",
    desc: "Match replay breakdown — decision-making, positioning, and rotations, timestamped so you know exactly what to fix.",
  },
  {
    icon: BarChart3,
    title: "Rank Strategy",
    desc: "A personalized roadmap to close the gap to your target rank, based on your actual weaknesses, not generic advice.",
  },
  {
    icon: Users2,
    title: "Duo Session",
    desc: "Play live alongside a booster and get real-time in-game callouts, rotations, and utility timing.",
  },
];

const whoFor = [
  "Stuck at the same rank for multiple seasons",
  "Want honest feedback instead of vague tips from friends",
  "Preparing for a rank push before season end",
  "New to Premier and want to build good habits early",
];

const process = [
  { step: "01", title: "Book a session", desc: "Pick a time that works for you from available slots." },
  { step: "02", title: "Send recent demos", desc: "Share 1-2 recent matches so your coach comes prepared." },
  { step: "03", title: "Live session", desc: "1-on-1 voice call, screen-share, and in-game review." },
  { step: "04", title: "Written summary", desc: "You get a follow-up with concrete points to practice." },
];

export default function CoachingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Coaching"
        title="Improve. Learn. Climb."
        description="Personalized coaching sessions with players who've made the climb themselves — not generic tips copied from a guide, but real game-sense transfer built around your own gameplay."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {sessions.map((s) => (
          <Card key={s.title} className="flex gap-4">
            <s.icon className="h-8 w-8 shrink-0 text-volt" />
            <div>
              <h3 className="font-display font-bold uppercase text-frost">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-bold uppercase text-frost">Who this is for</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {whoFor.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold uppercase text-frost">How a session runs</h3>
          <div className="mt-4 space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-4">
                <span className="font-mono text-sm text-volt">{p.step}</span>
                <div>
                  <div className="font-display text-sm font-semibold uppercase text-frost">{p.title}</div>
                  <div className="text-sm text-muted">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button href="/prices" size="lg">Book a Session</Button>
      </div>
    </div>
  );
}