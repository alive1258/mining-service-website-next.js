import Link from "next/link";
import { Check } from "lucide-react";
import Badge from "@/src/components/Shared/Badge/Badge";

const TIERS = [
  {
    name: "Site Assessment",
    price: "From $4,500",
    unit: "fixed fee",
    description: "A standalone engineering survey — the ground truth before you commit to a full project.",
    features: [
      "On-site survey & scope report",
      "Compliance & safety review",
      "Rough-order cost estimate",
      "Delivered within 2 weeks",
    ],
    featured: false,
  },
  {
    name: "Standard Project",
    price: "Custom quote",
    unit: "fixed-cost plan",
    description: "Our most common engagement — a full retrofit, expansion or conveyor project start to finish.",
    features: [
      "Everything in Site Assessment",
      "Fixed-cost engineering plan",
      "Dedicated crew & site supervisor",
      "Milestone-based delivery",
      "Post-commissioning support",
    ],
    featured: true,
  },
  {
    name: "Enterprise / Full EPC",
    price: "Custom quote",
    unit: "multi-site programs",
    description: "Ongoing engineering, procurement and construction across multiple sites or a full mine build-out.",
    features: [
      "Everything in Standard Project",
      "Multi-site program management",
      "Dedicated account team",
      "Priority mobilization",
      "Quarterly performance reviews",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mb-9 flex flex-col items-start gap-3.5 sm:mb-11 sm:items-center sm:text-center">
          <Badge>Engagement Models</Badge>
          <h2 className="font-display max-w-lg text-2xl font-semibold leading-tight text-white sm:text-4xl">
            Straightforward <span className="text-lime-400">Pricing</span>, No Surprises
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            Every engagement starts with a fixed-cost plan — no open-ended
            time-and-materials billing.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-[20px] border p-7 sm:p-8 ${
                tier.featured
                  ? "border-lime-400/40 bg-ink-700"
                  : "border-white/10 bg-ink-800"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 w-fit rounded-full bg-lime-400 px-3 py-1 text-[11px] font-semibold text-lime-950">
                  MOST COMMON
                </span>
              )}
              <div className="text-[15px] font-semibold text-white">{tier.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-white sm:text-[28px]">
                  {tier.price}
                </span>
              </div>
              <div className="mt-1 text-xs text-white/40">{tier.unit}</div>
              <p className="mt-4 text-[13px] leading-relaxed text-white/50">{tier.description}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/70">
                    <Check size={15} className="mt-0.5 shrink-0 text-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-lime-400 text-lime-950 hover:bg-lime-300"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
