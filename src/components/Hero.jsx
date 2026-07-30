import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImg from "../assets/images/ranjith.png";
import { Link } from "react-scroll";
function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-24 lg:pt-28 overflow-hidden bg-[#050816]"
        >
            {/* Background Glow */}

            <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700/20 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-8 items-center">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm mb-8">

                        👋 Hello, I'm

                    </span>

                    <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                        Ranjith
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                            Kumar

                        </span>
                    </h1>

                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "React Developer",
                            2000,
                            "Node.js Developer",
                            2000,
                            "AI Application Developer",
                            2000,
                            "Python Developer",
                            2000,
                        ]}
                        speed={40}
                        repeat={Infinity}
                        wrapper="span"
                        className="block text-3xl text-cyan-400 font-bold mt-8"
                    />

                    <p className="mt-8 text-gray-400 text-lg leading-8 max-w-lg">
                        Passionate Full Stack Developer with internship experience
                        building scalable SaaS applications using React, Node.js,
                        MongoDB and AI technologies.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">

                        {[
                            "6+ Months Internship",
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Open to Work",
                        ].map((item) => (
                            <span
                                key={item}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                            >
                                {item}
                            </span>
                        ))}

                    </div>

                    <div className="flex gap-5 mt-6">

                        <Link
                            to="projects"
                            smooth={true}
                            duration={700}
                            offset={-80}
                        >
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition shadow-xl shadow-cyan-500/30">
                                🚀 View Projects
                            </button>
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                        >
                            <button className="px-8 py-4 rounded-full border border-cyan-500 hover:bg-cyan-500/10 transition">
                                📄 Download Resume
                            </button>
                        </a>

                    </div>
                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 1, 0, -1, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="relative"
                    >
                        <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-[120px]"></div>

                        <img
                            src={heroImg}
                            alt="Ranjith Kumar"
                            className="
    relative
    w-[340px]
    md:w-[390px]
    lg:w-[430px]
    xl:w-[470px]
    object-contain
    rounded-[28px]
    border border-cyan-500/20
    shadow-2xl
    drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]
"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;