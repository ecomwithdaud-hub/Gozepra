import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .filter((part) => !["mr", "mrs", "ms", "miss", "dr", "eng"].includes(part.toLowerCase()))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="card-shine h-full border border-slate-200 bg-white text-slate-900 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-blue-400">
      <CardHeader className="gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 text-lg font-semibold text-blue-700 shadow-sm">
            {initials}
          </div>
          <div className="space-y-2">
            <Badge variant="secondary" className="border border-slate-200 bg-slate-100 text-slate-700">{member.department}</Badge>
            <div className="text-sm font-medium text-blue-600">{member.accent}</div>
          </div>
        </div>
        <div>
          <CardTitle className="text-slate-900">{member.name}</CardTitle>
          <p className="mt-2 text-[15px] font-medium text-slate-600">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-slate-500">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
