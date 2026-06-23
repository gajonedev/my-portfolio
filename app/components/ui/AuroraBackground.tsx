interface AuroraBackgroundProps {
  className?: string;
}

/**
 * Animated gradient-mesh aurora for hero sections.
 * Pure CSS radial gradients + keyframe drift — runs on first paint, no JS.
 * Respects reduced-motion through the global CSS override.
 */
export default function AuroraBackground({
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="aurora-blob top-1/4 left-1/3 h-[42rem] w-[42rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,61,0.28), transparent 60%)",
          animation: "aurora-1 16s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob top-1/3 right-1/4 h-[34rem] w-[34rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.16), transparent 60%)",
          animation: "aurora-2 20s ease-in-out -4s infinite",
        }}
      />
      <div
        className="aurora-blob -bottom-1/4 left-1/4 h-[32rem] w-[32rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.16), transparent 60%)",
          animation: "aurora-3 24s ease-in-out -9s infinite",
        }}
      />
      {/* top-right corner halo */}
      <div
        className="aurora-blob -top-24 -right-24 h-[34rem] w-[34rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,61,0.24), transparent 60%)",
          animation: "aurora-4 18s ease-in-out -6s infinite",
        }}
      />
    </div>
  );
}
