"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { siteMeta } from "@/lib/site";

export function QuickConnectDock() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Direct Voice Call",
      sub: siteMeta.phone || "+1 (302) 208-9675",
      href: `tel:${siteMeta.phoneRaw || "+13022089675"}`,
      icon: Phone,
      external: true,
      accent: "from-emerald-400 to-teal-400 text-slate-950",
    },
    {
      label: "Book a Strategy Call",
      sub: "24-hour response roadmap",
      href: "/contact",
      icon: Calendar,
      external: false,
      accent: "from-brand-blue to-brand-cyan text-slate-950",
    },
    {
      label: "Email Engineering Team",
      sub: siteMeta.email || "info@gozepra.tech",
      href: `mailto:${siteMeta.email || "info@gozepra.tech"}`,
      icon: Mail,
      external: true,
      accent: "from-sky-500 to-cyan-400 text-slate-950",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex flex-col items-end gap-3">
      {/* Expanded Multi-Channel Dock */}
      {open ? (
        <div className="w-72 overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-xl sm:w-80">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-700">
                  Quick Connect Dock
                </p>
                <p className="text-[11px] text-slate-500">
                  Available for Web, AI & Growth Builds
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close quick connect menu"
              className="rounded-full border border-slate-200 bg-slate-100 p-1.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {actions.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} shadow-sm`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      {item.label}
                    </div>
                    <div className="truncate text-[11px] text-slate-500">
                      {item.sub}
                    </div>
                  </div>
                </>
              );

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LET'S GO"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 transition-all hover:border-blue-400 hover:bg-blue-50/50"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  data-cursor="LET'S GO"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 transition-all hover:border-blue-400 hover:bg-blue-50/50"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Floating Pill Trigger */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          data-cursor="LET'S GO"
          aria-expanded={open}
          aria-label="Toggle Quick Connect Dock"
          className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Phone className="h-4 w-4" />
            )}
          </span>
          <span className="pr-1">Quick Connect</span>
        </button>
      </div>
    </div>
  );
}
