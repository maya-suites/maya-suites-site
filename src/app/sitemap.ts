import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/tarifs`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/appartements`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/a-propos`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
