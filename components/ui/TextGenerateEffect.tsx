"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const wordElements = containerRef.current.querySelectorAll("span");
    
    gsap.fromTo(
      wordElements,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 2,
        stagger: 0.2,
        ease: "power1.out"
      }
    );
  }, []);

  const renderWords = () => {
    return (
      <div ref={containerRef}>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className={`${
                idx > 2 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};