import Link from "next/link";
import ProjectCard from "@/src/components/Shared/ProjectCard/ProjectCard";

const PROJECTS = [
  {
    tag: "Chile / 2025",
    title: "Copper Plant Retrofit",
    description: "35% gain with complete crushing circuit",
    image:
      "https://images.unsplash.com/photo-1757573538081-c469f75cdd7a?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Australia / 2025",
    title: "Tailings Facility Expansion",
    description: "35% gain with complete crushing circuit",
    image:
      "https://images.unsplash.com/photo-1523848309072-c199db53f137?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "South Africa / 2024",
    title: "Iron Ore Conveyor Upgrade",
    description: "35% gain with complete crushing circuit",
    image:
      "https://images.unsplash.com/photo-1727373203579-7b8984cb8120?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
];

const ProvenSuccess = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <h2 className="font-display text-[26px] font-semibold leading-tight text-white sm:text-4xl">
            Proven Success
            <br />
            Through <span className="text-lime-400">Projects</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Exclusive results from real mine sites, delivered by our
            engineering and operations teams worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}
        </div>

        <div className="mt-5 text-center sm:hidden">
          <Link
            href="/projects"
            className="block w-full rounded-2xl border border-white/10 bg-ink-800 py-4 text-sm font-semibold text-white"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProvenSuccess;
