"use client";

import Image from "next/image";
import Link from "next/link";
import IconBox from "@/components/IconBox";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

const serviceMedia = [
  {
    img: "/images/shopping-mall-cleaning-660x410.jpg",
    alt: "Commercial floor cleaning in a modern Dubai mall",
  },
  {
    img: "/images/update-banner1-1-480x400.jpg",
    alt: "Professional window cleaning for residential properties",
  },
  {
    img: "/images/manpowerstaffsupply.jpg",
    alt: "Trained cleaning staff ready for supply",
  },
  {
    img: "/images/Hospitalitystaffing.jpg",
    alt: "Hospitality and event staffing team",
  },
  {
    img: "/images/MaintenanceMEP.jpg",
    alt: "Technician performing professional maintenance",
  },
  {
    img: "/images/shopping-mall-cleaning-660x410.jpg",
    alt: "Specialist floor polishing and surface care",
  },
];

const staffIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="0">
      <path d="M9 3h6l-1 5h-4zM7 21l3-13h4l3 13z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="1">
      <path d="M3 11l9-7 9 7v10H3z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="2">
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M9 7V4h6v3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="3">
      <path d="M4 18h16M6 18a6 6 0 0112 0M12 9V7" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="4">
      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
      <path d="M10 21v-5h4v5" />
    </svg>
  ),
];

const whyIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="0">
      <path d="M8 7V3m8 4V3M4 11h16M5 5h14v16H5z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="1">
      <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" key="2">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
];

const processNums = ["01", "02", "03", "04"];

