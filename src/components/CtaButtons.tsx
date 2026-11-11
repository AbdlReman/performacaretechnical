"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

function Action({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function CtaButtons({
  primaryHref = "/#quote",
  primaryLabel,
  secondaryHref = "/staff-supply",
  secondaryLabel,
  showCall = true,
  light = true,
}: {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string | null;
  showCall?: boolean;
  light?: boolean;
}) {
  const { t, locale, localizeHref } = useLanguage();
  const arrow = locale === "ar" ? "←" : "→";

  const resolvedPrimary = primaryLabel ?? t.common.getCleaningQuote;
  const resolvedSecondary =
    secondaryLabel === null ? null : (secondaryLabel ?? t.common.hireStaff);

  const primaryClass =
    "inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5";
  const secondaryClass = light
    ? "inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-white text-ink border-2 border-transparent transition hover:bg-sky"
    : "inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white";
  const callClass = light
    ? "inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-white/60 text-white transition hover:bg-white hover:text-ink"
    : "inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] border-2 border-blue text-blue transition hover:bg-blue hover:text-white";

  return (
    <div className="flex gap-3.5 flex-wrap">
      <Action href={localizeHref(primaryHref)} className={primaryClass}>
        {resolvedPrimary} {arrow}
      </Action>
      {resolvedSecondary && (
        <Action href={localizeHref(secondaryHref)} className={secondaryClass}>
          {resolvedSecondary}
        </Action>
      )}
      {showCall && (
        <Action href="tel:+971502247589" className={callClass}>
          {t.common.call}
        </Action>
      )}
    </div>
  );
}
