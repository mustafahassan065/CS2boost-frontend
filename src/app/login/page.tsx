"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.login(form);
      await refreshUser();

      if (data.user.role === "booster") {
        router.push("/booster/dashboard");
      } else {
        router.push("/customer/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-16">
      <Card className="w-full">
        <h1 className="font-display text-2xl font-bold uppercase text-frost">Log In</h1>
        <p className="mt-1 text-sm text-muted">Welcome back to CS2Boost.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

          <div className="text-right">
            <a href="/forgot-password" className="text-xs text-volt">Forgot password?</a>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button type="submit" size="md" className="w-full justify-center" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted">
          Don't have an account?{" "}
          <a href="/signup" className="text-volt">Sign up</a>
        </p>
      </Card>
    </div>
  );
}