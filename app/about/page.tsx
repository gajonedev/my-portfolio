import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { Code, Palette, Rocket, Users, Award, Heart } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "GSAP"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
  },
  { name: "Mobile", items: ["React Native", "Expo", "PWA"] },
  { name: "CMS", items: ["WordPress", "WooCommerce", "Strapi", "Sanity"] },
];

const values = [
  {
    icon: Code,
    title: "Code propre",
    description:
      "Architecture scalable, composants réutilisables et bonnes pratiques.",
  },
  {
    icon: Palette,
    title: "Design system",
    description: "Cohérence visuelle et expérience utilisateur optimale.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Sites rapides, optimisés SEO et Core Web Vitals.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Communication transparente et suivi régulier du projet.",
  },
];

export default function AboutPage() {
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
              <div className="flex justify-center items-center bg-primary rounded-2xl w-20 h-20 font-bold text-white text-2xl">
                NG
              </div>
              <h2 className="mt-6 font-semibold text-foreground text-2xl">
                Néhémie Gandonou
              </h2>
              <p className="mt-2 text-primary">Développeur Web & Mobile</p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Passionné par le développement web depuis plus de 5 ans, je crée
                des expériences digitales modernes et performantes. Mon approche
                combine design system rigoureux, code propre et optimisation
                pour la conversion.
              </p>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                Je travaille principalement avec des startups et PME qui
                souhaitent lancer ou améliorer leur présence digitale : sites
                vitrines, e-commerce, SaaS, applications mobiles et
                automatisations IA.
              </p>
            </div>
            <div className="gap-4 grid">
              {values.map((value) => {
                const Icon = value.icon;
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
              {[
                { icon: Award, value: "+48", label: "Projets livrés" },
                { icon: Users, value: "12", label: "Clients internationaux" },
                { icon: Heart, value: "4.9/5", label: "Satisfaction client" },
                { icon: Rocket, value: "5+", label: "Années d'expérience" },
              ].map((stat) => {
                const Icon = stat.icon;
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
        </Container>
      </main>
    </>
  );
}
