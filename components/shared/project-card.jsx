import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Card className="card-shine group h-full overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">
            {project.category}
          </Badge>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
        </div>
        <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
        <p className="text-[15px] leading-7 text-slate-600">{project.summary}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-[22px] border border-blue-200 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
          {project.outcome}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="border border-slate-200 bg-slate-100 text-slate-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
