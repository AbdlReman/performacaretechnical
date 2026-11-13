import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { getBlogBySlug } from "@/lib/blogs";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  languageAlternates,
  toLocale,
} from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const instant = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await connection();
  const { slug, locale: localeRaw } = await params;
  const locale = toLocale(localeRaw);
  const blog = await getBlogBySlug(slug, true);
  if (!blog) {
    return {
      title: `Blog | ${SITE_NAME}`,
      robots: { index: false, follow: false },
    };
  }

  const title = blog.metaTitle || `${blog.title} | ${SITE_NAME}`;
  const description = blog.metaDescription || blog.excerpt || undefined;
  const path = `/blog/${blog.slug}`;
  const canonical = absoluteUrl(path, locale);
  const image = blog.coverImage || absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, alt: blog.title }],
      publishedTime: blog.createdAt || undefined,
      modifiedTime: blog.updatedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  await connection();
  const { slug } = await params;
  const blog = await getBlogBySlug(slug, true);
  if (!blog) notFound();

  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8 text-muted">Loading...</div>}>
      <BlogPostClient blog={blog} />
    </Suspense>
  );
}
