"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { slugify, type BlogPost, type BlogStatus } from "@/lib/blog-shared";

const TinyMceEditor = dynamic(() => import("@/components/admin/TinyMceEditor"), {
  ssr: false,
  loading: () => <div className="rounded-xl border border-[#2a3b4f] bg-[#0b1520] p-6 text-sm text-[#9bb0c3]">Loading editor...</div>,
});

type Props = {
  mode: "create" | "edit";
  initial?: BlogPost;
};

export default function BlogForm({ mode, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [content, setContent] = useState(initial?.content || "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage || "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription || "");
  const [status, setStatus] = useState<BlogStatus>(initial?.status || "draft");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const previewSlug = useMemo(() => {
    if (slugTouched) return slug;
    return slugify(title);
  }, [slug, slugTouched, title]);

  async function uploadCover(file: File) {
    setUploading(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setError(data.error || "Cover upload failed.");
        return;
      }
      setCoverImage(data.url);
    } catch {
      setError("Cover upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload = {
      title,
      slug: previewSlug,
      excerpt,
      content,
      coverImage,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      status,
    };

    try {
      const res = await fetch(mode === "create" ? "/api/admin/blogs" : `/api/admin/blogs/${initial?.id}`, {
        method: mode === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; blog?: BlogPost };
      if (!res.ok) {
        setError(data.error || "Unable to save blog.");
        setLoading(false);
        return;
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch {
      setError("Unable to save blog.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">
            {mode === "create" ? "New blog post" : "Edit blog post"}
          </h2>
          <p className="mt-2 text-[#9bb0c3]">TinyMCE editor, Cloudinary images, meta title & description.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className="rounded-full border border-[#2a3b4f] px-4 py-2 text-sm font-bold text-[#e8eef4]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="rounded-full bg-[#1a6397] px-4 py-2 text-sm font-bold text-white disabled:opacity-60"
          >
            {loading ? "Saving..." : mode === "create" ? "Create post" : "Update post"}
          </button>
        </div>
      </div>

      {error ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-[#fca5a5]">
          {error}
        </p>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4 rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5 sm:p-6">
          <Field label="Title">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!slugTouched) setSlug(slugify(e.target.value));
              }}
              required
              className={inputClass}
              placeholder="Blog title"
            />
          </Field>

          <Field label="Slug">
            <input
              value={previewSlug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(slugify(e.target.value));
              }}
              className={inputClass}
              placeholder="url-slug"
            />
          </Field>

          <Field label="Excerpt">
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className={inputClass}
              placeholder="Short summary for cards and SEO fallback"
            />
          </Field>

          <Field label="Content">
            <TinyMceEditor value={content} onChange={setContent} />
          </Field>
        </div>

        <div className="space-y-4">
          <div className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5 space-y-4">
            <Field label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BlogStatus)}
                className={inputClass}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </Field>

            <Field label="Cover image">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void uploadCover(file);
                }}
                className="block w-full text-sm text-[#9bb0c3] file:mr-3 file:rounded-full file:border-0 file:bg-[#1a6397] file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
              />
              {uploading ? <p className="mt-2 text-xs text-[#9bb0c3]">Uploading to Cloudinary...</p> : null}
              {coverImage ? (
                <div className="mt-3 overflow-hidden rounded-xl border border-[#2a3b4f]">
                  <Image src={coverImage} alt="Cover" width={800} height={450} className="h-40 w-full object-cover" />
                </div>
              ) : null}
              <input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className={`${inputClass} mt-3`}
                placeholder="Or paste Cloudinary image URL"
              />
            </Field>
          </div>

          <div className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#74c1f8]">SEO</h3>
            <Field label="Meta title">
              <input
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className={inputClass}
                placeholder="SEO title"
              />
            </Field>
            <Field label="Meta description">
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={4}
                className={inputClass}
                placeholder="SEO description"
              />
            </Field>
          </div>
        </div>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#e8eef4]">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#2a3b4f] bg-[#0b1520] px-3.5 py-3 text-[15px] text-[#e8eef4] outline-none focus:border-[#4da3d9]";
