import { BsCheckSquareFill } from "react-icons/bs";
import Button from "../Button";

interface PriceCardProps {
  type: string;
  price: string;
  recommended?: boolean;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  type,
  price,
  recommended = false,
  features,
}) => {
  return (
    <div
      className={`bg-[#2323239E] border border-[#333333B2] rounded-xl p-6 flex flex-col gap-4 w-full md:w-[320px] ${
        type === "Premium" ? "bg-white text-black md:h-[600px]" : "md:h-[554px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="bg-neutral-800 text-white px-4 py-1 rounded-full text-sm md:text-base">
          {type}
        </span>
        {recommended && (
          <span className="bg-black text-white px-4 py-1 rounded-full text-xs md:text-sm">
            Recommended
          </span>
        )}
      </div>

      <div
        className={`flex items-baseline gap-1 ${
          type === "Premium" && "text-black"
        }`}
      >
        <span
          className={`text-2xl md:text-3xl font-bold ${
            type === "Premium" ? "text-black" : "text-white"
          }`}
        >
          $
        </span>
        <span
          className={`text-4xl md:text-5xl font-bold ${
            type === "Premium"
              ? "text-black"
              : "bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text"
          }`}
        >
          {price}
        </span>
        <span
          className={`font-bold text-[20px] md:text-[24px] ${
            type === "Premium"
              ? "text-black"
              : "bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text"
          }`}
        >
          /month
        </span>
      </div>

      <Button
        className={`w-full ${type === "Premium" ? "bg-black text-white" : ""}`}
      >
        Start Free Trial
      </Button>

      <div
        className={`flex flex-col ${
          type === "Premium" ? "gap-6 mt-4" : "gap-4 mt-2"
        }`}
      >
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <BsCheckSquareFill
              className={`${
                type === "Premium" ? "text-black" : "text-white"
              } shrink-0 mt-1`}
            />
            <span
              className={`leading-[120%] text-[14px] md:text-base ${
                type === "Premium" ? "text-black" : "text-white"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans: PriceCardProps[] = [
    {
      type: "Individual",
      price: "10",
      features: [
        "Access to AI tools to plan your routine",
        "Curated Meals",
        "Unlimited Routine",
        "Routine notification",
      ],
    },
    {
      type: "Premium",
      price: "65",
      recommended: true,
      features: [
        "Access to AI tools to plan your routine",
        "Curated Meals",
        "Unlimited Routine",
        "Routine notification",
        "Mentorship",
        "Accountability Group",
        "Full App Access",
      ],
    },
    {
      type: "Group",
      price: "40",
      features: [
        "Access to AI tools to plan your routine",
        "Curated Meals",
        "Unlimited Routine",
        "Routine notification",
        "Accountability Group",
        "Full App Access",
      ],
    },
  ];

  return (
    <section className="max-container padding-x flex items-center flex-col justify-center py-20">
      <Button variant="secondary">
        <span className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text">
          Pricing
        </span>
      </Button>

      <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text text-[32px] md:text-[48px] font-bold text-center mt-4">
        Affordable Membership Plans
      </h1>

      <p className="text-white text-[16px] md:text-[20px] text-center mb-10 max-w-2xl px-4">
        You can choose from the different membership plans that meet your
        fitness needs.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-[1200px] px-4">
        {plans.map((plan, index) => (
          <div key={index} className="flex-1">
            <PriceCard
              type={plan.type}
              price={plan.price}
              recommended={plan.recommended}
              features={plan.features}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
