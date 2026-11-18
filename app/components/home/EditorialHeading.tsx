import type { ReactNode } from "react";
import SplitWords from "./SplitWords";

interface EditorialHeadingProps {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  aside?: ReactNode;
  className?: string;
}

// Section heading of the home: numbered kicker, large title revealed word by
// word on scroll (see HomeAnimations, [data-anim="words"]).
export default function EditorialHeading({
  index,
  kicker,
  title,
  subtitle,
  aside,
  className = "",
}: EditorialHeadingProps) {
  return (
    <div
      className={`flex flex-wrap justify-between items-end gap-x-10 gap-y-6 ${className}`}
    >
      <div className="flex flex-col gap-5 max-w-3xl">
        <p className="ed-kicker" data-anim="fade">
          <span className="font-mono text-foreground-subtle">({index})</span>
          <span aria-hidden="true" className="ed-kicker-line" />
          {kicker}
        </p>
        <h2
          data-anim="words"
          className="font-display font-medium text-[clamp(2.1rem,4.6vw,3.9rem)] text-foreground text-balance leading-[1.04] tracking-[-0.02em]"
        >
          <SplitWords text={title} />
        </h2>
        {subtitle ? (
          <p
            data-anim="fade"
            className="max-w-2xl text-foreground-muted md:text-lg leading-relaxed"
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {aside ? <div data-anim="fade">{aside}</div> : null}
    </div>
  );
}
