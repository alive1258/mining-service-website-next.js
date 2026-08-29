import type { LucideIcon } from "lucide-react";

export interface StatItem {
  icon?: LucideIcon;
  value: React.ReactNode;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
  /** pulls the bar up to overlap the section above it, like the homepage hero */
  overlap?: boolean;
}

const StatsBar = ({ stats, overlap = false }: StatsBarProps) => {
  return (
    <div className={`container relative z-10 ${overlap ? "-mt-12 sm:-mt-14" : ""}`}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 rounded-3xl border border-white/10 bg-ink-800 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-4 lg:gap-0 lg:py-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2.5 sm:gap-3.5 lg:px-8 ${
              i > 0 ? "lg:border-l lg:border-white/10" : ""
            } ${i === 0 ? "lg:pl-0" : ""}`}
          >
            {stat.icon && <stat.icon size={22} className="text-lime-400" strokeWidth={1.7} />}
            <div className="font-display text-[26px] font-semibold text-white sm:text-[34px]">
              {stat.value}
            </div>
            <div className="text-xs leading-relaxed text-white/50 sm:text-[13.5px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
