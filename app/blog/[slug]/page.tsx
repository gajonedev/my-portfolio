import { serializeJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/layout/SectionWrapper";
import FinalCta from "../../components/ui/FinalCta";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data";

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
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      modifiedTime: post.updated || post.date,
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
  const relatedPosts = allPosts
    .filter((candidate) => candidate.slug !== slug)
    .map((candidate) => ({
      ...candidate,
      relevance:
        (candidate.category === post.category ? 3 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.relevance - a.relevance ||
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 2);

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
    dateModified: post.updated || post.date,
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <PageHeader
        kicker={post.category}
        title={post.title}
        description={post.summary}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-foreground-muted text-sm">
          <span className="flex items-center gap-3">
            <span className="flex justify-center items-center bg-primary-fill rounded-full w-9 h-9 font-display font-bold text-primary-foreground text-xs">
              {siteConfig.shortName}
            </span>
            <span className="font-medium text-foreground">{post.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {post.readTime} de lecture
          </span>
        </div>
      </PageHeader>

      <SectionWrapper variant="light" className="py-12 md:py-20">
        <Container className="gap-12 grid lg:grid-cols-[minmax(0,1fr)_17rem]">
          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="flex flex-col gap-4 lg:top-28 lg:sticky lg:self-start">
            <div className="p-6 card">
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-foreground-muted text-xs">
                {siteConfig.title}
              </p>
              <p className="mt-3 text-foreground-muted text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 p-6 card">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-background-muted px-3 py-1 border border-stroke rounded-full text-foreground-muted text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2 p-4 text-sm card">
              <span className="text-foreground-muted">Partager :</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                X
              </a>
              <span className="text-foreground-subtle">·</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </aside>
        </Container>
      </SectionWrapper>

      {relatedPosts.length > 0 && (
        <SectionWrapper variant="dark" className="py-16 md:py-20">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-end gap-4">
              <h2 className="font-display font-semibold text-foreground text-2xl md:text-3xl">
                Articles similaires
              </h2>
              <Link
                href="/blog"
                className="font-medium text-primary text-sm hover:underline"
              >
                Tous les articles →
              </Link>
            </div>
            <div className="gap-6 grid md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col gap-3 p-6 card-interactive"
                >
                  <span className="font-semibold text-foreground-muted text-xs uppercase tracking-wider">
                    {related.category} · {related.readTime}
                  </span>
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-lg transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-foreground-muted text-sm line-clamp-2">
                    {related.summary}
                  </p>
                  <span className="flex items-center gap-1 mt-auto pt-2 font-semibold text-primary text-sm">
                    Lire l’article
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      <FinalCta
        variant={relatedPosts.length > 0 ? "light" : "dark"}
        kicker="Votre projet"
        title="Vous avez un projet en tête ?"
        text="Dites-moi ce que vous aimeriez construire et les questions que vous vous posez. Nous regarderons ensemble par où commencer."
      />
    </>
  );
}
