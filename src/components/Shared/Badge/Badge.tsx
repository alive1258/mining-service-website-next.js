interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/** Small eyebrow pill used above section headings and over hero art. */
const Badge = ({ children, className = "" }: BadgeProps) => (
  <span
    className={`inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-ink-800 px-4 py-2 text-xs font-medium text-white/60 ${className}`}
  >
    {children}
  </span>
);

export default Badge;
