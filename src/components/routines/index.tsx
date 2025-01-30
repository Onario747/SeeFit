import Button from "../Button";

const Routine = () => {
  return (
    <section className="max-container padding-x pt-[5rem]">
      <div className="bg-[#2323239E]/70 min-h-[882px] w-full rounded-[40px] border border-[#333333B2] p-4 md:p-8">
        <div className="flex flex-col items-start">
          <Button variant="secondary">Create Routine</Button>
          <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text font-bold text-[32px] md:text-[48px] leading-[110%] mt-[2.5rem] max-w-[800px]">
            From AI Recommended Routines to Customisable Routines that meet your
            Fitness Goals
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="relative bg-[#2F2F2F99] rounded-[20px] h-[305px] md:h-[509px] border border-[#333333B2] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-white text-black text-sm py-1 px-3 rounded-full">
                15 X 15 Workout Routine
              </span>
            </div>
            <div>
              <p className="text-white/80 text-[16px] md:text-lg mt-8 leading-[120%]">
                A 15 days, 15mins/day workout routine to achieve weight loss
                target. For those with "burn belly fat" on their vision board
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Jogging
                </span>
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Running
                </span>
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Dieting
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-[#2F2F2F99] rounded-[20px] h-[305px] md:h-[509px] border border-[#333333B2] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-white text-black text-sm py-1 px-3 rounded-full">
                30 X 30 Workout Routine
              </span>
            </div>
            <div>
              <p className="text-white/80 text-[16px] md:text-lg mt-8 leading-[120%]">
                A 30 days, 30mins/day workout routine for muscle building and
                strength training. Perfect for beginners looking to build muscle
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Weight Training
                </span>
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Calisthenics
                </span>
                <span className="bg-[#333333] text-white/60 text-sm py-1 px-3 rounded-full">
                  Nutrition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routine;
