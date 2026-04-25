import React from "react";
import Image from "next/image";
import Link from "next/link";
import tarotData from "@/data/tarot.json";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprender Tarot de Marsella | Arcanos Mayores",
  description: "Descubre el significado profundo de los 22 Arcanos Mayores del Tarot de Marsella. Interpretación psicológica, espiritual y práctica.",
  keywords: ["tarot de marsella", "significado arcanos mayores", "aprender tarot", "jodorowsky tarot", "cartas del tarot"],
};

export default function AprendizajePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Los Arcanos Mayores</h1>
        <p className={styles.subtitle}>
          El viaje del héroe a través de las 22 energías fundamentales del Tarot de Marsella.
        </p>
      </header>
      
      <div className={styles.grid}>
        {tarotData.map((card) => (
          <Link href={`/aprendizaje/${card.slug}`} key={card.id} className={`fade-in ${styles.cardLink}`} style={{ animationDelay: `${card.id * 0.05}s` }}>
            <div className={styles.cardImageContainer}>
              <Image 
                src={card.image_url} 
                alt={`Carta ${card.name} del Tarot de Marsella`} 
                fill
                className={styles.cardImage} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.overlay}>
                <span className={styles.viewText}>Explorar Arcano</span>
              </div>
            </div>
            <h2 className={styles.cardName}>{card.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
