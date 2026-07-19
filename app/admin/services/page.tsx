import { prisma } from "@/lib/prisma";
import ServiceUpload from "@/components/admin/ServiceUpload";
import ServicesGrid from "@/components/admin/ServicesGrid";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-4xl font-bold text-[#D4AF37]">
          Services CMS
        </h1>

        <ServiceUpload />

        <ServicesGrid services={services} />
      </div>
    </main>
  );
}