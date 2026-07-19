"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StageDecorationsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/stage.webp"
          alt="Stage Decorations"
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
              Elegant Stage Designs
            </p>

            <h1 className="font-cabinet text-5xl font-black md:text-7xl">
              Stage Decorations
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              Beautiful stage decorations designed to create unforgettable
              experiences for weddings, corporate events, birthdays, and special
              occasions.
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
            Stunning <span className="text-[#D4AF37]">Stage Decorations</span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            At SK Events, we create premium stage decorations that perfectly
            match your event's style and atmosphere. From elegant floral designs
            to modern lighting concepts, every stage is crafted to leave a lasting
            impression.
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
              "Luxury Floral Decoration",
              "Custom Stage Design",
              "Premium Lighting",
              "Backdrop Decoration",
              "Entrance Decoration",
              "Complete Event Styling",
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
                  Designed with creativity, elegance, and attention to every
                  detail.
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
          Stage Decoration Gallery
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            "/images/stage.webp",
           
          ].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative h-72 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Stage Decoration ${index + 1}`}
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
            Let's Design a Stunning Stage
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Let SK Events create a beautiful stage that becomes the centerpiece
            of your celebration and leaves a lasting impression on every guest.
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