"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <m.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </m.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <m.div className={className} variants={staggerItem}>
      {children}
    </m.div>
  );
}

export default StaggerContainer;
