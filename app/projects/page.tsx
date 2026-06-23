import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import ProjectStatus from "../components/ui/ProjectStatus";
import { getIcon, ExternalLink } from "@/lib/icons";
import { projects } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

export default async function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projets sélectionnés"
        description="Chaque réalisation est faite avec un design system, une architecture garantissant la performance et une expérience utilisateur premium."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = getIcon(project.iconName);
            return (
              <SpotlightCard
                key={project.name}
                corner={CORNERS[i % CORNERS.length]}
                cornerColor={ACCENTS[i % ACCENTS.length]}
                className="group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-primary/10 px-4 py-1 rounded-full font-body text-primary text-xs">
                        {project.sector}
                      </span>
                      <ProjectStatus status={project.status} />
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4 text-foreground-muted group-hover:text-primary transition" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex justify-center items-center bg-primary/15 rounded-xl w-10 h-10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-xl">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-4 font-body text-foreground-muted text-sm">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </Container>
      </main>
    </>
  );
}
