import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/priyanshu-mondal-8a4517375" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/prince0-7" },
  { Icon: FaEnvelope, label: "Email", link: "mailto:priyanshumondal290@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-r from-purple-700/20 via-pink-500/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-r from-cyan-500/20 via-teal-400/10 to-transparent blur-[120px]" />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
          Touch
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl">
        
        <motion.form
          className="flex-1 flex flex-col gap-4 bg-gray-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </motion.form>

        
        <motion.div
          className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socials.map(({ Icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white text-xl md:text-2xl transition-colors duration-300"
            >
              <Icon className="text-2xl md:text-3xl" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
