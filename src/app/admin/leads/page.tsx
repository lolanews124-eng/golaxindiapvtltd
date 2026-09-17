"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  RefreshCw,
  Search,
  Trash2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import type { Lead, LeadStatus } from "@/lib/leads/types";

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-amber-100 text-amber-800",
  contacted: "bg-sky-100 text-sky-800",
  closed: "bg-slate-200 text-slate-700",
};

export default function AdminLeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | LeadStatus>("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", {
        credentials: "same-origin",
        cache: "no-store",
      });
      if (res.status === 401) {
        router.replace("/admin");
        return;
      }

      let data: { error?: string; leads?: Lead[] } = {};
      try {
        data = await res.json();
      } catch {
        setError(`Server error (${res.status}). Please refresh.`);
        return;
      }

      if (!res.ok) {
        setError(data.error || `Failed to load leads (${res.status})`);
        setLeads(data.leads || []);
        return;
      }
      setLeads(data.leads || []);
    } catch {
      setError("Could not reach leads API. Check your connection and try Refresh.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void loadLeads();
  }, [loadLeads]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.phone.toLowerCase().includes(q) ||
        lead.service.toLowerCase().includes(q) ||
        lead.source.toLowerCase().includes(q) ||
        lead.pagePath.toLowerCase().includes(q) ||
        (lead.message || "").toLowerCase().includes(q)
      );
    });
  }, [leads, query, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: leads.length,
      new: leads.filter((l) => l.status === "new").length,
      contacted: leads.filter((l) => l.status === "contacted").length,
      closed: leads.filter((l) => l.status === "closed").length,
    };
  }, [leads]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
  }

  async function setStatus(id: string, status: LeadStatus) {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) return;
    const data = await res.json();
    setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
    setSelected((prev) => (prev?.id === id ? data.lead : prev));
  }

  async function removeLead(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (!res.ok) return;
    setLeads((prev) => prev.filter((l) => l.id !== id));
    setSelected((prev) => (prev?.id === id ? null : prev));
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
              Leads Dashboard
            </h1>
            <p className="text-xs text-slate-500 sm:text-sm">
              Website form submissions with page source
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void loadLeads()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={() => void logout()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total", value: stats.total },
            { label: "New", value: stats.new },
            { label: "Contacted", value: stats.contacted },
            { label: "Closed", value: stats.closed },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, page, service…"
              className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none ring-slate-900 focus:ring-2"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | LeadStatus)}
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-slate-900 focus:ring-2"
          >
            <option value="all">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {error ? (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Lead</th>
                    <th className="px-4 py-3 font-semibold">Page</th>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                        Loading leads…
                      </td>
                    </tr>
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                        No leads yet. Submit a form on the website to see it here.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => setSelected(lead)}
                        className={`cursor-pointer border-b border-slate-100 hover:bg-slate-50 ${
                          selected?.id === lead.id ? "bg-slate-50" : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-900">{lead.name}</div>
                          <div className="text-xs text-slate-500">{lead.email}</div>
                          <div className="text-xs text-slate-500">{lead.phone}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="max-w-[180px] truncate font-mono text-xs text-slate-700">
                            {lead.pagePath}
                          </div>
                          <div className="max-w-[180px] truncate text-xs text-slate-500">
                            {lead.source}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-700">{lead.service}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${STATUS_STYLES[lead.status]}`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-xs text-slate-500">
                          {new Date(lead.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-5">
            {!selected ? (
              <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-slate-500">
                Select a lead to view details
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{selected.name}</h2>
                  <p className="text-sm text-slate-500">{selected.email}</p>
                  <p className="text-sm text-slate-500">{selected.phone}</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 text-sm">
                  <div className="mb-2 flex items-center gap-1.5 font-semibold text-slate-800">
                    <MapPin className="h-4 w-4" />
                    Lead source page
                  </div>
                  <p className="font-mono text-xs text-slate-700">{selected.pagePath}</p>
                  <p className="mt-1 text-xs text-slate-500">Form: {selected.source}</p>
                  {selected.pageUrl ? (
                    <a
                      href={selected.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:underline"
                    >
                      Open page <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>

                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-semibold text-slate-700">Service:</span>{" "}
                    {selected.service}
                  </p>
                  {selected.company ? (
                    <p>
                      <span className="font-semibold text-slate-700">Company:</span>{" "}
                      {selected.company}
                    </p>
                  ) : null}
                  <p>
                    <span className="font-semibold text-slate-700">Received:</span>{" "}
                    {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold text-slate-700">Message</p>
                  <p className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                    {selected.message}
                  </p>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Status
                  </label>
                  <select
                    value={selected.status}
                    onChange={(e) =>
                      void setStatus(selected.id, e.target.value as LeadStatus)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-900 focus:ring-2"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => void removeLead(selected.id)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete lead
                </button>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
