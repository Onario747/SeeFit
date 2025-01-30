import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    if (typeof window !== "undefined" && savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "var(--background)";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "var(--background)";
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-[#2323239E] dark:bg-[#2323239E] transition-colors duration-300 focus:outline-none border-2 border-[#333333B2]"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <FiSun className="w-4 h-4 text-yellow-500 cursor-pointer" />
        <FiMoon className="w-4 h-4 text-white/60 cursor-pointer" />
      </div>

      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-300
          ${
            theme === "dark"
              ? "translate-x-7 bg-gray-800/50"
              : "translate-x-0 bg-white/50"
          }
        `}
      />
    </button>
  );
};

export default ThemeToggle;
