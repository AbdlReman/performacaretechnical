"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-surface p-1 text-[13px] font-bold">
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label={t.lang.switchToEn}
        className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
          locale === "en" ? "bg-blue text-white" : "text-ink hover:text-blue"
        }`}
      >
        {t.lang.en}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        aria-label={t.lang.switchToAr}
        className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
          locale === "ar" ? "bg-blue text-white" : "text-ink hover:text-blue"
        }`}
      >
        {t.lang.ar}
      </button>
    </div>
  );
}
