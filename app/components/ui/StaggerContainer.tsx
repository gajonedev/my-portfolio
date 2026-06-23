"use client";

import { motion } from "framer-motion";
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
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export default StaggerContainer;
