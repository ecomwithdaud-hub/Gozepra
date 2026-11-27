import * as THREE from "three";

// Cache generated textures so canvas creation happens only once
const textureCache = new Map<string, THREE.CanvasTexture>();

/**
 * Procedural Natural Oak Hardwood Floor Texture
 */
export function getWoodFloorTexture(): THREE.CanvasTexture {
  const key = "wood-floor-oak";
  if (textureCache.has(key)) return textureCache.get(key)!;

  if (typeof document === "undefined") {
    const dummy = new THREE.CanvasTexture({} as any);
    return dummy;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Warm honey-oak wood base
    ctx.fillStyle = "#A3704C";
    ctx.fillRect(0, 0, 1024, 1024);

    const plankHeight = 64;
    const numRows = 1024 / plankHeight;

    for (let r = 0; r < numRows; r++) {
      const y = r * plankHeight;
      const rowOffset = (r % 3) * 170;
      const plankWidth = 256;

      for (let x = -rowOffset; x < 1024 + plankWidth; x += plankWidth) {
        // Subtle plank tone variation
        const toneShift = (Math.sin(r * 12.3 + x * 0.05) + Math.cos(x * 7.1)) * 12;
        const red = Math.min(255, Math.max(0, 175 + toneShift));
        const green = Math.min(255, Math.max(0, 122 + toneShift * 0.8));
        const blue = Math.min(255, Math.max(0, 82 + toneShift * 0.6));

        ctx.fillStyle = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
        ctx.fillRect(x, y, plankWidth, plankHeight);

        // Wood grain streaks
        ctx.fillStyle = "rgba(75, 45, 25, 0.12)";
        for (let g = 0; g < 6; g++) {
          const gy = y + 4 + g * 10;
          ctx.fillRect(x, gy, plankWidth, 1.5 + Math.random() * 2);
        }

        // Lighter grain highlights
        ctx.fillStyle = "rgba(255, 230, 190, 0.09)";
        for (let g = 0; g < 3; g++) {
          const gy = y + 8 + g * 18;
          ctx.fillRect(x, gy, plankWidth, 1);
        }

        // Plank seam borders
        ctx.strokeStyle = "rgba(45, 25, 12, 0.45)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, plankWidth, plankHeight);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Procedural Woven Area Rug Texture
 */
export function getAreaRugTexture(baseColor = "#1E293B", accentColor = "#0F766E"): THREE.CanvasTexture {
  const key = `rug-${baseColor}-${accentColor}`;
  if (textureCache.has(key)) return textureCache.get(key)!;

  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 512, 512);

    // Woven texture grid
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    for (let i = 0; i < 512; i += 8) {
      ctx.fillRect(i, 0, 4, 512);
      ctx.fillRect(0, i, 512, 4);
    }

    // Outer border
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, 498, 498);

    // Subtle inner border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 4;
    ctx.strokeRect(24, 24, 464, 464);
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Active Screen: VS Code / Next.js IDE Display for Dev Bay
 */
export function getCodeScreenTexture(): THREE.CanvasTexture {
  const key = "screen-code-ide";
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 288;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Dark modern editor background
    ctx.fillStyle = "#0D1117";
    ctx.fillRect(0, 0, 512, 288);

    // Title bar & Tabs
    ctx.fillStyle = "#161B22";
    ctx.fillRect(0, 0, 512, 28);
    // Tab 1 (active)
    ctx.fillStyle = "#0D1117";
    ctx.fillRect(8, 4, 140, 24);
    ctx.fillStyle = "#58A6FF";
    ctx.font = "bold 11px monospace";
    ctx.fillText("page.tsx", 20, 20);

    // Tab 2 (inactive)
    ctx.fillStyle = "#8B949E";
    ctx.font = "11px monospace";
    ctx.fillText("route.ts", 160, 20);

    // Sidebar left strip
    ctx.fillStyle = "#010409";
    ctx.fillRect(0, 28, 36, 260);

    // Line numbers
    ctx.fillStyle = "#484F58";
    ctx.font = "10px monospace";
    for (let line = 1; line <= 14; line++) {
      ctx.fillText(line.toString(), 44, 45 + line * 16);
    }

    // Code lines with realistic syntax coloring
    const codeLines = [
      { text: "import { NextRequest } from 'next/server';", color: "#FF7B72" },
      { text: "import { PrismaClient } from '@prisma/client';", color: "#FF7B72" },
      { text: "const prisma = new PrismaClient();", color: "#D2A8FF" },
      { text: "", color: "" },
      { text: "export async function POST(req: NextRequest) {", color: "#79C0FF" },
      { text: "  const { teamId, quota } = await req.json();", color: "#FFA657" },
      { text: "  const session = await auth();", color: "#7EE787" },
      { text: "  if (!session) return new Response('Unauthorized');", color: "#FF7B72" },
      { text: "  const metric = await prisma.telemetry.create({", color: "#79C0FF" },
      { text: "    data: { teamId, latencyMs: 24, status: 200 }", color: "#A5D6FF" },
      { text: "  });", color: "#79C0FF" },
      { text: "  return Response.json({ success: true, metric });", color: "#7EE787" },
      { text: "}", color: "#79C0FF" },
    ];

    codeLines.forEach((l, i) => {
      if (!l.text) return;
      ctx.fillStyle = l.color;
      ctx.font = "11px monospace";
      ctx.fillText(l.text, 68, 61 + i * 16);
    });

    // Bottom status bar
    ctx.fillStyle = "#14B8A6";
    ctx.fillRect(0, 272, 512, 16);
    ctx.fillStyle = "#042F2E";
    ctx.font = "bold 9px monospace";
    ctx.fillText("✓ Next.js 15.2 • TypeScript 5.8 • UTF-8 • 0 Errors", 10, 284);
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Active Screen: SEO & Google Business Profile Ranking Analytics
 */
export function getSeoAnalyticsScreenTexture(): THREE.CanvasTexture {
  const key = "screen-seo-analytics";
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 288;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#0F172A";
    ctx.fillRect(0, 0, 512, 288);

    // Header bar
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(0, 0, 512, 36);
    ctx.fillStyle = "#38BDF8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("ZEPRA GROWTH CONSOLE • GMB 3-PACK RANKINGS", 16, 23);

    // KPI Cards
    const kpis = [
      { label: "Local Map #1 Ranks", val: "18 Keywords", delta: "+410% MoM", col: "#22D3EE" },
      { label: "Search Impressions", val: "1,420,800", delta: "+82.4%", col: "#34D399" },
      { label: "Direct Calls / Week", val: "384 Inbound", delta: "+185%", col: "#60A5FA" },
    ];

    kpis.forEach((kpi, idx) => {
      const bx = 16 + idx * 162;
      ctx.fillStyle = "#1E293B";
      ctx.fillRect(bx, 48, 154, 64);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
      ctx.strokeRect(bx, 48, 154, 64);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "10px sans-serif";
      ctx.fillText(kpi.label, bx + 10, 64);

      ctx.fillStyle = "#F8FAFC";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(kpi.val, bx + 10, 88);

      ctx.fillStyle = kpi.col;
      ctx.font = "bold 10px sans-serif";
      ctx.fillText(kpi.delta, bx + 10, 104);
    });

    // Chart Area
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(16, 122, 480, 146);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.strokeRect(16, 122, 480, 146);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText("ORGANIC CLICK GROWTH VELOCITY (LAST 90 DAYS)", 28, 142);

    // Draw growth curve
    ctx.beginPath();
    ctx.moveTo(36, 240);
    ctx.bezierCurveTo(120, 230, 180, 200, 260, 185);
    ctx.bezierCurveTo(340, 170, 400, 145, 476, 150);
    ctx.strokeStyle = "#38BDF8";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Area fill under curve
    ctx.lineTo(476, 250);
    ctx.lineTo(36, 250);
    ctx.closePath();
    ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Active Screen: Shopify Plus & E-Commerce CRO Storefront
 */
export function getEcomScreenTexture(): THREE.CanvasTexture {
  const key = "screen-ecom-storefront";
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 288;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#0B0F19";
    ctx.fillRect(0, 0, 512, 288);

    // Top Navigation
    ctx.fillStyle = "#172033";
    ctx.fillRect(0, 0, 512, 34);
    ctx.fillStyle = "#F8FAFC";
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("SHOPIFY PLUS • HEADLESS STOREFRONT DESIGN", 16, 22);

    // Product Preview Grid Left
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(16, 46, 230, 224);
    // Product Hero Image Mockup
    ctx.fillStyle = "#334155";
    ctx.fillRect(28, 58, 206, 120);
    // 3D Product Mockup icon inside
    ctx.fillStyle = "#60A5FA";
    ctx.beginPath();
    ctx.arc(131, 118, 32, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("Minimalist Titanium Chrono", 28, 198);
    ctx.fillStyle = "#34D399";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("$385.00 USD", 28, 218);

    // Add to Cart Button
    ctx.fillStyle = "#2563EB";
    ctx.fillRect(28, 230, 206, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText("⚡ ADD TO CART — 1-CLICK CHECKOUT", 42, 248);

    // CRO Analytics Right
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(260, 46, 236, 224);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText("A/B TEST CONVERSION LIFT", 274, 70);

    ctx.fillStyle = "#34D399";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("+48.2%", 274, 108);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px sans-serif";
    ctx.fillText("Statistical Significance: 99.4%", 274, 128);
    ctx.fillText("Revenue / Session: $4.18 (+$1.34)", 274, 146);

    // Conversion funnel bars
    const funnel = [
      { name: "Product Page Visits", val: 100, col: "#38BDF8" },
      { name: "Add to Cart", val: 42, col: "#60A5FA" },
      { name: "Checkout Started", val: 28, col: "#818CF8" },
      { name: "Purchased", val: 18, col: "#34D399" },
    ];

    funnel.forEach((step, sIdx) => {
      const fy = 166 + sIdx * 24;
      ctx.fillStyle = "#94A3B8";
      ctx.font = "10px sans-serif";
      ctx.fillText(step.name, 274, fy);

      ctx.fillStyle = "#0F172A";
      ctx.fillRect(360, fy - 10, 120, 10);
      ctx.fillStyle = step.col;
      ctx.fillRect(360, fy - 10, (120 * step.val) / 100, 10);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Procedural Architectural Wall Artwork / Posters
 */
export function getWallArtworkTexture(type: "architecture" | "milestone" | "brand"): THREE.CanvasTexture {
  const key = `artwork-${type}`;
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 340;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    if (type === "architecture") {
      // Tech Architecture Blueprint
      ctx.fillStyle = "#0A192F";
      ctx.fillRect(0, 0, 512, 340);
      ctx.strokeStyle = "rgba(20, 184, 166, 0.4)";
      ctx.lineWidth = 1;
      for (let x = 0; x < 512; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 340);
        ctx.stroke();
      }
      for (let y = 0; y < 340; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(512, y);
        ctx.stroke();
      }

      ctx.fillStyle = "#2DD4BF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("ZEPRA ENTERPRISE AI STACK", 30, 45);
      ctx.font = "11px monospace";
      ctx.fillStyle = "#E2E8F0";
      ctx.fillText("Next.js 15 • Python FastApi • PG Vector • LangChain", 30, 70);

      // Modular architecture boxes
      const boxes = [
        { label: "Edge Gateway", x: 40, y: 110, w: 100, h: 50 },
        { label: "Vector Search", x: 180, y: 110, w: 120, h: 50 },
        { label: "LLM Orchestrator", x: 340, y: 110, w: 130, h: 50 },
        { label: "PostgreSQL DB", x: 180, y: 210, w: 120, h: 50 },
      ];
      boxes.forEach((b) => {
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.strokeStyle = "#14B8A6";
        ctx.lineWidth = 2;
        ctx.strokeRect(b.x, b.y, b.w, b.h);
        ctx.fillStyle = "#F8FAFC";
        ctx.font = "bold 11px sans-serif";
        ctx.fillText(b.label, b.x + 10, b.y + 30);
      });
    } else if (type === "milestone") {
      // Agency milestone poster
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, 0, 512, 340);
      ctx.fillStyle = "#F59E0B";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText("ZEPRA TECH • MILESTONE 2026", 36, 45);

      ctx.fillStyle = "#F8FAFC";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("100+ Enterprise Builds", 36, 95);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "14px sans-serif";
      ctx.fillText("Global Deliveries Across US, UK, GCC & Pakistan", 36, 125);

      // Gold badge
      ctx.fillStyle = "#F59E0B";
      ctx.beginPath();
      ctx.arc(256, 220, 50, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("VERIFIED", 256, 218);
      ctx.fillText("AGENCY", 256, 236);
      ctx.textAlign = "left";
    } else {
      // Modern Creative Studio Art
      const grad = ctx.createLinearGradient(0, 0, 512, 340);
      grad.addColorStop(0, "#0F172A");
      grad.addColorStop(1, "#1E1B4B");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 340);

      ctx.fillStyle = "#38BDF8";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("CREATIVE & CONVERSION STUDIO", 36, 45);

      // Minimalist geometric shapes
      ctx.fillStyle = "rgba(45, 212, 191, 0.4)";
      ctx.beginPath();
      ctx.arc(160, 180, 70, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(99, 102, 241, 0.45)";
      ctx.fillRect(210, 120, 130, 130);

      ctx.strokeStyle = "#F43F5E";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(340, 240);
      ctx.lineTo(430, 120);
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * Window Skyline View Texture (Backdrop outside high-rise windows)
 */
export function getWindowSkylineTexture(): THREE.CanvasTexture {
  const key = "skyline-daylight";
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === "undefined") return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Warm luminous daytime sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, 256);
    sky.addColorStop(0, "#BAE6FD");
    sky.addColorStop(0.5, "#E0F2FE");
    sky.addColorStop(1, "#FFF7ED");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 1024, 256);

    // Distant soft architectural silhouettes
    ctx.fillStyle = "rgba(148, 163, 184, 0.35)";
    const buildings = [
      { x: 20, w: 70, h: 140 },
      { x: 100, w: 90, h: 180 },
      { x: 200, w: 60, h: 110 },
      { x: 270, w: 110, h: 190 },
      { x: 390, w: 85, h: 160 },
      { x: 490, w: 120, h: 210 },
      { x: 620, w: 75, h: 130 },
      { x: 710, w: 100, h: 175 },
      { x: 820, w: 90, h: 145 },
      { x: 920, w: 80, h: 165 },
    ];
    buildings.forEach((b) => {
      ctx.fillRect(b.x, 256 - b.h, b.w, b.h);
    });

    // Closer skyline layer
    ctx.fillStyle = "rgba(100, 116, 139, 0.45)";
    buildings.forEach((b, i) => {
      ctx.fillRect(b.x + 30, 256 - (b.h * 0.7), b.w * 0.8, b.h * 0.7);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(key, texture);
  return texture;
}

/**
 * 8. Procedural Floating 'YOU' Badge Texture
 * Clean WebGL billboard tag with glowing teal border and active pulse dot
 */
export function getYouBadgeTexture(): THREE.CanvasTexture {
  const key = 'badge-you';
  if (textureCache.has(key)) return textureCache.get(key)!;
  if (typeof document === 'undefined') return new THREE.CanvasTexture({} as any);

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, 256, 96);
    const r = 40;
    const x = 12;
    const y = 8;
    const w = 232;
    const h = 80;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fillStyle = 'rgba(11, 15, 23, 0.95)';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#14B8A6';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(58, 48, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#2DD4BF';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(58, 48, 14, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.5)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.fillStyle = '#2DD4BF';
    ctx.font = '900 32px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('YOU', 86, 49);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  textureCache.set(key, texture);
  return texture;
}
