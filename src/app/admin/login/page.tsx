import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(160deg,#061018_0%,#0b1520_45%,#0f3f63_100%)] text-[#e8eef4]">
      <div className="mx-auto flex min-h-screen w-[min(960px,92%)] items-center justify-center py-12">
        <div className="grid w-full max-w-[440px] gap-6">
          <div className="text-center">
            <Image
              src="/images/logo-white-01.png"
              alt="Performa Care"
              width={72}
              height={72}
              className="mx-auto mb-4 h-[72px] w-[72px] object-contain"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#74c1f8]">Admin access</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.02em] text-white">Sign in</h1>
            <p className="mt-2 text-sm text-[#9bb0c3]">
              English-only admin panel. Use the secret key from your env file.
            </p>
          </div>

          <div className="rounded-[22px] border border-[#2a3b4f] bg-[#152536] p-6 shadow-[0_24px_60px_rgba(0,0,0,.45)] sm:p-8">
            <Suspense fallback={<p className="text-sm text-[#9bb0c3]">Loading form...</p>}>
              <AdminLoginForm />
            </Suspense>
          </div>

          <p className="text-center text-sm text-[#9bb0c3]">
            <Link href="/" className="font-semibold text-[#74c1f8] underline underline-offset-4 hover:text-white">
              Back to website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
