import { ArrowUpRight } from "lucide-react";

import { FinalCta, PageHero } from "@/components/v3/shared";
import { usaClientDemoWebsites } from "@/lib/site";

export const metadata = {
  title: "Work | Live Demo Websites",
  description:
    "24 live demo websites built by Zepra Tech for US small businesses: plumbers, roofers, electricians, HVAC, auto, health, food, and more.",
};

// Verified live on 25 Nov 2026. These four demo links return 404, so they
// are shown as names only, with no link.
const OFFLINE_DEMOS = new Set([
  "https://indus-apparel-demo.vercel.app/",
  "https://modalux-store-demo.vercel.app/",
  "https://pureglow-beauty-demo.vercel.app/",
  "https://textile-mills-demo.vercel.app/",
]);

export default function PortfolioPage() {
  const liveDemos = usaClientDemoWebsites.filter((demo) => !OFFLINE_DEMOS.has(demo.href));
  const offlineDemos = usaClientDemoWebsites.filter((demo) => OFFLINE_DEMOS.has(demo.href));

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Live demo websites."
        intro="24 live demo websites we built to show our work. Open any of them and use it like a customer would. These are examples, not our clients."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {liveDemos.map((demo) => (
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

          {offlineDemos.length > 0 ? (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-[#111111]">
                Demo websites currently offline
              </h2>
              <p className="mt-2 text-[15px] text-[#55524B]">
                These demo websites are being rebuilt and have no live link
                right now.
              </p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {offlineDemos.map((demo) => (
                  <li
                    key={demo.id}
                    className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#55524B]"
                  >
                    {demo.name} | {demo.city}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
