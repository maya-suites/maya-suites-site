import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const CTA_MARKER = "<!--cta-->";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  coverIndex: number; // index dans PHOTOS (src/lib/photos.ts)
};

export type Post = PostMeta & { htmlParts: string[] };

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  const htmlParts = content
    .split(CTA_MARKER)
    .map((part) => marked.parse(part.trim(), { async: false }) as string);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category ?? "Conseils",
    coverIndex: data.cover ?? 0,
    readingMinutes: Math.max(2, Math.round(words / 220)),
    htmlParts,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return undefined;
  return parseFile(file);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
