"use client";

import { useState } from "react";

// Framed headshot slot for the founder. Points at the real photo path.
// The styled monogram shows first and stays on screen until the real photo
// has actually loaded, so a broken-image icon can never appear, before
// hydration or after, on the homepage or on /about. No AI face, no stock
// photo of a stranger. When Daud sends the real photo, it drops into the
// same slot automatically.
export function TeamPhoto({ src, name }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F6F3EE]">
      {!loaded ? (
        <div className="flex h-full w-full flex-col items-center justify-center px-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0066FF] text-lg font-bold text-white">
            DL
          </span>
          <span className="mt-3 text-sm font-semibold leading-snug text-[#111111]">
            Photo coming soon
          </span>
          <span className="mt-1 text-xs leading-relaxed text-[#55524B]">
            Founder headshot
          </span>
        </div>
      ) : null}
      <img
        src={src}
        alt={`Photo of ${name}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={
          loaded
            ? "absolute inset-0 h-full w-full object-cover object-top"
            : "absolute inset-0 h-full w-full opacity-0"
        }
      />
    </div>
  );
}
