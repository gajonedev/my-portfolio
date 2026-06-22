import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "../../components/Container";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  ChevronRight,
} from "lucide-react";
import { siteConfig, socialLinks } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero / Header */}
      <div className="bg-card/50 py-10 border-stroke border-b">
        <Container className="flex flex-col gap-6">
          <Link
            href="/blog"
            className="flex items-center gap-2 w-fit text-foreground-muted hover:text-primary text-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-primary/10 px-3 py-1 rounded-full font-semibold text-primary text-xs">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-foreground-muted text-xs">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1 text-foreground-muted text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} de lecture
            </div>
          </div>

          <h1 className="max-w-4xl font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="max-w-3xl text-foreground-muted text-base sm:text-lg leading-relaxed">
            {post.summary}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex justify-center items-center bg-primary rounded-full w-10 h-10 font-bold text-primary-foreground text-sm">
              NG
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {post.author}
              </p>
              <p className="text-foreground-muted text-xs">
                {siteConfig.title}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <main className="py-12 sm:py-16">
        <Container className="gap-12 grid lg:grid-cols-[1fr_280px]">
          {/* Article body */}
          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-8">
            {/* Author card */}
            <div className="top-24 sticky bg-card p-6 border border-stroke rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-primary rounded-full w-12 h-12 font-bold text-primary-foreground text-sm">
                  NG
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-foreground-muted text-xs">
                    {siteConfig.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex gap-2 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-background border border-stroke hover:border-primary rounded-full w-8 h-8 text-foreground-muted hover:text-primary text-xs transition"
                    aria-label={social.name}
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="bg-card p-6 border border-stroke rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">
                    Tags
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="bg-card p-6 border border-stroke rounded-2xl">
              <span className="font-semibold text-foreground text-sm">
                Partager
              </span>
              <div className="flex flex-col gap-2 mt-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-background px-4 py-2 border border-stroke hover:border-primary rounded-xl text-foreground-muted hover:text-foreground text-sm transition"
                >
                  Twitter / X
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-background px-4 py-2 border border-stroke hover:border-primary rounded-xl text-foreground-muted hover:text-foreground text-sm transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </main>

      {/* Tags mobile */}
      <div className="lg:hidden pb-8">
        <Container>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Tag className="w-4 h-4 text-primary" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-background px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-stroke border-t">
          <Container className="flex flex-col gap-8">
            <h2 className="font-semibold text-foreground text-2xl">
              Articles similaires
            </h2>
            <div className="gap-6 grid md:grid-cols-2">
              {relatedPosts.map((related) => {
                const relatedDate = new Date(related.date).toLocaleDateString(
                  "fr-FR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                );
                return (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-card p-6 border border-stroke hover:border-primary/50 rounded-3xl transition"
                  >
                    <div className="flex items-center gap-3 text-foreground-muted text-xs">
                      <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">
                        {related.category}
                      </span>
                      <span>{relatedDate}</span>
                      <span>·</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary text-lg transition">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-foreground-muted text-sm line-clamp-2">
                      {related.summary}
                    </p>
                    <span className="flex items-center gap-1 mt-4 font-semibold text-primary text-sm">
                      Lire l&apos;article
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 border-stroke border-t">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-semibold text-foreground text-2xl">
            Vous avez un projet en tête ?
          </h2>
          <p className="max-w-lg text-foreground-muted text-sm">
            Discutons de votre prochain site web, SaaS ou application mobile. Je
            vous accompagne de la conception au déploiement.
          </p>
          <Link href="/contact" className="btn-primary">
            Démarrer un projet
          </Link>
        </Container>
      </section>
    </>
  );
}
