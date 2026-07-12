import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function BoosterOrdersPage() {
  return (
    <DashboardShell role="booster">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Assigned Orders</h1>
      <div className="mt-6">
        <ComingSoon title="Order assignment arrives in the next milestone" />
      </div>
    </DashboardShell>
  );
}