"use client";

import { useEffect, useMemo, useState } from "react";

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
  read: boolean;
  createdAt: string | null;
};

type SortOrder = "newest" | "oldest";
type ReadFilter = "all" | "unread" | "read";

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [readFilter, setReadFilter] = useState<ReadFilter>("all");
  const [selected, setSelected] = useState<Quote | null>(null);
  const [marking, setMarking] = useState(false);

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
        if (alive) {
          setQuotes(
            (data.quotes || []).map((q) => ({
              ...q,
              read: Boolean(q.read),
            })),
          );
        }
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

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = [...quotes];

    if (readFilter === "read") list = list.filter((item) => item.read);
    if (readFilter === "unread") list = list.filter((item) => !item.read);

    if (q) {
      list = list.filter((item) => {
        const haystack = [
          item.name,
          item.phone,
          item.email,
          item.service,
          item.property,
          item.message,
          item.status,
          item.locale,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    list.sort((a, b) => {
      const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
    });

    return list;
  }, [quotes, search, sortOrder, readFilter]);

  const unreadCount = quotes.filter((q) => !q.read).length;

  async function openQuote(quote: Quote) {
    setSelected(quote);
    if (quote.read) return;

    setMarking(true);
    try {
      const res = await fetch(`/api/admin/quotes/${quote.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      const data = (await res.json().catch(() => ({}))) as { quote?: Quote };
      if (res.ok && data.quote) {
        setQuotes((prev) => prev.map((item) => (item.id === quote.id ? { ...item, read: true } : item)));
        setSelected((prev) => (prev && prev.id === quote.id ? { ...prev, read: true } : prev));
      }
    } finally {
      setMarking(false);
    }
  }

  function closePopup() {
    setSelected(null);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Quotes</h2>
          <p className="mt-2 text-[#9bb0c3]">
            {quotes.length} total · {unreadCount} unread
          </p>
        </div>
      </div>

      <div className="grid gap-3 rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block sm:col-span-2 lg:col-span-2">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-[#9bb0c3]">Search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name, phone, email, service..."
            className="w-full rounded-xl border border-[#2a3b4f] bg-[#0b1520] px-3.5 py-2.5 text-sm text-[#e8eef4] outline-none focus:border-[#4da3d9]"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-[#9bb0c3]">Date</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="w-full rounded-xl border border-[#2a3b4f] bg-[#0b1520] px-3.5 py-2.5 text-sm text-[#e8eef4] outline-none focus:border-[#4da3d9]"
          >
            <option value="newest">Latest (new to old)</option>
            <option value="oldest">Oldest (old to new)</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-[#9bb0c3]">Status</span>
          <select
            value={readFilter}
            onChange={(e) => setReadFilter(e.target.value as ReadFilter)}
            className="w-full rounded-xl border border-[#2a3b4f] bg-[#0b1520] px-3.5 py-2.5 text-sm text-[#e8eef4] outline-none focus:border-[#4da3d9]"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </label>
      </div>

      {loading ? <p className="text-sm text-[#9bb0c3]">Loading quotes...</p> : null}
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
                  <th className="px-4 py-3 font-bold">Date</th>
                  <th className="px-4 py-3 font-bold">Name</th>
                  <th className="px-4 py-3 font-bold">Phone</th>
                  <th className="px-4 py-3 font-bold">Service</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-[#9bb0c3]">
                      No quotes match your filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((quote) => (
                    <tr
                      key={quote.id}
                      onClick={() => void openQuote(quote)}
                      className={`cursor-pointer border-t border-[#2a3b4f] transition hover:bg-[#1c3348] ${
                        quote.read ? "" : "bg-[#1a6397]/10"
                      }`}
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap text-[#9bb0c3]">
                        {quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "—"}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-white">
                        {quote.name}
                        {!quote.read ? (
                          <span className="ml-2 inline-flex rounded-full bg-[#1a6397] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            New
                          </span>
                        ) : null}
                      </td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">{quote.phone}</td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">{quote.service || "—"}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                            quote.read
                              ? "bg-[#2a3b4f] text-[#9bb0c3]"
                              : "bg-[#1a6397]/25 text-[#74c1f8]"
                          }`}
                        >
                          {quote.read ? "Read" : "Unread"}
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

      {selected ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close quote details"
            onClick={closePopup}
          />
          <div className="relative z-[81] w-full max-w-xl rounded-[20px] border border-[#2a3b4f] bg-[#152536] p-5 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,.5)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#74c1f8]">
                  {selected.read ? "Read" : "Unread"}
                  {marking ? " · Marking..." : ""}
                </p>
                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.02em] text-white">{selected.name}</h3>
                <p className="mt-1 text-sm text-[#9bb0c3]">
                  {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : "—"}
                </p>
              </div>
              <button
                type="button"
                onClick={closePopup}
                className="rounded-full border border-[#2a3b4f] px-3 py-1.5 text-xs font-bold text-[#e8eef4] hover:bg-[#0b1520]"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              <DetailRow label="Phone">
                <a href={`tel:${selected.phone}`} className="text-[#74c1f8] hover:underline">
                  {selected.phone}
                </a>
              </DetailRow>
              <DetailRow label="Email">
                {selected.email ? (
                  <a href={`mailto:${selected.email}`} className="text-[#74c1f8] hover:underline">
                    {selected.email}
                  </a>
                ) : (
                  "—"
                )}
              </DetailRow>
              <DetailRow label="Service">{selected.service || "—"}</DetailRow>
              <DetailRow label="Property">{selected.property || "—"}</DetailRow>
              <DetailRow label="Locale">{selected.locale.toUpperCase()}</DetailRow>
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#9bb0c3]">Message</p>
                <p className="rounded-xl border border-[#2a3b4f] bg-[#0b1520] p-3 text-[#c9d6e3] whitespace-pre-wrap">
                  {selected.message || "No message"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 border-b border-[#2a3b4f] pb-2">
      <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-[0.08em] text-[#9bb0c3]">{label}</span>
      <span className="text-[#e8eef4]">{children}</span>
    </div>
  );
}
