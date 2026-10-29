"use client";

import React, { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { CameraRig, STATIONS } from "@/components/CameraRig";

// ==========================================
// 1. MINIMALIST HUD PRELOADER (using useProgress)
// ==========================================
function LoadingScreen() {
  const { active, progress } = useProgress();
  if (!active && progress === 100) return null;

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
            Initializing 3D Engine
          </span>
        </div>
        <div className="mt-3 h-1.5 w-44 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="mt-1 font-mono text-[10px] text-slate-500">
          {Math.round(progress)}% Loaded
        </span>
      </div>
    </Html>
  );
}

// ==========================================
// STATION 1: AI & CORE SYSTEMS ([0, 0, 0])
// Wireframe & Particle Neural Core
// ==========================================
function AiCoreStation({ isHovered, onHover }: { isHovered: boolean; onHover: (h: boolean) => void }) {
  const outerRingRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const secondaryRingRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const speed = isHovered ? 2.5 : 1.0;
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += 0.4 * delta * speed;
      outerRingRef.current.rotation.y += 0.6 * delta * speed;
    }
    if (secondaryRingRef.current) {
      secondaryRingRef.current.rotation.z += 0.5 * delta * speed;
      secondaryRingRef.current.rotation.y -= 0.3 * delta * speed;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.3 * delta * speed;
      const s = 1 + Math.sin(Date.now() * 0.003) * 0.05;
      coreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group
      position={[0, 0, 0]}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
        {/* Core Pulsing Neural Polyhedron */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
            emissive="#0891b2"
            emissiveIntensity={isHovered ? 0.9 : 0.4}
          />
        </mesh>

        {/* Inner Solid Crystal Core */}
        <mesh>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.1}
            metalness={0.9}
            emissive="#0284c7"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Outer Orbiting Data Ring 1 */}
        <group ref={outerRingRef}>
          <mesh>
            <torusGeometry args={[2.0, 0.035, 16, 100]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#22d3ee"
              emissiveIntensity={0.8}
            />
          </mesh>
          {/* Orbiting Satellite Node */}
          <mesh position={[2.0, 0, 0]}>
            <sphereGeometry args={[0.14, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Secondary Tilted Orbiting Ring */}
        <group ref={secondaryRingRef} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <mesh>
            <torusGeometry args={[2.4, 0.025, 16, 100]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#60a5fa"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[-2.4, 0, 0]}>
            <boxGeometry args={[0.18, 0.18, 0.18]} />
            <meshStandardMaterial color="#67e8f9" emissive="#06b6d4" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Surrounding Synaptic Particle Field */}
        <Sparkles
          count={isHovered ? 50 : 30}
          scale={4.5}
          size={isHovered ? 4 : 2.5}
          speed={0.6}
          color="#22d3ee"
        />
      </Float>
    </group>
  );
}

// ==========================================
// STATION 2: FULL-STACK ENGINEERING ([15, 0, 0])
// Floating Layered Architecture Blocks
// ==========================================
function FullStackStation({ isHovered, onHover }: { isHovered: boolean; onHover: (h: boolean) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const block1Ref = useRef<THREE.Mesh>(null);
  const block2Ref = useRef<THREE.Mesh>(null);
  const block3Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const speed = isHovered ? 1.8 : 0.8;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.3 * delta * speed;
    }
    // Playful exploded vertical hover movement
    const targetY1 = isHovered ? -1.0 : -0.7;
    const targetY2 = isHovered ? 0.0 : 0.0;
    const targetY3 = isHovered ? 1.0 : 0.7;

    if (block1Ref.current) block1Ref.current.position.y = THREE.MathUtils.lerp(block1Ref.current.position.y, targetY1, 0.1);
    if (block2Ref.current) block2Ref.current.position.y = THREE.MathUtils.lerp(block2Ref.current.position.y, targetY2, 0.1);
    if (block3Ref.current) block3Ref.current.position.y = THREE.MathUtils.lerp(block3Ref.current.position.y, targetY3, 0.1);
  });

  return (
    <group
      position={[15, 0, 0]}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <Float speed={2.2} rotationIntensity={1.0} floatIntensity={1.3}>
        <group ref={groupRef} rotation={[0.3, 0.4, 0]}>
          {/* Base Layer: Database / Core Infrastructure */}
          <mesh ref={block1Ref} position={[0, -0.7, 0]}>
            <boxGeometry args={[2.2, 0.35, 2.2]} />
            <meshStandardMaterial
              color="#1e293b"
              roughness={0.2}
              metalness={0.9}
              emissive="#2563eb"
              emissiveIntensity={0.25}
            />
          </mesh>

          {/* Middle Layer: API & Microservices */}
          <mesh ref={block2Ref} position={[0, 0, 0]}>
            <boxGeometry args={[1.8, 0.35, 1.8]} />
            <meshStandardMaterial
              color="#2563eb"
              roughness={0.15}
              metalness={0.8}
              emissive="#3b82f6"
              emissiveIntensity={isHovered ? 0.7 : 0.4}
            />
          </mesh>

          {/* Top Layer: Next.js 15 UI / Edge Atelier */}
          <mesh ref={block3Ref} position={[0, 0.7, 0]}>
            <boxGeometry args={[1.4, 0.35, 1.4]} />
            <meshStandardMaterial
              color="#38bdf8"
              roughness={0.1}
              metalness={0.9}
              emissive="#60a5fa"
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Glowing Corner Conduits */}
          {[-0.9, 0.9].map((x) =>
            [-0.9, 0.9].map((z) => (
              <mesh key={`${x}-${z}`} position={[x, 0, z]}>
                <cylinderGeometry args={[0.03, 0.03, 1.9, 8]} />
                <meshStandardMaterial
                  color="#60a5fa"
                  emissive="#93c5fd"
                  emissiveIntensity={1}
                />
              </mesh>
            ))
          )}
        </group>

        {/* Ambient Tech Sparkles */}
        <Sparkles
          count={isHovered ? 45 : 25}
          scale={4.5}
          size={isHovered ? 3.5 : 2}
          speed={0.5}
          color="#3b82f6"
        />
      </Float>
    </group>
  );
}

