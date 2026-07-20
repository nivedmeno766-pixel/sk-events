import { prisma } from "@/lib/prisma";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const services = await prisma.service.findMany({
    take: 4, // Show only the latest 4 services on the homepage
    orderBy: {
      createdAt: "desc",
    },
  });

  return <ServicesClient services={services} />;
}