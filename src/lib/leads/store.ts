import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import os from "os";
import path from "path";
import type { CreateLeadInput, Lead, LeadStatus } from "./types";

type GlobalLeads = typeof globalThis & {
  __golaxLeadsCache?: Lead[];
};

function memoryStore(): Lead[] {
  const g = globalThis as GlobalLeads;
  if (!g.__golaxLeadsCache) g.__golaxLeadsCache = [];
  return g.__golaxLeadsCache;
}

function setMemoryStore(leads: Lead[]) {
  const g = globalThis as GlobalLeads;
  g.__golaxLeadsCache = leads;
}

function getLeadsFilePath(): string {
  // Vercel / serverless: only /tmp is writable
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join(os.tmpdir(), "golax-leads.json");
  }
  return path.join(process.cwd(), "data", "leads.json");
}

async function ensureStore(filePath: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

async function readLeadsFromDisk(): Promise<Lead[] | null> {
  const filePath = getLeadsFilePath();
  try {
    await ensureStore(filePath);
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return null;
  }
}

async function writeLeadsToDisk(leads: Lead[]): Promise<boolean> {
  const filePath = getLeadsFilePath();
  try {
    await ensureStore(filePath);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
}

async function readLeads(): Promise<Lead[]> {
  const fromDisk = await readLeadsFromDisk();
  if (fromDisk) {
    setMemoryStore(fromDisk);
    return fromDisk;
  }
  return memoryStore();
}

async function writeLeads(leads: Lead[]): Promise<void> {
  setMemoryStore(leads);
  await writeLeadsToDisk(leads);
}

export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const leads = await readLeads();
  const lead: Lead = {
    id: randomUUID(),
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim(),
    service: input.service.trim(),
    message: input.message.trim(),
    company: input.company?.trim() || undefined,
    source: input.source?.trim() || "Website",
    pagePath: input.pagePath?.trim() || "/",
    pageUrl: input.pageUrl?.trim() || undefined,
    referrer: input.referrer?.trim() || undefined,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  leads.unshift(lead);
  await writeLeads(leads);
  return lead;
}

export async function listLeads(): Promise<Lead[]> {
  return readLeads();
}

export async function updateLeadStatus(
  id: string,
  status: LeadStatus
): Promise<Lead | null> {
  const leads = await readLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;
  leads[index] = { ...leads[index], status };
  await writeLeads(leads);
  return leads[index];
}

export async function deleteLead(id: string): Promise<boolean> {
  const leads = await readLeads();
  const next = leads.filter((l) => l.id !== id);
  if (next.length === leads.length) return false;
  await writeLeads(next);
  return true;
}
