import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const formData = await req.formData();

    const title = (formData.get("title") as string)?.trim();
    const slug = (formData.get("slug") as string)?.trim();
    const description = (formData.get("description") as string)?.trim();
    const content = (formData.get("content") as string)?.trim();
    const file = formData.get("file") as File | null;

    if (!title || !slug || !description || !content) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found." },
        { status: 404 }
      );
    }

    const existingSlug = await prisma.service.findFirst({
      where: {
        slug,
        NOT: {
          id,
        },
      },
    });

    if (existingSlug) {
      return NextResponse.json(
        { error: "Slug already exists." },
        { status: 409 }
      );
    }

    let imageUrl = service.imageUrl;
    let publicId = service.publicId;

    if (file && file.size > 0) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            error: "Only JPG, PNG and WEBP are allowed.",
          },
          {
            status: 400,
          }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error: "Image must be less than 5MB.",
          },
          {
            status: 400,
          }
        );
      }

      if (service.publicId) {
        await cloudinary.uploader.destroy(service.publicId);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult =
        await new Promise<UploadApiResponse>(
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
                    reject(
                      new Error(
                        "Cloudinary upload failed."
                      )
                    );
                    return;
                  }

                  resolve(result);
                }
              )
              .end(buffer);
          }
        );

      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    }

    const updatedService = await prisma.service.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        description,
        content,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(
      {
        message: "Service updated successfully.",
        service: updatedService,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Update Service Error:", error);

    return NextResponse.json(
      {
        error: "Failed to update service.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const service = await prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!service) {
      return NextResponse.json(
        {
          error: "Service not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (service.publicId) {
      await cloudinary.uploader.destroy(service.publicId);
    }

    await prisma.service.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Service deleted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Delete Service Error:", error);

    return NextResponse.json(
      {
        error: "Failed to delete service.",
      },
      {
        status: 500,
      }
    );
  }
}