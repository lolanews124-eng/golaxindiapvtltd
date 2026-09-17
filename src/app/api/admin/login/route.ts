import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createSessionToken,
  sessionCookieOptions,
  validateAdminLogin,
  COOKIE_NAME,
} from "@/lib/admin/session";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const { email, password } = parsed.data;
    if (!validateAdminLogin(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ ok: true, redirectTo: "/admin/leads" });
    response.cookies.set(
      COOKIE_NAME,
      createSessionToken(email),
      sessionCookieOptions()
    );
    return response;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
