"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { BlogPost } from "@/lib/blog-shared";

export default function BlogIndexClient() {
  const { t, localizeHref } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as { blogs?: BlogPost[] };
        if (alive && res.ok) setBlogs(data.blogs || []);
      } finally {
        if (alive) setLoading(false);
      }
    }
    void load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <section className="py-16 sm:py-[90px] bg-surface">
          <div className="w-[min(1180px,92%)] mx-auto">
            <div className="reveal max-w-[720px] mb-10">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-blue mb-3">
                {t.blogPage.eyebrow}
              </span>
              <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em] leading-[1.15]">
                {t.blogPage.title}
              </h1>
              <p className="mt-4 text-muted text-[17px]">{t.blogPage.lead}</p>
            </div>

            {loading ? <p className="text-muted">{t.blogPage.loading}</p> : null}

            {!loading && blogs.length === 0 ? (
              <p className="rounded-[18px] border border-line bg-card p-8 text-muted">{t.blogPage.empty}</p>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {blogs.map((blog) => (
                <article key={blog.id} className="reveal bg-card border border-line rounded-[18px] overflow-hidden">
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={800}
                      height={480}
                      className="h-[180px] w-full object-cover"
                    />
                  ) : (
                    <div className="h-[180px] w-full bg-surface" />
                  )}
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-blue mb-2">
                      {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
                    </p>
                    <h2 className="text-xl font-extrabold tracking-[-0.02em] mb-2">{blog.title}</h2>
                    <p className="text-muted text-[15px] mb-4 line-clamp-3">{blog.excerpt || t.blogPage.readMore}</p>
                    <Link href={localizeHref(`/blog/${blog.slug}`)} className="text-blue font-bold hover:underline">
                      {t.blogPage.readMore}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
