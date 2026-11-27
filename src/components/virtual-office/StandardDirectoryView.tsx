"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  ShoppingBag,
  UserCheck,
  Search,
  Box,
  Layers,
  Award,
  CheckCircle2,
  ExternalLink,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  Associate,
  FounderInfo,
  OFFICE_DEPARTMENTS,
  FOUNDER_DATA,
} from "@/src/data/officeDepartments";
import { officeAudio } from "./officeAudio";

interface StandardDirectoryViewProps {
  onSelectAssociate: (associate: Associate) => void;
  onSelectFounder: (founder: FounderInfo) => void;
  onSwitchTo3D: () => void;
}

export const StandardDirectoryView: React.FC<StandardDirectoryViewProps> = ({
  onSelectAssociate,
  onSelectFounder,
  onSwitchTo3D,
}) => {
  const [filter, setFilter] = useState<"all" | "dev" | "seo" | "ecom" | "founder">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allAssociates: (Associate | FounderInfo)[] = [
    FOUNDER_DATA,
    ...OFFICE_DEPARTMENTS.flatMap((d) => d.associates),
  ];

  const filteredItems = allAssociates.filter((item) => {
    const isFounder = "cabinPosition" in item;
    // Category filter
    if (filter === "dev" && (isFounder || (item as Associate).departmentId !== "dev")) return false;
    if (filter === "seo" && (isFounder || (item as Associate).departmentId !== "seo")) return false;
    if (filter === "ecom" && (isFounder || (item as Associate).departmentId !== "ecom")) return false;
    if (filter === "founder" && !isFounder) return false;

    // Search query filter
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchName = item.name.toLowerCase().includes(q);
    const matchRole = item.role.toLowerCase().includes(q);
    const matchSpecialty = item.specialty.toLowerCase().includes(q);
    const matchTags = item.portfolioItems.some((p) =>
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
    const matchProjects = item.portfolioItems.some((p) =>
      p.title.toLowerCase().includes(q)
    );
    return matchName || matchRole || matchSpecialty || matchTags || matchProjects;
  });

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-500/30">
                Standard View Directory
              </span>
              <span className="text-xs text-slate-400 font-mono">
                13 Specialists Online
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Zepra Tech Agency Specialists & Case Studies
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Explore completed work, verified metrics, and tech stacks across our 3 service bays and leadership.
            </p>
          </div>

          <button
            onClick={() => {
              officeAudio.playClick();
              onSwitchTo3D();
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-teal-500/50 bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:brightness-110 transition-all"
          >
            <Box className="w-4 h-4" />
            <span>Launch 3D Virtual Office</span>
          </button>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Specialists (13)" },
              { id: "dev", label: "Web & AI Engineering (4)" },
              { id: "seo", label: "SEO & Growth (4)" },
              { id: "ecom", label: "E-Commerce Studio (4)" },
              { id: "founder", label: "Founder (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  officeAudio.playClick();
                  setFilter(tab.id as any);
                }}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-teal-500/20 text-teal-300 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.25)]"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill, tag (e.g. Next.js, GMB)..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30"
            />
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isFounder = "cabinPosition" in item;
            const associate = item as Associate;

            return (
              <div
                key={item.id}
                onClick={() => {
                  officeAudio.playClick();
                  if (isFounder) {
                    onSelectFounder(item as FounderInfo);
                  } else {
                    onSelectAssociate(associate);
                  }
                }}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 cursor-pointer transition-all duration-200 ${
                  isFounder
                    ? "border-amber-500/30 bg-amber-950/10 hover:border-amber-400 hover:bg-amber-950/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                    : "border-slate-800 bg-slate-900/40 hover:border-teal-500/40 hover:bg-slate-900/70 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border font-bold text-sm ${
                          isFounder
                            ? "border-amber-400/50 bg-amber-950/50 text-amber-300"
                            : "border-teal-400/50 bg-teal-950/50 text-teal-300"
                        }`}
                      >
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white group-hover:text-teal-300 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-400">{item.role}</p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider border ${
                        isFounder
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                          : "border-teal-500/30 bg-teal-500/10 text-teal-300"
                      }`}
                    >
                      {isFounder ? "Founder" : associate.departmentId.toUpperCase()}
                    </span>
                  </div>

                  {/* Specialty */}
                  <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
                    <p className="text-[11px] text-teal-300 font-mono">
                      {item.specialty}
                    </p>
                  </div>

                  {/* Portfolio Snapshot Preview */}
                  <div className="mt-4 space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Highlighted Project:
                    </p>
                    <div className="rounded-lg bg-slate-950/40 p-2.5 border border-slate-800/50">
                      <p className="text-xs font-semibold text-white">
                        {item.portfolioItems[0]?.title}
                      </p>
                      <p className="text-[11px] text-teal-400/90 font-mono mt-0.5">
                        {item.portfolioItems[0]?.metrics}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:translate-x-0.5 transition-transform">
                  <span>View All {item.portfolioItems.length} Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
