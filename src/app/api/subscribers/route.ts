import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const locale = body.locale === "ar" ? "ar" : "en";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const db = await getDb();
    const existing = await db.collection("subscribers").findOne({ email });

    if (existing) {
      await db.collection("subscribers").updateOne(
        { email },
        {
          $set: {
            name: name || existing.name || "",
            status: "Active",
            source: "Home page",
            locale,
            updatedAt: new Date(),
          },
        },
      );
      return NextResponse.json({ ok: true, existing: true });
    }

    await db.collection("subscribers").insertOne({
      name,
      email,
      source: "Home page",
      status: "Active",
      locale,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscriber create failed:", error);
    return NextResponse.json({ error: "Unable to save subscriber." }, { status: 500 });
  }
}
