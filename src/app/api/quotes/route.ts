import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/mail";
import { getDb } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const property = typeof body.property === "string" ? body.property.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const locale = body.locale === "ar" ? "ar" : "en";

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Name, phone and email are required." }, { status: 400 });
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

    // Save first; email failure should not block the quote.
    let mail = { adminSent: false, userSent: false };
    try {
      mail = await sendQuoteEmails({ name, phone, email, service, property, message, locale });
    } catch (mailError) {
      console.error("Quote email failed:", mailError);
    }

    return NextResponse.json({
      ok: true,
      id: result.insertedId.toString(),
      mailSent: mail.userSent,
      adminMailSent: mail.adminSent,
    });
  } catch (error) {
    console.error("Quote create failed:", error);
    return NextResponse.json({ error: "Unable to save quote request." }, { status: 500 });
  }
}
