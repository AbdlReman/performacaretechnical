import { NextRequest, NextResponse } from "next/server";
import { uploadImageBuffer } from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(request: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const form = await request.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image uploads are allowed." }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    if (bytes.length > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
    }

    const uploaded = await uploadImageBuffer(bytes);
    return NextResponse.json({ ok: true, url: uploaded.url, publicId: uploaded.publicId });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json({ error: "Unable to upload image." }, { status: 500 });
  }
}
