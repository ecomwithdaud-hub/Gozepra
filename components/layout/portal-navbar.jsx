"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Crown,
  LayoutDashboard,
  Users,
  Briefcase,
  ShieldAlert,
  Sliders,
  LogOut,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { usePortalAuth } from "@/components/providers/portal-auth-provider";

export function PortalNavbar({ currentPortal = "ceo" }) {
  const pathname = usePathname();
  const { currentUser, loginAs, logout } = usePortalAuth();

  const allLinks = [
    {
      label: "CEO Command Deck",
      href: "/ceo",
      icon: Crown,
      badge: "Executive",
      roleRequired: "ceo",
      accent: "from-amber-400 to-yellow-500",
    },
    {
      label: "Dev Team & Admin CMS",
      href: "/admin",
      icon: Sliders,
      badge: "Ops & CMS",
      roleRequired: "admin", // Accessible by 'admin' and 'ceo'
      accent: "from-cyan-400 to-blue-500",
    },
    {
      label: "Employee Workspace",
      href: "/employees",
      icon: Users,
      badge: "Team",
      roleRequired: "employee", // Accessible by all authenticated roles
      accent: "from-emerald-400 to-teal-500",
    },
  ];

  // RBAC Navigation filtering:
  // - employee: only sees Employee Workspace
  // - admin: sees Dev Team & Admin CMS + Employee Workspace
  // - ceo: sees all three
  const visibleLinks = allLinks.filter((item) => {
    if (!currentUser) return item.roleRequired === "employee";
    if (currentUser.role === "ceo") return true;
    if (currentUser.role === "admin") {
      return item.roleRequired === "admin" || item.roleRequired === "employee";
    }
    // Employee
    return item.roleRequired === "employee";
  });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Badge */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 font-display font-black text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              Z
            </span>
            <div className="leading-tight">
              <span className="block font-display text-base font-extrabold tracking-tight text-white">
                Zepra Agency OS
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                Internal Command Mesh
              </span>
            </div>
          </Link>

          <span className="hidden h-5 w-px bg-white/10 sm:block" />

          {/* Current Mode Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Active:</span>
            <strong className="text-white max-w-[120px] truncate sm:max-w-none">
              {currentUser ? currentUser.name : "Guest"}
            </strong>
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                currentUser?.role === "ceo"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                  : currentUser?.role === "admin"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
              }`}
            >
              {currentUser?.role || "employee"}
            </span>
          </div>
        </div>

        {/* Portal Quick Navigation Switches */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {visibleLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "border border-cyan-400/40 bg-gradient-to-r from-slate-900 to-slate-800 text-cyan-300 shadow-sm"
                    : "border border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Role Switcher & Back to Website */}
        <div className="flex items-center gap-2">
          {/* Quick Demo Switcher dropdown / buttons */}
          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-slate-900/80 p-1 text-[11px]">
            <span className="hidden xl:inline px-2 text-slate-400 font-medium">Switch Persona:</span>
            <button
              type="button"
              onClick={() => loginAs("ceo")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "ceo"
                  ? "bg-amber-400 text-slate-950 shadow"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              CEO
            </button>
            <button
              type="button"
              onClick={() => loginAs("admin")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "admin"
                  ? "bg-cyan-400 text-slate-950 shadow"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              Dev/Admin
            </button>
            <button
              type="button"
              onClick={() => loginAs("employee")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "employee"
                  ? "bg-emerald-400 text-slate-950 shadow"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              Employee
            </button>
          </div>

          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-white"
          >
            <span>Public Site</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}
