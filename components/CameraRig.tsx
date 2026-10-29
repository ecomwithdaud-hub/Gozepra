"use client";

import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export interface StationConfig {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  coords: [number, number, number];
  cameraOffsetDesktop: [number, number, number];
  cameraOffsetMobile: [number, number, number];
  lookAtOffset: [number, number, number];
  color: string;
  accent: string;
}

export const STATIONS: StationConfig[] = [
  {
    id: "ai-systems",
    name: "AI & Autonomous Systems",
    shortName: "AI & Core",
    tag: "Neural Architecture",
    coords: [0, 0, 0],
    cameraOffsetDesktop: [0, 0.4, 7.2],
    cameraOffsetMobile: [0, 0.6, 10.5],
    lookAtOffset: [0, 0, 0],
    color: "#06b6d4",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "fullstack-eng",
    name: "Full-Stack Web Engineering",
    shortName: "Web & Platforms",
    tag: "Next.js 15 Edge",
    coords: [15, 0, 0],
    cameraOffsetDesktop: [15, 0.4, 7.2],
    cameraOffsetMobile: [15, 0.6, 10.5],
    lookAtOffset: [15, 0, 0],
    color: "#3b82f6",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "cloud-infra",
    name: "Cloud & Edge Infrastructure",
    shortName: "Cloud & Edge",
    tag: "Sub-0.8s Global CDN",
    coords: [30, 0, 0],
    cameraOffsetDesktop: [30, 0.4, 7.2],
    cameraOffsetMobile: [30, 0.6, 10.5],
    lookAtOffset: [30, 0, 0],
    color: "#10b981",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "digital-growth",
    name: "Digital Agency & Growth",
    shortName: "Growth & Ads",
    tag: "Performance Scaling",
    coords: [45, 0, 0],
    cameraOffsetDesktop: [45, 0.4, 7.2],
    cameraOffsetMobile: [45, 0.6, 10.5],
    lookAtOffset: [45, 0, 0],
    color: "#f59e0b",
    accent: "from-amber-500 to-rose-600",
  },
];

interface CameraRigProps {
  activeStationIndex: number;
}

export function CameraRig({ activeStationIndex }: CameraRigProps) {
  const { camera, size } = useThree();
  const isMobile = size.width < 768;

  // Internal animated target coordinates
  const animTarget = useRef({
    posX: 0,
    posY: 0.4,
    posZ: 7.2,
    lookX: 0,
    lookY: 0,
    lookZ: 0,
  });

  const pointerOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const station = STATIONS[activeStationIndex] || STATIONS[0];
    const offset = isMobile
      ? station.cameraOffsetMobile
      : station.cameraOffsetDesktop;

    const targetLookX = station.coords[0] + station.lookAtOffset[0];
    const targetLookY = station.coords[1] + station.lookAtOffset[1];
    const targetLookZ = station.coords[2] + station.lookAtOffset[2];

    gsap.to(animTarget.current, {
      posX: offset[0],
      posY: offset[1],
      posZ: offset[2],
      lookX: targetLookX,
      lookY: targetLookY,
      lookZ: targetLookZ,
      duration: 1.8,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  }, [activeStationIndex, isMobile]);

  useFrame((state, delta) => {
    // Subtle, gentle pointer sway for natural physics without causing disorientation
    const targetPointerX = (state.pointer.x * (isMobile ? 0.3 : 0.6));
    const targetPointerY = (state.pointer.y * (isMobile ? 0.2 : 0.4));

    pointerOffset.current.x = THREE.MathUtils.damp(
      pointerOffset.current.x,
      targetPointerX,
      4,
      delta
    );
    pointerOffset.current.y = THREE.MathUtils.damp(
      pointerOffset.current.y,
      targetPointerY,
      4,
      delta
    );

    // Apply smoothly damped position
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      animTarget.current.posX + pointerOffset.current.x,
      5,
      delta
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      animTarget.current.posY + pointerOffset.current.y,
      5,
      delta
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      animTarget.current.posZ,
      5,
      delta
    );

    // Camera look target
    camera.lookAt(
      animTarget.current.lookX,
      animTarget.current.lookY,
      animTarget.current.lookZ
    );
  });

  return null;
}
