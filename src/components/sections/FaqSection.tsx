"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Is boosting safe for my account?",
    a: "Premier Boost is safe because Valve clearly doesn't focus on smurfing or boosting 🙂 We only boost through legitimate gameplay. We've spent our entire lives playing CS, and we love understanding the game on a deeper level — reading opponents, predicting their moves, and staying one step ahead. That's the real beauty of Counter-Strike. Cheaters will never understand that feeling, and they never will.",
  },
  {
    q: "Will you play offline mode?",
    a: "Yes, all orders are being fulfilled in invisible mode.",
  },
  {
    q: "How long does boosting take?",
    a: "We always do our best to complete every offer in the shortest time possible. Customer satisfaction is our priority, and we genuinely value every customer who chooses us.",
  },
  {
    q: "Can I track my order live?",
    a: "The booster always keeps you updated on your current rating through the chat. With the booster's stream link, you can also watch the session live, giving you an even better overview of your progress and current rating. On top of that, you may even learn a few tips and improve your gameplay.",
  },
  {
    q: "Can I play on my account while it's being boosted?",
    a: "While a booster is active on your account in CS, you should not launch other games on the same account, as this will interrupt the boosting session. We always communicate with our customers and explain the correct account usage. If the customer needs to play another game, the booster will stop the session and allow the customer to use their account, since the account always belongs to the customer.",
  },
  {
    q: "Do I need to change my password after the boost?",
    a: "No, you don't need to change your password once the boost is completed — it's entirely up to you. We guarantee that no one from our team will ever log into your account again after the boost is finished. Once the boost is complete, we remove your account from our saved accounts.",
  },
  {
    q: "What happens if my rank doesn't improve?",
    a: "Your rank will be boosted to the rank you selected. However, we can't guarantee that you'll stay at that rank afterward — that depends entirely on your own performance.",
  },
  {
    q: "Can I choose which booster works on my order?",
    a: "Yes, you can choose which booster will work on your order.",
  },
  {
    q: "Is duo queue safer than handing over my account?",
    a: "For us, it doesn't matter — both methods are 100% safe, so you don't have to worry. The main difference between Solo and Duo Boost is that a Duo order depends on your availability, since you need to play together with the booster. Most customers can't play for 4–5 hours straight, while our boosters can easily play for up to 8 hours in a session, which usually makes Solo Boost the faster option.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" align="center" />

      <div className="mt-10 space-y-3">
        {faqs.map((item, i) => (
          <div key={item.q} className="rounded-xl border border-steel bg-surface">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-display font-semibold uppercase text-frost">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-volt transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-sm text-muted">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}