import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/require-admin";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid quote id." }, { status: 400 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const read = body.read !== false;

    const db = await getDb();
    const result = await db.collection("quotes").findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          read,
          readAt: read ? new Date() : null,
          updatedAt: new Date(),
        },
      },
      { returnDocument: "after" },
    );

    const quote = result;
    if (!quote) {
      return NextResponse.json({ error: "Quote not found." }, { status: 404 });
    }

    return NextResponse.json({
      ok: true,
      quote: {
        id: quote._id.toString(),
        name: quote.name || "",
        phone: quote.phone || "",
        email: quote.email || "",
        service: quote.service || "",
        property: quote.property || "",
        message: quote.message || "",
        locale: quote.locale || "en",
        status: quote.status || "New",
        read: Boolean(quote.read),
        createdAt: quote.createdAt ? new Date(quote.createdAt).toISOString() : null,
      },
    });
  } catch (error) {
    console.error("Admin quote update failed:", error);
    return NextResponse.json({ error: "Unable to update quote." }, { status: 500 });
  }
}
