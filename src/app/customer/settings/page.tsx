import DashboardShell from "@/components/dashboard/DashboardShell";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function CustomerSettingsPage() {
  return (
    <DashboardShell role="customer">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Settings</h1>
      <div className="mt-6">
        <ComingSoon title="Password change and notification settings coming soon" />
      </div>
    </DashboardShell>
  );
}