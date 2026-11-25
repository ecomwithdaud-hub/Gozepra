"use client";

import { useState } from "react";

// Framed headshot slot for the founder. Points at the real photo path.
// If the photo file is not in the repo yet, it shows a clean placeholder
// instead of a broken image. No AI face, no stock photo of a stranger.
export function TeamPhoto({ src, name }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className="flex h-44 w-36 shrink-0 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F6F3EE] px-3 text-center">
        <span className="text-sm font-semibold text-[#111111]">
          Photo coming soon
        </span>
        <span className="mt-1 text-xs leading-relaxed text-[#55524B]">
          Founder headshot
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Photo of ${name}`}
      onError={() => setMissing(true)}
      className="h-44 w-36 shrink-0 rounded-2xl border border-[#E2E8F0] bg-[#F6F3EE] object-cover object-top"
    />
  );
}
