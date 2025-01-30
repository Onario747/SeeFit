// import { NavLink } from "react-router-dom";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Benefits",
    path: "/benefits",
  },
  {
    id: 3,
    title: "Features",
    path: "/features",
  },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    title: "Testimonials",
    path: "/testimonials",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isMenuOpen ? "bg-black" : "bg-primary-bg/80 backdrop-blur-lg"
      } transition-colors duration-300`}
    >
      <div className="max-container padding-x flex items-center justify-between py-4">
        <img src="/assets/svg/logo.svg" className="w-30" alt="Logo" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className="font-mada text-[16px] font-[400] transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-white/10 md:hidden">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="py-2 px-4 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <div className="flex items-center gap-4 p-4 border-t border-white/10 mt-4">
                <ThemeToggle />
                <Button>Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
