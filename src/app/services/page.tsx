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
  title: "Our Services | Cleaning, Staffing & Technical Maintenance | Performa Care",
  description:
    "Professional cleaning, staffing and technical maintenance across Dubai — commercial, residential, special services, manpower supply, hospitality staffing and MEP.",
};

const sustainability = [
  {
    title: "Eco-Friendly Cleaning",
    desc: "We use non-toxic, biodegradable, and chemical-free products sourced from sustainable resources.",
  },
  {
    title: "Waste Reduction & Recycling",
    desc: "Our teams are trained to segregate waste effectively so recyclable materials are processed correctly and less waste goes to landfills.",
  },
  {
    title: "Water & Energy Conservation",
    desc: "Our processes and equipment are optimised to minimise water usage and energy consumption.",
  },
  {
    title: "Sustainable Sourcing",
    desc: "We prioritise suppliers and partners who follow environmentally responsible practices.",
  },
  {
    title: "Continuous Improvement",
    desc: "Regular audits, staff training, and the use of modern sustainable technologies help us stay ahead in responsible cleaning.",
  },
];

const commercialAreas = [
  {
    title: "Office Cleaning",
    desc: "From desks and workstations to meeting rooms, washrooms, and lounge areas. We deliver streak-free glass, polished floors, and a professional environment that supports your business reputation.",
  },
  {
    title: "Mall Cleaning & Public Areas",
    desc: "Internal and external cleaning during operating hours and after closing. We use specialist equipment including auto scrubbers, polishers, and steam cleaners, and can supply and restock washroom consumables.",
  },
  {
    title: "Retail Store Cleaning",
    desc: "A clean store builds customer confidence. We keep your retail space tidy and inviting so it reflects the quality of your business.",
  },
  {
    title: "Restaurant Cleaning",
    desc: "Window and glass cleaning, dining area floors, bar areas, dusting of fixtures and décor, kitchen equipment, floor drains, and daily washroom sanitation.",
  },
  {
    title: "Gyms, Spas & Training Centres",
    desc: "Professional cleaning with hospital-grade disinfectants to reduce the spread of germs and control fungus and mould in showers, locker rooms, and high-touch areas.",
  },
  {
    title: "Schools / Nurseries / Universities",
    desc: "Reliable cleaning tailored to educational environments.",
  },
  {
    title: "Warehouses, Event Venues & Fitness Centres",
    desc: "Flexible cleaning schedules to suit operational needs.",
  },
];

const residentialTypes = [
  "Villas",
  "Hotel properties",
  "Staff accommodation",
  "Farm houses",
  "Labor camps",
];

const specialServices = [
  "Marble polishing",
  "Granite polishing",
  "Carpet shampooing",
  "Pressure washing",
];

const manpower = ["Cleaning staff", "Housekeeping staff", "Office boy supply"];

const mep = ["Mechanical", "Electrical", "Plumbing"];

