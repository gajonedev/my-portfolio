import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ProjectIndex from "../components/projects/ProjectIndex";
import SectionWrapper from "../components/layout/SectionWrapper";
import FinalCta from "../components/ui/FinalCta";
import { projects, siteConfig } from "@/data";

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
      <SectionWrapper className="pt-10 md:pt-14 pb-24 md:pb-32">
        <Container className="flex flex-col gap-8">
          <p className="ed-kicker">
            <span className="font-mono text-foreground-subtle">
              ({String(projects.length).padStart(2, "0")})
            </span>
            <span aria-hidden="true" className="ed-kicker-line" />
            Projets clients et prototypes
          </p>
          <ProjectIndex projects={projects} />
        </Container>
      </SectionWrapper>
      <FinalCta
        title="Votre projet pourrait être le prochain"
        text="Vous cherchez à créer un outil pour votre activité ? Présentez-moi votre idée."
      />
    </>
  );
}
