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
  Target,
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
  Target,
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
    service.technologies?.slice(0, 3).join(" • ") || "Next.js • React • Cloud";
  const profile = capabilityProfiles[index % capabilityProfiles.length];
  const serviceNumber = String(index + 1).padStart(2, "0");

  return (
    <TiltCard
      cursorLabel="VIEW SERVICE"
      className="group h-full rounded-3xl"
    >
      <Card className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl sm:p-7">
        {/* Subtle Ambient Top Border Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-mono text-xs font-bold text-slate-400">
                /{serviceNumber}
              </span>
            </div>

            <Badge
              variant="outline"
              className="border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-600"
            >
              {agencyLabel}
            </Badge>
          </div>

          <div className="mt-5 space-y-1">
            <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-blue-600">
              <Cpu className="h-3 w-3" />
              <span>{engineStack}</span>
            </p>
            <CardTitle className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              <Link href={href} className="focus:outline-none">
                {service.title}
              </Link>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="mt-3 flex flex-1 flex-col justify-between p-0">
          <p className="text-sm leading-relaxed text-slate-600">
            {service.summary || service.shortDescription}
          </p>

          <div className="mt-6 border-t border-slate-100 pt-4">
            {/* Live Capability Meters */}
            <div className="grid grid-cols-3 gap-2 py-2 text-center">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Scale
                </p>
                <p className="font-mono text-xs font-black text-slate-900">
                  {profile.scalability}%
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Speed
                </p>
                <p className="font-mono text-xs font-black text-slate-900">
                  {profile.performance}%
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  ROI
                </p>
                <p className="font-mono text-xs font-black text-emerald-600">
                  +{profile.roi}%
                </p>
              </div>
            </div>

            <Link
              href={href}
              className="mt-4 inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <span>Explore Capability</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </TiltCard>
  );
}
