import { timingSafeEqual } from "crypto";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminSecret,
} from "@/lib/admin-session";

export {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminSecret,
};

export function verifyAdminSecret(input: string): boolean {
  const expected = getAdminSecret();
  if (!expected || !input) return false;

  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function verifyAdminSessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  const expected = await createAdminSessionToken();
  if (!expected || token.length !== expected.length) return false;

  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return timingSafeEqual(a, b);
}
