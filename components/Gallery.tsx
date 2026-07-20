import { prisma } from "@/lib/prisma";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const images = await prisma.galleryImage.findMany({
    take: 6, // Show only 6 images on the homepage
    orderBy: {
      createdAt: "desc",
    },
  });

  return <GalleryClient images={images} />;
}