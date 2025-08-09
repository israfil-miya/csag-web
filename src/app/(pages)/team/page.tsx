import FounderSection from "./components/founder-section";
import TeamHero from "./components/team-hero";
import TeamMembers from "./components/team-members";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <FounderSection />
      <TeamMembers />
    </div>
  );
}
