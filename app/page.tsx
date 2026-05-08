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
            Tarot de Marsella<br />
            <span className={styles.titleAccent}>Tirada de Tarot Gratis Online</span>
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

      {/* SEO content section */}
      <section className={styles.seoSection}>
        <h2 className={styles.seoTitle}>¿Qué es el Tarot de Marsella?</h2>
        <p className={styles.seoText}>
          El <strong>Tarot de Marsella</strong> es el mazo más antiguo y respetado de la tradición esotérica occidental.
          Sus <strong>22 Arcanos Mayores</strong> representan arquetipos universales que conectan con la psicología profunda
          de Carl Jung y la sabiduría espiritual de maestros como Alejandro Jodorowsky. Nuestra plataforma de <strong>tarot
            online</strong> te permite hacer una <strong>tirada de tarot gratis</strong> con interpretación psicológica,
          espiritual y práctica personalizada.
        </p>
        <h2 className={styles.seoTitle}>¿Cómo Leer las Cartas del Tarot?</h2>
        <p className={styles.seoText}>
          Para <strong>leer cartas del tarot</strong> correctamente, es fundamental conocer el significado de cada arcano
          tanto en posición normal como invertida. Nuestra herramienta de <strong>tarot gratis</strong> te guía en cada
          paso de la interpretación, ofreciendo un análisis que va más allá de la superficie.
        </p>
      </section>

      {/* Decorative background elements */}
      <div className={styles.glowOverlay}></div>
    </main>
  );
}
