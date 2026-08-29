import { Star } from "lucide-react";

const AVATAR_GRADIENTS = [
  "from-[#3a4633] to-ink-700",
  "from-[#4a5940] to-ink-700",
  "from-[#2f3a29] to-ink-700",
  "from-lime-400 to-[#6d842a]",
];

const HomeTestimonials = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-4xl">
            What Clients Say
            <br />
            About Our <span className="text-lime-400">Work</span>
          </h2>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-lime-400" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-white/10 bg-ink-800 p-6 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-10">
          <div className="mb-5 flex sm:mb-0">
            {AVATAR_GRADIENTS.map((gradient, i) => (
              <div
                key={i}
                className={`h-14 w-14 rounded-full border-2 border-ink-800 bg-linear-to-br ${gradient} ${
                  i > 0 ? "-ml-3.5" : ""
                }`}
              />
            ))}
          </div>
          <div>
            <p className="font-body text-base leading-relaxed text-white sm:text-[17px]">
              &ldquo;Minvip&apos;s crew rebuilt our crushing circuit on
              schedule and under budget — safety compliance never slipped
              once.&rdquo;
            </p>
            <div className="mt-3 text-[13.5px] text-white/50">
              James Carter — Site Operations Manager, Chile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
