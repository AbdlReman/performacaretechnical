"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/blog-shared";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/blogs", { cache: "no-store" });
      const data = (await res.json().catch(() => ({}))) as { blogs?: BlogPost[]; error?: string };
      if (!res.ok) {
        setError(data.error || "Unable to load blogs.");
        return;
      }
      setBlogs(data.blogs || []);
    } catch {
      setError("Unable to load blogs.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onDelete(id: string, title: string) {
    if (!confirm(`Delete blog “${title}”?`)) return;
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      alert(data.error || "Delete failed.");
      return;
    }
    void load();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Blogs</h2>
          <p className="mt-2 text-[#9bb0c3]">Create, edit and publish posts with SEO meta fields.</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="rounded-full bg-[#1a6397] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#124c75]"
        >
          New post
        </Link>
      </div>

      {loading ? <p className="text-sm text-[#9bb0c3]">Loading blogs...</p> : null}
      {error ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-[#fca5a5]">
          {error}
        </p>
      ) : null}

      {!loading && !error ? (
        <div className="overflow-hidden rounded-[18px] border border-[#2a3b4f] bg-[#152536]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0b1520] text-xs uppercase tracking-[0.08em] text-[#9bb0c3]">
                <tr>
                  <th className="px-4 py-3 font-bold">Title</th>
                  <th className="px-4 py-3 font-bold">Slug</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                  <th className="px-4 py-3 font-bold">Updated</th>
                  <th className="px-4 py-3 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-[#9bb0c3]">
                      No blog posts yet.
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog) => (
                    <tr key={blog.id} className="border-t border-[#2a3b4f]">
                      <td className="px-4 py-3.5 font-semibold text-white">{blog.title}</td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">/{blog.slug}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                            blog.status === "published"
                              ? "bg-[#1a6397]/25 text-[#74c1f8]"
                              : "bg-[#2a3b4f] text-[#9bb0c3]"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-[#9bb0c3]">
                        {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : "—"}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/admin/blogs/${blog.id}/edit`}
                            className="rounded-full border border-[#2a3b4f] px-3 py-1 text-xs font-bold text-[#e8eef4] hover:bg-[#0b1520]"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => void onDelete(blog.id, blog.title)}
                            className="rounded-full border border-red-500/30 px-3 py-1 text-xs font-bold text-[#fca5a5] hover:bg-red-500/10"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}
