"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SiteHeader() {
  const { t, localizeHref } = useLanguage();
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
          <nav className="flex items-center justify-between gap-3 py-3 sm:py-3.5 min-h-[96px] sm:min-h-[108px]">
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
                className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-blue hover:text-blue"
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

        <div
          className={`xl:hidden fixed inset-0 z-40 bg-[#0d2236]/45 transition-opacity duration-200 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        />

        <div
          id="mobile-nav"
          className={`xl:hidden absolute left-0 right-0 top-full z-50 border-b border-line shadow-[0_18px_40px_rgba(13,34,54,.18)] transition-all duration-200 origin-top ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
          style={{ background: "var(--header-bg)" }}
        >
          <div className="w-[min(1180px,92%)] mx-auto py-4 pb-6">
            <div className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3.5 py-3 text-[15px] font-semibold text-ink hover:bg-surface hover:text-blue transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
