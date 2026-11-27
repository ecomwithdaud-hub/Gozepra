"use client";

import React, { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { FOUNDER_DATA, FounderInfo } from "@/src/data/officeDepartments";
import {
  getWoodFloorTexture,
  getAreaRugTexture,
  getWallArtworkTexture,
  getWindowSkylineTexture,
} from "./officeTextures";
import { officeAudio } from "./officeAudio";

interface OfficeEnvironmentProps {
  onSelectFounder?: (founder: FounderInfo) => void;
  onHoverFounder?: (hovered: boolean) => void;
  selectedAssociateId?: string;
}

export const OfficeEnvironment: React.FC<OfficeEnvironmentProps> = ({
  onSelectFounder,
  onHoverFounder,
  selectedAssociateId,
}) => {
  const [founderHovered, setFounderHovered] = useState(false);
  const pathGlowRef = useRef<THREE.MeshBasicMaterial>(null);
  const founderRingRef = useRef<THREE.Mesh>(null);
  const isFounderSelected = selectedAssociateId === FOUNDER_DATA.id;

  // Textures memoized
  const woodFloorTex = useMemo(() => getWoodFloorTexture(), []);
  const devRugTex = useMemo(() => getAreaRugTexture("#1E293B", "#0F766E"), []);
  const seoRugTex = useMemo(() => getAreaRugTexture("#1E293B", "#0891B2"), []);
  const ecomRugTex = useMemo(() => getAreaRugTexture("#1E293B", "#2563EB"), []);
  const founderRugTex = useMemo(() => getAreaRugTexture("#171E2E", "#D97706"), []);
  const loungeRugTex = useMemo(() => getAreaRugTexture("#1E293B", "#334155"), []);
  const skylineTex = useMemo(() => getWindowSkylineTexture(), []);
  const artArchTex = useMemo(() => getWallArtworkTexture("architecture"), []);
  const artMilestoneTex = useMemo(() => getWallArtworkTexture("milestone"), []);
  const artBrandTex = useMemo(() => getWallArtworkTexture("brand"), []);

  // Subtle pulsing animations
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pathGlowRef.current) {
      pathGlowRef.current.opacity = 0.4 + Math.sin(t * 3) * 0.15;
    }
    if (founderRingRef.current && (founderHovered || isFounderSelected)) {
      founderRingRef.current.rotation.z = t * 1.5;
    }
  });

  const handleFounderClick = (e: any) => {
    e.stopPropagation();
    officeAudio.playClick();
    onSelectFounder?.(FOUNDER_DATA);
  };

  return (
    <group>
      {/* ======================================================== */}
      {/* 1. NATURAL OAK HARDWOOD FLOORING & AREA RUGS */}
      {/* ======================================================== */}
      {/* Main Natural Oak Planks Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[44, 38]} />
        <meshStandardMaterial
          map={woodFloorTex}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Dark Slate Base Subfloor Trim */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.015, 0]}>
        <planeGeometry args={[44.4, 38.4]} />
        <meshStandardMaterial color="#0F172A" roughness={0.7} />
      </mesh>

      {/* Department Pod Area Rugs */}
      {/* Dev Bay Rug */}
      <mesh position={[-9, 0.008, -3.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10.5, 9.5]} />
        <meshStandardMaterial map={devRugTex} roughness={0.8} />
      </mesh>

      {/* SEO Bay Rug */}
      <mesh position={[0, 0.008, -7.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[9.5, 9.5]} />
        <meshStandardMaterial map={seoRugTex} roughness={0.8} />
      </mesh>

      {/* E-Commerce Bay Rug */}
      <mesh position={[9, 0.008, -3.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10.5, 9.5]} />
        <meshStandardMaterial map={ecomRugTex} roughness={0.8} />
      </mesh>

      {/* Founder's Cabin Executive Rug */}
      <mesh position={[-10, 0.008, 8]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[7.2, 7.5]} />
        <meshStandardMaterial map={founderRugTex} roughness={0.8} />
      </mesh>

      {/* Reception Lounge Area Rug */}
      <mesh position={[5.5, 0.008, 10.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6.5, 5.5]} />
        <meshStandardMaterial map={loungeRugTex} roughness={0.85} />
      </mesh>

      {/* ======================================================== */}
      {/* 2. GLOWING INLAID ARCHITECTURAL BRASS/CYAN FLOOR PATHWAYS */}
      {/* ======================================================== */}
      {/* Main Spine: Reception to Center Hub */}
      <mesh position={[0, 0.012, 7.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.22, 9]} />
        <meshBasicMaterial ref={pathGlowRef} color="#2DD4BF" transparent opacity={0.5} />
      </mesh>
      {/* Center Hub to SEO Bay */}
      <mesh position={[0, 0.012, -1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.22, 5]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.4} />
      </mesh>
      {/* Branch to Dev Bay */}
      <mesh position={[-4.5, 0.012, 3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[9, 0.22]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.4} />
      </mesh>
      <mesh position={[-9, 0.012, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.22, 5]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.4} />
      </mesh>
      {/* Branch to E-Com Bay */}
      <mesh position={[4.5, 0.012, 3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[9, 0.22]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.4} />
      </mesh>
      <mesh position={[9, 0.012, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.22, 5]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.4} />
      </mesh>
      {/* Branch to Founder's Cabin */}
      <mesh position={[-5, 0.012, 12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 0.22]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.4} />
      </mesh>
      <mesh position={[-10, 0.012, 11]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.22, 2]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.4} />
      </mesh>

      {/* ======================================================== */}
      {/* 3. FULL-HEIGHT MATTE SLATE WALLS & PANORAMIC WINDOWS */}
      {/* ======================================================== */}
      {/* Back Wall with Large Architectural Windows */}
      <group position={[0, 2.9, -16]}>
        {/* Solid Lower Wall Base */}
        <mesh position={[0, -1.7, 0]} receiveShadow>
          <boxGeometry args={[44, 2.4, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Solid Top Header */}
        <mesh position={[0, 2.3, 0]} receiveShadow>
          <boxGeometry args={[44, 1.2, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Wall Columns between windows */}
        {[-19, -7, 7, 19].map((cx, i) => (
          <mesh key={i} position={[cx, 0.3, 0]} receiveShadow>
            <boxGeometry args={[2.5, 2.8, 0.55]} />
            <meshStandardMaterial color="#1E293B" roughness={0.7} />
          </mesh>
        ))}

        {/* Panoramic Window Panes overlooking city skyline */}
        {[-13, 0, 13].map((wx, i) => (
          <group key={i} position={[wx, 0.3, -0.05]}>
            {/* Window Glass */}
            <mesh>
              <boxGeometry args={[9.5, 2.6, 0.04]} />
              <meshPhysicalMaterial
                color="#E0F2FE"
                roughness={0.08}
                transmission={0.85}
                thickness={0.3}
                transparent
                opacity={0.35}
              />
            </mesh>
            {/* Window Frame Mullions */}
            <mesh position={[0, 0, 0.03]}>
              <boxGeometry args={[9.6, 2.7, 0.08]} />
              <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} wireframe />
            </mesh>
          </group>
        ))}

        {/* Luminous Exterior City Skyline Backdrop Plane */}
        <mesh position={[0, 0.4, -0.8]}>
          <planeGeometry args={[44, 4.5]} />
          <meshBasicMaterial map={skylineTex} />
        </mesh>

        {/* Interior LED Cove Lighting Trim */}
        <mesh position={[0, 2.88, 0.28]}>
          <boxGeometry args={[44, 0.06, 0.06]} />
          <meshBasicMaterial color="#FEF3C7" />
        </mesh>
      </group>

      {/* Left Wall with Milestone Posters & Framed Architecture Art */}
      <group position={[-22, 2.9, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 5.8, 38]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Baseboard */}
        <mesh position={[0.26, -2.75, 0]}>
          <boxGeometry args={[0.04, 0.3, 38]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
      </group>

      {/* Right Wall with Floor-to-Ceiling Windows */}
      <group position={[22, 2.9, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 5.8, 38]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Baseboard */}
        <mesh position={[-0.26, -2.75, 0]}>
          <boxGeometry args={[0.04, 0.3, 38]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
      </group>

      {/* Front Wall with Double Glass Entrance Doors */}
      <group position={[0, 2.9, 16]}>
        {/* Left Front Wall Section */}
        <mesh position={[-13.5, 0, 0]} receiveShadow>
          <boxGeometry args={[17, 5.8, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Right Front Wall Section */}
        <mesh position={[13.5, 0, 0]} receiveShadow>
          <boxGeometry args={[17, 5.8, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Top Header over entrance */}
        <mesh position={[0, 2.1, 0]}>
          <boxGeometry args={[10, 1.6, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>

        {/* Double Glass Entrance Doors at Lobby (z = 16) */}
        <group position={[0, -0.6, 0]}>
          {/* Left Door Leaf */}
          <mesh position={[-1.75, 0, 0]}>
            <boxGeometry args={[3.2, 3.8, 0.06]} />
            <meshPhysicalMaterial
              color="#F0FDFA"
              roughness={0.1}
              transmission={0.8}
              transparent
              opacity={0.35}
            />
          </mesh>
          {/* Right Door Leaf */}
          <mesh position={[1.75, 0, 0]}>
            <boxGeometry args={[3.2, 3.8, 0.06]} />
            <meshPhysicalMaterial
              color="#F0FDFA"
              roughness={0.1}
              transmission={0.8}
              transparent
              opacity={0.35}
            />
          </mesh>
          {/* Brushed Chrome Pull Handles */}
          <mesh position={[-0.25, 0, 0.08]} castShadow>
            <cylinderGeometry args={[0.025, 0.025, 1.2]} />
            <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0.25, 0, 0.08]} castShadow>
            <cylinderGeometry args={[0.025, 0.025, 1.2]} />
            <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      </group>

      {/* ======================================================== */}
      {/* 4. FRAMED WALL ARTWORK & 3D ZEPRA TECH BRAND LOGOS */}
      {/* ======================================================== */}
      {/* Artwork 1: Tech Systems Architecture on Left Wall */}
      <group position={[-21.7, 3.2, -6]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[4.2, 2.8, 0.06]} />
          <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[4.0, 2.6]} />
          <meshBasicMaterial map={artArchTex} />
        </mesh>
        {/* Overhead Picture Light */}
        <mesh position={[0, 1.55, 0.25]}>
          <boxGeometry args={[1.4, 0.05, 0.2]} />
          <meshStandardMaterial color="#475569" metalness={0.8} />
        </mesh>
      </group>

      {/* Artwork 2: Milestone Poster on Left Wall */}
      <group position={[-21.7, 3.2, 4]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[4.2, 2.8, 0.06]} />
          <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[4.0, 2.6]} />
          <meshBasicMaterial map={artMilestoneTex} />
        </mesh>
        <mesh position={[0, 1.55, 0.25]}>
          <boxGeometry args={[1.4, 0.05, 0.2]} />
          <meshStandardMaterial color="#475569" metalness={0.8} />
        </mesh>
      </group>

      {/* Artwork 3: Creative Studio Design Art on Back Wall near E-Com */}
      <group position={[16, 3.2, -15.7]}>
        <mesh castShadow>
          <boxGeometry args={[3.8, 2.4, 0.06]} />
          <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[3.6, 2.2]} />
          <meshBasicMaterial map={artBrandTex} />
        </mesh>
      </group>

      {/* Feature Lobby Sign: Glowing 3D Zepra Tech Logo behind Reception */}
      <group position={[0, 4.2, 15.7]} rotation={[0, Math.PI, 0]}>
        {/* Acrylic backplate */}
        <mesh>
          <boxGeometry args={[6.5, 1.2, 0.08]} />
          <meshStandardMaterial color="#0F172A" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Glowing Teal Neon Outline */}
        <mesh position={[0, 0, 0.045]}>
          <boxGeometry args={[6.3, 1.0, 0.02]} />
          <meshBasicMaterial color="#14B8A6" wireframe />
        </mesh>
        {/* Emissive Text Bar */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[6.1, 0.9]} />
          <meshStandardMaterial
            color="#042F2E"
            emissive="#14B8A6"
            emissiveIntensity={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 5. FROSTED GLASS PARTITION WALLS SEPARATING BAYS */}
      {/* ======================================================== */}
      {/* Glass Partition between Dev Bay & Corridor */}
      <group position={[-4.5, 1.6, -3.5]}>
        <mesh>
          <boxGeometry args={[0.08, 3.2, 11]} />
          <meshPhysicalMaterial
            color="#E0F2FE"
            roughness={0.12}
            transmission={0.85}
            thickness={0.5}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
        {/* Brushed Dark-Metal Base & Header Tracks */}
        <mesh position={[0, -1.58, 0]}>
          <boxGeometry args={[0.14, 0.06, 11]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} />
        </mesh>
        <mesh position={[0, 1.58, 0]}>
          <boxGeometry args={[0.14, 0.06, 11]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} />
        </mesh>
        {/* Vertical Mullion Posts */}
        {[-5, -2.5, 0, 2.5, 5].map((zPos, i) => (
          <mesh key={i} position={[0, 0, zPos]}>
            <boxGeometry args={[0.12, 3.2, 0.08]} />
            <meshStandardMaterial color="#1E293B" metalness={0.85} />
          </mesh>
        ))}
      </group>

      {/* Glass Partition between E-Com Bay & Corridor */}
      <group position={[4.5, 1.6, -3.5]}>
        <mesh>
          <boxGeometry args={[0.08, 3.2, 11]} />
          <meshPhysicalMaterial
            color="#E0F2FE"
            roughness={0.12}
            transmission={0.85}
            thickness={0.5}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
        <mesh position={[0, -1.58, 0]}>
          <boxGeometry args={[0.14, 0.06, 11]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} />
        </mesh>
        <mesh position={[0, 1.58, 0]}>
          <boxGeometry args={[0.14, 0.06, 11]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} />
        </mesh>
        {[-5, -2.5, 0, 2.5, 5].map((zPos, i) => (
          <mesh key={i} position={[0, 0, zPos]}>
            <boxGeometry args={[0.12, 3.2, 0.08]} />
            <meshStandardMaterial color="#1E293B" metalness={0.85} />
          </mesh>
        ))}
      </group>

      {/* ======================================================== */}
      {/* 6. RECEPTION LOBBY & MODERN WAITING LOUNGE */}
      {/* ======================================================== */}
      <group position={[0, 0, 10]}>
        {/* Modern Warm Oak & Fluted Slate Reception Counter */}
        <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[5.2, 1.2, 1.1]} />
          <meshStandardMaterial color="#1E293B" roughness={0.35} metalness={0.6} />
        </mesh>
        {/* Solid Oak Front Counter Trim */}
        <mesh position={[0, 0.6, 0.56]}>
          <boxGeometry args={[4.8, 0.16, 0.02]} />
          <meshStandardMaterial
            color="#14B8A6"
            emissive="#14B8A6"
            emissiveIntensity={1.2}
          />
        </mesh>
        {/* Top Solid Natural Oak Counter Top */}
        <mesh position={[0, 1.22, 0]} castShadow>
          <boxGeometry args={[5.4, 0.08, 1.2]} />
          <meshStandardMaterial color="#B48256" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Receptionist Computer Display */}
        <mesh position={[0, 1.48, -0.15]} castShadow>
          <boxGeometry args={[0.7, 0.45, 0.04]} />
          <meshStandardMaterial
            color="#020617"
            emissive="#14B8A6"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Stylized Receptionist Avatar Behind Counter */}
        <group position={[0, 0.8, -0.6]}>
          <mesh position={[0, 0.32, 0]} castShadow>
            <capsuleGeometry args={[0.22, 0.45, 8, 16]} />
            <meshStandardMaterial color="#0F766E" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.82, 0]} castShadow>
            <sphereGeometry args={[0.18, 20, 20]} />
            <meshStandardMaterial color="#FED7AA" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.9, -0.02]} castShadow>
            <sphereGeometry args={[0.185, 16, 16]} />
            <meshStandardMaterial color="#1E293B" roughness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Modern Reception Waiting Lounge (Right of Lobby) */}
      <group position={[5.5, 0, 10.5]}>
        {/* Designer L-Sofa in Charcoal Fabric */}
        <mesh position={[0, 0.35, -1.2]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.4, 1.0]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.72, -1.6]} castShadow>
          <boxGeometry args={[3.2, 0.5, 0.25]} />
          <meshStandardMaterial color="#1E293B" roughness={0.85} />
        </mesh>
        {/* Sofa return chaise */}
        <mesh position={[1.1, 0.35, -0.3]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.4, 1.0]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
        {/* Teal Accent Throw Pillows */}
        <mesh position={[-1.0, 0.6, -1.4]} castShadow>
          <boxGeometry args={[0.4, 0.35, 0.15]} />
          <meshStandardMaterial color="#0D9488" roughness={0.7} />
        </mesh>
        <mesh position={[0.4, 0.6, -1.4]} castShadow>
          <boxGeometry args={[0.4, 0.35, 0.15]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.7} />
        </mesh>

        {/* Low Minimalist Oak Coffee Table */}
        <mesh position={[-0.4, 0.22, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.08, 0.9]} />
          <meshStandardMaterial color="#B48256" roughness={0.3} />
        </mesh>
        <mesh position={[-0.9, 0.11, -0.35]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.22]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
        <mesh position={[0.1, 0.11, -0.35]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.22]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
        <mesh position={[-0.9, 0.11, 0.35]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.22]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
        <mesh position={[0.1, 0.11, 0.35]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.22]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>

        {/* Magazine / Agency Brochure on table */}
        <mesh position={[-0.4, 0.27, 0]}>
          <boxGeometry args={[0.35, 0.02, 0.26]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.3} />
        </mesh>
      </group>

      {/* Espresso & Refreshment Bar (Left of Lobby near Cabin) */}
      <group position={[-16, 0, 14]}>
        {/* Espresso Counter */}
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 1.0, 1.0]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.5} />
        </mesh>
        {/* Oak Top */}
        <mesh position={[0, 1.03, 0]}>
          <boxGeometry args={[2.9, 0.06, 1.05]} />
          <meshStandardMaterial color="#B48256" roughness={0.3} />
        </mesh>
        {/* Italian Espresso Machine in Brushed Chrome */}
        <group position={[-0.6, 1.25, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.65, 0.45, 0.5]} />
            <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Chrome Portafilter */}
          <mesh position={[0, -0.15, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.2]} />
            <meshStandardMaterial color="#0F172A" />
          </mesh>
          <mesh position={[0, -0.15, 0.18]}>
            <cylinderGeometry args={[0.06, 0.06, 0.08]} />
            <meshStandardMaterial color="#E2E8F0" metalness={0.95} />
          </mesh>
        </group>
        {/* Coffee Mugs & Water Carafe */}
        <mesh position={[0.4, 1.15, -0.15]} castShadow>
          <cylinderGeometry args={[0.07, 0.05, 0.28, 16]} />
          <meshPhysicalMaterial color="#F0FDFA" transmission={0.9} roughness={0.1} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Arrival Waypoint Marker Pad at (0, 0, 12) */}
      <group position={[0, 0.015, 12]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.0, 1.18, 32]} />
          <meshBasicMaterial color="#14B8A6" transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.96, 32]} />
          <meshBasicMaterial color="#14B8A6" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 7. FOUNDER'S CABIN ("DAUD LASHARI — FOUNDER & MANAGING DIRECTOR") */}
      {/* ======================================================== */}
      <group position={[-10, 0, 9]}>
        {/* Full-Height Frosted Glass Enclosure */}
        {/* Front Partition Wall with Framed Doorway */}
        <mesh position={[-2.4, 1.7, 3.2]}>
          <boxGeometry args={[2.8, 3.4, 0.08]} />
          <meshPhysicalMaterial
            color="#E0F2FE"
            roughness={0.15}
            transmission={0.8}
            thickness={0.4}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
        <mesh position={[2.4, 1.7, 3.2]}>
          <boxGeometry args={[2.8, 3.4, 0.08]} />
          <meshPhysicalMaterial
            color="#E0F2FE"
            roughness={0.15}
            transmission={0.8}
            thickness={0.4}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
        {/* Right Glass Partition Wall */}
        <mesh position={[4.2, 1.7, 0]}>
          <boxGeometry args={[0.08, 3.4, 6.4]} />
          <meshPhysicalMaterial
            color="#E0F2FE"
            roughness={0.15}
            transmission={0.8}
            thickness={0.4}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>

        {/* Executive Framed Door with Brass Plaque */}
        <group position={[0, 1.7, 3.2]}>
          {/* Frosted Door Leaf */}
          <mesh>
            <boxGeometry args={[1.8, 3.3, 0.06]} />
            <meshPhysicalMaterial
              color="#F0FDF4"
              roughness={0.12}
              transmission={0.75}
              transparent
              opacity={0.38}
            />
          </mesh>
          {/* Chrome Door Handle */}
          <mesh position={[0.7, -0.1, 0.07]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6]} />
            <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
          </mesh>
          {/* Gold / Brass Executive Nameplate Plaque */}
          <group position={[0, 0.55, 0.045]}>
            <mesh>
              <boxGeometry args={[1.6, 0.35, 0.03]} />
              <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[1.54, 0.29]} />
              <meshStandardMaterial
                color="#0A0E17"
                emissive="#F59E0B"
                emissiveIntensity={0.5}
              />
            </mesh>
          </group>
        </group>

        {/* Solid Natural Oak Executive Desk */}
        <mesh position={[0, 0.74, -1]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 0.1, 1.4]} />
          <meshStandardMaterial color="#B48256" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Chamfered matte-black desk edge */}
        <mesh position={[0, 0.74, -0.28]}>
          <boxGeometry args={[2.82, 0.04, 0.03]} />
          <meshBasicMaterial color="#F59E0B" />
        </mesh>
        {/* Heavy-duty steel pedestals */}
        <mesh position={[-1.2, 0.37, -1]} castShadow>
          <boxGeometry args={[0.35, 0.74, 1.2]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.2, 0.37, -1]} castShadow>
          <boxGeometry args={[0.35, 0.74, 1.2]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Executive Ultra-Wide Curved Display */}
        <group position={[0, 1.15, -1.3]}>
          <mesh castShadow>
            <boxGeometry args={[1.4, 0.58, 0.04]} />
            <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[1.34, 0.52]} />
            <meshStandardMaterial
              color="#0B0F17"
              emissive="#F59E0B"
              emissiveIntensity={0.65}
            />
          </mesh>
        </group>

        {/* Executive Bookshelf & Credenza against back wall */}
        <mesh position={[0, 1.8, -3.2]} castShadow receiveShadow>
          <boxGeometry args={[4.4, 3.6, 0.5]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.5} />
        </mesh>
        {/* Oak interior shelves */}
        {[-0.6, 0.4, 1.4].map((sy, i) => (
          <mesh key={i} position={[0, 1.8 + sy, -2.95]}>
            <boxGeometry args={[4.3, 0.06, 0.45]} />
            <meshStandardMaterial color="#B48256" roughness={0.35} />
          </mesh>
        ))}
        {/* Gold Leadership Award Trophy */}
        <mesh position={[-1.2, 2.4, -2.9]} castShadow>
          <cylinderGeometry args={[0.08, 0.14, 0.5, 16]} />
          <meshStandardMaterial color="#FBBF24" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Executive High-Back Mesh Chair */}
        <group position={[0, 0, -1.8]}>
          <mesh position={[0, 0.52, 0]} castShadow>
            <boxGeometry args={[0.62, 0.1, 0.58]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
          <mesh position={[0, 0.95, -0.26]} castShadow>
            <boxGeometry args={[0.58, 0.85, 0.08]} />
            <meshStandardMaterial color="#0F172A" />
          </mesh>
        </group>

        {/* Interactive Founder Daud Lashari 3D Avatar */}
        <group
          position={[0, 0.88, -1.8]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setFounderHovered(true);
            onHoverFounder?.(true);
            if (typeof document !== "undefined") document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setFounderHovered(false);
            onHoverFounder?.(false);
            if (typeof document !== "undefined") document.body.style.cursor = "auto";
          }}
          onClick={handleFounderClick}
        >
          {/* Hitbox */}
          <mesh position={[0, 0.5, 0]} visible={false}>
            <cylinderGeometry args={[0.8, 0.8, 2.0]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          {/* Torso in tailored charcoal blazer */}
          <mesh position={[0, 0.38, 0]} castShadow>
            <capsuleGeometry args={[0.24, 0.48, 8, 16]} />
            <meshStandardMaterial
              color={founderHovered || isFounderSelected ? "#D97706" : "#1E293B"}
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          {/* Crisp White Shirt Collar & Gold Tie */}
          <mesh position={[0, 0.42, 0.18]}>
            <boxGeometry args={[0.07, 0.32, 0.02]} />
            <meshBasicMaterial color="#F59E0B" />
          </mesh>
          {/* Head & Neck */}
          <mesh position={[0, 0.72, 0]}>
            <cylinderGeometry args={[0.07, 0.08, 0.12]} />
            <meshStandardMaterial color="#FED7AA" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.88, 0]} castShadow>
            <sphereGeometry args={[0.19, 24, 24]} />
            <meshStandardMaterial color="#FED7AA" roughness={0.5} />
          </mesh>
          {/* Sculpted Hair */}
          <mesh position={[0, 0.98, -0.02]} castShadow>
            <sphereGeometry args={[0.195, 16, 16]} />
            <meshStandardMaterial color="#090D16" roughness={0.7} />
          </mesh>
        </group>

        {/* Founder Glowing Floor Ring */}
        <mesh
          ref={founderRingRef}
          position={[0, 0.02, -1.8]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.7, 0.85, 32]} />
          <meshBasicMaterial
            color="#F59E0B"
            transparent
            opacity={founderHovered || isFounderSelected ? 0.95 : 0.35}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 8. INDOOR ARCHITECTURAL POTTED PLANTS (MONSTERA / FIDDLE-LEAF) */}
      {/* ======================================================== */}
      {[
        [-3.6, 0, 9.8], // Left of reception
        [3.6, 0, 9.8],  // Right of reception
        [-20, 0, -14],  // Back-left corner
        [20, 0, -14],   // Back-right corner
        [-4.5, 0, 2.5], // End of Dev glass partition
        [4.5, 0, 2.5],  // End of E-Com glass partition
      ].map((pos, idx) => (
        <group key={idx} position={[pos[0], pos[1], pos[2]]}>
          {/* Ceramic White Cylindrical Planter */}
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.38, 0.3, 0.9, 24]} />
            <meshStandardMaterial color="#F8FAFC" roughness={0.2} metalness={0.1} />
          </mesh>
          {/* Dark Soil */}
          <mesh position={[0, 0.88, 0]}>
            <cylinderGeometry args={[0.36, 0.36, 0.05, 24]} />
            <meshStandardMaterial color="#29180C" roughness={0.9} />
          </mesh>
          {/* Multi-leaf Fiddle-Leaf / Monstera cluster */}
          {[0, 1.2, 2.4, 3.6, 4.8].map((angle, leafIdx) => (
            <group
              key={leafIdx}
              position={[0, 0.9 + leafIdx * 0.12, 0]}
              rotation={[0.3, angle, 0.4]}
            >
              {/* Leaf stem */}
              <mesh position={[0, 0.15, 0]}>
                <cylinderGeometry args={[0.015, 0.02, 0.35]} />
                <meshStandardMaterial color="#15803D" />
              </mesh>
              {/* Broad Glossy Green Leaf */}
              <mesh position={[0, 0.32, 0]} rotation={[0.4, 0, 0]} castShadow>
                <sphereGeometry args={[0.22, 12, 8]} />
                <meshStandardMaterial color="#16A34A" roughness={0.35} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
};
