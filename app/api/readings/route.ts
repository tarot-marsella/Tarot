export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          error:
            "La base de datos no está configurada en Vercel. Por favor agrega la variable DATABASE_URL en Settings > Environment Variables en Vercel.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { cards, interpretation, question } = body;

    if (!cards || !interpretation) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    // Ensure User record exists in DB for this session
    let userId = session.user.id;
    if (session.user.email) {
      const dbUser = await prisma.user.upsert({
        where: { email: session.user.email },
        update: {
          name: session.user.name || undefined,
          image: session.user.image || undefined,
        },
        create: {
          email: session.user.email,
          name: session.user.name || null,
          image: session.user.image || null,
        },
      });
      userId = dbUser.id;
    }

    const reading = await prisma.reading.create({
      data: {
        userId,
        cards: typeof cards === "string" ? cards : JSON.stringify(cards),
        interpretation,
        question: question || null,
      },
    });

    return NextResponse.json({ reading }, { status: 201 });
  } catch (error: any) {
    console.error("Error al guardar lectura:", error);
    const msg = String(error?.message || "");

    if (
      msg.includes("DATABASE_URL") ||
      msg.includes("P1001") ||
      msg.includes("Can't reach database")
    ) {
      return NextResponse.json(
        {
          error:
            "No se pudo conectar a la base de datos PostgreSQL. Revisa la variable DATABASE_URL en Vercel.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: error?.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ readings: [] });
    }

    let userId = session.user.id;
    if (session.user.email) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (dbUser) {
        userId = dbUser.id;
      }
    }

    const readings = await prisma.reading.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ readings });
  } catch (error: any) {
    console.error("Error al consultar lecturas:", error);
    return NextResponse.json({ readings: [] });
  }
}
