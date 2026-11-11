"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SiteHeader() {
  const { t, localizeHref } = useLanguage();

  const links = [
    { href: localizeHref("/about-us"), label: t.nav.about },
    { href: localizeHref("/services"), label: t.nav.services },
    { href: localizeHref("/staff-supply"), label: t.nav.staff },
    { href: localizeHref("/hospitality"), label: t.nav.hospitality },
    { href: localizeHref("/why-us"), label: t.nav.whyUs },
    { href: localizeHref("/process"), label: t.nav.process },
    { href: localizeHref("/faq"), label: t.nav.faq },
  ];

  return (
    <>
      <div className="bg-[#0d2236] text-[#c9d6e3] text-[13px]">
        <div className="w-[min(1180px,92%)] mx-auto flex justify-between gap-3 py-2 flex-wrap">
          <span>{t.topBar.address}</span>
          <span className="hidden md:inline">
            <a href="tel:+971502247589" className="hover:text-white transition">
              +971 50 224 7589
            </a>
            {" "}|{" "}
            <a href="mailto:info@performacaretechnical.com" className="hover:text-white transition">
              info@performacaretechnical.com
            </a>
          </span>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 backdrop-blur-[10px] border-b border-line"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="w-[min(1180px,92%)] mx-auto">
          <nav className="flex items-center justify-between gap-3 py-3 sm:py-3.5 min-h-[108px]">
            <Link href={localizeHref("/")} className="flex items-center shrink-0" aria-label={t.brand}>
              <Image
                src="/images/logo.png"
                alt={t.brand}
                width={94}
                height={94}
                className="object-contain w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] dark:hidden"
                priority
              />
              <Image
                src="/images/logo-white-01.png"
                alt={t.brand}
                width={94}
                height={94}
                className="object-contain w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] hidden dark:block"
                priority
              />
            </Link>

            <div className="hidden xl:flex gap-6 font-semibold text-[15px] text-ink">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-blue transition">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <LanguageToggle />
              <ThemeToggle />
              <Link
                href={localizeHref("/#quote")}
                className="inline-flex items-center gap-2 px-3 sm:px-[22px] py-3 sm:py-3.5 rounded-full font-bold text-[13px] sm:text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                {t.nav.quote}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
