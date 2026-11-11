"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function QuoteForm() {
  const { t, locale } = useLanguage();
  const [sent, setSent] = useState(false);
  const arrow = locale === "ar" ? "←" : "→";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card rounded-[22px] p-6 sm:p-[34px] text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)]"
    >
      <h3 className="text-[22px] font-extrabold mb-[18px] tracking-[-0.02em]">{t.form.title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="n1" className="text-[13px] font-bold block mb-1.5">
            {t.form.fullName}
          </label>
          <input
            id="n1"
            name="name"
            required
            placeholder={t.form.fullNamePh}
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          />
        </div>
        <div>
          <label htmlFor="p1" className="text-[13px] font-bold block mb-1.5">
            {t.form.phone}
          </label>
          <input
            id="p1"
            name="phone"
            type="tel"
            required
            placeholder={t.form.phonePh}
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          />
        </div>
      </div>

      <label htmlFor="e1" className="text-[13px] font-bold block mb-1.5">
        {t.form.email}
      </label>
      <input
        id="e1"
        name="email"
        type="email"
        placeholder={t.form.emailPh}
        className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="s1" className="text-[13px] font-bold block mb-1.5">
            {t.form.service}
          </label>
          <select
            id="s1"
            name="service"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          >
            {t.form.services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="t1" className="text-[13px] font-bold block mb-1.5">
            {t.form.property}
          </label>
          <select
            id="t1"
            name="property"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          >
            {t.form.properties.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor="m1" className="text-[13px] font-bold block mb-1.5">
        {t.form.message}
      </label>
      <textarea
        id="m1"
        name="message"
        rows={3}
        placeholder={t.form.messagePh}
        className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card resize-y"
      />

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5 cursor-pointer"
      >
        {t.form.submit} {arrow}
      </button>

      {sent && (
        <div className="bg-[#e7f8ee] text-[#166534] p-3 rounded-[10px] mt-3 font-semibold">
          {t.form.thanks}
        </div>
      )}
    </form>
  );
}
