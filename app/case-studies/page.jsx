import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { FinalCta, PageHero } from "@/components/v3/shared";
import { usaClientDemoWebsites } from "@/lib/site";

export const metadata = {
  title: "Case Studies | Selected Work",
  description:
    "Selected work from Zepra Tech, shown through live demo websites you can open and use.",
};

const featuredIds = [1, 2, 3];

export default function CaseStudiesPage() {
  const featured = usaClientDemoWebsites.filter((demo) => featuredIds.includes(demo.id));

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Selected work."
        intro="We show our work through live demo websites. Each one is a working site you can open and use."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((demo) => (
              <a
                key={demo.id}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
                  Live demo
                </p>
                <h2 className="mt-3 text-[22px] font-semibold text-[#111111]">
                  {demo.name}
                </h2>
                <p className="mt-1 text-sm text-[#55524B]">
                  {demo.trade} | {demo.city}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                  {demo.headline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]">
                  Open live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-[#55524B]">
            These are demo websites built to show our work.
          </p>
          <Link
            href="/portfolio"
            className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0066FF]"
          >
            See all 24 live demos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
