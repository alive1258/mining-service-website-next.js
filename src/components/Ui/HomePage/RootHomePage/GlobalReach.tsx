import { Phone } from "lucide-react";

const PINS = [
  { cx: 140, cy: 80 },
  { cx: 220, cy: 90 },
  { cx: 175, cy: 150 },
];

const DOTS = [
  { cx: 100, cy: 60 },
  { cx: 140, cy: 40 },
  { cx: 220, cy: 45 },
  { cx: 260, cy: 70 },
  { cx: 90, cy: 130 },
  { cx: 260, cy: 140 },
];

const GlobalReach = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="rounded-[24px] border border-white/10 bg-ink-800 p-7 sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-14">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-[34px]">
              Global Reach.
              <br />
              Unmatched <span className="text-lime-400">Reliability</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:mt-5">
              From remote quarry sites to major processing plants, our teams
              deploy fast, wherever the work is.
            </p>

            <div className="mt-7 inline-flex items-center gap-3.5 rounded-2xl border border-white/10 bg-ink-700 px-5 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-400/15">
                <Phone size={16} className="text-lime-400" />
              </span>
              <div>
                <div className="text-[13.5px] font-semibold text-white">24/7 Support Line</div>
                <div className="text-xs text-white/40">Chicago, USA — always on call</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 h-[200px] sm:h-[240px] lg:mt-0 lg:h-[280px]">
            <svg width="100%" height="100%" viewBox="0 0 350 200" aria-hidden="true">
              <g fill="none" stroke="#2a3324" strokeWidth="1.5">
                <circle cx="175" cy="100" r="25" />
                <circle cx="175" cy="100" r="55" />
                <circle cx="175" cy="100" r="85" />
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

export default GlobalReach;
