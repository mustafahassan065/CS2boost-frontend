"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";
import Card from "@/components/ui/Card";
import { useAuth } from "@/lib/auth-context";

export default function BoosterProfilePage() {
  const { user } = useAuth();

  return (
    <DashboardShell role="booster">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Profile</h1>

      <Card className="mt-6 max-w-lg">
        <div className="space-y-4 text-sm">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Full Name</div>
            <div className="mt-1 text-frost">{user?.fullName}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Email</div>
            <div className="mt-1 text-frost">{user?.email}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted">Email Verified</div>
            <div className="mt-1 text-frost">{user?.isVerified ? "Yes" : "No"}</div>
          </div>
        </div>
      </Card>

      <div className="mt-6">
        <p className="text-sm text-muted">
          Rank, Faceit ELO, bio, and availability fields will be editable here once the booster profile feature is built.
        </p>
      </div>
    </DashboardShell>
  );
}