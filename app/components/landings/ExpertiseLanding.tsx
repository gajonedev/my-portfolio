import Link from "next/link";
import Container from "../Container";
import PageHeader from "../PageHeader";
import TechBadge from "../ui/TechBadge";
import {
  getIcon,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "@/lib/icons";
import {
  getProjectBySlug,
  getServicePageBySlug,
  siteConfig,
  contactInfo,
  type Expertise,
} from "@/data";

export default function ExpertiseLanding({
  expertise,
}: {
  expertise: Expertise;
}) {
  const url = `${siteConfig.url}/${expertise.slug}`;

  const relatedProjects = expertise.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => project !== undefined);

  const relatedService = getServicePageBySlug(expertise.relatedServiceSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: expertise.title,
        description: expertise.metaDescription,
        url,
        serviceType: `Développement ${expertise.techName}`,
        provider: { "@id": `${siteConfig.url}/#person` },
        areaServed: [
          { "@type": "Country", name: "Bénin" },
          { "@type": "Country", name: "Togo" },
          { "@type": "Country", name: "Côte d'Ivoire" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteConfig.url}/contact`,
          servicePhone: contactInfo.phoneRaw,
        },
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
            name: expertise.title,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: expertise.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={expertise.title}
        description={expertise.heroDescription}
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
              <li aria-current="page" className="text-foreground">
                {expertise.title}
              </li>
            </ol>
          </nav>

          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Pourquoi {expertise.techName}, et pourquoi moi
            </h2>
            {expertise.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Points forts */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Ce que {expertise.techName} apporte à votre projet
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {expertise.strengths.map((strength) => {
                const Icon = getIcon(strength.iconName);
                return (
                  <div
                    key={strength.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {strength.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Cas d'usage */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Ce que je construis avec {expertise.techName}
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {expertise.useCases.map((useCase) => (
                <div key={useCase} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-foreground-muted text-sm">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projets liés */}
          {relatedProjects.length > 0 && (
            <section>
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                Projets réalisés avec {expertise.techName}
              </h2>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group bg-card/50 hover:bg-card p-5 border border-stroke hover:border-primary/40 rounded-xl transition"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition">
                      {project.name}
                    </p>
                    <p className="mt-1 text-foreground-muted text-xs">
                      {project.sector}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.slice(0, 3).map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {expertise.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-card border border-stroke rounded-2xl open:pb-5"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 font-medium text-foreground cursor-pointer list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-foreground-muted transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="px-5 text-foreground-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            {relatedService && (
              <p className="mt-4 text-foreground-muted text-sm">
                En savoir plus sur le service associé :{" "}
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="text-primary hover:underline"
                >
                  {relatedService.title.toLowerCase()}
                </Link>
                .
              </p>
            )}
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Un projet {expertise.techName} ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Parlons-en. Prise de brief et devis clair sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/tarifs" className="btn-secondary">
                Voir les tarifs
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
