"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
            y: 20,
          }}
          whileHover={{
            scale: 1.1,
            y: -4,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#111111]/90 text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ChevronUp size={26} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}