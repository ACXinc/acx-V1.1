"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bechir Touil",
    role: "Z CREA DECO Directeur",
    quote:
      "Thanks to ACX Services, My problemes got fixed and I got my website made and Powered by them.",
  },
  {
    name: "Sousan",
    role: "Tassou Juice Owner",
    quote:
      "Always refused the whole idea of Marketing Servises with ACX SEO Services Im visible now in the Internet.",
  },
  {
    name: "Secret Client",
    role: "Employee in the Goverment.",
    quote:
      "For a long time I had a probleme in my PC, no one can fixed it but with ACX everything have a solution.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Client Feedback
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="text-gray-300 mb-4">
                "{item.quote}"
              </p>

              <h3 className="font-semibold text-yellow-500">
                {item.name}
              </h3>

              <p className="text-sm text-gray-400">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}