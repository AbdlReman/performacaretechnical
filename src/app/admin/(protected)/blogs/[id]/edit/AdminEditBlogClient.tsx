"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import type { BlogPost } from "@/lib/blog-shared";

export default function AdminEditBlogClient() {
  const params = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch(`/api/admin/blogs/${params.id}`, { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as { blog?: BlogPost; error?: string };
        if (!alive) return;
        if (!res.ok || !data.blog) {
          setError(data.error || "Blog not found.");
          return;
        }
        setBlog(data.blog);
      } catch {
        if (alive) setError("Unable to load blog.");
      } finally {
        if (alive) setLoading(false);
      }
    }
    if (params.id) void load();
    return () => {
      alive = false;
    };
  }, [params.id]);

  if (loading) return <p className="text-sm text-[#9bb0c3]">Loading post...</p>;
  if (error || !blog) {
    return (
      <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-[#fca5a5]">
        {error || "Blog not found."}
      </p>
    );
  }

  return <BlogForm mode="edit" initial={blog} />;
}
