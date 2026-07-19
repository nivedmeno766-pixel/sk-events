"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WeddingEventsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/wedding.webp"
          alt="Wedding Events"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[6px] text-[#D4AF37] mb-4">
              Premium Wedding Experiences
            </p>

            <h1 className="font-cabinet text-5xl md:text-7xl font-black">
              Wedding Events
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-8">
              We transform your dream wedding into an unforgettable celebration
              with luxury décor, flawless planning, and exceptional attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Why Choose <span className="text-[#D4AF37]">SK Events?</span>
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Every wedding tells a unique story. At SK Events, we combine
            creativity, elegance, and professional planning to create magical
            moments you'll cherish forever. From intimate ceremonies to grand
            luxury receptions, our experienced team ensures every detail is
            perfectly executed.
          </p>
        </motion.div>
      </section>

      {/* Services Included */}
      <section className="bg-[#121212] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What's Included
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Luxury Stage Decoration",
              "Bridal Entry Setup",
              "Reception Decoration",
              "Floral Arrangements",
              "Lighting & Ambience",
              "Photography Coordination",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-[#181818] p-8"
              >
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">
                  ✓ {item}
                </h3>

                <p className="text-gray-400">
                  Professionally planned with premium quality and attention to every detail.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Gallery */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <motion.h2
    className="mb-16 text-center text-4xl font-bold"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    Wedding Gallery
  </motion.h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      "/images/wedding.webp",
      
    ].map((image, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative h-72 overflow-hidden rounded-3xl"
      >
        <Image
          src={image}
          alt={`Wedding Event ${index + 1}`}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-110"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="bg-[#121212] py-24 px-6">

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
        >
          <h2 className="text-5xl font-bold">
            Let's Create Your Dream Wedding
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Contact SK Events today and let us design an unforgettable wedding
            experience tailored just for you.
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