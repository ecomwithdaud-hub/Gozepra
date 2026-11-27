"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Volume2,
  VolumeX,
  Code2,
  TrendingUp,
  ShoppingBag,
  UserCheck,
  Building2,
  Eye,
  Maximize2,
  HelpCircle,
  X,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Home,
  Zap,
} from "lucide-react";
import {
  Department,
  Associate,
  FounderInfo,
  OFFICE_DEPARTMENTS,
  OFFICE_WAYPOINTS,
  FOUNDER_DATA,
} from "@/src/data/officeDepartments";
import { officeAudio } from "./officeAudio";

interface OfficeHUDProps {
  currentLocationId: string; // "reception" | "dev" | "seo" | "ecom" | "founder"
  onNavigateZone: (
    zoneId: "reception" | "dev" | "seo" | "ecom" | "founder"
  ) => void;
  onResetCamera: () => void;
  onToggleStandardView: () => void;
  isStandardView: boolean;
  onSelectFounder: (founder: FounderInfo) => void;
  hoveredAssociate?: Associate | null;
  hoveredFounder?: boolean;
  onSelectAssociate?: (associate: Associate) => void;
  isFastMode?: boolean;
  onToggleFastMode?: () => void;
}

export const OfficeHUD: React.FC<OfficeHUDProps> = ({
  currentLocationId,
  onNavigateZone,
  onResetCamera,
  onToggleStandardView,
  isStandardView,
  onSelectFounder,
  hoveredAssociate,
  hoveredFounder,
  onSelectAssociate,
  isFastMode = true,
  onToggleFastMode,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    officeAudio.setMuted(nextState);
    if (!nextState) officeAudio.playClick();
  };

  const navItems = [
    {
      id: "reception" as const,
      label: "Reception",
      sub: "Lobby & Entry",
      icon: Building2,
      color: "teal",
    },
    {
      id: "dev" as const,
      label: "Dev & AI Team",
      sub: "SaaS & Automations",
      icon: Code2,
      color: "teal",
    },
    {
      id: "seo" as const,
      label: "SEO & Growth",
      sub: "GMB & Demand Gen",
      icon: TrendingUp,
      color: "cyan",
    },
    {
      id: "ecom" as const,
      label: "E-Commerce Studio",
      sub: "Shopify & 3D CGI",
      icon: ShoppingBag,
      color: "blue",
    },
    {
      id: "founder" as const,
      label: "Founder's Cabin",
      sub: "Daud Lashari",
      icon: UserCheck,
      color: "amber",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-3 sm:p-5 select-none overflow-hidden">
      {/* ======================================================== */}
      {/* 1. TOP HEADER BAR */}
      {/* ======================================================== */}
      <header className="flex items-center justify-between gap-3 w-full">
        {/* Brand & Live Indicator */}
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-teal-500/30 bg-[#0B0F17]/85 px-3.5 py-2 text-white shadow-[0_0_25px_rgba(20,184,166,0.2)] backdrop-blur-xl">
          <Link
            href="/"
            onClick={() => officeAudio.playClick()}
            className="flex items-center gap-2 group text-xs text-slate-400 hover:text-teal-300 transition-colors"
          >
            <Home className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline font-medium">Exit HQ</span>
          </Link>

          <div className="h-4 w-[1px] bg-slate-800" />

          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1.5">
              ZEPRA TECH
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                3D HQ
              </span>
            </span>
          </div>

          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          {/* Active Status Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>13 Specialists Active</span>
          </div>
        </div>

        {/* Top Control Actions */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Help Button */}
          <button
            onClick={() => {
              officeAudio.playClick();
              setShowHelp(!showHelp);
            }}
            title="Office Guide"
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0B0F17]/85 p-2 text-slate-300 hover:border-teal-500/40 hover:text-teal-300 shadow-lg backdrop-blur-xl transition-all"
          >
            <HelpCircle className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-medium hidden md:inline">Guide</span>
          </button>

          {/* Reset Camera Overview */}
          <button
            onClick={() => {
              officeAudio.playClick();
              onResetCamera();
            }}
            title="Reset Camera Overview"
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0B0F17]/85 p-2 text-slate-300 hover:border-teal-500/40 hover:text-teal-300 shadow-lg backdrop-blur-xl transition-all"
          >
            <Maximize2 className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-medium hidden md:inline">Overview</span>
          </button>

          {/* Fast / Smooth Mode Toggle */}
          <button
            onClick={() => {
              officeAudio.playClick();
              onToggleFastMode?.();
            }}
            title={isFastMode ? "Currently in Ultra-Smooth Mode (60 FPS on any laptop). Click for High Quality." : "Currently in High-Quality Mode. Click for Ultra-Smooth Mode."}
            className={`flex items-center gap-1.5 rounded-xl border p-2 shadow-lg backdrop-blur-xl transition-all ${
              isFastMode
                ? "border-teal-400/50 bg-teal-950/40 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.25)]"
                : "border-slate-800 bg-[#0B0F17]/85 text-slate-300 hover:border-teal-500/40 hover:text-teal-300"
            }`}
          >
            <Zap className={`w-4 h-4 ${isFastMode ? "text-teal-400 fill-teal-400" : "text-slate-400"}`} />
            <span className="text-xs font-semibold hidden md:inline">
              {isFastMode ? "Smooth 60FPS" : "Studio"}
            </span>
          </button>

          {/* Mute Audio Toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
            className="rounded-xl border border-slate-800 bg-[#0B0F17]/85 p-2 text-slate-300 hover:border-teal-500/40 hover:text-teal-300 shadow-lg backdrop-blur-xl transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-teal-400" />
            )}
          </button>

          {/* Standard 2D View Fallback Toggle */}
          <button
            onClick={() => {
              officeAudio.playClick();
              onToggleStandardView();
            }}
            className="flex items-center gap-1.5 rounded-xl border border-teal-500/40 bg-teal-950/40 px-3 py-2 text-xs font-semibold text-teal-300 hover:bg-teal-900/50 hover:border-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)] backdrop-blur-xl transition-all"
          >
            <Eye className="w-4 h-4 text-teal-400" />
            <span>{isStandardView ? "Switch to 3D HQ" : "Standard View"}</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. RECEPTION WELCOME CARD (DISMISSIBLE) */}
      {/* ======================================================== */}
      {showWelcome && currentLocationId === "reception" && (
        <div className="pointer-events-auto self-start mt-3 sm:mt-4 max-w-sm sm:max-w-md rounded-2xl border border-teal-500/35 bg-[#0B0F17]/95 p-4 sm:p-5 text-slate-100 shadow-[0_0_35px_rgba(20,184,166,0.25)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/40">
                <Sparkles className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">
                  Welcome to Zepra Tech 3D HQ
                </h3>
                <p className="text-[11px] text-teal-400 font-mono">
                  Interactive Agency Campus
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                officeAudio.playClick();
                setShowWelcome(false);
              }}
              className="rounded-full p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Follow your <strong className="text-teal-300">"YOU"</strong> avatar
            around the office. Click on any department bay to walk there, and
            click on any of our 4 associates per bay to inspect their completed
            client projects and verified metrics.
          </p>

          {/* Quick Department Shortcuts */}
          <div className="mt-3.5 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                officeAudio.playClick();
                onNavigateZone("dev");
              }}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-left hover:border-teal-500/40 hover:bg-teal-950/30 transition-all"
            >
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  Dev & AI Team
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button
              onClick={() => {
                officeAudio.playClick();
                onNavigateZone("seo");
              }}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-left hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all"
            >
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  SEO & Growth
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button
              onClick={() => {
                officeAudio.playClick();
                onNavigateZone("ecom");
              }}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-left hover:border-blue-500/40 hover:bg-blue-950/30 transition-all"
            >
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  E-Commerce Studio
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button
              onClick={() => {
                officeAudio.playClick();
                onNavigateZone("founder");
              }}
              className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-950/20 p-2 text-left hover:border-amber-400 hover:bg-amber-950/40 transition-all"
            >
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold text-amber-200">
                  Daud Lashari
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-amber-500" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. INTERACTION HELP OVERLAY (MODAL-LIKE CARD) */}
      {/* ======================================================== */}
      {showHelp && (
        <div className="pointer-events-auto self-center max-w-md rounded-2xl border border-teal-500/40 bg-[#0B0F17]/95 p-5 text-slate-100 shadow-[0_0_50px_rgba(20,184,166,0.3)] backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-400" />
              How to Navigate 3D Virtual HQ
            </h3>
            <button
              onClick={() => setShowHelp(false)}
              className="rounded-full p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-3 space-y-2 text-xs text-slate-300">
            <p>
              • <strong>Avatar Movement:</strong> Click any bay button below or
              click on the floor/associates to walk your "YOU" avatar there.
            </p>
            <p>
              • <strong>Portfolio Case Studies:</strong> Hover any team
              specialist to view their role and click to open their completed
              work with verified metrics.
            </p>
            <p>
              • <strong>Camera Orbit & Zoom:</strong> Drag with left mouse
              button to orbit; scroll to zoom in/out; drag with right mouse
              button to pan.
            </p>
            <p>
              • <strong>Founder's Office:</strong> Visit Daud Lashari's cabin to
              review strategic tech architecture consulting and enterprise
              deliveries.
            </p>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3.5. FLOATING ACTIVE SPECIALIST HOVER PILL */}
      {/* ======================================================== */}
      {hoveredAssociate && (
        <div
          onClick={() => {
            officeAudio.playClick();
            onSelectAssociate?.(hoveredAssociate);
          }}
          className="pointer-events-auto self-center mb-2 z-40 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-150 select-none"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-teal-400/60 bg-[#0B0F17]/95 px-4 py-2.5 shadow-[0_12px_40px_rgba(20,184,166,0.4)] backdrop-blur-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 font-bold text-xs border border-teal-500/30">
              {hoveredAssociate.name[0]}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-xs tracking-wide">
                  {hoveredAssociate.name}
                </span>
                <span className="rounded-full bg-teal-500/20 px-1.5 py-0.5 text-[9px] font-bold text-teal-300 uppercase">
                  {hoveredAssociate.departmentId.toUpperCase()}
                </span>
              </div>
              <p className="text-[11px] text-teal-300/90 font-medium font-mono">
                {hoveredAssociate.role} • {hoveredAssociate.specialty}
              </p>
            </div>
            <div className="ml-2 flex items-center gap-1 rounded-xl bg-teal-500/20 px-3 py-1.5 text-[11px] font-semibold text-teal-300 border border-teal-500/30">
              <span>View Portfolio</span>
              <span className="text-teal-400 font-bold">→</span>
            </div>
          </div>
        </div>
      )}

      {hoveredFounder && (
        <div
          onClick={() => {
            officeAudio.playClick();
            onSelectFounder(FOUNDER_DATA);
          }}
          className="pointer-events-auto self-center mb-2 z-40 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-150 select-none"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-amber-400/60 bg-[#0B0F17]/95 px-4 py-2.5 shadow-[0_12px_40px_rgba(245,158,11,0.4)] backdrop-blur-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
              DL
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-xs tracking-wide">
                  {FOUNDER_DATA.name}
                </span>
                <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300 uppercase">
                  FOUNDER
                </span>
              </div>
              <p className="text-[11px] text-amber-300/90 font-medium">
                {FOUNDER_DATA.role} • {FOUNDER_DATA.specialty}
              </p>
            </div>
            <div className="ml-2 flex items-center gap-1 rounded-xl bg-amber-500/20 px-3 py-1.5 text-[11px] font-semibold text-amber-300 border border-amber-500/30">
              <span>Talk with Daud</span>
              <span className="text-amber-400 font-bold">→</span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. PERSISTENT FLOATING BOTTOM NAVIGATION DOCK */}
      {/* ======================================================== */}
      <footer className="pointer-events-auto self-center w-full max-w-3xl pb-1 px-2 sm:px-4">
        <div className="flex items-center justify-between gap-1 sm:gap-2 rounded-2xl border border-teal-500/30 bg-[#0B0F17]/90 p-1.5 sm:p-2 text-white shadow-[0_0_35px_rgba(20,184,166,0.2)] backdrop-blur-2xl overflow-x-auto custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentLocationId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  officeAudio.playClick();
                  onNavigateZone(item.id);
                }}
                className={`group relative flex-1 min-w-[70px] sm:min-w-[130px] flex items-center gap-2 rounded-xl px-2.5 py-2 transition-all duration-200 ${
                  isActive
                    ? item.id === "founder"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                      : "bg-teal-500/20 text-teal-300 border border-teal-400/50 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent"
                }`}
              >
                <div
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg ${
                    isActive
                      ? item.id === "founder"
                        ? "bg-amber-500 text-slate-950 font-bold"
                        : "bg-teal-400 text-slate-950 font-bold"
                      : "bg-slate-800/80 text-slate-400 group-hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div className="hidden sm:flex flex-col text-left">
                  <span className="font-bold text-xs tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                    {item.sub}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
};
