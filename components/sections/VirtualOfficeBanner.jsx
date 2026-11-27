"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Code2,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export function VirtualOfficeBanner() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-20 bg-[#0B0F17] text-white border-t border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-teal-500/30 bg-gradient-to-br from-[#0F172A]/90 via-[#0B0F17]/95 to-[#0F172A]/90 p-4 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(20,184,166,0.15)] backdrop-blur-2xl">
          
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-400/40 bg-teal-950/40 text-teal-300 text-xs font-semibold tracking-wide w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE 3D EXPERIENCE</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Dive Into Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">
                  Virtual Office
                </span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
                Explore our headquarters in real-time 3D. Control your visitor avatar, walk through our 
                engineering bays, meet our 13 specialized associates, and inspect verified client case studies directly from their active workstations.
              </p>

              {/* Feature Highlights Pills */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <Code2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-200">Dev & AI</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-200">SEO & Growth</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <ShoppingBag className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-200">E-Commerce</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/virtual-office"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-[0_10px_30px_rgba(20,184,166,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Compass className="w-4 h-4" />
                  <span>Enter 3D Virtual Office</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <Users className="w-4 h-4 text-teal-400" />
                  <span>Meet The Leadership</span>
                </Link>
              </div>

            </div>

            {/* Right Interactive Visual Preview Card */}
            <div className="lg:col-span-5">
              <Link
                href="/virtual-office"
                className="group relative block overflow-hidden rounded-2xl border border-teal-500/40 bg-[#090D16] p-6 shadow-2xl transition-all duration-300 hover:border-teal-400 hover:shadow-[0_15px_45px_rgba(20,184,166,0.3)]"
              >
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold text-white tracking-wider font-mono">
                      ZEPRA TECH 3D HQ
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-300">
                    LIVE CAMPUS
                  </span>
                </div>

                {/* Simulated Isometric Floor Preview Box */}
                <div className="my-5 rounded-xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Specialists On Duty</span>
                    <span className="font-mono text-teal-300 font-bold">13 Associates</span>
                  </div>
                  
                  {/* Department Indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2 text-xs border border-slate-800">
                      <span className="text-slate-300 font-medium">Lobby & Founder's Cabin</span>
                      <span className="text-amber-400 text-[10px] font-bold font-mono">DAUD LASHARI</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2 text-xs border border-slate-800">
                      <span className="text-slate-300 font-medium">Dev, SaaS & AI Automation</span>
                      <span className="text-teal-400 text-[10px] font-bold font-mono">4 WORKSTATIONS</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2 text-xs border border-slate-800">
                      <span className="text-slate-300 font-medium">SEO & Growth Marketing</span>
                      <span className="text-cyan-400 text-[10px] font-bold font-mono">4 WORKSTATIONS</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2 text-xs border border-slate-800">
                      <span className="text-slate-300 font-medium">Shopify, Liquid & 3D CGI</span>
                      <span className="text-blue-400 text-[10px] font-bold font-mono">4 WORKSTATIONS</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400 font-mono">
                    Zero Downloads • Works In Browser
                  </span>
                  <span className="text-xs font-bold text-teal-400 group-hover:underline flex items-center gap-1">
                    Launch Tour →
                  </span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
