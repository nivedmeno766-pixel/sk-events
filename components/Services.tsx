import { prisma } from "@/lib/prisma";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <ServicesClient services={services} />;
}