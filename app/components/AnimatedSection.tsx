"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) =>
        trigger.kill(),
      );
    };
  }, []);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {children}
    </div>
  );
}
