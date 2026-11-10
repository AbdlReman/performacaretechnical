import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "How It Works | From First Call to a Spotless Site | Performa Care",
  description:
    "A simple process: tell us your needs, site assessment, agree the plan, and reliable delivery with a 2-hour response across Dubai.",
};

const steps = [
  {
    n: "01",
    title: "Tell Us Your Needs",
    desc: "Call, email, or send the quote form. Share the property type, service required, or staff you need.",
  },
  {
    n: "02",
    title: "Site Assessment",
    desc: "We review your property and requirements so we can prepare an accurate scope.",
  },
  {
    n: "03",
    title: "Agree the Plan",
    desc: "Scope, schedule, and visit dates are agreed together. Clear expectations before work begins.",
  },
  {
    n: "04",
    title: "Reliable Delivery",
    desc: "Trained team on site with modern equipment and eco-friendly products. 2-hour response to any issues that arise.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="How It Works"
          title={
            <>
              From First Call to a <em className="not-italic text-sky">Spotless Site</em>
            </>
          }
        >
          <p className="text-lg max-w-[720px] text-[#d8e4ee] mb-8">
            A simple, transparent process built around your schedule.
          </p>
          <CtaButtons />
        </PageHero>

        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="steps-line relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="reveal relative text-left md:text-center grid grid-cols-[56px_1fr] md:block gap-x-[18px]"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue text-blue font-extrabold grid place-items-center text-lg relative row-span-2 md:mx-auto md:mb-[18px] shadow-[0_10px_30px_-12px_rgba(26,99,151,.45)]">
                    {step.n}
                  </div>
                  <h2 className="text-xl font-bold mb-2 tracking-[-0.02em]">{step.title}</h2>
                  <p className="text-muted text-[15px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-[90px]">
          <div className="w-[min(900px,92%)] mx-auto">
            <div className="reveal grid gap-5">
              {steps.map((step) => (
                <article
                  key={`${step.n}-detail`}
                  className="border border-line rounded-[18px] p-6 sm:p-7 bg-surface flex gap-5 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue text-white font-extrabold grid place-items-center">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
                    <p className="text-muted text-[15px]">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 sm:py-[90px] text-white"
          style={{ background: "linear-gradient(135deg, var(--blue), #0f3f63)" }}
        >
          <div className="w-[min(1180px,92%)] mx-auto reveal text-center max-w-[760px]">
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-0.02em] mb-4 text-white">
              Whether you need regular cleaning, specialist services, or trained staff, the process
              stays straightforward.
            </h2>
            <div className="flex justify-center mb-5">
              <CtaButtons />
            </div>
            <p className="text-[#cfe2f2]">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
