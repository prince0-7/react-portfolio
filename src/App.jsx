import Navbar from "./components/Navbar";
import Home from "./assets/sections/Home";
import About from "./assets/sections/About";
import Skills from "./assets/sections/Skills";
import Contact from "./assets/sections/Contact";
import Footer from "./assets/sections/Footer";
//import Particlesbackground from "./components/Particlesbackground";
import CustomCursor from "./components/CustomCursor";


export default function App() {
  return (
    <div className="min-h-screen gradient text-white font-poppins overflow-x-hidden">
      {/* <Particlesbackground /> */}
      <Navbar />
      <CustomCursor />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

