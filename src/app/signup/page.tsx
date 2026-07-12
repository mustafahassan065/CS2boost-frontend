"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { api } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<"customer" | "booster">("customer");
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.signup({ ...form, role });
      setSuccess(data.message);
      setTimeout(() => router.push("/login"), 2500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-16">
      <Card className="w-full">
        <h1 className="font-display text-2xl font-bold uppercase text-frost">Create Account</h1>
        <p className="mt-1 text-sm text-muted">Join CS2Boost as a customer or booster.</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("customer")}
            className={`rounded-lg border px-4 py-3 text-sm font-display font-semibold uppercase transition-colors ${
              role === "customer" ? "border-volt bg-volt/10 text-volt" : "border-steel text-muted"
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setRole("booster")}
            className={`rounded-lg border px-4 py-3 text-sm font-display font-semibold uppercase transition-colors ${
              role === "booster" ? "border-plasma bg-plasma/10 text-plasma" : "border-steel text-muted"
            }`}
          >
            Booster
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wide text-muted">Full Name</label>
            <input
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="mt-1 w-full rounded-lg border border-steel bg-ink px-4 py-2.5 text-frost outline-none focus:border-volt"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-muted">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border border-steel bg-ink px-4 py-2.5 text-frost outline-none focus:border-volt"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-muted">Password</label>
            <div className="relative mt-1">
              <input
                required
                type={showPassword ? "text" : "password"}
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full rounded-lg border border-steel bg-ink px-4 py-2.5 pr-11 text-frost outline-none focus:border-volt"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-frost"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-signal">{success}</p>}

          <Button type="submit" size="md" className="w-full justify-center" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted">
          Already have an account?{" "}
          <a href="/login" className="text-volt">Log in</a>
        </p>
      </Card>
    </div>
  );
}