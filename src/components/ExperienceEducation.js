import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceEducation = () => {
  const [openIndex, setOpenIndex] = useState({ edu: 0, exp: 0 });

  const toggleAccordion = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const education = [
    {
      title: "Master of Science in Computer and Information Sciences",
      institution: "University of Houston",
      date: "2023 - 2025",
      description: [
        "Cloud Computing, Visualization, Statistical Methods in Research, Data Science, Data Mining, Artificial Intelligence, Digital Image Processing, Database Management Tools.",
      ],
      icon: <FaGraduationCap />,
    },
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Keshav Memorial Institute of Technology",
      date: "2017 - 2021",
      description: [
        "Operating Systems, Data Structures, Software Engineering, Computer Networks, Database Management Systems, Java, Python, Machine Learning, Computer Network.",
      ],
      icon: <FaGraduationCap />,
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "University of Houston",
      date: "May 2024 - Present",
      description: [
        "Developed a full-fledged transportation asset management tool using React.js and Node.js backend, enabling real-time visualization and tracking of 50,000+ traffic assets across Texas for infrastructure monitoring",
        "Built and integrated AI models (YOLOv8, ResNet50) into the traffic asset management tool to detect and assess infrastructure conditions in real time, achieving 82% accuracy and reducing model inference latency by 40% through optimized data processing pipelines.",
        "Enhanced an existing equipment cost and depreciation management tool for the Illinois Center for Transportation using Angular and Node.js, adding bulk data upload support, fixing critical backend issues, and improving admin workflows for year-wise asset tracking."
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "Associate Software Engineer",
      company: "Optum",
      date: "July 2021 - Aug 2023",
      description: [
        "Developed and enhanced components of the XLCare application using C# and ASP.NET, improving user experience and optimizing system performance for pharmacists and care managers, leading to a 30% reduction in load times and enhancing workflow efficiency by 15%.",
        "Contributed to the development of the Practitioner Portal using React, reducing code redundancy by 25% and improving maintainability.",
        "Designed scalable REST APIs using Spring Boot, improving the interoperability of XLCare with HouseCalls, reducing API response times by 30%.",
        "Engineered and optimized data pipelines for XLCare, integrating Apache Kafka, AWS S3, and Redshift, leading to a 20% reduction in data latency and improved processing efficiency.",
        "Implemented and maintained CI/CD pipelines using Docker and Kubernetes, automating build, testing, and deployment processes, reducing deployment time by 23% and minimizing manual intervention.",
        "Diagnosed and resolved critical system bugs by debugging configuration files, analyzing logs, and optimizing SQL queries, leading to a 15% reduction in service downtime.",
        "Led and contributed to organization-wide hackathons and knowledge-sharing seminars, fostering a culture of innovation and collaboration."
      ],
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="experience-education" className="relative min-h-screen py-16 pt-20 bg-[#0E1929] text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-[#00E0FF] text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Sneak Peek Into My Career
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Education */}
          <div>
            <h3 className="text-3xl font-semibold text-[#00E0FF] text-left mb-6">Education</h3>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="border border-[#334155] rounded-lg shadow-lg bg-[#1E293B] overflow-hidden mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleAccordion("edu", index)}
                  className="w-full text-left flex items-center justify-between p-4 text-xl font-semibold text-[#00E0FF] focus:outline-none"
                >
                  <div className="flex text-2xl items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00E0FF] text-black shadow-md">
                      {item.icon}
                    </span>
                    {item.title}
                  </div>
                  <span className="text-[#00E0FF]">{openIndex.edu === index ? "▲" : "▼"}</span>
                </button>
                <motion.div
                  className="px-4 pb-4 dark:text-gray-300 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openIndex.edu === index ? "auto" : 0, opacity: openIndex.edu === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="text-xl text-gray-400">{item.institution} • {item.date}</p>
                  <ul className="list-disc pl-5 text-l mt-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Experience */}
          <div>
            <h3 className="text-3xl font-semibold text-[#00E0FF] text-left mb-6">Professional Experience</h3>
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="border border-[#334155] rounded-lg shadow-lg bg-[#1E293B] overflow-hidden mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleAccordion("exp", index)}
                  className="w-full text-left flex items-center justify-between p-4 text-xl font-semibold text-[#00E0FF] focus:outline-none"
                >
                  <div className="flex text-2xl items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00E0FF] text-black shadow-md">
                      {item.icon}
                    </span>
                    {item.title}
                  </div>
                  <span className="text-[#00E0FF]">{openIndex.exp === index ? "▲" : "▼"}</span>
                </button>
                <motion.div
                  className="px-4 pb-4 dark:text-gray-300 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openIndex.exp === index ? "auto" : 0, opacity: openIndex.exp === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="text-xl text-gray-400">{item.company} • {item.date}</p>
                  <ul className="list-disc pl-5 text-l mt-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#1E293B" points="0,100 100,0 100,100"/>
        </svg>
      </div>
    </section>
  );
};

export default ExperienceEducation;
