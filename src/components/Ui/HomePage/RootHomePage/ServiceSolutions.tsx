import { Award, CheckCircle2, Clock, FileCheck, Layers, ShieldCheck } from "lucide-react";
import FeatureCard from "@/src/components/Shared/FeatureCard/FeatureCard";
import Badge from "@/src/components/Shared/Badge/Badge";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "We operate with full coverage and legal compliance.",
  },
  {
    icon: Layers,
    title: "High-Quality Materials",
    description: "We source and use only premium-grade materials.",
  },
  {
    icon: FileCheck,
    title: "Free Estimates",
    description: "We provide cost transparency with no hidden fees.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We deliver results quickly and efficiently.",
  },
  {
    icon: CheckCircle2,
    title: "Industry Warranty",
    description: "We stand behind our work with solid guarantees.",
  },
  {
    icon: Award,
    title: "Leading Warranty",
    description: "We ensure long-term protection and peace of mind.",
  },
];

const ServiceSolutions = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <div>
            <Badge className="mb-3.5">Our Solutions</Badge>
            <h2 className="font-display max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Comprehensive <span className="text-lime-400">Mining</span> Service Solutions
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Our commitment to quality, safety, and customer satisfaction makes
            us the trusted partner on site.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-3 lg:gap-[22px]">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutions;
