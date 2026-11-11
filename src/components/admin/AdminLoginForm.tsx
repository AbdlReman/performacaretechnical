"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }

      const next = searchParams.get("next");
      const safeNext = next && next.startsWith("/admin") ? next : "/admin";
      router.replace(safeNext);
      router.refresh();
    } catch {
      setError("Unable to reach the server.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="admin-secret" className="mb-2 block text-sm font-bold text-[#0d2236]">
          Admin secret key
        </label>
        <input
          id="admin-secret"
          name="secret"
          type="password"
          autoComplete="current-password"
          required
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Enter ADMIN_SECRET_KEY"
          className="w-full rounded-xl border border-[#d7e2ec] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#1a6397] focus:ring-2 focus:ring-[#1a6397]/20"
        />
      </div>

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading || !secret.trim()}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#1a6397] px-5 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#124c75] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in to Admin"}
      </button>
    </form>
  );
}
