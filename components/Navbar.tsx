"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((item) =>
        item.href.replace("#", "")
      );

      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (!el) return;

        const top = el.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-[#D4AF37]/20 bg-black/75 shadow-2xl backdrop-blur-2xl"
          : "border-transparent bg-black/30 backdrop-blur-md"
      }`}
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="font-cabinet text-3xl font-black text-[#D4AF37] transition-all duration-300 hover:text-yellow-300 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
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
                className={`group relative font-medium transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
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
          className="hidden rounded-full bg-[#D4AF37] px-7 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] md:block"
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
                    className={`text-xl font-medium transition-all duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-[#D4AF37]"
                        : "text-white hover:text-[#D4AF37]"
                    }`}
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
                className="rounded-full bg-[#D4AF37] px-8 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
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