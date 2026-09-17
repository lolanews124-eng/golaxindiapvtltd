export type LeadStatus = "new" | "contacted" | "closed";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
  /** Human-readable form context, e.g. "Home — USA & Global Offshore" */
  source: string;
  /** Pathname where the form was submitted, e.g. /services/web-development */
  pagePath: string;
  /** Full page URL if available */
  pageUrl?: string;
  referrer?: string;
  status: LeadStatus;
  createdAt: string;
}

export interface CreateLeadInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
  source?: string;
  pagePath?: string;
  pageUrl?: string;
  referrer?: string;
}
