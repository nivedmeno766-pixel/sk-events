"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  settings: {
    heroTitle: string;
    heroSubtitle: string;
    whatsapp: string;
  } | null;
}

export default function Hero({ settings }: HeroProps) {
  const whatsappNumber =
    settings?.whatsapp.replace(/\D/g, "") ?? "919876543210";

  return (
    <section
      id="home"
      className="scroll-mt-28 relative flex min-h-screen items-center justify-center overflow-hidden px-5 sm:px-6"
    >
      {/* Background Image */}
      <Image
        src="/images/hero2.jpg"
        alt="Luxury event decoration by SK Events"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 -z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60 -z-10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl pt-20 text-center sm:pt-24 md:pt-10">
        {/* Logo */}
        <motion.img
          src="/images/logo.png"
          alt="SK Events Logo"
          className="mx-auto mt-12 mb-8 w-32 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)] sm:w-36 md:w-44 lg:w-52"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Premium Label */}
        <motion.p
          className="mb-5 text-xs uppercase tracking-[5px] text-[#D4AF37] sm:text-sm sm:tracking-[6px] md:text-base md:tracking-[8px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
        >
          Luxury Event Management
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="font-cabinet font-black leading-none text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            {settings?.heroTitle ?? "SK EVENT MANAGEMENT"}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-base font-medium leading-relaxed text-white sm:text-xl md:mt-8 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          {settings?.heroSubtitle ?? "Creating Unforgettable Moments"}
        </motion.p>

        <motion.p
          className="mt-4 text-sm leading-7 text-gray-300 sm:text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          Weddings • Birthdays • Corporate Events
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20SK%20Events,%20I'd%20like%20to%20book%20an%20event.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-[#D4AF37] px-10 py-4 text-center font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] sm:w-auto"
          >
            Book Now
          </a>

          <a
            href="#gallery"
            className="w-full rounded-full border-2 border-[#D4AF37] px-10 py-4 text-center font-bold text-[#D4AF37] transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-black sm:w-auto"
          >
            View Gallery
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
        >
          <p className="text-xs uppercase tracking-[4px] text-gray-400">
            Scroll Down
          </p>

          <div className="mt-2 text-3xl text-[#D4AF37]">↓</div>
        </motion.div>
      </div>
    </section>
  );
}