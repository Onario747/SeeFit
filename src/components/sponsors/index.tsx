const sponsors = [
  {
    name: "Sponsor 1",
    image: "/assets/svg/sponsors/sponsor1.svg",
  },
  {
    name: "Sponsor 2",
    image: "/assets/svg/sponsors/sponsor2.svg",
  },
  {
    name: "Sponsor 3",
    image: "/assets/svg/sponsors/sponsor3.svg",
  },
  {
    name: "Sponsor 4",
    image: "/assets/svg/sponsors/sponsor4.svg",
  },
];

const Sponsors = () => {
  return (
    <section className="max-container padding-x bg-[#2323239E]/60 backdrop-blur-[62%] border border-[#333333B2] py-4 overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-evenly">
        {sponsors.map((sponsor) => (
          <img
            src={sponsor.image}
            alt={sponsor.name}
            key={sponsor.name}
            className="object-contain"
          />
        ))}
      </div>

      {/* Mobile View with Auto-scroll */}
      <div className="md:hidden relative w-full">
        <div className="flex space-x-8 animate-scroll">
          {/* First set of sponsors */}
          {sponsors.map((sponsor) => (
            <img
              src={sponsor.image}
              alt={sponsor.name}
              key={`${sponsor.name}-1`}
              className="object-contain w-[150px] shrink-0"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor) => (
            <img
              src={sponsor.image}
              alt={sponsor.name}
              key={`${sponsor.name}-2`}
              className="object-contain w-[150px] shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
