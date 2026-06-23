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
  ariaLabel?: string;
  disabled?: boolean;
}

const hover = { y: -2, scale: 1.02 };
const tap = { scale: 0.97 };

// Track cursor inside the button to drive the radial highlight (.btn-shine)
function handleMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function GlowButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  external = false,
  ariaLabel,
  disabled = false,
}: GlowButtonProps) {
  const content = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      <span className="inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };
    return (
      <MotionLink
        {...linkProps}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        className={`btn-primary ${className}`}
        whileHover={hover}
        whileTap={tap}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      className={`btn-primary disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
    >
      {content}
    </motion.button>
  );
}
