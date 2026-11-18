import { Fragment } from "react";

interface SplitWordsProps {
  text: string;
  /** Words rendered in the primary color (exact match, punctuation stripped). */
  accent?: string[];
}

// Splits a sentence into word spans at render time (server side), so the
// animations never touch the text nodes React owns and the copy stays plain
// text for search engines and screen readers.
export default function SplitWords({ text, accent = [] }: SplitWordsProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => {
        const bare = word.replace(/[.,:;!?]/g, "");
        return (
          <Fragment key={index}>
            <span className="sw" style={{ "--i": index } as React.CSSProperties}>
              <span className={`sw-i${accent.includes(bare) ? " text-primary" : ""}`}>
                {word}
              </span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </>
  );
}
