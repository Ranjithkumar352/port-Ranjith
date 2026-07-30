import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040714] border-t border-white/10 mt-10">

      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-[2px] bg-cyan-400 blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RK
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Passionate Full Stack Developer specializing in building
              scalable web applications with React, Node.js,
              MongoDB, and AI technologies.
            </p>
          </div>

          {/* Center */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              {[
                { name: "Home", to: "home" },
                { name: "About", to: "about" },
                { name: "Experience", to: "experience" },
                { name: "Projects", to: "projects" },
                { name: "Contact", to: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Right */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Ranjithkumar352"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ranjithkumarkare/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:kareranjith458@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-gray-400 mt-6">
              Hyderabad, India
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center">
            © {year} Ranjith Kumar. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Built with ❤️ using React, Vite & Tailwind CSS
          </p>

        </div>

      </div>

      {/* Scroll To Top */}

      <Link
        to="home"
        smooth={true}
        duration={600}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center cursor-pointer shadow-lg shadow-cyan-500/40 transition hover:scale-110"
      >
        <FaArrowUp />
      </Link>

    </footer>
  );
}

export default Footer;