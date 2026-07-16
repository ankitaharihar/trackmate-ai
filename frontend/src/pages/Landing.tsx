import type { TrackingData } from "../types/tracking";
import { useState } from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";


export default function Landing() {
  const [trackingData, setTrackingData] =
    useState<TrackingData | null>(null);

  return (
    <main className="bg-[#020817] text-white">
      <Navbar />

      <Hero onTrack={setTrackingData} />

      <HowItWorks />

      <DashboardPreview trackingData={trackingData} />

      <Features />

      <Pricing />
    </main>
  );
}