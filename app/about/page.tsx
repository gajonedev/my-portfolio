import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import QuoteStage from "../components/home/QuoteStage";
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
      <SectionWrapper className="py-20 md:py-28">
        <Container className="items-center gap-14 lg:gap-20 grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto lg:mx-0 w-full max-w-sm about-portrait" data-anim="card">
            <Image
              src="/portrait.webp"
              alt="Portrait de Néhémie Gandonou"
              width={480}
              height={600}
              sizes="(max-width: 1024px) 80vw, 380px"
              priority
              className="w-full h-auto aspect-[4/5] object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              index="01"
              kicker="Qui je suis"
              title="Je développe les outils d’entreprises, de formateurs et d’associations"
            />
            <p data-anim="fade" className="text-foreground-muted md:text-lg leading-relaxed">
              Je travaille sur place ou à distance. Pour AgroConnect, j’ai
              développé une marketplace de produits frais, avec son application
              mobile et son espace de gestion. Pour des formateurs, j’ai créé
              des plateformes de cours et d’inscription payées par Mobile Money.
              Pour le Gospel Activists International Network, j’ai réalisé un
              site en français et en anglais.
            </p>
            <p data-anim="fade" className="text-foreground-muted md:text-lg leading-relaxed">
              Ce qui m’intéresse dans un projet, c’est ce que votre application
              va permettre de faire : gérer des inscriptions, suivre une
              activité, recevoir des commandes ou rendre un service plus
              accessible. Je pars de ces usages pour concevoir les écrans et
              développer les fonctionnalités.
            </p>
            <p data-anim="fade" className="text-foreground-muted md:text-lg leading-relaxed">
              Je développe les écrans comme le serveur qui les fait
              fonctionner, et vous échangez directement avec moi. Si votre
              besoin dépasse ce que je peux prendre en charge, je vous le dis.
            </p>
            <dl className="about-stats" data-anim="fade">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <dt>{stat.label}</dt>
                  <dd data-count={/\d/.test(stat.value) || undefined}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </SectionWrapper>

      {/* Façon de travailler */}
      <SectionWrapper className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            index="02"
            kicker="Ma façon de travailler"
            title="Quatre principes que j’applique à chaque projet"
            size="lg"
          />
          <ol className="about-values">
            {values.map((value, index) => (
              <li key={value.title} className="about-value" data-anim="fade">
                <span aria-hidden="true" className="about-value-num">
                  0{index + 1}
                </span>
                <h3 className="font-display font-medium text-foreground text-xl md:text-2xl tracking-[-0.01em]">
                  {value.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {value.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      {/* Frise des projets */}
      <SectionWrapper className="py-20 md:py-28">
        <Container className="items-start gap-14 grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:top-28 lg:sticky">
            <SectionHeading
              index="03"
              kicker="Parcours"
              title="Ce que j’ai construit, année après année"
              subtitle="Des plateformes web et des applications mobiles, pour des clients ou pour explorer une idée."
            />
          </div>
          <ol className="vsteps is-timeline" data-process>
            {timeline.map(([year, items]) => (
              <li key={year} className="vstep" data-step>
                <span aria-hidden="true" className="vstep-dot" />
                <p className="vstep-year">{year}</p>
                <ul className="flex flex-wrap gap-2">
                  {items.map((project) => (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full! text-sm card-interactive"
                      >
                        <span className="font-medium text-foreground">
                          {project.name}
                        </span>
                        <span className="text-foreground-subtle text-xs">
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
      <SectionWrapper className="py-20 md:py-28">
        <Container className="items-start gap-12 grid lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            index="04"
            kicker="Outils"
            title="Des technologies répandues, faciles à reprendre"
            subtitle="Votre application reste maintenable, avec moi ou avec un autre développeur."
          />
          <dl className="flex flex-col divide-y divide-white/[0.07] card" data-anim="card">
            {skills.map((category) => (
              <div
                key={category.name}
                className="gap-3 grid sm:grid-cols-[9rem_1fr] p-5 md:p-6"
              >
                <dt className="font-mono text-[0.7rem] text-foreground-subtle uppercase tracking-[0.14em]">
                  {category.name}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 border border-white/10 rounded-full text-foreground-muted text-xs"
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
      <SectionWrapper className="py-20 md:py-28">
        <Container className="gap-14 md:gap-20 grid">
          <SectionHeading
            index="05"
            kicker="Ils en parlent"
            title="Ce que disent ceux qui ont travaillé avec moi"
            size="lg"
          />
          <QuoteStage />
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
