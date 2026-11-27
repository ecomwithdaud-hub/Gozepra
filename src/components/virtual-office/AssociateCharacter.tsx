"use client";

import React, { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Associate } from "@/src/data/officeDepartments";
import {
  getCodeScreenTexture,
  getSeoAnalyticsScreenTexture,
  getEcomScreenTexture,
} from "./officeTextures";
import { officeAudio } from "./officeAudio";

interface AssociateCharacterProps {
  associate: Associate;
  isSelected?: boolean;
  onSelect: (associate: Associate) => void;
  onHover?: (associate: Associate | null) => void;
}

export const AssociateCharacter: React.FC<AssociateCharacterProps> = ({
  associate,
  isSelected = false,
  onSelect,
  onHover,
}) => {
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftHandRef = useRef<THREE.Mesh>(null);
  const rightHandRef = useRef<THREE.Mesh>(null);
  const torsoRef = useRef<THREE.Group>(null);

  // Active Screen Texture memoized based on department
  const mainScreenTexture = useMemo(() => {
    if (associate.departmentId === "dev") return getCodeScreenTexture();
    if (associate.departmentId === "seo") return getSeoAnalyticsScreenTexture();
    return getEcomScreenTexture();
  }, [associate.departmentId]);

  // Secondary telemetry screen texture
  const subScreenTexture = useMemo(() => {
    if (associate.departmentId === "dev") return getSeoAnalyticsScreenTexture();
    if (associate.departmentId === "seo") return getCodeScreenTexture();
    return getCodeScreenTexture();
  }, [associate.departmentId]);

  // Unique seed per associate for desynchronized idle animations
  const seed = useMemo(() => {
    let s = 0;
    for (let i = 0; i < associate.id.length; i++) s += associate.id.charCodeAt(i);
    return s;
  }, [associate.id]);

  // Lifelike idle animations: breathing, head turns between screens, typing hands
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + seed;

    // Glowing selection ring pulse
    if (ringRef.current && (hovered || isSelected)) {
      ringRef.current.rotation.z = t * 1.5;
      const s = 1 + Math.sin(t * 4) * 0.08;
      ringRef.current.scale.set(s, s, s);
    }

    // Natural chest breathing
    if (torsoRef.current) {
      torsoRef.current.position.y = 0.84 + Math.sin(t * 2.2) * 0.012;
      torsoRef.current.rotation.x = Math.sin(t * 2.2) * 0.015;
    }

    // Head micro-rotations
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.8) * 0.28;
      headRef.current.rotation.x = 0.12;
    }

    // Alternating typing hand motions only when hovered/selected
    if (hovered || isSelected) {
      if (leftHandRef.current) {
        leftHandRef.current.position.y = 0.77 + Math.sin(t * 14) * 0.008;
      }
      if (rightHandRef.current) {
        rightHandRef.current.position.y = 0.77 + Math.cos(t * 12) * 0.008;
      }
    }
  });

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    onHover?.(associate);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "pointer";
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover?.(null);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "auto";
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    officeAudio.playClick();
    onSelect(associate);
  };

  const [dx, dy, dz] = associate.deskPosition;

  // Outfit styling variants based on role
  const outfitColor = associate.avatarColor || "#1E293B";
  const skinColor = "#FED7AA";
  const hairColor =
    associate.id.includes("1") ? "#1E293B" :
    associate.id.includes("2") ? "#29180C" :
    associate.id.includes("3") ? "#172554" : "#0F172A";

  return (
    <group position={[dx, dy, dz]}>
      {/* ======================================================== */}
      {/* 1. UPGRADED WORKSTATION: NATURAL OAK & INDUSTRIAL STEEL */}
      {/* ======================================================== */}
      {/* Solid Oak Tabletop with Beveled Edge */}
      <mesh position={[0, 0.74, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.3, 0.08, 1.25]} />
        <meshStandardMaterial color="#B48256" roughness={0.32} metalness={0.08} />
      </mesh>
      {/* Subtle Chamfered Edge Underlay */}
      <mesh position={[0, 0.70, 0]}>
        <boxGeometry args={[2.28, 0.03, 1.23]} />
        <meshStandardMaterial color="#8C5E35" roughness={0.5} />
      </mesh>

      {/* Heavy-Duty Industrial Matte-Black Steel Trestle Legs */}
      <mesh position={[-0.95, 0.35, -0.45]} castShadow>
        <boxGeometry args={[0.06, 0.7, 0.06]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[0.95, 0.35, -0.45]} castShadow>
        <boxGeometry args={[0.06, 0.7, 0.06]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[-0.95, 0.35, 0.45]} castShadow>
        <boxGeometry args={[0.06, 0.7, 0.06]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[0.95, 0.35, 0.45]} castShadow>
        <boxGeometry args={[0.06, 0.7, 0.06]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.3} />
      </mesh>
      {/* Bottom Crossbar between legs */}
      <mesh position={[-0.95, 0.08, 0]}>
        <boxGeometry args={[0.05, 0.04, 0.88]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} />
      </mesh>
      <mesh position={[0.95, 0.08, 0]}>
        <boxGeometry args={[0.05, 0.04, 0.88]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} />
      </mesh>

      {/* Desk Accessories: Felt Mat, Keyboard, Mouse, Mug, Lamp */}
      {/* Dark Felt Desk Blotter */}
      <mesh position={[0, 0.785, 0.12]} receiveShadow>
        <boxGeometry args={[1.4, 0.008, 0.55]} />
        <meshStandardMaterial color="#1E293B" roughness={0.85} />
      </mesh>
      {/* Mechanical Backlit Keyboard */}
      <mesh position={[-0.1, 0.795, 0.16]}>
        <boxGeometry args={[0.48, 0.015, 0.16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.4} />
      </mesh>
      {/* Glowing keyboard keybed */}
      <mesh position={[-0.1, 0.803, 0.16]}>
        <boxGeometry args={[0.45, 0.005, 0.13]} />
        <meshStandardMaterial
          color="#090D16"
          emissive={associate.accentColor || "#14B8A6"}
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Ergonomic Wireless Mouse */}
      <mesh position={[0.32, 0.795, 0.16]}>
        <boxGeometry args={[0.09, 0.02, 0.13]} />
        <meshStandardMaterial color="#0F172A" roughness={0.3} />
      </mesh>
      {/* Ceramic Coffee Mug */}
      <mesh position={[-0.75, 0.83, 0.15]} castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.09, 16]} />
        <meshStandardMaterial color="#F8FAFC" roughness={0.25} />
      </mesh>
      {/* Modern Gooseneck Architect Desk Lamp */}
      <group position={[0.85, 0.78, -0.3]}>
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
        <mesh position={[-0.1, 0.28, 0.1]} rotation={[0.4, 0, -0.3]}>
          <cylinderGeometry args={[0.012, 0.012, 0.45]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
        <mesh position={[-0.2, 0.46, 0.18]} rotation={[0.8, 0, 0]}>
          <coneGeometry args={[0.06, 0.12, 16]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 2. DUAL ULTRA-THIN BEZEL MONITORS WITH ACTIVE PROCEDURAL SCREENS */}
      {/* ======================================================== */}
      {/* Articulated Dual Monitor Arm Clamp mounted to back of desk */}
      <mesh position={[0, 0.88, -0.48]}>
        <cylinderGeometry args={[0.025, 0.025, 0.35]} />
        <meshStandardMaterial color="#0F172A" metalness={0.9} />
      </mesh>

      {/* Main Left Monitor (Active Code Editor / SEO / E-Com UI) */}
      <group position={[-0.48, 1.12, -0.26]} rotation={[0, 0.16, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.88, 0.52, 0.025]} />
          <meshStandardMaterial color="#090D16" roughness={0.2} metalness={0.85} />
        </mesh>
        {/* Active Illuminated Display Screen */}
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[0.84, 0.48]} />
          <meshStandardMaterial
            map={mainScreenTexture}
            emissive="#FFFFFF"
            emissiveMap={mainScreenTexture}
            emissiveIntensity={0.85}
            roughness={0.15}
          />
        </mesh>
      </group>

      {/* Secondary Right Monitor (Telemetry / Terminal / Secondary UI) */}
      <group position={[0.48, 1.12, -0.22]} rotation={[0, -0.18, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.88, 0.52, 0.025]} />
          <meshStandardMaterial color="#090D16" roughness={0.2} metalness={0.85} />
        </mesh>
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[0.84, 0.48]} />
          <meshStandardMaterial
            map={subScreenTexture}
            emissive="#FFFFFF"
            emissiveMap={subScreenTexture}
            emissiveIntensity={0.7}
            roughness={0.15}
          />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 3. ERGONOMIC MESH CHAIR WITH 5-STAR CASTER BASE */}
      {/* ======================================================== */}
      <group position={[0, 0, 0.62]}>
        {/* Contoured Mesh Seat Cushion */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.56, 0.09, 0.52]} />
          <meshStandardMaterial color="#1E293B" roughness={0.7} />
        </mesh>
        {/* Ergonomic High-Back Lumbar Support Backrest */}
        <mesh position={[0, 0.88, 0.24]} rotation={[-0.1, 0, 0]} castShadow>
          <boxGeometry args={[0.52, 0.68, 0.06]} />
          <meshStandardMaterial color="#0F172A" roughness={0.8} />
        </mesh>
        {/* Adjustable Armrests */}
        <mesh position={[-0.3, 0.72, 0.05]} castShadow>
          <boxGeometry args={[0.07, 0.04, 0.28]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
        <mesh position={[0.3, 0.72, 0.05]} castShadow>
          <boxGeometry args={[0.07, 0.04, 0.28]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
        {/* Pneumatic Gas Lift Cylinder */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.48]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* 5-Star Chrome Base */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.04, 5]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.15} />
        </mesh>
      </group>

      {/* ======================================================== */}
      {/* 4. DETAILED LIFELIKE STYLIZED HUMAN CHARACTER */}
      {/* ======================================================== */}
      <group
        ref={torsoRef}
        position={[0, 0.84, 0.56]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {/* Click Hitbox */}
        <mesh position={[0, 0.4, 0]} visible={false}>
          <cylinderGeometry args={[0.65, 0.65, 1.8]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Tailored Smart-Casual Outfit / Torso */}
        <mesh position={[0, 0.32, 0]} castShadow>
          <capsuleGeometry args={[0.22, 0.44, 8, 16]} />
          <meshStandardMaterial
            color={hovered || isSelected ? associate.accentColor : outfitColor}
            roughness={0.35}
            metalness={0.15}
          />
        </mesh>

        {/* White / Light Accent Collar */}
        <mesh position={[0, 0.52, 0.12]}>
          <boxGeometry args={[0.1, 0.14, 0.04]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.4} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.64, 0]}>
          <cylinderGeometry args={[0.07, 0.08, 0.12]} />
          <meshStandardMaterial color={skinColor} roughness={0.5} />
        </mesh>

        {/* Head with Animated Micro-Glance Rotations */}
        <group ref={headRef} position={[0, 0.78, 0]}>
          {/* Facial Head Base */}
          <mesh castShadow>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshStandardMaterial color={skinColor} roughness={0.5} />
          </mesh>

          {/* Sculpted Hair */}
          <mesh position={[0, 0.09, -0.02]} castShadow>
            <sphereGeometry args={[0.185, 16, 16]} />
            <meshStandardMaterial color={hairColor} roughness={0.7} />
          </mesh>

          {/* Wireframe Spectacles / Designer Glasses */}
          <mesh position={[0, 0.02, 0.16]}>
            <boxGeometry args={[0.22, 0.05, 0.04]} />
            <meshStandardMaterial
              color="#0F172A"
              emissive={associate.accentColor || "#14B8A6"}
              emissiveIntensity={hovered || isSelected ? 1.4 : 0.6}
            />
          </mesh>
        </group>

        {/* Articulated Typing Arms resting on desk */}
        {/* Left Arm & Typing Hand */}
        <mesh position={[-0.24, 0.22, -0.16]} rotation={[-0.45, 0.25, 0]} castShadow>
          <capsuleGeometry args={[0.065, 0.3, 6, 12]} />
          <meshStandardMaterial color={outfitColor} />
        </mesh>
        <mesh ref={leftHandRef} position={[-0.14, -0.05, -0.38]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>

        {/* Right Arm & Mouse Hand */}
        <mesh position={[0.24, 0.22, -0.16]} rotation={[-0.45, -0.25, 0]} castShadow>
          <capsuleGeometry args={[0.065, 0.3, 6, 12]} />
          <meshStandardMaterial color={outfitColor} />
        </mesh>
        <mesh ref={rightHandRef} position={[0.24, -0.05, -0.38]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
      </group>

      {/* Glowing Floor Target Ring beneath Associate */}
      <mesh
        ref={ringRef}
        position={[0, 0.02, 0.58]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[0.55, 0.68, 32]} />
        <meshBasicMaterial
          color={associate.accentColor || "#14B8A6"}
          transparent
          opacity={hovered || isSelected ? 0.95 : 0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
