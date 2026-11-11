import { NextRequest, NextResponse } from "next/server";
import { getBlogBySlug } from "@/lib/blogs";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug, true);
    if (!blog) return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Public blog get failed:", error);
    return NextResponse.json({ error: "Unable to load blog." }, { status: 500 });
  }
}
