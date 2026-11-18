import { serializeJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/layout/SectionWrapper";
import FinalCta from "../../components/ui/FinalCta";
import SectionHeading from "../../components/ui/SectionHeading";
import TableOfContents from "../../components/ui/TableOfContents";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
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
            <Image
              src="/portrait.webp"
              alt=""
              width={40}
              height={40}
              className="border border-white/15 rounded-full w-10 h-10 object-cover object-top"
            />
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

      <SectionWrapper className="py-14 md:py-20">
        <Container className="gap-12 grid lg:grid-cols-[minmax(0,1fr)_17rem]">
          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="flex flex-col gap-4 lg:top-28 lg:sticky lg:self-start">
            <div className="hidden lg:block">
              <TableOfContents headings={post.headings} />
            </div>
            <div className="p-6 card">
              <div className="flex items-center gap-3">
                <Image
                  src="/portrait.webp"
                  alt=""
                  width={48}
                  height={48}
                  className="border border-white/15 rounded-full w-12 h-12 object-cover object-top shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-foreground-muted text-xs">
                    {siteConfig.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 p-6 card">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/10 rounded-full text-foreground-muted text-xs"
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
        <SectionWrapper className="py-20 md:py-24">
          <Container className="flex flex-col gap-12">
            <div className="flex flex-wrap justify-between items-end gap-6">
              <SectionHeading kicker="À lire ensuite" title="Articles similaires" />
              <Link href="/blog" className="pill-ghost" data-anim="fade">
                <span className="pill-ghost-label">Tous les articles</span>
                <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
              </Link>
            </div>
            <ul className="line-list">
              {relatedPosts.map((related) => (
                <li key={related.slug} className="post-row line-item" data-anim="fade">
                  <span className="post-row-date">{related.readTime}</span>
                  <div className="flex flex-col gap-2 min-w-0">
                    <h3 className="line-item-title">
                      <Link href={`/blog/${related.slug}`} className="line-item-link">
                        {related.title}
                      </Link>
                    </h3>
                    <p className="max-w-2xl text-foreground-muted text-sm line-clamp-2 leading-relaxed">
                      {related.summary}
                    </p>
                  </div>
                  <span className="post-row-meta">
                    <span className="text-primary">{related.category}</span>
                  </span>
                  <span aria-hidden="true" className="line-item-arrow">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </li>
              ))}
            </ul>
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
