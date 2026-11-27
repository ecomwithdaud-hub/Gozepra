"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  ExternalLink,
  Mail,
  Award,
  Layers,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Associate, FounderInfo } from "@/src/data/officeDepartments";
import { officeAudio } from "./officeAudio";

interface PortfolioModalProps {
  data: Associate | FounderInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      officeAudio.playChime();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const isFounder = "cabinPosition" in data;
  const contactSubject = encodeURIComponent(
    `Project Inquiry: Working with ${data.name} (${data.role})`
  );
  const contactHref = `/contact?associate=${encodeURIComponent(
    data.name
  )}&role=${encodeURIComponent(data.role)}`;
  const mailtoHref = `mailto:info@gozepra.tech?subject=${contactSubject}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-teal-500/30 bg-[#0B0F17]/95 text-slate-100 shadow-[0_0_50px_rgba(20,184,166,0.25)] backdrop-blur-2xl p-5 sm:p-7 custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow Edge Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
            isFounder
              ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500"
              : "bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500"
          }`}
        />

        {/* Close Button */}
        <button
          onClick={() => {
            officeAudio.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-6 border-b border-slate-800">
          {/* Avatar Initials Badge */}
          <div
            className={`flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl border ${
              isFounder
                ? "border-amber-400/50 bg-amber-950/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                : "border-teal-400/50 bg-teal-950/40 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            } font-bold text-2xl tracking-tight`}
          >
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {data.name}
              </h2>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider border ${
                  isFounder
                    ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                    : "border-teal-500/30 bg-teal-500/10 text-teal-300"
                }`}
              >
                {isFounder ? "Founder & Director" : (data as Associate).departmentName}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-teal-400 inline" />
              {data.role}
            </p>

            <p className="text-xs text-teal-300/90 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Specialty: {data.specialty}
            </p>
          </div>
        </div>

        {/* Founder Bio or Specialist Summary */}
        {"summary" in data && data.summary && (
          <div className="my-5 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {data.summary}
          </div>
        )}

        {/* Case Studies & Portfolio Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-400" />
              Completed Projects & Verified Case Studies
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {data.portfolioItems.length} Case Studies
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {data.portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-5 transition-all duration-200 hover:border-teal-500/40 hover:bg-slate-900/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-800/60">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400">{item.clientType}</p>
                  </div>
                </div>

                {/* Performance Metrics Highlight */}
                <div className="my-3 inline-flex items-center gap-1.5 rounded-lg border border-teal-500/25 bg-teal-950/40 px-3 py-1.5 text-xs font-semibold text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{item.metrics}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-slate-700/60 bg-slate-800/50 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-800">
          <button
            onClick={() => {
              officeAudio.playClick();
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            Close / Keep Exploring HQ
          </button>

          <div className="flex w-full sm:w-auto items-center gap-2">
            <a
              href={mailtoHref}
              onClick={() => officeAudio.playClick()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-teal-500/40 bg-teal-950/50 hover:bg-teal-900/60 text-teal-300 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(20,184,166,0.15)]"
            >
              <Mail className="w-4 h-4" />
              <span>Email info@gozepra.tech</span>
            </a>

            <Link
              href={contactHref}
              onClick={() => officeAudio.playClick()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all"
            >
              <span>Request Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
