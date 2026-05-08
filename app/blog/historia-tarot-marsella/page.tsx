import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Historia del Tarot de Marsella | Origen y Evolución",
  description: "Descubre la historia del Tarot de Marsella, desde sus orígenes misteriosos hasta las restauraciones de Camoin y Jodorowsky. La verdadera magia del mazo.",
  alternates: {
    canonical: `${BASE_URL}/blog/historia-tarot-marsella`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La Historia Completa del Tarot de Marsella",
  description: "Descubre la historia del Tarot de Marsella, desde sus orígenes misteriosos hasta las restauraciones de Camoin y Jodorowsky.",
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
      name: "¿Dónde se inventó el Tarot de Marsella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aunque se llama 'de Marsella', sus verdaderos orígenes se rastrean hasta el norte de Italia a finales del siglo XIV y principios del XV (como el Tarot de los Visconti). El nombre 'Marsella' se popularizó más tarde porque esa ciudad francesa se convirtió en el principal centro de impresión de estos mazos en Europa durante los siglos XVII y XVIII.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre el Tarot de Marsella y el Rider-Waite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La principal diferencia radica en los Arcanos Menores. Mientras que el Rider-Waite (creado en 1909) tiene escenas detalladas y personajes en todas sus cartas, el Tarot de Marsella tradicional mantiene ilustraciones puramente geométricas (como espadas o copas sin personajes humanos) en los Arcanos Menores, dándole mayor peso interpretativo a los 22 Arcanos Mayores.",
      },
    },
  ],
};

export default function BlogPost7() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>La Historia Completa del Tarot de Marsella</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 8 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            El <strong>Tarot de Marsella</strong> es el mazo de cartas más icónico y estudiado de la historia del esoterismo. Antes de que existieran miles de variaciones y versiones online para <Link href="/blog/tarot-online-gratis" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>leer cartas del tarot</Link>, las figuras de estilo xilográfico impresas en Francia dominaban Europa.
          </p>

          <h2>Orígenes: El Misterio Italiano</h2>
          <p>
            A pesar de su nombre, las raíces del <strong>Tarot de Marsella</strong> no nacen en Francia. Los primeros registros de barajas similares provienen de la Italia del Renacimiento (siglo XV), en cortes ricas como la de Milán. En ese entonces, se conocían como <em>Trionfi</em> (triunfos) y eran utilizados como un juego de salón por la nobleza. Las imágenes de estas cartas combinaban alegorías cristianas, mitología clásica y astrología.
          </p>

          <h2>El Siglo XVIII: El Epicentro en Marsella</h2>
          <p>
            A medida que el juego se popularizó y cruzó los Alpes hacia Francia, la ciudad de Marsella, con su floreciente industria papelera e imprenta, se convirtió en la capital indiscutible de la producción de cartas. Fue en el siglo XVIII cuando los ocultistas (como Antoine Court de Gébelin y Etteilla) comenzaron a atribuir significados místicos y de adivinación a estas cartas, vinculándolas erróneamente con el antiguo Egipto y la Cábala.
          </p>

          <h2>La Restauración: Jodorowsky y Camoin</h2>
          <p>
            En los años 90, el cineasta y psicomago Alejandro Jodorowsky, junto con Philippe Camoin (heredero del último linaje de impresores de Marsella), llevaron a cabo una colosal obra de restauración. Analizaron cientos de mazos antiguos para recuperar los detalles, colores y geometrías sagradas que se habían perdido en copias defectuosas a lo largo de los siglos.
          </p>
          <p>
            Esta restauración reavivó el interés mundial, transformando el <strong>Tarot de Marsella</strong> de un instrumento de adivinación en una poderosa herramienta psicológica de autodescubrimiento.
          </p>

          <div className={styles.ctaBox}>
            <h3>Conecta con la Historia</h3>
            <p>Nuestra plataforma utiliza la iconografía clásica. Interactúa con las mismas imágenes que han guiado a la humanidad por siglos.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tarot-gratis" variant="primary">
                Tirada Interactiva Gratis
              </Button>
            </div>
          </div>

          <h2>Diferencias con Otros Mazos (Rider-Waite)</h2>
          <p>
            Si estás aprendiendo a <strong>leer cartas tarot</strong>, notarás grandes diferencias entre el Marsella y el estilo anglosajón Rider-Waite-Smith:
          </p>
          <ul>
            <li><strong>Arcanos Menores:</strong> En el Marsella, cartas como el "3 de Espadas" solo muestran tres espadas entrelazadas. En el Rider-Waite, muestran una escena pictórica detallada (un corazón atravesado por espadas). Esto obliga al lector del Marsella a basarse más en la numerología elemental.</li>
            <li><strong>El Orden:</strong> La Justicia y La Fuerza intercambian sus números tradicionales (VIII y XI) dependiendo de la baraja.</li>
            <li><strong>Estilo de arte:</strong> El Marsella posee un arte crudo, medieval y cargado de codificación cromática (rojo, azul, amarillo, carne), donde cada color altera el <Link href="/blog/significado-arcanos-mayores-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>significado psicológico</Link>.</li>
          </ul>

          <h2>El Tarot Hoy</h2>
          <p>
            Hoy en día, el <strong>Tarot de Marsella</strong> vive una era dorada. Lejos de ser visto como "brujería", terapeutas y psicólogos lo emplean como una técnica proyectiva. El arquetipo sobrevive, demostrando que la psique humana sigue respondiendo a estos antiguos símbolos con la misma intensidad que hace quinientos años.
          </p>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre la Historia del Tarot</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Dónde se inventó el Tarot de Marsella?</h3>
              <p>Aunque se llama 'de Marsella', sus verdaderos orígenes se rastrean hasta el norte de Italia a finales del siglo XIV y principios del XV. El nombre 'Marsella' se popularizó más tarde porque esa ciudad francesa se convirtió en el principal centro de impresión en Europa durante los siglos XVII y XVIII.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cuál es la diferencia entre el Tarot de Marsella y el Rider-Waite?</h3>
              <p>La principal diferencia radica en los Arcanos Menores. Mientras que el Rider-Waite tiene escenas detalladas y personajes en todas sus cartas, el Tarot de Marsella tradicional mantiene ilustraciones puramente geométricas en los menores, dándole mayor peso interpretativo a los 22 Arcanos Mayores.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
