// Line drawings of the two main services (home and /services), traced on
// scroll ([data-draw] in PageAnimations).
const CHART = "M120 196 L162 170 L198 182 L236 140 L272 152 L312 108 L360 92";

function WebVisual() {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className="svc-visual">
      <rect data-draw pathLength={1} x="12" y="12" width="376" height="236" rx="16" />
      <path data-draw pathLength={1} d="M12 46 H388" />
      <circle data-draw pathLength={1} cx="34" cy="29" r="5" />
      <circle data-draw pathLength={1} cx="52" cy="29" r="5" />
      <circle data-draw pathLength={1} cx="70" cy="29" r="5" />
      <path data-draw pathLength={1} d="M96 46 V248" />
      <path data-draw pathLength={1} d="M30 72 H76 M30 92 H66 M30 112 H72 M30 132 H60" />
      <rect data-draw pathLength={1} x="118" y="64" width="76" height="22" rx="6" />
      <rect data-draw pathLength={1} x="204" y="64" width="76" height="22" rx="6" />
      <rect data-draw pathLength={1} x="290" y="64" width="76" height="22" rx="6" />
      <path data-draw pathLength={1} d="M118 220 H366" />
      <path data-draw pathLength={1} d={CHART} className="svc-accent" />
      <path pathLength={1} d={CHART} className="svc-pulse" />
    </svg>
  );
}

function MobileVisual() {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className="svc-visual">
      <rect data-draw pathLength={1} x="136" y="10" width="128" height="240" rx="26" />
      <path data-draw pathLength={1} d="M182 24 H218" />
      <rect data-draw pathLength={1} x="152" y="46" width="96" height="58" rx="10" className="svc-accent" />
      <path data-draw pathLength={1} d="M152 122 H248 M152 144 H230 M152 166 H240 M152 188 H214" />
      <rect data-draw pathLength={1} x="152" y="206" width="96" height="26" rx="13" />
      <rect data-draw pathLength={1} x="276" y="58" width="104" height="44" rx="12" />
      <path data-draw pathLength={1} d="M290 74 H350 M290 88 H330" />
      <rect data-draw pathLength={1} x="22" y="150" width="96" height="44" rx="12" />
      <path data-draw pathLength={1} d="M36 166 H96 M36 180 H76" />
      <path pathLength={1} d="M276 80 C 262 80 262 76 248 76" className="svc-pulse" />
      <path pathLength={1} d="M118 172 C 136 172 136 160 152 160" className="svc-pulse svc-pulse-late" />
    </svg>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "creation-application-web": WebVisual,
  "creation-application-mobile": MobileVisual,
};

export const serviceVisual = (slug?: string) => VISUALS[slug ?? ""] ?? WebVisual;
