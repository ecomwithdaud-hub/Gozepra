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
      <div className="min-h-screen bg-white text-slate-900">
        <PortalNavbar currentPortal="admin" />
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <span className="mt-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-800">
            Clearance Level 3 Required
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-black text-slate-900">
            Access Restricted: Dev Ops &amp; Admin Clearance Needed
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            You are logged in as <strong className="text-slate-900">{currentUser.name}</strong> (Employee role).
            Only Dev Team Administrators and the CEO can modify website CMS records, toggle Edge Caching, or configure Webhooks.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/employees"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm transition"
            >
              Back to Employee Workspace
            </Link>
            <button
              onClick={() => loginAs("admin")}
              className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 text-xs font-bold text-blue-700 hover:bg-blue-100 transition"
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
    <div className="min-h-screen bg-slate-50/50 text-slate-900">
      <PortalNavbar currentPortal="admin" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Toast */}
        {savedNotification && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-bold text-emerald-800 shadow-2xl backdrop-blur-xl">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <span>Changes published to production edge cache!</span>
          </div>
        )}

        {/* Admin Header */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-white to-indigo-50/40 p-6 sm:p-10 shadow-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                <Sliders className="h-4 w-4" />
                Dev Team &amp; Master Admin Control Mesh
              </div>
              <h1 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Website Content CMS &amp; Infrastructure
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                Manage live client demonstrations, pricing parameters, edge caching layers, and public website metadata without touching code.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={triggerSaveToast}
                size="sm"
                className="bg-blue-600 text-white font-extrabold hover:bg-blue-700 shadow-sm"
              >
                <Save className="mr-1.5 h-4 w-4" />
                <span>Save All Edits</span>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
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
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Edge CDN Caching</h4>
                <p className="text-xs text-slate-500">Sub-0.8s Global CDN</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setEdgeCaching(!edgeCaching);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                edgeCaching ? "bg-blue-600" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  edgeCaching ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Webhook Lead Routing</h4>
                <p className="text-xs text-slate-500">Instant CRM Dispatch</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setLeadRoutingWebhook(!leadRoutingWebhook);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                leadRoutingWebhook ? "bg-emerald-600" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  leadRoutingWebhook ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-slate-900">Maintenance Mode</h4>
                <p className="text-xs text-slate-500">Staging Lockout</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMaintenanceMode(!maintenanceMode);
                triggerSaveToast();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                maintenanceMode ? "bg-rose-500" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <Plus className="h-5 w-5 text-blue-600" />
                <h3 className="font-display text-base font-bold text-slate-900">
                  Add Live Client Demo to Portfolio
                </h3>
              </div>

              <form onSubmit={handleAddDemo} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Project / Demo Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Silk & Cotton Mills Export Hub"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Industry Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Contractors & Home Services">Contractors &amp; Home Services</option>
                    <option value="Medical, Dental & Clinics">Medical, Dental &amp; Clinics</option>
                    <option value="Textiles & Manufacturing">Textiles &amp; Manufacturing</option>
                    <option value="Retail & E-Commerce">Retail &amp; E-Commerce</option>
                    <option value="Corporate & Legal">Corporate &amp; Legal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Live Demo Vercel URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://client-demo.vercel.app/"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Lighthouse Speed Score ({speedScore}/100)
                  </label>
                  <input
                    type="range"
                    min="90"
                    max="100"
                    value={speedScore}
                    onChange={(e) => setSpeedScore(e.target.value)}
                    className="mt-2 w-full accent-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 font-extrabold text-white shadow-md hover:bg-blue-700"
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
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Active Website Demos ({demos.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Visible to public clients on /portfolio and /website-development.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        {demo.title}
                      </h4>
                      <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        Score: {demo.speedScore}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{demo.category}</p>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-blue-600 hover:underline"
                    >
                      <span>{demo.url}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteDemo(demo.id)}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50 transition"
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
