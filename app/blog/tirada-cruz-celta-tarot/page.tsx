import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Tirada de la Cruz Celta con Tarot de Marsella | Paso a Paso",
  description: "Aprende a realizar la famosa tirada de la Cruz Celta. Guía paso a paso sobre el significado de sus 10 posiciones usando los Arcanos del Tarot de Marsella.",
  alternates: {
    canonical: `${BASE_URL}/blog/tirada-cruz-celta-tarot`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La Tirada de la Cruz Celta — Método Completo",
  description: "Aprende a realizar la famosa tirada de la Cruz Celta. Guía paso a paso sobre el significado de sus 10 posiciones usando los Arcanos del Tarot de Marsella.",
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
      name: "¿Para qué sirve la tirada de la Cruz Celta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tirada de la Cruz Celta es excelente para analizar una situación compleja desde todos los ángulos. No solo te muestra el pasado y el futuro, sino los factores inconscientes, las influencias externas (otras personas) y tus miedos o esperanzas más profundas que están afectando el resultado final.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede hacer la Cruz Celta solo con Arcanos Mayores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aunque tradicionalmente se usan las 78 cartas del mazo, muchos tarotistas prefieren usar solo los 22 Arcanos Mayores del Tarot de Marsella para lecturas espirituales o psicológicas de gran profundidad, ya que evitan la dispersión en detalles menores.",
      },
    },
  ],
};

export default function BlogPost8() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>La Tirada de la Cruz Celta — Método Completo</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 10 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            Si ya dominas la <Link href="/blog/tirada-tarot-gratis-tres-cartas" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>lectura de 3 cartas</Link> y estás buscando un análisis exhaustivo para una situación compleja, la <strong>tirada de tarot</strong> de la <strong>Cruz Celta</strong> es tu siguiente paso. Esta es, probablemente, la disposición cartomántica más famosa y completa del mundo occidental.
          </p>

          <h2>Preparación para la Cruz Celta</h2>
          <p>
            Al <strong>leer cartas de tarot</strong> con 10 posiciones, el nivel de detalle puede ser abrumador. Te recomendamos utilizar exclusivamente los 22 <Link href="/blog/significado-arcanos-mayores-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>Arcanos Mayores del Tarot de Marsella</Link> en tus primeros intentos para mantener el enfoque en las energías arquetípicas.
          </p>

          <div className={styles.ctaBox}>
            <h3>Practica Tiradas Simples Primero</h3>
            <p>Si eres principiante, te recomendamos afianzar tus conocimientos con lecturas más directas en nuestra app interactiva.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tarot-gratis" variant="primary">
                Ir a Tirada Interactiva
              </Button>
            </div>
          </div>

          <h2>Las 10 Posiciones de la Cruz Celta</h2>
          <p>
            La cruz se divide en dos secciones: la Cruz Central (cartas 1 a 6) que forma el núcleo del problema, y el Bastón Lateral (cartas 7 a 10) que añade contexto externo e interno.
          </p>

          <h3>1. El Presente (El Corazón de la Cruz)</h3>
          <p>
            Representa la situación actual del consultante. La energía principal que rodea la pregunta en este mismo instante.
          </p>

          <h3>2. El Obstáculo (Lo que cruza)</h3>
          <p>
            Esta carta se coloca horizontalmente sobre la primera. Señala el desafío inmediato, aquello que bloquea o asiste (si es positiva) a la situación. Es la fricción necesaria para el desarrollo.
          </p>

          <h3>3. La Raíz Inconsciente (Abajo)</h3>
          <p>
            Colocada debajo del corazón de la cruz. Muestra las bases psicológicas, el subconsciente o eventos del pasado profundo que motivaron esta situación.
          </p>

          <h3>4. El Pasado Reciente (Izquierda)</h3>
          <p>
            Eventos que acaban de ocurrir y que están perdiendo influencia, pero que empujaron al consultante a su estado actual.
          </p>

          <h3>5. La Corona (Arriba)</h3>
          <p>
            Los objetivos conscientes, aspiraciones y lo que se busca lograr. Muestra cómo ve el consultante la situación desde su mente consciente.
          </p>

          <h3>6. El Futuro Cercano (Derecha)</h3>
          <p>
            Aquello hacia lo que la energía se dirige en las próximas semanas si nada cambia en la dinámica actual.
          </p>

          <h3>7. El Consultante (Base del Bastón)</h3>
          <p>
            Inicia la columna vertical a la derecha. Refleja la actitud, postura y estado interno del consultante frente al problema.
          </p>

          <h3>8. El Entorno (Las influencias externas)</h3>
          <p>
            Cómo ven los demás la situación, o la influencia de amigos, familiares y factores ambientales que el consultante no puede controlar.
          </p>

          <h3>9. Miedos y Esperanzas</h3>
          <p>
            Las emociones secretas. A menudo, lo que más deseamos es también lo que más nos aterra. Esta carta destapa esa vulnerabilidad.
          </p>

          <h3>10. El Resultado Final</h3>
          <p>
            La culminación del proceso. Se lee siempre en conjunto con la carta 5 (La Corona). ¿El resultado se alinea con lo que se esperaba, o la situación tomará otro rumbo?
          </p>

          <h2>Cómo Interpretar: El Secreto de la Síntesis</h2>
          <p>
            El error común en el <strong>tarot de Marsella</strong> es leer las 10 cartas aisladas. Debes crear "puentes": compara la carta 3 (Inconsciente) con la 5 (Consciente) para ver si hay un conflicto interno. Compara la 7 (Yo interior) con la 8 (Entorno exterior).
          </p>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre la Cruz Celta</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Para qué sirve la tirada de la Cruz Celta?</h3>
              <p>La tirada de la Cruz Celta es excelente para analizar una situación compleja desde todos los ángulos. No solo te muestra el pasado y el futuro, sino los factores inconscientes, las influencias externas (otras personas) y tus miedos o esperanzas más profundas que están afectando el resultado final.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Se puede hacer la Cruz Celta solo con Arcanos Mayores?</h3>
              <p>Sí. Aunque tradicionalmente se usan las 78 cartas del mazo, muchos tarotistas prefieren usar solo los 22 Arcanos Mayores del Tarot de Marsella para lecturas espirituales o psicológicas de gran profundidad, ya que evitan la dispersión en detalles menores.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
