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
      <div className="min-h-screen bg-slate-950 text-white">
        <PortalNavbar currentPortal="ceo" />
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <span className="mt-4 rounded-full bg-rose-500/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-rose-300">
            Clearance Level 5 Required
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-black text-white">
            Access Restricted: Executive Portal Only
          </h1>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            You are logged in as <strong className="text-white">{currentUser.name}</strong> ({currentUser.role}). 
            Only the CEO (Mr. Daud Lashari) is authorized to view company financials, revenue pipelines, and client contracts.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={currentUser.role === "admin" ? "/admin" : "/employees"}
              className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition"
            >
              Go to Your {currentUser.role === "admin" ? "Admin CMS" : "Employee Workspace"}
            </Link>
            <button
              onClick={() => loginAs("ceo")}
              className="rounded-xl border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition"
            >
              Authenticate as CEO (Demo Mode)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PortalNavbar currentPortal="ceo" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* CEO Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-r from-[#171203] via-slate-950 to-[#0c182c] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                <Crown className="h-4 w-4" />
                Executive Leadership Matrix
              </div>
              <h1 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                Welcome, Founder &amp; CEO Mr. Daud Lashari
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Live oversight of Zepra Tech’s global revenue pipeline, active 14-day client sprints, inbound high-ticket leads, and team engineering approvals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="sm" className="bg-amber-400 text-slate-950 font-extrabold hover:bg-amber-300">
                <Link href="/admin">
                  <span>Open Website CMS</span>
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800">
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">MRR Run-Rate</span>
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.monthlyRecurringRevenue}
            </div>
            <div className="mt-1 text-xs text-emerald-400 font-semibold">
              +28% from previous month
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Active Pipeline</span>
              <TrendingUp className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.pipelineTotalValue}
            </div>
            <div className="mt-1 text-xs text-cyan-400 font-semibold">
              14 High-ticket proposals active
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Active Sprints</span>
              <FolderGit2 className="h-4 w-4 text-indigo-400" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.activeSprintDeployments} Live
            </div>
            <div className="mt-1 text-xs text-indigo-300 font-semibold">
              100% On-Time Contractual SLA
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Satisfaction</span>
              <ShieldCheck className="h-4 w-4 text-amber-400" />
            </div>
            <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
              {CEO_FINANCIAL_SUMMARY.clientSatisfactionRate}
            </div>
            <div className="mt-1 text-xs text-amber-300 font-semibold">
              Zero escrow disputes
            </div>
          </div>
        </div>

        {/* Live Team Attendance & Working Hours Telemetry for CEO */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 font-bold text-slate-950 shadow-md">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  Staff Shift Attendance &amp; Working Hours Telemetry
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    Live Sync
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Real-time operational visibility into active employee shifts, check-ins, sign-outs, and accumulated hours.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/employees"
                className="rounded-xl border border-white/10 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-white transition"
              >
                Open Employee Desk →
              </Link>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {attendanceLogs.slice(0, 6).map((log) => (
              <div
                key={log.id}
                className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 transition hover:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-white">
                      {log.employeeName?.charAt(0) || "U"}
                    </span>
                    <span className="text-xs font-bold text-white">{log.employeeName}</span>
                  </div>
                  {log.status === "active" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Clocked In
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                      Completed
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-xs">
                  <span className="text-slate-400">Check-in: {log.checkIn}</span>
                  <span className="font-mono font-bold text-emerald-400">{log.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Live Deployments & Inbound Leads */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Active Client Deployment Radar (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-cyan-400" />
                  Client Deployment Radar &amp; Executive Sign-Off
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  Every production release requires CEO approval before client DNS switch.
                </p>
              </div>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">
                {projects.length} Active Sprints
              </span>
            </div>

            <div className="space-y-4">
              {projects.map((project) => {
                const isApproved = approvedProjects.includes(project.id);
                return (
                  <div
                    key={project.id}
                    className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition-all hover:border-cyan-500/30 hover:bg-slate-900/70"
                  >
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-bold text-white">
                            {project.client}
                          </h3>
                          <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                            {project.tier}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium text-slate-300">
                          {project.project}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                          <span>
                            Tech Lead: <strong className="text-white">{project.lead}</strong>
                          </span>
                          <span>
                            Launch Due: <strong className="text-cyan-300">{project.dueDate}</strong>
                          </span>
                          <span>
                            Payment: <strong className="text-emerald-400">{project.paymentStatus}</strong>
                          </span>
                        </div>
                      </div>

                      {/* CEO One-Click Sign-Off */}
                      <button
                        type="button"
                        onClick={() => toggleApproval(project.id)}
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow ${
                          isApproved
                            ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                            : "border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{isApproved ? "Approved by CEO" : "Approve Staging"}</span>
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400 font-medium">Sprint Completion</span>
                        <span className="font-bold text-cyan-300">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
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
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Inbox className="h-5 w-5 text-amber-400" />
                  Live RFPs &amp; Inquiries
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  New website inquiries routed to CEO.
                </p>
              </div>
              <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-xs font-bold text-amber-300">
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
                      ? "border-amber-400/60 bg-slate-900 ring-1 ring-amber-400/30"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-white">
                        {lead.clientName}
                      </h4>
                      <p className="text-xs text-slate-400">{lead.company}</p>
                    </div>
                    <span className="rounded bg-cyan-950 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      {lead.timeAgo}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300 line-clamp-1">
                    {lead.service}
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[11px]">
                    <span className="font-bold text-emerald-400">{lead.budget}</span>
                    <span className="text-amber-400 font-semibold">{lead.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Executive Operations
              </h4>
              <div className="mt-3 space-y-2 text-xs">
                <a
                  href="mailto:info@gozepra.tech?subject=Executive Proposal Template"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-2.5 hover:border-cyan-400 transition"
                >
                  <span>Dispatch Enterprise NDA Template</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </a>
                <a
                  href="/roi-estimator"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-2.5 hover:border-cyan-400 transition"
                >
                  <span>Open Pricing &amp; Scope Calculator</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
