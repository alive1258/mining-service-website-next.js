import { ArrowRight } from "lucide-react";

interface ArrowChipProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: "h-10 w-10",
  md: "h-11 w-11",
  lg: "h-[52px] w-[52px]",
} as const;

/** Circular lime arrow button used on cards, hero CTAs, and banners. */
const ArrowChip = ({ size = "md", className = "" }: ArrowChipProps) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-full bg-lime-400 text-lime-950 ${SIZES[size]} ${className}`}
  >
    <ArrowRight size={16} strokeWidth={2.4} />
  </span>
);

export default ArrowChip;
