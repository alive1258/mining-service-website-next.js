const FILTERS = ["All", "Copper", "Iron Ore", "Gold", "Tailings"];

const ProjectsIntro = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <p className="max-w-lg text-sm leading-relaxed text-white/50 sm:text-[15px]">
          Every project below completed to spec, on schedule, with a full
          safety record — filtered by mineral and region.
        </p>
        <div className="flex gap-2 overflow-x-auto sm:gap-2.5">
          {FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-[13px] font-medium sm:px-5 ${
                i === 0
                  ? "border-lime-400 bg-lime-400 text-lime-950"
                  : "border-white/10 text-white/55"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsIntro;
