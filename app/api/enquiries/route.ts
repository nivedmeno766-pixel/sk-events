import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enquirySchema } from "@/lib/validations";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = enquirySchema.parse(body);

    // Save enquiry to database
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

    // ==========================
    // Send Admin Notification
    // ==========================
    const adminResult = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: [process.env.ADMIN_EMAIL!],
      subject: `🎉 New ${data.eventType} Enquiry - ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color:#D4AF37;">New Enquiry Received</h2>

          <table style="border-collapse: collapse; width:100%;">
            <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
            <tr><td><strong>Event</strong></td><td>${data.eventType}</td></tr>
            <tr><td><strong>Date</strong></td><td>${data.eventDate ?? "-"}</td></tr>
            <tr><td><strong>Location</strong></td><td>${data.location ?? "-"}</td></tr>
            <tr><td><strong>Budget</strong></td><td>${data.budget ?? "-"}</td></tr>
          </table>

          <hr/>

          <h3>Message</h3>

          <p>${data.message}</p>
        </div>
      `,
    });

    console.log("Admin Email:", adminResult);

    // ==========================
    // Send Customer Confirmation
    // ==========================
    const customerResult = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: [data.email],
      subject: "Thank you for contacting SK Events ❤️",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
          <h2 style="color:#D4AF37;">Thank You!</h2>

          <p>Hello <strong>${data.name}</strong>,</p>

          <p>
            Thank you for contacting <strong>SK Events</strong>.
          </p>

          <p>
            We have successfully received your enquiry.
          </p>

          <p>
            Our team will contact you as soon as possible.
          </p>

          <br/>

          <p>
            Regards,<br/>
            <strong>SK Events</strong>
          </p>
        </div>
      `,
    });

    console.log("Customer Email:", customerResult);

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch (error) {
    console.error("Enquiry Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry.",
      },
      {
        status: 400,
      }
    );
  }
}