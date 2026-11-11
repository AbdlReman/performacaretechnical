import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminSecret,
  verifyAdminSecret,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!getAdminSecret()) {
    return NextResponse.json(
      { error: "Admin secret is not configured on the server." },
      { status: 500 },
    );
  }

  let body: { secret?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const secret = typeof body.secret === "string" ? body.secret.trim() : "";
  if (!verifyAdminSecret(secret)) {
    return NextResponse.json({ error: "Invalid admin secret key." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: await createAdminSessionToken(secret),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return response;
}
