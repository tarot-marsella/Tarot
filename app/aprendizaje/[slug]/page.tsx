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

          {/* Acordeones interactivos para las 26 secciones */}
          <div className={styles.acordeonGroup}>
            
            {/* 1. Introducción e Historia (si existen) */}
            {(seo?.introduccion || seo?.historia) && (
              <details className={styles.acordeonItem}>
                <summary className={styles.acordeonSummary}>📖 Introducción e Historia</summary>
                <div className={styles.acordeonContent}>
                  {seo?.introduccion && <p style={{ marginBottom: "1rem" }}>{seo.introduccion}</p>}
                  {seo?.historia && (
                    <div>
                      <h3>Orígenes Históricos</h3>
                      <p>{seo.historia}</p>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* 2. Simbología, Iconografía y Numerología */}
            {(seo?.simbologia || seo?.iconografia || seo?.elemento || seo?.numerologia) && (
              <details className={styles.acordeonItem} open>
                <summary className={styles.acordeonSummary}>🎨 Simbología e Iconografía Oculta</summary>
                <div className={styles.acordeonContent}>
                  {seo?.simbologia && <p style={{ marginBottom: "1rem" }}>{seo.simbologia}</p>}
                  {seo?.iconografia && (
                    <div style={{ marginBottom: "1rem" }}>
                      <strong>Detalles Iconográficos (Colores y Trazos):</strong>
                      <p>{seo.iconografia}</p>
                    </div>
                  )}
                  <div className={styles.aspectGrid}>
                    {seo?.elemento && (
                      <div className={styles.aspectCard}>
                        <h3>🔥 Elemento</h3>
                        <p>{seo.elemento}</p>
                      </div>
                    )}
                    {seo?.numerologia ? (
                      <div className={styles.aspectCard}>
                        <h3>🔢 Numerología</h3>
                        <p>{seo.numerologia}</p>
                      </div>
                    ) : (
                      <div className={styles.aspectCard}>
                        <h3>🔢 Numerología</h3>
                        <p>Carta número {seo?.numeral || card.id}</p>
                      </div>
                    )}
                  </div>
                </div>
              </details>
            )}

            {/* 3. Correspondencias y Arquetipos (Jung) */}
            {(seo?.correspondencias || seo?.arquetipo) && (
              <details className={styles.acordeonItem}>
                <summary className={styles.acordeonSummary}>🧠 Correspondencias y Arquetipo Junguiano</summary>
                <div className={styles.acordeonContent}>
                  {seo?.arquetipo && (
                    <div style={{ marginBottom: "1.2rem" }}>
                      <strong>El Arquetipo Psicológico:</strong>
                      <p>{seo.arquetipo}</p>
                    </div>
                  )}
                  {seo?.correspondencias && (
                    <div>
                      <strong>Asociaciones y Correspondencias:</strong>
                      <p>{seo.correspondencias}</p>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* 4. Experiencia de la Carta (Vivencial) - Nueva sección obligatoria */}
            {seo?.experiencia && (
              <details className={styles.acordeonItem} open>
                <summary className={styles.acordeonSummary}>👁️ Experiencia de la Carta (Vivencia Humana)</summary>
                <div className={styles.acordeonContent}>
                  <div className={styles.experienceGrid}>
                    <div>
                      <strong>Emociones Predominantes:</strong>
                      <div className={styles.badgeList}>
                        {seo.experiencia.emociones_predominantes.map((emo: string, i: number) => (
                          <span key={i} className={`${styles.badge} ${styles.badgeEmocion}`}>{emo}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Pensamientos Habituales:</strong>
                      <div className={styles.badgeList}>
                        {seo.experiencia.pensamientos_habituales.map((pen: string, i: number) => (
                          <span key={i} className={`${styles.badge} ${styles.badgePensamiento}`}>{pen}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong>Sensaciones Corporales:</strong>
                      <div className={styles.badgeList}>
                        {seo.experiencia.sensaciones_corporales.map((sen: string, i: number) => (
                          <span key={i} className={`${styles.badge} ${styles.badgeSensacion}`}>{sen}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <p><strong>Comportamiento habitual:</strong> {seo.experiencia.comportamiento}</p>
                      <p style={{ marginTop: "0.8rem" }}><strong>Conflictos internos:</strong> {seo.experiencia.conflictos_internos}</p>
                      <p style={{ marginTop: "0.8rem" }}><strong>Manifestaciones cotidianas:</strong> {seo.experiencia.manifestaciones_cotidianas}</p>
                      <div className={styles.aspectGrid} style={{ marginTop: "1.2rem" }}>
                        <div className={styles.aspectCard}>
                          <h3>🌱 Evolución e Integración</h3>
                          <p>{seo.experiencia.senales_evolucion}</p>
                        </div>
                        <div className={styles.aspectCard}>
                          <h3>⚠️ Bloqueos y Sombras</h3>
                          <p>{seo.experiencia.senales_bloqueo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            )}

            {/* 5. Lecturas de la Vida Cotidiana (Derecho, Invertido, Amor, Trabajo, Finanzas, Salud) */}
            <details className={styles.acordeonItem} open>
              <summary className={styles.acordeonSummary}>💼 Significado en la Vida Cotidiana</summary>
              <div className={styles.acordeonContent}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3>Significado al Derecho</h3>
                  <p>{card.meaning_upright}</p>
                  {seo?.amor && (
                    <div className={styles.aspectGrid}>
                      <div className={styles.aspectCard}>
                        <h3>❤️ Amor (Al Derecho)</h3>
                        <p>{seo.amor.derecho}</p>
                      </div>
                      {seo?.trabajo && (
                        <div className={styles.aspectCard}>
                          <h3>💼 Trabajo (Al Derecho)</h3>
                          <p>{seo.trabajo.derecho}</p>
                        </div>
                      )}
                      {seo?.salud && (
                        <div className={styles.aspectCard}>
                          <h3>🌿 Salud (Al Derecho)</h3>
                          <p>{seo.salud.derecho}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
                  <h3>Significado Invertido</h3>
                  <p>{card.meaning_reversed}</p>
                  {seo?.amor && (
                    <div className={styles.aspectGrid}>
                      <div className={styles.aspectCard}>
                        <h3>💔 Amor (Invertido)</h3>
                        <p>{seo.amor.invertido}</p>
                      </div>
                      {seo?.trabajo && (
                        <div className={styles.aspectCard}>
                          <h3>💼 Trabajo (Invertido)</h3>
                          <p>{seo.trabajo.invertido}</p>
                        </div>
                      )}
                      {seo?.salud && (
                        <div className={styles.aspectCard}>
                          <h3>🌿 Salud (Invertido)</h3>
                          <p>{seo.salud.invertido}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {(seo?.finanzas || seo?.salud_emocional || seo?.desarrollo_personal || seo?.espiritualidad) && (
                  <div style={{ borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                    <h3>Desarrollo y Finanzas</h3>
                    {seo?.finanzas && (
                      <div className={styles.aspectGrid}>
                        <div className={styles.aspectCard}>
                          <h3>🪙 Finanzas (Al Derecho)</h3>
                          <p>{seo.finanzas.derecho}</p>
                        </div>
                        <div className={styles.aspectCard}>
                          <h3>🪙 Finanzas (Invertido)</h3>
                          <p>{seo.finanzas.invertido}</p>
                        </div>
                      </div>
                    )}
                    {seo?.salud_emocional && <p style={{ marginTop: "0.8rem" }}><strong>Salud Emocional:</strong> {seo.salud_emocional}</p>}
                    {seo?.desarrollo_personal && <p style={{ marginTop: "0.8rem" }}><strong>Desarrollo Personal:</strong> {seo.desarrollo_personal}</p>}
                    {seo?.espiritualidad && <p style={{ marginTop: "0.8rem" }}><strong>Dimensión Espiritual:</strong> {seo.espiritualidad}</p>}
                  </div>
                )}
              </div>
            </details>

            {/* 6. Interpretación Psicológica Evolutiva */}
            <details className={styles.acordeonItem}>
              <summary className={styles.acordeonSummary}>🧠 Interpretación Psicológica e Integración</summary>
              <div className={styles.acordeonContent}>
                <p>{card.psychological_meaning}</p>
                <div style={{ marginTop: "1rem" }}>
                  <strong>Aplicación Práctica:</strong>
                  <p>{card.practical_application}</p>
                </div>
              </div>
            </details>

          </div>

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
