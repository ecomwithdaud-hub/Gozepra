import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { FinalCta, PageHero } from "@/components/v3/shared";
import { usaClientDemoWebsites } from "@/lib/site";

export const metadata = {
  title: "Website Development",
  description:
    "Custom websites and online stores for US small businesses. Mobile-first, fast, and built to take calls and bookings. Fixed prices from $2,500.",
};

const featuredIds = [1, 3];

export default function WebsiteDevelopmentPage() {
  const featured = usaClientDemoWebsites.filter((demo) => featuredIds.includes(demo.id));

  return (
    <>
      <PageHero
        eyebrow="Web development"
        title="Websites that turn visits into calls."
        intro="Custom websites and online stores for US small businesses. Mobile-first, fast, and built to take calls and bookings."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Built for phones first</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Most of your customers visit on a phone. Tap-to-call, directions,
                and booking work from the first screen.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Fast and easy to find</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Local SEO and Google Maps setup included, so nearby buyers find
                you when they search.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">You own everything</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Your code, your domain, your accounts, your data. 100%
                ownership, no lock-in.
              </p>
            </div>
          </div>

          <h2 className="h-section mt-20">Two sites to open and try</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
                <h3 className="mt-3 text-[22px] font-semibold text-[#111111]">
                  {demo.name}
                </h3>
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
          <p className="mt-8 text-[15px] text-[#55524B]">
            Launch from $2,500. Most small business websites launch in 2 to 3
            weeks.
          </p>
          <Link
            href="/portfolio"
            className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0066FF]"
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
