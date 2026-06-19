"use client"

import { motion } from "framer-motion"


export default function Services() {


  const services = [

    {
      title: "Web Development",
      description:
      "Modern, responsive websites built with powerful technologies and premium design."
    },


    {
      title: "Full-Stack Applications",
      description:
      "Complete digital platforms with frontend, backend, databases and scalable systems."
    },


    {
      title: "UI/UX Experiences",
      description:
      "Clean interfaces designed to create smooth and memorable user experiences."
    },


    {
      title: "Custom Software",
      description:
      "Technology solutions created specifically for business needs and innovation."
    }

  ];


  return (

    <section
      id="services"
      className="bg-black text-white px-6 py-24"
    >


      <div
        className="max-w-6xl mx-auto"
      >


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

          className="text-center"

        >


          <h2
            className="text-4xl md:text-5xl font-bold"
          >

            ACX

            <span className="text-yellow-500">
              Services
            </span>


          </h2>


          <p
            className="mt-6 text-gray-400 text-lg"
          >

            Building digital solutions that transform ideas into reality.

          </p>


        </motion.div>



        <div
          className="mt-14 grid md:grid-cols-2 gap-8"
        >



          {services.map((service,index)=>(


            <motion.div

              key={index}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              transition={{
                duration:0.5,
                delay:index * 0.15
              }}


              viewport={{
                once:true
              }}


              whileHover={{
                y:-10
              }}


              className="border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition"

            >


              <h3
                className="text-2xl font-semibold"
              >

                {service.title}

              </h3>



              <p
                className="mt-4 text-gray-400 leading-relaxed"
              >

                {service.description}

              </p>



              <div
                className="mt-6 text-yellow-500"
              >

                Learn More →

              </div>



            </motion.div>


          ))}



        </div>


      </div>


    </section>

  )

}