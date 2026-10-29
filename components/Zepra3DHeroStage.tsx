"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  Server,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { STATIONS } from "@/components/CameraRig";

// Dynamically import the 3D Experience with SSR disabled to prevent hydration mismatches
const Zepra3DExperience = dynamic(
  () =>
    import("@/components/Zepra3DExperience").then(
      (mod) => mod.Zepra3DExperience
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-slate-50/50">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="h-2 w-2 animate-ping rounded-full bg-blue-600" />
          <span>Loading Zepra 3D Scene...</span>
        </div>
      </div>
    ),
  }
);

const stationIcons = [Bot, Layers, Server, TrendingUp];

const stationDetails = [
  {
    kpi: "Autonomous AI Agents",
    metric: "sub-1.2s",
    metricLabel: "Response Latency",
    desc: "Autonomous workflow bots, custom LLM fine-tuning, and deterministic multi-agent systems designed for scale.",
    badge: "Level 4 Automation",
    link: "/services/ai-agents-bots",
  },
  {
    kpi: "Enterprise Next.js 15",
    metric: "99.8%",
    metricLabel: "Core Web Vitals",
    desc: "Full-stack React 19 web platforms, custom CMS portals, and headless e-commerce built with zero generic templates.",
    badge: "100% IP Ownership",
    link: "/services/web-development",
  },
  {
    kpi: "Cloud & Edge Deployment",
    metric: "< 0.8s",
    metricLabel: "Global Edge TTFB",
    desc: "Sub-second edge caching, automated CI/CD pipelines, and zero-downtime serverless microservices.",
    badge: "Fixed-Price SLA",
    link: "/services/ecommerce-solutions",
  },
  {
    kpi: "Performance Marketing",
    metric: "+54%",
    metricLabel: "Avg Conversion Lift",
    desc: "AEO, GEO, and search dominance combined with high-ROAS viral paid ad architectures.",
    badge: "Verified ROI Proof",
    link: "/services/social-media-marketing",
  },
];

export function Zepra3DHeroStage() {
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const currentStation = STATIONS[activeStationIndex] || STATIONS[0];
  const currentDetail = stationDetails[activeStationIndex] || stationDetails[0];

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50/60 via-white to-blue-50/20">
      {/* 3D Scene Container */}
      <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[640px]">
        {/* The 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Zepra3DExperience activeStationIndex={activeStationIndex} />
        </div>

        {/* Ambient Top Glow Layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent"
        />

        {/* Top Floating HUD Indicator */}
        <div className="pointer-events-none absolute inset-x-0 top-4 z-10 flex justify-center px-4">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
              Interactive 3D Engine // Click Stations to Navigate
            </span>
          </div>
        </div>

        {/* Playful Interactive Navigation Bar */}
        <div className="absolute inset-x-0 top-16 z-20 flex justify-center px-4 sm:top-20">
          <nav
            aria-label="3D Station Navigator"
            className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/95 p-1.5 shadow-lg backdrop-blur-xl no-scrollbar sm:gap-2 sm:rounded-full sm:p-2"
          >
            {STATIONS.map((station, index) => {
              const Icon = stationIcons[index] || Zap;
              const isActive = activeStationIndex === index;

              return (
                <button
                  key={station.id}
                  type="button"
                  onClick={() => setActiveStationIndex(index)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 sm:rounded-full sm:px-4 sm:py-2 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? "text-white" : "text-blue-600"
                    }`}
                  />
                  <span className="hidden md:inline">{station.name}</span>
                  <span className="md:hidden">{station.shortName}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white shadow-sm" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Floating Telemetry & Metric Card */}
        <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-4 sm:bottom-6">
          <div className="w-full max-w-3xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Station Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    Station 0{activeStationIndex + 1} // {currentStation.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
                  {currentDetail.kpi}
                </h3>
                <p className="max-w-xl text-xs leading-relaxed text-slate-600 line-clamp-2 sm:line-clamp-none">
                  {currentDetail.desc}
                </p>
              </div>

              {/* Metric & CTA button */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-t border-slate-100 pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                <div className="text-left sm:text-right">
                  <div className="font-mono text-xl font-black text-blue-600 sm:text-2xl">
                    {currentDetail.metric}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {currentDetail.metricLabel}
                  </div>
                </div>

                <Link
                  href={currentDetail.link}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
                >
                  <span>Explore Module</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
