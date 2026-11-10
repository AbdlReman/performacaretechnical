import Image from "next/image";
import Link from "next/link";
import IconBox from "@/components/IconBox";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Commercial Cleaning",
    desc: "Regular and monthly cleaning for offices, malls, retail and more.",
    img: "/images/shopping-mall-cleaning-660x410.jpg",
    alt: "Commercial floor cleaning in a modern Dubai mall",
    tags: ["Offices", "Malls", "Retail", "Schools", "Warehouses", "Clinics"],
  },
  {
    title: "Residential Cleaning",
    desc: "Deep and routine cleaning for homes and residential properties.",
    img: "/images/update-banner1-1-480x400.jpg",
    alt: "Professional window cleaning for residential properties",
    tags: ["Villas", "Hotel properties", "Staff accommodation", "Farm houses", "Labor camps"],
  },
  {
    title: "Manpower & Staff Supply",
    desc: "Trained people for your site: cleaners, housekeeping staff and office boys for daily operations.",
    img: "/images/h8-banner1.jpg",
    alt: "Trained cleaning staff ready for supply",
    tags: ["Cleaning staff", "Housekeeping staff", "Office boy supply"],
  },
  {
    title: "Hospitality Staffing",
    desc: "Experienced, courteous waiters and waitresses for weddings, corporate functions and private parties.",
    img: "/images/update-banner2-372x401.jpg",
    alt: "Hospitality and event staffing team",
    tags: ["Waiters", "Waitresses", "Events"],
  },
  {
    title: "Maintenance – MEP",
    desc: "Technical support to keep your property safe and well-functioning.",
    img: "/images/bg-slider91.jpg",
    alt: "Technician performing professional maintenance",
    tags: ["Mechanical", "Electrical", "Plumbing"],
  },
  {
    title: "Special Services",
    desc: "Specialist treatments that restore surfaces and floors.",
    img: "/images/shopping-mall-cleaning-660x410.jpg",
    alt: "Specialist floor polishing and surface care",
    tags: ["Marble polishing", "Granite polishing", "Carpet shampoo", "Pressure washing"],
  },
];

const staffRoles = [
  {
    title: "Cleaning Staff",
    desc: "Trained cleaners for offices, villas, retail and more",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 3h6l-1 5h-4zM7 21l3-13h4l3 13z" />
      </svg>
    ),
  },
  {
    title: "Housekeeping Staff",
    desc: "For homes, hotels, serviced apartments and staff accommodation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 11l9-7 9 7v10H3z" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Office Boys",
    desc: "Reliable daily support for your office",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V4h6v3" />
      </svg>
    ),
  },
  {
    title: "Waiters & Waitresses",
    desc: "Event-ready staff for weddings, corporate functions and private parties",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M4 18h16M6 18a6 6 0 0112 0M12 9V7" />
      </svg>
    ),
  },
  {
    title: "Hospitality Staff",
    desc: "For hotels, restaurants, cafés and serviced apartments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M10 21v-5h4v5" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Do you supply staff as well as cleaning services?",
    a: "Yes. Besides cleaning services, we supply trained staff: cleaners, housekeeping staff, office boys, and waiters and waitresses for events and hospitality businesses.",
    open: true,
  },
  {
    q: "Which areas do you serve?",
    a: "We serve residential, commercial and hospitality clients across Dubai, UAE.",
  },
  {
    q: "How quickly can you respond to an issue?",
    a: "We are able to respond to any issue within 2 hours.",
  },
  {
    q: "Do you offer regular or monthly cleaning contracts?",
    a: "Yes. We offer regular and monthly cleaning, with visit dates agreed with you for each site.",
  },
  {
    q: "Are your cleaning products safe?",
    a: "We use eco-friendly products that are non-toxic, biodegradable and free from harsh chemicals.",
  },
  {
    q: "Can you supply staff for events?",
    a: "Yes. Performa Care Hospitality Services provides waiters and waitresses for weddings, corporate functions and private parties.",
  },
];

