"use client";

import Image from "next/image";
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
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="5">
      <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
    </svg>
  ),
];

export default function WhyUsPage() {
  const { t, locale, localizeHref } = useLanguage();
  const p = t.whyPage;
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
              <em className="not-italic text-sky">{p.titleHighlight}</em>
            </>
          }
          image="/images/update-banner1-1-480x400.jpg"
        >
          <div className="mt-2">
            <CtaButtons primaryHref="/#quote" primaryLabel={t.common.getQuote} secondaryLabel={null} showCall />
          </div>
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {p.reasons.map((item, i) => (
                <article
                  key={item.title}
                  className="reveal border border-line rounded-[18px] p-6 bg-white hover:-translate-y-1 transition duration-300 hover:shadow-[0_24px_50px_-24px_rgba(13,34,54,.3)]"
                >
                  <IconBox className="mb-4">{reasonIcons[i]}</IconBox>
                  <h2 className="text-xl font-bold mb-2 tracking-[-0.02em]">{item.title}</h2>
                  <p className="text-muted text-[15px]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <div className="reveal relative">
              <Image
                src="/images/whyus.jpg"
                alt="Trusted Performa Care partner for clean and well-maintained properties in Dubai"
                width={1000}
                height={1200}
                className="rounded-3xl h-[340px] lg:h-[480px] w-full object-cover"
              />
              <div className="absolute left-4 lg:-left-5 bottom-[30px] bg-blue text-white px-5 py-5 rounded-2xl max-w-[240px] shadow-[0_20px_40px_-15px_rgba(26,99,151,.6)]">
                <b className="text-[28px] block leading-none">2 hrs</b>
                {p.badge}
              </div>
            </div>
            <div className="reveal">
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.closing}
              </h2>
              <div className="flex gap-3.5 flex-wrap">
                <a
                  href={localizeHref("/#quote")}
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  {t.common.getQuote} {arrow}
                </a>
                <a
                  href="tel:+971502247589"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  {t.common.call}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
