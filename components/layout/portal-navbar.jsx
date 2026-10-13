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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Badge */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-display font-black text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              Z
            </span>
            <div className="leading-tight">
              <span className="block font-display text-base font-extrabold tracking-tight text-slate-900">
                Zepra Agency OS
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                Internal Command Mesh
              </span>
            </div>
          </Link>

          <span className="hidden h-5 w-px bg-slate-200 sm:block" />

          {/* Current Mode Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">Active:</span>
            <strong className="text-slate-900 max-w-[120px] truncate sm:max-w-none">
              {currentUser ? currentUser.name : "Guest"}
            </strong>
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                currentUser?.role === "ceo"
                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                  : currentUser?.role === "admin"
                  ? "bg-blue-100 text-blue-800 border border-blue-200"
                  : "bg-emerald-100 text-emerald-800 border border-emerald-200"
              }`}
            >
              {currentUser?.role || "employee"}
            </span>
          </div>
        </div>

        {/* Portal Quick Navigation Switches */}
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {visibleLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all sm:gap-2 sm:px-3 ${
                  isActive
                    ? "border border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
                    : "border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                <span className="hidden md:inline">{item.label}</span>
                <span className="md:hidden">{item.badge}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Role Switcher & Back to Website */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Quick Demo Switcher dropdown / buttons */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 text-[10px] sm:text-[11px]">
            <span className="hidden xl:inline px-2 text-slate-500 font-medium">Switch Persona:</span>
            <button
              type="button"
              onClick={() => loginAs("ceo")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "ceo"
                  ? "bg-amber-500 text-white shadow"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              CEO
            </button>
            <button
              type="button"
              onClick={() => loginAs("admin")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "admin"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => loginAs("employee")}
              className={`rounded-lg px-2 py-1 font-bold transition-all ${
                currentUser?.role === "employee"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              Employee
            </button>
          </div>

          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 sm:px-3"
          >
            <span className="hidden sm:inline">Public Site</span>
            <span className="sm:hidden">Site</span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
