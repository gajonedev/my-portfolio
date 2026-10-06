import { serializeJsonLd } from "@/lib/seo";
import Link from "next/link";
import Container from "../Container";
import SectionWrapper from "../layout/SectionWrapper";
import FaqList from "../ui/FaqList";
import FinalCta from "../ui/FinalCta";
import PageHeader from "../PageHeader";
import WhatsAppCta from "../ui/WhatsAppCta";
import Image from "next/image";
import {
  getIcon,
  MapPin,
  CheckCircle,
  ChevronRight,
  Search,
  Clock,
  Smartphone,
} from "@/lib/icons";
import {
  localServices,
  localAdvantages,
  aboutGuarantees,
  projects,
  siteConfig,
  contactInfo,
  cityFullSlug,
  getCityBySlug,
  type LocalCity,
} from "@/data";

const proofSlugsByCity: Record<string, string[]> = {
  cotonou: ["archiform", "weman-lms", "afcom"],
  "abomey-calavi": ["weman-lms", "archiform", "afcom"],
  "porto-novo": ["archiform", "weman-lms", "afcom"],
  parakou: ["afcom", "weman-lms", "archiform"],
  djougou: ["afcom", "archiform", "weman-lms"],
  bohicon: ["afcom", "archiform", "weman-lms"],
  abomey: ["archiform", "weman-lms", "afcom"],
  lokossa: ["weman-lms", "archiform", "afcom"],
  ouidah: ["archiform", "weman-lms", "afcom"],
  natitingou: ["archiform", "afcom", "weman-lms"],
  kandi: ["afcom", "weman-lms", "archiform"],
  malanville: ["afcom", "archiform", "weman-lms"],
  savalou: ["afcom", "archiform", "weman-lms"],
  "dassa-zoume": ["archiform", "afcom", "weman-lms"],
  "seme-podji": ["weman-lms", "afcom", "archiform"],
  come: ["archiform", "afcom", "weman-lms"],
};

const visitorProblems = [
  {
    icon: Search,
    title: "Vous voulez être plus facile à trouver ?",
    description:
      "Je peux vous aider à présenter votre activité, vos services et les moyens de vous joindre sur le web.",
  },
  {
    icon: Clock,
    title: "Vous répétez les mêmes tâches chaque jour ?",
    description:
      "Si vos commandes, vos inscriptions ou vos stocks deviennent difficiles à suivre, je peux développer un outil pour les regrouper.",
  },
  {
    icon: Smartphone,
    title: "Vous avez besoin d’un outil utilisable sur le terrain ?",
    description:
      "Nous pouvons prévoir une utilisation sur téléphone, des fonctions hors ligne ou les moyens de paiement adaptés à vos clients.",
  },
];

