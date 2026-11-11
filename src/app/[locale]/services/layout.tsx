import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Cleaning, Staffing & Technical Maintenance | Performa Care",
  description:
    "Professional cleaning, staffing and technical maintenance across Dubai — commercial, residential, special services, manpower supply, hospitality staffing and MEP.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
