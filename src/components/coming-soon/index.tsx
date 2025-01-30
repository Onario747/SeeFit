const ComingSoon = () => {
  return (
    <section className="max-container padding-x relative flex items-center justify-center flex-col pt-[8em] pb-20">
      <img
        src="/assets/svg/coming-soon.svg"
        alt="coming-soon"
        className="absolute -top-[6rem] max-sm:-top-[0rem] left-0 w-full object-cover opacity-50 md:opacity-100"
      />
      <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text text-[48px] md:text-[96px] font-bold text-center leading-[110%] md:leading-[100%]">
        Coming Soon
      </h1>
      <p className="text-white text-[16px] md:text-[20px] max-w-[600px] text-center mt-4">
        SeeFit will soon be available on <strong>APP STORE</strong> and
        <strong> PLAY STORE</strong>. Stay tuned for ultimate fitness
        experience, anytime, anywhere
      </p>

      {/* Download buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-12">
        <button className="flex items-center gap-3 bg-white text-black px-4 md:px-6 py-3 rounded-[12px] hover:bg-white/90 transition-colors w-full md:w-auto">
          <img
            src="/assets/svg/apple.svg"
            alt="Apple"
            className="w-6 md:w-8 h-6 md:h-8"
          />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="text-lg md:text-xl font-bold">App Store</p>
          </div>
        </button>

        <button className="flex items-center gap-3 bg-white text-black px-4 md:px-6 py-3 rounded-[12px] hover:bg-white/90 transition-colors w-full md:w-auto">
          <img
            src="/assets/svg/playstore.svg"
            alt="Play Store"
            className="w-6 md:w-8 h-6 md:h-8"
          />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-lg md:text-xl font-bold">Google Play</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ComingSoon;
