// Warm mesh glow rising from the bottom edge of a card. The parent must be
// `relative overflow-hidden`; content above it needs `relative`.
export default function BottomGlow() {
  return (
    <>
      <div
        aria-hidden="true"
        className="-bottom-28 absolute inset-x-0 blur-[90px] mx-auto rounded-full w-4/5 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,61,0.65), rgba(255,122,69,0.4) 38%, rgba(59,130,246,0.32) 62%, transparent 75%)",
        }}
      />
      {/* tighter core for a brighter hotspot */}
      <div
        aria-hidden="true"
        className="-bottom-10 absolute inset-x-0 blur-[70px] mx-auto rounded-full w-1/2 h-44 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,99,71,0.55), transparent 70%)",
        }}
      />
    </>
  );
}
