import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog de Tarot de Marsella | Guías, Significados y Tiradas",
  description: "Explora nuestros artículos profundos sobre cómo leer cartas del tarot, el significado de los arcanos, y guías prácticas para tiradas de tarot gratis.",
};

const ARTICLES = [
  {
    title: "Cómo Leer las Cartas del Tarot de Marsella: Guía Completa",
    slug: "como-leer-cartas-tarot-marsella",
    excerpt: "Aprende cómo leer cartas del tarot paso a paso. Descubre los secretos del Tarot de Marsella, cómo preparar tu tirada de tarot y consejos.",
    date: "2026-05-01",
  },
  {
    title: "Tirada de Tarot Gratis Online — 3 Cartas con Interpretación",
    slug: "tirada-tarot-gratis-tres-cartas",
    excerpt: "Descubre cómo funciona la lectura de 3 cartas y cómo interpretar sus mensajes. Tarot gratis online y en español.",
    date: "2026-05-02",
  }
];

export default function BlogIndex() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog de Tarot de Marsella</h1>
        <p className={styles.meta} style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Guías, significados profundos y secretos de los Arcanos Mayores.
        </p>
      </header>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {ARTICLES.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.slug} style={{ display: "block", background: "rgba(18, 18, 26, 0.6)", padding: "2rem", borderRadius: "8px", border: "1px solid rgba(212, 175, 55, 0.1)" }}>
            <h2 style={{ fontSize: "1.5rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>{article.title}</h2>
            <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.6 }}>{article.excerpt}</p>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Publicado: {article.date}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}