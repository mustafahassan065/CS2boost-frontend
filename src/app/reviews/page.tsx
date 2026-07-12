import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Player_47", rank: "Gold Nova → MG2", text: "Fast, clean, no offline mode padding. Rank felt earned.", rating: 5.0 },
  { name: "shroud_wannabe", rank: "MG → DMG", text: "Coaching session fixed my crosshair placement in one call.", rating: 4.9 },
  { name: "faze_fan22", rank: "DMG → LE", text: "Booster kept me updated every match. Zero account issues.", rating: 5.0 },
  { name: "csgo_grind", rank: "LE → Global", text: "Took a bit longer than expected but the quality was worth it.", rating: 4.8 },
  { name: "aim_god_wannabe", rank: "Silver → GN", text: "Cheapest price I found and delivered on time.", rating: 4.9 },
  { name: "clutch_or_kick", rank: "Coaching", text: "Duo session was better than any YouTube guide I've watched.", rating: 5.0 },
  { name: "smokegod99", rank: "GN → MG1", text: "Really appreciated the live dashboard, could see every match update.", rating: 4.8 },
  { name: "riflekid", rank: "MG2 → DMG", text: "Booster was chill to talk to and answered all my questions mid-boost.", rating: 4.9 },
  { name: "pixel_peek", rank: "VOD Review", text: "The VOD breakdown pointed out rotation mistakes I never noticed.", rating: 5.0 },
  { name: "headshot_only", rank: "DMG → LE", text: "Second time using them, still no issues with my account.", rating: 4.9 },
  { name: "wallbang_will", rank: "LE → LEM", text: "Slightly pricier than other sites but the transparency made it worth it.", rating: 4.8 },
  { name: "spraydown", rank: "Silver → GN1", text: "Support replied within a couple minutes when I had a question.", rating: 5.0 },
  { name: "retake_queen", rank: "Aim Coaching", text: "My spray control genuinely improved after just one session.", rating: 4.9 },
  { name: "noscope_nate", rank: "MG → DMG", text: "Booster played clean, no weird lag or suspicious stats spike.", rating: 4.8 },
  { name: "utility_used", rank: "Rank Strategy", text: "The roadmap they gave me actually made sense for my playstyle.", rating: 5.0 },
  { name: "flashbang_fi", rank: "GN2 → MG3", text: "Order tracker made the whole thing feel transparent, not sketchy.", rating: 4.9 },
  { name: "eco_round_king", rank: "Duo Queue", text: "Played alongside my booster instead of handing over my account, worked great.", rating: 5.0 },
  { name: "midfight_mike", rank: "LEM → SMFC", text: "Highest rank tier I've boosted to, took a few days but delivered as promised.", rating: 4.8 },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Reviews" title="Trusted by 600+ players" align="center" />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name}>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-mono text-xs text-muted">{r.rating.toFixed(1)}</span>
            </div>
            <p className="mt-4 text-sm text-muted">"{r.text}"</p>
            <div className="mt-4 font-display text-sm font-semibold uppercase text-frost">{r.name}</div>
            <div className="font-mono text-xs text-signal">{r.rank}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}