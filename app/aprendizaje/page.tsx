import React from "react";
import Image from "next/image";
import Link from "next/link";
import tarotData from "@/data/tarot.json";
import styles from "./page.module.css";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Academia de Tarot de Marsella | Aprende a Leer las Cartas",
  description: "Aprende a leer el Tarot de Marsella desde cero. Significado profundo de los 22 Arcanos Mayores con interpretación psicológica, espiritual y práctica. Guía completa gratuita.",
  keywords: ["aprender tarot marsella", "significado arcanos mayores", "academia tarot", "curso tarot gratis", "leer cartas tarot"],
  alternates: {
    canonical: "https://tarotdemarsella.cl/aprendizaje",
  },
};

const hubFaqs = [
  { question: "¿Cómo aprender a leer el Tarot de Marsella?", answer: "Para aprender a leer el Tarot de Marsella, comienza estudiando los 22 Arcanos Mayores uno por uno. Familiarízate con su simbología, significado al derecho e invertido, y practica con tiradas simples de 3 cartas. Nuestra academia gratuita te guía paso a paso." },
  { question: "¿Cuántos arcanos tiene el Tarot de Marsella?", answer: "El Tarot de Marsella tiene 78 cartas en total: 22 Arcanos Mayores (las cartas con nombre propio, desde El Loco hasta El Mundo) y 56 Arcanos Menores divididos en 4 palos." },
  { question: "¿Se puede aprender tarot solo?", answer: "Sí, el tarot es una herramienta de autoconocimiento que puedes aprender de forma autodidacta. Lo más importante es estudiar la simbología de cada carta, practicar regularmente y llevar un diario de tus lecturas para observar patrones." },
];

export default function AprendizajePage() {
  const hubJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Academia de Tarot de Marsella",
    description: "Curso gratuito para aprender a leer el Tarot de Marsella. 22 lecciones sobre los Arcanos Mayores.",
    provider: { "@type": "Organization", name: "Tarot de Marsella" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Academia" },
      ]} />

      <header className={styles.header}>
        <h1 className={styles.title}>Academia de Tarot de Marsella</h1>
        <p className={styles.subtitle}>
          Estudia el significado profundo de los 22 Arcanos Mayores. Interpretación psicológica, espiritual y práctica de cada carta.
        </p>
      </header>

      <div className={styles.grid}>
        {tarotData.map((card) => (
          <Link href={`/aprendizaje/${card.slug}`} key={card.id} className={`fade-in ${styles.cardLink}`} style={{ animationDelay: `${card.id * 0.05}s` }}>
            <div className={styles.cardImageContainer}>
              <Image
                src={card.image_url}
                alt={`${card.name} - Tarot de Marsella`}
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
              />
              <div className={styles.overlay}>
                <span className={styles.viewText}>Ver Significado</span>
              </div>
            </div>
            <h2 className={styles.cardName}>{card.name}</h2>
          </Link>
        ))}
      </div>

      {/* FAQs section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
        {hubFaqs.map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className={styles.ctaBox}>
        <h2>¿Listo para practicar?</h2>
        <p>Aplica lo que has aprendido con una tirada interactiva gratuita.</p>
        <Link href="/tirada" className={styles.ctaButton}>Haz tu Tirada Gratis</Link>
      </div>
    </main>
  );
}
