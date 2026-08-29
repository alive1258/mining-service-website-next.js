import ProjectCard from "@/src/components/Shared/ProjectCard/ProjectCard";

const PROJECTS = [
  {
    tag: "Chile / Copper",
    title: "Copper Plant Retrofit",
    description: "Full crushing circuit rebuild",
    image: "https://images.unsplash.com/photo-1757573538081-c469f75cdd7a?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Australia / Tailings",
    title: "Tailings Facility Expansion",
    description: "New containment cell, phase 2",
    image: "https://images.unsplash.com/photo-1523848309072-c199db53f137?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "South Africa / Iron Ore",
    title: "Iron Ore Conveyor Upgrade",
    description: "3.2km overland conveyor",
    image: "https://images.unsplash.com/photo-1727373203579-7b8984cb8120?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Peru / Gold",
    title: "Heap Leach Pad Build",
    description: "45-hectare liner install",
    image: "https://images.unsplash.com/photo-1513257805917-a0da1146eb15?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Canada / Iron Ore",
    title: "Crusher Station Rebuild",
    description: "Primary jaw crusher replacement",
    image: "https://images.unsplash.com/photo-1780389098001-e641e50aeebd?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Zambia / Copper",
    title: "Concentrator Site Works",
    description: "Civil & structural package",
    image: "https://images.unsplash.com/photo-1636887584784-954392022b75?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },
];

const ProjectsGrid = () => {
  return (
    <section className="py-10 sm:py-11">
      <div className="container">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
