import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function BoosterMessagesPage() {
  return (
    <DashboardShell role="booster">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Messages</h1>
      <div className="mt-6">
        <ComingSoon title="Live chat with customers arrives in a later milestone" />
      </div>
    </DashboardShell>
  );
}