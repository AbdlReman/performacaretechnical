"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

const reasonIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="0">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="1">
      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="2">
      <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
      <path d="M5 21l7-7" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="3">
      <path d="M8 7V3m8 4V3M4 11h16M5 5h14v16H5z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="4">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
];

export default function AboutUsPage() {
  const { t, locale, localizeHref } = useLanguage();
  const p = t.aboutPage;
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={p.eyebrow}
          title={
            <>
              {p.titleBefore}{" "}
              <em className="not-italic text-sky">{p.titleHighlight}</em> {p.titleAfter}
            </>
          }
          image="/images/h8-banner1.jpg"
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">{p.lead}</p>
          <CtaButtons
            primaryHref="/#quote"
            primaryLabel={t.common.getCleaningQuote}
            secondaryHref="/staff-supply"
            secondaryLabel={t.common.hireStaff}
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.whoEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.whoTitle}
              </h2>
              <p className="text-muted text-[17px] mb-5">{p.whoP1}</p>
              <p className="text-muted text-[17px]">{p.whoP2}</p>
            </div>
            <Image
              src="/images/hotel-housekeeping-towel-swan-decoration2.jpeg"
              alt="Performa Care room service and housekeeping in Dubai"
              width={900}
              height={600}
              className="reveal w-full h-[300px] sm:h-[420px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.whyEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                {p.whyTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {p.reasons.map((item, i) => (
                <article
                  key={item.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <IconBox className="mb-4">{reasonIcons[i]}</IconBox>
                  <h3 className="text-lg font-bold mb-2 tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-muted text-[15px]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.areasEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.areasTitle}
              </h2>
              <p className="text-muted text-[17px] mb-6">{p.areasLead}</p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {p.spaces.map((space) => (
                  <span
                    key={space}
                    className="text-sm font-semibold bg-surface border border-line px-3.5 py-2 rounded-full text-[#33495e]"
                  >
                    {space}
                  </span>
                ))}
              </div>
              <div className="flex gap-3.5 flex-wrap">
                <Link
                  href={localizeHref("/services")}
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  {t.common.viewServices} {arrow}
                </Link>
                <Link
                  href={localizeHref("/hospitality")}
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  {t.nav.hospitality}
                </Link>
              </div>
            </div>

            <div className="reveal bg-white border border-line rounded-[22px] p-7 sm:p-9">
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] mb-5">{p.contactTitle}</h3>
              <div className="grid gap-4 mb-7">
                <div className="flex gap-3 items-start">
                  <IconBox>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block mb-1">{t.common.office}</b>
                    <span className="text-muted text-[15px]">{p.address}</span>
                  </div>
                </div>
                <a href="tel:+971502247589" className="flex gap-3 items-start hover:opacity-80 transition">
                  <IconBox>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block mb-1">{t.common.phone}</b>
                    <span className="text-muted text-[15px]">+971 50 224 7589</span>
                  </div>
                </a>
                <a
                  href="mailto:info@performacaretechnical.ae"
                  className="flex gap-3 items-start hover:opacity-80 transition"
                >
                  <IconBox>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block mb-1">{t.form.email}</b>
                    <span className="text-muted text-[15px]">{t.common.email}</span>
                  </div>
                </a>
                <a
                  href="mailto:support@performacaretechnical.ae"
                  className="flex gap-3 items-start hover:opacity-80 transition"
                >
                  <IconBox>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block mb-1">{t.common.support}</b>
                    <span className="text-muted text-[15px]">{t.common.supportEmail}</span>
                  </div>
                </a>
              </div>
              <CtaButtons
                primaryHref="/#quote"
                primaryLabel={t.common.getCleaningQuote}
                secondaryHref="/staff-supply"
                secondaryLabel={t.common.hireStaff}
                showCall={false}
                light={false}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
