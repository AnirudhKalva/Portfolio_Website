import './App.css';
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import About from "./components/AboutPage";
import Projects from "./components/ProjectsPage";
import Skills from "./components/SkillsPage";
import Contact from "./components/ContactPage";
import Hero from "./components/LandingPage";
import Navbar from "./components/SideBar"; 
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 
import ExperienceEducation from "./components/ExperienceEducation";

const App = () => {
  // const [loading, setLoading] = useState(true);
  return (
    <div className={" bg-gradient-to-b from-[#10151F] to-[#0E1929] overflow-x-hidden overflow-y-hidden min-h-screen bg-[#0D1117] text-white "}>
       {/* Navbar */}
       <Navbar />
          
          {/* Hero Section */}
          <Hero/>

          {/* Main Sections */}
          <About />
          <ExperienceEducation />
          <Skills />
          <Projects />
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
  );
};

export default App;
