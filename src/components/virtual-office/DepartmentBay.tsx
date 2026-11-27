"use client";

import React from "react";
import * as THREE from "three";
import { Department, Associate } from "@/src/data/officeDepartments";
import { AssociateCharacter } from "./AssociateCharacter";

interface DepartmentBayProps {
  department: Department;
  selectedAssociateId?: string;
  onSelectAssociate: (associate: Associate) => void;
  onHoverAssociate?: (associate: Associate | null) => void;
}

export const DepartmentBay: React.FC<DepartmentBayProps> = ({
  department,
  selectedAssociateId,
  onSelectAssociate,
  onHoverAssociate,
}) => {
  const [wx, wy, wz] = department.walkWaypoint;

  return (
    <group>
      {/* 4 Workstations & Team Associates */}
      {department.associates.map((associate) => (
        <AssociateCharacter
          key={associate.id}
          associate={associate}
          isSelected={selectedAssociateId === associate.id}
          onSelect={onSelectAssociate}
          onHover={onHoverAssociate}
        />
      ))}

      {/* Overhead Architectural Glowing Department Sign */}
      <group position={[wx, 4.2, wz - 2.5]}>
        {/* Brushed Stainless Steel Support Rods from ceiling */}
        <mesh position={[-1.9, 0.9, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.8]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
        <mesh position={[1.9, 0.9, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.8]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>

        {/* Acrylic Sign Board Slab with rounded corners */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.6, 0.8, 0.1]} />
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Glowing Neon Outline Border */}
        <mesh position={[0, 0, 0.055]}>
          <boxGeometry args={[4.5, 0.72, 0.01]} />
          <meshBasicMaterial
            color={department.accentColor || "#14B8A6"}
            wireframe
          />
        </mesh>

        {/* Emissive Sign Face with Department Color */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[4.4, 0.65]} />
          <meshStandardMaterial
            color="#090D16"
            emissive={department.accentColor || "#14B8A6"}
            emissiveIntensity={0.5}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Bay Architectural Prop: Specialized per Department */}
      {/* Dev Bay: High-Performance Server Rack Cabinet with Status LEDs */}
      {department.id === "dev" && (
        <group position={[-9, 0, -8.2]}>
          {/* Main Dark Aluminum Server Cabinet */}
          <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.2, 3.0, 0.9]} />
            <meshStandardMaterial color="#0A0E17" metalness={0.85} roughness={0.2} />
          </mesh>
          {/* Frosted Glass Cabinet Front Door */}
          <mesh position={[0, 1.5, 0.46]}>
            <boxGeometry args={[1.1, 2.9, 0.02]} />
            <meshPhysicalMaterial
              color="#042F2E"
              roughness={0.1}
              transmission={0.85}
              transparent
              opacity={0.4}
            />
          </mesh>
          {/* Blinking Server Units & Status LEDs */}
          <mesh position={[0, 1.5, 0.44]}>
            <planeGeometry args={[0.9, 2.6]} />
            <meshStandardMaterial
              color="#0F172A"
              emissive="#14B8A6"
              emissiveIntensity={1.2}
              roughness={0.2}
            />
          </mesh>
        </group>
      )}

      {/* SEO Bay: Wall Analytics Screen */}
      {department.id === "seo" && (
        <group position={[0, 0, -11.5]}>
          <mesh position={[0, 2.3, 0]} castShadow>
            <boxGeometry args={[3.6, 2.0, 0.08]} />
            <meshStandardMaterial color="#020617" metalness={0.85} roughness={0.2} />
          </mesh>
          {/* Glowing Analytics Matrix Display */}
          <mesh position={[0, 2.3, 0.045]}>
            <planeGeometry args={[3.4, 1.8]} />
            <meshStandardMaterial
              color="#082F49"
              emissive="#06B6D4"
              emissiveIntensity={0.65}
              roughness={0.15}
            />
          </mesh>
        </group>
      )}

      {/* E-Commerce Bay: 3D Product Mockup Showcase Pedestal */}
      {department.id === "ecom" && (
        <group position={[9, 0, -8.2]}>
          {/* Ceramic Cylindrical Display Pedestal */}
          <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.55, 0.65, 1.3, 32]} />
            <meshStandardMaterial color="#1E293B" metalness={0.6} roughness={0.3} />
          </mesh>
          {/* Glowing LED rim on pedestal */}
          <mesh position={[0, 1.31, 0]}>
            <cylinderGeometry args={[0.52, 0.52, 0.02, 32]} />
            <meshBasicMaterial color="#3B82F6" />
          </mesh>
          {/* 3D Product Mockup under Frosted Bell Dome */}
          <mesh position={[0, 1.7, 0]} rotation={[0.4, 0.6, 0]} castShadow>
            <octahedronGeometry args={[0.32]} />
            <meshStandardMaterial
              color="#60A5FA"
              emissive="#3B82F6"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.5}
            />
          </mesh>
        </group>
      )}
    </group>
  );
};
