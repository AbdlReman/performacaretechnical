"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SiteHeader() {
  const { t, localizeHref, locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: localizeHref("/about-us"), label: t.nav.about },
    { href: localizeHref("/services"), label: t.nav.services },
    { href: localizeHref("/staff-supply"), label: t.nav.staff },
    { href: localizeHref("/hospitality"), label: t.nav.hospitality },
    { href: localizeHref("/why-us"), label: t.nav.whyUs },
    { href: localizeHref("/process"), label: t.nav.process },
    { href: localizeHref("/faq"), label: t.nav.faq },
    { href: localizeHref("/blog"), label: t.nav.blog },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close drawer when locale/route context changes via language toggle.
  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="bg-[#0d2236] text-[#c9d6e3] text-[12px] md:text-[13px]">
        <div className="w-[min(1180px,92%)] mx-auto flex justify-between gap-3 py-2 flex-wrap">
          <span className="leading-snug">{t.topBar.address}</span>
          <span className="hidden md:inline">
            <a href="tel:+971502247589" className="hover:text-white transition">
              +971 50 224 7589
            </a>
            {" "}|{" "}
            <a href="mailto:info@performacaretechnical.ae" className="hover:text-white transition">
              info@performacaretechnical.ae
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-background">
        <div className="w-[min(1180px,92%)] mx-auto">
          <nav className="relative z-[60] flex items-center justify-between gap-3 py-3 sm:py-3.5 min-h-[96px] sm:min-h-[108px] bg-background">
            <Link
              href={localizeHref("/")}
              className="flex items-center shrink-0 overflow-visible"
              aria-label={t.brand}
              onClick={closeMenu}
            >
              <Image
                src="/images/logo.png"
                alt={t.brand}
                width={1254}
                height={1254}
                className="h-[72px] sm:h-[100px] w-auto max-w-none object-contain object-left dark:hidden"
                priority
              />
              <Image
                src="/images/logo-white-01.png"
                alt={t.brand}
                width={2825}
                height={2705}
                className="h-[72px] sm:h-[100px] w-auto max-w-none object-contain object-left hidden dark:block"
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
                className="hidden xl:inline-flex items-center gap-2 px-[22px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
              >
                {t.nav.quote}
              </Link>
              <button
                type="button"
                className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-background text-ink transition hover:border-blue hover:text-blue"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition duration-200 ${
                      menuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition duration-200 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition duration-200 ${
                      menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Full-screen solid panel — nothing from the page shows through */}
        <div
          id="mobile-nav"
          className={`xl:hidden fixed inset-0 z-[55] bg-background transition-transform duration-300 ease-out ${
            menuOpen
              ? "translate-x-0 pointer-events-auto"
              : locale === "ar"
                ? "translate-x-full pointer-events-none"
                : "-translate-x-full pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex h-full flex-col pt-[calc(env(safe-area-inset-top)+120px)] pb-8">
            <div className="w-[min(1180px,92%)] mx-auto flex-1 overflow-y-auto">
              <nav className="grid gap-1 py-2" aria-label="Mobile">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-[16px] font-semibold text-ink hover:bg-surface hover:text-blue transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
