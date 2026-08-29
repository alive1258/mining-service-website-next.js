import Image from "next/image";
import Link from "next/link";
import ArrowChip from "@/src/components/Shared/ArrowChip/ArrowChip";

const RIDGE_PATHS = [
  "M0,170 L100,90 L200,140 L320,60 L460,130 L460,210 L0,210 Z",
  "M0,150 L120,100 L220,150 L340,80 L460,140 L460,210 L0,210 Z",
  "M0,180 L90,110 L210,160 L300,70 L460,150 L460,210 L0,210 Z",
  "M0,130 L130,70 L250,120 L370,60 L460,110 L460,200 L0,200 Z",
];

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
  /** real project photo — falls back to a vector placeholder when omitted */
  image?: string;
}

const ProjectCard = ({
  tag,
  title,
  description,
  href = "/projects",
  index = 0,
  image,
}: ProjectCardProps) => {
  const path = RIDGE_PATHS[index % RIDGE_PATHS.length];

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[20px] border border-white/10 bg-ink-800 transition hover:border-white/20"
    >
      <div className="relative h-[170px] overflow-hidden bg-linear-to-br from-ink-600 to-ink-700 sm:h-[200px] lg:h-[210px]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 460 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d={path} fill="#232b1b" />
          </svg>
        )}
        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/10 bg-ink-950/75 px-3.5 py-1.5 text-xs font-medium text-white/70">
          {tag}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <div className="font-body text-[15px] font-semibold text-white sm:text-base">{title}</div>
          <div className="mt-1 text-xs text-white/50 sm:text-[13px]">{description}</div>
        </div>
        <ArrowChip size="sm" className="transition group-hover:scale-105" />
      </div>
    </Link>
  );
};

export default ProjectCard;
