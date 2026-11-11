import { NextResponse } from "next/server";
import { listBlogs } from "@/lib/blogs";

export async function GET() {
  try {
    const blogs = await listBlogs({ publishedOnly: true });
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Public blogs list failed:", error);
    return NextResponse.json({ error: "Unable to load blogs." }, { status: 500 });
  }
}
