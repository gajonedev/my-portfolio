import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import { getIcon, ExternalLink } from "@/lib/icons";
import { projects } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projets sélectionnés"
        description="Chaque réalisation est faite avec un design system, une architecture garantissant la performance et une expérience utilisateur premium."
      />
      <main className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
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
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-4 py-1 font-body text-xs text-primary">
                      {project.sector}
                    </span>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir ${project.name}`}
                    >
                      <ExternalLink className="h-4 w-4 text-foreground-muted transition group-hover:text-primary" />
                    </Link>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-4 font-body text-sm text-foreground-muted">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
