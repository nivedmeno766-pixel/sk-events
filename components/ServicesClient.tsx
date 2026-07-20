"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
};

interface ServicesClientProps {
  services: Service[];
}

export default function ServicesClient({
  services,
}: ServicesClientProps) {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[#0b0b0b] px-6 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-14 text-center md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
            Our Services
          </p>

          <h2 className="font-cabinet text-4xl font-black md:text-6xl">
            Crafted For Every
            <span className="text-[#D4AF37]"> Occasion</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            From intimate celebrations to grand luxury events, we deliver
            memorable experiences with creativity, elegance, and precision.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[4px] text-[#D4AF37]/70">
            Featured Premium Services
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#121212] transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src={service.imageUrl}
                  alt={`${service.title} by SK Events`}
                  fill
                  quality={90}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full border border-[#D4AF37]/40 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#D4AF37] backdrop-blur-md">
                  Premium Service
                </div>
              </div>

              {/* Content */}
              <div className="flex h-[260px] flex-col p-6 sm:p-8">
                <h3 className="mb-4 font-cabinet text-2xl font-bold sm:text-3xl">
                  {service.title}
                </h3>

                <p className="line-clamp-3 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                  >
                    View Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services */}
        <motion.div
          className="mt-16 text-center md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            View All Services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}