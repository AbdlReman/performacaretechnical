import type { Metadata } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import LanguageScript from "@/components/LanguageScript";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Professional Technical & Hospitality Services in Dubai | Performa Care",
  description:
    "Professional Technical & Hospitality Services in Dubai: cleaning services and manpower supply (cleaners, housekeeping staff, office boys, waiters & waitresses), plus MEP maintenance. Call +971 50 224 7589.",
  alternates: {
    canonical: "https://performacaretechnical.ae/",
  },
  openGraph: {
    title: "Professional Technical & Hospitality Services in Dubai | Performa Care",
    description:
      "Reliable technical, cleaning and hospitality solutions for homes and businesses across Dubai.",
    images: ["/images/shopping-mall-cleaning-660x410.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${plusJakarta.variable} ${notoArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <ThemeScript />
        <LanguageScript />
        {children}
      </body>
    </html>
  );
}
