"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  pulse?: boolean;
  ariaLabel?: string;
}

const baseClass = "btn-primary";

const hover = { scale: 1.02 };
const tap = { scale: 0.98 };

// Subtle continuous glow pulse for primary CTAs
const pulseAnim = {
  boxShadow: [
    "0 4px 20px var(--primary-glow-strong)",
    "0 6px 34px var(--primary-glow-strong), 0 0 44px var(--primary-glow)",
    "0 4px 20px var(--primary-glow-strong)",
  ],
};

export default function GlowButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  external = false,
  pulse = false,
  ariaLabel,
}: GlowButtonProps) {
  const animate = pulse ? pulseAnim : undefined;
  const transition = pulse
    ? { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
    : undefined;

  if (href) {
    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };
    return (
      <MotionLink
        {...linkProps}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
        whileHover={hover}
        whileTap={tap}
        animate={animate}
        transition={transition}
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
      className={`${baseClass} ${className}`}
      whileHover={hover}
      whileTap={tap}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.button>
  );
}
