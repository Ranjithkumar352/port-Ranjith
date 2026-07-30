import { motion } from "framer-motion";

function About() {
    const stats = [
        {
            number: "6+",
            title: "Months Internship",
        },
        {
            number: "3+",
            title: "Major Projects",
        },
        {
            number: "500+",
            title: "Users Impacted",
        },
        {
            number: "100%",
            title: "JavaScript Skill Test",
        },
    ];

    const skills = [
        {
            title: "Frontend",
            tech: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "HTML5",
                "CSS3",
            ],
        },
        {
            title: "Backend",
            tech: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT",
                "MongoDB",
                "MySQL",
            ],
        },
        {
            title: "Programming Languages",
            tech: [
                "Python",
                "SQL",
            ],
        },
        {
            title: "AI & Machine Learning",
            tech: [
                "Google Gemini API",
                "OpenCV",
                "MediaPipe",
                "CNN",
                "Prompt Engineering",
                "AI Integration",
            ],
        },
        {
            title: "Tools & Platforms",
            tech: [
                "Git",
                "GitHub",
                "Postman",
                "Vercel",
                "Render",
                "VS Code",
            ],
        },
    ];

    const competencies = [
        "Full Stack Development",
        "REST API Development",
        "Responsive Web Design",
        "AI-Powered Applications",
        "Database Design",
        "Problem Solving",
    ];

    return (
        <section
            id="about"
            className="py-28 bg-[#050816] relative overflow-hidden"
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center"
                >
                    <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
                        About Me
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                        Know More{" "}
                        <span className="text-cyan-400">About Me</span>
                    </h2>

                    <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
                </motion.div>

                {/* Intro */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-md">

                        <p className="text-gray-300 leading-9 text-lg">

                            Hi, I'm{" "}
                            <span className="text-white font-semibold">
                                Ranjith Kumar
                            </span>
                            , a passionate{" "}
                            <span className="text-cyan-400 font-semibold">
                                Full Stack Developer
                            </span>{" "}
                            with internship experience building scalable SaaS
                            applications using React, Node.js, Express.js,
                            MongoDB and AI technologies.

                        </p>

                        <p className="text-gray-300 leading-9 text-lg mt-6">

                            During my internship at <span className="text-white font-medium">CollabifySpace</span>,
                            I contributed to production-ready SaaS applications by developing
                            dashboards, authentication systems, CRM modules,
                            freelancer workflows and REST APIs while collaborating
                            with an engineering team.

                        </p>

                        <p className="text-gray-300 leading-9 text-lg mt-6">

                            I enjoy transforming ideas into fast, scalable and
                            responsive web applications while continuously learning
                            modern technologies and building AI-powered solutions.

                        </p>

                        <p className="text-gray-300 leading-9 text-lg mt-6">

                            Currently, I'm looking for{" "}
                            <span className="text-cyan-400 font-semibold">
                                Full Stack Developer
                            </span>{" "}
                            and{" "}
                            <span className="text-cyan-400 font-semibold">
                                Software Engineer
                            </span>{" "}
                            opportunities where I can contribute, learn and grow
                            while building impactful products.

                        </p>

                    </div>
                </motion.div>

                {/* Core Competencies */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3 }}
                    className="mt-14"
                >

                    <h3 className="text-2xl font-semibold text-white mb-6">
                        Core Competencies
                    </h3>

                    <div className="flex flex-wrap gap-4">

                        {competencies.map((item) => (
                            <div
                                key={item}
                                className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition"
                            >
                                ✓ {item}
                            </div>
                        ))}

                    </div>

                </motion.div>

                {/* Skills */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .4 }}
                    className="mt-16"
                >

                    <h3 className="text-2xl font-semibold text-white mb-8">
                        Technical Skills
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">

                        {skills.map((skill) => (

                            <div
                                key={skill.title}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
                            >

                                <h4 className="text-cyan-400 text-xl font-semibold mb-5">
                                    {skill.title}
                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    {skill.tech.map((tech) => (

                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full bg-[#0b1120] border border-white/10 hover:border-cyan-400 transition"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </motion.div>

                {/* Stats */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
                >

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
                        >

                            <h3 className="text-4xl font-bold text-cyan-400">
                                {item.number}
                            </h3>

                            <p className="text-gray-400 mt-2">
                                {item.title}
                            </p>

                        </div>

                    ))}

                </motion.div>

            </div>
        </section>
    );
}

export default About;