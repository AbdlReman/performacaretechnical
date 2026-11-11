import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { getBlogBySlug } from "@/lib/blogs";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const instant = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await connection();
  const { slug } = await params;
  const blog = await getBlogBySlug(slug, true);
  if (!blog) return { title: "Blog | Performa Care" };
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt || undefined,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || undefined,
      images: blog.coverImage ? [blog.coverImage] : undefined,
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
