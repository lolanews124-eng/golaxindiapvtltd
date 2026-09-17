import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead } from "@/lib/leads/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(3).max(2000),
  company: z.string().trim().max(120).optional(),
  source: z.string().trim().max(200).optional(),
  pagePath: z.string().trim().max(500).optional(),
  pageUrl: z.string().trim().max(1000).optional(),
  referrer: z.string().trim().max(1000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const lead = await createLead(parsed.data);
    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save lead";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
