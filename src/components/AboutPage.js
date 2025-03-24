import { motion } from "framer-motion";
import devGif from "../images/1709674937953.gif"; // Replace with your GIF

const AboutPage = () => {
  return (
    <section id="about" className=" relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#10151F] to-[#0E1929] text-white px-8 pt-10 pb-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Section Title */}
        <motion.h2 
          className="text-5xl font-bold text-[#00E0FF] mb-6 border-[#00E0FF] pb-2 w-fit mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Bit About Me
        </motion.h2>
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-left">
       
          {/* Left - About Me Text */}
          <motion.div 
            className="w-full md:w-3/5 text-2xl leading-relaxed text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              I am a Software Engineer with a passion for building scalable and high-performance applications. 
              My expertise spans frontend & backend development, cloud computing, and machine learning.
              I enjoy transforming complex problems into user-friendly solutions that enhance efficiency 
              and improve user experience.
            </p>
            <p className="mt-4">
              I have hands-on experience with  ReactJS, Spring Boot, NodeJS, ASP.Net, AWS, and data-driven applications, 
              and I thrive on creating innovative solutions that bridge technology and user needs. 
              Always eager to learn, I stay up-to-date with the latest industry trends to deliver cutting-edge applications.
            </p>
          </motion.div>

          {/* Right - Enlarged GIF */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={devGif} alt="Developer Animation" className="w-[350px] md:w-[450px] rounded-lg shadow-lg" />
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#1E293B" points="0,0 100,100 0,100"/>
        </svg>
      </div>
    </section>
  );
};

export default AboutPage;
