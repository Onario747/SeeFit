import Button from "../Button";

const heroBoxes = [
  {
    title: "Qualified Trainers",
    number: "154",
  },
  {
    title: "Active members across the world",
    number: "1,453",
  },
];

const Hero = () => {
  return (
    <section className="max-container padding-x flex flex-col-reverse md:grid md:grid-cols-2 py-[10rem] gap-[1rem] items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {heroBoxes.map((box) => (
          <div
            key={box.title}
            className="w-full h-[194px] bg-[#2323239E]/40 backdrop-blur-[40px] rounded-[24px] flex items-center justify-center flex-col border border-[#333333B2]"
          >
            <span className="font-bold text-[40px] md:text-[56px] text-white">
              {box.number}
            </span>
            <span className="text-[#C7C8D3] text-[16px] md:text-[18px] font-[400px] max-w-[216px] w-full text-center">
              {box.title}
            </span>
          </div>
        ))}
        <div className="relative col-span-1 sm:col-span-2 w-full h-[300px] md:h-[400px] bg-[#2323239E]/40 backdrop-blur-[40px] rounded-[24px] border border-[#333333B2] overflow-hidden">
          <img
            src="/assets/svg/hero-man.svg"
            alt="hero-image"
            className="absolute w-full h-full object-contain md:h-[456.49px] md:-top-[3.5rem] md:-right-[5rem]"
          />
        </div>
      </div>

      <div className="max-w-full md:max-w-[608px] w-full text-white mb-8 md:mb-0">
        <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text font-bold text-[48px] md:text-[96px] leading-[110%] md:leading-[100%] max-sm:text-center">
          Transform Your Body Elevate Your Mind
        </h1>
        <p className="text-[16px] md:text-[18px] mt-3 max-sm:text-center">
          Being healthy is all about maintaining healthy habits, this app helps
          keep you accountable and helps you stay fit the right way with our
          various activities like jogging, running, dieting and Benchpress.
        </p>
        <Button className="mt-6 max-sm:mx-auto max-sm:flex max-sm:items-center max-sm:justify-center">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
