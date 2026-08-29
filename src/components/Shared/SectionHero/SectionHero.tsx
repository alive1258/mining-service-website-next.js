import Link from "next/link";
import HeroArt from "@/src/components/Shared/HeroArt/HeroArt";

interface Crumb {
  label: string;
  href?: string;
}

interface SectionHeroProps {
  crumbs: Crumb[];
  title: React.ReactNode;
}

/** Dark page-header used on the Minvip marketing pages (About, Projects,
 * Contact) — distinct from the legacy light-photo `PageHero` still used by
 * the older yacht-template subpages under /about. */
const SectionHero = ({ crumbs, title }: SectionHeroProps) => {
  return (
    <section className="relative h-[250px] w-full overflow-hidden sm:h-[300px] lg:h-[340px]">
      <HeroArt size="small" />
      <div className="absolute inset-0 bg-linear-to-r from-ink-950/95 via-ink-950/55 to-ink-950/30" />

      <div className="container relative flex h-full flex-col justify-center">
        <div className="mb-3 flex items-center gap-2 text-xs text-white/50 sm:mb-4 sm:text-sm">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="font-display max-w-2xl text-[28px] font-semibold leading-[1.2] text-white sm:text-4xl lg:text-[50px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SectionHero;