// ==========================================
// STATION 3: CLOUD & INFRASTRUCTURE ([30, 0, 0])
// Server Cluster & Edge Indicators
// ==========================================
function CloudInfraStation({ isHovered, onHover }: { isHovered: boolean; onHover: (h: boolean) => void }) {
  const rackGroupRef = useRef<THREE.Group>(null);
  const cloudRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const speed = isHovered ? 2.0 : 0.8;
    if (rackGroupRef.current) {
      rackGroupRef.current.rotation.y += 0.25 * delta * speed;
    }
    if (cloudRingRef.current) {
      cloudRingRef.current.rotation.z -= 0.5 * delta * speed;
    }
  });

  return (
    <group
      position={[30, 0, 0]}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <Float speed={1.9} rotationIntensity={0.9} floatIntensity={1.2}>
        <group ref={rackGroupRef}>
          {/* Main Central Server Column */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.9, 0.9, 2.4, 24]} />
            <meshStandardMaterial
              color="#0f172a"
              roughness={0.25}
              metalness={0.85}
              emissive="#059669"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* LED Glow Rings on the Server Tower */}
          {[-0.7, -0.2, 0.3, 0.8].map((y, idx) => (
            <mesh key={idx} position={[0, y, 0]}>
              <torusGeometry args={[0.92, 0.035, 12, 32]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#34d399"
                emissiveIntensity={isHovered ? 1.5 : 0.9}
              />
            </mesh>
          ))}

          {/* Server Satellite Pods */}
          {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((rad, idx) => {
            const px = Math.cos(rad) * 1.8;
            const pz = Math.sin(rad) * 1.8;
            return (
              <group key={idx} position={[px, 0, pz]}>
                <mesh>
                  <boxGeometry args={[0.45, 1.4, 0.45]} />
                  <meshStandardMaterial
                    color="#1e293b"
                    roughness={0.3}
                    metalness={0.7}
                  />
                </mesh>
                {/* Blinking Status LED */}
                <mesh position={[0, 0.5, 0.24]}>
                  <sphereGeometry args={[0.06, 12, 12]} />
                  <meshStandardMaterial
                    color="#10b981"
                    emissive="#10b981"
                    emissiveIntensity={1.2}
                  />
                </mesh>
              </group>
            );
          })}
        </group>

        {/* Floating Top Edge Cloud Halo */}
        <mesh ref={cloudRingRef} position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 64]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#10b981"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Global CDN Edge Sparkles */}
        <Sparkles
          count={isHovered ? 40 : 25}
          scale={4.5}
          size={isHovered ? 3.5 : 2}
          speed={0.5}
          color="#10b981"
        />
      </Float>
    </group>
  );
}

