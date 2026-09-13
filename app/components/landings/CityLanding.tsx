import Link from "next/link";
import Container from "../Container";
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
    title: "Vos clients ne vous trouvent pas",
    description:
      "On vous recommande, mais votre activité reste difficile à vérifier sur Google. Des demandes partent chez des concurrents plus visibles.",
  },
  {
    icon: Clock,
    title: "Les tâches manuelles vous ralentissent",
    description:
      "Commandes, inscriptions, stocks ou relances passent encore par le cahier et WhatsApp. Vous perdez du temps et des informations.",
  },
  {
    icon: Smartphone,
    title: "Votre outil n'est pas adapté au terrain",
    description:
      "Il est compliqué sur téléphone, dépend trop du réseau ou n'accepte pas les moyens de paiement utilisés par vos clients.",
  },
];

export default function CityLanding({ city }: { city: LocalCity }) {
  const url = `${siteConfig.url}/${cityFullSlug(city)}`;
  const nearbyCities = city.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((c) => c !== undefined);
  const proofProjects = (proofSlugsByCity[city.slug] ?? [
    "archiform",
    "afcom",
    "weman-lms",
  ])
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={`Développeur Web & Mobile à ${city.name}`}
        description={`Je crée des sites et des applications qui vous aident à vendre, gagner du temps et mieux gérer votre activité à ${city.name}.`}
      />

      <main className="py-16">
        <Container className="gap-16 grid">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="-mb-8">
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
                  href="/developpeur-web-benin"
                  className="hover:text-foreground transition"
                >
                  Développeur Web au Bénin
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li aria-current="page" className="text-foreground">
                {city.name}
              </li>
            </ol>
          </nav>

          {/* Promesse et premier passage à l'action */}
          <section className="gap-8 grid lg:grid-cols-[1.4fr_0.8fr] items-start">
            <div>
              <p className="font-semibold text-primary text-sm">
                Un projet utile, pensé pour vos clients et votre quotidien
              </p>
              <h2 className="mt-3 max-w-3xl font-semibold text-foreground text-2xl sm:text-3xl leading-tight">
                Passez d&apos;une activité gérée à la main à un outil qui travaille
                vraiment pour vous
              </h2>
              <p className="mt-4 max-w-2xl text-foreground-muted leading-relaxed">
                Site professionnel, boutique en ligne ou logiciel métier : je
                pars de votre problème, de vos utilisateurs et de votre budget.
                Vous savez ce qui sera livré, quand, et combien cela coûtera.
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
            <div className="bg-card p-6 border border-stroke rounded-2xl">
              <p className="font-semibold text-foreground">Dès le premier échange</p>
              <ul className="flex flex-col gap-3 mt-4">
                {aboutGuarantees.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 shrink-0" />
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
              Le bon projet commence par un problème précis, pas par une liste
              de technologies.
            </p>
            <div className="gap-4 grid md:grid-cols-3 mt-6">
              {visitorProblems.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-card p-5 border border-stroke rounded-2xl">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Introduction */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Votre partenaire digital à {city.name}
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
              Des solutions pensées pour les réalités économiques de {city.name}{" "}
              et du département {city.department === "Littoral" ? "du" : "de"}{" "}
              {city.department} :
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              {city.opportunities.map((opportunity) => {
                const Icon = getIcon(opportunity.iconName);
                return (
                  <div
                    key={opportunity.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
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
              Voici comment j&apos;aborde des besoins proches de ceux rencontrés par
              les entreprises et organisations de {city.name}.
            </p>
            <div className="gap-4 grid md:grid-cols-2 mt-6">
              {proofProjects.map((project) => {
                const Icon = getIcon(project.iconName);
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group bg-card p-6 border border-stroke hover:border-primary/40 rounded-2xl transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center bg-primary/20 rounded-xl w-11 h-11 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                          {project.name}
                        </h3>
                        <p className="text-foreground-muted text-xs">{project.sector}</p>
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

          {/* Présentation */}
          <section className="gap-8 grid md:grid-cols-[160px_1fr] items-center bg-card p-7 border border-stroke rounded-3xl">
            <Image
              src="/portrait.png"
              alt="Néhémie Gandonou, développeur web et mobile au Bénin"
              width={160}
              height={160}
              className="rounded-2xl w-32 md:w-40 h-32 md:h-40 object-cover"
            />
            <div>
              <p className="font-medium text-primary text-sm">Votre interlocuteur</p>
              <h2 className="mt-2 font-semibold text-foreground text-2xl">
                Je suis Néhémie Gandonou
              </h2>
              <p className="mt-3 text-foreground-muted leading-relaxed">
                Développeur web et mobile béninois, je vous accompagne moi-même
                du premier échange à la mise en ligne. J&apos;ai plus de 4 ans
                d&apos;expérience et plus de 15 projets livrés. Mon rôle est de
                comprendre votre activité, puis de construire l&apos;outil dont vous
                avez réellement besoin.
              </p>
              <Link href="/about" className="inline-flex mt-4 font-medium text-primary text-sm hover:underline">
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
                ["1", "On échange", "Vous m'expliquez votre activité, le problème et le résultat attendu."],
                ["2", "Je chiffre", "Vous recevez un périmètre, un prix et un calendrier clairs."],
                ["3", "Vous suivez", "Je vous montre les avancées. Vous validez chaque étape importante."],
                ["4", "Je vous accompagne", "Je mets l'outil en ligne, vous forme et reste disponible après la livraison."],
              ].map(([number, title, description]) => (
                <div key={number} className="p-5 border border-stroke rounded-2xl">
                  <span className="font-bold text-primary text-sm">Étape {number}</span>
                  <h3 className="mt-2 font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-primary/10 mt-6 p-6 border border-primary/20 rounded-2xl">
              <div>
                <p className="font-semibold text-foreground">Un budget annoncé avant de commencer</p>
                <p className="mt-1 text-foreground-muted text-sm">
                  Site vitrine à partir de 170 000 FCFA. Les applications sont chiffrées selon le besoin.
                </p>
              </div>
              <Link href="/tarifs" className="btn-secondary shrink-0">
                Consulter les tarifs
              </Link>
            </div>
          </section>

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
                    className="flex gap-4 bg-card hover:bg-card/80 p-5 border border-stroke hover:border-primary/40 rounded-2xl transition"
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={service.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ancrage local */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              {city.name}, un territoire que je connais
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
                      <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-foreground-muted text-sm">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes, {city.name}
            </h2>
            <div className="flex flex-col gap-4">
              {city.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-card open:pb-5 border border-stroke rounded-2xl"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 font-medium text-foreground cursor-pointer list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-foreground-muted group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <p className="px-5 text-foreground-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
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
                    className="group flex items-center gap-3 bg-card/50 hover:bg-card p-4 border border-stroke hover:border-primary/40 rounded-xl transition"
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

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Un projet à {city.name} ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Parlons-en directement. Prise de brief et devis chiffré sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta
                label="Discuter de mon projet"
                message={`Bonjour Néhémie, j'ai un projet à ${city.name} et j'aimerais en discuter avec vous.`}
              />
              <Link href="/contact" className="btn-secondary">
                Demander un devis
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
