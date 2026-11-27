"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import {
  Associate,
  FounderInfo,
  OFFICE_DEPARTMENTS,
  OFFICE_WAYPOINTS,
  FOUNDER_DATA,
} from "@/src/data/officeDepartments";
import { OfficeHUD } from "@/src/components/virtual-office/OfficeHUD";
import { PortfolioModal } from "@/src/components/virtual-office/PortfolioModal";
import { StandardDirectoryView } from "@/src/components/virtual-office/StandardDirectoryView";
import { Sparkles, Box } from "lucide-react";

// Sleek Obsidian & Glowing Teal Loading Screen while WebGL Canvas initializes
function OfficeLoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B0F17",
        color: "#ffffff",
      }}
      className="flex h-screen w-screen flex-col items-center justify-center bg-[#0B0F17] text-white select-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="h-28 w-28 rounded-full border-2 border-teal-500/20 border-t-teal-400 animate-spin" />
        <div className="absolute h-20 w-20 rounded-full border border-teal-400/30 animate-pulse bg-teal-950/20 backdrop-blur-sm" />
        <Box className="absolute w-8 h-8 text-teal-400 animate-bounce" />
      </div>

      <div className="mt-6 flex flex-col items-center text-center space-y-2">
        <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
          ZEPRA TECH VIRTUAL HQ
          <span className="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono border border-teal-500/30">
            3D CAMPUS
          </span>
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Loading procedural isometric architecture & team bays...
        </p>

        {/* Animated Progress Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-3">
          <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}

// Dynamically import OfficeCanvas with ssr: false to prevent Next.js SSR window/WebGL errors
const OfficeCanvas = dynamic(
  () =>
    import("@/src/components/virtual-office/OfficeCanvas").then(
      (mod) => mod.OfficeCanvas
    ),
  {
    ssr: false,
    loading: () => <OfficeLoadingScreen />,
  }
);

export default function VirtualOfficePage() {
  const [currentLocationId, setCurrentLocationId] = useState<
    "reception" | "dev" | "seo" | "ecom" | "founder"
  >("reception");

  const [playerTargetPosition, setPlayerTargetPosition] = useState<
    [number, number, number]
  >(OFFICE_WAYPOINTS.reception);

  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >(OFFICE_WAYPOINTS.receptionCamera);

  const [cameraTarget, setCameraTarget] = useState<
    [number, number, number]
  >(OFFICE_WAYPOINTS.receptionTarget);

  const [selectedAssociate, setSelectedAssociate] = useState<
    Associate | FounderInfo | null
  >(null);

  const [hoveredAssociate, setHoveredAssociate] = useState<Associate | null>(null);
  const [hoveredFounder, setHoveredFounder] = useState<boolean>(false);
  const [isFastMode, setIsFastMode] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStandardView, setIsStandardView] = useState(false);

  // Navigation across zones / bays
  const handleNavigateZone = useCallback(
    (zoneId: "reception" | "dev" | "seo" | "ecom" | "founder") => {
      setCurrentLocationId(zoneId);

      if (zoneId === "reception") {
        setPlayerTargetPosition(OFFICE_WAYPOINTS.reception);
        setCameraPosition(OFFICE_WAYPOINTS.receptionCamera);
        setCameraTarget(OFFICE_WAYPOINTS.receptionTarget);
      } else if (zoneId === "dev") {
        const dept = OFFICE_DEPARTMENTS.find((d) => d.id === "dev")!;
        setPlayerTargetPosition(dept.walkWaypoint);
        setCameraPosition(dept.cameraPosition);
        setCameraTarget(dept.cameraTarget);
      } else if (zoneId === "seo") {
        const dept = OFFICE_DEPARTMENTS.find((d) => d.id === "seo")!;
        setPlayerTargetPosition(dept.walkWaypoint);
        setCameraPosition(dept.cameraPosition);
        setCameraTarget(dept.cameraTarget);
      } else if (zoneId === "ecom") {
        const dept = OFFICE_DEPARTMENTS.find((d) => d.id === "ecom")!;
        setPlayerTargetPosition(dept.walkWaypoint);
        setCameraPosition(dept.cameraPosition);
        setCameraTarget(dept.cameraTarget);
      } else if (zoneId === "founder") {
        setPlayerTargetPosition(FOUNDER_DATA.standPosition);
        setCameraPosition(FOUNDER_DATA.cameraPosition);
        setCameraTarget(FOUNDER_DATA.cameraTarget);
      }
    },
    []
  );

  // Reset camera to full overview perspective
  const handleResetCamera = useCallback(() => {
    setCameraPosition(OFFICE_WAYPOINTS.overviewCamera);
    setCameraTarget(OFFICE_WAYPOINTS.overviewTarget);
  }, []);

  // When an associate is clicked: "YOU" avatar walks to their standPosition, camera focuses smoothly, modal opens
  const handleSelectAssociate = useCallback((associate: Associate) => {
    setPlayerTargetPosition(associate.standPosition);
    setCurrentLocationId(associate.departmentId);

    // Smoothly focus camera near associate workstation
    setCameraPosition([
      associate.deskPosition[0],
      6.5,
      associate.deskPosition[2] + 4.5,
    ]);
    setCameraTarget([
      associate.deskPosition[0],
      1.1,
      associate.deskPosition[2],
    ]);

    setSelectedAssociate(associate);
    setIsModalOpen(true);
  }, []);

  // When Founder Daud Lashari is clicked
  const handleSelectFounder = useCallback((founder: FounderInfo) => {
    setPlayerTargetPosition(founder.standPosition);
    setCurrentLocationId("founder");

    setCameraPosition(founder.cameraPosition);
    setCameraTarget(founder.cameraTarget);

    setSelectedAssociate(founder);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0B0F17]">
      {/* 2D Accessible Standard Directory View or 3D WebGL Canvas */}
      {isStandardView ? (
        <StandardDirectoryView
          onSelectAssociate={handleSelectAssociate}
          onSelectFounder={handleSelectFounder}
          onSwitchTo3D={() => setIsStandardView(false)}
        />
      ) : (
        <>
          {/* Full-Viewport Interactive 3D Canvas */}
          <OfficeCanvas
            playerTargetPosition={playerTargetPosition}
            cameraPosition={cameraPosition}
            cameraTarget={cameraTarget}
            selectedAssociateId={selectedAssociate?.id}
            onSelectAssociate={handleSelectAssociate}
            onSelectFounder={handleSelectFounder}
            onHoverAssociate={setHoveredAssociate}
            onHoverFounder={setHoveredFounder}
            isFastMode={isFastMode}
          />

          {/* Frosted Glassmorphism HUD Overlay */}
          <OfficeHUD
            currentLocationId={currentLocationId}
            onNavigateZone={handleNavigateZone}
            onResetCamera={handleResetCamera}
            onToggleStandardView={() => setIsStandardView(!isStandardView)}
            isStandardView={isStandardView}
            onSelectFounder={handleSelectFounder}
            hoveredAssociate={hoveredAssociate}
            hoveredFounder={hoveredFounder}
            onSelectAssociate={handleSelectAssociate}
            isFastMode={isFastMode}
            onToggleFastMode={() => setIsFastMode((prev) => !prev)}
          />
        </>
      )}

      {/* Portfolio Case Studies Modal */}
      <PortfolioModal
        data={selectedAssociate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
