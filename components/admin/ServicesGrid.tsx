"use client";

import ServiceCard from "./ServiceCard";

type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
};

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({
  services,
}: ServicesGridProps) {
  if (services.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-700 p-12 text-center text-zinc-400">
        No services added yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}