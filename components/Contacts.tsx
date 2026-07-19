"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormData } from "@/lib/validations";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  settings: {
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
  } | null;
}

export default function Contact({
  settings,
}: ContactProps) {
  const [loading, setLoading] = useState(false);

  const phone = settings?.phone ?? "+91 75105 70807";

const email =
  settings?.email ??
  "skeventmanagements2026@gmail.com";

const address =
  settings?.address ??
  "Karippooru, Nedumangad, Kerala";

const whatsapp =
  settings?.whatsapp ?? "+917510570807";

const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<EnquiryFormData>({
  resolver: zodResolver(enquirySchema),
});

const onSubmit = async (data: EnquiryFormData) => {
  try {
    setLoading(true);

    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Enquiry sent successfully!");
      reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Server error.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-black py-24 px-6 text-white"
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
          <p className="uppercase tracking-[6px] text-[#D4AF37] mb-4">
            Get In Touch
          </p>

          <h2 className="font-cabinet text-5xl md:text-6xl font-black">
            Let's Plan Your
            <span className="text-[#D4AF37]"> Next Event</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            We'd love to hear about your event. Contact us today and let's
            create unforgettable memories together.
          </p>
        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-[#D4AF37]/20 bg-[#111111] p-10 md:p-14 shadow-[0_0_40px_rgba(212,175,55,0.08)]"
        >

          <div className="grid md:grid-cols-2 gap-14">

            {/* Left */}

            <div>

              <h3 className="font-cabinet text-3xl font-bold mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">

                          <div className="flex items-center gap-5">
            <Phone className="text-[#D4AF37]" size={24} />

            <a
              href={`tel:${phone}`}
              className="text-gray-300 transition hover:text-white"
            >
              {phone}
            </a>
          </div>

            <div className="flex items-center gap-5">
            <Mail className="text-[#D4AF37]" size={24} />
            <span className="text-gray-300 break-all">
            skeventmanagements2026@gmail.com
            </span>
            </div>

                        <div className="flex items-start gap-5">
          <MapPin
            className="mt-1 text-[#D4AF37]"
            size={24}
          />

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-pre-line text-gray-300 transition hover:text-white"
          >
            {address}
          </a>
        </div>
              </div>

            </div>

            {/* Right */}

            <div>
  <h3 className="font-cabinet text-3xl font-bold mb-8">
    Send an Enquiry
  </h3>

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-5"
  >
    <input
      {...register("name")}
      placeholder="Full Name"
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />
    {errors.name && (
      <p className="text-red-400 text-sm">{errors.name.message}</p>
    )}

    <input
      {...register("email")}
      placeholder="Email"
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />
    {errors.email && (
      <p className="text-red-400 text-sm">{errors.email.message}</p>
    )}

    <input
      {...register("phone")}
      placeholder="Phone Number"
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />

    <select
      {...register("eventType")}
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
      defaultValue=""
    >
      <option value="" disabled>
        Select Event Type
      </option>
      <option value="WEDDING">Wedding</option>
      <option value="BIRTHDAY">Birthday</option>
      <option value="CORPORATE">Corporate</option>
      <option value="STAGE">Stage Decoration</option>
      <option value="OTHER">Other</option>
    </select>

    <input
      type="date"
      {...register("eventDate")}
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />

    <input
      {...register("location")}
      placeholder="Event Location"
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />

    <input
      {...register("budget")}
      placeholder="Budget (Optional)"
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />

    <textarea
      rows={4}
      {...register("message")}
      placeholder="Tell us about your event..."
      className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3"
    />

    {errors.message && (
      <p className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition-all focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20">
        {errors.message.message}
      </p>
    )}

    <button
      disabled={loading}
      className="w-full rounded-full bg-[#D4AF37] py-4 font-bold text-black hover:scale-105 transition"
    >
      {loading ? "Sending..." : "Send Enquiry"}
       </button>
        </form>
      </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}