import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Manpower & Staff Supply | Cleaners, Housekeeping & Hospitality | Performa Care",
  description:
    "Hire trained cleaners, housekeeping staff, office boys, waiters and hospitality staff across Dubai. Fast deployment with replacement support.",
};

const roles = [
  {
    title: "Cleaning Staff",
    desc: "Trained cleaners for offices, villas, retail spaces, warehouses and more. Background-checked, uniformed and ready for daily or contract work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 3h6l-1 5h-4zM7 21l3-13h4l3 13z" />
      </svg>
    ),
  },
  {
    title: "Housekeeping Staff",
    desc: "For homes, hotels, serviced apartments and staff accommodation. Experienced in maintaining high standards of cleanliness and organisation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 11l9-7 9 7v10H3z" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Office Boys",
    desc: "Reliable daily support for your office. Tea and coffee service, pantry management, document handling, guest assistance and general office support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V4h6v3" />
      </svg>
    ),
  },
  {
    title: "Waiters & Waitresses",
    desc: "Event-ready staff for weddings, corporate functions and private parties. Courteous, well-presented and trained in professional service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M4 18h16M6 18a6 6 0 0112 0M12 9V7" />
      </svg>
    ),
  },
  {
    title: "Hospitality Staff",
    desc: "Additional support for hotels, restaurants, cafés and serviced apartments as needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M10 21v-5h4v5" />
      </svg>
    ),
  },
];

const reasons = [
  "Trained professionals",
  "Fast deployment",
  "Replacement support when required",
  "One partner for both cleaning services and people",
];

export default function StaffSupplyPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Manpower & Staff Supply"
          title={
            <>
              Trained Cleaners, Housekeeping, Office Boys &amp;{" "}
              <em className="not-italic text-sky">Hospitality Staff</em> Across Dubai
            </>
          }
          image="/images/h8-banner1.jpg"
        >
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-8">
            Need people, not just a service? Performa Care supplies trained, reliable staff for
            homes, offices, hotels, restaurants and events across Dubai.
          </p>
          <CtaButtons
            primaryHref="/#quote"
            primaryLabel="Hire Staff"
            secondaryHref="/services"
            secondaryLabel="View Services"
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal mb-12 max-w-[680px]">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Roles We Supply
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                Staff ready for your site
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {roles.map((role) => (
                <article
                  key={role.title}
                  className="reveal border border-line rounded-[18px] p-6 bg-linear-to-b from-[#f3f9fe] to-white"
                >
                  <IconBox className="mb-4">{role.icon}</IconBox>
                  <h3 className="text-xl font-bold mb-2 tracking-[-0.02em]">{role.title}</h3>
                  <p className="text-muted text-[15px]">{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Why Choose Our Staff
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Why businesses and property managers choose our staff
              </h2>
              <ul className="grid gap-3.5">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex gap-3 items-center bg-white border border-line rounded-[14px] px-4 py-3.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-blue shrink-0" />
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
                Hire trained staff today.
              </h3>
              <p className="text-[#cfe2f2] mb-7">
                Tell us the role, location and schedule you need — we&apos;ll deploy the right people
                for your site.
              </p>
              <CtaButtons
                primaryHref="/#quote"
                primaryLabel="Hire Staff"
                secondaryHref="/process"
                secondaryLabel="See Process"
                showCall
              />
              <p className="mt-5 text-[#cfe2f2]">
                Call{" "}
                <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
                  +971 50 224 7589
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="w-[min(1180px,92%)] mx-auto reveal text-center text-muted">
            Looking for cleaning contracts as well?{" "}
            <Link href="/services" className="text-blue font-bold hover:underline">
              Explore our full services
            </Link>
            .
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
