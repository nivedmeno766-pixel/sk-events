"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

interface FooterProps {
  settings: {
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    facebook: string;
    address: string;
  } | null;
}

export default function Footer({ settings }: FooterProps) {
  const phone = settings?.phone ?? "+91 75105 70807";
  const whatsapp = settings?.whatsapp ?? "+917510570807";
  const email = settings?.email ?? "skeventmanagements2026@gmail.com";
  const instagram =
    settings?.instagram ??
    "https://instagram.com/sk.events.official_";
  const facebook =
    settings?.facebook ??
    "https://www.facebook.com/share/18qEV6GDXX/";
  const address = settings?.address ?? "Karippooru, Nedumangad, Kerala";

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      link: instagram,
      label: "Visit our Instagram page",
    },
    {
      icon: <MessageCircle size={20} />,
      link: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
      label: "Chat with us on WhatsApp",
    },
    {
      icon: <Mail size={20} />,
      link: `mailto:${email}`,
      label: "Send us an email",
    },
    {
      icon: <FaFacebook size={20} />,
      link: facebook,
      label: "Visit our Facebook page",
    },
  ];

  return (
    <footer
      className="border-t border-[#D4AF37]/10 bg-black text-white"
      aria-label="Website Footer"
    >
      <motion.div
        className="mx-auto max-w-7xl px-6 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="SK Events Logo"
              width={180}
              height={120}
              className="mb-6 h-auto w-28"
            />

            <h2 className="font-cabinet text-3xl font-bold">
              SK Events
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Creating unforgettable weddings, birthdays,
              corporate events, and premium celebrations
              with elegance, creativity, and perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cabinet mb-6 text-2xl">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Portfolio", "#gallery"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cabinet mb-6 text-2xl">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="text-[#D4AF37]"
                />
                <span>{phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 break-all transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="text-[#D4AF37]"
                />
                <span>{email}</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-[#D4AF37]"
                />

                <span>{address}</span>
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 SK Events. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed with ❤️ by NIVED S S
          </p>
        </div>
      </motion.div>
    </footer>
  );
}