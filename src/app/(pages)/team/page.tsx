import FounderSection from "./components/founder-section";
import TeamHero from "./components/team-hero";
import TeamMembers from "./components/team-members";

export const metadata = {
  title: "Leadership & Team | Child Survival Aid Ghana",
  description:
    "Meet the CSAG leadership and volunteers driving better education outcomes for rural communities in Ghana.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <FounderSection />
      <TeamMembers />
    </div>
  );
}
