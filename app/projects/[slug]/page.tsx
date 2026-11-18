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
import ProjectCover from "../../components/ui/ProjectCover";
import ProjectMedia from "../../components/projects/ProjectMedia";
import { ArrowUpRight } from "lucide-react";
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
  const studies = projects.filter((p) => p.caseStudy);
  const next =
    studies[(studies.findIndex((p) => p.slug === project.slug) + 1) % studies.length];
  const built =
    project.status === "in-dev" ? "Ce que je développe" : "Ce que j’ai développé";
  const featuresTitle =
    project.status === "live"
      ? "Fonctionnalités réalisées"
      : project.status === "in-dev"
        ? "Fonctionnalités en développement"
        : "Fonctionnalités du prototype";
  const chapters = [
    { title: "Le point de départ", text: caseStudy.context },
    { title: "Le besoin à résoudre", text: caseStudy.problem },
  ];

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
            {project.sector.replace("•", "·")}
          </span>
          {project.status === "live" && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-ghost"
            >
              <span className="pill-ghost-label">Voir le projet en ligne</span>
              <ExternalLink aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
            </a>
          )}
        </div>
      </PageHeader>

      {/* La scène : captures, ou l'appareil en pointillés */}
      <SectionWrapper className="pt-12 md:pt-16 pb-6">
        <Container>
          <div className="case-stage" data-anim="card">
            {hasShots ? (
              <ProjectGallery images={project.images} name={project.name} />
            ) : (
              <div className="case-cover">
                <ProjectCover project={project} />
              </div>
            )}
          </div>
        </Container>
      </SectionWrapper>

      {/* Récit + fiche */}
      <section className="relative py-20 md:py-28 section-dark">
        <Container className="items-start gap-14 lg:gap-20 grid lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="lg:top-28 lg:sticky">
            <dl className="flex flex-col divide-y divide-white/[0.07] text-sm card">
              <div className="gap-4 grid grid-cols-2 p-5">
                <div>
                  <dt className="font-mono text-[0.68rem] text-foreground-subtle uppercase tracking-[0.14em]">
                    Année
                  </dt>
                  <dd className="mt-2 text-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.68rem] text-foreground-subtle uppercase tracking-[0.14em]">
                    Secteur
                  </dt>
                  <dd className="mt-2 text-foreground">
                    {project.sector.split("•")[0].trim()}
                  </dd>
                </div>
              </div>
              <div className="p-5">
                <dt className="font-mono text-[0.68rem] text-foreground-subtle uppercase tracking-[0.14em]">
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

          <div className="flex flex-col gap-20 md:gap-24 min-w-0">
            {chapters.map((chapter, index) => (
              <section key={chapter.title} className="flex flex-col gap-5">
                <h2 className="ed-kicker" data-anim="fade">
                  <span className="font-mono text-foreground-subtle">(0{index + 1})</span>
                  <span aria-hidden="true" className="ed-kicker-line" />
                  {chapter.title}
                </h2>
                <p data-anim="fade" className="case-lead">
                  {chapter.text}
                </p>
              </section>
            ))}

            <section className="flex flex-col gap-8">
              <SectionHeading index="03" kicker="Réalisation" title={built} />
              <ol className="vsteps" data-process>
                {caseStudy.solution.map((step, index) => (
                  <li key={step.slice(0, 40)} className="vstep" data-step>
                    <span aria-hidden="true" className="vstep-dot" />
                    <span className="vstep-num">0{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="flex flex-col gap-6 p-8 md:p-10 svc-card" data-anim="card">
              <p className="ed-kicker">
                <span className="font-mono text-foreground-subtle">(04)</span>
                <span aria-hidden="true" className="ed-kicker-line" />
                Résultat
              </p>
              <h2 className="font-display font-medium text-[clamp(1.6rem,2.8vw,2.2rem)] text-foreground tracking-[-0.02em]">
                {featuresTitle}
              </h2>
              <ul className="gap-x-8 gap-y-4 grid sm:grid-cols-2">
                {caseStudy.results.map((result) => (
                  <li key={result.slice(0, 40)} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {result}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {caseStudy.highlights && caseStudy.highlights.length > 0 && (
              <section className="flex flex-col gap-8">
                <SectionHeading index="05" kicker="Décisions" title="Les choix que j’ai faits" />
                <ul className="flex flex-col">
                  {caseStudy.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 40)}
                      data-anim="fade"
                      className="flex items-start gap-4 py-5 border-white/[0.07] border-t"
                    >
                      <Lightbulb className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                      <p className="text-foreground-muted leading-relaxed">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </Container>
      </section>

      {/* Projet suivant */}
      {next && next.slug !== project.slug ? (
        <section className="relative py-20 md:py-28 home-divider section-dark">
          <Container className="flex flex-col gap-10">
            <Link href={`/projects/${next.slug}`} className="next-project">
              <span className="flex flex-col gap-5 min-w-0">
                <span className="ed-kicker">
                  <span aria-hidden="true" className="ed-kicker-line" />
                  Projet suivant
                </span>
                <span className="next-project-name">{next.name}</span>
                <span className="text-foreground-muted">
                  {next.sector.replace("•", "·")}
                </span>
              </span>
              <span aria-hidden="true" className="next-project-media">
                <ProjectMedia project={next} sizes="(max-width: 1024px) 100vw, 480px" />
              </span>
            </Link>
            <Link href="/projects" className="w-fit pill-ghost">
              <span className="pill-ghost-label">Tous les projets</span>
              <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
            </Link>
          </Container>
        </section>
      ) : null}

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
