"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AnimatedSection({
  children,
  className,
  ...props
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const targets = element.querySelectorAll("[data-animate]");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger animation avec délai progressif
            targets.forEach((target, index) => {
              setTimeout(() => {
                target.classList.add("animated");
              }, index * 180); // 180ms stagger
            });
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "-20% 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {children}
    </div>
  );
}
