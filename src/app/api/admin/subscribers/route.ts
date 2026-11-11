import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/require-admin";

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const db = await getDb();
    const subscribers = await db
      .collection("subscribers")
      .find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();

    return NextResponse.json({
      subscribers: subscribers.map((s) => ({
        id: s._id.toString(),
        name: s.name || "",
        email: s.email || "",
        source: s.source || "",
        status: s.status || "Active",
        locale: s.locale || "en",
        createdAt: s.createdAt ? new Date(s.createdAt).toISOString() : null,
      })),
    });
  } catch (error) {
    console.error("Admin subscribers fetch failed:", error);
    return NextResponse.json({ error: "Unable to load subscribers." }, { status: 500 });
  }
}
