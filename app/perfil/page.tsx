import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import tarotData from "@/data/tarot.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Perfil | Tarot de Marsella",
  description: "Historial de tus tiradas de tarot.",
};

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const readings = await prisma.reading.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tu Historial de Lecturas</h1>
        <p className={styles.subtitle}>Repasa las energías que te han acompañado.</p>
      </header>

      <div className={styles.readingsList}>
        {readings.length === 0 ? (
          <p className={styles.emptyState}>Aún no has guardado ninguna lectura. ¡Ve a la sección de Tirada Interactiva!</p>
        ) : (
          readings.map((reading) => {
            const cards = JSON.parse(reading.cards);
            return (
              <div key={reading.id} className={styles.readingCard}>
                <div className={styles.readingHeader}>
                  <h3>{new Date(reading.createdAt).toLocaleDateString("es-ES", { dateStyle: "long", timeStyle: "short" })}</h3>
                  {reading.question && <p className={styles.question}><strong>Pregunta:</strong> {reading.question}</p>}
                </div>
                
                <div className={styles.cardsMiniGrid}>
                  {cards.map((cardData: any, i: number) => {
                    const cardDef = tarotData.find(c => c.id === cardData.id);
                    return (
                      <div key={i} className={styles.miniCardInfo}>
                        <span className={styles.miniCardName}>
                          {cardDef?.name} {cardData.isReversed ? "(Invertida)" : ""}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className={styles.interpretationBox}>
                  <p>{reading.interpretation}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
