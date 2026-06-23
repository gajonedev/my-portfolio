"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

interface OutlineButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const hover = { scale: 1.02 };
const tap = { scale: 0.98 };

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
      <MotionLink
        {...linkProps}
        aria-label={ariaLabel}
        className={`btn-secondary ${className}`}
        whileHover={hover}
        whileTap={tap}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`btn-secondary ${className}`}
      whileHover={hover}
      whileTap={tap}
    >
      {children}
    </motion.button>
  );
}
