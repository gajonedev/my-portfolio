import SpotlightCard from "../../components/ui/SpotlightCard";
import { serializeJsonLd } from "@/lib/seo";
import ProjectGallery from "../../components/ui/ProjectGallery";
import { contactHref, serviceFromPath } from "@/lib/acquisition";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import TechBadge from "../../components/ui/TechBadge";
import ProjectStatus from "../../components/ui/ProjectStatus";
import SectionWrapper from "../../components/layout/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "../../components/ui/ProjectCard";
import FinalCta from "../../components/ui/FinalCta";
import { CheckCircle, ExternalLink, Lightbulb } from "@/lib/icons";
import { projects, getProjectBySlug, siteConfig } from "@/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${siteConfig.url}/projects/${project.slug}`;
  return {
    title: `${project.name} | Étude de cas ${project.sector.split("•")[0].trim()}`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} | Étude de cas`,
      description: project.description,
      url,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const { caseStudy } = project;
  const url = `${siteConfig.url}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.name,
        description: project.description,
        url,
        dateCreated: project.year,
        creator: { "@id": `${siteConfig.url}/#person` },
        keywords: project.tech.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projets",
            item: `${siteConfig.url}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: url,
          },
        ],
      },
    ],
  };

  const hasShots = project.images.some((image) => image.src);
  const otherProjects = projects
    .filter((p) => p.slug !== project.slug && p.caseStudy)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <PageHeader
        kicker="Étude de cas"
        title={project.name}
        description={project.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Projets", href: "/projects" },
          { label: project.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <ProjectStatus status={project.status} />
          <span className="text-foreground-muted text-sm">
            {project.sector}
          </span>
          {project.status === "live" && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline"
            >
              Voir le projet en ligne
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </PageHeader>

      {hasShots && (
        <SectionWrapper variant="light" className="py-12 md:py-16">
          <Container>
            <ProjectGallery images={project.images} name={project.name} />
          </Container>
        </SectionWrapper>
      )}

      {/* Récit + fiche */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="items-start gap-12 grid lg:grid-cols-[1fr_20rem]">
          <div className="flex flex-col gap-14 min-w-0">
            <section>
              <h2 className="font-semibold text-foreground text-2xl">
                Le point de départ
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {caseStudy.context}
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-foreground text-2xl">
                Le besoin à résoudre
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {caseStudy.problem}
              </p>
            </section>

            <section>
              <h2 className="mb-6 font-semibold text-foreground text-2xl">
                {project.status === "in-dev"
                  ? "Ce que je développe"
                  : "Ce que j’ai développé"}
              </h2>
              <ol className="flex flex-col divide-y divide-stroke card">
                {caseStudy.solution.map((step, index) => (
                  <li key={step.slice(0, 40)} className="flex gap-4 p-5">
                    <span className="font-display font-semibold tabular-nums text-primary text-sm">
                      0{index + 1}
                    </span>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <SpotlightCard
              corner="tr"
              cornerColor="#3b82f6"
              hover={false}
              glow={false}
            >
              <section className="p-8">
                <h2 className="mb-6 font-semibold text-foreground text-xl">
                  {project.status === "live"
                    ? "Fonctionnalités réalisées"
                    : project.status === "in-dev"
                      ? "Fonctionnalités en développement"
                      : "Fonctionnalités du prototype"}
                </h2>
                <ul className="flex flex-col gap-3">
                  {caseStudy.results.map((result) => (
                    <li
                      key={result.slice(0, 40)}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {result}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </SpotlightCard>

            {caseStudy.highlights && caseStudy.highlights.length > 0 && (
              <section>
                <h2 className="mb-6 font-semibold text-foreground text-xl">
                  Les choix que j’ai faits
                </h2>
                <ul className="flex flex-col gap-3">
                  {caseStudy.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 40)}
                      className="flex items-start gap-3"
                    >
                      <Lightbulb className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:top-28 lg:sticky -order-1 lg:order-none">
            <dl className="flex flex-col divide-y divide-stroke text-sm card">
              {/* <div className="p-5">
                <dt className="text-foreground-muted text-xs uppercase tracking-wider">
                  Mon rôle
                </dt>
                <dd className="mt-2 text-foreground leading-relaxed">
                  {project.role}
                </dd>
              </div> */}
              <div className="gap-4 grid grid-cols-2 p-5">
                <div>
                  <dt className="text-foreground-muted text-xs uppercase tracking-wider">
                    Année
                  </dt>
                  <dd className="mt-2 text-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-foreground-muted text-xs uppercase tracking-wider">
                    Secteur
                  </dt>
                  <dd className="mt-2 text-foreground">
                    {project.sector.split("•")[0].trim()}
                  </dd>
                </div>
              </div>
              <div className="p-5">
                <dt className="text-foreground-muted text-xs uppercase tracking-wider">
                  {project.skills ? "Compétences mises en œuvre" : "Technologies"}
                </dt>
                <dd className="flex flex-wrap gap-2 mt-3">
                  {(project.skills ?? project.tech).map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </SectionWrapper>

      {/* Autres projets */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-10 grid">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <SectionHeading
              kicker="Projets"
              title="D’autres projets sur lesquels j’ai travaillé"
            />
            <Link
              href="/projects"
              className="font-medium text-primary text-sm hover:underline"
            >
              Tous les projets →
            </Link>
          </div>
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((other, index) => (
              <ProjectCard
                key={other.slug}
                project={other}
                accent={["#ff4d3d", "#3b82f6", "#f59e0b"][index % 3]}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <FinalCta
        title="Un projet similaire en tête ?"
        text="Vous avez un besoin similaire ? Parlons de ce que vous souhaitez construire."
        whatsappLabel="Discuter de mon projet"
        whatsappMessage={`Bonjour Néhémie, j'ai vu l'étude de cas « ${project.name} » et j'ai un projet similaire à discuter.`}
        secondary={{
          href: contactHref(
            serviceFromPath(`/projects/${project.slug}`) ??
              (project.tech.includes("Flutter")
                ? "creation-application-mobile"
                : "creation-application-web"),
            `/projects/${project.slug}`,
          ),
          label: "Décrire un projet similaire",
        }}
      />
    </>
  );
}
