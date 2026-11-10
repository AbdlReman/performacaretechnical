import Link from "next/link";
import type { ReactNode } from "react";

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
  primaryLabel = "Get a Cleaning Quote",
  secondaryHref = "/staff-supply",
  secondaryLabel = "Hire Staff",
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
      <Action href={primaryHref} className={primaryClass}>
        {primaryLabel} →
      </Action>
      {secondaryLabel && (
        <Action href={secondaryHref} className={secondaryClass}>
          {secondaryLabel}
        </Action>
      )}
      {showCall && (
        <Action href="tel:+971502247589" className={callClass}>
          Call +971 50 224 7589
        </Action>
      )}
    </div>
  );
}
