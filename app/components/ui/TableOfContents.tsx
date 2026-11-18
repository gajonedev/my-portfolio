"use client";

import { useEffect, useState } from "react";

/*
 * Sticky summary of an article: the section being read lights up on the
 * rail. Plain anchor links, so it works the same without JavaScript.
 */
export default function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    const targets = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Sommaire de l’article" className="toc">
      <p className="toc-title">Sommaire</p>
      <ol className="toc-list">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="toc-link"
              aria-current={active === heading.id ? "location" : undefined}
            >
              <span className="toc-num">{String(index + 1).padStart(2, "0")}</span>
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
