"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <Image
        src="/images/photoshoot/reading-book-in-library.JPG"
        alt="Background library scene"
        fill
        className="object-cover brightness-[25%]"
        priority
      />

      <div className="absolute inset-0 from-black/80 via-black/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto p-6"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-14">
          <div className="space-y-4 text-center sm:text-left">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              Hold your seat belt tight!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300"
            >
              We are redesigning our website 🚀
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 gap-4 flex justify-center sm:justify-start"
            >
              <Link
                href="mailto:csag2018@gmail.com"
                target="_blank"
                className="px-6 py-3 bg-[#0394af] hover:bg-[#038ea8] transition rounded-sm text-gray-100 font-medium inline-block"
              >
                Contact Us
              </Link>
              <Link
                target="_blank"
                href="https://www.globalgiving.org/projects/empower-a-child-through-education-in-rural-ghana/"
                className="px-6 py-3 bg-[#f2d229] hover:bg-yellow-400 transition rounded-sm text-black font-medium inline-block"
              >
                Donate
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <Image
              src="/images/csag-logo-no-bg.png"
              alt="Child Survival Aid Ghana Logo"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
