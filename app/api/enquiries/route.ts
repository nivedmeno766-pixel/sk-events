import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enquirySchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = enquirySchema.parse(body);

    const enquiry = await prisma.enquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        eventType: data.eventType,
        eventDate: data.eventDate
          ? new Date(data.eventDate)
          : null,
        location: data.location || null,
        budget: data.budget || null,
        message: data.message,
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
        message: "Unable to submit enquiry.",
      },
      { status: 400 }
    );
  }
}