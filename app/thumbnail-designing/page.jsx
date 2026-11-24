import { ThumbnailDesignShowcase } from "@/components/sections/thumbnail-design-showcase";

export const metadata = {
  title: "Thumbnail Designing",
  description:
    "Explore Zepra Tech thumbnail design work across YouTube cover concepts, before-and-after examples, bold creator visuals, and attention-first layouts.",
};

export default function ThumbnailDesigningPage() {
  return (
    <>
<section className="border-b border-slate-200 bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Thumbnail Design
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Bold, attention-first YouTube thumbnails designed to earn the click.
          </p>
        </div>
      </section>
      <ThumbnailDesignShowcase />
    </>
  );
}
