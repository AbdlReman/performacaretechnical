import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Services in Dubai | Waiters, Waitresses & Event Staff | Performa Care",
  description:
    "Hire trained waiters, waitresses, housekeeping and hospitality staff for hotels, restaurants, cafés, serviced apartments and events across Dubai.",
};

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
