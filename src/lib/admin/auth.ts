import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  createSessionToken,
  sessionCookieOptions,
  verifySessionToken,
} from "./session";

export {
  COOKIE_NAME,
  createSessionToken,
  getAdminCredentials,
  validateAdminLogin,
  verifySessionToken,
} from "./session";

export async function setAdminSessionCookie(email: string) {
  const jar = await cookies();
  jar.set(COOKIE_NAME, createSessionToken(email), sessionCookieOptions());
}

export async function clearAdminSessionCookie() {
  const jar = await cookies();
  jar.set(COOKIE_NAME, "", sessionCookieOptions(0));
}

export async function getAdminSessionEmail(): Promise<string | null> {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE_NAME)?.value);
}
