import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import TechBadge from "../../components/ui/TechBadge";
import ProjectStatus from "../../components/ui/ProjectStatus";
import WhatsAppCta from "../../components/ui/WhatsAppCta";
import {
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Lightbulb,
} from "@/lib/icons";
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
    title: `${project.name} — Étude de cas ${project.sector.split("•")[0].trim()}`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} — Étude de cas`,
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

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug && p.caseStudy)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={`${project.name}, Étude de cas`}
        description={project.description}
      />

      <main className="py-16">
        <Container className="gap-14 grid">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="-mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-foreground-muted text-sm">
              <li>
                <Link href="/" className="hover:text-foreground transition">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-foreground transition"
                >
                  Projets
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li aria-current="page" className="text-foreground">
                {project.name}
              </li>
            </ol>
          </nav>

          {/* Fiche projet */}
          <section className="flex flex-wrap items-center gap-4 bg-card p-6 border border-stroke rounded-2xl">
            <span className="bg-primary/10 px-4 py-1 rounded-full font-body text-primary text-xs">
              {project.sector}
            </span>
            <ProjectStatus status={project.status} />
            {project.year && (
              <span className="text-foreground-muted text-sm">
                {project.year}
              </span>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
            {project.status === "live" && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 ml-auto text-primary text-sm hover:underline"
              >
                Voir le projet
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}
          </section>

          {/* Contexte */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Le contexte
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              {caseStudy.context}
            </p>
          </section>

          {/* Problème */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Le problème à résoudre
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              {caseStudy.problem}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-2xl">
              La solution mise en place
            </h2>
            <div className="flex flex-col gap-4 max-w-3xl">
              {caseStudy.solution.map((step, index) => (
                <div
                  key={step.slice(0, 40)}
                  className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                >
                  <div className="flex justify-center items-center bg-primary/15 rounded-xl w-10 h-10 font-display font-semibold text-primary shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Résultats */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Les résultats
            </h2>
            <div className="flex flex-col gap-3">
              {caseStudy.results.map((result) => (
                <div key={result.slice(0, 40)} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Points techniques marquants */}
          {caseStudy.highlights && caseStudy.highlights.length > 0 && (
            <section className="max-w-3xl">
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                Ce qui a fait la différence
              </h2>
              <div className="flex flex-col gap-3">
                {caseStudy.highlights.map((highlight) => (
                  <div
                    key={highlight.slice(0, 40)}
                    className="flex items-start gap-3"
                  >
                    <Lightbulb className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Autres études de cas */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Autres études de cas
            </h2>
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-3">
              {otherProjects.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projects/${other.slug}`}
                  className="group bg-card/50 hover:bg-card p-4 border border-stroke hover:border-primary/40 rounded-xl transition"
                >
                  <p className="font-medium text-foreground group-hover:text-primary transition">
                    {other.name}
                  </p>
                  <p className="mt-1 text-foreground-muted text-xs">
                    {other.sector}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Un projet similaire en tête ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Parlons-en. Prise de brief et devis clair sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta
                label="Discuter de mon projet"
                message={`Bonjour Néhémie, j'ai vu l'étude de cas « ${project.name} » et j'ai un projet similaire à discuter.`}
              />
              <Link href="/services" className="btn-secondary">
                Voir les services
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
