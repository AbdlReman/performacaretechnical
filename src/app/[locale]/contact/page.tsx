"use client";

import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  const p = t.contactPage;

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
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-2">{p.lead}</p>
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <div className="reveal bg-white border border-line rounded-[22px] p-7 sm:p-9">
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-5">{p.detailsTitle}</h2>
              <div className="grid gap-4">
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
            </div>

            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.formEyebrow}
              </span>
              <h2 className="text-[clamp(26px,3.5vw,36px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3">
                {p.formTitle}
              </h2>
              <p className="text-muted text-[16px] mb-7 max-w-[560px]">{p.formLead}</p>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
