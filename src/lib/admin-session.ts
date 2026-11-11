/** Edge-safe session helpers (usable from middleware). */

export const ADMIN_SESSION_COOKIE = "pc_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function getAdminSecret(): string {
  return process.env.ADMIN_SECRET_KEY?.trim() || "";
}

export async function createAdminSessionToken(
  secret: string = getAdminSecret(),
): Promise<string> {
  if (!secret) return "";
  const data = new TextEncoder().encode(`performacare-admin-session:${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function tokensMatch(a: string, b: string): boolean {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
