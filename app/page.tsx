import Button from "@/components/Button";
import styles from "./page.module.css";
import tarotData from "@/data/tarot.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarot de Marsella — Tirada de Tarot Gratis Online | Arcanos Mayores",
  description:
    "Haz tu tirada de tarot gratis online con el auténtico Tarot de Marsella. Lectura interactiva de los 22 Arcanos Mayores con interpretación psicológica y espiritual personalizada.",
  alternates: {
    canonical: "https://tarotdemarsella.cl",
  },
};

// Pick a random arcana at build time for the background
const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Decorative arcana background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={randomCard.image_url}
        alt=""
        aria-hidden="true"
        className={styles.backgroundCard}
      />

      <div className={styles.hero}>
        <div className={`fade-in ${styles.content}`}>
          <h1 className={styles.title}>
            Tarot de Marsella
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            El Tarot de Marsella es un sistema de 22 Arcanos Mayores que revela las energías presentes en tu camino.
            No indica un destino fijo, sino una oportunidad para la reflexión profunda y el autoconocimiento.
          </p>

          <div className={`slide-up ${styles.actions}`}>
            <Button href="/tirada" variant="primary">
              Tirada de Tarot Gratis
            </Button>
            <Button href="/aprendizaje" variant="secondary">
              Leer Cartas del Tarot
            </Button>
          </div>
        </div>
      </div>



      {/* Decorative background elements */}
      <div className={styles.glowOverlay}></div>
    </main>
  );
}
