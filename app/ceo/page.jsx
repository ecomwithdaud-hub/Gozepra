"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Crown,
  DollarSign,
  TrendingUp,
  FolderGit2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles,
  Inbox,
  FileCheck,
  Play,
  Layers,
  AlertTriangle,
  RefreshCw,
  PhoneCall,
} from "lucide-react";
import { PortalNavbar } from "@/components/layout/portal-navbar";
import { usePortalAuth } from "@/components/providers/portal-auth-provider";
import {
  CEO_FINANCIAL_SUMMARY,
  ACTIVE_CLIENT_PROJECTS,
  RECENT_CLIENT_LEADS,
  PORTAL_USERS,
} from "@/lib/portal-data";
import { Button } from "@/components/ui/button";

export default function CeoDeckPage() {
  const { currentUser, loginAs } = usePortalAuth();
  const [projects, setProjects] = useState(ACTIVE_CLIENT_PROJECTS);
  const [leads, setLeads] = useState(RECENT_CLIENT_LEADS);
  const [selectedLead, setSelectedLead] = useState(null);
  const [approvedProjects, setApprovedProjects] = useState([]);
  const [attendanceLogs, setAttendanceLogs] = useState([]);

  // Load live attendance telemetry
  useEffect(() => {
    try {
      const saved = localStorage.getItem("zepra_attendance_logs");
      if (saved) {
        setAttendanceLogs(JSON.parse(saved));
      } else {
        setAttendanceLogs([
          {
            id: "att-101",
            employeeName: "Hamza Tariq",
            role: "employee",
            date: "Today",
            checkIn: "09:02 AM",
            checkOut: null,
            duration: "Working Now (5h 12m)",
            status: "active",
          },
          {
            id: "att-102",
            employeeName: "Zainab Raza",
            role: "employee",
            date: "Today",
            checkIn: "08:50 AM",
            checkOut: null,
            duration: "Working Now (5h 24m)",
            status: "active",
          },
        ]);
      }
    } catch (e) {}
  }, []);

  const toggleApproval = (id) => {
    if (approvedProjects.includes(id)) {
      setApprovedProjects(approvedProjects.filter((p) => p !== id));
    } else {
      setApprovedProjects([...approvedProjects, id]);
    }
  };

  // RBAC Access Control Guard: Only CEO can access /ceo
  if (currentUser && currentUser.role !== "ceo") {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <PortalNavbar currentPortal="ceo" />
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 text-rose-600">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <span className="mt-4 rounded-full bg-rose-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-rose-700">
            Clearance Level 5 Required
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-black text-slate-900">
            Access Restricted: Executive Portal Only
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            You are logged in as <strong className="text-slate-900">{currentUser.name}</strong> ({currentUser.role}). 
            Only the CEO (Mr. Daud Lashari) is authorized to view company financials, revenue pipelines, and client contracts.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={currentUser.role === "admin" ? "/admin" : "/employees"}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition"
            >
              Go to Your {currentUser.role === "admin" ? "Admin CMS" : "Employee Workspace"}
            </Link>
            <button
              onClick={() => loginAs("ceo")}
              className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-2.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition"
            >
              Authenticate as CEO (Demo Mode)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900">
      <PortalNavbar currentPortal="ceo" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* CEO Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-300 bg-gradient-to-r from-amber-50 via-white to-blue-50/40 p-6 sm:p-10 shadow-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Crown className="h-4 w-4" />
                Executive Leadership Matrix
              </div>
              <h1 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Welcome, Founder &amp; CEO Mr. Daud Lashari
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                Live oversight of Zepra Tech’s global revenue pipeline, active 14-day client sprints, inbound high-ticket leads, and team engineering approvals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="sm" className="bg-amber-500 text-white font-extrabold hover:bg-amber-600 shadow-sm">
                <Link href="/admin">
                  <span>Open Website CMS</span>
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <Link href="/employees">
                  <span>View Team Workspace</span>
                  <Users className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Financial & Pipeline Telemetry Cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">MRR Run-Rate</span>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.monthlyRecurringRevenue}
            </div>
            <div className="mt-1 text-xs text-emerald-600 font-semibold">
              +28% from previous month
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Active Pipeline</span>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.pipelineTotalValue}
            </div>
            <div className="mt-1 text-xs text-blue-600 font-semibold">
              14 High-ticket proposals active
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Active Sprints</span>
              <FolderGit2 className="h-4 w-4 text-indigo-600" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.activeSprintDeployments} Live
            </div>
            <div className="mt-1 text-xs text-indigo-600 font-semibold">
              100% On-Time Contractual SLA
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Satisfaction</span>
              <ShieldCheck className="h-4 w-4 text-amber-600" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.clientSatisfactionRate}
            </div>
            <div className="mt-1 text-xs text-amber-700 font-semibold">
              Zero escrow disputes
            </div>
          </div>
        </div>

        {/* Live Team Attendance & Working Hours Telemetry for CEO */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 font-bold text-white shadow-md">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  Staff Shift Attendance &amp; Working Hours Telemetry
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    Live Sync
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time operational visibility into active employee shifts, check-ins, sign-outs, and accumulated hours.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/employees"
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition"
              >
                Open Employee Desk →
              </Link>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {attendanceLogs.slice(0, 6).map((log) => (
              <div
                key={log.id}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 text-xs font-bold text-slate-700">
                      {log.employeeName?.charAt(0) || "U"}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{log.employeeName}</span>
                  </div>
                  {log.status === "active" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Clocked In
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                      Completed
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2 text-xs">
                  <span className="text-slate-500">Check-in: {log.checkIn}</span>
                  <span className="font-mono font-bold text-emerald-600">{log.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Live Deployments & Inbound Leads */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Active Client Deployment Radar (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-600" />
                  Client Deployment Radar &amp; Executive Sign-Off
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Every production release requires CEO approval before client DNS switch.
                </p>
              </div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {projects.length} Active Sprints
              </span>
            </div>

            <div className="space-y-4">
              {projects.map((project) => {
                const isApproved = approvedProjects.includes(project.id);
                return (
                  <div
                    key={project.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300"
                  >
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-bold text-slate-900">
                            {project.client}
                          </h3>
                          <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                            {project.tier}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium text-slate-600">
                          {project.project}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                          <span>
                            Tech Lead: <strong className="text-slate-900">{project.lead}</strong>
                          </span>
                          <span>
                            Launch Due: <strong className="text-blue-600">{project.dueDate}</strong>
                          </span>
                          <span>
                            Payment: <strong className="text-emerald-600">{project.paymentStatus}</strong>
                          </span>
                        </div>
                      </div>

                      {/* CEO One-Click Sign-Off */}
                      <button
                        type="button"
                        onClick={() => toggleApproval(project.id)}
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow-sm ${
                          isApproved
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{isApproved ? "Approved by CEO" : "Approve Staging"}</span>
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500 font-medium">Sprint Completion</span>
                        <span className="font-bold text-blue-600">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Inbound High-Ticket Leads Inbox (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Inbox className="h-5 w-5 text-amber-600" />
                  Live RFPs &amp; Inquiries
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  New website inquiries routed to CEO.
                </p>
              </div>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                {leads.length} New
              </span>
            </div>

            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                    selectedLead?.id === lead.id
                      ? "border-amber-400 bg-amber-50/60 ring-1 ring-amber-400/30"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        {lead.clientName}
                      </h4>
                      <p className="text-xs text-slate-500">{lead.company}</p>
                    </div>
                    <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                      {lead.timeAgo}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-1">
                    {lead.service}
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px]">
                    <span className="font-bold text-emerald-600">{lead.budget}</span>
                    <span className="text-amber-700 font-semibold">{lead.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Executive Operations
              </h4>
              <div className="mt-3 space-y-2 text-xs">
                <a
                  href="mailto:info@gozepra.tech?subject=Executive Proposal Template"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
                >
                  <span>Dispatch Enterprise NDA Template</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
                </a>
                <a
                  href="/roi-estimator"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
                >
                  <span>Open Pricing &amp; Scope Calculator</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
