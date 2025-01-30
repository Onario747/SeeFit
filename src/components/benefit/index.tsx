import { BsCheckSquareFill } from "react-icons/bs";
import Button from "../Button";

const plans = [
  {
    id: 1,
    title: "Tailored Fitness Plans",
  },
  {
    id: 2,
    title: "Nutrition Guidance",
  },
  {
    id: 3,
    title: "Progress Tracking Tools",
  },
  {
    id: 4,
    title: "Expert Coaching",
  },
  {
    id: 5,
    title: "Flexible Scheduling",
  },
];

const Benefit = () => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 max-container padding-x pt-[5rem]">
      <img
        src="/assets/svg/benefit-image.svg"
        alt="benefit image"
        className="object-contain w-full md:w-auto mt-8 md:mt-0"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Button variant="secondary" className="w-[55px]">
          <span className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text">
            Benefits
          </span>
        </Button>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text text-[32px] md:text-[48px] font-bold leading-[110%] md:leading-[100%] mt-4">
          Smart Workout and Health Metrics
        </h1>

        <div className="mt-4 flex flex-col gap-4 w-full md:max-w-[395px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex items-center justify-between w-full bg-[#333333B2] rounded-[12px] h-[52px] px-4"
            >
              <span className="text-white text-[14px] md:text-base">
                {plan.title}
              </span>
              <BsCheckSquareFill className="text-white w-5 h-5" />
            </div>
          ))}

          <Button variant="outline" className="w-full md:w-auto">
            See Benefits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
