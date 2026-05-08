import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog | Guías y Significados del Tarot de Marsella",
  description: "Explora artículos sobre cómo leer cartas del tarot, significado de los arcanos mayores, tiradas de tarot gratis y guías prácticas.",
};

const ARTICLES = [
  {
    title: "Cómo Leer las Cartas del Tarot de Marsella",
    slug: "como-leer-cartas-tarot-marsella",
    excerpt: "Aprende paso a paso a interpretar los Arcanos Mayores. Preparación, tipos de tiradas y errores comunes.",
    tag: "Guía",
  },
  {
    title: "Tirada de Tarot Gratis — 3 Cartas",
    slug: "tirada-tarot-gratis-tres-cartas",
    excerpt: "Cómo funciona la lectura de 3 cartas: pasado, presente y futuro. Interpretación completa.",
    tag: "Tirada",
  },
  {
    title: "Significado de los 22 Arcanos Mayores",
    slug: "significado-arcanos-mayores-tarot-marsella",
    excerpt: "Diccionario completo de los 22 Arcanos Mayores con significado psicológico y espiritual.",
    tag: "Referencia",
  },
  {
    title: "Tarot Online Gratis en 5 Minutos",
    slug: "tarot-online-gratis",
    excerpt: "Por qué funciona el tarot digital, cómo hacer tu consulta y consejos para una mejor lectura.",
    tag: "Tirada",
  },
  {
    title: "El Loco — Significado Profundo",
    slug: "el-loco-tarot-marsella-significado",
    excerpt: "Simbolismo, significado al derecho e invertido, en el amor y en el trabajo.",
    tag: "Arcano",
  },
  {
    title: "Cómo Elegir los Mejores Tarotistas",
    slug: "mejores-tarotistas-online",
    excerpt: "Qué buscar en un lector profesional, señales de alerta y diferencias con el tarot gratis.",
    tag: "Consejo",
  },
  {
    title: "Historia del Tarot de Marsella",
    slug: "historia-tarot-marsella",
    excerpt: "Desde los Trionfi italianos hasta la restauración de Jodorowsky y Camoin.",
    tag: "Historia",
  },
  {
    title: "Tirada de la Cruz Celta",
    slug: "tirada-cruz-celta-tarot",
    excerpt: "Las 10 posiciones explicadas paso a paso. Método completo para lecturas avanzadas.",
    tag: "Tirada",
  },
  {
    title: "Tarot del Amor Gratis",
    slug: "tarot-amor-gratis",
    excerpt: "Lectura sentimental de 3 cartas. Las mejores cartas para el amor y cómo interpretarlas.",
    tag: "Amor",
  },
  {
    title: "Cómo Hacer Preguntas al Tarot",
    slug: "como-hacer-preguntas-tarot",
    excerpt: "La técnica que transforma tus lecturas. Preguntas abiertas vs cerradas con ejemplos prácticos.",
    tag: "Técnica",
  },
];

export default function BlogIndex() {
  return (
    <main className={styles.blogMain}>
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <p className={styles.blogSubtitle}>
          Guías, significados y secretos del Tarot de Marsella
        </p>
        <div className={styles.blogDivider} />
      </header>

      <div className={styles.blogGrid}>
        {ARTICLES.map((article) => (
          <Link
            href={`/blog/${article.slug}`}
            key={article.slug}
            className={styles.blogCard}
          >
            <span className={styles.blogTag}>{article.tag}</span>
            <h2 className={styles.blogCardTitle}>{article.title}</h2>
            <p className={styles.blogCardExcerpt}>{article.excerpt}</p>
            <span className={styles.blogCardLink}>Leer artículo →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}