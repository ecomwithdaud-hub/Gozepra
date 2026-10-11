"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Plus,
  Trash2,
  Edit3,
  Globe,
  DollarSign,
  Activity,
  Layers,
  Save,
  CheckCircle2,
  ExternalLink,
  Shield,
  Zap,
  Server,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { PortalNavbar } from "@/components/layout/portal-navbar";
import { usePortalAuth } from "@/components/providers/portal-auth-provider";
import { CMS_DEMO_ITEMS } from "@/lib/portal-data";
import { Button } from "@/components/ui/button";

export default function AdminCmsPage() {
  const { currentUser, loginAs } = usePortalAuth();
  const [demos, setDemos] = useState(CMS_DEMO_ITEMS);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Contractors & Home Services");
  const [newUrl, setNewUrl] = useState("");
  const [speedScore, setSpeedScore] = useState(99);
  const [savedNotification, setSavedNotification] = useState(false);

  // Quick website status toggles
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [edgeCaching, setEdgeCaching] = useState(true);
  const [leadRoutingWebhook, setLeadRoutingWebhook] = useState(true);

  // RBAC Access Control Guard:
  // Employees cannot access /admin (only "admin" or "ceo" have permission)
  if (currentUser && currentUser.role === "employee") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <PortalNavbar currentPortal="admin" />
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <span className="mt-4 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
            Clearance Level 3 Required
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-black text-white">
            Access Restricted: Dev Ops &amp; Admin Clearance Needed
          </h1>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            You are logged in as <strong className="text-white">{currentUser.name}</strong> (Employee role).
            Only Dev Team Administrators and the CEO can modify website CMS records, toggle Edge Caching, or configure Webhooks.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/employees"
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition"
            >
              Back to Employee Workspace
            </Link>
            <button
              onClick={() => loginAs("admin")}
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-400/20 transition"
            >
              Switch to Dev/Admin (Demo Mode)
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddDemo = (e) => {
    e.preventDefault();
    if (!newTitle || !newUrl) return;
    const newDemo = {
      id: `demo-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      url: newUrl,
      status: "Published",
      speedScore: Number(speedScore) || 98,
    };
    setDemos([newDemo, ...demos]);
    setNewTitle("");
    setNewUrl("");
    triggerSaveToast();
  };

  const handleDeleteDemo = (id) => {
    setDemos(demos.filter((d) => d.id !== id));
    triggerSaveToast();
  };

  const triggerSaveToast = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PortalNavbar currentPortal="admin" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Toast */}
        {savedNotification && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-slate-900 px-4 py-3 text-sm font-bold text-emerald-300 shadow-2xl backdrop-blur-xl">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>Changes published to production edge cache!</span>
          </div>
        )}

        {/* Admin Header */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-[#06182a] via-slate-950 to-[#071328] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                <Sliders className="h-4 w-4" />
                Dev Team &amp; Master Admin Control Mesh
              </div>
              <h1 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                Website Content CMS &amp; Infrastructure
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Manage live client demonstrations, pricing parameters, edge caching layers, and public website metadata without touching code.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={triggerSaveToast}
                size="sm"
                className="bg-cyan-400 text-slate-950 font-extrabold hover:bg-cyan-300"
              >
                <Save className="mr-1.5 h-4 w-4" />
                <span>Save All Edits</span>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800">
                <Link href="/" target="_blank">
                  <span>View Public Site</span>
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick System Telemetry & Toggles */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">Edge CDN Caching</h4>
                <p className="text-xs text-slate-400">Sub-0.8s Global CDN</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setEdgeCaching(!edgeCaching);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                edgeCaching ? "bg-cyan-400" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-slate-950 transition-transform ${
                  edgeCaching ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">Webhook Lead Routing</h4>
                <p className="text-xs text-slate-400">Instant CRM Dispatch</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setLeadRoutingWebhook(!leadRoutingWebhook);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                leadRoutingWebhook ? "bg-emerald-400" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-slate-950 transition-transform ${
                  leadRoutingWebhook ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">Maintenance Mode</h4>
                <p className="text-xs text-slate-400">Staging Lockout</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMaintenanceMode(!maintenanceMode);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                maintenanceMode ? "bg-rose-500" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-slate-950 transition-transform ${
                  maintenanceMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content Management Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Add New Portfolio Demo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <Plus className="h-5 w-5 text-cyan-400" />
                <h3 className="font-display text-base font-bold text-white">
                  Add Live Client Demo to Portfolio
                </h3>
              </div>

              <form onSubmit={handleAddDemo} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Project / Demo Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Silk & Cotton Mills Export Hub"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Industry Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="Contractors & Home Services">Contractors &amp; Home Services</option>
                    <option value="Medical, Dental & Clinics">Medical, Dental &amp; Clinics</option>
                    <option value="Textiles & Manufacturing">Textiles &amp; Manufacturing</option>
                    <option value="Retail & E-Commerce">Retail &amp; E-Commerce</option>
                    <option value="Corporate & Legal">Corporate &amp; Legal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Live Demo Vercel URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://client-demo.vercel.app/"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Lighthouse Speed Score ({speedScore}/100)
                  </label>
                  <input
                    type="range"
                    min="90"
                    max="100"
                    value={speedScore}
                    onChange={(e) => setSpeedScore(e.target.value)}
                    className="mt-2 w-full accent-cyan-400"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold text-slate-950 shadow-md hover:brightness-110"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    <span>Publish Demo to Portfolio Page</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Published Demos List (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Active Website Demos ({demos.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Visible to public clients on /portfolio and /website-development.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-cyan-500/30 hover:bg-slate-900/80"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-sm font-bold text-white">
                        {demo.title}
                      </h4>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        Score: {demo.speedScore}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{demo.category}</p>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline"
                    >
                      <span>{demo.url}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteDemo(demo.id)}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-2 text-slate-400 hover:border-rose-500/40 hover:text-rose-400 transition"
                      title="Delete demo"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
