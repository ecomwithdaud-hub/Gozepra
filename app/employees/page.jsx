"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  CheckSquare,
  Clock,
  BookOpen,
  Calendar,
  Send,
  AlertCircle,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  FileCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PortalNavbar } from "@/components/layout/portal-navbar";
import { AttendanceTracker } from "@/components/portal/attendance-tracker";
import { EMPLOYEE_TASKS, INTERNAL_ANNOUNCEMENTS } from "@/lib/portal-data";
import { usePortalAuth } from "@/components/providers/portal-auth-provider";
import { Button } from "@/components/ui/button";

export default function EmployeesWorkspacePage() {
  const { currentUser } = usePortalAuth();
  const [tasks, setTasks] = useState(EMPLOYEE_TASKS);
  const [standupDone, setStandupDone] = useState(false);
  const [yesterdayText, setYesterdayText] = useState("");
  const [todayText, setTodayText] = useState("");
  const [blockersText, setBlockersText] = useState("");

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const nextStatus =
            task.status === "completed"
              ? "in-progress"
              : task.status === "in-progress"
              ? "review"
              : "completed";
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const handleStandupSubmit = (e) => {
    e.preventDefault();
    if (!todayText) return;
    setStandupDone(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PortalNavbar currentPortal="employees" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Employee Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-[#031c15] via-slate-950 to-[#071927] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
                <Users className="h-4 w-4" />
                Team Operations &amp; Engineering Mesh
              </div>
              <h1 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                Employee Workspace: {currentUser?.name || "Team Specialist"}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Department: <strong className="text-emerald-300">{currentUser?.department || "Engineering"}</strong> | Clearance: <strong className="text-white">{currentUser?.securityClearance || "Level 2"}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center">
                <div className="font-display text-2xl font-black text-emerald-400">
                  {tasks.filter((t) => t.status === "completed").length} / {tasks.length}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Tasks Finished
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements from Leadership */}
        <div className="mt-8 space-y-3">
          {INTERNAL_ANNOUNCEMENTS.map((ann) => (
            <div
              key={ann.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs text-amber-200"
            >
              <div className="flex items-center gap-2.5">
                <span className="rounded-md bg-amber-400/20 px-2 py-0.5 text-[10px] font-extrabold text-amber-300">
                  {ann.badge}
                </span>
                <strong className="text-white">{ann.title}</strong>
                <span className="text-slate-400">— {ann.content}</span>
              </div>
              <span className="text-[11px] text-slate-400 shrink-0">{ann.date}</span>
            </div>
          ))}
        </div>

        {/* Attendance, Shift Clock In/Out & Working Hours Calculator */}
        <div className="mt-8">
          <AttendanceTracker currentUser={currentUser} />
        </div>

        {/* Main Grid: Sprint Taskboard & Asynchronous Standup */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Sprint Tasks (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-emerald-400" />
                  Your Active Sprint Deliverables
                </h3>
                <p className="text-xs text-slate-400">
                  Click on status to advance task to in-progress, review, or completed.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-emerald-500/30 hover:bg-slate-900/80"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            task.priority === "Urgent"
                              ? "bg-rose-400"
                              : task.priority === "High"
                              ? "bg-amber-400"
                              : "bg-cyan-400"
                          }`}
                        />
                        <h4 className="font-display text-sm font-bold text-white">
                          {task.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Project: <strong className="text-slate-200">{task.project}</strong> | Assigned: {task.assignedTo}
                      </p>
                      <div className="mt-2 text-[11px] text-slate-500">
                        Target SLA: {task.dueDate}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleTaskStatus(task.id)}
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow ${
                        task.status === "completed"
                          ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                          : task.status === "review"
                          ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                          : "border border-cyan-400/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/60"
                      }`}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{task.status.toUpperCase()}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Asynchronous Daily Standup & Tech Standards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1-Minute Daily Standup Form */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-display text-base font-bold text-white">
                    Daily Asynchronous Standup
                  </h3>
                </div>
                <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                  Required Daily
                </span>
              </div>

              {standupDone ? (
                <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center text-xs text-emerald-200">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400 mb-2" />
                  <strong className="block text-sm text-white font-bold">
                    Standup Submitted Successfully!
                  </strong>
                  <span>Your daily telemetry has been transmitted to Founder Daud Lashari and team leads.</span>
                </div>
              ) : (
                <form onSubmit={handleStandupSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      1. What did you finish yesterday?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Completed Vercel edge deployment for Summit Roofing"
                      value={yesterdayText}
                      onChange={(e) => setYesterdayText(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      2. What are you building today?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Connecting B2B mill quote form with email webhook"
                      value={todayText}
                      onChange={(e) => setTodayText(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      3. Any blockers or dependencies?
                    </label>
                    <input
                      type="text"
                      placeholder="None / Waiting on API key"
                      value={blockersText}
                      onChange={(e) => setBlockersText(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 p-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 font-extrabold text-slate-950 shadow hover:brightness-110"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    <span>Post Daily Standup</span>
                  </Button>
                </form>
              )}
            </div>

            {/* Engineering Guidelines & Resources Hub */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <BookOpen className="h-5 w-5 text-indigo-400" />
                <h3 className="font-display text-base font-bold text-white">
                  Engineering Standards &amp; SOPs
                </h3>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 hover:border-cyan-400 transition">
                  <span className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-cyan-400" />
                    <span>Git Workflow &amp; PR Conventions</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">v15.2</span>
                </li>
                <li className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 hover:border-cyan-400 transition">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Lighthouse 95+ Mobile Optimization SOP</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Mandatory</span>
                </li>
                <li className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 hover:border-cyan-400 transition">
                  <span className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-purple-400" />
                    <span>Next.js 15 Tailwind Dark Luxury Design Tokens</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Figma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
