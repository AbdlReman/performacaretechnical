import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const property = typeof body.property === "string" ? body.property.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const locale = body.locale === "ar" ? "ar" : "en";

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const db = await getDb();
    const doc = {
      name,
      phone,
      email,
      service,
      property,
      message,
      locale,
      status: "New",
      read: false,
      createdAt: new Date(),
    };

    const result = await db.collection("quotes").insertOne(doc);

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error("Quote create failed:", error);
    return NextResponse.json({ error: "Unable to save quote request." }, { status: 500 });
  }
}
