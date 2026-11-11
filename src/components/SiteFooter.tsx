"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SiteFooter() {
  const { t, localizeHref } = useLanguage();
  const f = t.footer;

  const companyLinks = [
    { href: localizeHref("/about-us"), label: t.nav.about },
    { href: localizeHref("/why-us"), label: t.nav.whyUs },
    { href: localizeHref("/process"), label: t.nav.process },
    { href: localizeHref("/faq"), label: t.nav.faq },
  ];

  const serviceLinks = [
    { href: localizeHref("/services"), label: t.nav.services },
    { href: localizeHref("/staff-supply"), label: t.nav.staff },
    { href: localizeHref("/hospitality"), label: t.nav.hospitality },
    { href: localizeHref("/#quote"), label: t.nav.quote },
  ];

  return (
    <footer className="bg-[#081725] text-[#93a7ba]">
      <div className="w-[min(1180px,92%)] mx-auto py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link
              href={localizeHref("/")}
              className="inline-flex items-center gap-3 mb-4 overflow-visible"
              aria-label={t.brand}
            >
              <Image
                src="/images/logo-white-01.png"
                alt={t.brand}
                width={2825}
                height={2705}
                className="h-[72px] w-auto max-w-none object-contain object-left"
              />
            </Link>
            <p className="text-white font-bold text-base mb-2">{t.brand}</p>
            <p className="text-sm leading-6 max-w-[260px]">{f.tagline}</p>
          </div>

          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.08em] uppercase mb-4">
              {f.company}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.08em] uppercase mb-4">
              {f.services}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.08em] uppercase mb-4">
              {f.officialInfo}
            </h3>
            <div className="space-y-3.5 text-sm leading-6">
              <p>{f.address}</p>
              <p>
                <a href="tel:+971502247589" className="hover:text-white transition">
                  +971 50 224 7589
                </a>
              </p>
              <p>
                <a href="mailto:info@performacaretechnical.com" className="hover:text-white transition break-all">
                  info@performacaretechnical.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-[min(1180px,92%)] mx-auto py-5 text-xs sm:text-sm flex flex-wrap gap-2 justify-between">
          <span>{f.copy}</span>
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
