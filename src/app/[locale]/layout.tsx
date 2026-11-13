import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { isLocale, locales } from "@/i18n/routing";
import type { Locale } from "@/i18n/types";
import { buildPageMetadata, organizationJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata("/", locale);
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
      <JsonLd data={organizationJsonLd()} />
      {children}
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
