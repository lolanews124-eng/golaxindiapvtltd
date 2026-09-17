import { createHmac, timingSafeEqual } from "crypto";

export const COOKIE_NAME = "golax_admin_session";
export const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export function getAdminCredentials() {
  return {
    email: (process.env.ADMIN_EMAIL || "admin@bhaskar.com").toLowerCase(),
    password: process.env.ADMIN_PASSWORD || "Bhaskar@123",
  };
}

function getSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    "golax-admin-session-secret-change-in-production"
  );
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function encodeEmail(email: string): string {
  return Buffer.from(email.toLowerCase(), "utf8").toString("base64url");
}

function decodeEmail(encoded: string): string | null {
  try {
    return Buffer.from(encoded, "base64url").toString("utf8").toLowerCase();
  } catch {
    return null;
  }
}

export function createSessionToken(email: string): string {
  const exp = Date.now() + MAX_AGE_SECONDS * 1000;
  const encodedEmail = encodeEmail(email);
  const payload = `${encodedEmail}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): string | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [encodedEmail, expStr, signature] = parts;
  const payload = `${encodedEmail}.${expStr}`;
  const expected = sign(payload);
  try {
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return null;

  const email = decodeEmail(encodedEmail);
  if (!email || email !== getAdminCredentials().email) return null;
  return email;
}

export function validateAdminLogin(email: string, password: string): boolean {
  const creds = getAdminCredentials();
  const emailOk = email.trim().toLowerCase() === creds.email;
  const passA = Buffer.from(password);
  const passB = Buffer.from(creds.password);
  const passOk =
    passA.length === passB.length && timingSafeEqual(passA, passB);
  return emailOk && passOk;
}

export function sessionCookieOptions(maxAge = MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}
