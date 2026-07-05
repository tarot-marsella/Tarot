import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Tirada de la Cruz Celta | Significado de las 10 Cartas y Guía SEO",
  description: "Aprende a realizar la famosa tirada de la Cruz Celta. Guía paso a paso sobre el significado de sus 10 posiciones usando los Arcanos del Tarot de Marsella.",
  alternates: {
    canonical: `${BASE_URL}/blog/tirada-cruz-celta-tarot`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La Tirada de la Cruz Celta: El Método de Lectura Más Completo",
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
      name: "¿Para qué tipo de consultas sirve la Cruz Celta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tirada de la Cruz Celta es ideal para examinar situaciones complejas, dilemas vitales profundos o transiciones de vida importantes. Al contar con 10 posiciones estructuradas, no se limita a predecir un resultado final, sino que desglosa los factores psicológicos subconscientes, las influencias externas de terceras personas, el pasado reciente y el contraste entre tus temores y metas conscientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede realizar la Cruz Celta utilizando solo los 22 Arcanos Mayores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Aunque tradicionalmente se emplea la baraja completa de 78 cartas (mayores y menores), realizar la Cruz Celta exclusivamente con los 22 Arcanos Mayores del Tarot de Marsella es una práctica altamente recomendada para lecturas con enfoque psicológico y evolutivo. Evita que la lectura se disperse en pequeños detalles materiales, enfocándose en las grandes lecciones arquetípicas del consultante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se debe interpretar la posición del Obstáculo si sale una carta positiva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si en la posición 2 (el obstáculo) aparece una carta tradicionalmente luminosa como El Sol o El Mundo, no significa que el futuro sea oscuro. Indica que las cualidades de esa carta están siendo mal canalizadas o se presentan en exceso. Por ejemplo, El Sol en el obstáculo puede advertir sobre egocentrismo, orgullo ciego o un exceso de optimismo ingenuo que impide ver los peligros reales.",
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
          <h1 className={styles.title}>La Tirada de la Cruz Celta: Guía Completa de Interpretación</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 13 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            Cuando un estudiante de cartomancia ha logrado consolidar su práctica con la clásica <Link href="/blog/tirada-tarot-gratis-tres-cartas" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>tirada de tres cartas</Link> y busca un método que le permita profundizar de manera exhaustiva en situaciones de gran complejidad, la <strong>tirada de la Cruz Celta</strong> representa su portal definitivo hacia la maestría. Esta disposición de 10 cartas es, por amplio margen, el esquema de lectura más respetado y utilizado en el mundo esotérico de occidente. En este artículo exploraremos sus orígenes históricos, analizaremos detalladamente sus diez posiciones y te daremos las claves para tejer una lectura cohesionada y con rigor profesional.
          </p>

          <h2>Orígenes Históricos: La Golden Dawn y Arthur Edward Waite</h2>
          <p>
            A pesar de su nombre evocador de mitos medievales y druidas, la tirada de la Cruz Celta tal como la conocemos hoy no tiene un origen antiguo o celta documentado. Su popularización oficial se debe a Arthur Edward Waite, miembro clave de la influyente sociedad esotérica victoriana **Orden Hermética de la Golden Dawn** y creador del mazo Rider-Waite-Smith.
          </p>
          <p>
            Waite publicó esta disposición en su famoso libro de 1911, *The Pictorial Key to the Tarot*, presentándola como un método tradicional que él había adaptado para brindar claridad absoluta a consultas de toda índole. Aunque originalmente se concibió para su propio mazo, la estructura geométrica de la Cruz Celta funciona con la misma potencia (o incluso mayor, debido a la pureza arquetípica) al utilizar los 22 Arcanos Mayores del histórico <strong>Tarot de Marsella</strong>.
          </p>

          <div className={styles.ctaBox}>
            <h3>Desarrolla tu Práctica Diaria</h3>
            <p>La Cruz Celta requiere práctica y una mente despejada. Si deseas empezar con algo más directo para resolver una duda urgente hoy, prueba nuestra tirada interactiva gratuita.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tirada" variant="primary">
                Hacer Tirada Gratis
              </Button>
            </div>
          </div>

          <h2>El Esquema Físico: ¿Cómo Disponer las 10 Cartas?</h2>
          <p>
            La Cruz Celta se compone de dos grandes estructuras espaciales sobre la mesa de lectura: la <strong>Cruz Central</strong> (que representa el núcleo dinámico de la situación) y el <strong>Bastón Lateral</strong> (que representa el contexto psicológico e influencias del entorno del consultante).
          </p>
          <p>
            Coloca el tapete y distribuye las cartas siguiendo este orden numérico y espacial:
          </p>
          <pre style={{ background: "rgba(0, 0, 0, 0.4)", padding: "1rem", borderRadius: "8px", fontFamily: "monospace", color: "var(--accent-gold)", lineHeight: "1.4" }}>
{`        [Posición 5] (Arriba)
                 |
[Posición 4] -- [Pos. 1 / Pos. 2] -- [Pos. 6]      [Posición 10] (Resultado)
(Izquierda)      (Centro)            (Derecha)            |
                 |                                 [Posición 9] (Miedos)
        [Posición 3] (Abajo)                              |
                                                   [Posición 8] (Entorno)
                                                          |
                                                   [Posición 7] (Consultante)
`}
          </pre>

          <h2>Explicación Detallada de las 10 Posiciones</h2>
          <p>
            Para realizar una lectura fluida, es vital que memorices el significado intrínseco de cada una de las posiciones en el tablero:
          </p>

          <h3>1. El Presente y el Estado Actual</h3>
          <p>
            Ubicada en el centro de la cruz. Esta carta representa la atmósfera general que rodea al consultante y su problema en el momento de barajar. Define el punto de partida energético.
          </p>

          <h3>2. El Obstáculo o Factor de Cruce</h3>
          <p>
            Se coloca horizontalmente cruzando la carta 1. Representa el reto inmediato, la fuerza de oposición o la fricción que el consultante debe encarar. Curiosamente, si aquí aparece una carta positiva como <Link href="/aprendizaje/el-sol" style={{ color: "var(--accent-gold)" }}>El Sol</Link>, el obstáculo radica en un exceso de orgullo, ceguera por optimismo ingenuo o dificultad para poner límites al compartir tu luz.
          </p>

          <h3>3. La Base y el Subconsciente</h3>
          <p>
            Situada debajo de la carta central. Muestra la base profunda de la situación: raíces familiares, heridas del pasado remoto o motivos inconscientes que el consultante aún no ha procesado conscientemente, pero que dictan su comportamiento actual.
          </p>

          <h3>4. El Pasado Reciente y la Causa</h3>
          <p>
            Situada a la izquierda de la cruz. Refleja acontecimientos o decisiones tomadas en los últimos días o semanas que ya han concluido, pero cuyos ecos determinaron la situación en la que te encuentras hoy.
          </p>

          <h3>5. La Corona y el Consciente</h3>
          <p>
            Situada en la parte superior. Representa las metas conscientes del consultante, lo que cree desear, sus ambiciones y el mejor resultado posible que visualiza mentalmente.
          </p>

          <h3>6. El Futuro Inmediato</h3>
          <p>
            Situada a la derecha de la cruz. Indica el siguiente paso evolutivo en el camino del consultante en las próximas semanas si continúa operando con la misma dinámica mental y energética.
          </p>

          <h3>7. El Estado Interno del Consultante</h3>
          <p>
            Es la base del bastón vertical a la derecha. Revela cómo se percibe el consultante a sí mismo, su actitud mental (si está a la defensiva, resignado o empoderado) y sus recursos psicológicos disponibles.
          </p>

          <h3>8. El Entorno y Factores Externos</h3>
          <p>
            Segunda carta del bastón. Muestra las opiniones e influencias de personas cercanas (pareja, familia, jefes), así como las limitaciones y facilidades que el entorno material impone sobre la pregunta.
          </p>

          <h3>9. Esperanzas, Miedos y Proyecciones</h3>
          <p>
            Tercera carta del bastón. Uno de los puntos más interesantes desde la perspectiva junguiana, ya que revela la delgada línea que separa lo que deseamos de lo que tememos. A menudo, aquello que más anhelamos nos asusta debido a la transformación que exige de nosotros.
          </p>

          <h3>10. El Desenlace o Resultado Final</h3>
          <p>
            Coronando el bastón vertical. Muestra la resolución o tendencia final a mediano plazo (3 a 6 meses). Esta carta nunca debe leerse de forma aislada; es la consecuencia lógica de la interacción de las nueve cartas precedentes.
          </p>

          <h2>El Arte de la Síntesis: Cómo Leer los Ejes Ocultos</h2>
          <p>
            El error más común al <Link href="/blog/como-leer-cartas-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>leer cartas del tarot</Link> con la Cruz Celta es recitar las diez interpretaciones de forma aislada, como si fueran páginas de un diccionario. Para dar una lectura de calidad profesional, debes buscar relaciones y "puentes" dinámicos entre las posiciones:
          </p>
          <ul>
            <li>
              <strong>El Eje de la Consciencia:</strong> Compara la carta 3 (Inconsciente) con la carta 5 (Consciente). Si en el inconsciente tienes a <Link href="/aprendizaje/el-colgado" style={{ color: "var(--accent-gold)" }}>El Colgado</Link> (sacrificio, parálisis) y en el consciente tienes a <Link href="/aprendizaje/el-carro" style={{ color: "var(--accent-gold)" }}>El Carro</Link> (éxito, avance rápido), hay un conflicto severo: quieres correr pero tu mente profunda te exige detenerte a reflexionar.
            </li>
            <li>
              <strong>El Eje del Tiempo:</strong> Analiza la secuencia temporal de izquierda a derecha: carta 4 (pasado reciente) → carta 1 (presente) → carta 6 (futuro inmediato). Esta línea te muestra la inercia del problema y si estás repitiendo bucles.
            </li>
            <li>
              <strong>El Eje de la Relación Interna/Externa:</strong> Compara la carta 7 (Yo interno) con la carta 8 (Entorno). Si tú estás vibrando en una energía activa y receptiva, pero tu entorno está bloqueado por cartas difíciles, sabrás que el obstáculo principal radica en las dinámicas de tus vínculos externos y no en ti mismo.
            </li>
          </ul>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre la Cruz Celta</h2>

            <div className={styles.faqItem}>
              <h3>¿Para qué tipo de consultas sirve la Cruz Celta?</h3>
              <p>La tirada de la Cruz Celta es ideal para examinar situaciones complejas, dilemas vitales profundos o transiciones de vida importantes. Al contar con 10 posiciones estructuradas, no se limita a predecir un resultado final, sino que desglosa los factores psicológicos subconscientes, las influencias externas de terceras personas, el pasado reciente y el contraste entre tus temores y metas conscientes.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Se puede realizar la Cruz Celta utilizando solo los 22 Arcanos Mayores?</h3>
              <p>Absolutamente. Aunque tradicionalmente se emplea la baraja completa de 78 cartas (mayores y menores), realizar la Cruz Celta exclusivamente con los 22 Arcanos Mayores del Tarot de Marsella es una práctica altamente recomendada para lecturas con enfoque psicológico y evolutivo. Evita que la lectura se disperse en pequeños detalles materiales, enfocándose en las grandes lecciones arquetípicas del consultante.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cómo se debe interpretar la posición del Obstáculo si sale una carta positiva?</h3>
              <p>Si en la posición 2 (el obstáculo) aparece una carta tradicionalmente luminosa como El Sol o El Mundo, no significa que el futuro sea oscuro. Indica que las cualidades de esa carta están siendo mal canalizadas o se presentan en exceso. Por ejemplo, El Sol en el obstáculo puede advertir sobre egocentrismo, orgullo ciego o un exceso de optimismo ingenuo que impide ver los peligros reales.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
