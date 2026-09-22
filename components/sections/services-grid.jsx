import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { slugify } from "@/lib/utils";

export function ServicesGrid({
  showHeader = true,
  showCta = false,
  title = "A complete digital services stack under one trusted brand.",
  
}) {
  return (
    <section className="section-shell bg-white/50">
      <div className="container">
        {showHeader ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Services"
              title={title}
              // description={description}
            />
            {showCta ? (
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Start a project discussion
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} id={slugify(service.title)}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
