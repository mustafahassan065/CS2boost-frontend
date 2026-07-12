"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardSidebar from "./DashboardSidebar";
import { useAuth } from "@/lib/auth-context";

export default function DashboardShell({
  role,
  children,
}: {
  role: "customer" | "booster";
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  return (
    <ProtectedRoute allowedRoles={[role]}>
      <div className="flex flex-col md:flex-row">
        <DashboardSidebar role={role} />

        <div className="flex-1">
          <div className="flex items-center justify-between border-b border-steel px-6 py-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-muted">Welcome back</div>
              <div className="font-display text-lg font-bold uppercase text-frost">
                {user?.fullName}
              </div>
            </div>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}