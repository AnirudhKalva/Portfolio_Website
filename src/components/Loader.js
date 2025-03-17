import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "../App.css"; // Ensure you have styles for smooth animations

const Loader = ({ setLoading }) => {
  useEffect(() => {
    gsap.to(".loader", {
      opacity: 0,
      duration: 1,
      delay: 3, // Show for 3 sec
      onComplete: () => setLoading(false), // Hide loader
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0F172A] flex flex-col justify-center items-center text-white loader">
      {/* Glowing Circuit Board SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="relative flex justify-center items-center"
      >
        <img src="/images/circuit.svg" alt="Circuit Animation" className="w-40 h-40 opacity-70" />
      </motion.div>

      {/* Binary Code Typing Effect */}
      <motion.p
        className="text-md mt-4 text-[#00E0FF] font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100...
      </motion.p>

      {/* Data Streaming Animation */}
      <motion.div
        className="w-1/2 h-1 bg-[#00E0FF] mt-6"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default Loader;
