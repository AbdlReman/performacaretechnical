"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { BlogPost } from "@/lib/blog-shared";

export default function BlogPostClient({ blog }: { blog: BlogPost }) {
  const { t, localizeHref } = useLanguage();

  return (
    <>
      <Reveal />
      <SiteHeader />
      <main>
        <section className="py-16 sm:py-[90px]">
          <div className="w-[min(860px,92%)] mx-auto">
            <Link href={localizeHref("/blog")} className="text-blue font-bold hover:underline">
              ← {t.blogPage.back}
            </Link>

            <article className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-blue mb-3">
                {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
              </p>
              <h1 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                {blog.title}
              </h1>
              {blog.excerpt ? <p className="text-muted text-lg mb-8">{blog.excerpt}</p> : null}
              {blog.coverImage ? (
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={1200}
                  height={700}
                  className="w-full h-auto rounded-[18px] mb-10 object-cover max-h-[460px]"
                  priority
                />
              ) : null}
              <div
                className="blog-content text-[17px] leading-8 text-ink space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
