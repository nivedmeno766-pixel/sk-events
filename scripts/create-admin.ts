import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("ChangeMe123!", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@skevents.com",
    },
    update: {},
    create: {
      name: "SK Events Admin",
      email: "admin@skevents.com",
      password,
    },
  });

  console.log("✅ Admin account created!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });