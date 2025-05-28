import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPython, FaJava, FaAws, FaReact, FaNode, FaGitAlt, FaDatabase,FaRProject} from "react-icons/fa";
import { DiMongodb, DiDocker, DiJenkins, DiVisualstudio   } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { SiTypescript, SiKubernetes, SiFlask,SiJavascript,SiDotnet, SiSpring, SiPostman, SiNextdotjs,SiSharp, SiMysql,SiIntellijidea, SiSwagger, SiGo, SiJupyter,SiTailwindcss, SiPostgresql} from "react-icons/si";
import { TbBrandVscode} from "react-icons/tb";
import { useTheme } from "../contexts/ThemeContext";
gsap.registerPlugin(ScrollTrigger);

const SkillsPage = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const skills = [
    { icon: <FaPython size={36} />, label: "Python" },
    { icon: <FaJava size={36} />, label: "Java" },
    { icon: <SiSharp size={36} />, label: "C-Sharp" },
    { icon: <FaRProject size={36} />, label: "R-Language" },
    { icon: <SiGo size={36} />, label: "Golang" },
    { icon: <SiJavascript size={36} />, label: "JavaScript" },
    { icon: <SiTypescript size={36} />, label: "TypeScript" },
    { icon: <FaReact size={36} />, label: "ReactJS" },
    { icon: <FaNode size={36} />, label: "NodeJS" },
    { icon: <SiTailwindcss size={36} />, label: "Tailwind CSS" },
    { icon: <SiSpring size={36} />, label: "Spring Boot" },
    { icon: <SiDotnet size={36} />, label: "ASP.Net" },
    { icon: <SiFlask size={36} />, label: "Flask" },
    { icon: <DiMongodb size={36} />, label: "MongoDB" },
    { icon: <SiMysql size={36} />, label: "MySQL" },
    { icon: <FaDatabase size={36} />, label: "SQL Server" },
    { icon: <SiPostgresql size={36} />, label: "PostgresSQL" },
    { icon: <FaAws size={36} />, label: "AWS" },
    { icon: <VscAzure size={36} />, label: "Azure" },
    { icon: <DiDocker size={36} />, label: "Docker" },
    { icon: <SiKubernetes size={36} />, label: "Kubernetes" },
    { icon: <DiJenkins size={36} />, label: "Jenkins" },
    { icon: <DiVisualstudio size={36} />, label: "Visualstudio" },
    { icon: <TbBrandVscode size={36} />, label: "VS Code" },
    { icon: <SiIntellijidea size={36} />, label: "IntelliJ" },
    { icon: <SiJupyter size={36} />, label: "Jupyter" },
    { icon: <SiPostman size={36} />, label: "Postman" },
    { icon: <SiSwagger size={36} />, label: "Swagger" },
    { icon: <FaGitAlt size={36} />, label: "Git" },

  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen flex flex-col justify-center items-center dark:text-white py-40 px-6 pt-20"
    >
      <h2 className="text-5xl font-bold text-[#00E0FF] mb-6">My Technical Expertise</h2>

      {/* Skills Grid as Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl py-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card dark:bg-[#1E293B] text-[#00E0FF] p-4 rounded-lg shadow-md flex flex-col items-center gap-2 hover:bg-[#334155] hover:shadow-[#00E0FF] transition-all duration-300`}
          >
            {skill.icon}
            <span className="text-lg font-medium">{skill.label}</span>

          </div>
        ))}

      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#1E293B" points="0,0 100,100 0,100"/>
        </svg>
      </div>
    </section>
  );
};

export default SkillsPage;
