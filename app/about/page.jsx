import { FinalCta, PageHero } from "@/components/v3/shared";

export const metadata = {
  title: "About Zepra Tech",
  description:
    "Zepra Tech is a US-based digital agency founded in 2025. A small team building websites, AI assistants, and growth marketing for US small businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zepra Tech"
        title="A small team that builds and ships."
        intro="Zepra Tech is a digital engineering and marketing agency founded in 2025. We build websites, AI assistants, and growth marketing for US small businesses."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <p className="eyebrow">Founder led</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111111]">
                Muhammad Daud Ali Lashari
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                CEO and founder. Every project is reviewed by Daud before
                launch. You talk to the people building your site, not a sales
                desk. Entrepreneur and younger CEO alongside hands-on digital
                marketer, and a Computer Science undergrad at Lahore Garrison
                University. He writes on SEO and AI.
              </p>
              <a
                href="https://www.linkedin.com/in/muhammad-daud-ali-lashari-1302a5337/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF]"
              >
                Daud on LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="card">
              <p className="eyebrow">Two offices</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111111]">
                US office, global team
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                Our US office is in Middletown, Delaware. Our delivery team
                works from DHA Phase 8, Broadway Commercial, Lahore, Pakistan.
                US business hours, global delivery speed.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-[#E2E8F0] bg-white p-7 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#111111]">
              How we work
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#55524B]">
              One team, one fixed price, launched in 2 to 3 weeks. You own
              100% of the code, the domain, and your data. We reply within 24
              hours whenever you write or call.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
