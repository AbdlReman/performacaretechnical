"use client";

import CtaButtons from "@/components/CtaButtons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

const stepNums = ["01", "02", "03", "04"];

export default function ProcessPage() {
  const { t } = useLanguage();
  const p = t.processPage;

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
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-8">{p.lead}</p>
          <CtaButtons />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="steps-line relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {p.steps.map((step, i) => (
                <div
                  key={stepNums[i]}
                  className="reveal relative text-left md:text-center grid grid-cols-[56px_1fr] md:block gap-x-[18px]"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue text-blue font-extrabold grid place-items-center text-lg relative row-span-2 md:mx-auto md:mb-[18px] shadow-[0_10px_30px_-12px_rgba(26,99,151,.45)]">
                    {stepNums[i]}
                  </div>
                  <h2 className="text-xl font-bold mb-2 tracking-[-0.02em]">{step.title}</h2>
                  <p className="text-muted text-[15px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-[90px]">
          <div className="w-[min(900px,92%)] mx-auto">
            <div className="reveal grid gap-5">
              {p.steps.map((step, i) => (
                <article
                  key={`${stepNums[i]}-detail`}
                  className="border border-line rounded-[18px] p-6 sm:p-7 bg-surface flex gap-5 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue text-white font-extrabold grid place-items-center">
                    {stepNums[i]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
                    <p className="text-muted text-[15px]">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band py-16 sm:py-[90px] text-white">
          <div className="w-[min(1180px,92%)] mx-auto reveal text-center max-w-[760px]">
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.02em] mb-4 text-white">
              {p.ctaTitle}
            </h2>
            <div className="flex justify-center mb-5">
              <CtaButtons />
            </div>
            <p className="text-[#cfe2f2]">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
