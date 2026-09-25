const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

console.log("Testing with DATABASE_URL:", process.env.DATABASE_URL);

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Connecting via Prisma...");
    const userCount = await prisma.user.count();
    console.log("SUCCESS! User count:", userCount);
  } catch (e) {
    console.error("PRISMA ERROR DETAILS:");
    console.error(e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
