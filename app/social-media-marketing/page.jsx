import { FinalCta, PageHero } from "@/components/v3/shared";

export const metadata = {
  alternates: { canonical: "/social-media-marketing" },
  title: "Social Media Marketing for US Local Business",
  description:
    "Local SEO, Google Maps, and Meta ads that put your business in front of nearby buyers.",
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Social media marketing"
        title="Marketing that reaches nearby buyers."
        intro="Local SEO, Google Maps, and Meta ads that put your business in front of nearby buyers."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Local search</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Your business shows up when local customers search for what
                you do, on Google and on Maps.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Paid ads</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Meta and Google ads aimed at nearby buyers, with clear
                reporting on calls and bookings.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Content and reviews</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Short posts and review prompts that keep your business visible
                and trusted week after week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
