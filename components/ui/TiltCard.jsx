"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(56, 198, 255, 0.16)",
  maxTilt = 4.5,
  cursorLabel,
  ...props
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    el.style.transform = `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
      2
    )}deg) scale3d(1.01, 1.01, 1.01)`;

    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
      glowRef.current.style.background = `radial-gradient(480px circle at ${(
        (x / rect.width) *
        100
      ).toFixed(1)}% ${((y / rect.height) * 100).toFixed(
        1
      )}%, ${glowColor}, transparent 65%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) {
      el.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel}
      style={{
        transform:
          "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
        transition: "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={cn("relative will-change-transform", className)}
      {...props}
    >
      {/* Dynamic Radial Cursor Spotlight */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: 0,
          background: `radial-gradient(480px circle at 50% 50%, ${glowColor}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
