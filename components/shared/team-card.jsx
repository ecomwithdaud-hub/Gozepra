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
    <Card className="card-shine h-full border border-slate-800 bg-[#070f24] text-white shadow-xl shadow-slate-950/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-[#0a1638]">
      <CardHeader className="gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/60 to-blue-900/60 text-lg font-semibold text-cyan-300 shadow-sm">
            {initials}
          </div>
          <div className="space-y-2">
            <Badge variant="secondary" className="border border-slate-700 bg-slate-900 text-slate-300">{member.department}</Badge>
            <div className="text-sm font-medium text-cyan-400">{member.accent}</div>
          </div>
        </div>
        <div>
          <CardTitle className="text-white">{member.name}</CardTitle>
          <p className="mt-2 text-[15px] font-medium text-slate-300">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-slate-400">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
