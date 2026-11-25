import { FinalCta, PageHero } from "@/components/v3/shared";
import { BreadcrumbsJsonLd } from "@/components/seo/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/cold-outreaching" },
  title: "Cold Outreach: Email, SMS and Calls for US B2B",
  description:
    "Email, SMS, and calling campaigns to verified US businesses. Built to book calls, not just send messages.",
};

export default function ColdOutreachingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Cold Outreach", href: "/cold-outreaching" }]} />
      <PageHero
        eyebrow="Cold outreach"
        title="A steady pipeline of real conversations."
        intro="Email, SMS, and calling campaigns to verified US businesses. Built to book calls, not just send messages."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Cold email</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Short, personal emails to verified businesses, with follow up
                sequences that get replies.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">SMS outreach</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Fast, intent driven follow ups that reach owners where they
                actually read messages.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold text-[#111111]">Cold calling</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Qualified discovery calls that book meetings with businesses
                ready to talk.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-[#55524B]">
            Every campaign starts with a clear list and a clear message. You
            see who was contacted and who replied.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
