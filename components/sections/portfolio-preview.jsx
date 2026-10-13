"use client";

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
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

export function PortfolioPreview({
  showCta = true,
  eyebrow,
  title,
  description,
}) {
  const { t } = useLanguage();
  const content = t("websitePage.portfolio");

  return (
    <section id="website-development" className="section-shell relative isolate scroll-mt-32 overflow-hidden bg-white text-slate-900 border-t border-slate-200">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow={eyebrow ?? content.eyebrow}
              title={title ?? content.title}
              description={description ?? content.description}
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {livePortfolioLinks.map((project, index) => {
                const translatedProject = content.liveProjects?.[index] ?? project;
                return (
                <Card
                  key={project.href}
                  className={`card-shine h-full border border-slate-200 bg-white text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md ${
                    index === 1 || index === 3 ? "md:translate-y-6" : ""
                  }`}
                >
                  <CardHeader className="gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">{translatedProject.category}</Badge>
                        <div className="text-sm font-medium text-blue-600">
                          {translatedProject.status}
                        </div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm">
                        {project.category === "Admin Panel" ? (
                          <MonitorSmartphone className="h-5 w-5" />
                        ) : (
                          <ShoppingBag className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-900">{translatedProject.title}</CardTitle>
                      <div className="mt-2 text-sm font-medium text-slate-500">
                        {project.domain}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-slate-600">
                      {translatedProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {translatedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-slate-200 bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        {content.visitProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                );
              })}
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    {content.startProject}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            {developmentShowcases.map((showcase, index) => {
              const translatedShowcase = content.developmentShowcases?.[index] ?? showcase;
              return (
              <Card
                key={showcase.title}
                className={`card-shine overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-sm backdrop-blur-md ${
                  index === 1 ? "xl:-translate-x-4" : ""
                }`}
              >
                <div className="border-b border-slate-100 p-5">
                  <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">{translatedShowcase.badge}</Badge>
                  <CardTitle className="mt-4 text-2xl text-slate-900">{translatedShowcase.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {translatedShowcase.summary}
                  </p>
                </div>
                <div className="p-5">
                  <Link
                    href={showcase.href ?? showcase.image}
                    target={showcase.href ? "_blank" : undefined}
                    rel={showcase.href ? "noreferrer" : undefined}
                    className="group block overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100"
                  >
                    {showcase.image ? (
                      <img
                        src={showcase.image}
                        alt={translatedShowcase.title}
                        decoding="async"
                        className="h-[440px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="relative flex h-[440px] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 p-7 text-slate-900 border border-slate-200">
                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute -right-16 top-14 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
                          <div className="absolute bottom-8 left-0 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />
                          <div className="absolute inset-x-6 top-24 h-px bg-slate-200" />
                          <div className="absolute inset-x-6 top-28 h-px bg-slate-100" />
                        </div>

                        <div className="relative flex items-center justify-between gap-4">
                          <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                            {content.livePortfolio}
                          </div>
                          <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                            {showcase.domain}
                          </div>
                        </div>

                        <div className="relative max-w-md">
                          <p className="text-xs font-medium uppercase tracking-[0.32em] text-blue-600">
                            {content.websitePresentation}
                          </p>
                          <div className="mt-4 text-4xl font-semibold leading-tight text-slate-900">
                            {translatedShowcase.title}
                          </div>
                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {translatedShowcase.summary}
                          </p>
                        </div>

                        <div className="relative grid gap-3 sm:grid-cols-2">
                          {(translatedShowcase.previewPoints ?? []).map((point) => (
                            <div
                              key={point}
                              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-sm"
                            >
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {translatedShowcase.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="border border-slate-200 bg-slate-100 text-slate-700">
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
                        {translatedShowcase.buttonLabel ?? content.visitProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <SectionHeading
            eyebrow={content.webAppsEyebrow}
            title={content.webAppsTitle}
            description={content.webAppsDescription}
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {webAppShowcases.map((project, index) => {
              const translatedProject = content.webApps?.[index] ?? project;
              return (
              <Card
                key={project.href}
                className="card-shine overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
              >
                <CardContent className="p-0">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="overflow-hidden border-b border-slate-100 bg-slate-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        decoding="async"
                        className="h-[240px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>

                  <div className="space-y-5 p-5">
                    <div className="space-y-3">
                      <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">{translatedProject.category}</Badge>
                      <CardTitle className="text-2xl leading-tight text-slate-900">
                        {translatedProject.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-slate-600">
                        {translatedProject.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {translatedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-slate-200 bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        {content.openProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
