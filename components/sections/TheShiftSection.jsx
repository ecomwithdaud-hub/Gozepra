import { useEffect, useState } from "react";
import { Check, Minus } from "lucide-react";

const legacyPoints = [
  "Sell hours and retainers",
  "Manual work across every task",
  "Slow reporting and fragmented ops",
  "Teams optimize for effort, not outcomes",
];

const aiNativePoints = [
  "Ship outcomes, not just activity",
  "AI-native workflows automate the routine",
  "Live visibility across operations and growth",
  "Teams focus on leverage, speed, and scale",
];

export function TheShiftSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F9F8F6] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(23,116,96,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(9,20,30,0.06),transparent_35%)]" />

      <div className="container relative">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(22px)",
            transition: "all 700ms ease-out",
          }}
          className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-[#cfe3da] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0F172A] shadow-sm backdrop-blur-sm">
              THE SHIFT
            </div>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4rem]">
              The shift to AI native operations is already here.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              The real competitive advantage is no longer selling time or capacity. It is
              delivering outcomes, compounding leverage, and building systems that move
              faster than legacy workflows ever could.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2" style={{ perspective: 1400 }}>
            <ComparisonCard title="Legacy Model" variant="legacy" points={legacyPoints} />
            <ComparisonCard title="AI Native Model" variant="ai" points={aiNativePoints} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, variant, points }) {
  const isLegacy = variant === "legacy";
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative"
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)`,
        transition: "transform 200ms ease-out",
      }}
    >
      <div
        className={[
          "relative overflow-hidden rounded-[28px] border p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 sm:p-6",
          isLegacy
            ? "border-[#dfe7e1] bg-[#fffdfb] text-slate-900"
            : "border-[#163c36] bg-[#0f1720] text-slate-100 shadow-[0_24px_70px_rgba(14,39,35,0.35)]",
        ].join(" ")}
      >
        <div
          className={[
            "mb-5 inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em]",
            isLegacy ? "bg-[#eef1ee] text-slate-600" : "bg-[#1c4742] text-[#d5f4ec]",
          ].join(" ")}
        >
          {title}
        </div>

        <div className="space-y-4">
          {points.map((point) => (
            <div
              key={point}
              className={[
                "flex items-start gap-3 rounded-2xl border px-3 py-3 text-sm leading-6",
                isLegacy
                  ? "border-slate-200 bg-slate-50/80 text-slate-700"
                  : "border-white/10 bg-white/5 text-slate-100",
              ].join(" ")}
            >
              <span
                className={[
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  isLegacy
                    ? "bg-slate-200 text-slate-500"
                    : "bg-[#1d8b78]/30 text-[#7af4d8]",
                ].join(" ")}
              >
                {isLegacy ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                ) : (
                  <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
                )}
              </span>

              <span className="flex-1">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
