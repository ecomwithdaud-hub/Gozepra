import { TeamSection } from "@/components/sections/team-section";

export const metadata = {
  title: "Team",
  description:
    "Meet the Zepra Tech leadership team and departments across strategy, engineering, AI, outreach, and growth.",
};

export default function TeamPage() {
  return <TeamSection showHeader={false} />;
}
