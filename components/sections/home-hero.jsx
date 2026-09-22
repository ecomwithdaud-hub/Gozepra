import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { companyStats, heroHighlights } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_18%,rgba(56,198,255,0.16),transparent_22%),radial-gradient(circle_at_78%_16%,rgba(18,119,255,0.16),transparent_26%),linear-gradient(180deg,rgba(232,242,255,0.55),transparent_72%)]" />
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="max-w-3xl">
            <div className="eyebrow animate-slide-up">
              Premium digital solutions agency
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-slate-950 sm:text-5xl lg:text-[4.5rem]">
              Web, AI, and growth systems built for{" "}
              <span className="headline-gradient">serious business momentum.</span>
            </h1>
            <p className="muted-copy mt-6 max-w-2xl text-base md:text-lg">
              Zepra Tech helps businesses in Pakistan and international markets
              launch credible digital experiences, automate operations, and
              scale their online presence through modern development, marketing,
              ecommerce, design, and support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/services">Book a Consultation</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="metric-chip">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Professional delivery structure
              </div>
              <div className="metric-chip">
                <Bot className="h-4 w-4 text-primary" />
                AI + web execution
              </div>
              <div className="metric-chip">
                <LineChart className="h-4 w-4 text-primary" />
                Growth-focused strategy
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {companyStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`surface-panel animate-slide-up px-5 py-5 ${index % 2 === 0 ? "stagger-1" : "stagger-2"}`}
                >
                  <div className="font-display text-2xl font-semibold text-slate-950">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-4 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute right-0 top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-10 right-12 h-28 w-28 rounded-full bg-brand-navy/15 blur-3xl" />

            <div className="hero-card card-shine min-h-[560px]">
              <div className="absolute inset-0 bg-brand-radial opacity-70" />
              <div className="absolute right-6 top-8 h-24 w-24 animate-pulse-glow rounded-full bg-primary/30 blur-2xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Zepra delivery board
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold text-white">
                      High-trust digital execution
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Ready to scale
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.08] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-slate-300">
                          Service coverage
                        </div>
                        <div className="mt-1 font-display text-3xl font-semibold text-white">
                          Web + AI + Growth
                        </div>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                        <Workflow className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {heroHighlights.map((item, index) => (
                    <div
                      key={item.title}
                      className={`rounded-[24px] border border-white/10 bg-white/[0.06] p-5 animate-float ${index === 1 ? "stagger-2" : index === 2 ? "stagger-3" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                          {index === 0 ? (
                            <ShieldCheck className="h-5 w-5" />
                          ) : index === 1 ? (
                            <Sparkles className="h-5 w-5" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-white">{item.title}</div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto grid gap-4 pt-6 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.08] p-5">
                    <div className="text-sm font-medium text-slate-300">
                      Project style
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      Premium, responsive, business-ready
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.08] p-5">
                    <div className="text-sm font-medium text-slate-300">
                      Collaboration
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      Clear process and reliable communication
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
