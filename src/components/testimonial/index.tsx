import { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "../Button";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "As a busy professional, finding time to work out seemed impossible until I discovered SolFit. The flexible scheduling options allowed me to fit workouts into my hectic life seamlessly. My favorite part is the custom nutrition guidance that made meal prep enjoyable rather than overwhelming.",
    author: "Jason L",
  },
  {
    id: 2,
    rating: 5,
    text: "Joining SolFit was one of the best decisions I've ever made! Initially skeptical about online coaching, I found myself welcomed into an encouraging community that motivates each other every step of the way. The app makes it easy to stay on track with workouts and nutrition advice right at my fingertips!",
    author: "Emily R",
  },
  {
    id: 3,
    rating: 5,
    text: "I've struggled with maintaining a consistent workout routine for years. When I started using SolFit, everything changed. With their personalized approach and supportive community, I finally found my rhythm.",
    author: "Sarah M",
  },
  {
    id: 4,
    rating: 5,
    text: "The personalized workout plans and nutrition advice have been game-changing. I've seen more progress in 3 months than I did in a year of working out on my own.",
    author: "Michael K",
  },
  {
    id: 5,
    rating: 5,
    text: "The community aspect of SolFit sets it apart. Having workout buddies and coaches available 24/7 keeps me motivated and accountable.",
    author: "Rachel P",
  },
  {
    id: 6,
    rating: 5,
    text: "I love how the app adapts to my progress. The AI-powered recommendations keep my workouts challenging but achievable.",
    author: "David W",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(testimonials.length / getItemsPerView())
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? Math.ceil(testimonials.length / getItemsPerView()) - 1
        : prev - 1
    );
  };

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 50);

    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const visibleTestimonials = testimonials.slice(
    currentSlide * getItemsPerView(),
    currentSlide * getItemsPerView() + getItemsPerView()
  );

  return (
    <section className="max-container padding-x py-20">
      <div className="bg-[#2323239E] rounded-[40px] border border-[#333333B2] p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-center md:text-left">
            <Button variant="secondary">
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text">
                Testimonial
              </span>
            </Button>
            <h2 className="text-[32px] md:text-[40px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text mt-4">
              What They Say About Us
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <FiArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <FiArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#2F2F2F99] p-6 md:p-8 relative transform transition-all duration-500 hover:scale-105"
              style={{
                borderRadius: "20px",
                clipPath:
                  "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0% 50%)",
              }}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl md:text-2xl ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>

              <p className="text-white/80 mt-6 text-[14px] md:text-[16px] leading-[120%]">
                {testimonial.text}
              </p>

              <p className="text-white mt-6 font-semibold">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-50 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
