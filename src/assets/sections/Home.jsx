import { useMemo, useEffect, useState } from "react";
import Particlesbackground from "../../components/Particlesbackground.jsx";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Avatar from "../../assets/Avatar.png";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/priyanshu-mondal-8a4517375" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/prince0-7" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.1,
    y: -5,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.8)) drop-shadow(0 0 16px rgba(22, 195, 130, 0.6))",
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(() => ["React Developer", "Designer", "Freelancer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setDeleting(true);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <Particlesbackground />

      
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-full opacity-30 sm:opacity-50 md:opacity-10 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-full opacity-30 sm:opacity-50 md:opacity-10 blur-[150px] animate-pulse delay-500"></div>
      </div>

      
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex items-center px-8 lg:px-20">
        <div className="flex flex-col justify-center text-left">
          <div className="max-w-[48rem] ml-4"> {/* ← shifted slightly left */}
            
            
            <motion.div
              className="mb-3 text-xl md:text-3xl lg:text-4xl font-medium text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              >
                |
              </span>
            </motion.div>

            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Priyanshu
              </span>
            </motion.h1>

            
            <motion.p
              className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              Designer and developer blending code and creativity to build beautiful digital products.
            </motion.p>

            
            <div className="mt-10 flex gap-6 text-3xl">
              {socials.map(({ Icon, label, link }) => (
                <motion.a
                  href={link.startsWith("http") ? link : `https://${link}`}
                  target="_blank"
                  key={label}
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">

        <motion.img src={Avatar} alt="Priyanshu Mondal"
        
        />
        </div>
      </div>
    </section>
  );
}


