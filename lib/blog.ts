import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  readTime: string;
  summary: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  /** h2 of the article, with the id added to the HTML (table of contents). */
  headings: { id: string; text: string }[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  readTime: string;
  summary: string;
  category: string;
  author: string;
  tags: string[];
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\u00a0",
};

const decode = (text: string) =>
  text.replace(/&(#x?[0-9a-f]+|\w+);/gi, (entity, code: string) => {
    if (code[0] !== "#") return ENTITIES[code] ?? entity;
    const value = code[1].toLowerCase() === "x"
      ? parseInt(code.slice(2), 16)
      : parseInt(code.slice(1), 10);
    return Number.isNaN(value) ? entity : String.fromCodePoint(value);
  });

const slugify = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

// Gives each <h2> a stable id and returns the list for the table of contents.
function withHeadingIds(htmlContent: string) {
  const headings: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const content = htmlContent.replace(
    /<h2>([\s\S]*?)<\/h2>/g,
    (_match, inner: string) => {
      const text = decode(inner.replace(/<[^>]+>/g, "")).trim();
      let id = slugify(text) || "section";
      for (let n = 2; used.has(id); n++) id = `${slugify(text)}-${n}`;
      used.add(id);
      headings.push({ id, text });
      return `<h2 id="${id}">${inner}</h2>`;
    },
  );
  return { content, headings };
}

export function getAllPosts(): BlogPostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        updated: data.updated,
        readTime: data.readTime,
        summary: data.summary,
        category: data.category,
        author: data.author,
        tags: data.tags || [],
      } as BlogPostMeta;
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content);
    const { content: contentHtml, headings } = withHeadingIds(
      processedContent.toString(),
    );

    return {
      slug,
      title: data.title,
      date: data.date,
      updated: data.updated,
      readTime: data.readTime,
      summary: data.summary,
      category: data.category,
      author: data.author,
      tags: data.tags || [],
      content: contentHtml,
      headings,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
