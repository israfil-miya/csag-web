"use client";

import "flowbite";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";
import AboutSection from "./components/about-section";
import CauseCarousel from "./components/cause-carousel";
import HeroSection from "./components/hero-section";
import ImpactBanner from "./components/impact-banner";
import MissionSection from "./components/mission-section";
import OurWorkSection from "./components/our-work-section";
import PartnerBanner from "./components/partner-banner";
import SponsorSection from "./components/sponsor-section";

function Home() {
  // Use useEffect to safely initialize flowbite on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFlowbite();
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <CauseCarousel />
      <ImpactBanner />
      <OurWorkSection />
      <SponsorSection />
      <PartnerBanner />
    </>
  );
}

export default Home;
