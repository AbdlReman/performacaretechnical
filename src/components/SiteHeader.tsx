import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/staff-supply", label: "Staff Supply" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-[#c9d6e3] text-[13px]">
        <div className="w-[min(1180px,92%)] mx-auto flex justify-between gap-3 py-2 flex-wrap">
          <span>Office 476, Arjumand Building, Green Community Village, Dubai</span>
          <span className="hidden md:inline">
            <a href="tel:+971502247589" className="hover:text-white transition">
              +971 50 224 7589
            </a>
            {" "}|{" "}
            <a href="mailto:info@performacaretechnical.com" className="hover:text-white transition">
              info@performacaretechnical.com
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-[10px] border-b border-line">
        <div className="w-[min(1180px,92%)] mx-auto">
          <nav className="flex items-center justify-between py-3 sm:py-3.5 min-h-[108px]">
            <Link href="/" className="flex items-center shrink-0" aria-label="Performa Care home">
              <Image
                src="/images/logo.png"
                alt="Performa Care logo"
                width={94}
                height={94}
                className="object-contain w-[84px] h-[84px] sm:w-[94px] sm:h-[94px]"
                priority
              />
            </Link>

            <div className="hidden lg:flex gap-7 font-semibold text-[15px]">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-blue transition">
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-[26px] py-3.5 rounded-full font-bold text-[15px] bg-blue text-white border-2 border-transparent transition hover:bg-[#124c75] hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
