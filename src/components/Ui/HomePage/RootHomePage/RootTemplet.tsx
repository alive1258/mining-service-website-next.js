import Hero from "./Hero";
import ProvenSuccess from "./ProvenSuccess";
import ServiceSolutions from "./ServiceSolutions";
import IndustryStandards from "./IndustryStandards";
import FleetShowcase from "./FleetShowcase";
import SafetyCommitment from "./SafetyCommitment";
import GlobalReach from "./GlobalReach";
import SustainabilityBanner from "./SustainabilityBanner";
import JoinTeam from "./JoinTeam";
import HomeTestimonials from "./HomeTestimonials";
import StatsBar from "@/src/components/Shared/StatsBar/StatsBar";
import { Award, Target, TrendingUp, Users } from "lucide-react";

const HOME_STATS = [
  { icon: Users, value: "50+", label: "Global mining & industrial clients" },
  { icon: TrendingUp, value: "2M", label: "Active users in the world" },
  { icon: Target, value: "85%", label: "Bold mindset, every challenge" },
  { icon: Award, value: "90%", label: "Courageous approach to challenge" },
];

const RootTemplet = () => {
  return (
    <div className="bg-ink-950">
      <Hero />
      <StatsBar stats={HOME_STATS} overlap />
      <ProvenSuccess />
      <ServiceSolutions />
      <IndustryStandards />
      <FleetShowcase />
      <SafetyCommitment />
      <GlobalReach />
      <SustainabilityBanner />
      <JoinTeam />
      <HomeTestimonials />
    </div>
  );
};

export default RootTemplet;
