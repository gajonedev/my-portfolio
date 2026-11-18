import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  href: string;
  children: ReactNode;
  /** Replaces the arrow inside the round badge. */
  icon?: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
}

/*
 * Home actions.
 * solid : light pill, a coral disc grows from the round badge and floods the
 *         button on hover while the arrow slides out and back in.
 * ghost : plain label, an underline draws from left to right on hover.
 */
export default function PillButton({
  href,
  children,
  icon,
  variant = "solid",
  external = false,
  className = "",
}: PillButtonProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const Tag = external || href.startsWith("#") ? "a" : Link;

  if (variant === "ghost") {
    return (
      <Tag href={href} {...linkProps} className={`pill-ghost ${className}`}>
        <span className="pill-ghost-label">{children}</span>
        <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
      </Tag>
    );
  }

  return (
    <Tag href={href} {...linkProps} className={`pill-solid ${className}`}>
      <span className="pill-solid-label">{children}</span>
      <span aria-hidden="true" className="pill-solid-badge">
        <span className="pill-solid-icon">
          {icon ?? <ArrowUpRight className="w-4 h-4" />}
        </span>
        <span className="pill-solid-icon pill-solid-icon-next">
          {icon ?? <ArrowUpRight className="w-4 h-4" />}
        </span>
      </span>
    </Tag>
  );
}
