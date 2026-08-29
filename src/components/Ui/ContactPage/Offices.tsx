const OFFICES = [
  { city: "Perth, Australia", address: "North Star Avenue, Perth WA 6000" },
  { city: "Santiago, Chile", address: "Av. Andrés Bello 2687, Las Condes" },
  { city: "Johannesburg, SA", address: "44 Grayston Drive, Sandton" },
];

const Offices = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <h2 className="font-display mb-8 text-2xl font-semibold leading-tight text-white sm:mb-11 sm:text-4xl">
          Offices Around The <span className="text-lime-400">World</span>
        </h2>
        <div className="flex flex-col gap-3.5 sm:grid sm:grid-cols-3 sm:gap-5">
          {OFFICES.map((office) => (
            <div key={office.city} className="rounded-[20px] border border-white/10 bg-ink-800 p-6 sm:p-7">
              <div className="text-[15px] font-semibold text-white sm:text-base">{office.city}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-white/50">{office.address}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
