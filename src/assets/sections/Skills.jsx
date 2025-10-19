import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaPython, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-sky-400 to-teal-500" },
  { name: "JavaScript", icon: FaJs, color: "from-yellow-400 to-orange-500" },
  { name: "Framer Motion", icon: SiFramer, color: "from-pink-500 to-purple-500" },
  { name: "Python", icon: FaPython, color: "from-blue-400 to-yellow-400" },
  { name: "Git", icon: FaGitAlt, color: "from-red-500 to-orange-500" },
  { name: "Docker", icon: FaDocker, color: "from-sky-400 to-blue-600" },
  { name: "Figma", icon: FaFigma, color: "from-pink-500 to-violet-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-r from-purple-700/20 via-pink-500/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-r from-cyan-500/20 via-teal-400/10 to-transparent blur-[120px]" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
          Skills
        </span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-800/40 backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
            viewport={{ once: true }}
          >
            <div
              className={`text-5xl mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}
            >
              <Icon />
            </div>
            <p className="text-lg font-medium text-gray-300">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

