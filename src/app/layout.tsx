import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Professional Technical & Hospitality Services in Dubai | Performa Care",
  description:
    "Professional Technical & Hospitality Services in Dubai: cleaning services and manpower supply (cleaners, housekeeping staff, office boys, waiters & waitresses), plus MEP maintenance. Call +971 50 224 7589.",
  alternates: {
    canonical: "https://performacaretechnical.com/",
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
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
