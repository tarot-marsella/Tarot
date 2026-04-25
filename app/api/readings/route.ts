export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { cards, interpretation, question } = body;

    const reading = await prisma.reading.create({
      data: {
        userId: session.user.id,
        cards: JSON.stringify(cards),
        interpretation,
        question: question || null,
      },
    });

    return NextResponse.json({ reading }, { status: 201 });
  } catch (error) {
    console.error("Error saving reading:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
