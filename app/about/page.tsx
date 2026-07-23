import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { getIcon, Award, Users, Heart, Rocket } from "@/lib/icons";
import { skills, values, aboutStats } from "@/data";

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
              <div className="flex justify-center items-center bg-primary rounded-2xl w-20 h-20 font-bold text-primary-foreground text-2xl">
                NG
              </div>
              <h2 className="mt-6 font-semibold text-foreground text-2xl">
                Néhémie Gandonou
              </h2>
              <p className="mt-2 text-primary">Développeur Web & Mobile</p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Je conçois des applications mobiles et des logiciels web
                complets : des produits propres, fluides et pensés pour résoudre
                un vrai problème. Mon obsession, c&apos;est la qualité et la
                performance.
              </p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Je gère tout de A à Z, l&apos;interface comme les coulisses, 
                donc vous n&apos;avez qu&apos;un seul interlocuteur, et un
                produit conçu pour grandir avec votre activité sans être
                refait dans six mois.
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
              clair et un devis sous 24h.
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
