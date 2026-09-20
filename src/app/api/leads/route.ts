import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const bodySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  service: z.string().trim().min(1).max(120),
  requirement: z.string().trim().min(5).max(2000),
  context: z.string().trim().max(200).optional(),
  page: z.string().trim().max(300).optional(),
  /** Honeypot — bots fill this; humans leave empty */
  companyWebsite: z.string().max(200).optional(),
});

/** Simple in-memory rate limit (per instance). */
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 8;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now > row.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (row.count >= MAX_HITS) return false;
  row.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Validation failed" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.companyWebsite && data.companyWebsite.trim().length > 0) {
    // Honeypot tripped — pretend success
    return NextResponse.json({ ok: true });
  }

  const to = process.env.LEAD_TO_EMAIL || "contact@golaxindia.com";
  const from =
    process.env.LEAD_FROM_EMAIL || "Golax India Website <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const text =
    `New website enquiry\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Service: ${data.service}\n` +
    `Context: ${data.context || "Website"}\n` +
    `Page: ${data.page || "/"}\n\n` +
    `Requirement:\n${data.requirement}\n`;

  if (!apiKey) {
    console.error("[leads] RESEND_API_KEY missing — enquiry not emailed:", data.email);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured. Please email contact@golaxindia.com directly.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Website enquiry — ${data.service} (${data.context || "Website"})`,
      text,
    });
    if (result.error) {
      console.error("[leads] Resend error", result.error);
      return NextResponse.json(
        { ok: false, error: "Could not send enquiry. Please try again or email us." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads] send failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send enquiry. Please try again or email us." },
      { status: 502 },
    );
  }
}
