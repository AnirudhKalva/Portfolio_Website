import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo1.png";
import ThemeToggle from './ThemeToggle'; // Import the toggle component

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false);
  };

  return (
    <header className="bg-white bg-[#0A0F1A] shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg backdrop-blur-lg transition-colors duration-300">
      {/* Logo */}
      <img
        src={logo}
        alt="AK Logo"
        className="w-[60px] h-[50px] object-contain cursor-pointer"
        onClick={(e) => handleSmoothScroll(e, '#hero')}
      />

      {/* Desktop Nav + ThemeToggle */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-black text-white text-lg hover:text-[#00E0FF] transition">About</a>
        <a href="#experience-education" onClick={(e) => handleSmoothScroll(e, "#experience-education")} className="text-black text-white text-lg hover:text-[#00E0FF] transition">Career</a>
        <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="text-black text-white text-lg hover:text-[#00E0FF] transition">Skills</a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="text-black text-white text-lg hover:text-[#00E0FF] transition">Projects</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-black text-white text-lg hover:text-[#00E0FF] transition">Contact</a>
      </div>

      {/* Hamburger Button */}
      <button className="md:hidden text-2xl text-black dark:text-white" onClick={() => setIsNavOpen(true)}>
        <FaBars />
      </button>

      {/* Mobile Sidebar */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#0A0F1A] bg-opacity-95 flex flex-col items-center justify-center z-50 w-full h-full transition-colors duration-300">
          <button className="absolute top-6 right-6 text-3xl text-black dark:text-white" onClick={() => setIsNavOpen(false)}>
            <FaTimes />
          </button>

          <ul className="flex flex-col items-center space-y-5 text-xl text-black dark:text-white">
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-[#00E0FF]">About</a></li>
            <li><a href="#experience-education" onClick={(e) => handleSmoothScroll(e, "#experience-education")} className="hover:text-[#00E0FF]">Career</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="hover:text-[#00E0FF]">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="hover:text-[#00E0FF]">Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#00E0FF]">Contact</a></li>
          </ul>

          {/* Theme toggle in mobile */}
          <div className="mt-8">
          </div>
        </div>
      )}
    </header>
  );
};

export default SideBar;
