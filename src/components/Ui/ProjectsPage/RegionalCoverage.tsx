const PINS = [
  { cx: 150, cy: 85 },
  { cx: 230, cy: 95 },
  { cx: 185, cy: 155 },
  { cx: 110, cy: 140 },
];

const DOTS = [
  { cx: 100, cy: 60 },
  { cx: 260, cy: 55 },
  { cx: 280, cy: 120 },
  { cx: 90, cy: 190 },
  { cx: 250, cy: 175 },
];

const REGIONS = [
  { label: "South America", detail: "Chile, Peru" },
  { label: "Oceania", detail: "Australia" },
  { label: "Africa", detail: "South Africa, Zambia" },
  { label: "North America", detail: "Canada" },
];

const RegionalCoverage = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="rounded-[24px] border border-white/10 bg-ink-800 p-7 sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-14">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-[34px]">
              Active On Four <span className="text-lime-400">Continents</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:mt-5">
              The project map above is a snapshot, not the full picture —
              here&apos;s where our crews are staged and ready to mobilize.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3.5">
              {REGIONS.map((region) => (
                <div key={region.label} className="rounded-2xl border border-white/10 bg-ink-700 px-4 py-3.5">
                  <div className="text-[13px] font-semibold text-white">{region.label}</div>
                  <div className="mt-0.5 text-xs text-white/40">{region.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 h-[200px] sm:h-[240px] lg:mt-0 lg:h-[280px]">
            <svg width="100%" height="100%" viewBox="0 0 350 220" aria-hidden="true">
              <g fill="none" stroke="#2a3324" strokeWidth="1.5">
                <circle cx="175" cy="110" r="30" />
                <circle cx="175" cy="110" r="65" />
                <circle cx="175" cy="110" r="100" />
              </g>
              <g fill="#3a4633" opacity="0.7">
                {DOTS.map((d, i) => (
                  <circle key={i} cx={d.cx} cy={d.cy} r="2" />
                ))}
              </g>
              <g fill="#c9ea3f">
                {PINS.map((p, i) => (
                  <circle key={i} cx={p.cx} cy={p.cy} r="4.5" />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverage;
