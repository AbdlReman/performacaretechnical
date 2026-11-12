import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/require-admin";

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const db = await getDb();
    const quotes = await db
      .collection("quotes")
      .find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return NextResponse.json({
      quotes: quotes.map((q) => ({
        id: q._id.toString(),
        name: q.name || "",
        phone: q.phone || "",
        email: q.email || "",
        service: q.service || "",
        property: q.property || "",
        message: q.message || "",
        locale: q.locale || "en",
        status: q.status || "New",
        read: Boolean(q.read),
        createdAt: q.createdAt ? new Date(q.createdAt).toISOString() : null,
      })),
    });
  } catch (error) {
    console.error("Admin quotes fetch failed:", error);
    return NextResponse.json({ error: "Unable to load quotes." }, { status: 500 });
  }
}
