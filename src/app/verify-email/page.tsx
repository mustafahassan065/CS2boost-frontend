"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { api } from "@/lib/api";

export default function VerifyEmailPage() {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .verifyEmail(token)
      .then((data) => {
        setStatus("success");
        setMessage(data.message);
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err.message);
      });
  }, [token]);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-16">
      <Card className="w-full text-center">
        <h1 className="font-display text-2xl font-bold uppercase text-frost">Email Verification</h1>
        <p className="mt-4 text-sm text-muted">
          {status === "loading" ? "Verifying..." : message}
        </p>
        {status === "success" && (
          <div className="mt-6">
            <Button href="/login" size="md">Go to Login</Button>
          </div>
        )}
      </Card>
    </div>
  );
}