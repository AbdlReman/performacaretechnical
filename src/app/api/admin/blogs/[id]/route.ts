import { NextRequest, NextResponse } from "next/server";
import { deleteBlog, getBlogById, updateBlog } from "@/lib/blogs";
import { requireAdmin } from "@/lib/require-admin";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await params;
  try {
    const blog = await getBlogById(id);
    if (!blog) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Admin blog get failed:", error);
    return NextResponse.json({ error: "Unable to load blog." }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await params;
  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const blog = await updateBlog(id, {
      title,
      slug: typeof body.slug === "string" ? body.slug : undefined,
      excerpt: typeof body.excerpt === "string" ? body.excerpt : "",
      content: typeof body.content === "string" ? body.content : "",
      coverImage: typeof body.coverImage === "string" ? body.coverImage : "",
      metaTitle: typeof body.metaTitle === "string" ? body.metaTitle : "",
      metaDescription: typeof body.metaDescription === "string" ? body.metaDescription : "",
      status: body.status === "published" ? "published" : "draft",
    });

    if (!blog) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    return NextResponse.json({ ok: true, blog });
  } catch (error) {
    console.error("Admin blog update failed:", error);
    return NextResponse.json({ error: "Unable to update blog." }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await params;
  try {
    const ok = await deleteBlog(id);
    if (!ok) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin blog delete failed:", error);
    return NextResponse.json({ error: "Unable to delete blog." }, { status: 500 });
  }
}
