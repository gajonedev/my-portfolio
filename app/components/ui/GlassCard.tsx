"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft } from "@/lib/animations";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  as = "div",
}: GlassCardProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={`glass rounded-3xl transition-colors duration-300 hover:border-[color:var(--glass-border-hover)] ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 18px 50px var(--primary-glow)",
              transition: springSoft,
            }
          : undefined
      }
    >
      {children}
    </MotionTag>
  );
}
