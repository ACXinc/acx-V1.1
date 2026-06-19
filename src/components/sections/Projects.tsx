"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Websites",
    description:
      "Modern, fast and responsive websites designed for companies and brands.",
  },
  {
    title: "Web Applications",
    description:
      "Custom platforms and digital tools built with modern technologies.",
  },
  {
    title: "Software Solutions",
    description:
      "Tailored software systems that solve real business problems.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Projects
        </motion.h2>


        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-500 transition"
            >

              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                {project.title}
              </h3>

              <p className="text-gray-300">
                {project.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}