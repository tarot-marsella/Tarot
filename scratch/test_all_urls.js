const { PrismaClient } = require('@prisma/client');

const password = "mabjyd-vafna7-hubvoK";
const proj = "aopahejobfqboephprdk";

const urlsToTest = [
  `postgresql://postgres.${proj}:${password}@aws-0-us-east-2.pooler.supabase.com:5432/postgres?sslmode=require`,
  `postgresql://postgres.${proj}:${password}@aws-0-us-east-2.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true`,
  `postgresql://postgres.${proj}:${password}@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require`,
  `postgresql://postgres.${proj}:${password}@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true`,
  `postgresql://postgres.${proj}:${password}@aws-0-sa-east-1.pooler.supabase.com:5432/postgres?sslmode=require`,
  `postgresql://postgres.${proj}:${password}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true`,
  `postgresql://postgres:${password}@db.${proj}.supabase.co:5432/postgres?sslmode=require`
];

async function runTests() {
  for (const url of urlsToTest) {
    console.log("\n=================================");
    console.log("Testing URL:", url.replace(password, "*****"));
    const prisma = new PrismaClient({ datasources: { db: { url } } });
    try {
      const res = await prisma.$queryRaw`SELECT 1 as result`;
      console.log("SUCCESS! Result:", res);
      await prisma.$disconnect();
      return url;
    } catch (e) {
      console.log("FAILED:", e.message.split('\n')[0]);
    } finally {
      await prisma.$disconnect();
    }
  }
}

runTests();