export default function Home() {
  const { t, locale, localizeHref } = useLanguage();
  const arrow = locale === "ar" ? "←" : "→";
  const h = t.home;

  return (
    <>
      <Reveal />
      <SiteHeader />

      <main>
        <section className="relative text-white pt-20 pb-[150px] sm:pt-[120px] overflow-hidden">
          <Image
            src="/images/bg-slider91.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center -z-20"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(100deg, rgba(13,34,54,.94) 0%, rgba(13,34,54,.75) 45%, rgba(26,99,151,.35) 100%)",
            }}
          />
          <div className="w-[min(1180px,92%)] mx-auto relative">
            <span className="inline-flex gap-2 items-center bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full text-[13px] font-semibold">
              <i className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_0_4px_rgba(74,222,128,.25)]" />
              {h.heroPill}
            </span>
            <h1 className="text-[clamp(34px,5.6vw,64px)] font-extrabold max-w-[780px] my-3.5 tracking-[-0.02em] leading-[1.15]">
              {h.heroTitleBefore}{" "}
              <em className="not-italic text-sky">{h.heroTitleHighlight}</em> {h.heroTitleAfter}
            </h1>
            <p className="text-lg max-w-[640px] text-[#d8e4ee] mb-4">{h.heroP1}</p>
            <p className="text-base text-white font-semibold border-l-[3px] border-sky pl-3.5 mb-8 max-w-[640px]">
              {h.heroP2}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link
                href={localizeHref("/#quote")}
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                {t.common.getCleaningQuote} {arrow}
              </Link>
              <Link
                href={localizeHref("/staff-supply")}
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-white text-ink border-2 border-transparent transition hover:bg-sky"
              >
                {t.common.hireStaff}
              </Link>
              <a
                href="tel:+971502247589"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-white/60 text-white transition hover:bg-white hover:text-ink"
              >
                {t.common.call}
              </a>
            </div>
          </div>
        </section>

        <div className="relative z-[2] -mt-[70px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="bg-white rounded-[18px] shadow-[0_30px_60px_-25px_rgba(13,34,54,.25)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {h.trust.map((item, i) => {
                const trustCellClass = [
                  "p-7 flex gap-3.5 items-start border-b sm:border-r border-line sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:border-b-0",
                  "p-7 flex gap-3.5 items-start border-b lg:border-b-0 lg:border-r border-line",
                  "p-7 flex gap-3.5 items-start border-b sm:border-b-0 sm:border-r border-line",
                  "p-7 flex gap-3.5 items-start",
                ][i];
                return (
                <div key={item.title} className={trustCellClass}>
                  <IconBox>
                    {i === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
                        <path d="M5 21l7-7" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M14 7l3-3 3 3-3 3M17 4v0M4 20l9-9" />
                        <circle cx="6" cy="18" r="2" />
                      </svg>
                    )}
                  </IconBox>
                  <div>
                    <b className="block text-base">{item.title}</b>
                    <span className="text-sm text-muted">{item.desc}</span>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>

        <section id="services" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal flex justify-between items-end gap-8 mb-[46px] flex-wrap">
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  {h.servicesEyebrow}
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                  {h.servicesTitle.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h2>
              </div>
              <div className="max-w-[640px]">
                <p className="text-muted text-[17px] mb-3">{h.servicesLead}</p>
                <Link href={localizeHref("/services")} className="text-blue font-bold hover:underline">
                  {t.common.viewAllServices} {arrow}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {h.services.map((s, i) => (
                <article
                  key={s.title}
                  className="reveal border border-line rounded-[18px] overflow-hidden bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(13,34,54,.3)]"
                >
                  <Image
                    src={serviceMedia[i].img}
                    alt={serviceMedia[i].alt}
                    width={800}
                    height={400}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 tracking-[-0.02em]">{s.title}</h3>
                    <p className="text-muted text-[15px] mb-3.5">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold bg-surface px-2.5 py-1 rounded-full text-[#33495e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="staff" className="pb-16 sm:pb-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal flex justify-between items-end gap-8 mb-[46px] flex-wrap">
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  {h.staffEyebrow}
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                  {h.staffTitle}
                </h2>
              </div>
              <p className="text-muted text-[17px] max-w-[640px]">{h.staffLead}</p>
            </div>

            <div className="grid grid-cols-1 min-[340px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[18px]">
              {h.staffRoles.map((role, i) => (
                <div
                  key={role.title}
                  className="reveal border border-line rounded-[18px] p-5 sm:p-6 bg-linear-to-b from-[#f3f9fe] to-white min-w-0"
                >
                  <IconBox className="mb-3.5">{staffIcons[i]}</IconBox>
                  <b className="block text-[17px] mb-1">{role.title}</b>
                  <span className="text-sm text-muted">{role.desc}</span>
                </div>
              ))}
            </div>

            <div className="reveal text-center mt-9 flex justify-center gap-3.5 flex-wrap">
              <Link
                href={localizeHref("/#quote")}
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                {t.common.hireTrainedStaff} {arrow}
              </Link>
              <Link
                href={localizeHref("/staff-supply")}
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
              >
                {t.common.staffSupplyPage}
              </Link>
            </div>
          </div>
        </section>

        <section id="why" className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <div className="reveal relative">
              <Image
                src="/images/h8-banner1.jpg"
                alt="Performa Care hospitality and cleaning professional"
                width={1000}
                height={1200}
                className="rounded-3xl h-[340px] lg:h-[520px] w-full object-cover"
              />
              <div className="absolute left-4 lg:-left-5 bottom-[30px] bg-blue text-white px-5 py-5 rounded-2xl max-w-[240px] shadow-[0_20px_40px_-15px_rgba(26,99,151,.6)]">
                <b className="text-[28px] block leading-none">2 hrs</b>
                {h.whyBadge}
              </div>
            </div>

            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {h.whyEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                {h.whyTitle}
              </h2>
              <p className="text-muted text-[17px] max-w-[640px]">{h.whyLead}</p>
              <ul className="list-none mt-7 grid gap-[18px]">
                {h.whyItems.map((item, i) => (
                  <li key={item.title} className="flex gap-4 bg-white p-[18px] rounded-[14px] border border-line">
                    <IconBox>{whyIcons[i]}</IconBox>
                    <div>
                      <b className="block">{item.title}</b>
                      <span className="text-muted text-[15px]">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="process" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal text-center max-w-[680px] mx-auto">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {h.processEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                {h.processTitle}
              </h2>
              <p className="text-muted text-[17px] mx-auto">{h.processLead}</p>
            </div>

            <div className="steps-line relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 mt-[50px]">
              {h.processSteps.map((step, i) => (
                <div
                  key={processNums[i]}
                  className="reveal relative text-left md:text-center grid grid-cols-[56px_1fr] md:block gap-x-[18px] px-0 md:px-2.5"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue text-blue font-extrabold grid place-items-center text-lg relative row-span-2 md:mx-auto md:mb-[18px]">
                    {processNums[i]}
                  </div>
                  <h3 className="text-lg font-bold mb-1.5 tracking-[-0.02em]">{step.title}</h3>
                  <p className="text-muted text-[15px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-[90px] bg-[#0d2236] text-white">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-[#74c1f8] mb-3">
                {h.testiEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5 text-white">
                {h.testiTitle}
              </h2>
              <p className="text-[#a9bccd] text-[17px] max-w-[640px]">{h.testiLead}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] mt-10">
              {h.testimonials.map((item) => (
                <div
                  key={item.name}
                  className="reveal bg-white/6 border border-dashed border-[#74c1f8]/50 rounded-[18px] p-[26px]"
                >
                  <p className="text-[#d4e1ec] italic mb-4">&ldquo;{item.quote}&rdquo;</p>
                  <b className="text-[#74c1f8]">{item.name}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-[60px]">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {h.faqEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                {h.faqTitle}
              </h2>
              <p className="text-muted text-[17px] mb-3">
                {h.faqLeadBefore}{" "}
                <a href="tel:+971502247589" className="text-blue font-bold">
                  +971 50 224 7589
                </a>
                .
              </p>
              <Link href={localizeHref("/faq")} className="text-blue font-bold hover:underline">
                {t.common.viewAllFaqs} {arrow}
              </Link>
            </div>
            <div className="reveal">
              {h.faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0} className="border-b border-line py-5">
                  <summary className="cursor-pointer font-bold text-[17px] list-none flex justify-between gap-5 items-start">
                    {faq.q}
                  </summary>
                  <p className="text-muted mt-2.5">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="cta-band py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-[50px] items-center text-white">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-[#74c1f8] mb-3">
                {h.quoteEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5 text-white">
                {h.quoteTitle}
              </h2>
              <p className="text-[#cfe2f2] text-[17px] max-w-[640px]">{h.quoteLead}</p>
              <div className="mt-7 grid gap-3.5">
                <a href="tel:+971502247589" className="flex gap-3 items-center font-semibold">
                  <span className="shrink-0 w-[46px] h-[46px] rounded-xl bg-white/14 grid place-items-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                    </svg>
                  </span>
                  +971 50 224 7589
                </a>
                <a
                  href="mailto:info@performacaretechnical.com"
                  className="flex gap-3 items-center font-semibold"
                >
                  <span className="shrink-0 w-[46px] h-[46px] rounded-xl bg-white/14 grid place-items-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </span>
                  {t.common.email}
                </a>
                <div className="flex gap-3 items-center font-semibold">
                  <span className="shrink-0 w-[46px] h-[46px] rounded-xl bg-white/14 grid place-items-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  {h.quoteAddress}
                </div>
              </div>
            </div>

            <div className="reveal">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
