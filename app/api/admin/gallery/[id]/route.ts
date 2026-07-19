import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { deleteImage } from "@/lib/deleteImage";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const image = await prisma.galleryImage.findUnique({
      where: {
        id,
      },
    });

    if (!image) {
      return NextResponse.json(
        {
          error: "Gallery image not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (image.publicId) {
      await deleteImage(image.publicId);
    }

    await prisma.galleryImage.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Gallery image deleted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Gallery Delete Error:", error);

    return NextResponse.json(
      {
        error: "Failed to delete gallery image.",
      },
      {
        status: 500,
      }
    );
  }
}