"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeLeft({
  children,
  delay = 0,
}: FadeLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}