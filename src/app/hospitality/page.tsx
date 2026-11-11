import type { Metadata } from "next";
import Image from "next/image";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Hospitality Services in Dubai | Waiters, Waitresses & Event Staff | Performa Care",
  description:
    "Hire trained waiters, waitresses, housekeeping and hospitality staff for hotels, restaurants, cafés, serviced apartments and events across Dubai. Call +971 50 224 7589.",
};

const staffing = [
  {
    title: "Waiters & Waitresses",
    desc: "Event-ready staff for weddings, corporate functions, and private parties. Courteous, well-presented, and efficient.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M4 18h16M6 18a6 6 0 0112 0M12 9V7" />
      </svg>
    ),
  },
  {
    title: "Hospitality Staff",
    desc: "Support for hotels, restaurants, cafés, and serviced apartments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M10 21v-5h4v5" />
      </svg>
    ),
  },
  {
    title: "Housekeeping Staff",
    desc: "Trained staff for homes, hotels, serviced apartments, and staff accommodation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 11l9-7 9 7v10H3z" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

const reasons = [
  "Fast deployment of trained staff",
  "Professional presentation and service standards",
  "Flexible for one-off events or ongoing requirements",
  "One trusted partner that also handles cleaning and technical maintenance when needed",
];

export default function HospitalityPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Hospitality Services in Dubai"
          title={
            <>
              Trained Waiters, Waitresses &amp;{" "}
              <em className="not-italic text-sky">Hospitality Staff</em> for Events and Properties
            </>
          }
          image="/images/update-banner2-372x401.jpg"
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">
            Performa Care Hospitality Services supplies experienced, courteous hospitality staff for
            hotels, restaurants, cafés, serviced apartments, and events across Dubai.
          </p>
          <CtaButtons
            primaryHref="/#quote"
            primaryLabel="Hire Hospitality Staff"
            secondaryHref="/#quote"
            secondaryLabel="Get a Quote"
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Service Standards
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Event-ready professionals who understand hospitality
              </h2>
              <p className="text-muted text-[17px]">
                Whether you need waiters and waitresses for a corporate function, wedding, or private
                party, or reliable housekeeping and support staff for a hospitality property, we
                provide trained professionals who understand service standards.
              </p>
            </div>
            <Image
              src="/images/Event-ready.jpg"
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
                Hospitality Staffing
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                Staff we supply for hospitality
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {staffing.map((role) => (
                <article
                  key={role.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <IconBox className="mb-4">{role.icon}</IconBox>
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
                Why Choose Us
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Why choose Performa Care for hospitality staffing
              </h2>
              <p className="text-muted text-[17px] mb-6">
                We focus on reliable execution and attention to detail so your guests experience
                consistent service.
              </p>
              <ul className="grid gap-3.5">
                {reasons.map((reason) => (
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
            <div
              className="reveal rounded-[22px] p-8 sm:p-10 text-white"
              style={{ background: "linear-gradient(135deg, var(--blue), #0f3f63)" }}
            >
              <h3 className="text-[28px] font-extrabold tracking-[-0.02em] mb-3 text-white">
                Book waiters for events or hire hospitality staff in Dubai.
              </h3>
              <p className="text-[#cfe2f2] mb-7">
                Tell us about your event or property needs and we&apos;ll arrange trained hospitality
                staff quickly.
              </p>
              <CtaButtons
                primaryHref="/#quote"
                primaryLabel="Hire Hospitality Staff"
                secondaryHref="/#quote"
                secondaryLabel="Get a Quote"
                showCall
              />
              <p className="mt-5 text-[#cfe2f2]">
                Call{" "}
                <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
                  +971 50 224 7589
                </a>
                {" | "}
                <a
                  href="mailto:info@performacaretechnical.com"
                  className="font-bold text-white underline underline-offset-4"
                >
                  info@performacaretechnical.com
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
