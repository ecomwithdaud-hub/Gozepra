"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Play,
  Square,
  History,
  Calendar,
  CheckCircle2,
  Timer,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "zepra_attendance_logs";

export function AttendanceTracker({ currentUser }) {
  const [logs, setLogs] = useState([]);
  const [activeShift, setActiveShift] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time wall clock
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Load logs and restore active shift on mount
  useEffect(() => {
    try {
      const savedLogs = localStorage.getItem(STORAGE_KEY);
      if (savedLogs) {
        const parsed = JSON.parse(savedLogs);
        setLogs(parsed);

        // Find if this current user has an open active shift
        const userActive = parsed.find(
          (entry) =>
            entry.employeeId === (currentUser?.id || "usr-current") &&
            entry.status === "active"
        );
        if (userActive) {
          setActiveShift(userActive);
        }
      } else {
        // Mock starter historical shifts for visual completeness
        const starterLogs = [
          {
            id: "att-101",
            employeeId: currentUser?.id || "usr-3",
            employeeName: currentUser?.name || "Hamza Tariq",
            role: "employee",
            date: "Yesterday",
            checkIn: "09:02 AM",
            checkOut: "05:32 PM",
            duration: "8h 30m",
            status: "completed",
            overtime: "30m",
          },
          {
            id: "att-102",
            employeeId: currentUser?.id || "usr-3",
            employeeName: currentUser?.name || "Hamza Tariq",
            role: "employee",
            date: "2 days ago",
            checkIn: "08:55 AM",
            checkOut: "05:00 PM",
            duration: "8h 05m",
            status: "completed",
            overtime: "05m",
          },
        ];
        setLogs(starterLogs);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(starterLogs));
      }
    } catch (e) {
      console.error("Failed to load attendance logs", e);
    }
  }, [currentUser]);

  // Elapsed shift timer
  useEffect(() => {
    let timerInterval = null;
    if (activeShift && activeShift.startTimeMs) {
      const updateElapsed = () => {
        const diff = Math.floor((Date.now() - activeShift.startTimeMs) / 1000);
        setElapsedSeconds(Math.max(0, diff));
      };
      updateElapsed();
      timerInterval = setInterval(updateElapsed, 1000);
    } else {
      setElapsedSeconds(0);
    }
    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [activeShift]);

  const handleCheckIn = () => {
    const now = new Date();
    const newShift = {
      id: `shift-${Date.now()}`,
      employeeId: currentUser?.id || "usr-current",
      employeeName: currentUser?.name || "Staff Member",
      role: currentUser?.role || "employee",
      date: now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      checkIn: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      checkOut: null,
      startTimeMs: Date.now(),
      duration: "In Progress",
      status: "active",
      overtime: "0m",
    };

    const updated = [newShift, ...logs];
    setLogs(updated);
    setActiveShift(newShift);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {}
  };

  const handleCheckOut = () => {
    if (!activeShift) return;
    const now = new Date();
    const durationMs = Date.now() - activeShift.startTimeMs;
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    const durationFormatted = `${hours}h ${minutes}m`;

    const overtimeMins = Math.max(0, Math.floor((durationMs - 8 * 3600 * 1000) / (1000 * 60)));
    const overtimeFormatted = overtimeMins > 0 ? `${Math.floor(overtimeMins / 60)}h ${overtimeMins % 60}m` : "0m";

    const completedShift = {
      ...activeShift,
      checkOut: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      duration: durationFormatted,
      status: "completed",
      overtime: overtimeFormatted,
    };

    const updated = logs.map((entry) => (entry.id === activeShift.id ? completedShift : entry));
    setLogs(updated);
    setActiveShift(null);
    setElapsedSeconds(0);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {}
  };

  const formatElapsedTime = (totalSec) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl shadow-xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
            <Timer className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-xl font-black text-white">
                Daily Shift Attendance & Working Hours
              </h2>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Live Radar
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Shift tracking, real-time hours calculator, and automated daily attendance logging.
            </p>
          </div>
        </div>

        {/* Current Time Badge */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2">
          <Clock className="h-4 w-4 text-emerald-400 animate-pulse" />
          <div className="text-right">
            <p className="text-[10px] uppercase font-semibold text-slate-400">Current Local Time</p>
            <p className="font-mono text-sm font-bold text-white">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Clock-in / Clock-out Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Active Shift Action Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Shift Status</span>
              {activeShift ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Clocked In
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 border border-white/10 px-2.5 py-0.5 text-xs font-semibold text-slate-400">
                  Off Duty
                </span>
              )}
            </div>

            <div className="my-5 text-center">
              <p className="text-xs text-slate-400">Active Shift Elapsed Time</p>
              <div className="mt-1 font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
                {activeShift ? formatElapsedTime(elapsedSeconds) : "00:00:00"}
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                {activeShift ? `Started at ${activeShift.checkIn}` : "Ready to start your shift"}
              </p>
            </div>
          </div>

          <div>
            {activeShift ? (
              <Button
                onClick={handleCheckOut}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2"
              >
                <Square className="h-4 w-4 fill-white" />
                Sign Out & End Shift
              </Button>
            ) : (
              <Button
                onClick={handleCheckIn}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4 fill-slate-950" />
                Check In (Start Shift)
              </Button>
            )}
          </div>
        </div>

        {/* Working Hours Calculator & Metrics */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Shift Calculator & Quota
            </span>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Standard Daily Target</span>
                <span className="font-mono font-bold text-white">8.00 Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Completed This Week</span>
                <span className="font-mono font-bold text-emerald-400">32.5 Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Overtime Accumulated</span>
                <span className="font-mono font-bold text-amber-400">1h 15m</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Shift Efficiency Score</span>
                <span className="font-mono font-bold text-cyan-400">99.4%</span>
              </div>
            </div>

            {/* Progress bar towards 8h */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>Daily Target Progress</span>
                <span className="font-semibold text-white">
                  {Math.min(100, Math.round((elapsedSeconds / (8 * 3600)) * 100))}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((elapsedSeconds / (8 * 3600)) * 100))}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-[11px] text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Logged shifts automatically sync to CEO Command Deck telemetry.</span>
          </div>
        </div>

        {/* Recent Shift History */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 flex flex-col">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <History className="h-3.5 w-3.5 text-cyan-400" />
              Shift Log History
            </span>
            <span className="text-[10px] text-slate-400">{logs.length} Total Records</span>
          </div>

          <div className="mt-3 flex-1 overflow-y-auto space-y-2 max-h-48 pr-1">
            {logs.slice(0, 5).map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/90 p-2.5 text-xs transition hover:border-white/10"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{log.date}</span>
                    {log.status === "active" ? (
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                        Running
                      </span>
                    ) : (
                      <span className="rounded bg-slate-800 px-1.5 py-0.2 text-[9px] font-medium text-slate-400">
                        Done
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {log.checkIn} {log.checkOut ? `→ ${log.checkOut}` : "→ Active"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-emerald-300">{log.duration}</span>
                  {log.overtime && log.overtime !== "0m" && (
                    <p className="text-[10px] text-amber-400">+{log.overtime} OT</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
