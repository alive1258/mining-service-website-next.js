const STEPS = [
  { number: "01", title: "Site Assessment", description: "Engineers survey the site and scope the work in detail." },
  { number: "02", title: "Engineering Plan", description: "A fixed-cost plan with milestones and safety protocols." },
  { number: "03", title: "Execution", description: "Crews mobilize and build against the plan, shift by shift." },
  { number: "04", title: "Handover", description: "Commissioning, documentation, and ongoing support." },
];

const OurProcess = () => {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-4xl">
            How We <span className="text-lime-400">Deliver</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            A repeatable process built from two decades of site work.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 sm:gap-4 lg:grid lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step) => (
            <div key={step.number} className="rounded-[20px] border border-white/10 bg-ink-800 p-6 sm:p-7">
              <div className="font-display mb-4 text-xs text-white/40">{step.number}</div>
              <div className="text-[15px] font-semibold text-white sm:text-base">{step.title}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-white/50">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
