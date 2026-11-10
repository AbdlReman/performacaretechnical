import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#081725] text-[#93a7ba] py-10 text-sm">
      <div className="w-[min(1180px,92%)] mx-auto flex justify-between gap-5 flex-wrap items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-white-01.png"
            alt="Performa Care"
            width={48}
            height={48}
            className="object-contain"
          />
          <span>
            © 2026 Performa Care Technical Services &amp; Performa Care Hospitality Services. Dubai,
            UAE.
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/about-us" className="hover:text-white transition">
            About Us
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/staff-supply" className="hover:text-white transition">
            Staff Supply
          </Link>
          <Link href="/why-us" className="hover:text-white transition">
            Why Us
          </Link>
          <Link href="/process" className="hover:text-white transition">
            Process
          </Link>
          <Link href="/faq" className="hover:text-white transition">
            FAQ
          </Link>
          <a href="tel:+971502247589" className="hover:text-white transition">
            +971 50 224 7589
          </a>
          <a href="mailto:info@performacaretechnical.com" className="hover:text-white transition">
            info@performacaretechnical.com
          </a>
        </div>
      </div>
    </footer>
  );
}
