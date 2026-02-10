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

    const targets = element.querySelectorAll<HTMLElement>("[data-animate]");

    // Set initial state
    targets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(24px)";
      target.style.transition =
        "opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1), transform 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each target with stagger
            targets.forEach((target, index) => {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }, index * 120); // 120ms stagger
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-20% 0px", // Trigger when top 80% of viewport
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {children}
    </div>
  );
}
