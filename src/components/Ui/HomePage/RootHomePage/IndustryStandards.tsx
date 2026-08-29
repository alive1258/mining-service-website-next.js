import Badge from "@/src/components/Shared/Badge/Badge";

const STANDARDS = [
  {
    code: "ISO 45001",
    label: "Occupational Health & Safety",
    art: (
      <path
        d="M50 12 L82 22 V50 C82 68 68 82 50 88 C32 82 18 68 18 50 V22 Z"
        fill="none"
        stroke="#c9ea3f"
        strokeWidth="2.2"
      />
    ),
  },
  {
    code: "ISO 14001",
    label: "Environmental Management",
    art: (
      <>
        <path d="M50 16 C34 30 26 44 26 56 a24 24 0 0 0 48 0 c0-12-8-26-24-40Z" fill="none" stroke="#c9ea3f" strokeWidth="2.2" />
        <path d="M50 44 v34" stroke="#c9ea3f" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    code: "ISO 9001",
    label: "Quality Management",
    art: (
      <>
        <circle cx="50" cy="46" r="26" fill="none" stroke="#c9ea3f" strokeWidth="2.2" />
        <path d="M40 46 l7 7 14-14" fill="none" stroke="#c9ea3f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    code: "OHSAS 18001",
    label: "Safety Assessment Series",
    art: (
      <>
        <path d="M50 14 L84 28 V52 C84 70 70 82 50 90 C30 82 16 70 16 52 V28 Z" fill="none" stroke="#c9ea3f" strokeWidth="2.2" />
        <path d="M38 50 l9 9 17-19" fill="none" stroke="#c9ea3f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const IndustryStandards = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <div>
            <Badge className="mb-3.5">Industry Standards</Badge>
            <h2 className="font-display max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Certified To The <span className="text-lime-400">Highest</span> Standard
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Every site we run is independently audited against the
            certifications that matter most to operators.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {STANDARDS.map((standard) => (
            <div
              key={standard.code}
              className="overflow-hidden rounded-[20px] border border-white/10 bg-ink-800"
            >
              <div className="relative flex h-[120px] items-center justify-center bg-linear-to-br from-ink-600 to-ink-700 sm:h-[150px]">
                <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true" className="opacity-90 sm:h-[88px] sm:w-[88px]">
                  {standard.art}
                </svg>
              </div>
              <div className="p-4 sm:p-5">
                <div className="font-display text-sm font-semibold text-white sm:text-base">
                  {standard.code}
                </div>
                <div className="mt-1 text-[12px] leading-relaxed text-white/50 sm:text-[13px]">
                  {standard.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryStandards;
