"use client";

import { motion } from "framer-motion";
import { easeSmooth, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: easeSmooth }}
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
    >
      {kicker ? (
        <span className="flex items-center gap-2 font-body font-medium text-primary text-xs uppercase tracking-[0.3em]">
          <span className="inline-block bg-primary rounded-full w-1.5 h-1.5 glow-sm" />
          {kicker}
        </span>
      ) : null}
      <h2 className="font-display font-semibold text-foreground text-3xl md:text-4xl tracking-tight text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl font-body text-foreground-muted text-base leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
