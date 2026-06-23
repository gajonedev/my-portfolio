import type { ReactNode } from "react";

interface TechBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function TechBadge({
  children,
  className = "",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-stroke bg-background-muted px-3 py-1 font-body text-xs text-foreground-muted ${className}`}
    >
      {children}
    </span>
  );
}
