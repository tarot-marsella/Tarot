import tarotData from "@/data/tarot.json";
import arcanosSeo from "@/data/arcanos-seo.json";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = tarotData.find((c) => c.slug === slug);
  const seo = arcanosSeo.find((c) => c.slug === slug);

  if (!card) return { title: "Carta no encontrada" };

  return {
    title: seo?.metaTitle || `${card.name} - Significado del Tarot de Marsella`,
    description: seo?.metaDescription || `Descubre el significado de ${card.name} en el Tarot de Marsella.`,
    keywords: seo?.keywords || [card.name, "tarot de marsella"],
    openGraph: {
      title: seo?.metaTitle || `${card.name} - Significado del Tarot de Marsella`,
      description: seo?.bluf || card.meaning_upright,
      images: [card.image_url],
    },
    alternates: {
      canonical: `https://tarotdemarsella.cl/aprendizaje/${card.slug}`,
    },
  };
}

export default async function CardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = tarotData.find((c) => c.slug === slug);
  const seo = arcanosSeo.find((c) => c.slug === slug);

  if (!card) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Significado de ${card.name} en el Tarot de Marsella`,
    image: [card.image_url],
    description: seo?.bluf || card.meaning_upright,
    author: { "@type": "Organization", name: "Tarot de Marsella" },
    publisher: { "@type": "Organization", name: "Tarot de Marsella" },
    mainEntityOfPage: `https://tarotdemarsella.cl/aprendizaje/${card.slug}`,
  };

  const faqJsonLd = seo?.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  // Navigation: previous and next arcano
  const currentIndex = tarotData.findIndex((c) => c.slug === slug);
  const prevCard = currentIndex > 0 ? tarotData[currentIndex - 1] : null;
  const nextCard = currentIndex < tarotData.length - 1 ? tarotData[currentIndex + 1] : null;

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Academia", href: "/aprendizaje" },
        { label: card.name },
      ]} />

      <article className={`fade-in ${styles.article}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image src={card.image_url} alt={`${card.name} - Tarot de Marsella`} fill className={styles.cardImage} priority sizes="(max-width: 900px) 300px, 400px" />
          </div>
        </div>

        <div className={styles.contentColumn}>
          <h1 className={styles.title}>
            {card.name} {seo?.numeral && <span className={styles.numeral}>({seo.numeral})</span>}
          </h1>
          <div className={styles.divider} />

          {/* BLUF paragraph for AI optimization */}
          {seo?.bluf && (
            <p className={styles.bluf}>{seo.bluf}</p>
          )}

          {/* Simbología */}
          {seo?.simbologia && (
            <section className={styles.section}>
              <h2>Simbología e Iconografía</h2>
              <p>{seo.simbologia}</p>
            </section>
          )}

          {/* Significado al Derecho */}
          <section className={styles.section}>
            <h2>Significado al Derecho</h2>
            <p>{card.meaning_upright}</p>
            {seo?.amor && (
              <div className={styles.aspectGrid}>
                <div className={styles.aspectCard}>
                  <h3>❤️ Amor</h3>
                  <p>{seo.amor.derecho}</p>
                </div>
                <div className={styles.aspectCard}>
                  <h3>💼 Trabajo</h3>
                  <p>{seo.trabajo.derecho}</p>
                </div>
                <div className={styles.aspectCard}>
                  <h3>🌿 Salud</h3>
                  <p>{seo.salud.derecho}</p>
                </div>
              </div>
            )}
          </section>

          {/* Significado Invertido */}
          <section className={styles.section}>
            <h2>Significado Invertido</h2>
            <p>{card.meaning_reversed}</p>
            {seo?.amor && (
              <div className={styles.aspectGrid}>
                <div className={styles.aspectCard}>
                  <h3>❤️ Amor</h3>
                  <p>{seo.amor.invertido}</p>
                </div>
                <div className={styles.aspectCard}>
                  <h3>💼 Trabajo</h3>
                  <p>{seo.trabajo.invertido}</p>
                </div>
                <div className={styles.aspectCard}>
                  <h3>🌿 Salud</h3>
                  <p>{seo.salud.invertido}</p>
                </div>
              </div>
            )}
          </section>

          {/* Interpretación Psicológica */}
          <section className={styles.section}>
            <h2>Interpretación Psicológica</h2>
            <p>{card.psychological_meaning}</p>
          </section>

          {/* Combinaciones */}
          {seo?.combinaciones && (
            <section className={styles.section}>
              <h2>Combinaciones Principales</h2>
              <div className={styles.combinaciones}>
                {seo.combinaciones.map((combo, i) => (
                  <div key={i} className={styles.comboItem}>
                    <strong>{card.name} + {combo.carta}</strong>
                    <p>{combo.significado}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Numerología */}
          {seo?.numerologia && (
            <section className={styles.section}>
              <h2>Numerología</h2>
              <p>{seo.numerologia}</p>
            </section>
          )}

          {/* Aplicación Práctica */}
          <section className={styles.section}>
            <h2>Aplicación Práctica</h2>
            <p>{card.practical_application}</p>
          </section>

          {/* Consejo Espiritual */}
          <section className={styles.adviceSection}>
            <h2>Consejo Espiritual</h2>
            <blockquote>{card.advice}</blockquote>
          </section>

          {/* FAQs */}
          {seo?.faqs && (
            <section className={styles.faqSection}>
              <h2>Preguntas Frecuentes</h2>
              {seo.faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3>¿{card.name} aparece en tu lectura?</h3>
            <p>Descúbrelo ahora con una tirada interactiva gratuita.</p>
            <Link href="/tirada" className={styles.ctaButton}>Haz tu Tirada Gratis</Link>
          </div>

          {/* Navigation between arcanos */}
          <nav className={styles.arcanoNav}>
            {prevCard && (
              <Link href={`/aprendizaje/${prevCard.slug}`} className={styles.navPrev}>
                ← {prevCard.name}
              </Link>
            )}
            {nextCard && (
              <Link href={`/aprendizaje/${nextCard.slug}`} className={styles.navNext}>
                {nextCard.name} →
              </Link>
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return tarotData.map((card) => ({ slug: card.slug }));
}
