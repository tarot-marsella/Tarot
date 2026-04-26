import Button from "@/components/Button";
import styles from "./page.module.css";
import tarotData from "@/data/tarot.json";

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
          <h1 className={styles.title}>Tarot de Marsella</h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Descubre la energía presente en tu camino. No indica un destino fijo, sino una oportunidad para la reflexión.
          </p>
          
          <div className={`slide-up ${styles.actions}`}>
            <Button href="/tirada" variant="primary">
              Tirada Interactiva
            </Button>
            <Button href="/aprendizaje" variant="secondary">
              Aprender Tarot
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className={styles.glowOverlay}></div>
    </main>
  );
}
