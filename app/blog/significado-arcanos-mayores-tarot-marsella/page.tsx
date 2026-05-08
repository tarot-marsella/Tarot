import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Significado de los 22 Arcanos Mayores del Tarot de Marsella",
  description: "Descubre el significado psicológico y espiritual de los 22 Arcanos Mayores del Tarot de Marsella. Guía completa para interpretar cada carta en tu lectura.",
  alternates: {
    canonical: `${BASE_URL}/blog/significado-arcanos-mayores-tarot-marsella`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Significado Completo de los 22 Arcanos Mayores del Tarot de Marsella",
  description: "Descubre el significado psicológico y espiritual de los 22 Arcanos Mayores del Tarot de Marsella. Guía completa para interpretar cada carta en tu lectura.",
  author: {
    "@type": "Organization",
    name: "Tarot de Marsella",
    url: BASE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué son los Arcanos Mayores del Tarot de Marsella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los Arcanos Mayores son las 22 cartas principales del Tarot de Marsella, numeradas del 0 al 21 (o del 1 al 21, más El Loco). Representan arquetipos universales, lecciones kármicas y las etapas fundamentales del desarrollo espiritual y psicológico humano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el arcano más poderoso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe un arcano 'más poderoso', ya que todos representan una energía vital diferente. Sin embargo, cartas como El Mundo (consecución total) o El Sol (claridad y éxito) son vistas como extremadamente positivas, mientras que La Muerte o La Torre representan transformaciones poderosas e inevitables.",
      },
    },
  ],
};

