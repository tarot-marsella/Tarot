import tarotData from "@/data/tarot.json";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = tarotData.find((c) => c.slug === slug);
  
  if (!card) {
    return {
      title: "Carta no encontrada",
    };
  }

  return {
    title: `${card.name} - Significado del Tarot de Marsella`,
    description: `Descubre el significado psicológico y espiritual de ${card.name}. Interpretación al derecho, invertida y aplicación práctica en tu vida.`,
    keywords: [card.name, "tarot de marsella", "significado", "arcanos mayores"],
    openGraph: {
      title: `${card.name} - Significado del Tarot de Marsella`,
      description: card.meaning_upright,
      images: [card.image_url],
    }
  };
}

export default async function CardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = tarotData.find((c) => c.slug === slug);

  if (!card) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Significado de ${card.name} en el Tarot de Marsella`,
    "image": [card.image_url],
    "description": card.meaning_upright,
    "author": {
      "@type": "Organization",
      "name": "Tarot de Marsella"
    }
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className={styles.navigation}>
        <Link href="/aprendizaje" className={styles.backLink}>&larr; Volver al Índice</Link>
      </div>

      <article className={`fade-in ${styles.article}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image 
              src={card.image_url} 
              alt={card.name} 
              fill
              className={styles.cardImage} 
              priority
              sizes="(max-width: 900px) 300px, 400px"
            />
          </div>
        </div>

        <div className={styles.contentColumn}>
          <h1 className={styles.title}>{card.name}</h1>
          <div className={styles.divider}></div>
          
          <section className={styles.section}>
            <h2>Significado Positivo</h2>
            <p>{card.meaning_upright}</p>
          </section>

          <section className={styles.section}>
            <h2>Significado Invertido</h2>
            <p>{card.meaning_reversed}</p>
          </section>

          <section className={styles.section}>
            <h2>Interpretación Psicológica</h2>
            <p>{card.psychological_meaning}</p>
          </section>

          <section className={styles.section}>
            <h2>Aplicación Práctica</h2>
            <p>{card.practical_application}</p>
          </section>

          <section className={styles.adviceSection}>
            <h2>Consejo Espiritual</h2>
            <blockquote>{card.advice}</blockquote>
          </section>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return tarotData.map((card) => ({
    slug: card.slug,
  }));
}
