"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AcousticHaptics() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  };

  const playClickSound = () => {
    if (!soundEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore if autoplay blocked
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (
        target instanceof Element &&
        target.closest("button, a, input[type='checkbox'], [role='tab']")
      ) {
        playClickSound();
      }
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, [soundEnabled]);

  const toggleSound = () => {
    initAudio();
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[9980] hidden sm:block">
      <button
        type="button"
        onClick={toggleSound}
        data-cursor="SOUND"
        aria-label={soundEnabled ? "Mute UI Acoustic Haptics" : "Enable UI Acoustic Haptics"}
        title={soundEnabled ? "Mute UI Acoustic Haptics" : "Enable UI Acoustic Haptics"}
        className={`group flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
          soundEnabled
            ? "border-blue-500 bg-blue-600 text-white shadow-soft"
            : "border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:border-slate-300 hover:text-slate-900"
        }`}
      >
        {soundEnabled ? (
          <Volume2 className="h-3.5 w-3.5 text-white animate-pulse" />
        ) : (
          <VolumeX className="h-3.5 w-3.5 text-slate-500" />
        )}
        <span className="hidden md:inline">
          {soundEnabled ? "Haptics: Active" : "Haptics: Off"}
        </span>
      </button>
    </div>
  );
}
