import Link from "next/link";
import { ArrowRight, ExternalLink, MonitorSmartphone, ShoppingBag } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  developmentShowcases,
  livePortfolioLinks,
  webAppShowcases,
} from "@/lib/site";

export function PortfolioPreview({
  showCta = true,
  eyebrow = "Website Development",
  title = "Live website launches and premium interface work arranged like a real agency showcase.",
  description = "This page combines live project links, launch-ready website work, and visual development previews so Zepra Tech can present website delivery in a cleaner and more credible format.",
}) {
  return (
    <section id="website-development" className="section-shell scroll-mt-32">
      <div className="container">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {livePortfolioLinks.map((project, index) => (
                <Card
                  key={project.href}
                  className={`card-shine h-full border-slate-200/80 bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${
                    index === 1 || index === 3 ? "md:translate-y-6" : ""
                  }`}
                >
                  <CardHeader className="gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <div className="text-sm font-medium text-primary">
                          {project.status}
                        </div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                        {project.category === "Admin Panel" ? (
                          <MonitorSmartphone className="h-5 w-5" />
                        ) : (
                          <ShoppingBag className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <div className="mt-2 text-sm font-medium text-brand-slate">
                        {project.domain}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-brand-slate">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        Visit project
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Start a similar project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            {developmentShowcases.map((showcase, index) => (
              <Card
                key={showcase.title}
                className={`card-shine overflow-hidden border-slate-200/80 bg-white/92 ${
                  index === 1 ? "xl:-translate-x-4" : ""
                }`}
              >
                <div className="border-b border-slate-200/70 p-5">
                  <Badge>{showcase.badge ?? "Website Development"}</Badge>
                  <CardTitle className="mt-4 text-2xl">{showcase.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">
                    {showcase.summary}
                  </p>
                </div>
                <div className="p-5">
                  <Link
                    href={showcase.href ?? showcase.image}
                    target={showcase.href ? "_blank" : undefined}
                    rel={showcase.href ? "noreferrer" : undefined}
                    className="group block overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-950"
                  >
                    {showcase.image ? (
                      <img
                        src={showcase.image}
                        alt={showcase.title}
                        className="h-[440px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="relative flex h-[440px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.3),_transparent_42%),linear-gradient(145deg,_#020617,_#0f172a_58%,_#1e293b)] p-7 text-white">
                        <div className="absolute inset-0 opacity-70">
                          <div className="absolute -right-16 top-14 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                          <div className="absolute bottom-8 left-0 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />
                          <div className="absolute inset-x-6 top-24 h-px bg-white/10" />
                          <div className="absolute inset-x-6 top-28 h-px bg-white/5" />
                        </div>

                        <div className="relative flex items-center justify-between gap-4">
                          <div className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
                            Live Portfolio
                          </div>
                          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">
                            {showcase.domain}
                          </div>
                        </div>

                        <div className="relative max-w-md">
                          <p className="text-xs font-medium uppercase tracking-[0.32em] text-sky-200/80">
                            Website Presentation
                          </p>
                          <div className="mt-4 text-4xl font-semibold leading-tight">
                            {showcase.title}
                          </div>
                          <p className="mt-4 text-sm leading-7 text-slate-200/88">
                            {showcase.previewCopy ?? showcase.summary}
                          </p>
                        </div>

                        <div className="relative grid gap-3 sm:grid-cols-2">
                          {(showcase.previewPoints ?? []).map((point) => (
                            <div
                              key={point}
                              className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm"
                            >
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {showcase.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {showcase.href ? (
                    <Button asChild variant="outline" className="mt-4 w-full justify-between">
                      <Link
                        href={showcase.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {showcase.buttonLabel ?? "Visit project"}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Interactive Web Products"
            title="Additional product-style web experiences presented with polished visuals and clean project framing."
            description="This showcase adds interactive tools, game-style interfaces, and AI-led product concepts to the website development portfolio so Zepra Tech can present a wider frontend and product execution range."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {webAppShowcases.map((project) => (
              <Card
                key={project.href}
                className="card-shine overflow-hidden border-slate-200/80 bg-white/92 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <CardContent className="p-0">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="overflow-hidden border-b border-slate-200/70 bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-[240px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>

                  <div className="space-y-5 p-5">
                    <div className="space-y-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <CardTitle className="text-2xl leading-tight">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-brand-slate">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        Open project
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
