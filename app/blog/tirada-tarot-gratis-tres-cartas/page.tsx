import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Tirada de Tarot Gratis Online | 3 Cartas con Interpretación",
  description: "Realiza tu tirada de tarot gratis online de 3 cartas. Descubre cómo interpretar tu pasado, presente y futuro con los Arcanos Mayores del Tarot de Marsella.",
  alternates: {
    canonical: `${BASE_URL}/blog/tirada-tarot-gratis-tres-cartas`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tirada de Tarot Gratis: Lectura de 3 Cartas con Significado",
  description: "Realiza tu tirada de tarot gratis online de 3 cartas. Descubre cómo interpretar tu pasado, presente y futuro con los Arcanos Mayores del Tarot de Marsella.",
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
      name: "¿Qué significan las 3 cartas en el tarot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En una tirada clásica de 3 cartas, la primera carta (izquierda) representa el pasado y la raíz de la situación. La segunda carta (centro) indica tu estado actual o presente. La tercera carta (derecha) señala el desenlace probable, el futuro o el consejo espiritual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es fiable el tarot online gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tarot online funciona utilizando la sincronicidad. Siempre que te concentres adecuadamente en tu pregunta y elijas las cartas guiándote por tu intuición, los arcanos te mostrarán un reflejo preciso de tus energías subconscientes.",
      },
    },
  ],
};

export default function BlogPost2() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Tirada de Tarot Gratis: Lectura de 3 Cartas con Significado</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 6 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            Si buscas una respuesta rápida, profunda y directa, la <strong>tirada de tarot gratis</strong> de 3 cartas es la opción ideal. Este formato, conocido mundialmente en el ámbito del <strong>free tarot</strong> y la adivinación, destila la sabiduría de los Arcanos Mayores en un esquema fácil de comprender pero increíblemente poderoso.
          </p>

          <h2>Cómo Funciona la Tirada de 3 Cartas</h2>
          <p>
            Hacer una lectura de <strong>tarot online</strong> requiere el mismo nivel de concentración que usar una baraja física. La clave del éxito radica en tu intención. La tirada de tres cartas es una "fotografía" energética de una situación específica en el tiempo.
          </p>
          <p>
            Al usar nuestra plataforma de <strong>tarot gratis</strong>, el sistema selecciona las cartas basándose en la sincronicidad matemática. Para que la tirada sea efectiva, debes:
          </p>
          <ol>
            <li>Respirar profundamente tres veces para centrar tu mente.</li>
            <li>Formular tu pregunta de forma afirmativa y clara (por ejemplo: "¿Qué energía me acompaña en mi nueva relación amorosa?").</li>
            <li>Hacer clic para revelar las tres cartas cuando sientas que es el momento adecuado.</li>
          </ol>

          <div className={styles.ctaBox}>
            <h3>Realiza tu Lectura Ahora Mismo</h3>
            <p>Descubre lo que los Arcanos tienen que decirte hoy con nuestra app interactiva y guarda tus resultados.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tirada" variant="primary">
                Iniciar Tarot Gratis
              </Button>
            </div>
          </div>

          <h2>Significado de Cada Posición</h2>
          <p>
            En la lectura clásica de Pasado, Presente y Futuro (la más popular al <strong>leer cartas de tarot</strong>), la disposición espacial determina el contexto de cada arcano.
          </p>
          
          <h3>Posición 1 (Izquierda): El Pasado o la Raíz</h3>
          <p>
            Esta carta no suele hablar de un pasado remoto, sino de la semilla que originó tu situación actual. Te muestra las energías, decisiones o traumas recientes que te han llevado hasta donde estás hoy. Si, por ejemplo, te sale La Torre aquí, indica que una crisis reciente es el motor de tu búsqueda actual.
          </p>

          <h3>Posición 2 (Centro): El Presente o el Estado Actual</h3>
          <p>
            El centro de la <strong>tirada de tarot</strong> es el ancla. Muestra tu estado mental, emocional y físico en este preciso instante. Representa las fuerzas con las que cuentas ahora mismo. Es la carta más importante para el autoconocimiento.
          </p>

          <h3>Posición 3 (Derecha): El Futuro o el Consejo</h3>
          <p>
            El <strong>tarot de Marsella</strong> no sentencia un futuro inamovible. Esta tercera carta te muestra hacia dónde se dirige la energía si todo sigue su curso actual, o actúa como un consejo divino sobre la actitud que debes tomar para resolver el conflicto.
          </p>

          <h2>Cómo Interpretar tu Resultado</h2>
          <p>
            Si quieres profundizar en <Link href="/blog/como-leer-cartas-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>cómo leer cartas del tarot de Marsella</Link>, recuerda que las cartas deben "hablar entre sí".
          </p>
          <ul>
            <li><strong>Observa la transición:</strong> ¿El personaje del Pasado mira hacia el Presente o le da la espalda?</li>
            <li><strong>Equilibrio de luz y sombra:</strong> ¿Hay un balance entre cartas constructivas (El Sol, La Estrella) y cartas destructivas (La Muerte, El Diablo)?</li>
            <li><strong>Números y colores:</strong> Fíjate si la numeración de los Arcanos Mayores va en aumento o si predominan colores como el rojo (acción) o el azul (receptividad).</li>
          </ul>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Qué significan las 3 cartas en el tarot?</h3>
              <p>En una tirada clásica de 3 cartas, la primera carta (izquierda) representa el pasado y la raíz de la situación. La segunda carta (centro) indica tu estado actual o presente. La tercera carta (derecha) señala el desenlace probable, el futuro o el consejo espiritual.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Es fiable el tarot online gratis?</h3>
              <p>El tarot online funciona utilizando la sincronicidad. Siempre que te concentres adecuadamente en tu pregunta y elijas las cartas guiándote por tu intuición, los arcanos te mostrarán un reflejo preciso de tus energías subconscientes, de la misma forma que una baraja física.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
