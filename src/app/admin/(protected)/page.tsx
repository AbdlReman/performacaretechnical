"use client";

import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const [quoteCount, setQuoteCount] = useState<number | null>(null);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [blogCount, setBlogCount] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const [quotesRes, subsRes, blogsRes] = await Promise.all([
          fetch("/api/admin/quotes", { cache: "no-store" }),
          fetch("/api/admin/subscribers", { cache: "no-store" }),
          fetch("/api/admin/blogs", { cache: "no-store" }),
        ]);
        const quotesData = (await quotesRes.json().catch(() => ({}))) as { quotes?: unknown[] };
        const subsData = (await subsRes.json().catch(() => ({}))) as { subscribers?: unknown[] };
        const blogsData = (await blogsRes.json().catch(() => ({}))) as { blogs?: unknown[] };
        if (!alive) return;
        if (quotesRes.ok) setQuoteCount(quotesData.quotes?.length ?? 0);
        if (subsRes.ok) setSubscriberCount(subsData.subscribers?.length ?? 0);
        if (blogsRes.ok) setBlogCount(blogsData.blogs?.length ?? 0);
      } catch {
        // keep nulls
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  const stats = [
    {
      label: "Blogs",
      value: blogCount === null ? "…" : String(blogCount),
      note: "Draft + published posts",
    },
    {
      label: "Quotes",
      value: quoteCount === null ? "…" : String(quoteCount),
      note: "From website quote form",
    },
    {
      label: "Subscribers",
      value: subscriberCount === null ? "…" : String(subscriberCount),
      note: "From homepage subscribe form",
    },
    { label: "Admin language", value: "EN", note: "Admin panel is English only" },
  ];

  const quickLinks = [
    { href: "/admin/blogs", title: "Blogs", desc: "Create and publish posts with TinyMCE + SEO." },
    { href: "/admin/quotes", title: "Quote requests", desc: "Review incoming cleaning and staffing leads." },
    { href: "/admin/subscribers", title: "Subscribers", desc: "View newsletter and contact subscribers." },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Dashboard</h2>
        <p className="mt-2 max-w-2xl text-[#9bb0c3]">
          Live admin overview connected to MongoDB for blogs, quotes and subscribers.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#74c1f8]">{item.label}</p>
            <p className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-white">{item.value}</p>
            <p className="mt-2 text-sm text-[#9bb0c3]">{item.note}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[22px] border border-[#2a3b4f] bg-[#152536] p-6 sm:p-8">
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-white">Quick links</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-[#2a3b4f] bg-[#0b1520] p-5 transition hover:border-[#4da3d9]/50 hover:bg-[#121f2e]"
            >
              <p className="font-bold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-[#9bb0c3]">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
