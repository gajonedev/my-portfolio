import { serializeJsonLd } from "@/lib/seo";
import Link from "next/link";
import Container from "../Container";
import SectionWrapper from "../layout/SectionWrapper";
import FaqList from "../ui/FaqList";
import FinalCta from "../ui/FinalCta";
import PageHeader from "../PageHeader";
import TechBadge from "../ui/TechBadge";
import { getIcon, CheckCircle } from "@/lib/icons";
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <PageHeader
        kicker="Expertise"
        title={expertise.title}
        description={expertise.heroDescription}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: expertise.title },
        ]}
      />

      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Comment j’utilise {expertise.techName} pour votre projet
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
                    className="flex gap-4 p-5 card"
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

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Cas d'usage */}
          <section className="p-8 card">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Ce que je construis avec {expertise.techName}
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {expertise.useCases.map((useCase) => (
                <div key={useCase} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
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
                    className="group p-5 card-interactive"
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

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes
            </h2>
            <FaqList items={expertise.faq} />
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

        </Container>
      </SectionWrapper>

      <FinalCta
        title={`Un projet ${expertise.techName} ?`}
        text="Expliquez-moi ce que votre application doit faire, ou ce qui bloque aujourd’hui."
        whatsappLabel="Discuter de mon projet"
        whatsappMessage={`Bonjour Néhémie, j'ai un projet ${expertise.techName} et j'aimerais en discuter avec vous.`}
        secondary={{ href: "/tarifs", label: "Voir les tarifs" }}
      />
    </>
  );
}
