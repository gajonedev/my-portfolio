import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
