"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { wikiRgScreens } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";

export function WikiRgShowcase() {
  const { t } = useLanguage();
  const content = t("websitePage.wiki");
  const featuredScreen = wikiRgScreens.find((item) => item.featured);
  const detailScreens = wikiRgScreens.filter((item) => !item.featured);

  return (
    <section id="wiki-rg-case-study" className="section-shell scroll-mt-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {featuredScreen ? (
            <Card className="card-shine overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-md">
              <div className="border-b border-slate-100 p-6">
                <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">{content.screens[wikiRgScreens.indexOf(featuredScreen)]?.label ?? featuredScreen.label}</Badge>
                <CardTitle className="mt-4 text-3xl text-slate-900">
                  {content.screens[wikiRgScreens.indexOf(featuredScreen)]?.title ?? featuredScreen.title}
                </CardTitle>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                  {content.screens[wikiRgScreens.indexOf(featuredScreen)]?.summary ?? featuredScreen.summary}
                </p>
              </div>
              <div className="bg-slate-50 p-4">
                <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                  <img
                    src={featuredScreen.image}
                    alt={featuredScreen.title}
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </Card>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            {detailScreens.map((screen) => {
              const translatedScreen = content.screens[wikiRgScreens.indexOf(screen)] ?? screen;
              return (
              <Card
                key={screen.title}
                className="card-shine overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-md"
              >
                <div className="border-b border-slate-100 p-5">
                  <Badge variant="secondary" className="border border-blue-200 bg-blue-50 text-blue-700">{translatedScreen.label}</Badge>
                  <CardTitle className="mt-4 text-xl leading-tight text-slate-900">
                    {translatedScreen.title}
                  </CardTitle>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {translatedScreen.summary}
                  </p>
                </div>
                <div className="bg-slate-50 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      decoding="async"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
