import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import guiasData from "@/data/guias-seo.json";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Guías Prácticas de Tarot de Marsella | Academia",
  description: "Aprende tarot paso a paso con nuestras guías prácticas: cómo empezar, cómo formular preguntas, ética del tarotista y mucho más.",
  alternates: { canonical: "https://tarotdemarsella.cl/aprendizaje/guias" },
};

export default function GuiasHubPage() {
  return (
    <main className={styles.main}>
      <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Academia", href: "/aprendizaje" }, { label: "Guías Prácticas" }]} />
      <header className={`fade-in ${styles.header}`}>
        <span className={styles.tag}>Silo III</span>
        <h1>Guías Prácticas de Tarot</h1>
        <p className={styles.subtitle}>Todo lo que necesitas saber para practicar el Tarot de Marsella de forma responsable, ética y efectiva.</p>
      </header>
      <div className={`fade-in ${styles.grid}`}>
        {guiasData.map((guia, i) => (
          <Link href={`/aprendizaje/guias/${guia.slug}`} key={guia.id} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
            <h2>{guia.name}</h2>
            <p>{guia.intro.substring(0, 110)}...</p>
            <span className={styles.cta}>Leer guía →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
