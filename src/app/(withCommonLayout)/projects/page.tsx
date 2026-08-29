import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHero from "@/src/components/Shared/SectionHero/SectionHero";
import StatsBar from "@/src/components/Shared/StatsBar/StatsBar";
import ProjectsIntro from "@/src/components/Ui/ProjectsPage/ProjectsIntro";
import ProjectsGrid from "@/src/components/Ui/ProjectsPage/ProjectsGrid";
import FeaturedCaseStudy from "@/src/components/Ui/ProjectsPage/FeaturedCaseStudy";
import CapabilitiesShowcase from "@/src/components/Ui/ProjectsPage/CapabilitiesShowcase";
import OurProcess from "@/src/components/Ui/ProjectsPage/OurProcess";
import RegionalCoverage from "@/src/components/Ui/ProjectsPage/RegionalCoverage";
import Pricing from "@/src/components/Ui/ProjectsPage/Pricing";
import TrustedByBanner from "@/src/components/Ui/ProjectsPage/TrustedByBanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Work delivered on real mine sites — copper, iron ore, gold and tailings projects completed on schedule with a full safety record.",
};

const RESULTS_STATS = [
  { value: <>180<span className="text-lime-400">+</span></>, label: "Projects delivered" },
  { value: <>98<span className="text-lime-400">%</span></>, label: "On-schedule completion" },
  { value: <>22<span className="text-lime-400">+</span></>, label: "Countries active" },
  { value: <>$2.4<span className="text-lime-400">B</span></>, label: "Asset value delivered" },
];

export default function ProjectsPage() {
  return (
    <div className="bg-ink-950">
      <SectionHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title={
          <>
            Work Delivered On Real <span className="text-lime-400">Sites</span>
          </>
        }
      />

      <ProjectsIntro />
      <ProjectsGrid />
      <FeaturedCaseStudy />
      <CapabilitiesShowcase />
      <OurProcess />
      <RegionalCoverage />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <StatsBar stats={RESULTS_STATS} />
      </section>

      <Pricing />
      <TrustedByBanner />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-ink-800 px-6 py-14 text-center sm:px-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-4xl">
              Have A Site That Needs Work?
            </h2>
            <p className="max-w-lg text-sm text-white/50">
              Tell us about your site and timeline — we&apos;ll put together
              a fixed-cost estimate within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
