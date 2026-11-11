"use client";

import { useEffect, useState } from "react";

type Subscriber = {
  id: string;
  name: string;
  email: string;
  source: string;
  status: string;
  locale: string;
  createdAt: string | null;
};

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch("/api/admin/subscribers", { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as {
          subscribers?: Subscriber[];
          error?: string;
        };
        if (!res.ok) {
          if (alive) setError(data.error || "Unable to load subscribers.");
          return;
        }
        if (alive) setSubscribers(data.subscribers || []);
      } catch {
        if (alive) setError("Unable to load subscribers.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Subscribers</h2>
        <p className="mt-2 text-[#9bb0c3]">Live subscribers from the homepage subscribe form (MongoDB).</p>
      </div>

      {loading ? <p className="text-sm text-[#9bb0c3]">Loading subscribers...</p> : null}
      {error ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-[#fca5a5]">
          {error}
        </p>
      ) : null}

      {!loading && !error ? (
        <div className="overflow-hidden rounded-[18px] border border-[#2a3b4f] bg-[#152536]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0b1520] text-xs uppercase tracking-[0.08em] text-[#9bb0c3]">
                <tr>
                  <th className="px-4 py-3 font-bold">Name</th>
                  <th className="px-4 py-3 font-bold">Email</th>
                  <th className="px-4 py-3 font-bold">Source</th>
                  <th className="px-4 py-3 font-bold">Joined</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-[#9bb0c3]">
                      No subscribers yet.
                    </td>
                  </tr>
                ) : (
                  subscribers.map((item) => (
                    <tr key={item.id} className="border-t border-[#2a3b4f]">
                      <td className="px-4 py-3.5 font-semibold text-white">{item.name || "—"}</td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">{item.email}</td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">{item.source || "—"}</td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "—"}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                            item.status === "Active"
                              ? "bg-[#1a6397]/25 text-[#74c1f8]"
                              : "bg-[#2a3b4f] text-[#9bb0c3]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}
