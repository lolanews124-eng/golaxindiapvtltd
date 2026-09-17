/** Client helper — save lead to admin panel before WhatsApp redirect. */
export interface LeadPayload {
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

export async function submitLeadToAdmin(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function getClientPageMeta() {
  if (typeof window === "undefined") {
    return { pagePath: "/", pageUrl: undefined, referrer: undefined };
  }
  return {
    pagePath: window.location.pathname || "/",
    pageUrl: window.location.href,
    referrer: document.referrer || undefined,
  };
}
