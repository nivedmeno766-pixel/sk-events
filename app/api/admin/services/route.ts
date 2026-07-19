import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = (formData.get("title") as string)?.trim();
    const slug = (formData.get("slug") as string)?.trim();
    const description = (formData.get("description") as string)?.trim();
    const content = (formData.get("content") as string)?.trim();
    const file = formData.get("file") as File | null;

    // Validate required fields
    if (!title || !slug || !description || !content || !file) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Only JPG, PNG, and WEBP images are allowed.",
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: "Image size must be less than 5MB.",
        },
        { status: 400 }
      );
    }

    // Check duplicate slug
    const existingService = await prisma.service.findUnique({
      where: {
        slug,
      },
    });

    if (existingService) {
      return NextResponse.json(
        {
          error: "A service with this slug already exists.",
        },
        { status: 409 }
      );
    }

    // Convert image to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload image to Cloudinary
    const uploadResult = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "sk-events/services",
            },
            (error, result) => {
              if (error) {
                reject(error);
                return;
              }

              if (!result) {
                reject(new Error("Cloudinary upload failed."));
                return;
              }

              resolve(result);
            }
          )
          .end(buffer);
      }
    );

    // Save service
    const service = await prisma.service.create({
      data: {
        title,
        slug,
        description,
        content,
        imageUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      },
    });

    return NextResponse.json(
      {
        message: "Service created successfully.",
        service,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Service Create Error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while creating the service.",
      },
      {
        status: 500,
      }
    );
  }
}