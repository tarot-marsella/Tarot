import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import tarotData from "@/data/tarot.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Combinaciones del Tarot de Marsella | Guía de Lectura",
  description: "Aprende a interpretar la combinación de dos Arcanos Mayores en una tirada. Diccionario completo con las 462 combinaciones posibles explicadas.",
  alternates: {
    canonical: "https://tarotdemarsella.cl/aprendizaje/combinaciones",
  },
};

export default function CombinacionesHubPage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Combinaciones del Tarot de Marsella",
    "description": "Índice de interpretación de lecturas combinadas de los 22 Arcanos Mayores.",
    "publisher": {
      "@type": "Organization",
      "name": "Tarot de Marsella",
      "url": "https://tarotdemarsella.cl"
    }
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Academia", href: "/aprendizaje" },
          { label: "Combinaciones" },
        ]}
      />

      <header className={styles.header}>
        <span className={styles.tag}>Diccionario de Lectura</span>
        <h1 className={styles.title}>Combinaciones de Cartas</h1>
        <div className={styles.divider} />
        <p className={styles.subtitle}>
          En el Tarot de Marsella, las cartas conversan entre sí. Selecciona cualquier pareja de Arcanos Mayores para descubrir cómo interactúan y qué mensaje revelan en tu lectura en el amor, el trabajo y el espíritu.
        </p>
      </header>

      {/* Index of combinations grouped by Card 1 for Search Engine Crawling (pSEO best practice) */}
      <section className={styles.crawlerSection}>
        <h2>Explorar Combinaciones por Carta</h2>
        <p className={styles.crawlerIntro}>
          Selecciona una carta de origen para ver las 21 combinaciones posibles con el resto de los Arcanos Mayores:
        </p>
        <div className={styles.accordionContainer}>
          {tarotData.map((card) => {
            const others = tarotData.filter((c) => c.slug !== card.slug);
            return (
              <details key={card.id} className={styles.detailsBlock}>
                <summary className={styles.summaryTitle}>
                  <span>{card.name} + ...</span>
                  <span className={styles.cardCount}>21 Combinaciones</span>
                </summary>
                <div className={styles.linksGrid}>
                  {others.map((other) => (
                    <Link
                      key={other.id}
                      href={`/aprendizaje/combinaciones/${card.slug}-y-${other.slug}`}
                      className={styles.combLink}
                    >
                      {card.name} + {other.name}
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}
