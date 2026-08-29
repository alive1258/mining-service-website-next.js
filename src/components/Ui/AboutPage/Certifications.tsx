import { Award, ClipboardCheck, Recycle, ShieldCheck } from "lucide-react";
import Badge from "@/src/components/Shared/Badge/Badge";

const CERTS = [
  { icon: ShieldCheck, label: "ISO 45001" },
  { icon: Recycle, label: "ISO 14001" },
  { icon: ClipboardCheck, label: "OHSAS 18001" },
  { icon: Award, label: "ISO 9001" },
];

const Certifications = () => {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <div>
            <Badge className="mb-3.5">Standards</Badge>
            <h2 className="font-display max-w-md text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Certifications &amp; <span className="text-lime-400">Safety</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Independently audited against the standards that matter most on
            active sites.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {CERTS.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-[20px] border border-white/10 bg-ink-800 p-6 text-center sm:p-7">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10">
                <Icon size={20} className="text-lime-400" strokeWidth={1.7} />
              </div>
              <div className="text-sm font-semibold text-white">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
