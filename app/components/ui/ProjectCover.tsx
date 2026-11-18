import { createElement } from "react";
import type { Project } from "@/data/projects";
import { getIcon } from "@/lib/icons";

// Mobile projects (Flutter) are drawn as a phone, the others as a browser.
export const projectDevice = (project: Pick<Project, "tech">) =>
  project.tech.some((tech) => /flutter/i.test(tech)) ? "phone" : "browser";

/*
 * Cover of a project without screenshots: its device in dotted lines,
 * standing on the lit horizon of the site, with the project icon.
 * Decorative only (the name is always written next to it).
 */
export default function ProjectCover({
  project,
  className = "",
}: {
  project: Pick<Project, "tech" | "iconName">;
  className?: string;
}) {
  const device = projectDevice(project);
  return (
    <span aria-hidden="true" className={`pcover ${className}`} data-device={device}>
      <span className="pcover-glow" />
      <svg viewBox="0 0 400 250" fill="none" className="pcover-svg">
        {device === "phone" ? (
          <>
            <rect x="158" y="26" width="84" height="166" rx="16" />
            <path d="M188 40 H212" />
            <path d="M174 136 H226 M174 150 H214 M174 164 H220" />
            <path className="pcover-accent" d="M174 118 L188 108 L200 113 L214 98 L226 102" />
          </>
        ) : (
          <>
            <rect x="72" y="34" width="256" height="158" rx="14" />
            <path d="M72 60 H328 M88 47 H92 M100 47 H104 M112 47 H116" />
            <path d="M136 60 V192 M90 82 H118 M90 98 H112 M90 114 H116" />
            <path d="M156 170 H230 M156 182 H210" />
            <path className="pcover-accent" d="M156 150 L184 134 L206 140 L234 118 L262 126 L306 108" />
          </>
        )}
      </svg>
      <span className="pcover-icon" data-device={device}>
        {createElement(getIcon(project.iconName), { className: "w-full h-full" })}
      </span>
      <span className="pcover-horizon" />
    </span>
  );
}
