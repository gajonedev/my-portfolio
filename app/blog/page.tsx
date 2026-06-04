import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Insights & blog"
        description="Conseils, méthodes et stratégies pour accélérer vos projets digitaux."
      />
      <main className="py-16">
        <Container className="gap-6 grid md:grid-cols-2">
          {posts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "fr-FR",
              { day: "2-digit", month: "short", year: "numeric" },
            );
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
              >
                <article>
                  <div className="flex items-center gap-4 text-foreground-muted text-xs">
                    <span className="bg-primary/10 px-3 py-1 rounded-full font-semibold text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formattedDate}
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
                  <span className="flex items-center gap-2 group-hover:gap-3 mt-4 font-semibold text-primary text-sm transition-all">
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            );
          })}
        </Container>
      </main>
    </>
  );
}