// ==========================================
// STATION 4: DIGITAL AGENCY & GROWTH ([45, 0, 0])
// Holographic Cards & Metric Lift Pillars
// ==========================================
function DigitalGrowthStation({ isHovered, onHover }: { isHovered: boolean; onHover: (h: boolean) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const arrowRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const speed = isHovered ? 2.2 : 0.9;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.3 * delta * speed;
    }
    if (arrowRef.current) {
      arrowRef.current.position.y = 1.2 + Math.sin(Date.now() * 0.004) * 0.15;
    }
  });

  return (
    <group
      position={[45, 0, 0]}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <group ref={groupRef}>
          {/* Base Platform */}
          <mesh position={[0, -0.9, 0]}>
            <cylinderGeometry args={[1.8, 1.9, 0.2, 32]} />
            <meshStandardMaterial
              color="#1e293b"
              roughness={0.2}
              metalness={0.9}
              emissive="#f59e0b"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* 3 Metric Lift Pillars (Bar Chart Growth) */}
          {[
            { pos: [-0.7, -0.4, 0], h: 0.8, color: "#f59e0b" },
            { pos: [0.0, -0.15, 0], h: 1.3, color: "#fbbf24" },
            { pos: [0.7, 0.2, 0], h: 2.0, color: "#38bdf8" },
          ].map((bar, idx) => (
            <mesh key={idx} position={bar.pos as [number, number, number]}>
              <boxGeometry args={[0.45, bar.h, 0.45]} />
              <meshStandardMaterial
                color={bar.color}
                roughness={0.15}
                metalness={0.8}
                emissive={bar.color}
                emissiveIntensity={isHovered ? 0.7 : 0.35}
              />
            </mesh>
          ))}

          {/* Holographic Floating Ring */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.0, 0.03, 16, 64]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#f59e0b"
              emissiveIntensity={0.7}
            />
          </mesh>
        </group>

        {/* Upward Trending Neon Arrow */}
        <group ref={arrowRef} position={[0, 1.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <mesh>
            <coneGeometry args={[0.3, 0.6, 16]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#f59e0b"
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>

        {/* High-Impact Marketing Sparkles */}
        <Sparkles
          count={isHovered ? 55 : 30}
          scale={5.0}
          size={isHovered ? 4 : 2.5}
          speed={0.6}
          color="#fbbf24"
        />
      </Float>
    </group>
  );
}

// ==========================================
// CONNECTING DATA HIGHWAY (Spatial Grid Floor)
// ==========================================
function SpatialDataGrid() {
  return (
    <group position={[22.5, -2.4, 0]}>
      {/* Subtle guide rail running through all 4 stations */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 60, 16]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#60a5fa"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Light particle dust along the highway */}
      <Sparkles count={80} scale={[55, 3, 8]} size={1.5} speed={0.2} color="#94a3b8" />
    </group>
  );
}

// ==========================================
// MAIN 3D EXPERIENCE EXPORT
// ==========================================
interface Zepra3DExperienceProps {
  activeStationIndex: number;
}

export function Zepra3DExperience({ activeStationIndex }: Zepra3DExperienceProps) {
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);

  return (
    <div className="relative h-full w-full select-none" style={{ touchAction: "pan-y" }}>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 150,
          position: [0, 0.4, 7.2],
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          {/* Ambient & Directional Lighting Matrix */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 20, 15]} intensity={1.4} castShadow={false} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

          {/* Station Point Lights */}
          <pointLight position={[0, 2, 3]} intensity={2.0} color="#06b6d4" distance={10} />
          <pointLight position={[15, 2, 3]} intensity={2.0} color="#3b82f6" distance={10} />
          <pointLight position={[30, 2, 3]} intensity={2.0} color="#10b981" distance={10} />
          <pointLight position={[45, 2, 3]} intensity={2.0} color="#f59e0b" distance={10} />

          {/* 4 Spatial Stations */}
          <AiCoreStation
            isHovered={hoveredStation === 0}
            onHover={(h) => setHoveredStation(h ? 0 : null)}
          />
          <FullStackStation
            isHovered={hoveredStation === 1}
            onHover={(h) => setHoveredStation(h ? 1 : null)}
          />
          <CloudInfraStation
            isHovered={hoveredStation === 2}
            onHover={(h) => setHoveredStation(h ? 2 : null)}
          />
          <DigitalGrowthStation
            isHovered={hoveredStation === 3}
            onHover={(h) => setHoveredStation(h ? 3 : null)}
          />

          {/* Connecting Spatial Highway */}
          <SpatialDataGrid />

          {/* Camera Motion & GSAP Tween Controller */}
          <CameraRig activeStationIndex={activeStationIndex} />
        </Suspense>
      </Canvas>
    </div>
  );
}
