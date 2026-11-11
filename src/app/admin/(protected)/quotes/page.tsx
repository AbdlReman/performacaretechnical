"use client";

import { useEffect, useState } from "react";

type Quote = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  property: string;
  message: string;
  locale: string;
  status: string;
  createdAt: string | null;
};

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch("/api/admin/quotes", { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as {
          quotes?: Quote[];
          error?: string;
        };
        if (!res.ok) {
          if (alive) setError(data.error || "Unable to load quotes.");
          return;
        }
        if (alive) setQuotes(data.quotes || []);
      } catch {
        if (alive) setError("Unable to load quotes.");
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
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Quotes</h2>
        <p className="mt-2 text-[#9bb0c3]">Live quote requests saved to MongoDB from the website form.</p>
      </div>

      {loading ? <p className="text-sm text-[#9bb0c3]">Loading quotes...</p> : null}
      {error ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-[#fca5a5]">
          {error}
        </p>
      ) : null}

      {!loading && !error && quotes.length === 0 ? (
        <p className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-6 text-sm text-[#9bb0c3]">
          No quote requests yet.
        </p>
      ) : null}

      <div className="grid gap-4">
        {quotes.map((quote) => (
          <article key={quote.id} className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#74c1f8]">
                  {quote.status} · {quote.locale.toUpperCase()}
                </p>
                <h3 className="mt-1 text-lg font-extrabold tracking-[-0.02em] text-white">{quote.name}</h3>
                <p className="mt-1 text-sm text-[#9bb0c3]">
                  {[quote.service, quote.property].filter(Boolean).join(" · ") || "No service selected"}
                </p>
              </div>
              <span className="rounded-full bg-[#0b1520] px-3 py-1 text-xs font-bold text-[#e8eef4]">
                {quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "—"}
              </span>
            </div>
            <div className="mt-4 grid gap-1.5 text-sm text-[#c9d6e3]">
              <p>
                <span className="text-[#9bb0c3]">Phone:</span>{" "}
                <a href={`tel:${quote.phone}`} className="hover:text-white">
                  {quote.phone}
                </a>
              </p>
              {quote.email ? (
                <p>
                  <span className="text-[#9bb0c3]">Email:</span>{" "}
                  <a href={`mailto:${quote.email}`} className="hover:text-white">
                    {quote.email}
                  </a>
                </p>
              ) : null}
              {quote.message ? (
                <p className="mt-2 rounded-xl border border-[#2a3b4f] bg-[#0b1520] p-3 text-[#9bb0c3]">
                  {quote.message}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
