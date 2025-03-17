import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://zfq4c3lm87.execute-api.us-east-2.amazonaws.com/prod/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Failed to send: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      setStatus("Error connecting to server ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-5xl font-bold text-center mb-6 text-[#00E0FF]" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Get in Touch!
        </motion.h2>

        <p className="text-center mb-8 text-gray-400">Feel free to reach out with any inquiries, collaborations, or just to connect!</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-[#1E1E1E] p-8 rounded-lg shadow-xl hover:shadow-[#00E0FF] transition-shadow duration-300">
          <div className="relative flex flex-col">
          <label
    className={`absolute left-4 top-3 text-[#00E0FF] text-sm transition-all ${
      formData.name ? "top-[-10px] text-xs" : "top-3"
    }`}
  >Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-b-2 border-[#00E0FF] focus:outline-none focus:border-[#6A11CB] py-4 px-4 bg-transparent text-white rounded-lg shadow-lg focus:ring-2 focus:ring-[#00E0FF] placeholder-transparent"
              required
            />
          </div>

          <div className="relative flex flex-col">
          <label
    className={`absolute left-4 top-3 text-[#00E0FF] text-sm transition-all ${
      formData.email ? "top-[-10px] text-xs" : "top-3"
    }`}
  >Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="border-b-2 border-[#00E0FF] focus:outline-none focus:border-[#6A11CB] py-4 px-4 bg-transparent text-white rounded-lg shadow-lg focus:ring-2 focus:ring-[#00E0FF] placeholder-transparent"
              required
            />
          </div>

          <div className="relative flex flex-col md:col-span-2">
          <label
    className={`absolute left-4 top-3 text-[#00E0FF] text-sm transition-all ${
      formData.message ? "top-[-10px] text-xs" : "top-3"
    }`}
  >Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="border-b-2 border-[#00E0FF] focus:outline-none focus:border-[#6A11CB] py-4 px-4 bg-transparent text-white rounded-lg shadow-lg focus:ring-2 focus:ring-[#00E0FF] placeholder-transparent"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex flex-col items-center md:col-span-2">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00E0FF" }}
              whileTap={{ scale: 0.9 }}
              className={`bg-[#00E0FF] text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#6A11CB]"
              }`}
            >
              {loading ? "Sending..." : "Shoot →"}
            </motion.button>
            {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
