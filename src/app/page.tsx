import Image from "next/image";
import Link from "next/link";

const cards = [
  { file: "card-premier-boosting.png", w: 1499, h: 888 },
  { file: "card-competitive-boosting.png", w: 1497, h: 847 },
  { file: "card-wingman-boosting.png", w: 1502, h: 854 },
  { file: "card-placement-matches.png", w: 1511, h: 864 },
  { file: "card-win-boost.png", w: 1511, h: 816 },
  { file: "card-coaching.png", w: 1543, h: 848 },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO — narrower container = proportionally shorter ================= */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-[950px] grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center">
            <Image
              src="/images/herotext.png"
              alt="Premier Boosting & Coaching — Cheapest Prices, Highest Quality, 100% Safe"
              width={1672}
              height={876}
              priority
              className="w-full"
            />
            <Link
              href="/order"
              aria-label="Boost Now"
              className="absolute z-20 cursor-pointer"
              style={{ left: "21%", top: "84%", width: "44%", height: "10%" }}
            />
          </div>

          <div className="relative">
            <Image
              src="/images/hero-photo.png"
              alt="CS2 Boost Pro"
              width={1672}
              height={941}
              priority
              className="h-full w-full object-cover"
            />
            <Image
              src="/images/lcd.png"
              alt=""
              width={1339}
              height={912}
              className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden w-[55%] opacity-80 lg:block"
            />
            <Image
              src="/images/mission-objective.png"
              alt="Mission Objective: Rank Above — Fast Delivery, Pro Players, Secure & Safe"
              width={1501}
              height={848}
              className="absolute right-4 top-2 hidden w-[36%] sm:block"
            />
          </div>
        </div>
      </section>

      {/* ================= CHOOSE YOUR SERVICE — narrower container ================= */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="text-center">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-frost md:text-2xl">
              Choose Your Service
            </h2>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-signal">
              Fast. Safe. Professional.
            </p>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
            {cards.map((c) => (
              <Link key={c.file} href="/order" className="block transition-transform duration-300 hover:-translate-y-1">
                <Image src={`/images/${c.file}`} alt="" width={c.w} height={c.h} className="w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS BAR — same narrower container ================= */}
      <section className="bg-ink pt-1.5">
        <div className="mx-auto max-w-[1300px] px-6">
          <Image
            src="/images/ratings3.jpg"
            alt="25+ Years of Experience, 50,000+ Hours Played, 1,500+ Europe Rank Faceit 2018, 356 World Rank Season 1 Premier, 300+ Offers Completed"
            width={2712}
            height={212}
            className="w-full"
          />
        </div>
      </section>

      {/* ================= HOW IT WORKS BAR ================= */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1300px] px-6">
          <Image
            src="/images/how-it-works3.jpg"
            alt="How It Works: Place Order, Booster Assigned, Boost In Progress, Order Completed"
            width={2704}
            height={212}
            className="w-full"
          />
        </div>
      </section>

      {/* ================= CTA BAR ================= */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="relative">
            <Image
              src="/images/cta-bar.png"
              alt="Ready to Rank Above? Boost Now"
              width={2732}
              height={156}
              className="w-full"
            />
            <Link
              href="/order"
              aria-label="Boost Now"
              className="absolute z-20 cursor-pointer"
              style={{ right: "1%", top: "10%", width: "24%", height: "80%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
