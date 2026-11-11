import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminSecret,
  tokensMatch,
} from "@/lib/admin-session";

const PUBLIC_FILE = /\.[^/]+$/;

async function isAdminAuthed(request: NextRequest): Promise<boolean> {
  const secret = getAdminSecret();
  if (!secret) return false;
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;
  const expected = await createAdminSessionToken(secret);
  return tokensMatch(token, expected); // equal-length hex compare
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Admin is English-only and outside locale rewrites.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const authed = await isAdminAuthed(request);
    const isLogin = pathname === "/admin/login";

    if (!authed && !isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    if (authed && isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  // Keep a single public shape: /about-us (en) and /ar/about-us (ar).
  // Internally rewrite unprefixed routes to /en/...
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }

  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
};
