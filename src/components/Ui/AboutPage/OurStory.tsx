const OurStory = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative h-[220px] overflow-hidden rounded-3xl bg-linear-to-br from-ink-600 to-ink-700 sm:h-[300px] lg:h-[380px]">
          <svg width="100%" height="100%" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M0,300 L120,190 L260,260 L420,140 L600,240 L600,380 L0,380 Z" fill="#232b1b" />
            <g transform="translate(330,150)" opacity="0.9">
              <path
                d="M0 140 L0 90 L24 90 L38 58 L150 58 L172 24 L280 24 L280 90 L310 90 L310 140 Z"
                fill="#1c2318"
                stroke="#3c4a33"
                strokeWidth="2"
              />
              <circle cx="46" cy="142" r="22" fill="#0c0f0a" stroke="#3c4a33" strokeWidth="3" />
              <circle cx="240" cy="142" r="22" fill="#0c0f0a" stroke="#3c4a33" strokeWidth="3" />
            </g>
          </svg>
        </div>

        <div className="mt-8 lg:mt-0">
          <span className="text-xs font-medium text-white/50">Our Story</span>
          <h2 className="font-display mt-3 text-2xl font-semibold leading-tight text-white sm:text-[34px]">
            Two Decades of Moving <span className="text-lime-400">Ground</span> Safely
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/50 sm:text-[15px]">
            Minvip began as a single crushing crew serving one copper site.
            Today we operate across five continents, engineering plant
            retrofits, tailings systems and conveyor upgrades for operators
            who can&apos;t afford downtime.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-[15px]">
            Every contract runs on the same standard: strict international
            compliance, transparent estimates and a crew that comes home
            safe every shift.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
