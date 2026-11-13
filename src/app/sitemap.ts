import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { listBlogs } from "@/lib/blogs";
import { PUBLIC_PATHS, absoluteUrl, languageAlternates } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = PUBLIC_PATHS.flatMap((path) => {
    const priority =
      path === "/" ? 1 : path === "/services" || path === "/contact" ? 0.9 : path === "/blog" ? 0.7 : 0.8;
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "/blog" ? "weekly" : path === "/" ? "weekly" : "monthly";

    const languages = languageAlternates(path);

    return [
      {
        url: absoluteUrl(path, "en"),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      },
      {
        url: absoluteUrl(path, "ar"),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      },
    ];
  });

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await listBlogs({ publishedOnly: true });
    blogEntries = blogs.flatMap((blog) => {
      const path = `/blog/${blog.slug}`;
      const languages = languageAlternates(path);
      const lastModified = blog.updatedAt || blog.createdAt || now;
      return [
        {
          url: absoluteUrl(path, "en"),
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.6,
          alternates: { languages },
        },
        {
          url: absoluteUrl(path, "ar"),
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.6,
          alternates: { languages },
        },
      ];
    });
  } catch {
    // Sitemap should still ship if MongoDB is unavailable at build/request time.
    blogEntries = [];
  }

  return [...staticEntries, ...blogEntries];
}
