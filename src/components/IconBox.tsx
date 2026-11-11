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
      className={`shrink-0 w-[46px] h-[46px] rounded-xl grid place-items-center text-blue ${className}`}
      style={{ background: "var(--icon-bg)" }}
    >
      {children}
    </div>
  );
}
