import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enquirySchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = enquirySchema.parse(body);

    const enquiry = await prisma.enquiry.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        eventType: validated.eventType,
        eventDate: validated.eventDate
          ? new Date(validated.eventDate)
          : null,
        location: validated.location || null,
        budget: validated.budget || null,
        message: validated.message,
      },
    });

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit enquiry.",
      },
      {
        status: 400,
      }
    );
  }
}