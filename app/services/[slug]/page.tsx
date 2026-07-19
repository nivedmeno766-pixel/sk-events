import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = await prisma.service.findUnique({
    where: {
      slug,
    },
  });

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              SK Events
            </p>

            <h1 className="font-cabinet text-5xl font-black md:text-7xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Link
          href="/#services"
          className="text-[#D4AF37] hover:underline"
        >
          ← Back to Services
        </Link>

        <h2 className="mt-10 mb-6 text-3xl font-bold text-[#D4AF37]">
          About this Service
        </h2>

        <p className="whitespace-pre-line text-lg leading-9 text-zinc-300">
          {service.content}
        </p>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button className="bg-[#D4AF37] text-black hover:bg-[#c69c2d]">
            Book Now
          </Button>

          <Link href="/#contact">
            <Button variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}