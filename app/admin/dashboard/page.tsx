import { prisma } from "@/lib/prisma";
import Dashboard from "@/components/admin/Dashboard";

export default async function DashboardPage() {
  const enquiries = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-7xl">
        <Dashboard enquiries={enquiries} />
      </div>
    </main>
  );
}