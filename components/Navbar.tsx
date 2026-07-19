"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full border-b border-[#D4AF37]/20 bg-black/70 backdrop-blur-xl"
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="font-cabinet text-3xl font-black text-[#D4AF37]"
          aria-label="Go to Home"
        >
          SK Events
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className="group relative font-medium text-white transition-colors duration-300 hover:text-[#D4AF37] focus:outline-none focus:text-[#D4AF37]"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

              </a>

            </li>

          ))}

        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="https://wa.me/919745609871?text=Hi%20SK%20Events,%20I'd%20like%20to%20book%20an%20event."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden rounded-full bg-[#D4AF37] px-7 py-3 font-bold text-black shadow-lg transition md:block"
          aria-label="Book an event on WhatsApp"
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="text-[#D4AF37] transition hover:scale-110 md:hidden"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#D4AF37]/20 bg-black/95 backdrop-blur-xl md:hidden"
          >

            <ul className="flex flex-col items-center gap-8 py-10">

              {navLinks.map((item) => (

                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.08 }}
                >

                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-white transition hover:text-[#D4AF37] focus:text-[#D4AF37] focus:outline-none"
                  >
                    {item.name}
                  </a>

                </motion.li>

              ))}

              <motion.a
                href="https://wa.me/919745609871?text=Hi%20SK%20Events,%20I'd%20like%20to%20book%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-[#D4AF37] px-8 py-3 font-bold text-black shadow-lg"
                aria-label="Book an event on WhatsApp"
              >
                Book Now
              </motion.a>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}