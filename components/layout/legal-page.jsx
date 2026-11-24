import { PageHero } from "@/components/v3/shared";

export function LegalPage({ title, intro, sections = [] }) {
  return (
    <>
      <PageHero eyebrow="Zepra Tech" title={title} intro={intro} />
      <section className="section pt-12">
        <div className="wrap">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold text-[#111111]">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#55524B]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
