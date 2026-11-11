"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SubscribeSection() {
  const { t, locale } = useLanguage();
  const s = t.subscribe;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const arrow = locale === "ar" ? "←" : "→";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSent(false);
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          locale,
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(payload.error || s.error);
        setLoading(false);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(s.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="cta-band py-14 sm:py-16 text-white">
      <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        <div>
          <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-[#74c1f8] mb-3">
            {s.eyebrow}
          </span>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3">
            {s.title}
          </h2>
          <p className="text-[#cfe2f2] text-[16px] max-w-[560px]">{s.lead}</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-[18px] border border-white/15 bg-white/8 p-5 sm:p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="name"
              placeholder={s.namePh}
              className="w-full rounded-[10px] border border-white/20 bg-white/10 px-3.5 py-3 text-[15px] text-white placeholder:text-[#cfe2f2]/80 outline-none focus:border-[#74c1f8]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder={s.emailPh}
              className="w-full rounded-[10px] border border-white/20 bg-white/10 px-3.5 py-3 text-[15px] text-white placeholder:text-[#cfe2f2]/80 outline-none focus:border-[#74c1f8]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-[22px] py-3.5 text-[15px] font-bold text-[#0d2236] transition hover:bg-[#74c1f8] disabled:opacity-60"
          >
            {loading ? s.sending : s.submit} {arrow}
          </button>
          {error ? <p className="mt-3 text-sm font-semibold text-[#fecaca]">{error}</p> : null}
          {sent ? <p className="mt-3 text-sm font-semibold text-[#bbf7d0]">{s.thanks}</p> : null}
        </form>
      </div>
    </section>
  );
}
