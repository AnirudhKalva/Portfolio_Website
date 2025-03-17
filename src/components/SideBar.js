
import React, { useState} from 'react';
import { FaAlignRight } from "react-icons/fa";
import '../App.css';
import "react-multi-carousel/lib/styles.css";


const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-[#0A0F1A] shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg backdrop-blur-lg">
    {/* Logo */}
    <h1 className="text-3xl font-bold text-[#00E0FF] cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#hero')}>
      AK
    </h1>
  
    {/* Navigation Links */}
    <nav className="flex space-x-8">
      <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-white text-lg hover:text-[#00E0FF] transition">
        About
      </a>
      <a href="#experience-education" onClick={(e) => handleSmoothScroll(e, '#experience-education')} className="text-white text-lg hover:text-[#00E0FF] transition">
      Career
      </a>
      <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="text-white text-lg hover:text-[#00E0FF] transition">
        Skills
      </a>
      
      <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="text-white text-lg hover:text-[#00E0FF] transition">
        Projects
      </a>
      <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-white text-lg hover:text-[#00E0FF] transition">
        Contact
      </a>
    </nav>
  </header>
  
  );
};

export default SideBar;
