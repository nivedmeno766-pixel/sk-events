import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import GalleryPage from "./GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | SK Events",
  description:
    "Browse our portfolio of weddings, birthdays, corporate events and premium decorations created by SK Events.",
};

export default async function Page() {
  const images = await prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <GalleryPage images={images} />;
}