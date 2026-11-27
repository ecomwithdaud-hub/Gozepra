"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import type CameraControlsImpl from "camera-controls";
import {
  Department,
  Associate,
  FounderInfo,
  OFFICE_DEPARTMENTS,
  OFFICE_WAYPOINTS,
  FOUNDER_DATA,
} from "@/src/data/officeDepartments";
import { OfficeEnvironment } from "./OfficeEnvironment";
import { DepartmentBay } from "./DepartmentBay";
import { AvatarController } from "./AvatarController";

interface OfficeCanvasProps {
  playerTargetPosition: [number, number, number];
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  selectedAssociateId?: string;
  onSelectAssociate: (associate: Associate) => void;
  onSelectFounder: (founder: FounderInfo) => void;
  onArrival?: () => void;
  onHoverAssociate?: (associate: Associate | null) => void;
  onHoverFounder?: (hovered: boolean) => void;
  isFastMode?: boolean;
}

function SceneContent({
  playerTargetPosition,
  cameraPosition,
  cameraTarget,
  selectedAssociateId,
  onSelectAssociate,
  onSelectFounder,
  onArrival,
  onHoverAssociate,
  onHoverFounder,
  isFastMode = false,
}: OfficeCanvasProps) {
  const controlsRef = useRef<CameraControlsImpl>(null);

  // Smoothly move camera whenever cameraPosition or cameraTarget changes
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.setLookAt(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        cameraTarget[0],
        cameraTarget[1],
        cameraTarget[2],
        true // enableTransition
      );
    }
  }, [cameraPosition, cameraTarget]);

  return (
    <>
      {/* 100% Procedural Offline Lighting Studio (Zero External .hdr Downloads) */}
      <Environment background={false}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial side={THREE.BackSide} color="#F8FAFC" />
        </mesh>
        <mesh position={[0, 16, 0]} scale={[20, 1, 20]}>
          <boxGeometry />
          <meshBasicMaterial color="#FFFBEB" />
        </mesh>
        <mesh position={[-16, 8, -10]} scale={[1, 10, 20]}>
          <boxGeometry />
          <meshBasicMaterial color="#BAE6FD" />
        </mesh>
        <mesh position={[16, 8, 10]} scale={[1, 10, 20]}>
          <boxGeometry />
          <meshBasicMaterial color="#E0F2FE" />
        </mesh>
      </Environment>

      {/* Cinematic Isometric-Feel Camera Controls */}
      <CameraControls
        ref={controlsRef}
        makeDefault
        smoothTime={0.8}
        minDistance={5}
        maxDistance={45}
        maxPolarAngle={Math.PI / 2.08} // Prevent dipping beneath floor
        minPolarAngle={Math.PI / 8}
        dollySpeed={0.8}
        truckSpeed={0.8}
      />

      {/* ======================================================== */}
      {/* STUDIO & ARCHITECTURAL LIGHTING (High Efficiency) */}
      {/* ======================================================== */}
      {/* Warm Sky / Ground Architectural Hemisphere Light */}
      <hemisphereLight
        args={["#FFFBEB", "#1E293B", 1.15]}
      />

      {/* Soft Ambient Light for Even Task Illumination */}
      <ambientLight color="#F8FAFC" intensity={0.55} />

      {/* Main Directional Sunlight with Optimized Shadow Bounds */}
      <directionalLight
        position={[22, 34, 26]}
        intensity={1.65}
        color="#FFFDF5"
        castShadow={!isFastMode}
        shadow-mapSize-width={isFastMode ? 512 : 1024}
        shadow-mapSize-height={isFastMode ? 512 : 1024}
        shadow-camera-near={15}
        shadow-camera-far={65}
        shadow-camera-left={-24}
        shadow-camera-right={24}
        shadow-camera-top={24}
        shadow-camera-bottom={-24}
        shadow-bias={-0.0004}
      />

      {/* Secondary Soft Fill Skylight from opposite corner */}
      <directionalLight
        position={[-20, 24, -20]}
        intensity={0.45}
        color="#BAE6FD"
      />

      {/* Base Office Environment: Hardwood Floor, Rugs, Walls, Windows, Lounge, Decor */}
      <OfficeEnvironment
        onSelectFounder={onSelectFounder}
        onHoverFounder={onHoverFounder}
        selectedAssociateId={selectedAssociateId}
      />

      {/* 3 Department Bays (Dev, SEO, E-Com) with Workstations & Active Screens */}
      {OFFICE_DEPARTMENTS.map((dept) => (
        <DepartmentBay
          key={dept.id}
          department={dept}
          selectedAssociateId={selectedAssociateId}
          onSelectAssociate={onSelectAssociate}
          onHoverAssociate={onHoverAssociate}
        />
      ))}

      {/* Stylized Human Player Avatar ("YOU") */}
      <AvatarController
        targetPosition={playerTargetPosition}
        onArrival={onArrival}
      />
    </>
  );
}

export const OfficeCanvas: React.FC<OfficeCanvasProps> = (props) => {
  return (
    <div className="relative w-full h-full bg-[#0F172A] select-none">
      <Canvas
        shadows={!props.isFastMode}
        dpr={props.isFastMode ? 1 : [1, 1.25]}
        performance={{ min: 0.5 }}
        camera={{
          position: props.cameraPosition || OFFICE_WAYPOINTS.receptionCamera,
          fov: 38,
          near: 0.1,
          far: 140,
        }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        <color attach="background" args={["#0F172A"]} />
        <fog attach="fog" args={["#0F172A", 42, 110]} />
        <React.Suspense fallback={null}>
          <SceneContent {...props} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
