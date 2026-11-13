import type { Metadata } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import GoogleTagManager from "@/components/GoogleTagManager";
import LanguageScript from "@/components/LanguageScript";
import ThemeScript from "@/components/ThemeScript";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: "Professional Technical & Hospitality Services in Dubai | Performa Care",
  description:
    "Professional Technical & Hospitality Services in Dubai: cleaning services and manpower supply (cleaners, housekeeping staff, office boys, waiters & waitresses), plus MEP maintenance. Call +971 50 224 7589.",
  applicationName: SITE_NAME,
  keywords: [
    "cleaning services Dubai",
    "manpower supply Dubai",
    "hospitality staffing Dubai",
    "MEP maintenance Dubai",
    "housekeeping staff",
    "office cleaning",
    "Performa Care",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AE",
    url: SITE_URL,
    title: "Professional Technical & Hospitality Services in Dubai | Performa Care",
    description:
      "Reliable technical, cleaning and hospitality solutions for homes and businesses across Dubai.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 660, height: 410, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Technical & Hospitality Services in Dubai | Performa Care",
    description:
      "Reliable technical, cleaning and hospitality solutions for homes and businesses across Dubai.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/images/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
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
        <GoogleTagManager />
        <ThemeScript />
        <LanguageScript />
        {children}
      </body>
    </html>
  );
}
