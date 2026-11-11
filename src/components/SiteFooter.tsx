"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SiteFooter() {
  const { t, localizeHref } = useLanguage();

  return (
    <footer className="bg-[#081725] text-[#93a7ba] py-10 text-sm">
      <div className="w-[min(1180px,92%)] mx-auto flex justify-between gap-5 flex-wrap items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-white-01.png"
            alt={t.brand}
            width={94}
            height={94}
            className="object-contain w-[84px] h-[84px]"
          />
          <span>{t.footer.copy}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href={localizeHref("/about-us")} className="hover:text-white transition">
            {t.nav.about}
          </Link>
          <Link href={localizeHref("/services")} className="hover:text-white transition">
            {t.nav.services}
          </Link>
          <Link href={localizeHref("/staff-supply")} className="hover:text-white transition">
            {t.nav.staff}
          </Link>
          <Link href={localizeHref("/hospitality")} className="hover:text-white transition">
            {t.nav.hospitality}
          </Link>
          <Link href={localizeHref("/why-us")} className="hover:text-white transition">
            {t.nav.whyUs}
          </Link>
          <Link href={localizeHref("/process")} className="hover:text-white transition">
            {t.nav.process}
          </Link>
          <Link href={localizeHref("/faq")} className="hover:text-white transition">
            {t.nav.faq}
          </Link>
          <a href="tel:+971502247589" className="hover:text-white transition">
            +971 50 224 7589
          </a>
          <a href="mailto:info@performacaretechnical.com" className="hover:text-white transition">
            info@performacaretechnical.com
          </a>
        </div>
      </div>
    </footer>
  );
}