export default function CityLanding({ city }: { city: LocalCity }) {
  const url = `${siteConfig.url}/${cityFullSlug(city)}`;
  const nearbyCities = city.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((c) => c !== undefined);
  const proofProjects = (
    proofSlugsByCity[city.slug] ?? ["archiform", "afcom", "weman-lms"]
  )
    .slice(0, 2)
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: `${siteConfig.name}, Développeur Web & Mobile à ${city.name}`,
        description: city.metaDescription,
        url,
        image: `${siteConfig.url}/portrait.png`,
        telephone: contactInfo.phoneRaw,
        email: contactInfo.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotonou",
          addressRegion: "Littoral",
          addressCountry: "BJ",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `${city.department}, Bénin`,
          },
        },
        provider: { "@id": `${siteConfig.url}/#person` },
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
            name: "Développeur Web au Bénin",
            item: `${siteConfig.url}/developpeur-web-benin`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: city.faq.map((item) => ({
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
        kicker={`${city.name}, ${city.department}`}
        title={`Développeur Web & Mobile à ${city.name}`}
        description={`Je développe votre plateforme web ou votre application mobile pour votre activité à ${city.name}.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Développeur Web au Bénin", href: "/developpeur-web-benin" },
          { label: city.name },
        ]}
      />

      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Promesse et premier passage à l'action */}
          <section className="gap-8 grid lg:grid-cols-[1.4fr_0.8fr] items-start">
            <div>
              <p className="font-semibold text-primary text-sm">
                Votre projet, depuis la première idée
              </p>
              <h2 className="mt-3 max-w-3xl font-semibold text-foreground text-2xl sm:text-3xl leading-tight">
                Construisons l’outil dont votre activité a besoin
              </h2>
              <p className="mt-4 max-w-2xl text-foreground-muted leading-relaxed">
                Plateforme web ou application mobile : dites-moi ce que vos
                utilisateurs doivent pouvoir faire. Je vous propose les
                fonctionnalités à développer, un budget et un calendrier.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <WhatsAppCta
                  label="Décrire mon projet"
                  message={`Bonjour Néhémie, j'ai un projet à ${city.name}. Voici mon besoin :`}
                />
                <Link href="/projects" className="btn-secondary">
                  Voir mes réalisations
                </Link>
              </div>
            </div>
            <div className="p-6 card">
              <p className="font-semibold text-foreground">
                Dès le premier échange
              </p>
              <ul className="flex flex-col gap-3 mt-4">
                {aboutGuarantees.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problèmes vécus par le visiteur */}
          <section>
            <h2 className="font-semibold text-foreground text-2xl">
              Est-ce que vous vous reconnaissez ?
            </h2>
            <p className="mt-2 text-foreground-muted">
              Avant de parler de technologie, j’aimerais comprendre ce que vous
              souhaitez simplifier pour votre équipe ou vos clients.
            </p>
            <div className="gap-4 grid md:grid-cols-3 mt-6">
              {visitorProblems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="p-5 card"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Je vous accompagne à {city.name}
            </h2>
            {city.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Solutions locales */}
          <section>
            <h2 className="mb-2 font-semibold text-foreground text-xl">
              Ce que je peux mettre en place à {city.name}
            </h2>
            <p className="mb-6 text-foreground-muted text-sm">
              Voici quelques usages que nous pouvons envisager pour votre
              activité à {city.name} :
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              {city.opportunities.map((opportunity) => {
                const Icon = getIcon(opportunity.iconName);
                return (
                  <div
                    key={opportunity.title}
                    className="flex gap-4 p-5 card"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {opportunity.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Preuves */}
          <section>
            <h2 className="font-semibold text-foreground text-2xl">
              Des projets qui répondent à des problèmes concrets
            </h2>
            <p className="mt-2 text-foreground-muted">
              Voici comment j&apos;aborde des besoins proches de ceux rencontrés
              par les entreprises et organisations de {city.name}.
            </p>
            <div className="gap-4 grid md:grid-cols-2 mt-6">
              {proofProjects.map((project) => {
                const Icon = getIcon(project.iconName);
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group p-6 card-interactive"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center bg-primary/20 rounded-xl w-11 h-11 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                          {project.name}
                        </h3>
                        <p className="text-foreground-muted text-xs">
                          {project.sector}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                      {project.impact ?? project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 font-medium text-primary text-sm">
                      Voir le projet <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Présentation */}
          <section className="gap-8 grid md:grid-cols-[160px_1fr] items-center p-7 card">
            <Image
              src="/portrait.png"
              alt="Néhémie Gandonou, développeur web et mobile au Bénin"
              width={160}
              height={160}
              className="rounded-2xl w-32 md:w-40 h-32 md:h-40 object-cover"
            />
            <div>
              <p className="font-medium text-primary text-sm">
                Votre interlocuteur
              </p>
              <h2 className="mt-2 font-semibold text-foreground text-2xl">
                Je suis Néhémie Gandonou
              </h2>
              <p className="mt-3 text-foreground-muted leading-relaxed">
                Développeur web et mobile béninois, je vous accompagne moi-même
                du premier échange à la mise en ligne. J&apos;ai plus de 4 ans
                d&apos;expérience et plus de 15 projets livrés. Mon rôle est de
                comprendre votre activité, puis de construire l&apos;outil dont
                vous avez réellement besoin.
              </p>
              <Link
                href="/about"
                className="inline-flex mt-4 font-medium text-primary text-sm hover:underline"
              >
                En savoir plus sur mon parcours
              </Link>
            </div>
          </section>

          {/* Déroulement et budget */}
          <section>
            <h2 className="font-semibold text-foreground text-2xl">
              Comment le projet se déroule
            </h2>
            <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 mt-6">
              {[
                [
                  "1",
                  "On échange",
                  "Vous m'expliquez votre activité, le problème et le résultat attendu.",
                ],
                [
                  "2",
                  "Je prépare le devis",
                  "Je détaille les fonctions prévues, le prix et le calendrier.",
                ],
                [
                  "3",
                  "Vous suivez",
                  "Je vous montre les avancées. Vous validez chaque étape importante.",
                ],
                [
                  "4",
                  "Je vous accompagne",
                  "Je mets l'outil en ligne, vous forme et reste disponible après la livraison.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="p-5 border border-stroke rounded-2xl"
                >
                  <span className="font-bold text-primary text-sm">
                    Étape {number}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-primary/10 mt-6 p-6 border border-primary/20 rounded-2xl">
              <div>
                <p className="font-semibold text-foreground">
                  Un budget annoncé avant de commencer
                </p>
                <p className="mt-1 text-foreground-muted text-sm">
                  Site vitrine à partir de 170 000 FCFA. Les applications sont
                  chiffrées selon le besoin.
                </p>
              </div>
              <Link href="/tarifs" className="btn-secondary shrink-0">
                Consulter les tarifs
              </Link>
            </div>
          </section>

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* Services */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Services disponibles à {city.name}
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {localServices.map((service) => {
                const Icon = getIcon(service.iconName);
                const card = (
                  <>
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {service.description}
                      </p>
                    </div>
                  </>
                );
                return service.slug ? (
                  <Link
                    key={service.title}
                    href={`/services/${service.slug}`}
                    className="flex gap-4 p-5 card-interactive"
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={service.title}
                    className="flex gap-4 p-5 card"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ancrage local */}
          <section className="p-8 card">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Votre activité à {city.name}
            </h2>
            <div className="gap-8 grid md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-medium text-foreground text-sm uppercase tracking-wider">
                  Repères locaux
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {city.anchors.map((anchor) => (
                    <li key={anchor} className="flex items-start gap-3">
                      <MapPin className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {anchor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-medium text-foreground text-sm uppercase tracking-wider">
                  Pourquoi un développeur béninois
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {localAdvantages.slice(0, 4).map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes, {city.name}
            </h2>
            <FaqList items={city.faq} />
          </section>

          {/* Villes voisines, maillage interne */}
          {nearbyCities.length > 0 && (
            <section>
              <h2 className="mb-6 font-semibold text-foreground text-xl">
                J&apos;interviens aussi près de {city.name}
              </h2>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {nearbyCities.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/${cityFullSlug(nearby)}`}
                    className="group flex items-center gap-3 p-4 card-interactive"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition">
                        Développeur web à {nearby.name}
                      </p>
                      <p className="text-foreground-muted text-xs">
                        {nearby.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-foreground-muted text-sm">
                Retrouvez toutes les villes sur la page{" "}
                <Link
                  href="/developpeur-web-benin"
                  className="text-primary hover:underline"
                >
                  développeur web au Bénin
                </Link>
                .
              </p>
            </section>
          )}

        </Container>
      </SectionWrapper>

      <FinalCta
        title={`Un projet à ${city.name} ?`}
        text="Parlez-moi de votre projet. Je vous réponds sous 24h pour en discuter."
        whatsappLabel="Discuter de mon projet"
        whatsappMessage={`Bonjour Néhémie, j'ai un projet à ${city.name} et j'aimerais en discuter avec vous.`}
        secondary={{ href: "/contact", label: "Demander un devis" }}
      />
    </>
  );
}
