"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeRight({
  children,
  delay = 0,
}: FadeRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}