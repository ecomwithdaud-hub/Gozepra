import {
  ArrowUpRight,
  Bot,
  CircleDollarSign,
  Cpu,
  Film,
  Globe,
  Headphones,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/TiltCard";

export const serviceIconMap = {
  Globe,
  Bot,
  Megaphone,
  MapPin,
  CircleDollarSign,
  Search,
  PenTool,
  ShoppingCart,
  Palette,
  Film,
  Headphones,
};

const capabilityProfiles = [
  { scalability: 98, performance: 99, roi: 96 },
  { scalability: 96, performance: 97, roi: 98 },
  { scalability: 95, performance: 96, roi: 99 },
  { scalability: 94, performance: 98, roi: 95 },
];

export function ServiceCard({
  service,
  index = 0,
  agencyLabel = "Agency service",
}) {
  const Icon = serviceIconMap[service.icon] || Globe;
  const href = service.href || `/services/${service.slug}`;
  const engineStack =
    service.technologies?.slice(0, 3).join(" / ") || "Next.js / Cloud / Edge";
  const metrics = capabilityProfiles[index % capabilityProfiles.length];

  return (
    <TiltCard cursorLabel="EXPLORE" className="h-full rounded-[28px]">
      <Link
        href={href}
        data-cursor="EXPLORE"
        aria-label={`View ${service.title} details`}
        className="group block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
      >
        <Card className="card-shine relative flex h-full flex-col justify-between overflow-hidden border border-slate-200/90 bg-white text-slate-900 shadow-soft transition-all duration-300 group-hover:border-blue-400/60 group-hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)]">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-slate-600">
                  SERVICE // {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:border-blue-400 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="w-fit border-slate-200 bg-slate-100 text-slate-700">
                {agencyLabel}
              </Badge>
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                <Cpu className="h-3 w-3 text-blue-600" />
                Engine: {engineStack}
              </span>
            </div>

            <CardTitle className="pt-2 text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col justify-between space-y-5">
            <p className="text-[15px] leading-7 text-slate-600">
              {service.summary || service.shortDescription}
            </p>

            {/* DevCrafter-Inspired Live Capability Bars */}
            <div className="space-y-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5">
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Scalability</span>
                  <span className="text-slate-900 font-mono">{metrics.scalability}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-500 transition-all duration-500"
                    style={{ width: `${metrics.scalability}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Performance</span>
                  <span className="text-slate-900 font-mono">{metrics.performance}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                    style={{ width: `${metrics.performance}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>ROI Impact</span>
                  <span className="text-slate-900 font-mono">{metrics.roi}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-500"
                    style={{ width: `${metrics.roi}%` }}
                  />
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
              Explore Architecture & Deliverables
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </TiltCard>
  );
}
