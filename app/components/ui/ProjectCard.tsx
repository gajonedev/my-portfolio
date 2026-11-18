import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Images } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";
import ProjectStatus from "./ProjectStatus";

interface ProjectCardProps {
  project: Project;
  /** Ignored: covers without screenshots use ProjectCover. */
  accent?: string;
  /** Projects page: long summary, role and live link instead of the short pitch. */
  detailed?: boolean;
}

// Whole card is clickable: the title link stretches over the card (::after),
// secondary links sit above it with `relative z-10`. Pure CSS, no JS.
export default function ProjectCard({
  project,
  detailed = false,
}: ProjectCardProps) {
  const shots = project.images.filter((image) => image.src);
  const cover = shots[0];
  const href = `/projects/${project.slug}`;

  return (
    <article className="group relative flex flex-col bg-(image:--card-surface) border border-(--card-edge) hover:border-primary/40 rounded-[1.75rem] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-primary has-[a:focus-visible]:outline-offset-4 h-full overflow-hidden transition hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300">
      <div className="relative border-(--card-edge) border-b aspect-[16/10] overflow-hidden">
        {cover?.src ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover object-top motion-reduce:group-hover:scale-100 group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <ProjectCover project={project} />
        )}
        {shots.length > 1 && (
          <span className="right-3 bottom-3 absolute flex items-center gap-1.5 bg-black/65 backdrop-blur px-2.5 py-1 rounded-full font-medium text-white text-xs">
            <Images className="w-3.5 h-3.5" aria-hidden="true" />
            {shots.length} captures
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 gap-3 p-6">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="text-foreground-muted text-xs">
            {project.sector}
          </span>
          <div className="flex items-center gap-2">
            <ProjectStatus status={project.status} />
            {detailed && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir ${project.name} dans un nouvel onglet`}
                className="z-10 relative flex justify-center items-center border border-stroke hover:border-primary rounded-full w-8 h-8 text-foreground-muted hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-xl">
          <Link
            href={href}
            className="after:absolute after:inset-0 focus-visible:outline-none group-hover:text-primary after:content-[''] transition-colors"
          >
            {project.name}
          </Link>
        </h3>

        <p className="text-foreground-muted text-sm leading-relaxed">
          {detailed ? project.summary : project.description}
        </p>

        {/* {detailed && (
          <p className="text-foreground-muted text-sm leading-relaxed">
            <span className="font-medium text-foreground">Mon rôle : </span>
            {project.role}
          </p>
        )} */}

        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 mt-auto pt-2 font-medium text-primary text-sm"
        >
          Voir l’étude de cas
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
