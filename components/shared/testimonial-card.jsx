import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="card-shine h-full border-slate-200/80 bg-white/90">
      <CardHeader className="gap-4">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <CardTitle className="text-xl leading-8 text-slate-950">
          "{testimonial.quote}"
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-semibold text-slate-950">{testimonial.name}</div>
        <div className="mt-1 text-sm text-brand-slate">{testimonial.role}</div>
      </CardContent>
    </Card>
  );
}
