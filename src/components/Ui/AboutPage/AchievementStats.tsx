import StatsBar from "@/src/components/Shared/StatsBar/StatsBar";

const STATS = [
  { value: <>20<span className="text-lime-400">yrs</span></>, label: "In operation worldwide" },
  { value: <>180<span className="text-lime-400">+</span></>, label: "Projects completed" },
  { value: <>0<span className="text-lime-400">.02</span></>, label: "Lost-time injury rate" },
  { value: <>22<span className="text-lime-400">+</span></>, label: "Countries served" },
];

const AchievementStats = () => {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <StatsBar stats={STATS} />
    </section>
  );
};

export default AchievementStats;
