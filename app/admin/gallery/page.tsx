import { prisma } from "@/lib/prisma";
import GalleryUpload from "@/components/admin/GalleryUpload";
import Image from "next/image";
import DeleteImageDialog from "@/components/admin/DeleteImageDialog";

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-4xl font-bold text-[#D4AF37]">
          Gallery CMS
        </h1>

        <GalleryUpload />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-4">
            <h2 className="font-semibold text-white">
                {image.title}
            </h2>

            <DeleteImageDialog id={image.id} />
            </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-700 p-12 text-center text-zinc-400">
            No images uploaded yet.
          </div>
        )}
      </div>
    </main>
  );
}