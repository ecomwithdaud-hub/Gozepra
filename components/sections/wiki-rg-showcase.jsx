import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { wikiRgScreens } from "@/lib/site";

export function WikiRgShowcase() {
  const featuredScreen = wikiRgScreens.find((item) => item.featured);
  const detailScreens = wikiRgScreens.filter((item) => !item.featured);

  return (
    <section className="section-shell bg-white/45">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Website Case Study"
          title="Wiki RG arranged as a complete research collaboration platform with clearer product storytelling."
          align="center"
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {featuredScreen ? (
            <Card className="card-shine overflow-hidden border-slate-200/80 bg-white/94">
              <div className="border-b border-slate-200/70 p-6">
                <Badge>{featuredScreen.label}</Badge>
                <CardTitle className="mt-4 text-3xl">
                  {featuredScreen.title}
                </CardTitle>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-slate">
                  {featuredScreen.summary}
                </p>
              </div>
              <div className="bg-slate-50 p-4">
                <div className="overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-soft">
                  <img
                    src={featuredScreen.image}
                    alt={featuredScreen.title}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </Card>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            {detailScreens.map((screen) => (
              <Card
                key={screen.title}
                className="card-shine overflow-hidden border-slate-200/80 bg-white/94"
              >
                <div className="border-b border-slate-200/70 p-5">
                  <Badge>{screen.label}</Badge>
                  <CardTitle className="mt-4 text-xl leading-tight">
                    {screen.title}
                  </CardTitle>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">
                    {screen.summary}
                  </p>
                </div>
                <div className="bg-slate-50 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200/70 bg-white shadow-soft">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
