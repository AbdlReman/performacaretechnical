"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

const specialMedia = [
  {
    img: "/images/marbelclean.jpeg",
    alt: "Marble polishing by Performa Care",
  },
  {
    img: "/images/marbelcleaning.jpeg",
    alt: "Granite and stone floor polishing",
  },
  {
    img: "/images/sofacleaning.jpeg",
    alt: "Upholstery and soft furnishings cleaning",
  },
  {
    img: "/images/GLASSCLEANING.jpeg",
    alt: "Glass and exterior surface cleaning",
  },
];

export default function ServicesPage() {
  const { t, locale, localizeHref } = useLanguage();
  const p = t.servicesPage;
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={p.eyebrow}
          title={
            <>
              {p.titleBefore}{" "}
              <em className="not-italic text-sky">{p.titleHighlight}</em> {p.titleAfter}
            </>
          }
        >
          <p className="text-lg max-w-[760px] text-[#d8e4ee] mb-8">{p.lead}</p>
          <CtaButtons />
        </PageHero>

        <section id="sustainability" className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.sustainabilityEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                {p.sustainabilityTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {p.sustainability.map((item) => (
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

        <section id="commercial-cleaning" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">
              <Image
                src="/images/sofacleaning.jpeg"
                alt="Commercial and upholstery cleaning services in Dubai"
                width={900}
                height={600}
                className="w-full h-[280px] sm:h-[380px] object-cover rounded-[18px]"
              />
              <div>
                <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                  {p.commercialEyebrow}
                </span>
                <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                  {p.commercialTitle}
                </h2>
                <p className="text-muted text-[17px]">{p.commercialLead}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {p.commercialAreas.map((area) => (
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

        <section id="residential-cleaning" className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.residentialEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {p.residentialTitle}
              </h2>
              <p className="text-muted text-[17px] mb-6">{p.residentialLead}</p>
              <div className="flex flex-wrap gap-2.5">
                {p.residentialTypes.map((type) => (
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
              src="/images/bedsheetset.jpeg"
              alt="Residential room service and housekeeping for villas and homes"
              width={900}
              height={700}
              className="reveal w-full h-[300px] sm:h-[420px] object-cover rounded-[18px]"
            />
          </div>
        </section>

        <section id="special-services" className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {p.specialEyebrow}
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3.5">
                {p.specialTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {p.specialItems.map((item, i) => (
                <div
                  key={item}
                  className="reveal border border-line rounded-[18px] overflow-hidden bg-linear-to-b from-[#f3f9fe] to-white"
                >
                  {specialMedia[i] && (
                    <Image
                      src={specialMedia[i].img}
                      alt={specialMedia[i].alt}
                      width={600}
                      height={400}
                      className="h-[160px] w-full object-cover"
                    />
                  )}
                  <div className="p-5 text-center">
                    <b className="text-[17px]">{item}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">{p.manpowerTitle}</h2>
              <p className="text-muted text-[15px] mb-4">{p.manpowerDesc}</p>
              <ul className="grid gap-2.5 mb-5">
                {p.manpowerItems.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-[15px]">
                    <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={localizeHref("/staff-supply")} className="text-blue font-bold hover:underline">
                {p.manpowerLink} {arrow}
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
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">{p.hospitalityTitle}</h2>
              <p className="text-muted text-[15px] mb-4">{p.hospitalityDesc}</p>
              <Link href={localizeHref("/staff-supply")} className="text-blue font-bold hover:underline">
                {p.hospitalityLink} {arrow}
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
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] mb-3">{p.mepTitle}</h2>
              <p className="text-muted text-[15px] mb-4">{p.mepDesc}</p>
              <ul className="grid gap-2.5">
                {p.mepItems.map((item) => (
                  <li key={item} className="flex gap-3 items-center text-[15px]">
                    <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="cta-band py-16 sm:py-[90px] text-white">
          <div className="w-[min(1180px,92%)] mx-auto reveal text-center max-w-[760px]">
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.02em] mb-4 text-white">
              {p.ctaTitle}
            </h2>
            <div className="flex justify-center mb-4">
              <CtaButtons secondaryHref="/staff-supply" />
            </div>
            <p className="text-[#cfe2f2]">
              {t.common.preferTalk}{" "}
              <a href="tel:+971502247589" className="font-bold text-white underline underline-offset-4">
                {t.common.call}
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
