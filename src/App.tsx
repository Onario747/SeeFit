import Navbar from "./components/Navbar";
import AiPerks from "./components/ai-perks";
import AppDemo from "./components/app-demo";
import Benefit from "./components/benefit";
import ComingSoon from "./components/coming-soon";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Routine from "./components/routines";
import Sponsors from "./components/sponsors";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";

function App() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <img
        src="/assets/svg/hero-light1.svg"
        alt="hero-bg"
        className="absolute top-0 left-0 object-contain dark:opacity-100 opacity-30 transition-opacity duration-300 -z-[20px]"
      />
      <img
        src="/assets/svg/hero-light2.svg"
        alt="hero-bg"
        className="absolute top-0 left-[8rem] object-contain dark:opacity-100 opacity-30 transition-opacity duration-300 -z-[20px]"
      />
      <div className="flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <Sponsors />
        <Routine />
        <Benefit />
        <AiPerks />
        <AppDemo />
        <Pricing />
        <Testimonial />
        <ComingSoon />
        <Footer />
      </div>
    </main>
  );
}

export default App;
