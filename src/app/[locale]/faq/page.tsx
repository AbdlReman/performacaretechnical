"use client";

import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function FaqPage() {
  const { t, locale, localizeHref } = useLanguage();
  const p = t.faqPage;
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
              {p.titleBefore} <em className="not-italic text-sky">{p.titleHighlight}</em>
            </>
          }
        >
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-8">
            {p.leadBefore}{" "}
            <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
              +971 50 224 7589
            </a>
          </p>
          <CtaButtons
            primaryLabel={t.common.getQuote}
            secondaryHref="/services"
            secondaryLabel={t.common.viewServices}
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(900px,92%)] mx-auto">
            <div className="reveal">
              {p.faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0} className="border-b border-line py-5">
                  <summary className="cursor-pointer font-bold text-[17px] sm:text-[18px] list-none flex justify-between gap-5 items-start">
                    {faq.q}
                  </summary>
                  <p className="text-muted mt-3 text-[15px] sm:text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="reveal mt-12 rounded-[22px] border border-line bg-surface p-7 sm:p-9 text-center">
              <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.02em] mb-3">
                {t.common.stillNeedHelp}
              </h2>
              <p className="text-muted mb-6 max-w-[560px] mx-auto">
                {p.helpLeadBefore}{" "}
                <a href="tel:+971502247589" className="text-blue font-bold">
                  +971 50 224 7589
                </a>
                {p.helpLeadMid}{" "}
                <a href="mailto:info@performacaretechnical.ae" className="text-blue font-bold">
                  {t.common.email}
                </a>
                {p.helpLeadAfter}
              </p>
              <div className="flex justify-center gap-3.5 flex-wrap">
                <Link
                  href={localizeHref("/#quote")}
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  {t.common.getQuote} {arrow}
                </Link>
                <Link
                  href={localizeHref("/process")}
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  {t.common.seeHowItWorks}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
