import {
  Bot,
  CircleDollarSign,
  Film,
  Globe,
  Headphones,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShoppingCart,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap = {
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
};

export function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <Card className="card-shine group relative h-full overflow-hidden border-slate-200/80 bg-white/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-premium">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="bg-slate-100/90">
            Agency service
          </Badge>
        </div>
        <CardTitle className="pt-4 text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] leading-7 text-brand-slate">{service.summary}</p>
      </CardContent>
    </Card>
  );
}
