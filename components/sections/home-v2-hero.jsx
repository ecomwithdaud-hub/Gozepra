"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Play } from "lucide-react";

import { siteMeta } from "@/lib/site";

const INDUSTRIES = [
  {
    id: "home-services",
    label: "Home Services",
    headline: "Roofers, plumbers, and HVAC teams",
    points: [
      "Tap-to-call buttons on every screen",
      "Instant quote and service area checker",
      "Google Maps setup for your service area",
    ],
    demoName: "Summit Commercial Roofing",
    demoUrl: "https://summit-roofing-demo.vercel.app/",
  },
  {
    id: "clinics",
    label: "Clinics and MedSpas",
    headline: "Dentists, MedSpas, and doctors",
    points: [
      "Online booking and patient intake forms",
      "Before and after galleries that build trust",
      "AI assistant that answers booking questions",
    ],
    demoName: "Glow Aesthetics and MedSpa",
    demoUrl: "https://glow-medspa.vercel.app/",
  },
  {
    id: "shops",
    label: "Shops and Restaurants",
    headline: "Boutiques, cafes, and restaurants",
    points: [
      "Fast online store with smooth checkout",
      "Menus, reservations, and directions in one tap",
      "AI assistant that takes orders after hours",
    ],
    demoName: "Crumb and Craft Bakery",
    demoUrl: "https://crumbandcraft-bakery-demo.vercel.app/",
  },
];

export function HomeV2Hero() {
  const [active, setActive] = useState(INDUSTRIES[0]);

  return (
    <section className="relative isolate overflow-hidden bg-white pt-28 pb-16 text-slate-900 sm:pt-36 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-sky-400/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Zepra Tech, a US based digital agency</span>
            <span className="text-blue-300">|</span>
            <span>Accepting new projects</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Build digital systems that move your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              business forward
            </span>
            .
          </h1>

          <p className="mt-4 font-display text-base font-semibold text-blue-700 sm:text-lg">
            Where ideas turn into impact.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Websites, AI assistants, and growth marketing for US small
            businesses. One team, one fixed price, launched in 2 to 3 weeks.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.03] hover:bg-blue-700 sm:w-auto"
            >
              <span>Book a free consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 text-sm font-bold text-slate-800 transition-all hover:border-blue-400 hover:text-blue-700 sm:w-auto"
            >
              <span>View our work</span>
              <ArrowUpRight className="h-4 w-4 text-blue-600" />
            </Link>
            <a
              href={`tel:${siteMeta.phoneRaw}`}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-sm font-bold text-white transition-all hover:scale-[1.03] hover:bg-slate-800 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              <span>{siteMeta.phone}</span>
            </a>
          </div>

          <p className="mt-5 text-xs font-medium text-slate-500 sm:text-sm">
            Response within 24 hours, fixed pricing, you own 100% of the code.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-950/5">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700">
                Pick your business, see what we build
              </span>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-slate-100 bg-white px-4 py-3 sm:px-6">
              {INDUSTRIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                    active.id === item.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  <Play className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  {active.headline}
                </h2>
                <ul className="mt-4 space-y-3">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={active.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100 sm:text-sm"
                >
                  <span>Open the {active.demoName} live demo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="rounded-xl bg-blue-600 px-4 py-3 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-100">
                    Your business, online
                  </p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug">
                    {active.headline}
                  </p>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-11/12 rounded-full bg-slate-200" />
                  <div className="h-3 w-8/12 rounded-full bg-slate-200" />
                  <div className="h-3 w-9/12 rounded-full bg-slate-200" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-slate-200 bg-white px-2 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Call</p>
                    <p className="mt-1 text-xs font-bold text-blue-700">Tap to call</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-2 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Book</p>
                    <p className="mt-1 text-xs font-bold text-blue-700">Book online</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-2 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Quote</p>
                    <p className="mt-1 text-xs font-bold text-blue-700">Get a quote</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-600"
                >
                  <span>Get a website like this</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
