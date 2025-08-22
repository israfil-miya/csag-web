"use client";

import "flowbite";
import React from "react";
import AboutSection from "./components/about-section";
import CauseCarousel from "./components/cause-carousel";
import HeroSection from "./components/hero-section";
import ImpactBanner from "./components/impact-banner";
import MissionSection from "./components/mission-section";
import OurImpact from "./components/our-impact";
import OurProjectSection from "./components/our-projects-section";
import PartnerBanner from "./components/partner-banner";
import SponsorSection from "./components/sponsor-section";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <div id="about" aria-labelledby="about-heading">
        <AboutSection />
      </div>

      {/* Mission */}
      <div id="mission" aria-labelledby="mission-heading">
        <MissionSection />
      </div>

      {/* Causes Carousel */}
      {/* <div id="cause" aria-labelledby="cause-heading">
        <CauseCarousel />
      </div> */}

      {/* Impact Metrics */}
      {/* <div id="impact" aria-labelledby="impact-heading">
          <ImpactBanner />
        </div> */}

      {/* Impact Metrics */}
      <div id="impact" aria-labelledby="impact-heading">
        <OurImpact />
      </div>

      {/* Our Work */}
      <div id="work" aria-labelledby="work-heading">
        <OurProjectSection />
      </div>

      {/* Sponsors */}
      <div id="sponsors" aria-labelledby="sponsors-heading">
        <SponsorSection />
      </div>

      {/* Partners */}
      <div id="partners" aria-labelledby="partners-heading">
        <PartnerBanner />
      </div>
    </div>
  );
}

export default Home;
