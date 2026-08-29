/* ================= LOGO MARK (SVG) ================= */
/* A crossed-pickaxe glyph — reads as "mining" at a glance without needing
   an external asset. The lime dot echoes the brand accent used across CTAs
   and highlighted headline words. */
export const LogoMark = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 20 L10 6 L14 14 L17 8 L20 20 Z"
      stroke="#c9ea3f"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="6" r="1.4" fill="#c9ea3f" />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-6 h-6", text: "text-lg" },
  md: { icon: "w-7 h-7", text: "text-xl" },
  lg: { icon: "w-8 h-8", text: "text-2xl" },
} as const;

interface LogoProps {
  /* kept for call-site compatibility across the site's dark chrome —
     both variants render the same light-on-dark mark since the Navbar
     and Footer are always dark now */
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`font-display font-bold leading-none whitespace-nowrap tracking-tight text-white ${text}`}
      >
        Minvip
      </span>
    </span>
  );
};

export default Logo;
