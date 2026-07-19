import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Get website settings
export async function GET() {
  try {
    let settings = await prisma.websiteSettings.findUnique({
      where: {
        id: "main",
      },
    });

    // Create default settings if they don't exist
    if (!settings) {
      settings = await prisma.websiteSettings.create({
        data: {
          id: "main",
          heroTitle: "SK EVENT MANAGEMENT",
          heroSubtitle: "Creating Unforgettable Moments",
          phone: "+91 9876543210",
          whatsapp: "+919745609871",
          email: "info@skevents.com",
          instagram: "https://instagram.com/sk.events.official",
          facebook: "https://facebook.com/skevents",
          address: "Kerala, India",
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load settings" },
      { status: 500 }
    );
  }
}

// Update website settings
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const settings = await prisma.websiteSettings.upsert({
      where: {
        id: "main",
      },
      update: {
        heroTitle: body.heroTitle,
        heroSubtitle: body.heroSubtitle,
        phone: body.phone,
        whatsapp: body.whatsapp,
        email: body.email,
        instagram: body.instagram,
        facebook: body.facebook,
        address: body.address,
      },
      create: {
        id: "main",
        heroTitle: body.heroTitle,
        heroSubtitle: body.heroSubtitle,
        phone: body.phone,
        whatsapp: body.whatsapp,
        email: body.email,
        instagram: body.instagram,
        facebook: body.facebook,
        address: body.address,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}