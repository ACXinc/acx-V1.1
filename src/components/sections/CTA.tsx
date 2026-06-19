"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let's Build Something Great
        </motion.h2>



        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12"
        >
          Have a project idea? Tell ACX about it and let's create a powerful
          digital solution together.
        </motion.p>



        <form className="grid gap-6 text-left">


          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"
          />



          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"
          />



          <select
            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          >

            <option>
              Select Service
            </option>

            <option>
              Website Development
            </option>

            <option>
              Web Application
            </option>

            <option>
              Software Solution
            </option>

          </select>




          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"
          />



          <div className="flex justify-center">

            <Button>
              Send Message
            </Button>

          </div>


        </form>


      </div>

    </section>
  );
}