export default function Home() {
  return (
    <>
      <Reveal />
      <SiteHeader />

      <main>
        {/* Hero */}
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
              Cleaning services &amp; trained staff supply across Dubai
            </span>
            <h1 className="text-[clamp(34px,5.6vw,64px)] font-extrabold max-w-[780px] my-3.5 tracking-[-0.02em] leading-[1.15]">
              Professional Technical &amp;{" "}
              <em className="not-italic text-sky">Hospitality</em> Services in Dubai
            </h1>
            <p className="text-lg max-w-[640px] text-[#d8e4ee] mb-4">
              At Performa Care Technical Services, we understand that a well-maintained property is
              essential for comfort, productivity and peace of mind. Our team provides professional
              technical, maintenance and cleaning solutions for residential, commercial and business
              environments across Dubai.
            </p>
            <p className="text-base text-white font-semibold border-l-[3px] border-sky pl-3.5 mb-8 max-w-[640px]">
              Book professional cleaning or hire trained staff (cleaners, housekeeping, office boys,
              waiters &amp; waitresses), all from one Dubai team.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                Get a Cleaning Quote →
              </Link>
              <Link
                href="/staff-supply"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-white text-ink border-2 border-transparent transition hover:bg-sky"
              >
                Hire Staff
              </Link>
              <a
                href="tel:+971502247589"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-white/60 text-white transition hover:bg-white hover:text-ink"
              >
                Call +971 50 224 7589
              </a>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div className="relative z-[2] -mt-[70px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="bg-white rounded-[18px] shadow-[0_30px_60px_-25px_rgba(13,34,54,.25)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-7 flex gap-3.5 items-start border-b sm:border-r border-line sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:border-b-0">
                <IconBox>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </IconBox>
                <div>
                  <b className="block text-base">2-Hour Response</b>
                  <span className="text-sm text-muted">We respond to any issue within 2 hours</span>
                </div>
              </div>
              <div className="p-7 flex gap-3.5 items-start border-b lg:border-b-0 lg:border-r border-line">
                <IconBox>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </IconBox>
                <div>
                  <b className="block text-base">Trained Professionals</b>
                  <span className="text-sm text-muted">Skilled, dedicated team</span>
                </div>
              </div>
              <div className="p-7 flex gap-3.5 items-start border-b sm:border-b-0 sm:border-r border-line">
                <IconBox>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
                    <path d="M5 21l7-7" />
                  </svg>
                </IconBox>
                <div>
                  <b className="block text-base">Eco-Friendly Products</b>
                  <span className="text-sm text-muted">Non-toxic &amp; biodegradable</span>
                </div>
              </div>
              <div className="p-7 flex gap-3.5 items-start">
                <IconBox>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M14 7l3-3 3 3-3 3M17 4v0M4 20l9-9" />
                    <circle cx="6" cy="18" r="2" />
                  </svg>
                </IconBox>
                <div>
                  <b className="block text-base">Modern Equipment</b>
                  <span className="text-sm text-muted">State-of-the-art tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section id="services" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal flex justify-between items-end gap-8 mb-[46px] flex-wrap">
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  Our Services
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                  Cleaning Services &amp;
                  <br />
                  Trained Staff Supply
                </h2>
              </div>
              <div className="max-w-[640px]">
                <p className="text-muted text-[17px] mb-3">
                  We clean your property and we supply the people: cleaners, housekeeping, office boys
                  and hospitality staff. Technical and MEP maintenance and specialist services complete
                  the package.
                </p>
                <Link href="/services" className="text-blue font-bold hover:underline">
                  View all services →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="reveal border border-line rounded-[18px] overflow-hidden bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(13,34,54,.3)]"
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
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

        {/* Staff */}
        <section id="staff" className="pb-16 sm:pb-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal flex justify-between items-end gap-8 mb-[46px] flex-wrap">
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  Manpower Supply
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                  Staff We Provide
                </h2>
              </div>
              <p className="text-muted text-[17px] max-w-[640px]">
                Need people, not just a service? We supply trained staff for homes, offices and
                hospitality businesses across Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 min-[340px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[18px]">
              {staffRoles.map((role) => (
                <div
                  key={role.title}
                  className="reveal border border-line rounded-[18px] p-5 sm:p-6 bg-linear-to-b from-[#f3f9fe] to-white min-w-0"
                >
                  <IconBox className="mb-3.5">{role.icon}</IconBox>
                  <b className="block text-[17px] mb-1">{role.title}</b>
                  <span className="text-sm text-muted">{role.desc}</span>
                </div>
              ))}
            </div>

            <div className="reveal text-center mt-9 flex justify-center gap-3.5 flex-wrap">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                Hire Trained Staff →
              </Link>
              <Link
                href="/staff-supply"
                className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
              >
                Staff Supply Page
              </Link>
            </div>
          </div>
        </section>

        {/* Why us */}
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
                Response time to any issue on your site
              </div>
            </div>

            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                A Well-Maintained Property Means Comfort, Productivity &amp; Peace of Mind
              </h2>
              <p className="text-muted text-[17px] max-w-[640px]">
                We focus on reliable execution, attention to detail and customer satisfaction, for
                every site, every visit.
              </p>
              <ul className="list-none mt-7 grid gap-[18px]">
                <li className="flex gap-4 bg-white p-[18px] rounded-[14px] border border-line">
                  <IconBox>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M8 7V3m8 4V3M4 11h16M5 5h14v16H5z" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block">Agreed Schedules</b>
                    <span className="text-muted text-[15px]">
                      We agree dates with you for each site so management is always maintained.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-[18px] rounded-[14px] border border-line">
                  <IconBox>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16z" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block">Sustainable by Design</b>
                    <span className="text-muted text-[15px]">
                      Eco-friendly products, waste segregation and water &amp; energy-saving methods.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 bg-white p-[18px] rounded-[14px] border border-line">
                  <IconBox>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  </IconBox>
                  <div>
                    <b className="block">One Partner, Every Space</b>
                    <span className="text-muted text-[15px]">
                      Homes, offices, hotels, restaurants, cafés and serviced apartments.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal text-center max-w-[680px] mx-auto">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                How It Works
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                From First Call to a Spotless Site
              </h2>
              <p className="text-muted text-[17px] mx-auto">
                A simple, transparent process built around your schedule.
              </p>
            </div>

            <div className="steps-line relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 mt-[50px]">
              {[
                { n: "01", t: "Tell Us Your Needs", d: "Call, email or send the quote form." },
                { n: "02", t: "Site Assessment", d: "We review your property and requirements." },
                { n: "03", t: "Agree the Plan", d: "Scope, schedule and dates agreed together." },
                {
                  n: "04",
                  t: "Reliable Delivery",
                  d: "Trained team on site, with a 2-hour response to issues.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="reveal relative text-left md:text-center grid grid-cols-[56px_1fr] md:block gap-x-[18px] px-0 md:px-2.5"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue text-blue font-extrabold grid place-items-center text-lg relative row-span-2 md:mx-auto md:mb-[18px]">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold mb-1.5 tracking-[-0.02em]">{step.t}</h3>
                  <p className="text-muted text-[15px]">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-[90px] bg-ink text-white">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-sky mb-3">
                Client Feedback
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                What Our Clients Say
              </h2>
              <p className="text-[#a9bccd] text-[17px] max-w-[640px]">
                Trusted by homes, offices and hospitality businesses across Dubai.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] mt-10">
              {[
                {
                  quote:
                    "Reliable cleaning team and always on schedule. Our office has never looked better.",
                  name: "Facilities Manager, Dubai Office",
                },
                {
                  quote:
                    "They supplied trained housekeeping staff quickly and the quality has been excellent.",
                  name: "Property Supervisor, Villa Community",
                },
                {
                  quote:
                    "Professional waiters for our corporate event — courteous, well-presented and efficient.",
                  name: "Events Coordinator, Hospitality",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="reveal bg-white/6 border border-dashed border-sky/50 rounded-[18px] p-[26px]"
                >
                  <p className="text-[#d4e1ec] italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <b className="text-sky">{t.name}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-[60px]">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                FAQ
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                Frequently Asked Questions
              </h2>
              <p className="text-muted text-[17px] mb-3">
                Can&apos;t find your answer? Call{" "}
                <a href="tel:+971502247589" className="text-blue font-bold">
                  +971 50 224 7589
                </a>
                .
              </p>
              <Link href="/faq" className="text-blue font-bold hover:underline">
                View all FAQs →
              </Link>
            </div>
            <div className="reveal">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  open={faq.open}
                  className="border-b border-line py-5"
                >
                  <summary className="cursor-pointer font-bold text-[17px] list-none flex justify-between gap-5 items-start">
                    {faq.q}
                  </summary>
                  <p className="text-muted mt-2.5">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section
          id="quote"
          className="py-16 sm:py-[90px]"
          style={{ background: "linear-gradient(135deg, var(--blue), #0f3f63)" }}
        >
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-[50px] items-center text-white">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-sky mb-3">
                Get in Touch
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5 text-white">
                Book Cleaning or Hire Staff
              </h2>
              <p className="text-[#cfe2f2] text-[17px] max-w-[640px]">
                Tell us about your property or the staff you need, and we&apos;ll get back to you with
                a tailored plan.
              </p>
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
                  info@performacaretechnical.com
                </a>
                <div className="flex gap-3 items-center font-semibold">
                  <span className="shrink-0 w-[46px] h-[46px] rounded-xl bg-white/14 grid place-items-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  Office 476, 4th Floor, Arjumand Building, 17th St, Green Community Village, Dubai
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
