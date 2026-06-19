"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const projects = [

  {
    title: "Business Website",
    category: "Web Development",
    image: "/projects/website.png",
    description:
      "Professional company websites built with modern technologies and responsive design.",
  },


  {
    title: "Custom Dashboard",
    category: "Web Application",
    image: "/projects/dashboard.png",
    description:
      "Powerful dashboards and platforms designed to simplify business operations.",
  },


  {
    title: "AI Assistant",
    category: "Automation",
    image: "/projects/ai.png",
    description:
      "AI-powered solutions that automate tasks and improve productivity.",
  },

];



export default function Portfolio() {


  return (

    <section
      id="portfolio"
      className="py-24 px-6 bg-black text-white"
    >


      <div className="max-w-7xl mx-auto">


        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>


        <p className="text-center text-gray-400 mb-16">
          Digital solutions designed and developed by ACX.
        </p>



        <div className="grid md:grid-cols-3 gap-8">


          {projects.map((project, index) => (


            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                delay: index * 0.15
              }}

              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"

            >



              <div className="relative h-56 overflow-hidden">


                <Image

                  src={project.image}

                  alt={project.title}

                  fill

                  className="object-cover group-hover:scale-110 transition duration-500"

                />


              </div>





              <div className="p-6">


                <p className="text-yellow-500 text-sm mb-2">
                  {project.category}
                </p>



                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>



                <p className="text-gray-400">
                  {project.description}
                </p>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}