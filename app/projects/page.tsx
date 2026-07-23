import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SpotlightCard from "../components/ui/SpotlightCard";
import TechBadge from "../components/ui/TechBadge";
import ProjectStatus from "../components/ui/ProjectStatus";
import { getIcon, ExternalLink, ArrowRight, TrendingUp } from "@/lib/icons";
import { projects, siteConfig } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

const url = `${siteConfig.url}/projects`;

export const metadata: Metadata = {
  title: "Projets & Réalisations — Web, Mobile & E-commerce",
  description:
    "Mes réalisations : applications mobiles, plateformes web et e-commerce livrés pour des clients au Bénin et à l'international. Des résultats concrets à l'appui.",
  alternates: { canonical: url },
  openGraph: {
    title: "Projets & Réalisations d'un développeur web et mobile au Bénin",
    description:
      "Applications mobiles, plateformes web et e-commerce livrés, avec des résultats concrets pour chaque client.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projets sélectionnés"
        description="Des produits qui ont réglé un problème métier, que leurs utilisateurs gardent, et qui tiennent la charge dans la durée."
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
                  {project.impact && (
                    <p className="flex items-start gap-2 bg-primary/5 mt-4 px-3 py-2 border-primary/60 border-l-2 rounded-r-lg font-body text-foreground text-sm">
                      <TrendingUp className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                      <span className="font-medium">{project.impact}</span>
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                  {project.caseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 mt-5 font-medium text-primary text-sm hover:underline"
                    >
                      Lire l&apos;étude de cas
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </Container>
      </main>
    </>
  );
}
