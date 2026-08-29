import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  center?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, center = false }: FeatureCardProps) => (
  <div
    className={`rounded-[20px] border border-white/10 bg-ink-800 p-6 sm:p-7 ${
      center ? "text-center" : ""
    }`}
  >
    <div
      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10 sm:mb-5 ${
        center ? "mx-auto" : ""
      }`}
    >
      <Icon size={21} className="text-lime-400" strokeWidth={1.7} />
    </div>
    <div className="font-body text-[15px] font-semibold text-white sm:text-base">{title}</div>
    <div className="mt-2 text-[13px] leading-relaxed text-white/50">{description}</div>
  </div>
);

export default FeatureCard;
