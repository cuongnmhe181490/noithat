import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/services",
    "/about",
    "/blog",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `https://noithat-premium.example${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `https://noithat-premium.example/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...blogPosts.map((post) => ({
      url: `https://noithat-premium.example/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
  ];
}
