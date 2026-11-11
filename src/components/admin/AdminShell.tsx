"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/quotes", label: "Quotes" },
  { href: "/admin/subscribers", label: "Subscribers" },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#0d2236]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[240px] shrink-0 border-r border-[#d7e2ec] bg-[#0d2236] text-white md:flex md:flex-col">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
            <Image src="/images/logo-white-01.png" alt="Performa Care" width={40} height={40} className="h-10 w-10 object-contain" />
            <div>
              <p className="text-sm font-bold tracking-wide">Performa Care</p>
              <p className="text-xs text-[#9bb0c3]">Admin Panel</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {nav.map((item) => {
              const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                    active ? "bg-white/15 text-white" : "text-[#c9d6e3] hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/10 p-3">
            <Link href="/" className="mb-2 block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#c9d6e3] hover:bg-white/8 hover:text-white">
              View website
            </Link>
            <button
              type="button"
              onClick={logout}
              className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#fca5a5] hover:bg-white/8"
            >
              Log out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-[#d7e2ec] bg-white/95 backdrop-blur">
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1a6397]">Admin</p>
                <h1 className="text-lg font-extrabold tracking-[-0.02em]">Performa Care</h1>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <Link href="/" className="rounded-full border border-[#d7e2ec] px-3 py-1.5 text-xs font-bold">
                  Site
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-full bg-[#0d2236] px-3 py-1.5 text-xs font-bold text-white"
                >
                  Log out
                </button>
              </div>
            </div>
            <div className="flex gap-1 overflow-x-auto border-t border-[#eef3f8] px-3 py-2 md:hidden">
              {nav.map((item) => {
                const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
                      active ? "bg-[#1a6397] text-white" : "bg-white text-[#5b6b7b] border border-[#d7e2ec]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
