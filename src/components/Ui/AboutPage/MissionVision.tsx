import { Compass, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container grid gap-5 sm:grid-cols-2">
        <div className="rounded-[20px] border border-white/10 bg-ink-800 p-7 sm:p-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
            <Target size={22} className="text-lime-400" strokeWidth={1.7} />
          </div>
          <h3 className="font-display text-xl font-semibold text-white sm:text-[22px]">Our Mission</h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-white/50 sm:text-sm">
            To deliver mining and industrial infrastructure that is safer,
            faster and more efficient than the standard our clients had
            before us.
          </p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-ink-800 p-7 sm:p-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
            <Compass size={22} className="text-lime-400" strokeWidth={1.7} />
          </div>
          <h3 className="font-display text-xl font-semibold text-white sm:text-[22px]">Our Vision</h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-white/50 sm:text-sm">
            A global mining industry where world-class engineering and
            zero-harm safety are the baseline, not the exception.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
