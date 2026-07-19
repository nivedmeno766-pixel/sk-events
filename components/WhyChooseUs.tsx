"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Luxury Designs",
    desc: "Elegant themes and premium decorations crafted for unforgettable celebrations.",
    icon: "✨",
  },
  {
    title: "Professional Team",
    desc: "Experienced planners ensuring every detail is perfectly executed.",
    icon: "👑",
  },
  {
    title: "Affordable Packages",
    desc: "Premium-quality services designed to fit every budget.",
    icon: "💎",
  },
  {
    title: "On-Time Delivery",
    desc: "Every event is completed with precision and without delays.",
    icon: "⏰",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-28 bg-gradient-to-b from-[#090909] to-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Why Choose Us
          </p>

          <h2 className="font-cabinet text-5xl md:text-6xl font-black mt-5">
            Excellence In
            <span className="text-[#D4AF37]"> Every Detail</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We don't simply organize events.
            We create experiences that leave lasting memories.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-[28px] border border-white/10 bg-[#121212] p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
            >

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="mb-8 text-5xl"
              >
                {item.icon}
              </motion.div>

              <h3 className="font-cabinet text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}