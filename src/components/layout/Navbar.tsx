"use client";

import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">


        {/* Logo */}

        <motion.a
          href="#home"
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="text-3xl font-bold text-yellow-500"
        >
          ACX
        </motion.a>



        {/* Links */}

        <div className="hidden md:flex gap-8">

          {links.map((link)=>(
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{scale:1.05}}
              className="text-white hover:text-yellow-500 transition"
            >
              {link.name}
            </motion.a>
          ))}


        </div>


      </div>

    </nav>
  );
}