import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "Significado de los 22 Arcanos Mayores del Tarot de Marsella | Guía Completa SEO",
  description: "Descubre el significado psicológico y espiritual de los 22 Arcanos Mayores del Tarot de Marsella. Guía completa para interpretar cada carta.",
  alternates: {
    canonical: `${BASE_URL}/blog/significado-arcanos-mayores-tarot-marsella`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Significado Completo de los 22 Arcanos Mayores del Tarot de Marsella",
  description: "Descubre el significado psicológico y espiritual de los 22 Arcanos Mayores del Tarot de Marsella. Guía completa para interpretar cada carta.",
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
      name: "¿Qué representan los Arcanos Mayores del Tarot de Marsella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los 22 Arcanos Mayores son las cartas principales del Tarot de Marsella. Representan arquetipos universales de la psique humana, lecciones evolutivas de vida y las etapas fundamentales de la individuación espiritual y del autoconocimiento, estructuradas a través del relato metafórico del 'Viaje del Loco'.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el arcano mayor considerado más positivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la tarotología evolutiva no existen cartas 'buenas' o 'malas' absolutas. Sin embargo, cartas como El Mundo (que simboliza la realización suprema y el éxito integral) y El Sol (que representa claridad mental, amor transparente y éxito material) se consideran tradicionalmente muy afortunadas y armónicas en cualquier tirada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se divide la secuencia de los Arcanos Mayores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se divide habitualmente en tres etapas o septenarios de 7 cartas cada uno (más El Loco, que transita libre por todas ellas): el primer septenario (cartas I a VII) representa la relación con el mundo material, social y del ego; el segundo septenario (cartas VIII a XIV) representa el viaje psicológico interior y la confrontación con las emociones; y el tercer septenario (cartas XV a XXI) simboliza el plano espiritual, la disolución del ego y la iluminación cósmica.",
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
          <h1 className={styles.title}>Significado de los 22 Arcanos Mayores del Tarot de Marsella</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 15 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            El <strong>Tarot de Marsella</strong> es la piedra angular sobre la que se fundamenta toda la cartomancia y la tarotología occidental moderna. En el corazón místico de esta baraja histórica descansan los <strong>22 Arcanos Mayores</strong>, un conjunto de imágenes cargadas de geometría sagrada y colores codificados. Estos arcanos no son ilustraciones sueltas o inconexas; representan un relato continuo y evolutivo conocido en la psicología profunda como el "Viaje del Loco" o el proceso de individuación de la consciencia humana. En esta guía completa exploraremos la estructura del mazo y el significado esencial de cada una de las 22 cartas principales para que enriquezcas tus lecturas al <Link href="/blog/como-leer-cartas-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>leer las cartas del tarot</Link>.
          </p>

          <h2>La Estructura Oculta: Los Tres Septenarios</h2>
          <p>
            Para comprender a fondo los arcanos, es vital dividir su secuencia del 1 al 21 (dejando fuera a El Loco por ser el eterno caminante sin número) en sus tres fases o <strong>septenarios</strong> tradicionales:
          </p>
          <ol>
            <li>
              <strong>Primer Septenario (Cartas I a VII - El Plano Material y Social):</strong> Describe la relación del individuo con el plano exterior. Incluye el aprendizaje de herramientas concretas, las figuras de autoridad parental (La Emperatriz, El Emperador), la educación formal y el triunfo del ego en el mundo físico (<Link href="/aprendizaje/el-carro" style={{ color: "var(--accent-gold)" }}>El Carro</Link>).
            </li>
            <li>
              <strong>Segundo Septenario (Cartas VIII a XIV - El Plano Psicológico y Moral):</strong> Marca el inicio del viaje interior. Aquí el consultante se confronta con la ética (<Link href="/aprendizaje/la-justicia" style={{ color: "var(--accent-gold)" }}>La Justicia</Link>), el silencio de la introspección, las crisis de perspectiva y la gran muerte de las estructuras rígidas y falsas de la personalidad.
            </li>
            <li>
              <strong>Tercer Septenario (Cartas XV a XXI - El Plano Espiritual y Cósmico):</strong> Alude a las fuerzas transpersonales y cósmicas. El alma se libera de las tentaciones materiales, sobrevive al colapso de las ilusiones (<Link href="/aprendizaje/la-torre" style={{ color: "var(--accent-gold)" }}>La Torre</Link>), sana bajo la luz de los astros y alcanza la fusión completa con el Absoluto (<Link href="/aprendizaje/el-mundo" style={{ color: "var(--accent-gold)" }}>El Mundo</Link>).
            </li>
          </ol>

          <div className={styles.ctaBox}>
            <h3>Aprende a través de la Práctica</h3>
            <p>La teoría es el mapa, pero la práctica es el viaje. Pon a prueba tus conocimientos formulando una duda y realizando una tirada interactiva gratuita.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tirada" variant="primary">
                Iniciar Tirada Interactiva
              </Button>
            </div>
          </div>

          <h2>Resumen y Significado de los 22 Arcanos Mayores</h2>
          <p>
            A continuación, te presentamos una síntesis de los conceptos clave y la energía arquetípica de cada carta. Para profundizar en sus significados específicos en el amor, salud, trabajo, al derecho e invertido, haz clic en el enlace de cada arcano:
          </p>

          <h3>
            <Link href="/aprendizaje/el-loco" style={{ color: "var(--accent-gold)" }}>0. El Loco</Link>
          </h3>
          <p>
            La libertad absoluta, la energía pura antes de manifestarse, el potencial infinito y el salto de fe hacia lo desconocido. Representa el espíritu libre que inicia su andadura sin prejuicios ni apegos materiales.
          </p>

          <h3>
            <Link href="/aprendizaje/el-mago" style={{ color: "var(--accent-gold)" }}>I. El Mago</Link>
          </h3>
          <p>
            La iniciativa, la astucia, el dominio de los elementos terrenales y la destreza mental para canalizar ideas y manifestarlas en la realidad concreta. Tienes todas las herramientas a tu alcance.
          </p>

          <h3>
            <Link href="/aprendizaje/la-sacerdotisa" style={{ color: "var(--accent-gold)" }}>II. La Sacerdotisa (La Papisa)</Link>
          </h3>
          <p>
            La intuición profunda, los misterios inconscientes, la sabiduría guardada en silencio y la gestación paciente de los proyectos. Invita a la quietud y a mirar hacia adentro antes de actuar.
          </p>

          <h3>
            <Link href="/aprendizaje/la-emperatriz" style={{ color: "var(--accent-gold)" }}>III. La Emperatriz</Link>
          </h3>
          <p>
            La fertilidad creadora, el estallido de la naturaleza, la sensualidad, el amor generador y la inteligencia activa. Simboliza el florecimiento y la abundancia de las ideas.
          </p>

          <h3>
            <Link href="/aprendizaje/el-emperador" style={{ color: "var(--accent-gold)" }}>IV. El Emperador</Link>
          </h3>
          <p>
            El orden, la estabilidad material, los límites sanos, la autoridad firme y el poder constructivo en el plano terrenal. Es la capacidad de organizar y consolidar proyectos reales.
          </p>

          <h3>
            <Link href="/aprendizaje/el-papa" style={{ color: "var(--accent-gold)" }}>V. El Papa</Link>
          </h3>
          <p>
            La enseñanza espiritual, la sabiduría de los maestros, la conexión entre el cielo y la tierra, y los sistemas de valores morales establecidos. Actúa como el guía o mentor.
          </p>

          <h3>
            <Link href="/aprendizaje/el-enamorado" style={{ color: "var(--accent-gold)" }}>VI. El Enamorado</Link>
          </h3>
          <p>
            Las decisiones complejas del corazón, la empatía en las relaciones sentimentales, la belleza de la unión humana y la encrucijada donde debemos elegir desde nuestro ser verdadero.
          </p>

          <h3>
            <Link href="/aprendizaje/el-carro" style={{ color: "var(--accent-gold)" }}>VII. El Carro</Link>
          </h3>
          <p>
            El triunfo del ego consciente, la victoria a través de la fuerza de voluntad, la acción dinámica y el control de fuerzas opuestas para lograr un fin. Éxito en movimiento.
          </p>

          <h3>
            <Link href="/aprendizaje/la-justicia" style={{ color: "var(--accent-gold)" }}>VIII. La Justicia</Link>
          </h3>
          <p>
            El equilibrio kármico, la claridad de juicio, la honestidad despiadada y la necesidad de asumir responsabilidades personales. Cortar con objetividad aquello que ya no sirve.
          </p>

          <h3>
            <Link href="/aprendizaje/el-ermitano" style={{ color: "var(--accent-gold)" }}>IX. El Ermitaño</Link>
          </h3>
          <p>
            La introspección madura, el retiro voluntario del ruido social, la prudencia y la búsqueda de la luz interior. Encontrar la verdad individual en la soledad constructiva.
          </p>

          <h3>
            <Link href="/aprendizaje/la-rueda-de-la-fortuna" style={{ color: "var(--accent-gold)" }}>X. La Rueda de la Fortuna</Link>
          </h3>
          <p>
            Los ciclos cambiantes e inevitables de la existencia terrenal. Entender que todo sube y todo baja, el azar cósmico, el karma en movimiento y las oportunidades inesperadas.
          </p>

          <h3>
            <Link href="/aprendizaje/la-fuerza" style={{ color: "var(--accent-gold)" }}>XI. La Fuerza</Link>
          </h3>
          <p>
            El dominio dulce de las pasiones y los instintos más bajos a través del amor, el coraje gentil y la inteligencia emocional. Canalizar la bestia interior en lugar de reprimirla.
          </p>

          <h3>
            <Link href="/aprendizaje/el-colgado" style={{ color: "var(--accent-gold)" }}>XII. El Colgado</Link>
          </h3>
          <p>
            La parada necesaria, el sacrificio voluntario en pos de un fin superior y el cambio radical de perspectiva. Aceptar las situaciones y mirar el mundo con otros ojos.
          </p>

          <h3>
            <Link href="/aprendizaje/el-arcano-xiii" style={{ color: "var(--accent-gold)" }}>XIII. La Muerte (El Arcano Sin Nombre)</Link>
          </h3>
          <p>
            La transformación profunda, irreversible y necesaria. La muerte simbólica del pasado obsoleto, los desapegos forzosos y la limpieza que prepara el terreno para el renacimiento.
          </p>

          <h3>
            <Link href="/aprendizaje/la-templanza" style={{ color: "var(--accent-gold)" }}>XIV. La Templanza</Link>
          </h3>
          <p>
            La sanación, el flujo armónico de las energías opuestas, la paciencia, la alquimia emocional y la comunicación pacífica. La serenidad alcanzada tras la gran transformación.
          </p>

          <h3>
            <Link href="/aprendizaje/el-diablo" style={{ color: "var(--accent-gold)" }}>XV. El Diablo</Link>
          </h3>
          <p>
            Las pasiones desbordantes, las ataduras materiales o emocionales tóxicas, la codependencia y el encuentro con la propia sombra psicológica. Fuerza instintiva y energía sexual creativa.
          </p>

          <h3>
            <Link href="/aprendizaje/la-torre" style={{ color: "var(--accent-gold)" }}>XVI. La Torre</Link>
          </h3>
          <p>
            La caída fulminante de las estructuras falsas y egocéntricas. Una crisis inesperada que rompe la prisión mental, trayendo consigo liberación, verdad y el fin del aislamiento.
          </p>

          <h3>
            <Link href="/aprendizaje/la-estrella" style={{ color: "var(--accent-gold)" }}>XVII. La Estrella</Link>
          </h3>
          <p>
            La esperanza renovada, la fe en el cosmos, la purificación emocional y el fluir en armonía con el entorno mostrando tu verdadera vulnerabilidad. Sanación espiritual pura.
          </p>

          <h3>
            <Link href="/aprendizaje/la-luna" style={{ color: "var(--accent-gold)" }}>XVIII. La Luna</Link>
          </h3>
          <p>
            El mundo de los misterios nocturnos, la imaginación desbordante, el inconsciente profundo y también los temores irracionales, las ilusiones y la receptividad intuitiva total.
          </p>

          <h3>
            <Link href="/aprendizaje/el-sol" style={{ color: "var(--accent-gold)" }}>XIX. El Sol</Link>
          </h3>
          <p>
            La claridad absoluta, el éxito visible, el amor incondicional, la hermandad compartida y la construcción de proyectos nobles bajo la luz de la verdad pura. Disipar toda sombra.
          </p>

          <h3>
            <Link href="/aprendizaje/el-juicio" style={{ color: "var(--accent-gold)" }}>XX. El Juicio</Link>
          </h3>
          <p>
            El llamado irresistible de la consciencia superior, el despertar espiritual, la sanación familiar y el renacimiento tras haber superado las lecciones evolutivas.
          </p>

          <h3>
            <Link href="/aprendizaje/el-mundo" style={{ color: "var(--accent-gold)" }}>XXI. El Mundo</Link>
          </h3>
          <p>
            La culminación dichosa de todo el viaje. La danza en perfecta sintonía con las leyes del cosmos, la autorrealización total, el éxito absoluto y el cierre exitoso de un ciclo vital.
          </p>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre los Arcanos Mayores</h2>

            <div className={styles.faqItem}>
              <h3>¿Qué representan los Arcanos Mayores del Tarot de Marsella?</h3>
              <p>Los 22 Arcanos Mayores son las cartas principales del Tarot de Marsella. Representan arquetipos universales de la psique humana, lecciones evolutivas de vida y las etapas fundamentales de la individuación espiritual y del autoconocimiento, estructuradas a través del relato metafórico del 'Viaje del Loco'.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cuál es el arcano mayor considerado más positivo?</h3>
              <p>En la tarotología evolutiva no existen cartas 'buenas' o 'malas' absolutas. Sin embargo, cartas como El Mundo (que simboliza la realización suprema y el éxito integral) y El Sol (que representa claridad mental, amor transparente y éxito material) se consideran tradicionalmente muy afortunadas y armónicas en cualquier tirada.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cómo se divide la secuencia de los Arcanos Mayores?</h3>
              <p>Se divide habitualmente en tres etapas o septenarios de 7 cartas cada uno (más El Loco, que transita libre por todas ellas): el primer septenario (cartas I a VII) representa la relación con el mundo material, social y del ego; el segundo septenario (cartas VIII a XIV) representa el viaje psicológico interior y la confrontación con las emociones; y el tercer septenario (cartas XV a XXI) simboliza el plano espiritual, la disolución del ego y la iluminación cósmica.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
