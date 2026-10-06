import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ui/ProjectCard";
import SectionWrapper from "../components/layout/SectionWrapper";
import FinalCta from "../components/ui/FinalCta";
import { projects, siteConfig } from "@/data";

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];

const url = `${siteConfig.url}/projects`;

export const metadata: Metadata = {
  title: "Projets & Réalisations | Plateformes web & Apps mobiles",
  description:
    "Plateformes web et applications mobiles : contexte, rôle, captures et état actuel des projets clients et des prototypes.",
  alternates: { canonical: url },
  openGraph: {
    title: "Projets & Réalisations d'un développeur web et mobile au Bénin",
    description:
      "Plateformes web et applications mobiles, avec le contexte et l’état actuel de chaque projet.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Réalisations"
        title="Mes projets"
        description="Voici des projets que j’ai développés pour des clients ou pour explorer une idée. Je vous explique mes choix et où chacun en est."
      />
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-6 grid md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              accent={ACCENTS[index % ACCENTS.length]}
              detailed
            />
          ))}
        </Container>
      </SectionWrapper>
      <FinalCta
        title="Votre projet pourrait être le prochain"
        text="Plateforme web, logiciel métier ou application mobile : parlez-moi de votre idée, je vous réponds sous 24h."
      />
    </>
  );
}
