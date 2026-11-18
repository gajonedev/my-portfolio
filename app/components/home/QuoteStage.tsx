"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

// Clients first, then collaborators.
const ordered = [
  ...testimonials.filter((item) => item.kind === "client"),
  ...testimonials.filter((item) => item.kind === "collaborator"),
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

/*
 * One large quote at a time. Every quote stays in the DOM (stacked in the
 * same grid cell) so the block never changes height and all of them remain
 * readable by search engines. Each tab carries its own progress bar; the
 * rotation stops on hover, focus, off screen, on demand or with reduced motion.
 */
export default function QuoteStage() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      query.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  const running = !userPaused && !hovered && !focused && visible && !reduced;
  const next = () => setActive((index) => (index + 1) % ordered.length);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Témoignages"
      className="quote-stage"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="quote-stack" aria-live={running ? "off" : "polite"}>
        {ordered.map((item, index) => {
          const isActive = index === active;
          return (
            <figure
              key={item.name}
              className="quote"
              data-active={isActive || undefined}
              aria-hidden={!isActive}
              inert={!isActive}
              aria-roledescription="témoignage"
              aria-label={`${index + 1} sur ${ordered.length}`}
            >
              <blockquote className="font-display text-[clamp(1.45rem,2.7vw,2.45rem)] text-foreground leading-[1.22] tracking-[-0.015em]">
                <p>
                  <span aria-hidden="true" className="quote-mark">
                    “
                  </span>
                  {/* only the visible quote is split into words (lighter DOM) */}
                  {isActive
                    ? item.quote
                        .trim()
                        .split(/\s+/)
                        .map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            className="qw"
                            style={{ "--i": wordIndex } as React.CSSProperties}
                          >
                            {word}{" "}
                          </span>
                        ))
                    : item.quote.trim()}
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-4 mt-10">
                <span aria-hidden="true" className="quote-avatar">
                  {initials(item.name)}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-foreground-muted text-sm">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="quote-nav">
        <div className="quote-tabs">
          {ordered.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                aria-current={isActive || undefined}
                className="quote-tab"
              >
                <span aria-hidden="true" className="font-mono text-xs">0{index + 1}</span>
                <span className="quote-tab-name">
                  <span className="sr-only">Témoignage de </span>
                  {item.name.split(" ")[0]}
                  <span className="sr-only"> {item.name.split(" ").slice(1).join(" ")}</span>
                </span>
                <span aria-hidden="true" className="quote-tab-bar">
                  {isActive ? (
                    <span
                      key={active}
                      className="quote-tab-fill"
                      style={{ animationPlayState: running ? "running" : "paused" }}
                      onAnimationEnd={running ? next : undefined}
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setUserPaused((value) => !value)}
          aria-pressed={userPaused}
          className="hero-pause"
        >
          <span aria-hidden="true" className="hero-pause-icon" data-paused={userPaused} />
          {userPaused ? "Reprendre le défilement" : "Mettre en pause"}
        </button>
      </div>
    </div>
  );
}
