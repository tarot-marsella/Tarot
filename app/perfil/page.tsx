import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { Metadata } from "next";
import ReadingHistoryItem from "@/components/ReadingHistoryItem";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi Perfil — Historial de Lecturas | Tarot de Marsella",
  description: "Repasa tu historial personal de tiradas de tarot guardadas con fecha, hora, cartas y consejos.",
};

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  let readings: any[] = [];
  try {
    let userId = session.user.id;
    if (session.user.email) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (dbUser) {
        userId = dbUser.id;
      }
    }

    if (userId) {
      readings = await prisma.reading.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
    }
  } catch (error) {
    console.error("Error cargando historial de lecturas:", error);
    readings = [];
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.userProfileBanner}>
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || "Usuario"}
              className={styles.userAvatar}
            />
          ) : (
            <div className={styles.userAvatarFallback}>
              {session.user.name?.charAt(0) || "U"}
            </div>
          )}
          <div>
            <h1 className={styles.title}>
              Bienvenido/a, {session.user.name || session.user.email}
            </h1>
            <p className={styles.subtitle}>
              Tu espacio sagrado. Repasa las tiradas y consejos acumulados en tu camino.
            </p>
          </div>
        </div>
      </header>

      <section className={styles.historySection}>
        <div className={styles.sectionHeader}>
          <h2>Historial de Tiradas Interactivas ({readings.length})</h2>
          <Link href="/tirada" className={styles.newReadingBtn}>
            ✦ Realizar Nueva Tirada
          </Link>
        </div>

        <div className={styles.readingsList}>
          {readings.length === 0 ? (
            <div className={styles.emptyStateBox}>
              <div className={styles.emptyIcon}>🔮</div>
              <h3>Aún no has guardado ninguna tirada</h3>
              <p>
                Realiza una tirada interactiva gratis y guárdala en tu perfil para consultar tus consejos siempre que lo necesites.
              </p>
              <Link href="/tirada" className={styles.startReadingBtn}>
                Comenzar Lectura
              </Link>
            </div>
          ) : (
            readings.map((reading) => (
              <ReadingHistoryItem key={reading.id} reading={reading} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
