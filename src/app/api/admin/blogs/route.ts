import { NextRequest, NextResponse } from "next/server";
import { createBlog, listBlogs } from "@/lib/blogs";
import { requireAdmin } from "@/lib/require-admin";

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const blogs = await listBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Admin blogs list failed:", error);
    return NextResponse.json({ error: "Unable to load blogs." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const blog = await createBlog({
      title,
      slug: typeof body.slug === "string" ? body.slug : undefined,
      excerpt: typeof body.excerpt === "string" ? body.excerpt : "",
      content: typeof body.content === "string" ? body.content : "",
      coverImage: typeof body.coverImage === "string" ? body.coverImage : "",
      metaTitle: typeof body.metaTitle === "string" ? body.metaTitle : "",
      metaDescription: typeof body.metaDescription === "string" ? body.metaDescription : "",
      status: body.status === "published" ? "published" : "draft",
    });

    return NextResponse.json({ ok: true, blog });
  } catch (error) {
    console.error("Admin blog create failed:", error);
    return NextResponse.json({ error: "Unable to create blog." }, { status: 500 });
  }
}
