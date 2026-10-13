"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Crown,
  Shield,
  Users,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  KeyRound,
  CheckCircle2,
  Building,
} from "lucide-react";
import { usePortalAuth } from "@/components/providers/portal-auth-provider";
import { Button } from "@/components/ui/button";

export default function PortalGatePage() {
  const router = useRouter();
  const { loginAs, registerUser } = usePortalAuth();
  const [activeTab, setActiveTab] = useState("login"); // login | register
  const [selectedRole, setSelectedRole] = useState("ceo");
  const [email, setEmail] = useState("daud@gozepra.tech");
  const [password, setPassword] = useState("••••••••••••");
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("Engineering");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === "ceo") {
      setEmail("daud@gozepra.tech");
    } else if (role === "admin") {
      setEmail("bilal@gozepra.tech");
    } else {
      setEmail("abdul@gozepra.tech");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginAs(selectedRole);
    if (selectedRole === "ceo") {
      router.push("/ceo");
    } else if (selectedRole === "admin") {
      router.push("/admin");
    } else {
      router.push("/employees");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerUser({
      name: fullName || "New Team Member",
      email,
      role: selectedRole,
      department,
      title: department === "Engineering" ? "Full Stack Engineer" : "Growth Specialist",
    });
    router.push(selectedRole === "ceo" ? "/ceo" : selectedRole === "admin" ? "/admin" : "/employees");
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)] overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8 text-slate-900 border-t border-slate-200">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[50rem] w-[70rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[35rem] w-[35rem] [background:radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Eyebrow */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
            <Lock className="h-3.5 w-3.5 text-blue-600" />
            Internal Agency OS &amp; RBAC Gate
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Zepra Tech Unified Portal Mesh
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Secure clearance gateway for Founder &amp; CEO oversight, Development Team website control, and Employee workspace execution.
          </p>
        </div>

        {/* Clearance Selectors */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* CEO Card */}
          <button
            type="button"
            onClick={() => handleRoleSelect("ceo")}
            className={`group flex flex-col rounded-2xl border p-5 text-left transition-all duration-300 ${
              selectedRole === "ceo"
                ? "border-amber-400 bg-amber-50/70 shadow-md ring-2 ring-amber-400/30"
                : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 text-amber-800 shadow-sm">
                <Crown className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                Clearance 5
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-amber-800">
              CEO Executive Deck
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Founder Mr. Daud Lashari: financial telemetry, live RFPs, and staging approvals.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-semibold text-amber-700">
              <span>Direct Route: /ceo</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </button>

          {/* Dev Team / Admin Card */}
          <button
            type="button"
            onClick={() => handleRoleSelect("admin")}
            className={`group flex flex-col rounded-2xl border p-5 text-left transition-all duration-300 ${
              selectedRole === "admin"
                ? "border-blue-400 bg-blue-50/70 shadow-md ring-2 ring-blue-400/30"
                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300 bg-blue-100 text-blue-800 shadow-sm">
                <Shield className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-800">
                Clearance 4
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-blue-800">
              Dev Team &amp; Admin CMS
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Full website controls, live demos catalog, pricing tiers, and system health.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-semibold text-blue-700">
              <span>Direct Route: /admin</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </button>

          {/* Employee Workspace Card */}
          <button
            type="button"
            onClick={() => handleRoleSelect("employee")}
            className={`group flex flex-col rounded-2xl border p-5 text-left transition-all duration-300 ${
              selectedRole === "employee"
                ? "border-emerald-400 bg-emerald-50/70 shadow-md ring-2 ring-emerald-400/30"
                : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-100 text-emerald-800 shadow-sm">
                <Users className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                Team Role
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-emerald-800">
              Employee Workspace
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Sprint deliverables, Kanban board, daily asynchronous standups &amp; tech guidelines.
            </p>
            <div className="mt-4 flex items-center text-[11px] font-semibold text-emerald-700">
              <span>Direct Route: /employees</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </button>
        </div>

        {/* Auth Box */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <h2 className="font-display text-base font-bold text-slate-900 sm:text-lg">
                {activeTab === "login" ? "Authentication Gate" : "Employee Registration"}
              </h2>
            </div>
            <div className="grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs sm:flex">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`rounded-lg px-3 py-1.5 font-semibold transition sm:py-1 ${
                  activeTab === "login"
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Access Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`rounded-lg px-3 py-1.5 font-semibold transition sm:py-1 ${
                  activeTab === "register"
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Register Employee
              </button>
            </div>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Corporate Email ID
                  </label>
                  <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Security Key / Token
                  </label>
                  <div className="relative mt-2">
                    <KeyRound className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* 1-Click Fast Pass */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800">
                <span className="font-bold text-slate-900">⚡ Instant Executive Pass Active:</span> Click below to enter the selected portal immediately with zero friction.
              </div>

              <div className="mt-6 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Encrypted 256-bit Session Mesh</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 font-extrabold text-white shadow-md hover:brightness-105 sm:w-auto"
                >
                  <span>Authorize &amp; Launch {selectedRole.toUpperCase()} Portal</span>
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hammad Khalid"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@gozepra.tech"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Department Unit
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Engineering">Engineering (Web / App / Cloud)</option>
                    <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                    <option value="Growth & Outreach">Growth &amp; Client Acquisition</option>
                    <option value="Design & Creative">UI/UX &amp; Creative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Target Role Clearance
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="employee">Employee / Specialist</option>
                    <option value="admin">Dev Team / Admin</option>
                    <option value="ceo">Executive (CEO Approval)</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold text-white shadow-md hover:brightness-105"
                >
                  <span>Register &amp; Open Employee Dashboard</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
