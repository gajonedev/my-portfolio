import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { getIcon, Award, Users, Heart, Rocket } from "@/lib/icons";
import { skills, values, aboutStats, siteConfig } from "@/data";

const url = `${siteConfig.url}/about`;

export const metadata: Metadata = {
  title: "À propos | Développeur Web & Mobile à Cotonou",
  description:
    "Néhémie Gandonou, développeur web et mobile freelance à Cotonou. Un seul interlocuteur, un produit fiable livré en 2 à 8 semaines. Faisons connaissance.",
  alternates: { canonical: url },
  openGraph: {
    title: "À propos de Néhémie Gandonou, développeur web et mobile",
    description:
      "Développeur freelance à Cotonou : un seul interlocuteur, un produit fiable livré en 2 à 8 semaines.",
    url,
    type: "profile",
    locale: "fr_BJ",
  },
};

export default async function AboutPage() {
  return (
    <>
      <PageHeader
        title="À propos"
        description="Développeur web & mobile passionné, basé à Cotonou, Bénin."
      />
      <main className="py-16">
        <Container className="gap-16 grid">
          {/* Introduction */}
          <section className="lg:items-center gap-8 grid lg:grid-cols-2">
            <div className="bg-card p-8 border border-stroke rounded-3xl">
              <Image
                src="/portrait.png"
                alt="Portrait de Néhémie Gandonou"
                width={120}
                height={146}
                className="rounded-2xl object-cover"
              />
              <h2 className="mt-6 font-semibold text-foreground text-2xl">
                Néhémie Gandonou
              </h2>
              <p className="mt-2 text-primary">Développeur Web & Mobile</p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Je conçois des applications mobiles, des sites et des logiciels
                web à partir d&apos;un besoin concret. J&apos;accorde une
                attention particulière à la simplicité d&apos;usage, à la
                fiabilité et aux conditions réelles dans lesquelles le produit
                sera utilisé.
              </p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Je prends en charge l&apos;interface, le serveur et la mise en
                ligne. Vous gardez ainsi un interlocuteur principal, tout en
                sachant précisément ce qui est inclus et quels services tiers
                interviennent dans le projet.
              </p>
            </div>
            <div className="gap-4 grid">
              {values.map((value) => {
                const Icon = getIcon(value.iconName);
                return (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 bg-card/50 p-4 border border-stroke rounded-2xl"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-10 h-10 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-semibold text-foreground text-2xl">
              Compétences techniques
            </h2>
            <p className="mt-2 text-foreground-muted">
              Technologies et outils que j&apos;utilise au quotidien.
            </p>
            <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4 mt-8">
              {skills.map((category) => (
                <div
                  key={category.name}
                  className="bg-card p-6 border border-stroke rounded-2xl"
                >
                  <h3 className="font-semibold text-primary">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <div className="gap-8 grid md:grid-cols-4 text-center">
              {aboutStats.map((stat, index) => {
                const icons = [Award, Users, Heart, Rocket];
                const Icon = icons[index];
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="font-bold text-foreground text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-foreground-muted text-sm">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              On travaille ensemble ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Décrivez-moi votre projet, je reviens vers vous avec un plan
              d&apos;action et un devis sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta label="Discuter de mon projet" />
              <Link href="/projects" className="btn-secondary">
                Voir mes réalisations
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
