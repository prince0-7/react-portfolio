import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/priyanshu-mondal-8a4517375" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/prince0-7" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-6 relative overflow-hidden">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-r from-purple-700/20 via-pink-500/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-r from-cyan-500/20 via-teal-400/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base">
          &copy; {year} Priyanshu Mondal. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-xl md:text-2xl">
          {socials.map(({ Icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
