"use client";

import AboutHero from "./components/about-hero";
import ApproachSection from "./components/approach-section";
import ContactSection from "./components/contact-section";
import EducationImpact from "./components/education-impact";
import MissionVisionGoals from "./components/mission-vision-goals";
import OurImpact from "./components/our-impact";
import OurPartners from "./components/our-partners";
import WhatIsCSAG from "./components/what-is-csag";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <AboutHero />

      {/* Mission / Vision / Goals */}
      <div id="mission" aria-labelledby="mission-heading">
        <MissionVisionGoals />
      </div>

      {/* Story */}
      <div id="story" aria-labelledby="story-heading">
        <WhatIsCSAG />
      </div>

      {/* Approach */}
      <div id="approach" aria-labelledby="approach-heading">
        <ApproachSection />
      </div>

      {/* Why Education & Values */}
      <div id="why" aria-labelledby="why-heading">
        <EducationImpact />
      </div>

      {/* Impact Metrics */}
      <div id="impact" aria-labelledby="impact-heading">
        <OurImpact />
      </div>

      {/* Partners */}
      <div id="partners" aria-labelledby="partners-heading">
        <OurPartners />
      </div>

      {/* Contact */}
      <div id="contact" aria-labelledby="contact-heading">
        <ContactSection />
      </div>
    </div>
  );
}
