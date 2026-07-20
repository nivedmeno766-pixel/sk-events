"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

type GalleryImage = {
  id: string;
  title: string;
  imageUrl: string;
};

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({
  images,
}: GalleryGridProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
              }}
              whileHover={{ y: -8 }}
              onClick={() => setIndex(i)}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] text-left transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-cabinet text-2xl font-bold text-white">
                    {image.title}
                  </p>

                  <p className="mt-2 uppercase tracking-[4px] text-[#D4AF37]">
                    Click to View
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        plugins={[
          Zoom,
          Fullscreen,
          Captions,
          Thumbnails,
        ]}
        animation={{
          fade: 300,
          swipe: 300,
        }}
        carousel={{
          finite: false,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        slides={images.map((img) => ({
          src: img.imageUrl,
          title: img.title,
          description: "SK Events",
        }))}
      />
    </>
  );
}