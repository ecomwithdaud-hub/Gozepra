"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { officeAudio } from "./officeAudio";
import { getYouBadgeTexture } from "./officeTextures";

interface AvatarControllerProps {
  targetPosition: [number, number, number];
  onArrival?: () => void;
}

export const AvatarController: React.FC<AvatarControllerProps> = ({
  targetPosition,
  onArrival,
}) => {
  const avatarGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  const currentPos = useRef(new THREE.Vector3(targetPosition[0], targetPosition[1], targetPosition[2]));
  const targetVec = useRef(new THREE.Vector3(...targetPosition));
  const isWalkingRef = useRef(false);
  const lastFootstepTime = useRef(0);
  const hasTriggeredArrival = useRef(false);

  // Update target whenever prop changes
  useEffect(() => {
    targetVec.current.set(...targetPosition);
    hasTriggeredArrival.current = false;
  }, [targetPosition]);

  useFrame((state, delta) => {
    if (!avatarGroupRef.current) return;

    const current = currentPos.current;
    const target = targetVec.current;
    const dist = current.distanceTo(target);

    if (dist > 0.08) {
      isWalkingRef.current = true;
      // Lerp position towards destination
      const speed = Math.min(delta * 4.8, 0.25);
      current.lerp(target, speed);
      avatarGroupRef.current.position.copy(current);

      // Smoothly rotate towards movement direction
      const dx = target.x - current.x;
      const dz = target.z - current.z;
      const targetAngle = Math.atan2(dx, dz);

      // Interpolate rotation
      const currentRot = avatarGroupRef.current.rotation.y;
      let diff = targetAngle - currentRot;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      avatarGroupRef.current.rotation.y += diff * Math.min(delta * 12, 1);

      // Realistic Walking Stride Cycle
      const t = state.clock.getElapsedTime();
      const walkCycle = t * 11;
      const stride = Math.sin(walkCycle);

      // Articulated Leg Swings
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = stride * 0.52;
        rightLegRef.current.rotation.x = -stride * 0.52;
      }

      // Natural Counter Arm Swings
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = -stride * 0.45;
        rightArmRef.current.rotation.x = stride * 0.45;
      }

      // Vertical Body Bobbing on foot strikes
      const bob = Math.abs(Math.sin(walkCycle)) * 0.08;
      avatarGroupRef.current.position.y = bob;

      // Subtle footstep sound
      if (t - lastFootstepTime.current > 0.3) {
        officeAudio.playFootstep();
        lastFootstepTime.current = t;
      }
    } else {
      // Arrived at destination / Idle State
      isWalkingRef.current = false;
      current.copy(target);
      avatarGroupRef.current.position.copy(target);

      // Return limbs smoothly to relaxed standing posture
      const decay = Math.min(delta * 8, 1);
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = THREE.MathUtils.lerp(leftLegRef.current.rotation.x, 0, decay);
        rightLegRef.current.rotation.x = THREE.MathUtils.lerp(rightLegRef.current.rotation.x, 0, decay);
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, decay);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0, decay);
      }

      // Subtle natural breathing
      const t = state.clock.getElapsedTime();
      avatarGroupRef.current.position.y = Math.sin(t * 2) * 0.02;

      if (!hasTriggeredArrival.current) {
        hasTriggeredArrival.current = true;
        onArrival?.();
      }
    }
  });

  return (
    <group ref={avatarGroupRef} position={targetPosition}>
      {/* Floating "YOU" Pill Tag (100% WebGL Billboard, Zero React root unmount race conditions) */}
      <Billboard
        position={[0, 2.38, 0]}
        follow
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <mesh>
          <planeGeometry args={[1.08, 0.42]} />
          <meshBasicMaterial
            map={getYouBadgeTexture()}
            transparent
            toneMapped={false}
            depthTest={false}
          />
        </mesh>
      </Billboard>

      {/* ======================================================== */}
      {/* LIFELIKE DETAILED HUMAN VISITOR AVATAR */}
      {/* ======================================================== */}
      {/* Torso & Tailored Smart-Casual Agency Overshirt */}
      <group position={[0, 0.88, 0]}>
        <mesh position={[0, 0.18, 0]} castShadow>
          <capsuleGeometry args={[0.22, 0.44, 8, 16]} />
          <meshStandardMaterial
            color="#1E293B"
            roughness={0.4}
            metalness={0.2}
          />
        </mesh>
        {/* Teal Brand Accent Trim on collar */}
        <mesh position={[0, 0.38, 0.14]}>
          <boxGeometry args={[0.08, 0.22, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
      </group>

      {/* Head, Neck & Hair */}
      <group ref={headRef} position={[0, 1.42, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.07, 0.08, 0.14]} />
          <meshStandardMaterial color="#FED7AA" roughness={0.5} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.185, 24, 24]} />
          <meshStandardMaterial color="#FED7AA" roughness={0.5} />
        </mesh>
        {/* Modern Stylized Hair */}
        <mesh position={[0, 0.14, -0.02]} castShadow>
          <sphereGeometry args={[0.19, 16, 16]} />
          <meshStandardMaterial color="#0B0F17" roughness={0.8} />
        </mesh>
        {/* Tech Visor / Sunglasses */}
        <mesh position={[0, 0.05, 0.16]}>
          <boxGeometry args={[0.23, 0.055, 0.05]} />
          <meshStandardMaterial
            color="#0B0F17"
            emissive="#2DD4BF"
            emissiveIntensity={1.2}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Articulated Arms */}
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.26, 1.25, 0]}>
        <mesh position={[0, -0.22, 0]} castShadow>
          <capsuleGeometry args={[0.06, 0.35, 6, 12]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.42, 0]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#FED7AA" />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.26, 1.25, 0]}>
        <mesh position={[0, -0.22, 0]} castShadow>
          <capsuleGeometry args={[0.06, 0.35, 6, 12]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.42, 0]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#FED7AA" />
        </mesh>
      </group>

      {/* Articulated Legs */}
      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.12, 0.68, 0]}>
        <mesh position={[0, -0.32, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.065, 0.65]} />
          <meshStandardMaterial color="#0F172A" roughness={0.6} />
        </mesh>
        {/* Sneaker with White Sole */}
        <mesh position={[0, -0.65, 0.04]} castShadow>
          <boxGeometry args={[0.11, 0.08, 0.22]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0, -0.68, 0.04]}>
          <boxGeometry args={[0.115, 0.02, 0.23]} />
          <meshStandardMaterial color="#F8FAFC" />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.12, 0.68, 0]}>
        <mesh position={[0, -0.32, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.065, 0.65]} />
          <meshStandardMaterial color="#0F172A" roughness={0.6} />
        </mesh>
        {/* Sneaker with White Sole */}
        <mesh position={[0, -0.65, 0.04]} castShadow>
          <boxGeometry args={[0.11, 0.08, 0.22]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0, -0.68, 0.04]}>
          <boxGeometry args={[0.115, 0.02, 0.23]} />
          <meshStandardMaterial color="#F8FAFC" />
        </mesh>
      </group>

      {/* Dynamic Player Floor Shadow Ring */}
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.32, 0.48, 32]} />
        <meshBasicMaterial
          color="#2DD4BF"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};
