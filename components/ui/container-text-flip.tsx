"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      const textWidth = textRef.current.scrollWidth + 60;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
    
    // Animate container width
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        width: width,
        duration: animationDuration / 2000,
        ease: "power2.inOut"
      });
    }
  }, [currentWordIndex, width, animationDuration]);

  useEffect(() => {
    // Animate letters
    if (lettersRef.current) {
      const letters = lettersRef.current.querySelectorAll('.letter');
      
      gsap.fromTo(
        letters,
        { 
          opacity: 0,
          filter: "blur(10px)"
        },
        { 
          opacity: 1,
          filter: "blur(0px)",
          duration: animationDuration / 1000,
          stagger: 0.02,
          ease: "power2.out"
        }
      );
    }
  }, [currentWordIndex, animationDuration]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <p
      ref={containerRef}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-7xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),0_4px_8px_#00000052]",
        className,
      )}
    >
      <div
        ref={textRef}
        className={cn("inline-block", textClassName)}
      >
        <div ref={lettersRef} className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <span
              key={`${letter}-${index}-${currentWordIndex}`}
              className="letter"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </p>
  );
}