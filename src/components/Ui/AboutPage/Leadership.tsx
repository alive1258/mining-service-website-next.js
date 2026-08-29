const TEAM = [
  { name: "Daniel Reyes", role: "Chief Executive Officer", gradient: "from-[#3a4633] to-ink-700" },
  { name: "Priya Nandan", role: "VP, Site Operations", gradient: "from-[#4a5940] to-ink-700" },
  { name: "Erik Voss", role: "Head of Engineering", gradient: "from-[#2f3a29] to-ink-700" },
  { name: "Aisha Bello", role: "Director of Safety", gradient: "from-lime-400 to-[#6d842a]" },
];

const Leadership = () => {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container">
        <h2 className="font-display mb-8 text-2xl font-semibold leading-tight text-white sm:mb-11 sm:text-4xl">
          Leadership on the <span className="text-lime-400">Ground</span>
        </h2>
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-[18px] border border-white/10 bg-ink-800">
              <div className={`h-[130px] bg-linear-to-br sm:h-[200px] ${member.gradient}`} />
              <div className="p-3.5 sm:p-4">
                <div className="text-[13.5px] font-semibold text-white sm:text-[15px]">{member.name}</div>
                <div className="mt-0.5 text-[11.5px] text-white/50 sm:text-[12.5px]">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
