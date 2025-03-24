import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import clickStream from "../images/ClickStream.png";
import federated from "../images/Federated-Learning.png";
import covid from "../images/covid.png";
import driver from "../images/ddd.jpeg";
import music from "../images/music1.webp";
import exam from "../images/exam3.webp";
import recommend from "../images/recommend.jpg"
import inventory from "../images/inventory.webp";
import '../App.css';
import "react-multi-carousel/lib/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const projectsRef = useRef();

  useEffect(() => {
    // Detect mobile screen
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 4 === 0 ? -150 : 150 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: 'Click-Stream Insights Accelerator',
      description: 'A cloud-based recommendation system that personalizes user experiences and boosts sales through intelligent data-driven insights.',
      technologies: ['AWS', 'ReactJS', 'Python', 'Flask'],
      githubLink: 'https://github.com/AnirudhKalva/Click-Stream-Insights-Accelerator',
      image: clickStream
    },
    {
      title: 'Federated Learning on Medical Images',
      description: 'Developed a Federated Learning-based medical imaging classifier using CNNs and privacy-preserving strategies like FedAvg, FedProx, and FedNova on the PathMNIST dataset.',
      technologies: ['Python', 'Pytorch'],
      githubLink: 'https://github.com/AnirudhKalva/Federated-Learning-Pathmnist',
      image: federated
    },
    {
      title: 'Driver Drowsiness Detection',
      description: 'A real-time system that monitors driver drowsiness, detects fatigue through eye movement analysis, and triggers alerts to prevent accidents.',
      technologies: ['Python', 'OpenCV', 'Keras'],
      githubLink: 'https://github.com/AnirudhKalva/Driver-Drowsiness-Detection',
      image: driver
    },
    {
      title: 'Music Streaming Web Application',
      description: 'A feature-rich music streaming platform that provides multilingual support and seamless user management for an enhanced listening experience.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJs'],
      githubLink: 'https://github.com/AnirudhKalva/Aakashvani-Music-Streaming-Web-Application',
      image: music
    },
    {
      title: 'Inventory Management System',
      description: 'A web application for efficient warehouse inventory tracking, organization, and management, ensuring real-time stock control and streamlined operations.',
      technologies: ['ReactJS', 'Go', 'PostgresSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/AnirudhKalva/Inventory_Managment_System',
      image: inventory
    },
    {
      title: 'STET Examination Management System',
      description: 'Crafted a mobile and web-based exam management platform with secure authentication and real-time notifications.',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Google Firebase'],
      githubLink: 'https://github.com/AnirudhKalva/STET-Examination-Management-System',
      image: exam
    },
    {
      title: 'Covid Analysis and Predictions',
      description: 'A data-driven system that analyzes COVID trends, visualizes real-time data, and predicts future cases for informed decision-making using machine learning models.',
      technologies: ['Python', 'Machine Learning'],
      githubLink: 'https://github.com/AnirudhKalva/COVID',
      image: covid
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="relative min-h-screen flex flex-col justify-center items-center text-white py-40 pt-20">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-5xl font-bold mb-8 text-[#00E0FF]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-lg cursor-pointer project-card ${
                index % 4 === 0 ? "row-span-2" : "row-span-1"
              }`}
              onClick={() => {
                if (isMobile) {
                  setSelectedProject(selectedProject === index ? null : index);
                } else {
                  window.open(project.githubLink, "_blank");
                }
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay (For Desktop) */}
              <div className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-4 transition-opacity duration-300 ${
                isMobile ? (selectedProject === index ? "opacity-100" : "opacity-0") : "opacity-0 group-hover:opacity-100"
              }`}>
                <h3 className="text-xl font-bold text-[#00E0FF]">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-[#00E0FF] text-black px-2 py-1 rounded-lg text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#1E293B" points="0,100 100,0 100,100" />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsPage;
