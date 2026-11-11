import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Performa Care | Technical, Cleaning & Hospitality Services in Dubai",
  description:
    "Performa Care Technical Services and Performa Care Hospitality Services provide cleaning, trained staff supply, hospitality staffing and MEP maintenance across Dubai.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
