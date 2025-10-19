import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-r from-purple-700/20 via-pink-500/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-r from-cyan-500/20 via-teal-400/10 to-transparent blur-[120px]" />
      </div>

      
      <div className="relative z-10 max-w-5xl mx-auto text-center lg:text-left">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">Me</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi! I’m <span className="text-white font-semibold">Priyanshu</span>, a passionate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 font-semibold">
            React Developer
          </span>{" "}
          and creative designer who loves turning ideas into sleek, interactive, and human-centered digital experiences.
          <br /><br />
          I focus on blending design aesthetics with solid development to create beautiful, performant interfaces.
          Whether it’s a personal project or a freelance collaboration, I enjoy building things that make people stop and say, “wow”.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}
