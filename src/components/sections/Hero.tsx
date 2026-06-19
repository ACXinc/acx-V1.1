"use client"
import Button from "@/components/ui/Button";
import { motion } from "framer-motion"


export default function Hero() {

  return (

    <section
      id="home"  
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >

      <motion.div

        initial={{
          opacity:0,
          y:50
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

        className="text-center max-w-4xl"

      >

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >

          Think.

          <span className="text-yellow-500">
            Believe.
          </span>

          Make it Happen.

        </h1>



        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.4
          }}

          className="mt-6 text-gray-400 text-lg md:text-xl"

        >

          ACX creates digital solutions by combining technology, creativity and innovation.

        </motion.p>



        <Button>

          Explore ACX

        </Button>


      </motion.div>


    </section>

  )

}