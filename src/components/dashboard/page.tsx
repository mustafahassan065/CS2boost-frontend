import DashboardShell from "@/components/dashboard/DashboardShell";
import Card from "@/components/ui/Card";
import { ShoppingBag, Clock, CheckCircle2 } from "lucide-react";

export default function CustomerDashboardPage() {
  return (
    <DashboardShell role="customer">
      <h1 className="font-display text-2xl font-bold uppercase text-frost">Overview</h1>
      <p className="mt-1 text-sm text-muted">A quick summary of your account.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card>
          <ShoppingBag className="h-6 w-6 text-volt" />
          <div className="mt-3 font-mono text-2xl font-bold text-frost">0</div>
          <div className="text-xs uppercase tracking-wide text-muted">Active Orders</div>
        </Card>
        <Card>
          <Clock className="h-6 w-6 text-signal" />
          <div className="mt-3 font-mono text-2xl font-bold text-frost">0</div>
          <div className="text-xs uppercase tracking-wide text-muted">Pending Orders</div>
        </Card>
        <Card>
          <CheckCircle2 className="h-6 w-6 text-plasma" />
          <div className="mt-3 font-mono text-2xl font-bold text-frost">0</div>
          <div className="text-xs uppercase tracking-wide text-muted">Completed Orders</div>
        </Card>
      </div>

      <div className="mt-8">
        <p className="text-sm text-muted">
          Order history, live tracking, and booster chat will appear here once the Order Management milestone is complete.
        </p>
      </div>
    </DashboardShell>
  );
}