export default function BlogPost3() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Significado Completo de los 22 Arcanos Mayores</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 10 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            El <strong>Tarot de Marsella</strong> es el pilar de toda la cartomancia occidental moderna. En el núcleo de esta baraja mística se encuentran los <strong>22 Arcanos Mayores</strong>, un conjunto de imágenes arquetípicas que describen el "Viaje del Héroe" o el proceso de individuación psicológica.
          </p>
          <p>
            En esta guía definitiva, exploraremos el significado profundo de cada uno de los arcanos mayores para que puedas enriquecer tus lecturas al <strong>leer cartas tarot</strong>.
          </p>

          <h2>El Viaje del Loco: La estructura de los Arcanos Mayores</h2>
          <p>
            Antes de analizar carta por carta, es vital entender que los Arcanos Mayores no son imágenes aisladas. Representan una secuencia. Comienzan con El Loco (el espíritu puro que inicia el viaje) y terminan en El Mundo (la integración total del ser con el universo).
          </p>

          <div className={styles.ctaBox}>
            <h3>Aprende interactuando con las cartas</h3>
            <p>Puedes leer la teoría aquí, pero la mejor forma de aprender es la práctica. Haz una tirada gratuita ahora mismo.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tarot-gratis" variant="primary">
                Tirada de Tarot Interactiva
              </Button>
            </div>
          </div>

          <h2>Resumen de los Arcanos Mayores</h2>
          <p>
            A continuación, te presentamos los conceptos clave de cada carta. Si deseas una interpretación profunda (al derecho, invertida, significado psicológico y en el amor), haz clic en el nombre del arcano.
          </p>

          <h3>0. <Link href="/arcanos-mayores/el-loco" style={{ color: "var(--accent-gold)" }}>El Loco</Link></h3>
          <p>El potencial infinito, el salto al vacío, la libertad absoluta y la energía sin encauzar. Representa el inicio inexperto pero valiente de cualquier viaje.</p>

          <h3>I. <Link href="/arcanos-mayores/el-mago" style={{ color: "var(--accent-gold)" }}>El Mago</Link></h3>
          <p>El poder de manifestación. Tienes todas las herramientas sobre la mesa (intelecto, emociones, mundo material, energía) para crear lo que deseas.</p>

          <h3>II. <Link href="/arcanos-mayores/la-sacerdotisa" style={{ color: "var(--accent-gold)" }}>La Sacerdotisa (La Papisa)</Link></h3>
          <p>La intuición profunda, el conocimiento secreto y la gestación silenciosa. Es la invitación a mirar hacia adentro antes de actuar hacia afuera.</p>

          <h3>III. <Link href="/arcanos-mayores/la-emperatriz" style={{ color: "var(--accent-gold)" }}>La Emperatriz</Link></h3>
          <p>La explosión de la creatividad, la fertilidad, la abundancia y el placer sensual. Representa la naturaleza generadora y la nutrición.</p>

          <h3>IV. <Link href="/arcanos-mayores/el-emperador" style={{ color: "var(--accent-gold)" }}>El Emperador</Link></h3>
          <p>Estructura, orden material, autoridad firme y liderazgo. Es la capacidad de concretar proyectos y establecer límites sanos en el mundo real.</p>

          <h3>V. <Link href="/arcanos-mayores/el-papa" style={{ color: "var(--accent-gold)" }}>El Papa (El Hierofante)</Link></h3>
          <p>El puente entre lo espiritual y lo terrenal. La enseñanza, las tradiciones compartidas y la búsqueda de un sentido superior o sistema de creencias.</p>

          <h3>VI. <Link href="/arcanos-mayores/el-enamorado" style={{ color: "var(--accent-gold)" }}>El Enamorado</Link></h3>
          <p>Las encrucijadas emocionales, la belleza de las relaciones humanas y la necesidad de tomar decisiones desde el corazón, no desde la mente calculadora.</p>

          <h3>VII. <Link href="/arcanos-mayores/el-carro" style={{ color: "var(--accent-gold)" }}>El Carro</Link></h3>
          <p>Victoria a través de la fuerza de voluntad. Acción dinámica, avance imparable y el control de fuerzas opuestas para lograr un objetivo.</p>

          <h3>VIII. <Link href="/arcanos-mayores/la-justicia" style={{ color: "var(--accent-gold)" }}>La Justicia</Link></h3>
          <p>Equilibrio perfecto, karma y toma de responsabilidad. Exige objetividad, claridad mental y cortar de raíz aquello que ya no sirve.</p>

          <h3>IX. <Link href="/arcanos-mayores/el-ermitano" style={{ color: "var(--accent-gold)" }}>El Ermitaño</Link></h3>
          <p>Introspección madura, retiro temporal del ruido externo para iluminar el interior. Encontrar la propia luz y verdad individual.</p>

          <h3>X. <Link href="/arcanos-mayores/la-rueda-de-la-fortuna" style={{ color: "var(--accent-gold)" }}>La Rueda de la Fortuna</Link></h3>
          <p>Los ciclos inevitables de la vida. Cambios de suerte, karma y la comprensión de que todo sube y todo baja. Oportunidades inesperadas.</p>

          <h3>XI. <Link href="/arcanos-mayores/la-fuerza" style={{ color: "var(--accent-gold)" }}>La Fuerza</Link></h3>
          <p>El dominio de los instintos bajos a través del amor y la inteligencia emocional. Coraje gentil, resiliencia y domesticación de la propia "bestia" interior.</p>

          <h3>XII. <Link href="/arcanos-mayores/el-colgado" style={{ color: "var(--accent-gold)" }}>El Colgado</Link></h3>
          <p>Pausa necesaria, entrega total y un cambio radical de perspectiva. A veces hay que detenerse por completo para ver las cosas de otra manera.</p>

          <h3>XIII. <Link href="/arcanos-mayores/el-arcano-xiii" style={{ color: "var(--accent-gold)" }}>La Muerte (Arcano Sin Nombre)</Link></h3>
          <p>Transformación radical, limpieza profunda. El corte doloroso pero necesario de lo viejo para permitir que florezca lo nuevo. Renovación absoluta.</p>

          <h3>XIV. <Link href="/arcanos-mayores/la-templanza" style={{ color: "var(--accent-gold)" }}>La Templanza</Link></h3>
          <p>Sanación, flujo de energías equilibradas, síntesis de opuestos. La paz interior alcanzada tras la tormenta. Comunicación armónica.</p>

          <h3>XV. <Link href="/arcanos-mayores/el-diablo" style={{ color: "var(--accent-gold)" }}>El Diablo</Link></h3>
          <p>Las ataduras tóxicas, la pasión desbordante y las sombras reprimidas. Una invitación a reconocer nuestra oscuridad para liberarnos de ella y usar su inmensa energía.</p>

          <h3>XVI. <Link href="/arcanos-mayores/la-torre" style={{ color: "var(--accent-gold)" }}>La Torre</Link></h3>
          <p>La caída de estructuras falsas o egocéntricas. Una crisis repentina que trae consigo la iluminación y una inmensa liberación del encierro psicológico.</p>

          <h3>XVII. <Link href="/arcanos-mayores/la-estrella" style={{ color: "var(--accent-gold)" }}>La Estrella</Link></h3>
          <p>Esperanza, conexión con el cosmos y sanación pura. Encontrar tu lugar en el universo mostrando tu verdadera vulnerabilidad (desnudez del alma).</p>

          <h3>XVIII. <Link href="/arcanos-mayores/la-luna" style={{ color: "var(--accent-gold)" }}>La Luna</Link></h3>
          <p>El mundo de los misterios, el inconsciente profundo, la imaginación y también los miedos irracionales y las ilusiones. Receptividad extrema.</p>

          <h3>XIX. <Link href="/arcanos-mayores/el-sol" style={{ color: "var(--accent-gold)" }}>El Sol</Link></h3>
          <p>Claridad absoluta, éxito brillante, calidez humana, hermandad y construcción de lazos desde el amor incondicional. Disipar toda sombra.</p>

          <h3>XX. <Link href="/arcanos-mayores/el-juicio" style={{ color: "var(--accent-gold)" }}>El Juicio</Link></h3>
          <p>El despertar espiritual, el llamado irresistible hacia tu verdadera vocación, renacimiento tras el aprendizaje y curación del linaje familiar.</p>

          <h3>XXI. <Link href="/arcanos-mayores/el-mundo" style={{ color: "var(--accent-gold)" }}>El Mundo</Link></h3>
          <p>Realización suprema. El alma danzando en armonía con el universo. El cierre perfecto de un ciclo vital habiendo integrado todas sus lecciones.</p>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre los Arcanos Mayores</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Qué son los Arcanos Mayores del Tarot de Marsella?</h3>
              <p>Los Arcanos Mayores son las 22 cartas principales del Tarot de Marsella, numeradas del 0 al 21 (o del 1 al 21, más El Loco). Representan arquetipos universales, lecciones kármicas y las etapas fundamentales del desarrollo espiritual y psicológico humano.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cuál es el arcano más poderoso?</h3>
              <p>No existe un arcano 'más poderoso', ya que todos representan una energía vital diferente. Sin embargo, cartas como El Mundo (consecución total) o El Sol (claridad y éxito) son vistas como extremadamente positivas, mientras que La Muerte o La Torre representan transformaciones poderosas e inevitables.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
