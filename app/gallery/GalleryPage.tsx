"use client";

import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import GalleryCTA from "./GalleryCTA";

type GalleryImage = {
  id: string;
  title: string;
  imageUrl: string;
};

interface GalleryPageProps {
  images: GalleryImage[];
}

export default function GalleryPage({
  images,
}: GalleryPageProps) {
  return (
    <main className="bg-[#090909] text-white">
      <GalleryHero />
      <GalleryGrid images={images} />
      <GalleryCTA />
    </main>
  );
}