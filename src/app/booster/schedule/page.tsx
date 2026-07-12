import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function BoosterSchedulePage() {
  return (
    <DashboardShell role="booster">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Schedule</h1>
      <div className="mt-6">
        <ComingSoon title="Calendar and availability scheduling arrives in a later milestone" />
      </div>
    </DashboardShell>
  );
}