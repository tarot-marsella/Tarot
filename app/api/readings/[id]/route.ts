export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "La base de datos no está configurada" },
        { status: 500 }
      );
    }

    const { id } = await params;

    let userId = session.user.id;
    if (session.user.email) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (dbUser) {
        userId = dbUser.id;
      }
    }

    // Verify ownership before deletion
    const reading = await prisma.reading.findUnique({
      where: { id },
    });

    if (!reading || reading.userId !== userId) {
      return NextResponse.json(
        { error: "Lectura no encontrada o no autorizada" },
        { status: 404 }
      );
    }

    await prisma.reading.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error al eliminar lectura:", error);
    return NextResponse.json(
      { error: "Error al eliminar la lectura" },
      { status: 500 }
    );
  }
}
