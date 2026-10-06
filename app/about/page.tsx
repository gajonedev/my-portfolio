import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Testimonials from "../components/ui/Testimonials";
import FinalCta from "../components/ui/FinalCta";
import { skills, values, aboutStats, projects, siteConfig } from "@/data";

const url = `${siteConfig.url}/about`;

export const metadata: Metadata = {
  title: "À propos | Développeur Web & Mobile à Cotonou",
  description:
    "Néhémie Gandonou, développeur web et mobile freelance à Cotonou. Plateformes web et applications mobiles, du cadrage au lancement. Faisons connaissance.",
  alternates: { canonical: url },
  openGraph: {
    title: "À propos de Néhémie Gandonou, développeur web et mobile",
    description:
      "Développeur freelance à Cotonou : plateformes web, logiciels métier et applications mobiles.",
    url,
    type: "profile",
    locale: "fr_BJ",
  },
};

const timeline = Object.entries(
  projects.reduce<Record<string, typeof projects>>((years, project) => {
    const year = project.year || "Autres";
    (years[year] ||= []).push(project);
    return years;
  }, {}),
).sort(([a], [b]) => a.localeCompare(b));

export default async function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="À propos"
        title="Un développeur, un interlocuteur, de l’idée à la mise en ligne"
        description="Je suis Néhémie Gandonou, développeur web et mobile à Cotonou. Voici qui je suis et comment je travaille."
      />

      {/* Portrait + histoire */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="items-center gap-12 grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm beam-frame">
            <div className="bg-background-soft p-3 border border-stroke rounded-[2rem]">
              <Image
                src="/portrait.webp"
                alt="Portrait de Néhémie Gandonou"
                width={480}
                height={600}
                sizes="(max-width: 1024px) 80vw, 380px"
                className="rounded-[1.5rem] w-full h-auto aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              kicker="Qui je suis"
              title="Je pars de ce que votre application doit permettre de faire"
            />
            <p className="text-foreground-muted leading-relaxed">
              Ce qui m’intéresse dans un projet, c’est ce que votre application
              va permettre de faire : gérer des inscriptions, suivre une
              activité, recevoir des commandes ou rendre un service plus
              accessible. Je pars de ces usages pour concevoir les écrans et
              développer les fonctionnalités.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Je développe aussi bien les écrans que le serveur qui les fait
              fonctionner. Vous échangez directement avec moi, y compris pour
              comprendre un choix technique ou préparer la mise en ligne. Si
              votre besoin dépasse ce que je peux prendre en charge, je vous le
              dis.
            </p>
            <dl className="gap-px grid grid-cols-2 sm:grid-cols-4 bg-stroke mt-2 border border-stroke rounded-2xl overflow-hidden">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 bg-card p-4">
                  <dt className="order-2 text-foreground-muted text-xs">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display font-bold text-foreground text-2xl tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </SectionWrapper>

      {/* Façon de travailler */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-10 grid">
          <SectionHeading
            kicker="Ma façon de travailler"
            title="Quatre principes que j’applique à chaque projet"
          />
          <div className="gap-4 grid md:grid-cols-2">
            {values.map((value, index) => (
              <article key={value.title} className="flex gap-5 p-6 card">
                <span className="font-display font-semibold text-primary text-sm tabular-nums">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Frise des projets */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-10 grid lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="Parcours"
            title="Ce que j’ai construit, année après année"
            subtitle="Des plateformes web et des applications mobiles, pour des clients ou pour explorer une idée."
          />
          <ol className="relative flex flex-col gap-10 pl-8 border-stroke border-l">
            {timeline.map(([year, items]) => (
              <li key={year} className="relative">
                <span
                  aria-hidden="true"
                  className="top-1 -left-[2.4rem] absolute bg-primary shadow-[0_0_0_4px_var(--primary-glow)] rounded-full w-3 h-3"
                />
                <p className="font-display font-bold text-foreground text-2xl">
                  {year}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {items.map((project) => (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm card-interactive"
                      >
                        <span className="font-medium text-foreground">
                          {project.name}
                        </span>
                        <span className="text-foreground-muted text-xs">
                          {project.sector.split("•")[0].trim()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      {/* Outils */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="gap-10 grid lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="Outils"
            title="Des technologies répandues, faciles à reprendre"
            subtitle="Votre application reste maintenable, avec moi ou avec un autre développeur."
          />
          <dl className="flex flex-col divide-y divide-stroke card">
            {skills.map((category) => (
              <div
                key={category.name}
                className="gap-3 grid sm:grid-cols-[9rem_1fr] p-5"
              >
                <dt className="font-semibold text-foreground text-sm">
                  {category.name}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="bg-background-muted px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </SectionWrapper>

      {/* Témoignages */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-8 grid">
          <SectionHeading
            kicker="Ils en parlent"
            title="Ce que disent ceux qui ont travaillé avec moi"
          />
          <Testimonials />
        </Container>
      </SectionWrapper>

      <FinalCta
        title="On travaille ensemble ?"
        text="Racontez-moi votre projet. Voyons comment je peux vous accompagner."
        secondary={{ href: "/projects", label: "Voir mes réalisations" }}
      />
    </>
  );
}
