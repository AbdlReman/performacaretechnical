"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

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
      <h3 className="text-[22px] font-extrabold mb-[18px] tracking-[-0.02em]">
        Get a cleaning quote or hire staff
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="n1" className="text-[13px] font-bold block mb-1.5">
            Full name
          </label>
          <input
            id="n1"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          />
        </div>
        <div>
          <label htmlFor="p1" className="text-[13px] font-bold block mb-1.5">
            Phone
          </label>
          <input
            id="p1"
            name="phone"
            type="tel"
            required
            placeholder="+971"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          />
        </div>
      </div>

      <label htmlFor="e1" className="text-[13px] font-bold block mb-1.5">
        Email
      </label>
      <input
        id="e1"
        name="email"
        type="email"
        placeholder="you@company.com"
        className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="s1" className="text-[13px] font-bold block mb-1.5">
            Service
          </label>
          <select
            id="s1"
            name="service"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          >
            <option>Commercial cleaning</option>
            <option>Residential cleaning</option>
            <option>Hire cleaning / housekeeping staff</option>
            <option>Hire office boys</option>
            <option>Hire waiters / hospitality staff</option>
            <option>Maintenance – MEP</option>
            <option>Special services</option>
          </select>
        </div>
        <div>
          <label htmlFor="t1" className="text-[13px] font-bold block mb-1.5">
            Property type
          </label>
          <select
            id="t1"
            name="property"
            className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card"
          >
            <option>Office</option>
            <option>Villa / Home</option>
            <option>Retail / Mall</option>
            <option>Hotel / Restaurant</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <label htmlFor="m1" className="text-[13px] font-bold block mb-1.5">
        Message
      </label>
      <textarea
        id="m1"
        name="message"
        rows={3}
        placeholder="Tell us about your requirements"
        className="w-full px-3.5 py-3 border border-line rounded-[10px] text-[15px] bg-surface mb-3.5 focus:outline-2 focus:outline-sky focus:bg-card resize-y"
      />

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5 cursor-pointer"
      >
        Send Request →
      </button>

      {sent && (
        <div className="bg-[#e7f8ee] text-[#166534] p-3 rounded-[10px] mt-3 font-semibold">
          Thank you! We&apos;ll be in touch shortly.
        </div>
      )}
    </form>
  );
}
