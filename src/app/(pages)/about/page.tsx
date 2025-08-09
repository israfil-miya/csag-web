"use client";

import AboutHero from "./components/about-hero";
import ContactSection from "./components/contact-section";
import MissionVisionValues from "./components/mission-vision-values";
import OurImpact from "./components/our-impact";
import OurPartners from "./components/our-partners";
import WhatIsCSAG from "./components/what-is-csag";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <AboutHero />

      {/* What is CSAG */}
      <WhatIsCSAG />

      {/* Mission, Vision & Values */}
      <MissionVisionValues />

      {/* Our Impact */}
      <OurImpact />

      {/* Partners */}
      <OurPartners />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
