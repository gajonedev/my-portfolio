import Link from "next/link";
import type { ReactNode } from "react";

interface OutlineButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

// Secondary action. Hover / press states live in .btn-secondary (pure CSS).
export default function OutlineButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  external = false,
  ariaLabel,
}: OutlineButtonProps) {
  if (href) {
    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };
    return (
      <Link
        {...linkProps}
        aria-label={ariaLabel}
        className={`btn-secondary ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`btn-secondary ${className}`}
    >
      {children}
    </button>
  );
}
