import type { ReactNode } from "react";

export default function IconBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`shrink-0 w-[46px] h-[46px] rounded-xl bg-[#e8f3fc] grid place-items-center text-blue ${className}`}
    >
      {children}
    </div>
  );
}
