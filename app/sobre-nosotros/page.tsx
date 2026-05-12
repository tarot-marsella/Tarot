import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Tarot de Marsella",
  description: "Conoce nuestra misión, nuestra visión del Tarot de Marsella y nuestro compromiso con el autoconocimiento y la ética en las lecturas online.",
  alternates: {
    canonical: "https://tarotdemarsella.cl/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className={styles.main}>
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Sobre Nosotros" },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Nuestra Filosofía</h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Más allá de la adivinación: El Tarot como espejo del alma y herramienta de autoconocimiento profundo.
          </p>
        </header>

        <section className={styles.section}>
          <h2>¿Qué es Tarot de Marsella?</h2>
          <p>
            Somos una plataforma dedicada a preservar, enseñar y compartir la profunda sabiduría oculta en los 22 Arcanos Mayores del Tarot de Marsella. Nuestro enfoque se aleja de la adivinación determinista ("saber el futuro") y se centra en el aspecto psicológico, evolutivo y espiritual del Tarot.
          </p>
          <p>
            Siguiendo la tradición de estudiosos modernos como Alejandro Jodorowsky, consideramos que las cartas son un lenguaje óptico, un espejo donde se proyecta el inconsciente para hacer visible lo invisible.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Nuestra Misión</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>1. Autoconocimiento</h3>
              <p>Proveer lecturas que inviten a la reflexión personal, ayudando a los usuarios a entender su presente para construir un mejor futuro.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>2. Educación</h3>
              <p>Democratizar el conocimiento del Tarot de Marsella a través de nuestra Academia gratuita, explicando la simbología e iconografía clásica.</p>
            </div>
            <div className={styles.missionCard}>
              <h3>3. Ética</h3>
              <p>Mantener un estándar ético riguroso: no diagnosticamos enfermedades, no predecimos fatalidades y no fomentamos la dependencia.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>La Tradición del Tarot de Marsella</h2>
          <p>
            Trabajamos con la estructura simbólica del Tarot de Marsella clásico. Este mazo, con sus colores primarios y su geometría sagrada, es considerado el origen de la mayoría de los mazos modernos. Sus imperfecciones, sus miradas cruzadas y sus detalles ocultos no son errores de impresión, sino códigos esotéricos diseñados para activar la intuición del consultante.
          </p>
        </section>

        <section className={styles.ymylSection}>
          <h2>Nuestro Compromiso Ético y Legal</h2>
          <p>
            Entendemos la responsabilidad que implica trabajar con herramientas de orientación personal. Por ello, establecemos claramente nuestros límites:
          </p>
          <ul>
            <li><strong>Libre Albedrío:</strong> Creemos que el futuro no está escrito. Las cartas muestran tendencias basadas en tu energía actual; tú tienes el poder de cambiar tu destino.</li>
            <li><strong>Límites Profesionales:</strong> El Tarot no sustituye, bajo ninguna circunstancia, el consejo de profesionales de la salud (física o mental), abogados o asesores financieros.</li>
            <li><strong>Empoderamiento:</strong> Una buena lectura de Tarot nunca te deja asustado o dependiente del tarotista. Su objetivo es devolverte tu propio poder personal.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
