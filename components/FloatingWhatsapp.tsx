"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingWhatsappProps {
  settings: {
    whatsapp: string;
  } | null;
}

export default function FloatingWhatsapp({
  settings,
}: FloatingWhatsappProps) {
  const whatsapp =
    settings?.whatsapp.replace(/\D/g, "") ?? "917510570807";

  return (
    <motion.a
      href={`https://wa.me/${whatsapp}?text=Hi%20SK%20Events,%20I'd%20like%20to%20book%20an%20event.`}
      aria-label="Chat with SK Events on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1.5,
        type: "spring",
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
    >
      <MessageCircle size={30} />
    </motion.a>
  );
}