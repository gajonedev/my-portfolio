import type { CSSProperties, ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  /** Handle shown in the tooltip (e.g. "@gajonedev"). */
  handle?: string;
  icon: ReactNode;
  /** Brand fill revealed on hover, and the icon color on top of it. */
  brand?: string;
  brandForeground?: string;
  /** internal links (mailto/tel) shouldn't open a new tab */
  external?: boolean;
}

/**
 * Social icon button, pure CSS (.social-btn in globals.css). Place several in
 * a `.social-dock` list for the macOS-dock magnification: the hovered button
 * lifts and grows, its neighbours rise a little. On hover the brand color
 * fills the circle from the bottom, a ring ripples out and a tooltip shows
 * the network and handle.
 */
export default function SocialButton({
  href,
  label,
  handle,
  icon,
  brand = "var(--primary-fill)",
  brandForeground = "#ffffff",
  external = true,
}: SocialButtonProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      aria-label={handle ? `${label} (${handle})` : label}
      className="social-btn"
      style={
        { "--brand": brand, "--brand-fg": brandForeground } as CSSProperties
      }
    >
      <span className="social-icon">{icon}</span>
      <span aria-hidden="true" className="social-tip">
        <span className="font-semibold">{label}</span>
        {handle && <span className="opacity-60"> {handle}</span>}
      </span>
    </a>
  );
}
