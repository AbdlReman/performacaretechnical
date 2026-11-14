"use client";

import Image from "next/image";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

const roleIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="0">
      <path d="M4 18h16M6 18a6 6 0 0112 0M12 9V7" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="1">
      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
      <path d="M10 21v-5h4v5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="2">
      <path d="M3 11l9-7 9 7v10H3z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
];

export default function HospitalityPage() {
  const { t } = useLanguage();
  const p = t.hospitalityPage;

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
          image="/images/update-banner2-372x401.jpg"
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">{p.lead}</p>
          <CtaButtons
            primaryHref="/#quote"
            primaryLabel={t.common.hireHospitalityStaff}
            secondaryHref="/#quote"
            secondaryLabel={t.common.getQuote}
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.standardsEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.standardsTitle}
              </h2>
              <p className="text-muted text-[17px]">{p.standardsLead}</p>
            </div>
            <Image
              src="/images/hotel-housekeeping-towel-swan-decoration2.jpeg"
              alt="Event-ready hospitality professionals in Dubai"
              width={900}
              height={700}
              className="reveal w-full h-[300px] sm:h-[400px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[680px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.staffingEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                {p.staffingTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {p.roles.map((role, i) => (
                <article
                  key={role.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <IconBox className="mb-4">{roleIcons[i]}</IconBox>
                  <h3 className="text-xl font-bold mb-2 tracking-[-0.02em]">{role.title}</h3>
                  <p className="text-muted text-[15px]">{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.whyEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.whyTitle}
              </h2>
              <p className="text-muted text-[17px] mb-6">{p.whyLead}</p>
              <ul className="grid gap-3.5">
                {p.reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex gap-3 items-start bg-surface border border-line rounded-[14px] px-4 py-3.5"
                  >
                    <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue shrink-0" />
                    <span className="font-semibold text-[15px]">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cta-band reveal rounded-[22px] p-8 sm:p-10 text-white">
              <h3 className="text-[28px] font-extrabold tracking-[-0.02em] mb-3 text-white">{p.bookTitle}</h3>
              <p className="text-[#cfe2f2] mb-7">{p.bookLead}</p>
              <CtaButtons
                primaryHref="/#quote"
                primaryLabel={t.common.hireHospitalityStaff}
                secondaryHref="/#quote"
                secondaryLabel={t.common.getQuote}
                showCall
              />
              <p className="mt-5 text-[#cfe2f2]">
                {t.faqPage.helpLeadBefore}{" "}
                <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
                  +971 50 224 7589
                </a>
                {t.faqPage.helpLeadMid}{" "}
                <a
                  href="mailto:info@performacaretechnical.ae"
                  className="font-bold text-white underline underline-offset-4"
                >
                  {t.common.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
