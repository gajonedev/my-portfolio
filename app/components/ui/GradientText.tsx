import type { ElementType, ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = "span",
  className = "",
}: GradientTextProps) {
  return <Tag className={`text-gradient ${className}`}>{children}</Tag>;
}
