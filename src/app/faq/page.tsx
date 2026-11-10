import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "FAQ | Cleaning, Staff Supply & Maintenance Questions | Performa Care",
  description:
    "Answers about staff supply, Dubai coverage, 2-hour response, cleaning contracts, eco-friendly products, events staffing, MEP and how to get a quote.",
};

const faqs = [
  {
    q: "Do you supply staff as well as cleaning services?",
    a: "Yes. We supply trained cleaners, housekeeping staff, office boys, and waiters and waitresses for events and hospitality businesses.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve residential, commercial, and business properties across Dubai.",
  },
  {
    q: "How quickly can you respond to an issue?",
    a: "We respond to any issue within 2 hours.",
  },
  {
    q: "Do you offer regular or monthly cleaning contracts?",
    a: "Yes. We provide regular and monthly cleaning contracts with agreed visit dates.",
  },
  {
    q: "Are your cleaning products safe?",
    a: "Yes. We use eco-friendly, non-toxic, and biodegradable products.",
  },
  {
    q: "Can you supply staff for events?",
    a: "Yes. We supply experienced, courteous waiters and waitresses for weddings, corporate functions, and private parties.",
  },
  {
    q: "Do you offer marble and granite polishing?",
    a: "Yes. Marble polishing, granite polishing, carpet shampooing, and pressure washing are available as specialist services.",
  },
  {
    q: "Do you provide MEP / technical maintenance?",
    a: "Yes. We provide technical and MEP maintenance covering mechanical, electrical, and plumbing systems.",
  },
  {
    q: "How do I get a quote?",
    a: "Call +971 50 224 7589, email info@performacaretechnical.com, or use the quote form on the website.",
  },
  {
    q: "What makes Performa Care different?",
    a: "One trusted partner for cleaning, trained staff supply, and technical maintenance, with a 2-hour response, eco-friendly products, and agreed schedules for every site.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <em className="not-italic text-sky">Questions</em>
            </>
          }
        >
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-8">
            Can&apos;t find your answer? Call{" "}
            <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
              +971 50 224 7589
            </a>
          </p>
          <CtaButtons primaryLabel="Get a Quote" secondaryHref="/services" secondaryLabel="View Services" />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(900px,92%)] mx-auto">
            <div className="reveal">
              {faqs.map((faq, index) => (
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
                Still need help?
              </h2>
              <p className="text-muted mb-6 max-w-[560px] mx-auto">
                Call{" "}
                <a href="tel:+971502247589" className="text-blue font-bold">
                  +971 50 224 7589
                </a>
                , email{" "}
                <a href="mailto:info@performacaretechnical.com" className="text-blue font-bold">
                  info@performacaretechnical.com
                </a>
                , or use the quote form on the website.
              </p>
              <div className="flex justify-center gap-3.5 flex-wrap">
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  Get a Quote →
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  See How It Works
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
