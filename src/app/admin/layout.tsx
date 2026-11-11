import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Performa Care",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="dark admin-panel min-h-screen bg-[#0b1520] text-[#e8eef4]">{children}</div>;
}
