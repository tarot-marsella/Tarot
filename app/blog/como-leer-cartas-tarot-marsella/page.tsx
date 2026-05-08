import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Cómo Leer las Cartas del Tarot de Marsella | Guía 2026",
  description: "Aprende cómo leer cartas del tarot paso a paso. Descubre los secretos del Tarot de Marsella, cómo preparar tu tirada de tarot y consejos para principiantes.",
  alternates: {
    canonical: `${BASE_URL}/blog/como-leer-cartas-tarot-marsella`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo Leer las Cartas del Tarot de Marsella: Guía Completa para Principiantes",
  description: "Aprende cómo leer cartas del tarot paso a paso. Descubre los secretos del Tarot de Marsella, cómo preparar tu tirada de tarot y consejos para principiantes.",
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
      name: "¿Cualquiera puede aprender a leer las cartas del tarot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, aprender a leer las cartas del tarot de Marsella es una habilidad que cualquiera puede desarrollar. No requiere dones sobrenaturales, sino intuición, estudio de los arquetipos de los arcanos mayores y mucha práctica constante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo leerme el tarot a mí mismo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. De hecho, leer el tarot para uno mismo es una excelente herramienta de autoconocimiento y desarrollo personal. Ayuda a clarificar emociones y fomenta la reflexión diaria.",
      },
    },
  ],
};

export default function BlogPost1() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Cómo Leer las Cartas del Tarot de Marsella Paso a Paso</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 8 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            Aprender a <strong>leer cartas de tarot</strong> puede parecer intimidante al principio, pero el <strong>Tarot de Marsella</strong> es, de hecho, uno de los sistemas más profundos y accesibles para conectar con tu intuición. No necesitas poderes sobrenaturales; solo requieres disposición, estudio y práctica.
          </p>

          <h2>¿Qué es el Tarot de Marsella y por qué elegirlo?</h2>
          <p>
            El <strong>Tarot de Marsella</strong> es la baraja esotérica tradicional por excelencia. A diferencia de mazos modernos que incluyen ilustraciones detalladas en todas sus cartas, el estilo de Marsella conserva arquetipos puros, especialmente en sus <Link href="/arcanos-mayores" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>Arcanos Mayores</Link>. Al <strong>leer cartas del tarot</strong> con este mazo, estás conectando con la simbología clásica que ha guiado a psicólogos (como Carl Jung) y místicos durante siglos.
          </p>

          <h2>Los 22 Arcanos Mayores: El corazón de la lectura</h2>
          <p>
            Para dominar la <strong>tirada de tarot</strong>, tu primer paso es familiarizarte con las 22 cartas principales. Estos arcanos representan el "Viaje del Loco", una metáfora visual de la experiencia humana, desde el nacimiento de la consciencia (El Loco) hasta la iluminación (El Mundo).
          </p>
          <ul>
            <li><strong>El Mago:</strong> Iniciativa, potencial y herramientas disponibles.</li>
            <li><strong>La Papisa:</strong> Intuición, misterio y gestación de ideas.</li>
            <li><strong>La Rueda de la Fortuna:</strong> Ciclos de la vida y cambios inminentes.</li>
          </ul>
          <p>
            Te recomendamos estudiar a fondo el significado de cada carta en nuestra guía de Arcanos Mayores antes de hacer tiradas complejas.
          </p>

          <h2>Cómo Preparar tu Primera Lectura (Paso a Paso)</h2>
          <p>
            La preparación es clave para hacer <strong>tarot online</strong> o físico con precisión. Sigue este ritual simple:
          </p>
          <ol>
            <li><strong>Limpia tu espacio:</strong> Asegúrate de estar en un lugar tranquilo. Puedes encender una vela o incienso para enfocar tu mente.</li>
            <li><strong>Formula la pregunta:</strong> El secreto de una buena lectura de tarot radica en la pregunta. Evita el "sí/no". Pregunta "¿Cómo puedo mejorar mi situación en...?" o "¿Qué energía rodea este problema?".</li>
            <li><strong>Baraja las cartas:</strong> Mezcla las cartas mientras mantienes tu pregunta en mente. Corta el mazo con tu mano izquierda (la conectada a la intuición).</li>
            <li><strong>Realiza la tirada:</strong> Extrae las cartas según la disposición que hayas elegido.</li>
          </ol>

          <div className={styles.ctaBox}>
            <h3>¿Quieres practicar ahora mismo?</h3>
            <p>Prueba nuestra herramienta digital gratuita y realiza una consulta inmediata.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tarot-gratis" variant="primary">
                Hacer Tirada de Tarot Gratis
              </Button>
            </div>
          </div>

          <h2>Tipos de Tiradas de Tarot para Principiantes</h2>
          <p>
            Al principio, mantén las cosas simples. Las lecturas de decenas de cartas solo te confundirán. Empieza con la <strong>tirada de tarot</strong> más fundamental:
          </p>
          <h3>1. La Tirada de 3 Cartas (Pasado, Presente, Futuro)</h3>
          <p>
            Es la lectura más clásica y versátil. Saca tres cartas y colócalas de izquierda a derecha.
          </p>
          <ul>
            <li><strong>Carta 1 (Izquierda):</strong> Representa el pasado o la raíz del problema actual.</li>
            <li><strong>Carta 2 (Centro):</strong> Es el presente, tu estado actual o la energía del momento.</li>
            <li><strong>Carta 3 (Derecha):</strong> Indica el posible futuro, el resultado o el consejo a seguir.</li>
          </ul>

          <h2>Interpretación Básica: Conectando las cartas</h2>
          <p>
            El verdadero arte del <strong>tarot de Marsella</strong> no es memorizar los significados, sino observar cómo interactúan las cartas entre sí. Si miras una figura (como El Emperador), ¿hacia dónde está mirando? ¿Se enfrenta a la siguiente carta o le da la espalda? Las miradas, los colores dominantes y la dirección del movimiento cuentan una historia continua.
          </p>

          <h2>Errores Comunes al Leer Cartas del Tarot</h2>
          <ul>
            <li><strong>Depender demasiado del manual:</strong> Usa tu intuición. Si una carta te sugiere algo diferente a lo que dice el libro, hazle caso a tu instinto.</li>
            <li><strong>Lecturas de pánico:</strong> No leas el tarot cuando estés extremadamente ansioso o emocional. Las cartas reflejarán tu propio caos interno.</li>
            <li><strong>Negación:</strong> Aceptar las cartas "difíciles" (como La Torre o La Muerte) es vital. Recuerda que siempre indican transformación, no destinos fatales.</li>
          </ul>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre Leer el Tarot</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Cualquiera puede aprender a leer las cartas del tarot?</h3>
              <p>Sí, aprender a leer las cartas del tarot de Marsella es una habilidad que cualquiera puede desarrollar. No requiere dones sobrenaturales, sino intuición, estudio de los arquetipos de los arcanos mayores y mucha práctica constante.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Puedo leerme el tarot a mí mismo?</h3>
              <p>Absolutamente. De hecho, leer el tarot para uno mismo es una excelente herramienta de autoconocimiento y desarrollo personal. Ayuda a clarificar emociones y fomenta la reflexión diaria.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
