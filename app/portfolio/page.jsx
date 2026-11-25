import { FinalCta, PageHero } from "@/components/v3/shared";
import { PortfolioGrid } from "@/components/v3/portfolio-grid";
import { usaClientDemoWebsites, usaDemoCategories } from "@/lib/site";
import { BreadcrumbsJsonLd } from "@/components/seo/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/portfolio" },
  title: "Work | Websites, Apps & AI for US Small Business",
  description:
    "24 working demos built for US small businesses: home services, clinics, auto, beauty, restaurants, retail, and services. Open any demo and try it.",
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
  const liveDemos = usaClientDemoWebsites.filter(
    (demo) => !OFFLINE_DEMOS.has(demo.href),
  );
  const offlineDemos = usaClientDemoWebsites.filter((demo) =>
    OFFLINE_DEMOS.has(demo.href),
  );
  // PopShop leads: the brightest, most complete demo.
  const ordered = [
    ...liveDemos.filter((demo) => demo.id === 19),
    ...liveDemos.filter((demo) => demo.id !== 19),
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Work", href: "/portfolio" }]} />
      <PageHero
        eyebrow="Work"
        title="Open them. Try them. Ask us to rebuild yours."
        intro="Every demo below is live and working. These are sample builds for US industries, not our clients. Click any one, tap the buttons, and see how fast a local business site should feel."
      />

      <section className="section pt-12">
        <div className="wrap">
          <PortfolioGrid demos={ordered} categories={usaDemoCategories} />

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#111111]">
              Demos being rebuilt
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#55524B]">
              These four are offline while we rebuild them. No dead links
              here.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {offlineDemos.map((demo) => (
                <span
                  key={demo.id}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#55524B]"
                >
                  {demo.name} — Demo offline
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
