import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(160deg,#0d2236_0%,#1a6397_55%,#74c1f8_120%)] text-white">
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
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#cfe2f2]">Admin access</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.02em]">Sign in</h1>
            <p className="mt-2 text-sm text-[#d8e4ee]">
              English-only admin panel. Use the secret key from your env file.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/15 bg-white p-6 text-[#0d2236] shadow-[0_24px_60px_rgba(0,0,0,.25)] sm:p-8">
            <Suspense fallback={<p className="text-sm text-[#5b6b7b]">Loading form...</p>}>
              <AdminLoginForm />
            </Suspense>
          </div>

          <p className="text-center text-sm text-[#d8e4ee]">
            <Link href="/" className="font-semibold underline underline-offset-4 hover:text-white">
              Back to website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
