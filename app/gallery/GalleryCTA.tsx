"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-7xl px-6 pb-24"
    >
      <div className="rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] via-[#171717] to-[#0d0d0d] p-10 text-center md:p-16">
        <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
          Ready To Create Memories?
        </p>

        <h2 className="font-cabinet text-4xl font-black md:text-6xl">
          Let's Make Your
          <br />
          Event Extraordinary
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
          From weddings to corporate events, our team creates memorable
          experiences with elegance, creativity, and precision.
        </p>

        <div className="mt-10">
          <Link
            href="/#contact"
            className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </motion.section>
  );
}