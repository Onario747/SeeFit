import Button from "../Button";

const AppDemo = () => {
  return (
    <section className="max-container padding-x py-[5rem]">
      <div className="w-full min-h-[504px] bg-[#2323239E] rounded-[40px] flex flex-col md:grid md:grid-cols-2 items-center gap-6 p-6 md:p-0">
        <div className="order-2 md:order-1">
          <img
            src="/assets/svg/app-demo.svg"
            alt="app demo"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="order-1 md:order-2 px-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text text-[32px] md:text-[48px] font-bold leading-[110%] md:leading-[100%]">
            Ready to Start Your Transformation
          </h1>
          <p className="text-[16px] md:text-[20px] text-white mt-4">
            Join our Community to achieve your fitness goals with{" "}
            <strong>Personalised AI</strong> Solutions
          </p>
          <Button variant="outline" className="mt-6 w-full md:w-auto">
            Join SeeFit today!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
