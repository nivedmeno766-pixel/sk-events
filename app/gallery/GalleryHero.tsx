"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3720,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 uppercase tracking-[8px] text-[#D4AF37]"
        >
          Our Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="font-cabinet text-5xl font-black md:text-7xl"
        >
          Event
          <span className="text-[#D4AF37]"> Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Every image tells a story of celebration, creativity,
          and unforgettable moments crafted by SK Events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/#contact"
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Book Your Event
          </Link>
        </motion.div>
      </div>
    </section>
  );
}