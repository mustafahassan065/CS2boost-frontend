"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  User,
  Settings,
  MessageCircle,
  Wallet,
  CalendarClock,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const customerLinks = [
  { href: "/customer/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/customer/orders", label: "My Orders", icon: ShoppingBag },
  { href: "/customer/messages", label: "Messages", icon: MessageCircle },
  { href: "/customer/profile", label: "Profile", icon: User },
  { href: "/customer/settings", label: "Settings", icon: Settings },
];

const boosterLinks = [
  { href: "/booster/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/booster/orders", label: "Assigned Orders", icon: ShoppingBag },
  { href: "/booster/schedule", label: "Schedule", icon: CalendarClock },
  { href: "/booster/earnings", label: "Earnings", icon: Wallet },
  { href: "/booster/messages", label: "Messages", icon: MessageCircle },
  { href: "/booster/profile", label: "Profile", icon: User },
  { href: "/booster/settings", label: "Settings", icon: Settings },
];

export default function DashboardSidebar({ role }: { role: "customer" | "booster" }) {
  const pathname = usePathname();
  const links = role === "booster" ? boosterLinks : customerLinks;

  return (
    <aside className="w-full shrink-0 border-b border-steel bg-surface md:w-64 md:border-b-0 md:border-r md:min-h-[calc(100vh-73px)]">
      <div className="p-4">
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-steel px-3 py-2 text-xs font-mono uppercase tracking-wide text-muted">
          {role === "booster" ? (
            <Users className="h-4 w-4 text-plasma" />
          ) : (
            <User className="h-4 w-4 text-volt" />
          )}
          {role} Panel
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-display font-semibold uppercase tracking-wide transition-colors",
                  active
                    ? "bg-volt/10 text-volt border border-volt/40"
                    : "text-muted hover:bg-ink hover:text-frost"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}