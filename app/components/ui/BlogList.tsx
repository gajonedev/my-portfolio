"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

// Latest post on the horizon, category filters, then one line per post.
export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const [active, setActive] = useState<string | null>(null);

  const [featured, ...rest] = posts;
  const list = active
    ? posts.filter((post) => post.category === active)
    : rest;

  return (
    <div className="flex flex-col gap-14">
      {!active && featured && (
        <Link href={`/blog/${featured.slug}`} className="post-feature" data-anim="card">
          <span aria-hidden="true" className="post-feature-visual">
            <span className="post-feature-word">{featured.category}</span>
            <span className="post-feature-horizon" />
          </span>
          <div className="flex flex-col gap-5 p-7 md:p-10">
            <span className="flex flex-wrap items-center gap-3 font-mono text-[0.7rem] text-foreground-subtle uppercase tracking-[0.14em]">
              <span className="text-primary">À la une</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(featured.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{featured.readTime}</span>
            </span>
            <h2 className="font-display font-medium text-foreground text-[clamp(1.6rem,3vw,2.4rem)] text-balance leading-[1.1] tracking-[-0.02em] post-feature-title">
              {featured.title}
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              {featured.summary}
            </p>
            <span className="mt-2 pill-ghost">
              <span className="pill-ghost-label">Lire l’article</span>
              <ArrowUpRight aria-hidden="true" className="w-4 h-4 pill-ghost-arrow" />
            </span>
          </div>
        </Link>
      )}

      <div className="flex flex-col gap-6">
        <div
          role="group"
          aria-label="Filtrer par catégorie"
          className="flex flex-wrap gap-2"
        >
          {[null, ...categories].map((category) => {
            const selected = active === category;
            return (
              <button
                key={category ?? "all"}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category)}
                className="post-filter"
              >
                {category ?? "Tous les articles"}
              </button>
            );
          })}
        </div>

        <ul className="line-list">
          {list.map((post) => (
            <li key={post.slug} className="post-row line-item">
              <span className="post-row-date">{formatDate(post.date)}</span>
              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="line-item-title">
                  <Link href={`/blog/${post.slug}`} className="line-item-link">
                    {post.title}
                  </Link>
                </h3>
                <p className="max-w-2xl text-foreground-muted text-sm leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <span className="post-row-meta">
                <span className="text-primary">{post.category}</span>
                <span>{post.readTime}</span>
              </span>
              <span aria-hidden="true" className="line-item-arrow">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
