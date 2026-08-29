import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import HeroArt from "@/src/components/Shared/HeroArt/HeroArt";
import Badge from "@/src/components/Shared/Badge/Badge";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <HeroArt size="large" />
      <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/85 to-ink-950/20 sm:from-ink-950/95 sm:via-ink-950/70 sm:to-ink-950/15" />

      <div className="container relative flex flex-col justify-center py-20 sm:py-28 lg:py-36">
        <Badge className="mb-5 lg:mb-6">Building the Future</Badge>
        <h1 className="font-display max-w-2xl text-[34px] font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[58px] lg:leading-[1.12]">
          Innovating Smart Industrial <span className="text-lime-400">Growth</span> Worldwide
        </h1>
        <p className="font-body mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:mt-6 sm:text-base lg:mt-8">
          We operate with strict compliance under international standards,
          ensuring every worker returns home safe every day.
        </p>
        <div className="mt-6 flex items-center gap-3 sm:mt-8">
          <Link
            href="/contact"
            className="font-body inline-flex items-center gap-2.5 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300 sm:px-7"
          >
            GET A FREE QUOTE
          </Link>
          <Link
            href="/projects"
            aria-label="View our projects"
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* floating info card */}
      <div className="absolute right-8 top-12 hidden w-[260px] rounded-2xl border border-white/10 bg-ink-800/90 p-4 backdrop-blur-sm lg:block">
        <p className="font-body text-[15px] font-semibold text-white">
          Crushing &amp; Screening Services
        </p>
        <p className="mt-1 text-xs text-white/50">Complete solutions for every stage</p>
        <div className="relative mt-3.5 h-[100px] overflow-hidden rounded-xl bg-linear-to-br from-ink-600 to-ink-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400/90 text-lime-950">
              <Play size={13} fill="currentColor" />
            </span>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-9 right-8 hidden sm:block">
        <svg width="88" height="88" viewBox="0 0 96 96" aria-hidden="true">
          <defs>
            <path id="scrollCirclePath" d="M48,48 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="48" cy="48" r="46" fill="rgba(20,25,18,0.85)" stroke="rgba(255,255,255,.1)" />
          <text fontSize="7.4" fill="#9aa596" letterSpacing="2">
            <textPath href="#scrollCirclePath">
              SCROLL TO EXPLORE • SCROLL TO EXPLORE •
            </textPath>
          </text>
          <path
            d="M48 38v18M42 50l6 6 6-6"
            stroke="#c9ea3f"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
