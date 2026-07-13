"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const DISCORD_URL = "https://discord.gg/fjMWAAjRYv";

const boostingLinks = [
  { href: "/boosting/premier", label: "Premier Boosting" },
  { href: "/boosting/competitive", label: "Competitive Boosting" },
  { href: "/boosting/wingman", label: "Wingman Boosting" },
];

const links = [
  { href: "/coaching", label: "Coaching" },
  { href: "/about", label: "About Me" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel/40 bg-panel">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.png" alt="CS2 Boost Pro" width={1598} height={885} priority className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-wide text-frost transition-colors hover:text-signal">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-frost/80 transition-colors hover:text-signal">
              Boosting <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full w-56 border border-steel/40 bg-surface p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {boostingLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-frost/80 hover:bg-ink hover:text-signal">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-display text-sm font-semibold uppercase tracking-wide text-frost/80 transition-colors hover:text-signal">
              {link.label}
            </Link>
          ))}
        </nav>

        
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/discord-button2.png"
            alt="Join our Discord"
            width={1766}
            height={450}
            style={{ height: "44px", width: "auto" }}
          />
        </a>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-frost" /> : <Menu className="h-6 w-6 text-frost" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-steel/40 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="font-display text-sm font-semibold uppercase text-frost/80" onClick={() => setOpen(false)}>Home</Link>
            {boostingLinks.map((l) => (
              <Link key={l.href} href={l.href} className="font-display text-sm font-semibold uppercase text-frost/80" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-display text-sm font-semibold uppercase text-frost/80" onClick={() => setOpen(false)}>{link.label}</Link>
            ))}

            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/images/discord-button.png" alt="Join our Discord" width={1766} height={496} className="h-11 w-auto" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
