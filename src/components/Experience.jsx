import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#050816] relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-32 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Professional Journey
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-6 top-0 h-full w-[2px] bg-cyan-500/30"></div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative pl-20"
          >
            {/* Circle */}

            <div className="absolute left-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">

              <FaBriefcase size={20} />

            </div>

            {/* Card */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400 transition duration-300">

              <div className="flex flex-wrap justify-between gap-4">

                <div>

                  <h3 className="text-3xl font-bold">
                    Full Stack Developer Intern
                  </h3>

                  <p className="text-cyan-400 mt-2 font-medium">
                    CollabifySpace
                  </p>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full text-cyan-400 h-fit">
                  Oct 2025 - Mar 2026
                </div>

              </div>

              <p className="text-gray-400 leading-8 mt-8">
                Worked on production SaaS applications by developing
                scalable frontend and backend features, collaborating
                with developers, and building responsive user
                experiences using modern web technologies.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8 text-gray-300">

                <div>✅ Built CRM Modules</div>

                <div>✅ Authentication System</div>

                <div>✅ Dashboard Development</div>

                <div>✅ Freelancer Workflow</div>

                <div>✅ REST API Integration</div>

                <div>✅ Team Collaboration</div>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-10">

                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <FaReact className="text-cyan-400" />
                  React
                </span>

                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <FaNodeJs className="text-green-400" />
                  Node.js
                </span>

                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <SiExpress />
                  Express
                </span>

                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <SiMongodb className="text-green-500" />
                  MongoDB
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;