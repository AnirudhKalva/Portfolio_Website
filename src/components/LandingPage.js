import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import profilePhoto from "../images/ProfilePhoto.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const LandingPage = () => {
  
  useEffect(() => {
    gsap.fromTo(
      "#profile-photo",
      { y: -10 },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "easeInOut",
      }
    );
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full text-white h-screen flex flex-col md:flex-row justify-center items-center text-left px-10"
    >
    
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="particles-js"
        className="absolute inset-0 w-full h-full z-0"
        init={async (engine) => {
          await loadSlim(engine);
        }}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 120,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 5,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
        }}
      />
      </div>

      {/* Left Section - Content */}
      <div className="md:w-1/2">
        {/* Typewriter Effect for Name */}
        <motion.h1
          className="text-6xl font-bold mb-4 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className="text-[#00E0FF]">
            <Typewriter
              words={["Anirudh Kalva","A Software Engineer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        {/* Overview */}
        <motion.p
          className="text-xl opacity-80 max-w-xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate Software Engineer specializing in scalable web solutions,
          cloud computing, and machine learning.
        </motion.p>

        {/* Social Icons */}
        <motion.div
         className="flex space-x-4 ease-in duration-300 mt-4 relative z-10"
         initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
         >
          <a href="mailto:anirudhkalva09@gmail.com">
    <FaEnvelope size={30} className="text-white hover:text-[#00E0FF] transition-transform duration-300 hover:scale-110" />
  </a>   
  <a href="https://www.linkedin.com/in/anirudh-kalva-672b791a3/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} className="text-white hover:text-[#00E0FF] transition-transform duration-300 hover:scale-110" />
  </a>
  <a href="https://github.com/AnirudhKalva" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} className="text-white hover:text-[#00E0FF] transition-transform duration-300 hover:scale-110" />
  </a>
  </motion.div>

        {/* Scroll Button */}
        <motion.button
          onClick={scrollToAbout}
          className="mt-8 px-6 py-3 bg-[#00E0FF] text-black font-semibold rounded-lg hover:bg-[#6A11CB] transition-all duration-300 shadow-lg relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Scroll to know more ↓
        </motion.button>
      </div>

      {/* Right Section - Profile Photo */}
      <motion.div
        id="profile-photo"
        className="mb-6 z-10 md:w-2/5 flex justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profilePhoto}
          alt="Anirudh Kalva"
          className="size-45 flex shadow-lg rounded-lg border-4 border-[#00E0FF]"
        />
      </motion.div>
  <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#1E293B" points="0,100 100,0 100,100"/>
        </svg>
      </div>
    </section>
  );
};

export default LandingPage;