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

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export default function ServiceSection({
  service,
  index,
}: ServiceSectionProps) {
  const reverse = index % 2 === 1;

  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="grid items-center gap-14 py-16 lg:grid-cols-2"
    >
      {/* Image */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
          <Image
            src={service.imageUrl}
            alt={service.title}
            width={900}
            height={700}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-[#D4AF37]/40 bg-black/70 px-4 py-2 text-xs uppercase tracking-[3px] text-[#D4AF37] backdrop-blur-md">
            Premium Service
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="mb-3 uppercase tracking-[5px] text-[#D4AF37]">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="font-cabinet text-4xl font-black md:text-5xl">
          {service.title}
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-[#D4AF37]" />

        <p className="mt-8 text-lg leading-8 text-gray-300">
          {service.description}
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#121212] p-6">
          <p className="whitespace-pre-line leading-8 text-gray-400">
            {service.content}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
            <h4 className="font-semibold text-[#D4AF37]">
              Premium Decoration
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Elegant styling tailored to your event theme.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
            <h4 className="font-semibold text-[#D4AF37]">
              Professional Planning
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Every detail is carefully managed from start to finish.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
            <h4 className="font-semibold text-[#D4AF37]">
              Luxury Experience
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Premium décor, creative concepts, and flawless execution.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
            <h4 className="font-semibold text-[#D4AF37]">
              Complete Support
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Dedicated assistance before, during, and after your event.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            Book Your Event
          </Link>

          <Link
            href={`/services/${service.slug}`}
            className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.section>
  );
}