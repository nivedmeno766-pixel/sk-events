import Link from "next/link";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/admin/StatusBadge";
import {
  Images,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";

export default async function AdminDashboard() {
  const [enquiries, services, gallery] = await Promise.all([
    prisma.enquiry.count(),
    prisma.service.count(),
    prisma.galleryImage.count(),
  ]);

  const recentEnquiries = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return (
    <main className="space-y-10 text-white">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-[#D4AF37]">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Welcome back! Manage your SK Events website from here.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/admin/enquiries"
          className="rounded-2xl border border-[#D4AF37]/20 bg-[#111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]"
        >
          <Mail className="mb-4 text-[#D4AF37]" size={32} />

          <h2 className="text-4xl font-bold">{enquiries}</h2>

          <p className="mt-2 text-gray-400">
            Total Enquiries
          </p>
        </Link>

        <Link
          href="/admin/services"
          className="rounded-2xl border border-[#D4AF37]/20 bg-[#111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]"
        >
          <Briefcase
            className="mb-4 text-[#D4AF37]"
            size={32}
          />

          <h2 className="text-4xl font-bold">{services}</h2>

          <p className="mt-2 text-gray-400">
            Services
          </p>
        </Link>

        <Link
          href="/admin/gallery"
          className="rounded-2xl border border-[#D4AF37]/20 bg-[#111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]"
        >
          <Images className="mb-4 text-[#D4AF37]" size={32} />

          <h2 className="text-4xl font-bold">{gallery}</h2>

          <p className="mt-2 text-gray-400">
            Gallery Images
          </p>
        </Link>
      </div>

      {/* Quick Actions */}

      <div className="flex flex-wrap gap-4">
        <Link
          href="/admin/enquiries"
          className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          View Enquiries
        </Link>

        <Link
          href="/admin/services"
          className="rounded-xl border border-[#D4AF37] px-6 py-3 transition hover:bg-[#D4AF37] hover:text-black"
        >
          Manage Services
        </Link>

        <Link
          href="/admin/gallery"
          className="rounded-xl border border-[#D4AF37] px-6 py-3 transition hover:bg-[#D4AF37] hover:text-black"
        >
          Manage Gallery
        </Link>
      </div>

      {/* Recent Enquiries */}

      <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#111] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Recent Enquiries
            </h2>

            <p className="text-sm text-gray-400">
              Latest customer enquiries
            </p>
          </div>

          <Link
            href="/admin/enquiries"
            className="flex items-center gap-2 text-[#D4AF37] transition hover:gap-3"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-700 py-12 text-center">
            <p className="text-lg text-gray-400">
              No enquiries yet.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Customer enquiries from your website will appear
              here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentEnquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="flex items-center justify-between rounded-xl border border-gray-800 p-4 transition hover:border-[#D4AF37]/40"
              >
                <div>
                  <p className="font-semibold">
                    {enquiry.name}
                  </p>

                  <p className="text-sm text-gray-400">
                    {enquiry.eventType}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {new Date(
                      enquiry.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <StatusBadge status={enquiry.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}