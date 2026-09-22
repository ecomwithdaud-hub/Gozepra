import Link from "next/link";
import { ArrowRight, Building2, Users2 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { TeamCard } from "@/components/shared/team-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentSummaries, teamMembers } from "@/lib/site";

export function TeamSection({ showHeader = true, showCta = false }) {
  const groupedMembers = departmentSummaries.map((department) => ({
    ...department,
    members: teamMembers.filter((member) => member.department === department.title),
  }));

  return (
    <section className="section-shell">
      <div className="container">
        {showHeader ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Leadership & Departments"
              title="A professional team structure designed for real agency execution."
              description="Zepra Tech is organized like a serious digital company, with clear leadership, delivery ownership, and growth-focused departments working together under one coordinated process."
            />
            {showCta ? (
              <Button asChild variant="outline" size="lg">
                <Link href="/team">
                  View the full team page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {groupedMembers.map((department, index) => (
            <Card
              key={department.title}
              className={`card-shine border-slate-200/80 bg-white/90 ${index === 1 ? "lg:-translate-y-2" : ""}`}
            >
              <CardHeader className="gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                  {index % 2 === 0 ? (
                    <Building2 className="h-5 w-5" />
                  ) : (
                    <Users2 className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <CardTitle>{department.title}</CardTitle>
                  <p className="mt-2 text-sm leading-7 text-brand-slate">
                    {department.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-[22px] border border-primary/10 bg-primary/5 px-4 py-3 text-sm font-medium text-slate-700">
                  {department.members.length} team member
                  {department.members.length > 1 ? "s" : ""}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={`${member.role}-${member.name}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
