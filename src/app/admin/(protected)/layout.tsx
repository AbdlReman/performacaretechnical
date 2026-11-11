import { Suspense } from "react";
import AdminShell from "@/components/admin/AdminShell";

export const instant = false;

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b1520] text-[#9bb0c3] p-8">Loading admin...</div>}>
      <AdminShell>{children}</AdminShell>
    </Suspense>
  );
}
