import { NextResponse } from "next/server";
import { COOKIE_NAME, sessionCookieOptions } from "@/lib/admin/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", sessionCookieOptions(0));
  return response;
}
