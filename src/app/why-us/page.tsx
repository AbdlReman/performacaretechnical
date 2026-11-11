import type { Metadata } from "next";
import Image from "next/image";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Why Choose Performa Care | Trusted Cleaning & Staffing Partner in Dubai",
  description:
    "2-hour response, trained professionals, eco-friendly products, agreed schedules and one partner for cleaning, staffing and technical maintenance across Dubai.",
};

const reasons = [
  {
    title: "2-Hour Response",
    desc: "We respond to any issue on your site within 2 hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Trained Professionals",
    desc: "Skilled, dedicated team members who use modern equipment and follow clear standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Products",
    desc: "Non-toxic, biodegradable cleaning products. We also run a sustainability programme focused on waste segregation and responsible resource use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
        <path d="M5 21l7-7" />
      </svg>
    ),
  },
  {
    title: "Agreed Schedules",
    desc: "Visit dates are agreed for each site so management stays consistent and predictable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M8 7V3m8 4V3M4 11h16M5 5h14v16H5z" />
      </svg>
    ),
  },
  {
    title: "One Partner, Every Space",
    desc: "Homes, offices, hotels, restaurants, cafés, retail, warehouses, and staff accommodation. Cleaning, staffing, and technical maintenance under one roof.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Sustainable by Design",
    desc: "Eco-friendly products, waste segregation, and water & energy-saving methods aligned with Dubai’s sustainability goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
      </svg>
    ),
  },
];

export default function WhyUsPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Why Choose Performa Care"
          title={
            <>
              A Well-Maintained Property Means Comfort, Productivity &amp;{" "}
              <em className="not-italic text-sky">Peace of Mind</em>
            </>
          }
          image="/images/update-banner1-1-480x400.jpg"
        >
          <div className="mt-2">
            <CtaButtons
              primaryHref="/#quote"
              primaryLabel="Get a Quote"
              secondaryLabel={null}
              showCall
            />
          </div>
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="reveal border border-line rounded-[18px] p-6 bg-white hover:-translate-y-1 transition duration-300 hover:shadow-[0_24px_50px_-24px_rgba(13,34,54,.3)]"
                >
                  <IconBox className="mb-4">{item.icon}</IconBox>
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
                Response time to any issue on your site
              </div>
            </div>
            <div className="reveal">
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Choose a single trusted partner in Dubai for keeping your property clean, well
                maintained, and properly staffed.
              </h2>
              <div className="flex gap-3.5 flex-wrap">
                <a
                  href="/#quote"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  Get a Quote →
                </a>
                <a
                  href="tel:+971502247589"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  Call +971 50 224 7589
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
