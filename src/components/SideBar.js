import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false); // Close menu after clicking a link
  };

  return (
    <header className="bg-[#0A0F1A] shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg backdrop-blur-lg">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-[#00E0FF] cursor-pointer" onClick={(e) => handleSmoothScroll(e, "#hero")}>
        AK
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-white text-lg hover:text-[#00E0FF] transition">About</a>
        <a href="#experience-education" onClick={(e) => handleSmoothScroll(e, "#experience-education")} className="text-white text-lg hover:text-[#00E0FF] transition">Career</a>
        <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="text-white text-lg hover:text-[#00E0FF] transition">Skills</a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="text-white text-lg hover:text-[#00E0FF] transition">Projects</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-white text-lg hover:text-[#00E0FF] transition">Contact</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button className="md:hidden text-2xl text-white" onClick={() => setIsNavOpen(true)}>
        <FaBars />
      </button>

      {/* Mobile Sidebar Navigation - FIXED */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-[#0A0F1A] bg-opacity-95 flex flex-col items-center justify-center z-50 w-full h-full">
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-3xl text-white" onClick={() => setIsNavOpen(false)}>
            <FaTimes />
          </button>

          {/* Mobile Menu Links - Ensuring visibility */}
          <ul className="flex flex-col absolute top-6 right-13 items-center space-y-5 text-xl text-white">
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-[#00E0FF]">About</a></li>
            <li><a href="#experience-education" onClick={(e) => handleSmoothScroll(e, "#experience-education")} className="hover:text-[#00E0FF]">Career</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="hover:text-[#00E0FF]">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="hover:text-[#00E0FF]">Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#00E0FF]">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default SideBar;
