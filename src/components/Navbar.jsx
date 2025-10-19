import { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 2000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition duration-300 ${
          visible ? "-translate-y-0" : "translate-y-full"
        }`}
      >
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 object-contain"
            style={{ width: "2rem", height: "2rem" }}
          />

          <div className="text-2xl font-bold text-white hidden sm:block">
            Priyanshu
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-white focus:outline-none"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:flex space-x-8">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Reach Out
          </a>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
