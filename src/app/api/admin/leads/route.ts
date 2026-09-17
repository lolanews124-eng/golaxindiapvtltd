import { NextResponse } from "next/server";
import { getAdminSessionEmail } from "@/lib/admin/auth";
import { listLeads } from "@/lib/leads/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const email = await getAdminSessionEmail();
    if (!email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const leads = await listLeads();
    return NextResponse.json({ leads });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load leads";
    return NextResponse.json({ error: message, leads: [] }, { status: 500 });
  }
}
