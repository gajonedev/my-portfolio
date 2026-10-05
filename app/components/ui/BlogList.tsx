"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

const PALETTE = ["#ff4d3d", "#3b82f6", "#f59e0b", "#10b981", "#a855f7"];

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

function Meta({ post }: { post: BlogPostMeta }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-foreground-muted text-xs">
      <span className="flex items-center gap-1">
        <Calendar className="w-3 h-3" aria-hidden="true" />
        {formatDate(post.date)}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-3 h-3" aria-hidden="true" />
        {post.readTime}
      </span>
    </div>
  );
}

// Featured latest post + category filter chips + post grid.
export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const colorOf = (category: string) =>
    PALETTE[categories.indexOf(category) % PALETTE.length];
  const [active, setActive] = useState<string | null>(null);

  const [featured, ...rest] = posts;
  const list = active
    ? posts.filter((post) => post.category === active)
    : rest;

  return (
    <div className="flex flex-col gap-10">
      {!active && featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-[0.9fr_1.1fr] overflow-hidden card-interactive"
        >
          <div
            className="relative flex flex-col justify-end p-8 min-h-48 overflow-hidden project-cover-fallback"
            style={{ "--cover": colorOf(featured.category) } as React.CSSProperties}
          >
            <span className="bg-background-soft/80 px-3 py-1 border border-stroke rounded-full w-fit font-semibold text-foreground text-xs">
              À la une
            </span>
            <span
              aria-hidden="true"
              className="mt-4 font-display font-bold text-5xl md:text-6xl tracking-tight"
              style={{ color: colorOf(featured.category) }}
            >
              {featured.category}
            </span>
          </div>
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <Meta post={featured} />
            <h2 className="font-display font-semibold text-foreground group-hover:text-primary text-2xl md:text-3xl text-balance transition-colors">
              {featured.title}
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              {featured.summary}
            </p>
            <span className="flex items-center gap-2 mt-auto pt-2 font-semibold text-primary text-sm">
              Lire l’article
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      )}

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
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-stroke bg-card text-foreground-muted hover:border-primary hover:text-foreground"
              }`}
            >
              {category ?? "Tous les articles"}
            </button>
          );
        })}
      </div>

      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        {list.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col gap-4 p-6 overflow-hidden card-interactive"
          >
            <span
              aria-hidden="true"
              className="top-0 absolute inset-x-0 h-1"
              style={{ background: colorOf(post.category) }}
            />
            <span className="flex items-center gap-2 font-semibold text-foreground-muted text-xs uppercase tracking-wider">
              <span
                aria-hidden="true"
                className="rounded-full w-1.5 h-1.5"
                style={{ background: colorOf(post.category) }}
              />
              {post.category}
            </span>
            <h3 className="font-semibold text-foreground group-hover:text-primary text-lg leading-snug transition-colors">
              {post.title}
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              {post.summary}
            </p>
            <div className="mt-auto pt-2">
              <Meta post={post} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
