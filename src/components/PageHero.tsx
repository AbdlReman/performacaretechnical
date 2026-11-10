import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  children,
  image = "/images/bg-slider91.jpg",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative text-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover object-center -z-20" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(13,34,54,.94) 0%, rgba(13,34,54,.78) 50%, rgba(26,99,151,.45) 100%)",
        }}
      />
      <div className="w-[min(1180px,92%)] mx-auto relative">
        <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-sky mb-3">
          {eyebrow}
        </span>
        <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold max-w-[860px] tracking-[-0.02em] leading-[1.15] mb-4">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
