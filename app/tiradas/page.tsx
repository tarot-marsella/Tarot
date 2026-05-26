import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import tiradasData from "@/data/tiradas-seo.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tipos de Tiradas de Tarot: Guía de Lecturas | Tarot de Marsella",
  description: "Aprende los diferentes tipos de tiradas de tarot: 3 cartas, Cruz Celta, Tirada del Amor, Astrológica y más. Guía completa paso a paso.",
  alternates: {
    canonical: "https://tarotdemarsella.cl/tiradas",
  },
};

export default function TiradasHubPage() {
  // Course Schema for the hub
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Guía de Tiradas de Tarot de Marsella",
    description: "Aprende a realizar e interpretar las tiradas de tarot más efectivas, desde lectura básica de 3 cartas hasta la Cruz Celta.",
    provider: {
      "@type": "Organization",
      name: "Tarot de Marsella",
      sameAs: "https://tarotdemarsella.cl",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10H",
    },
    offers: {
      "@type": "Offer",
      category: "Free",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Tiradas de Tarot" },
        ]}
      />

      <header className={`fade-in ${styles.header}`}>
        <h1 className={styles.title}>Tipos de Tiradas de Tarot</h1>
        <p className={styles.subtitle}>
          Aprende a desplegar las cartas en la mesa. Desde lecturas rápidas de un día hasta análisis profundos del alma, descubre la disposición perfecta para cada pregunta.
        </p>
      </header>

      <div className={`fade-in ${styles.gridContainer}`}>
        {tiradasData.map((tirada, index) => (
          <Link 
            href={`/tiradas/${tirada.slug}`} 
            key={tirada.id} 
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardContent}>
              <h2>{tirada.name}</h2>
              <p>{tirada.description.substring(0, 100)}...</p>
              <span className={styles.readMore}>Aprender tirada →</span>
            </div>
          </Link>
        ))}
      </div>

      <section className={`fade-in ${styles.ctaSection}`}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para poner en práctica tu conocimiento?</h2>
          <p>Realiza ahora mismo una consulta interactiva utilizando el método clásico de 3 cartas con nuestra herramienta online gratuita.</p>
          <Link href="/tirada" className={styles.ctaButton}>
            Ir a la Tirada Gratis Interactiva
          </Link>
        </div>
      </section>
    </main>
  );
}
