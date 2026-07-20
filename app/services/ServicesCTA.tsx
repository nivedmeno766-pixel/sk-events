"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-24 max-w-7xl px-6 pb-24"
    >
      <div className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] via-[#171717] to-[#0d0d0d] p-10 md:p-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
            Let's Create Something Extraordinary
          </p>

          <h2 className="font-cabinet text-4xl font-black leading-tight md:text-6xl">
            Your Dream Event
            <br />
            Starts Here
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
            From intimate celebrations to grand luxury events,
            SK Events delivers memorable experiences with
            creativity, elegance, and flawless execution.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/#contact"
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
            >
              Book Your Event
            </Link>

            <Link
              href="/gallery"
              className="rounded-full border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}