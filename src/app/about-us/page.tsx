import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import IconBox from "@/components/IconBox";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Performa Care | Technical, Cleaning & Hospitality Services in Dubai",
  description:
    "Performa Care Technical Services and Performa Care Hospitality Services provide cleaning, trained staff supply, hospitality staffing and MEP maintenance across Dubai. 2-hour response. Call +971 50 224 7589.",
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
    desc: "Skilled teams that use modern equipment and follow clear standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Products",
    desc: "Non-toxic, biodegradable cleaning products as part of our sustainability program.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
        <path d="M5 21l7-7" />
      </svg>
    ),
  },
  {
    title: "Agreed Schedules",
    desc: "Visit dates are agreed for each site so management stays consistent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M8 7V3m8 4V3M4 11h16M5 5h14v16H5z" />
      </svg>
    ),
  },
  {
    title: "One Partner",
    desc: "Cleaning, staffing, and technical maintenance under one roof.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
];

const spaces = [
  "Offices",
  "Villas",
  "Hotels",
  "Restaurants",
  "Cafés",
  "Retail",
  "Warehouses",
  "Staff accommodation",
  "Event venues",
];

export default function AboutUsPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Performa Care"
          title={
            <>
              Professional Technical, Cleaning &amp;{" "}
              <em className="not-italic text-sky">Hospitality Services</em> in Dubai
            </>
          }
          image="/images/h8-banner1.jpg"
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">
            Performa Care Technical Services and Performa Care Hospitality Services are based in
            Dubai. We provide professional technical, maintenance, cleaning, and staffing solutions
            for residential, commercial, and business properties across Dubai.
          </p>
          <CtaButtons
            primaryHref="/#quote"
            primaryLabel="Get a Cleaning Quote"
            secondaryHref="/staff-supply"
            secondaryLabel="Hire Staff"
          />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Who We Are
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Comfort, productivity, and peace of mind
              </h2>
              <p className="text-muted text-[17px] mb-5">
                A well-maintained property is essential for comfort, productivity, and peace of mind.
                That is why we focus on reliable execution, attention to detail, and customer
                satisfaction on every site.
              </p>
              <p className="text-muted text-[17px]">
                Our team delivers commercial cleaning, residential cleaning, trained staff supply,
                hospitality staffing, and MEP maintenance. From regular office cleaning and villa deep
                cleans to marble polishing, carpet shampooing, and event waiters, we act as a single
                trusted partner.
              </p>
            </div>
            <Image
              src="/images/shopping-mall-cleaning-660x410.jpg"
              alt="Performa Care commercial cleaning services in Dubai"
              width={900}
              height={600}
              className="reveal w-full h-[300px] sm:h-[420px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                Why businesses and property managers choose us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <IconBox className="mb-4">{item.icon}</IconBox>
                  <h3 className="text-lg font-bold mb-2 tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-muted text-[15px]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Areas We Serve
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Across Dubai
              </h2>
              <p className="text-muted text-[17px] mb-6">
                We serve offices, villas, hotels, restaurants, cafés, retail, warehouses, staff
                accommodation, and event venues across Dubai.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {spaces.map((space) => (
                  <span
                    key={space}
                    className="text-sm font-semibold bg-surface border border-line px-3.5 py-2 rounded-full text-[#33495e]"
                  >
                    {space}
                  </span>
                ))}
              </div>
              <div className="flex gap-3.5 flex-wrap">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  View Services →
                </Link>
                <Link
                  href="/hospitality"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  Hospitality Services
                </Link>
              </div>
            </div>

            <div className="reveal bg-white border border-line rounded-[22px] p-7 sm:p-9">
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] mb-5">Contact</h3>
              <div className="grid gap-4 mb-7">
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
                    <b className="block mb-1">Office</b>
                    <span className="text-muted text-[15px]">
                      Office 476, 4th Floor, Arjumand Building, 17th St, Green Community Village, Dubai
                    </span>
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
                    <b className="block mb-1">Phone</b>
                    <span className="text-muted text-[15px]">+971 50 224 7589</span>
                  </div>
                </a>
                <a
                  href="mailto:info@performacaretechnical.com"
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
                    <b className="block mb-1">Email</b>
                    <span className="text-muted text-[15px]">info@performacaretechnical.com</span>
                  </div>
                </a>
              </div>
              <CtaButtons
                primaryHref="/#quote"
                primaryLabel="Get a Cleaning Quote"
                secondaryHref="/staff-supply"
                secondaryLabel="Hire Staff"
                showCall={false}
                light={false}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
