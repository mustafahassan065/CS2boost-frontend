import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function CustomerOrdersPage() {
  return (
    <DashboardShell role="customer">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">My Orders</h1>
      <div className="mt-6">
        <ComingSoon title="Order tracking arrives in the next milestone" />
      </div>
    </DashboardShell>
  );
}