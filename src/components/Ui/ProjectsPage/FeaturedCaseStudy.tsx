import Image from "next/image";
import ArrowChip from "@/src/components/Shared/ArrowChip/ArrowChip";
import Badge from "@/src/components/Shared/Badge/Badge";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-ink-800 lg:grid lg:grid-cols-2">
          <div className="relative h-[200px] sm:h-[280px] lg:h-auto lg:min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1637345158353-40607a208d46?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Industrial piping at the Antofagasta copper processing plant"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <Badge className="mb-5">Featured Case Study</Badge>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-[28px]">
              Antofagasta Copper Retrofit
            </h2>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/50 sm:text-sm">
              A full crushing and screening circuit rebuilt in nine months
              without halting production — coordinated across three shifts
              with zero lost-time incidents.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-5">
              <div>
                <div className="font-display text-2xl font-semibold text-lime-400 sm:text-[26px]">35%</div>
                <div className="mt-1 text-xs text-white/50">Throughput increase</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-lime-400 sm:text-[26px]">0</div>
                <div className="mt-1 text-xs text-white/50">Lost-time incidents</div>
              </div>
            </div>
            <ArrowChip className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
