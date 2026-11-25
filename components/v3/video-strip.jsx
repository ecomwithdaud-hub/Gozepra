import { Play } from "lucide-react";

const tiles = [
  {
    title: "Meet Daud, in 60 seconds",
    meta: "Founder intro",
    note: "Video coming soon. Daud records the intro himself.",
  },
  {
    title: "A booking site, walked through",
    meta: "Demo walkthrough 1",
    note: "Video coming soon. Screen-recorded from a live demo.",
  },
  {
    title: "An AI assistant, booking live",
    meta: "Demo walkthrough 2",
    note: "Video coming soon. Screen-recorded from the sandbox.",
  },
];

export function VideoStrip() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {tiles.map((tile) => (
        <article
          key={tile.title}
          className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)]"
        >
          <div className="relative flex aspect-video items-center justify-center bg-[#111111]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 fill-white text-white" />
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
              0:60
            </span>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF]">
              {tile.meta}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#111111]">{tile.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#55524B]">{tile.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
