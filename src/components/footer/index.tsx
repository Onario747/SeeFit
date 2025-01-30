import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
];

const Footer = () => {
  return (
    <footer className="max-container padding-x py-12">
      <div className="bg-[#2323239E]/60 rounded-[40px] border border-[#333333B2] p-6 md:p-12">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 border border-[#333333B2] rounded-[12px] p-4 max-w-[367px] w-full mx-auto bg-[#2323239E]">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className="text-white/60 hover:text-white transition-colors text-sm md:text-base"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Title */}
        <h2 className="text-[28px] md:text-[40px] text-center font-bold bg-gradient-to-r from-[#FFFFFF] via-[#7F7F7F] to-[#9E9D9D] text-transparent bg-clip-text mb-4 max-w-[800px] mx-auto leading-[120%]">
          Have a Fitness Request? You can book a session
        </h2>

        {/* Email with copy button */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-12">
          <span className="text-white/60 text-sm md:text-base">
            info@seefit.app
          </span>
          <button
            onClick={() => navigator.clipboard.writeText("info@seefit.app")}
            className="text-white/60 hover:text-white flex items-center gap-2 transition-colors text-sm md:text-base"
          >
            copy
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V16C8 17.1046 8.89543 18 10 18H18C19.1046 18 20 17.1046 20 16V7.24162C20 6.7034 19.7831 6.18789 19.4 5.8L16.2 2.6C15.8121 2.21691 15.2966 2 14.7584 2H10C8.89543 2 8 2.89543 8 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 18V20C16 21.1046 15.1046 22 14 22H6C4.89543 22 4 21.1046 4 20V8C4 6.89543 4.89543 6 6 6H8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#333333B2] pt-8 bg-[#FAFAFB] rounded-[12px] p-4">
          <span className="text-[#717591] text-sm md:text-base order-2 md:order-1">
            Copyright©2025 SeeFit
          </span>
          <div className="flex gap-4 order-1 md:order-2">
            <a
              href="#"
              className="text-white bg-[#000] p-1 rounded-full hover:text-white/80 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-white bg-[#000] p-1 rounded-full hover:text-white/80 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-white bg-[#000] p-1 rounded-full hover:text-white/80 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
