import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import tiradasData from "@/data/tiradas-seo.json";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tirada = tiradasData.find((t) => t.slug === resolvedParams.slug);

  if (!tirada) {
    return { title: "Tirada no encontrada" };
  }

  const url = `https://tarotdemarsella.cl/tiradas/${tirada.slug}`;

  return {
    title: tirada.metaTitle,
    description: tirada.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: tirada.metaTitle,
      description: tirada.metaDescription,
      url,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return tiradasData.map((tirada) => ({
    slug: tirada.slug,
  }));
}

export default async function TiradaDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const tirada = tiradasData.find((t) => t.slug === resolvedParams.slug);

  if (!tirada) {
    notFound();
  }

  // Generate HowTo Schema
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cómo hacer la ${tirada.name} del Tarot de Marsella`,
    description: tirada.description,
    step: tirada.howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  // Generate FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tirada.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Tiradas", href: "/tiradas" },
          { label: tirada.name },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>{tirada.name}</h1>
          <div className={styles.divider} />
          <p className={styles.bluf}>
            <strong>{tirada.bluf}</strong>
          </p>
        </header>

        <section className={styles.section}>
          <h2>¿Cuándo usar esta tirada?</h2>
          <p className={styles.text}>{tirada.description}</p>
        </section>

        <section className={styles.section}>
          <h2>Posiciones de las Cartas</h2>
          <p className={styles.text}>Cada posición en la mesa tiene un significado específico que guía la interpretación de la carta que cae en ese lugar:</p>
          
          <div className={styles.positionsList}>
            {tirada.positions.map((pos) => (
              <div key={pos.position} className={styles.positionItem}>
                <div className={styles.positionNumber}>{pos.position}</div>
                <div className={styles.positionContent}>
                  <h3>{pos.name}</h3>
                  <p>{pos.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Paso a Paso: Cómo Realizarla</h2>
          <ol className={styles.stepsList}>
            {tirada.howToSteps.map((step, index) => (
              <li key={index}>
                <strong>{step.name}:</strong> {step.text}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Ejemplo Práctico de Lectura</h2>
          <div className={styles.exampleBox}>
            <p dangerouslySetInnerHTML={{ __html: tirada.example.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Preguntas Frecuentes</h2>
          <div className={styles.faqs}>
            {tirada.faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaWrapper}>
          <div className={styles.ctaBox}>
            <h2>¿Quieres probar esta lectura?</h2>
            <p>Ve a nuestra herramienta de tirada interactiva y pon en práctica la {tirada.name}.</p>
            <Link href="/tirada" className={styles.ctaButton}>
              Hacer Tirada Interactiva
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
