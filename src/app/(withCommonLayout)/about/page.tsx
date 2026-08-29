import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHero from "@/src/components/Shared/SectionHero/SectionHero";
import OurStory from "@/src/components/Ui/AboutPage/OurStory";
import MissionVision from "@/src/components/Ui/AboutPage/MissionVision";
import AchievementStats from "@/src/components/Ui/AboutPage/AchievementStats";
import FacilitiesShowcase from "@/src/components/Ui/AboutPage/FacilitiesShowcase";
import Leadership from "@/src/components/Ui/AboutPage/Leadership";
import SafetyEquipment from "@/src/components/Ui/AboutPage/SafetyEquipment";
import Certifications from "@/src/components/Ui/AboutPage/Certifications";
import SiteEngineering from "@/src/components/Ui/AboutPage/SiteEngineering";
import PartnershipsBanner from "@/src/components/Ui/AboutPage/PartnershipsBanner";

export const metadata: Metadata = {
  title: "About Minvip",
  description:
    "Two decades of mining and industrial engineering work — our story, mission, safety record, leadership and certifications.",
};

export default function AboutPage() {
  return (
    <div className="bg-ink-950">
      <SectionHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            Built On Safety. Driven By <span className="text-lime-400">Results</span>.
          </>
        }
      />

      <OurStory />
      <MissionVision />
      <AchievementStats />
      <FacilitiesShowcase />
      <Leadership />
      <SafetyEquipment />
      <Certifications />
      <SiteEngineering />
      <PartnershipsBanner />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-ink-800 px-6 py-14 text-center sm:px-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-4xl">
              Want to Talk to a Real Person?
            </h2>
            <p className="max-w-lg text-sm text-white/50">
              Our team is happy to walk you through our process, our safety
              standards, or a project estimate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
