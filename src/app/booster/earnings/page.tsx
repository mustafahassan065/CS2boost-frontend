import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function BoosterEarningsPage() {
  return (
    <DashboardShell role="booster">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Earnings</h1>
      <div className="mt-6">
        <ComingSoon title="Payment history arrives once the Payments milestone is complete" />
      </div>
    </DashboardShell>
  );
}