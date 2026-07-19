"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";

type GalleryImage = {
  id: string;
  title: string;
  imageUrl: string;
};

interface GalleryClientProps {
  images: GalleryImage[];
}

export default function GalleryClient({
  images,
}: GalleryClientProps) {
  return (
    <section
      id="gallery"
      className="scroll-mt-28 bg-[#090909] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
            Our Portfolio
          </p>

          <h2 className="font-cabinet text-4xl font-black md:text-6xl">
            Moments We've
            <span className="text-[#D4AF37]"> Created</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Every celebration shown below is a real event completed by
            SK Events with creativity, elegance, and attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-xl transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.title || "SK Events Portfolio"}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="pb-8 text-center">
                    <h3 className="font-cabinet text-2xl font-bold">
                      {image.title || "SK Events"}
                    </h3>

                    <p className="mt-2 uppercase tracking-[4px] text-[#D4AF37]">
                      View Portfolio
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}