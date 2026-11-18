import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectStatus from "../ui/ProjectStatus";
import CursorPreview from "./CursorPreview";
import ProjectMedia from "./ProjectMedia";

const pad = (value: number) => String(value).padStart(2, "0");

/*
 * Projects page: an editorial index, one large line per project.
 * Desktop: the visual of the hovered line follows the pointer and the other
 * lines step back. Mobile: each line shows its visual.
 */
export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <CursorPreview
      previews={projects.map((project) => (
        <ProjectMedia key={project.slug} project={project} sizes="420px" />
      ))}
    >
      <ol className="pidx">
        {projects.map((project, index) => {
          const href = `/projects/${project.slug}`;
          return (
            <li
              key={project.slug}
              className="pidx-row"
              data-preview={index}
              data-anim="fade"
            >
              <span aria-hidden="true" className="pidx-num">
                {pad(index + 1)}
              </span>

              <span aria-hidden="true" className="pidx-thumb">
                <ProjectMedia
                  project={project}
                  sizes="(max-width: 1024px) 100vw, 1px"
                  priority={index === 0}
                />
              </span>

              <div className="pidx-main">
                <h2 className="pidx-name">
                  <Link href={href} className="pidx-link">
                    {project.name}
                  </Link>
                </h2>
                <p className="pidx-summary">{project.description}</p>
              </div>

              <div className="pidx-meta">
                <span>{project.sector.replace("•", "·")}</span>
                <span className="flex flex-wrap items-center gap-2">
                  {project.year ? (
                    <span className="font-mono">{project.year}</span>
                  ) : null}
                  <ProjectStatus status={project.status} />
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvrir ${project.name} dans un nouvel onglet`}
                      className="pidx-external"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </span>
              </div>

              <span aria-hidden="true" className="pidx-arrow">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </li>
          );
        })}
      </ol>
    </CursorPreview>
  );
}
