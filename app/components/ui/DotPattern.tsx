interface DotPatternProps {
  className?: string;
  /** Fade the pattern toward the edges with a radial mask */
  fade?: boolean;
}

export default function DotPattern({
  className = "",
  fade = true,
}: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-dots ${className}`}
      style={
        fade
          ? {
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }
          : undefined
      }
    />
  );
}
