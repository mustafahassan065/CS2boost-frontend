import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

function DiscordSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.251-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.673-3.549-13.662a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419Z" />
    </svg>
  );
}

function TwitterSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
    </svg>
  );
}

const socialLinks = [
  { icon: DiscordSvg, href: "https://discord.gg/fjMWAAjRYv", label: "Discord" },
  { icon: TwitterSvg, href: "#", label: "Twitter" },
  { icon: InstagramSvg, href: "#", label: "Instagram" },
  { icon: EmailSvg, href: "mailto:support@cs2boostpro.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-steel/40 bg-panel">
      <div className="mx-auto max-w-[1600px] px-6 py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {/* Logo + tagline + socials */}
          <div className="col-span-2">
            <Image src="/images/logo.png" alt="CS2 Boost Pro" width={1598} height={885} className="h-20 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Professional CS2 boosting and coaching service. Fast, safe, and reliable.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-steel/50 text-signal transition-colors hover:border-signal hover:bg-signal/10"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-frost">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link href="/" className="hover:text-signal">Home</Link></li>
              <li><Link href="/boosting" className="hover:text-signal">Boosting</Link></li>
              <li><Link href="/coaching" className="hover:text-signal">Coaching</Link></li>
              <li><Link href="/about" className="hover:text-signal">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-signal">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-signal">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-frost">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link href="/boosting/premier" className="hover:text-signal">Premier Boosting</Link></li>
              <li><Link href="/boosting/competitive" className="hover:text-signal">Competitive Boosting</Link></li>
              <li><Link href="/boosting/wingman" className="hover:text-signal">Wingman Boosting</Link></li>
              <li><Link href="/boosting/placement" className="hover:text-signal">Placement Matches</Link></li>
              <li><Link href="/boosting/win-boost" className="hover:text-signal">Win Boost</Link></li>
              <li><Link href="/coaching" className="hover:text-signal">Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-frost">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link href="/#faq" className="hover:text-signal">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-signal">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-signal">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-signal">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-signal">Contact</Link></li>
            </ul>
          </div>

          {/* Payment Methods — own column, brand-colored text, no white background */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-frost">Payment Methods</h4>
           <div className="mt-4 flex flex-row gap-2">
  <div className="flex items-center gap-1.5 rounded-md border border-steel/40 px-3 py-1.5 w-fit">
    <span className="font-display text-sm font-bold italic" style={{ color: "#635BFF" }}>stripe</span>
  </div>
  <div className="flex items-center gap-0.5 rounded-md border border-steel/40 px-3 py-1.5 w-fit">
    <span className="font-display text-sm font-bold" style={{ color: "#003087" }}>Pay</span>
    <span className="font-display text-sm font-bold" style={{ color: "#009cde" }}>Pal</span>
  </div>
</div>
            <p className="mt-3 text-xs text-muted">All payments are secured and encrypted.</p>
          </div>

          {/* System Status — own separate column */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-frost">System Status</h4>
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="font-display text-xs font-semibold uppercase tracking-wide text-green-400">
                All Systems Operational
              </span>
            </div>
              <p className="mt-3 text-xs text-muted">Your boost is safe with CS2boost Pro.</p>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="font-display text-xs font-semibold uppercase tracking-wide text-green-400">
                100% Secure
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-steel/40 pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} CS2 Boost Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}