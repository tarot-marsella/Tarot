import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../blog.module.css";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  title: "El Loco en el Tarot de Marsella | Significado Profundo",
  description: "Descubre el significado completo de El Loco en el Tarot de Marsella. Simbolismo, interpretación en el amor, el trabajo, al derecho e invertido.",
  alternates: {
    canonical: `${BASE_URL}/blog/el-loco-tarot-marsella-significado`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El Loco — Significado Profundo en el Tarot de Marsella",
  description: "Descubre el significado completo de El Loco en el Tarot de Marsella. Simbolismo, interpretación en el amor, el trabajo, al derecho e invertido.",
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
      name: "¿Es bueno o malo que salga El Loco en una tirada de tarot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el Tarot de Marsella no hay cartas puramente buenas o malas. El Loco suele ser muy positivo porque indica un nuevo comienzo lleno de energía, espontaneidad y un salto de fe. Solo se considera 'negativo' si estás buscando máxima estabilidad material, ya que indica movimiento e imprevisibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa El Loco invertido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando El Loco aparece invertido, pierde su inocencia y se convierte en irresponsabilidad o caos. Puede indicar que estás huyendo de tus responsabilidades vitales o que tienes miedo a dar el salto hacia lo desconocido, paralizándote.",
      },
    },
  ],
};

export default function BlogPost5() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>El Loco — Significado Profundo en el Tarot de Marsella</h1>
          <div className={styles.divider}></div>
          <div className={styles.meta}>Tiempo de lectura: 7 min • Actualizado: 2026</div>
        </header>

        <div className={styles.content}>
          <p>
            Al estudiar el <Link href="/blog/significado-arcanos-mayores-tarot-marsella" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>significado de los arcanos</Link>, <strong>El Loco</strong> (Le Mat en francés) es quizás la carta más fascinante de toda la baraja del <strong>Tarot de Marsella</strong>. Es el único Arcano Mayor que tradicionalmente no lleva número, o se le asigna el cero. Esto se debe a que representa la energía primordial, el espíritu puro antes de encarnar o manifestarse en el mundo de las formas.
          </p>

          <h2>Simbolismo Visual en la Carta</h2>
          <p>
            Si observas atentamente a <strong>El Loco del tarot</strong>, verás a un vagabundo caminando con un fardo al hombro. No parece prestar atención a su destino, sino que camina mirando hacia arriba o hacia adelante. Detrás de él, un perro (o animal salvaje) empuja o muerde su pantalón, simbolizando el impulso animal primigenio que lo empuja hacia el avance, impidiéndole quedarse estancado.
          </p>

          <h2>El Loco: Significado al Derecho</h2>
          <p>
            Cuando El Loco aparece al derecho en tu <Link href="/tarot-gratis" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>tirada de tarot</Link>, el mensaje principal es de un <strong>nuevo comienzo absoluto</strong>.
          </p>
          <ul>
            <li><strong>Energía pura:</strong> Un tremendo caudal de energía que está disponible para ser usado en cualquier dirección.</li>
            <li><strong>Espontaneidad:</strong> El Loco te invita a dejar de sobreanalizar y simplemente <em>ser</em> y <em>hacer</em>. Dar el salto de fe sin tener todas las respuestas aseguradas.</li>
            <li><strong>Viajes:</strong> Físicamente, suele denotar traslados largos o viajes sin rumbo fijo que traerán un enorme aprendizaje espiritual.</li>
          </ul>

          <h2>El Loco: Significado Invertido</h2>
          <p>
            Cuando la energía de este arcano se bloquea, su vibración superior desciende:
          </p>
          <ul>
            <li><strong>Caos e irresponsabilidad:</strong> El salto de fe se convierte en pura imprudencia. Decisiones erráticas que dañan a los demás.</li>
            <li><strong>Huida de la realidad:</strong> La libertad se confunde con el miedo al compromiso. Vagabundeo existencial sin propósito.</li>
            <li><strong>Parálisis:</strong> Curiosamente, a veces indica un enorme miedo a dar el paso inicial necesario para comenzar tu "viaje del héroe".</li>
          </ul>

          <div className={styles.ctaBox}>
            <h3>¿Qué carta te acompañará hoy?</h3>
            <p>Descubre si El Loco y su energía de nuevos inicios está presente en tu vida ahora mismo.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <Button href="/tarot-gratis" variant="primary">
                Consultar el Tarot Ahora
              </Button>
            </div>
          </div>

          <h2>El Loco en el Amor</h2>
          <p>
            Si preguntas por el amor, El Loco es un torbellino. Indica romances espontáneos, muy intensos pero sin reglas definidas. Si estás soltero, señala que pronto entrará alguien a tu vida que revolucionará tu forma de ver el mundo. Si estás en pareja, es una invitación a inyectar frescura, aventura y salir de la rutina monótona para reconectar.
          </p>

          <h2>El Loco en el Trabajo y las Finanzas</h2>
          <p>
            En el ámbito profesional, El Loco en el <strong>tarot de Marsella</strong> te empuja al emprendimiento audaz. ¿Tienes una idea loca? Esta carta te dice: "Hazla". Sin embargo, también advierte que no debes aferrarte ciegamente a la seguridad de un sueldo fijo si eso está matando tu espíritu creativo. A nivel financiero, advierte sobre tomar riesgos excesivos sin paracaídas.
          </p>

          <h2>Consejo Espiritual de El Loco</h2>
          <blockquote>
            "Confía en el vacío. Tírate a la piscina aunque no veas el agua; el universo pondrá el agua antes de que caigas. Deja atrás el equipaje pesado del pasado y permite que la chispa divina te guíe. Sé el loco divino a los ojos de la sociedad."
          </blockquote>

          <section className={styles.faqSection}>
            <h2>Preguntas Frecuentes sobre El Loco</h2>
            
            <div className={styles.faqItem}>
              <h3>¿Es bueno o malo que salga El Loco en una tirada de tarot?</h3>
              <p>En el Tarot de Marsella no hay cartas puramente buenas o malas. El Loco suele ser muy positivo porque indica un nuevo comienzo lleno de energía, espontaneidad y un salto de fe. Solo se considera 'negativo' si estás buscando máxima estabilidad material, ya que indica movimiento e imprevisibilidad.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Qué significa El Loco invertido?</h3>
              <p>Cuando El Loco aparece invertido, pierde su inocencia y se convierte en irresponsabilidad o caos. Puede indicar que estás huyendo de tus responsabilidades vitales o que tienes miedo a dar el salto hacia lo desconocido, paralizándote.</p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
