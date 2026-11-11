import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Performa Care",
  description: "Cleaning, staffing and hospitality insights from Performa Care in Dubai.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
