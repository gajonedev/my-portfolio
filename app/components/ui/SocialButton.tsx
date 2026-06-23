"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  /** Rendered icon element (color is inherited from each swap layer) */
  icon: ReactNode;
  /** internal links (mailto/tel) shouldn't open a new tab */
  external?: boolean;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Social icon button with a compound hover: a coral fill rises from the
 * bottom, the icon barrel-rolls (current one slides up & out while a white
 * clone slides in from below), and a ring pulse radiates outward.
 */
export default function SocialButton({
  href,
  label,
  icon,
  external = true,
}: SocialButtonProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.a
      href={href}
      {...linkProps}
      aria-label={label}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      variants={{
        rest: { borderColor: "var(--stroke)", boxShadow: "0 0 0 rgba(0,0,0,0)" },
        hover: {
          borderColor: "var(--primary)",
          boxShadow: "0 8px 22px var(--primary-glow-strong)",
        },
      }}
      transition={{ duration: 0.3 }}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border bg-background text-foreground-muted"
    >
      {/* coral fill rising from the bottom */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full bg-primary"
        variants={{ rest: { y: "101%" }, hover: { y: "0%" } }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      />
      {/* ring pulse radiating outward on hover */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full border border-primary"
        variants={{
          rest: { scale: 1, opacity: 0 },
          hover: { scale: 1.7, opacity: [0, 0.5, 0] },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      {/* icon barrel-roll swap */}
      <span className="relative z-10 block h-4 w-4">
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{ rest: { y: 0, opacity: 1 }, hover: { y: "-150%", opacity: 0 } }}
          transition={{ duration: 0.32, ease: easeOut }}
        >
          {icon}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-primary-foreground"
          variants={{ rest: { y: "150%", opacity: 0 }, hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.32, ease: easeOut }}
        >
          {icon}
        </motion.span>
      </span>
    </motion.a>
  );
}
