import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import conceptosData from "@/data/conceptos-seo.json";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Conceptos Esenciales del Tarot de Marsella | Academia",
  description: "Diccionario y conceptos esenciales del Tarot de Marsella: historia, numerología, arquetipos de Jung, Marsella vs Rider-Waite y más.",
  alternates: { canonical: "https://tarotdemarsella.cl/aprendizaje/conceptos" },
};

export default function ConceptosHubPage() {
  return (
    <main className={styles.main}>
      <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academia", href: "/aprendizaje" }, { label: "Conceptos Esenciales" }]} />
      <header className={`fade-in ${styles.header}`}>
        <span className={styles.tag}>Silo IV</span>
        <h1>Conceptos Esenciales del Tarot</h1>
        <p className={styles.subtitle}>El marco teórico, histórico y psicológico para comprender el Tarot de Marsella en su profundidad real.</p>
      </header>
      <div className={`fade-in ${styles.grid}`}>
        {conceptosData.map((concepto, i) => (
          <Link href={`/aprendizaje/conceptos/${concepto.slug}`} key={concepto.id} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
            <h2>{concepto.name}</h2>
            <p>{concepto.intro.substring(0, 110)}...</p>
            <span className={styles.cta}>Explorar →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
