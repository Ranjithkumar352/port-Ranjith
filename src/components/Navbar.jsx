import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
          RK
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Desktop Resume Button */}

        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
        >
          <FaDownload />
          Resume
        </a>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-20 right-0 w-full h-[calc(100vh-80px)] bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >

            <div className="flex flex-col items-center justify-center h-full gap-8">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-2xl font-medium text-gray-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>

              ))}

              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}

export default Navbar;