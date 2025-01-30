import { BsCheckSquareFill } from "react-icons/bs";
import Button from "../Button";

const features = [
  {
    id: 1,
    title:
      "Instantly identify meals with detailed breakdown of calories and nutrients",
  },
  {
    id: 2,
    title:
      "Set daily calorie limits and track your progress with real-time updates and insights",
  },
  {
    id: 3,
    title: "Get AI driven suggestions for healthier swaps or balanced meals ",
  },
];

const AiPerks = () => {
  return (
    <section className="pt-[5rem] max-container padding-x flex flex-col md:grid md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Button variant="secondary" className="w-[55px]">
          <span className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text">
            Features
          </span>
        </Button>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text text-[32px] md:text-[48px] font-bold leading-[110%] md:leading-[100%] mt-4">
          AI Powered Food Tracker
        </h1>
        <p className="text-white text-[16px] md:text-[20px] mt-4">
          Take control of your nutrition with the food tracker your personal
          assistant for smarter eating that evaluates eating habits and calories
          intake.
        </p>
        <div className="mt-4 flex flex-col gap-4 w-full md:max-w-[395px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 w-full bg-[#333333B2] rounded-[12px] min-h-[52px] p-4"
            >
              <BsCheckSquareFill className="text-white text-[20px] shrink-0 mt-1" />
              <span className="text-white text-[14px] md:text-base leading-[120%]">
                {feature.title}
              </span>
            </div>
          ))}

          <Button variant="outline" className="w-full md:w-auto">
            See Benefits
          </Button>
        </div>
      </div>
      <img
        src="/assets/svg/ai-image.svg"
        alt="ai-image"
        className="object-contain w-full md:w-auto mt-8 md:mt-0"
      />
    </section>
  );
};

export default AiPerks;
