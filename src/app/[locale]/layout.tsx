import { notFound } from "next/navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { isLocale, locales } from "@/i18n/routing";
import type { Locale } from "@/i18n/types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <LanguageProvider locale={locale}>
      {children}
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
