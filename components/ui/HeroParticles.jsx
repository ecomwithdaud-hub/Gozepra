"use client";

import { useEffect, useRef } from "react";

export function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const section = canvas?.parentElement;

    if (!canvas || !context || !section) {
      return;
    }

    let particles = [];
    let frameId = null;
    let isVisible = false;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Optimized aesthetic node count: smooth 60fps with zero frame drops
      const particleCount = Math.min(
        36,
        Math.max(20, Math.round((width * height) / 36000)),
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.6,
        velocityX: (Math.random() - 0.5) * 0.35,
        velocityY: (Math.random() - 0.5) * 0.35,
      }));
    };

    const maxDist = 115;
    const maxDistSq = maxDist * maxDist;

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      // 1. Draw particle dots in batch
      context.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.velocityX;
        p.y += p.velocityY;

        if (p.x < 0 || p.x > width) p.velocityX *= -1;
        if (p.y < 0 || p.y > height) p.velocityY *= -1;

        context.moveTo(p.x + p.radius, p.y);
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      context.fillStyle = "rgba(37, 99, 235, 0.35)";
      context.fill();

      // 2. Batch-draw connection lines in a single stroke call
      context.beginPath();
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = particle.x - other.x;
          if (Math.abs(dx) > maxDist) continue;
          const dy = particle.y - other.y;
          if (Math.abs(dy) > maxDist) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
          }
        }
      }
      context.strokeStyle = "rgba(37, 99, 235, 0.08)";
      context.lineWidth = 0.7;
      context.stroke();

      if (isVisible) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const startRendering = () => {
      if (isVisible && frameId === null) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const stopRendering = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(section);
    window.addEventListener("resize", resizeCanvas);

    let intersectionObserver;
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startRendering();
        } else {
          stopRendering();
        }
      });
      intersectionObserver.observe(section);
    } else {
      isVisible = true;
      startRendering();
    }

    return () => {
      stopRendering();
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
