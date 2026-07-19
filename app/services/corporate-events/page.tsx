"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CorporateEventsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/corporate.webp"
          alt="Corporate Events"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Professional Corporate Experiences
            </p>

            <h1 className="font-cabinet text-5xl font-black md:text-7xl">
              Corporate Events
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              We deliver professional corporate events with elegant setups,
              seamless planning, and exceptional attention to every detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-8 text-4xl font-bold">
            Elevate Your <span className="text-[#D4AF37]">Corporate Events</span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Whether it's a product launch, seminar, conference, annual meeting,
            or company celebration, SK Events provides premium event management
            with modern designs, professional coordination, and flawless execution.
          </p>
        </motion.div>
      </section>

      {/* What's Included */}
      <section className="bg-[#121212] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="mb-16 text-center text-4xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What's Included
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Conference Setup",
              "LED Screen & Lighting",
              "Stage Decoration",
              "Product Launch Events",
              "Branding & Backdrops",
              "Professional Event Coordination",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-[#181818] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                  ✓ {item}
                </h3>

                <p className="text-gray-400">
                  Professionally organized to deliver a premium corporate
                  experience.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Corporate Gallery
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/images/corporate.webp",
            
          ].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative h-72 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Corporate Event ${index + 1}`}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212] px-6 py-24">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">
            Let's Make Your Corporate Event Exceptional
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Partner with SK Events for professional corporate event planning,
            elegant setups, and a seamless experience from start to finish.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/919745609871"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Book on WhatsApp
            </a>

            <Link
              href="/"
              className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}