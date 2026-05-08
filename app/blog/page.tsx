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
  },
  {
    title: "Significado de los 22 Arcanos Mayores del Tarot de Marsella",
    slug: "significado-arcanos-mayores-tarot-marsella",
    excerpt: "Descubre el significado psicológico y espiritual de los 22 Arcanos Mayores. Guía completa para interpretar cada carta.",
    date: "2026-05-03",
  },
  {
    title: "Tarot Online Gratis: Tu Lectura de Cartas en 5 Minutos",
    slug: "tarot-online-gratis",
    excerpt: "Realiza tu lectura de tarot online gratis en menos de 5 minutos. Conecta con el Tarot de Marsella digital.",
    date: "2026-05-04",
  },
  {
    title: "El Loco en el Tarot de Marsella: Significado Profundo",
    slug: "el-loco-tarot-marsella-significado",
    excerpt: "Descubre el significado de El Loco. Simbolismo, interpretación en el amor, el trabajo, al derecho e invertido.",
    date: "2026-05-05",
  },
  {
    title: "Cómo Elegir los Mejores Tarotistas Online",
    slug: "mejores-tarotistas-online",
    excerpt: "Aprende a identificar a los mejores tarotistas online. Qué buscar y diferencias con el tarot gratis.",
    date: "2026-05-06",
  },
  {
    title: "Historia del Tarot de Marsella: Origen y Evolución",
    slug: "historia-tarot-marsella",
    excerpt: "Descubre la historia del Tarot de Marsella, desde sus orígenes misteriosos hasta las restauraciones modernas.",
    date: "2026-05-07",
  },
  {
    title: "Tirada de la Cruz Celta con Tarot de Marsella",
    slug: "tirada-cruz-celta-tarot",
    excerpt: "Aprende a realizar la famosa tirada de la Cruz Celta. Guía paso a paso sobre el significado de sus 10 posiciones.",
    date: "2026-05-08",
  },
  {
    title: "Tarot del Amor Gratis: Tirada Sentimental de 3 Cartas",
    slug: "tarot-amor-gratis",
    excerpt: "Consulta el tarot del amor gratis. Aprende a hacer tu tirada enfocada en relaciones de pareja y almas gemelas.",
    date: "2026-05-09",
  },
  {
    title: "Cómo Hacer Preguntas al Tarot: La Técnica que Cambia Todo",
    slug: "como-hacer-preguntas-tarot",
    excerpt: "Aprende el arte de formular preguntas al tarot. Descubre la diferencia entre preguntas abiertas y cerradas.",
    date: "2026-05-10",
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