import SplitWords from "../home/SplitWords";

interface SectionHeadingProps {
  kicker?: string;
  /** Number shown before the kicker, as on the home page: "01". */
  index?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
}

// Editorial heading of the inner pages: same kicker and word reveal as the
// home sections (see PageAnimations, [data-anim="words"]).
export default function SectionHeading({
  kicker,
  index,
  title,
  subtitle,
  align = "left",
  size = "md",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start";
  const sizeClass =
    size === "lg"
      ? "text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.04]"
      : "text-[clamp(1.8rem,3.4vw,2.75rem)] leading-[1.08]";
  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      {kicker ? (
        <p className="ed-kicker" data-anim="fade">
          {index ? (
            <span className="font-mono text-foreground-subtle">({index})</span>
          ) : null}
          <span aria-hidden="true" className="ed-kicker-line" />
          {kicker}
        </p>
      ) : null}
      <h2
        data-anim={typeof title === "string" ? "words" : undefined}
        className={`max-w-3xl font-display font-medium text-foreground text-balance tracking-[-0.02em] ${sizeClass}`}
      >
        {typeof title === "string" ? <SplitWords text={title} /> : title}
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
  );
}
