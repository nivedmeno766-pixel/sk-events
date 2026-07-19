import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  eventType: z.enum([
    "WEDDING",
    "BIRTHDAY",
    "CORPORATE",
    "STAGE",
    "OTHER",
  ]),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;