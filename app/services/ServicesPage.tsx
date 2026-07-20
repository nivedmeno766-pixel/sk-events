"use client";

import ServicesHero from "./ServicesHero";
import ServiceSection from "./ServiceSection";
import ServicesCTA from "./ServicesCTA";

type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
};

interface ServicesPageProps {
  services: Service[];
}

export default function ServicesPage({
  services,
}: ServicesPageProps) {
  return (
    <main className="bg-[#090909] text-white">
      <ServicesHero />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      <ServicesCTA />
    </main>
  );
}