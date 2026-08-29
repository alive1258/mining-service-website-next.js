/* ================= HERO ART ================= */
/* Stylised quarry/mountain-and-truck scene used behind hero and page-header
   sections. Vector, not a photo — swap for real site photography once it's
   available; keep the same aspect/overlay so hero copy stays legible. */
interface HeroArtProps {
  /** taller composition for the homepage hero (adds the truck silhouette) */
  size?: "large" | "small";
  className?: string;
}

const HeroArt = ({ size = "large", className = "" }: HeroArtProps) => {
  return (
    <svg
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <rect width="1440" height="620" fill="#10140f" />
      <path
        d="M0,460 L180,300 L340,400 L520,240 L760,420 L980,280 L1200,430 L1440,320 L1440,620 L0,620 Z"
        fill="#161c15"
      />
      <path
        d="M0,500 L220,400 L420,470 L680,350 L900,480 L1150,380 L1440,470 L1440,620 L0,620 Z"
        fill="#0e120d"
      />
      {size === "large" && (
        <g transform="translate(830,300)" opacity="0.9">
          <path
            d="M0 220 L0 150 L36 150 L58 96 L230 96 L262 40 L430 40 L430 150 L480 150 L480 220 Z"
            fill="#1c2318"
            stroke="#3c4a33"
            strokeWidth="2"
          />
          <rect
            x="256"
            y="30"
            width="150"
            height="70"
            rx="6"
            fill="#232c1c"
            stroke="#c9ea3f"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <circle cx="70" cy="222" r="36" fill="#0c0f0a" stroke="#3c4a33" strokeWidth="4" />
          <circle cx="70" cy="222" r="15" fill="#2a3324" />
          <circle cx="368" cy="222" r="36" fill="#0c0f0a" stroke="#3c4a33" strokeWidth="4" />
          <circle cx="368" cy="222" r="15" fill="#2a3324" />
        </g>
      )}
      {size === "large" && (
        <>
          <circle cx="1120" cy="180" r="3" fill="#c9ea3f" opacity="0.5" />
          <circle cx="1180" cy="240" r="2" fill="#c9ea3f" opacity="0.4" />
          <circle cx="1250" cy="160" r="2.5" fill="#c9ea3f" opacity="0.35" />
        </>
      )}
    </svg>
  );
};

export default HeroArt;