export default function ServicesPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Services"
          title={
            <>
              Professional Cleaning, Staffing &amp;{" "}
              <em className="not-italic text-sky">Technical Maintenance</em> Across Dubai
            </>
          }
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">
            At Performa Care Technical Services, we provide reliable cleaning, trained staff supply,
            and technical maintenance for residential, commercial, and business properties across
            Dubai. One trusted partner for a clean, well-maintained, and properly staffed property.
          </p>
          <CtaButtons />
        </PageHero>

        {/* Sustainability */}
        <section id="sustainability" className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Sustainability Program
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                Reducing our environmental impact while delivering high-quality service
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {sustainability.map((item) => (
                <article
                  key={item.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <h3 className="text-lg font-bold mb-2 tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-muted text-[15px]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Cleaning */}
        <section id="commercial-cleaning" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">
              <Image
                src="/images/shopping-mall-cleaning-660x410.jpg"
                alt="Commercial cleaning services in Dubai"
                width={900}
                height={600}
                className="w-full h-[280px] sm:h-[380px] object-cover rounded-[18px]"
              />
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  Commercial Cleaning
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                  Regular and monthly cleaning for every commercial space
                </h2>
                <p className="text-muted text-[17px]">
                  Offices, malls, retail, restaurants, schools, warehouses, event venues, fitness
                  centres, and clinics — cleaned to a professional standard that supports your
                  operations and reputation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {commercialAreas.map((area) => (
                <article
                  key={area.title}
                  className="reveal border border-line rounded-[18px] p-6 bg-white hover:-translate-y-1 transition duration-300 hover:shadow-[0_24px_50px_-24px_rgba(13,34,54,.25)]"
                >
                  <h3 className="text-xl font-bold mb-2 tracking-[-0.02em]">{area.title}</h3>
                  <p className="text-muted text-[15px]">{area.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Residential */}
        <section id="residential-cleaning" className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Residential Cleaning
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Deep and routine cleaning for homes and residential properties
              </h2>
              <p className="text-muted text-[17px] mb-6">
                Our trained team delivers high-standard deep cleans using safe, environmentally
                friendly products — ideal for move-in, move-out, or regular maintenance.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {residentialTypes.map((type) => (
                  <span
                    key={type}
                    className="text-sm font-semibold bg-white border border-line px-3.5 py-2 rounded-full text-[#33495e]"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <Image
              src="/images/update-banner1-1-480x400.jpg"
              alt="Residential cleaning for villas and homes"
              width={900}
              height={700}
              className="reveal w-full h-[300px] sm:h-[420px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        {/* Special Services */}
        <section id="special-services" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Special Services
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                Specialist treatments that restore surfaces and floors
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {specialServices.map((item) => (
                <div
                  key={item}
                  className="reveal border border-line rounded-[18px] p-6 bg-linear-to-b from-[#f3f9fe] to-white text-center"
                >
                  <IconBox className="mx-auto mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M14 7l3-3 3 3-3 3M17 4v0M4 20l9-9" />
                      <circle cx="6" cy="18" r="2" />
                    </svg>
                  </IconBox>
                  <b className="text-[17px]">{item}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manpower + Hospitality + MEP */}
        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article id="manpower" className="reveal bg-white border border-line rounded-[18px] p-7">
              <Image
                src="/images/manpowerstaffsupply.jpg"
                alt="Manpower and staff supply"
                width={600}
                height={360}
                className="w-full h-[180px] object-cover rounded-[14px] mb-5"
              />
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">
                Manpower &amp; Staff Supply
              </h2>
              <p className="text-muted text-[15px] mb-4">
                Trained people for your site, not just a cleaning service.
              </p>
              <ul className="grid gap-2.5 mb-5">
                {manpower.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-[15px]">
                    <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/staff-supply" className="text-blue font-bold hover:underline">
                Explore staff supply →
              </Link>
            </article>

            <article id="hospitality" className="reveal bg-white border border-line rounded-[18px] p-7">
              <Image
                src="/images/Hospitalitystaffing.jpg"
                alt="Hospitality staffing for events"
                width={600}
                height={360}
                className="w-full h-[180px] object-cover rounded-[14px] mb-5"
              />
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">Hospitality Staffing</h2>
              <p className="text-muted text-[15px] mb-4">
                Experienced, courteous waiters and waitresses for events — weddings, corporate
                functions and private parties.
              </p>
              <Link href="/staff-supply" className="text-blue font-bold hover:underline">
                Hire hospitality staff →
              </Link>
            </article>

            <article id="mep" className="reveal bg-white border border-line rounded-[18px] p-7">
              <Image
                src="/images/MaintenanceMEP.jpg"
                alt="MEP technical maintenance"
                width={600}
                height={360}
                className="w-full h-[180px] object-cover rounded-[14px] mb-5"
              />
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">Maintenance – MEP</h2>
              <p className="text-muted text-[15px] mb-4">
                Technical support to keep your property safe and well-functioning.
              </p>
              <ul className="grid gap-2.5">
                {mep.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-[15px]">
                    <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band py-16 sm:py-[90px] text-white">
          <div className="w-[min(1180px,92%)] mx-auto reveal text-center max-w-[760px]">
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.02em] mb-4 text-white">
              Book professional cleaning or hire trained staff — all from one Dubai team.
            </h2>
            <div className="flex justify-center mb-4">
              <CtaButtons secondaryHref="/staff-supply" />
            </div>
            <p className="text-[#cfe2f2]">
              Prefer to talk?{" "}
              <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
                Call +971 50 224 7589
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
