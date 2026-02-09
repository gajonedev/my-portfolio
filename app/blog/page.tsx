import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Optimiser un site vitrine pour le SEO et la conversion",
    date: "09 fév 2026",
    readTime: "5 min",
    summary:
      "Les étapes clés pour obtenir un score Core Web Vitals élevé et un parcours utilisateur fluide.",
    category: "Performance",
  },
  {
    title: "Créer un design system efficace pour un SaaS",
    date: "02 fév 2026",
    readTime: "8 min",
    summary:
      "Méthode pour construire des composants réutilisables et assurer une cohérence visuelle à grande échelle.",
    category: "Design",
  },
  {
    title: "Automatiser votre acquisition avec l'IA",
    date: "28 jan 2026",
    readTime: "6 min",
    summary:
      "Les meilleures intégrations IA pour gagner du temps et convertir plus rapidement vos visiteurs en clients.",
    category: "IA",
  },
  {
    title: "Pourquoi Next.js est le meilleur choix pour votre site en 2026",
    date: "20 jan 2026",
    readTime: "7 min",
    summary:
      "Analyse des avantages de Next.js pour le SEO, la performance et l'expérience développeur.",
    category: "Tech",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Insights & blog"
        description="Conseils, méthodes et stratégies pour accélérer vos projets digitaux."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
            >
              <div className="flex items-center gap-4 text-foreground-muted text-xs">
                <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary text-lg transition">
                {post.title}
              </h3>
              <p className="mt-3 text-foreground-muted text-sm">
                {post.summary}
              </p>
              <button
                type="button"
                className="flex items-center gap-2 hover:gap-3 mt-4 font-semibold text-primary text-sm transition"
              >
                Lire la suite
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </Container>
      </main>
    </>
  );
}
