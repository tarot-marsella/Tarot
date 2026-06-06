import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Política Editorial y Estándares de Calidad | Tarot de Marsella",
  description: "Conoce nuestra política editorial, procesos de revisión y el compromiso con la precisión histórica, simbólica y psicológica del Tarot.",
  alternates: {
    canonical: "https://tarotdemarsella.cl/politica-editorial",
  },
};

export default function PoliticaEditorialPage() {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política Editorial - Tarot de Marsella",
    "description": "Estándares y procesos editoriales para garantizar la veracidad, ética y calidad del contenido de Tarot de Marsella.",
    "publisher": {
      "@type": "Organization",
      "name": "Tarot de Marsella",
      "url": "https://tarotdemarsella.cl"
    }
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Política Editorial" },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Política Editorial</h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Nuestro compromiso con la rigurosidad simbólica, la precisión histórica y la responsabilidad ética.
          </p>
        </header>

        <section className={styles.section}>
          <h2>1. Propósito y Línea Editorial</h2>
          <p>
            En <strong>Tarot de Marsella</strong> nos esforzamos por ser la fuente de referencia más completa, honesta y rigurosa en habla hispana sobre el Tarot de Marsella clásico. Nuestra línea editorial rechaza la superstición ciega o la adivinación catastrófica. Promovemos el tarot como una herramienta de <strong>autoconocimiento, introspección psicológica (basada en la teoría arquetípica de Carl Jung) y tarotología evolutiva</strong>, siguiendo las directrices del redescubrimiento moderno y la restauración del mazo de Nicolas Conver por Alejandro Jodorowsky y Philippe Camoin.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Rigor Histórico y Simbólico</h2>
          <p>
            Todo nuestro contenido es investigado y redactado a partir de fuentes primarias y académicas reconocidas en el ámbito de la historia del tarot y del esoterismo. 
            Nuestros redactores consultan tratados históricos, manuales de iconografía medieval y del Renacimiento italiano/francés, y literatura consolidada (ej. <em>La Vía del Tarot</em>) para garantizar que los significados atribuidos a cada una de las 78 cartas respeten la herencia cultural del sistema.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Proceso de Creación y Revisión Humana</h2>
          <p>
            Garantizamos que el 100% de nuestros artículos, guías prácticas y significados de cartas son redactados por expertos en la materia y revisados por nuestro equipo editorial antes de su publicación.
          </p>
          <ul>
            <li><strong>No a la automatización sin control:</strong> No publicamos textos generados de forma automática por inteligencia artificial sin una profunda reescritura, verificación de datos e inyección de experiencia humana real (E-E-A-T).</li>
            <li><strong>Actualización constante:</strong> Revisamos periódicamente nuestras guías y significados para incorporar nuevos aportes de investigación y mejorar la legibilidad del contenido.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Código Ético y Responsabilidad (YMYL)</h2>
          <p>
            El tarot es una poderosa herramienta proyectiva que interactúa con la psique y el estado emocional del consultante. Por ello, exigimos el cumplimiento estricto de los siguientes límites éticos en todas nuestras publicaciones y lecturas interactivas:
          </p>
          <div className={styles.ethicalGrid}>
            <div className={styles.ethicalCard}>
              <h3>Salud y Medicina</h3>
              <p>Nunca realizamos diagnósticos médicos, pronósticos de salud ni recomendamos tratamientos o cambios en indicaciones clínicas.</p>
            </div>
            <div className={styles.ethicalCard}>
              <h3>Ámbito Financiero y Legal</h3>
              <p>No sustituimos al asesor de inversiones ni al abogado. Exhortamos a los usuarios a consultar profesionales colegiados en decisiones complejas.</p>
            </div>
            <div className={styles.ethicalCard}>
              <h3>Libre Albedrío</h3>
              <p>Rechazamos el determinismo absoluto. Ninguna lectura predice un destino inalterable. El consultante es el único responsable y autor de su futuro.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Transparencia y Correcciones</h2>
          <p>
            Si detectas algún error de interpretación simbólica, un dato histórico erróneo o un problema técnico en nuestras páginas, puedes ponerte en contacto con nosotros. Nos comprometemos a evaluar la observación y realizar la corrección oportuna en un plazo máximo de 48 horas laborales, dejando constancia si el cambio modifica de forma sustancial el mensaje del artículo.
          </p>
        </section>

        <div className={styles.navLinks}>
          <Link href="/sobre-nosotros" className={styles.backLink}>Conoce a nuestro equipo →</Link>
        </div>
      </article>
    </main>
  );
}
