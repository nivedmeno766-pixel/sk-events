import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  const admin = await prisma.user.findFirst();

  if (!admin) {
    console.log("❌ No admin user found.");
    return;
  }

  await prisma.user.update({
    where: {
      id: admin.id,
    },
    data: {
      name: "SK Events Admin",
      email: "admin@skevents.com",
      password: hashedPassword,
    },
  });

  console.log("✅ Admin credentials updated successfully!");
  console.log("Email: admin@skevents.com");
  console.log("Password: Admin@123");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });