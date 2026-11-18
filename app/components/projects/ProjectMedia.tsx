import Image from "next/image";
import type { Project } from "@/data/projects";
import ProjectCover from "../ui/ProjectCover";

// First screenshot of a project, or its dotted cover when it has none.
// Fills its (relative, sized) parent.
export default function ProjectMedia({
  project,
  sizes,
  priority = false,
}: {
  project: Project;
  sizes: string;
  /** Above the fold: load right away (LCP candidate). */
  priority?: boolean;
}) {
  const cover = project.images.find((image) => image.src);
  return cover?.src ? (
    <Image
      src={cover.src}
      alt={cover.alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-top"
    />
  ) : (
    <ProjectCover project={project} />
  );
}
