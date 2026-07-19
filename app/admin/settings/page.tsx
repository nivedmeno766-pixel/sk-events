import { prisma } from "@/lib/prisma";
import SettingsForm from "@/components/admin/SettingsForm";

export default async function SettingsPage() {
  let settings = await prisma.websiteSettings.findUnique({
    where: {
      id: "main",
    },
  });

  if (!settings) {
    settings = await prisma.websiteSettings.create({
      data: {
        id: "main",
        heroTitle: "SK EVENT MANAGEMENT",
        heroSubtitle: "Creating Unforgettable Moments",
        phone: "+91 9876543210",
        whatsapp: "+919876543210",
        email: "info@skevents.com",
        instagram: "https://instagram.com/sk.events.official",
        facebook: "https://facebook.com/skevents",
        address: "Kerala, India",
      },
    });
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-8 text-4xl font-bold text-[#D4AF37]">
        Website Settings
      </h1>

      <SettingsForm settings={settings} />
    </main>
  );
}