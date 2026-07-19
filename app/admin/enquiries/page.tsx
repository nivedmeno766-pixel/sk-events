import { prisma } from "@/lib/prisma";
import EnquiriesClient from "@/components/admin/EnquiriesClient";

export default async function EnquiriesPage() {
  const enquiries = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <EnquiriesClient enquiries={enquiries} />;
}