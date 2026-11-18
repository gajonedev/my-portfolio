import { createElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsPreview } from "@/data";
import { getIcon } from "@/lib/icons";
import Container from "../Container";
import ProjectStatus from "../ui/ProjectStatus";
import EditorialHeading from "./EditorialHeading";

const pad = (value: number) => String(value).padStart(2, "0");

// Desktop: the track is pinned and scrolls horizontally (HomeAnimations).
// Mobile and reduced motion: the same markup reads as a vertical list.
export default function HomeProjects() {
  const total = projectsPreview.length;

  return (
    <section id="projects" className="home-projects home-divider section-dark" data-projects>
      <div className="home-projects-pin" data-pin>
        <Container>
          <EditorialHeading
            index="01"
            kicker="Réalisations"
            title="Quelques projets sur lesquels j’ai travaillé"
            subtitle="Je vous présente ce que j’ai développé, pour qui et dans quel but."
            aside={
              <Link href="/projects" className="pill-ghost">
                <span className="pill-ghost-label">Tous les projets</span>
                <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
              </Link>
            }
          />
        </Container>

        <div className="home-projects-track" data-track>
          {projectsPreview.map((project, index) => {
            const cover = project.images.find((image) => image.src);
            const href = `/projects/${project.slug}`;
            return (
              <article key={project.slug} className="project-panel" data-panel>
                <Link
                  href={href}
                  className="project-panel-media"
                  aria-label={`Voir le projet ${project.name}`}
                  data-media
                >
                  <span className="project-panel-media-inner" data-media-inner>
                    {cover?.src ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 620px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="project-panel-fallback">
                        {createElement(getIcon(project.iconName), {
                          className: "w-10 h-10",
                          "aria-hidden": true,
                        })}
                        <span className="font-display text-3xl">{project.name}</span>
                      </span>
                    )}
                  </span>
                </Link>

                <div className="flex flex-col gap-4">
                  <span aria-hidden="true" className="project-panel-index">
                    {pad(index + 1)}
                  </span>
                  <div className="flex flex-wrap items-center gap-3 text-foreground-subtle text-xs">
                    <span className="font-mono">
                      {pad(index + 1)} / {pad(total)}
                    </span>
                    <span aria-hidden="true" className="bg-stroke-hover w-6 h-px" />
                    <span>{project.sector}</span>
                    <ProjectStatus status={project.status} />
                  </div>
                  <h3 className="font-display font-medium text-[clamp(2rem,3.4vw,3rem)] text-foreground leading-none tracking-[-0.03em]">
                    <Link href={href} className="project-panel-title">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="max-w-md text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>
                  {project.impact ? (
                    <p className="max-w-md text-foreground text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  ) : null}
                  <Link href={href} className="mt-2 w-fit pill-ghost">
                    <span className="pill-ghost-label">Voir le projet</span>
                    <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <Container className="hidden lg:block">
          <div aria-hidden="true" className="home-projects-progress">
            <span data-progress />
          </div>
        </Container>
      </div>
    </section>
  );
}
