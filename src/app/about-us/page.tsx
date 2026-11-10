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
  title: "About Us | Performa Care Technical & Hospitality Services Dubai",
  description:
    "Learn about Performa Care Technical Services & Performa Care Hospitality Services — our mission, vision, and commitment to clean, healthy, well-maintained spaces across Dubai.",
};

const reasons = [
  {
    title: "Reliable Execution",
    desc: "Dedicated professionals focused on consistency, efficiency and customer satisfaction.",
  },
  {
    title: "Modern Equipment",
    desc: "State-of-the-art tools that deliver thorough, hygienic results across every site.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "Non-toxic, biodegradable cleaning products that protect people and the environment.",
  },
  {
    title: "Tailored Solutions",
    desc: "Routine maintenance, deep cleaning, staffing and specialised services built around your needs.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Us"
          title={
            <>
              Fresh, Meticulous Care for Homes &amp;{" "}
              <em className="not-italic text-sky">Business Environments</em>
            </>
          }
          image="/images/h8-banner1.jpg"
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">
            Performa Care Technical Services &amp; Performa Care Hospitality Services bring a fresh,
            meticulous touch to your home and business environments across Dubai.
          </p>
          <CtaButtons primaryLabel="Get a Quote" secondaryHref="/services" secondaryLabel="Our Services" />
        </PageHero>

        {/* Why choose us */}
        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                A clean space is essential for well-being and productivity
              </h2>
              <p className="text-muted text-[17px] mb-5">
                At Performa Care Technical Services, we understand that a clean space is essential for
                your well-being and productivity. Our dedicated team of professionals uses
                state-of-the-art equipment and eco-friendly products to ensure every corner of your
                space is spotless and hygienic.
              </p>
              <p className="text-muted text-[17px]">
                Whether you need routine maintenance, deep cleaning, or specialised services, we are
                committed to delivering exceptional results tailored to your specific needs — with a
                focus on reliability, efficiency, and customer satisfaction.
              </p>
            </div>
            <Image
              src="/images/shopping-mall-cleaning-660x410.jpg"
              alt="Performa Care professional cleaning team at work"
              width={900}
              height={600}
              className="reveal w-full h-[300px] sm:h-[420px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        {/* Best service */}
        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal text-center max-w-[720px] mx-auto mb-12">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                The Best Service We Provide
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                Reliable, efficient and tailored solutions
              </h2>
              <p className="text-muted text-[17px]">
                We are dedicated to providing reliable, efficient, and tailored solutions for a clean
                and healthy environment — ensuring customer satisfaction on every visit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="reveal bg-white border border-line rounded-[18px] p-6"
                >
                  <IconBox className="mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6"
                    >
                      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </IconBox>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-[15px]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article
              className="reveal rounded-[22px] p-8 sm:p-10 text-white"
              style={{ background: "linear-gradient(135deg, var(--blue), #0f3f63)" }}
            >
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-sky mb-3">
                Our Mission
              </span>
              <h2 className="text-[28px] font-extrabold tracking-[-0.02em] mb-4 text-white">
                Top-quality cleaning that exceeds expectations
              </h2>
              <p className="text-[#cfe2f2] text-[16px] leading-relaxed">
                Our mission is to provide top-quality cleaning services that exceed our clients&apos;
                expectations, using environmentally responsible products and practices. We are
                dedicated to creating clean, safe, and healthy spaces for our clients while
                contributing to a sustainable future.
              </p>
            </article>
            <article className="reveal rounded-[22px] p-8 sm:p-10 border border-line bg-surface">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Our Vision
              </span>
              <h2 className="text-[28px] font-extrabold tracking-[-0.02em] mb-4">
                Leading eco-friendly cleaning solutions
              </h2>
              <p className="text-muted text-[16px] leading-relaxed">
                To be the leading provider of eco-friendly cleaning solutions, delivering exceptional
                service and enhancing the health and well-being of our communities through sustainable
                practices and innovation.
              </p>
            </article>
          </div>
        </section>

        {/* Who we are + contact */}
        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                Who We Are
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                One Dubai team for cleaning, staffing and technical care
              </h2>
              <p className="text-muted text-[17px] mb-5">
                We bring a fresh, meticulous touch to your home and business environments. At Performa
                Care Technical Services, we understand that a clean space is essential for your
                well-being and productivity — and we aim to create a clean and healthy environment you
                can be proud of.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link
                  href="/why-us"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white transition hover:bg-[#124c75] hover:-translate-y-0.5"
                >
                  Why Choose Us →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="reveal bg-white border border-line rounded-[22px] p-7 sm:p-9">
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] mb-5">Official Info</h3>
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
                    <b className="block mb-1">Address</b>
                    <span className="text-muted text-[15px]">
                      Office 476, 4th Floor, Arjumand Building, 17th Street, Green Community Village,
                      Dubai
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
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
