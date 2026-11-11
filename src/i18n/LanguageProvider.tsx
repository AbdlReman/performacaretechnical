"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDictionary } from "./dictionaries";
import { localizedPath, stripLocalePrefix } from "./routing";
import type { Dictionary, Locale } from "./types";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Locale-aware path helper: `/about-us` → `/ar/about-us` when Arabic. */
  localizeHref: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement;
  const dir = locale === "ar" ? "rtl" : "ltr";
  root.lang = locale;
  root.dir = dir;
  root.setAttribute("data-locale", locale);
}

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname() || "/";

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  const localizeHref = useCallback(
    (path: string) => localizedPath(path, locale),
    [locale],
  );

  const setLocale = useCallback(
    (next: Locale) => {
      const base = stripLocalePrefix(pathname);
      const nextPath = localizedPath(base, next);
      applyDocumentLocale(next);
      router.push(nextPath);
    },
    [pathname, router],
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === "ar" ? "en" : "ar");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: getDictionary(locale),
      setLocale,
      toggleLocale,
      localizeHref,
    }),
    [locale, setLocale, toggleLocale, localizeHref],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
