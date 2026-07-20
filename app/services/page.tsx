import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | SK Events",
  description:
    "Explore the premium event management services offered by SK Events, including weddings, birthdays, corporate events, stage decorations, engagements, baby showers, anniversaries, and more.",
};

export default async function Page() {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return <ServicesPage services={services} />;
}