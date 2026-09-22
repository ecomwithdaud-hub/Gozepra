import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
}) {
  return (
    <section className="section-shell relative overflow-hidden pt-16">
      <div className="container">
        <div className="surface-panel relative overflow-hidden bg-white/[0.88] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-brand-radial opacity-90 lg:block" />
          <div className="relative max-w-4xl">
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="muted-copy mt-6 max-w-3xl text-base md:text-lg">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryAction ? (
                <Button asChild size="xl">
                  <Link href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button asChild size="xl" variant="outline">
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              ) : null}
            </div>

            {stats.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-slate-200/70 bg-white/[0.85] p-5 shadow-soft">
                    <div className="font-display text-2xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-brand-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
