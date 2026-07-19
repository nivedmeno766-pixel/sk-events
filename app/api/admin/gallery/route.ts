import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/uploadImage";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const title =
      (formData.get("title") as string)?.trim() || "";

    if (!file) {
      return NextResponse.json(
        {
          error: "Image is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Only JPG, PNG and WEBP images are allowed.",
        },
        {
          status: 400,
        }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: "Image must be smaller than 5MB.",
        },
        {
          status: 400,
        }
      );
    }

    const upload = await uploadImage(
      file,
      "sk-events/gallery"
    );

    const image = await prisma.galleryImage.create({
      data: {
        title,
        imageUrl: upload.secure_url,
        publicId: upload.public_id,
      },
    });

    return NextResponse.json(
      {
        message: "Image uploaded successfully.",
        image,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Gallery Upload Error:", error);

    return NextResponse.json(
      {
        error: "Failed to upload image.",
      },
      {
        status: 500,
      }
    );
  }
}