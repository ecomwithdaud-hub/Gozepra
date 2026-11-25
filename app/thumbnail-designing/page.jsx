import { FinalCta, PageHero } from "@/components/v3/shared";

export const metadata = {
  alternates: { canonical: "/thumbnail-designing" },
  title: "YouTube Thumbnail Design for Creators",
  description:
    "Bold YouTube thumbnails built around your title and your audience.",
};

const thumbnails = [
  {
    src: "/portfolio/thumbnails/thumbnail-design-02.jpeg",
    label: "AI Tutorial",
    alt: "YouTube thumbnail design for an AI tutorial video",
  },
  {
    src: "/portfolio/thumbnails/thumbnail-design-06.jpeg",
    label: "Ecommerce",
    alt: "YouTube thumbnail design for an ecommerce story",
  },
  {
    src: "/portfolio/thumbnails/thumbnail-design-07.jpeg",
    label: "Before / After",
    alt: "YouTube thumbnail design showing a before and after layout",
  },
  {
    src: "/portfolio/thumbnails/thumbnail-design-14.jpeg",
    label: "Creator Branding",
    alt: "YouTube thumbnail design for creator branding",
  },
];

export default function ThumbnailDesigningPage() {
  return (
    <>
      <PageHero
        eyebrow="Thumbnail design"
        title="Thumbnails that earn the click."
        intro="Bold covers for YouTube videos, built around your title and your audience."
      />

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-6 sm:grid-cols-2">
            {thumbnails.map((thumbnail) => (
              <figure
                key={thumbnail.src}
                className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <figcaption className="px-6 py-4 text-[15px] font-medium text-[#111111]">
                  {thumbnail.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
