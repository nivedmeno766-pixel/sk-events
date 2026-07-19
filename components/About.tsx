"use client";

import Image from "next/image";
import FadeLeft from "./animations/FadeLeft";
import FadeRight from "./animations/FadeRight";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-[#090909] py-24 px-6 text-white md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <FadeRight delay={0.2}>
          <div className="group relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-[#D4AF37]/20 blur-3xl opacity-40 transition duration-500 group-hover:opacity-70"></div>

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-[#D4AF37]/20 shadow-2xl sm:h-[520px] lg:h-[650px]">

              <Image
                src="/images/about.webp"
                alt="SK Events team planning a luxury event"
                fill
                quality={80}
                sizes="(max-width:768px) 100vw, (max-width:1024px) 80vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />

            </div>

          </div>
        </FadeRight>

        {/* Content */}
        <FadeLeft>
          <div>

            <p className="mb-5 text-sm uppercase tracking-[6px] text-[#D4AF37]">
              About Us
            </p>

            <h2 className="font-cabinet text-4xl font-black leading-tight md:text-6xl">
              Where Every
              <span className="text-[#D4AF37]"> Celebration </span>
              Becomes a Memory.
            </h2>

            <div className="mt-8 mb-10 h-1 w-24 rounded-full bg-[#D4AF37]"></div>

            <p className="text-lg leading-9 text-gray-300">
              At{" "}
              <span className="font-semibold text-white">
                SK Events
              </span>
              , we believe every celebration deserves elegance,
              creativity, and flawless execution. From intimate
              birthday parties to luxurious weddings and corporate
              gatherings, we transform ideas into unforgettable
              experiences.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              Our passionate team combines modern design, premium
              decorations, and meticulous planning to ensure every
              event is unique. We don't just organize events—we
              create moments that families, friends, and businesses
              will cherish forever.
            </p>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6">

              <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#121212] p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] sm:p-6">

                <h3 className="text-3xl font-black text-[#D4AF37] sm:text-4xl">
                  100+
                </h3>

                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                  Events Completed
                </p>

              </div>

              <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#121212] p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] sm:p-6">

                <h3 className="text-3xl font-black text-[#D4AF37] sm:text-4xl">
                  50+
                </h3>

                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                  Happy Clients
                </p>

              </div>

              <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#121212] p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] sm:p-6">

                <h3 className="text-3xl font-black text-[#D4AF37] sm:text-4xl">
                  24/7
                </h3>

                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                  Customer Support
                </p>

              </div>

            </div>

            {/* Button */}
            <a
              href="#services"
              className="mt-14 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            >
              Explore Our Services
              <span>→</span>
            </a>

          </div>
        </FadeLeft>

      </div>
    </section>
  );
}