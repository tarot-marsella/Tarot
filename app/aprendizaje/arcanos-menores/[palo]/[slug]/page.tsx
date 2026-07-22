import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllCartaSlugs,
  getCartaBySlug,
  getPaloBySlug,
  getPaloColor,
} from '@/utils/arcanos-menores';
import arcanosMenoresSeo from '@/data/arcanos-menores-seo.json';
import styles from './page.module.css';

interface Props {
  params: Promise<{ palo: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllCartaSlugs().map(({ palo, slug }) => ({ palo, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { palo: paloSlug, slug } = await params;
  const result = getCartaBySlug(paloSlug, slug);
  if (!result) return { title: 'No encontrado' };

  const { palo, carta } = result;
  const seoData = (arcanosMenoresSeo as any)[slug];
  
  const title = seoData?.metaTitle || `${carta.name} | Significado en el ${palo.nameEs} | Tarot de Marsella`;
  const desc = seoData?.metaDescription || `${carta.meaning_upright.slice(0, 140)}. Significado en el ${palo.nameEs} del Tarot de Marsella.`;

  return {
    title,
    description: desc,
    keywords: seoData?.keywords || [
      carta.name.toLowerCase(),
      `${carta.name.toLowerCase()} tarot`,
      palo.nameEs.toLowerCase(),
      'tarot de marsella',
      ...carta.keywords,
    ],
    openGraph: {
      title: seoData?.metaTitle || `${carta.name} — Tarot de Marsella`,
      description: desc,
      type: 'article',
    },
  };
}

function getRelatedCards(paloSlug: string, currentSlug: string, count = 3) {
  const palo = getPaloBySlug(paloSlug);
  if (!palo) return [];
  return palo.cartas.filter((c) => c.slug !== currentSlug).slice(0, count);
}

export default async function CartaPage({ params }: Props) {
  const { palo: paloSlug, slug } = await params;
  const result = getCartaBySlug(paloSlug, slug);

  if (!result) notFound();

  const { palo, carta } = result;
  const colors = getPaloColor(paloSlug);
  const related = getRelatedCards(paloSlug, slug, 4);
  const seoData = (arcanosMenoresSeo as any)[slug];

  const elementEmojis: Record<string, string> = {
    Fuego: '🔥',
    Agua: '💧',
    Aire: '🌬️',
    Tierra: '🌍',
  };
  const emoji = elementEmojis[palo.element] ?? '✨';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${carta.name} - Significado en el Tarot de Marsella`,
    description: `${carta.meaning_upright}. ${carta.meaning_reversed}.`,
    author: {
      '@type': 'Organization',
      name: 'TarotdeMarsella.cl',
      url: 'https://tarotdemarsella.cl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TarotdeMarsella.cl',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}/${slug}`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://tarotdemarsella.cl' },
        { '@type': 'ListItem', position: 2, name: 'Aprendizaje', item: 'https://tarotdemarsella.cl/aprendizaje' },
        { '@type': 'ListItem', position: 3, name: 'Arcanos Menores', item: 'https://tarotdemarsella.cl/aprendizaje/arcanos-menores' },
        { '@type': 'ListItem', position: 4, name: palo.nameEs, item: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}` },
        { '@type': 'ListItem', position: 5, name: carta.name, item: `https://tarotdemarsella.cl/aprendizaje/arcanos-menores/${paloSlug}/${slug}` },
      ],
    },
  };

  return (
    <main
      className={styles.main}
      style={
        {
          '--palo-primary': colors.primary,
          '--palo-secondary': colors.secondary,
          '--palo-gradient': colors.gradient,
        } as React.CSSProperties
      }
    >
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/aprendizaje">Aprendizaje</Link>
        <span>›</span>
        <Link href="/aprendizaje/arcanos-menores">Arcanos Menores</Link>
        <span>›</span>
        <Link href={`/aprendizaje/arcanos-menores/${paloSlug}`}>{palo.name}</Link>
        <span>›</span>
        <span aria-current="page">{carta.name}</span>
      </nav>

      <div className={styles.layout}>
        {/* Columna principal */}
        <article className={styles.article}>
          {/* Cabecera de carta */}
          <header className={styles.cardHeader}>
            <div className={styles.cardVisual}>
              <div className={styles.cardPlaceholder}>
                <span className={styles.cardEmoji}>{emoji}</span>
                <span className={styles.cardNum}>{carta.numero}</span>
              </div>
            </div>
            <div className={styles.cardMeta}>
              <div className={styles.paloBadge}>
                {emoji} {palo.nameEs} · {palo.element}
              </div>
              <h1 className={styles.cardTitle}>{carta.name}</h1>
              <div className={styles.keywords}>
                {carta.keywords.map((kw) => (
                  <span key={kw} className={styles.keyword}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Significados y Secciones Enriquecidas */}
          {seoData ? (
            <div className={styles.acordeonGroup} style={{ marginTop: "2rem" }}>
              
              {/* 1. Introducción e Historia */}
              {(seoData.introduccion || seoData.historia) && (
                <details className={styles.acordeonItem}>
                  <summary className={styles.acordeonSummary}>📖 Introducción e Historia</summary>
                  <div className={styles.acordeonContent}>
                    {seoData.introduccion && <p style={{ marginBottom: "1rem" }}>{seoData.introduccion}</p>}
                    {seoData.historia && (
                      <div>
                        <h3>Orígenes e Historia</h3>
                        <p>{seoData.historia}</p>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* 2. Simbología, Iconografía y Numerología */}
              {(seoData.simbologia || seoData.iconografia || seoData.elemento || seoData.numerologia) && (
                <details className={styles.acordeonItem} open>
                  <summary className={styles.acordeonSummary}>🎨 Simbología e Iconografía Oculta</summary>
                  <div className={styles.acordeonContent}>
                    {seoData.simbologia && <p style={{ marginBottom: "1rem" }}>{seoData.simbologia}</p>}
                    {seoData.iconografia && (
                      <div style={{ marginBottom: "1rem" }}>
                        <strong>Detalles Iconográficos:</strong>
                        <p>{seoData.iconografia}</p>
                      </div>
                    )}
                    <div className={styles.aspectGrid}>
                      {seoData.elemento && (
                        <div className={styles.aspectCard}>
                          <h3>🔥 Elemento</h3>
                          <p>{seoData.elemento} (Palo de {palo.name})</p>
                        </div>
                      )}
                      {seoData.numerologia && (
                        <div className={styles.aspectCard}>
                          <h3>🔢 Numerología</h3>
                          <p>{seoData.numerologia}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              )}

              {/* 3. Correspondencias y Arquetipos */}
              {(seoData.correspondencias || seoData.arquetipo) && (
                <details className={styles.acordeonItem}>
                  <summary className={styles.acordeonSummary}>🧠 Correspondencias y Arquetipo</summary>
                  <div className={styles.acordeonContent}>
                    {seoData.arquetipo && (
                      <div style={{ marginBottom: "1.2rem" }}>
                        <strong>El Arquetipo:</strong>
                        <p>{seoData.arquetipo}</p>
                      </div>
                    )}
                    {seoData.correspondencias && (
                      <div>
                        <strong>Asociaciones Esotéricas:</strong>
                        <p>{seoData.correspondencias}</p>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* 4. Experiencia de la Carta (Vivencial) - Nueva sección obligatoria */}
              {seoData.experiencia && (
                <details className={styles.acordeonItem} open>
                  <summary className={styles.acordeonSummary}>👁️ Experiencia de la Carta (Vivencia Humana)</summary>
                  <div className={styles.acordeonContent}>
                    <div className={styles.experienceGrid}>
                      <div>
                        <strong>Emociones Predominantes:</strong>
                        <div className={styles.badgeList}>
                          {seoData.experiencia.emociones_predominantes.map((emo: string, i: number) => (
                            <span key={i} className={`${styles.badge} ${styles.badgeEmocion}`}>{emo}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <strong>Pensamientos Habituales:</strong>
                        <div className={styles.badgeList}>
                          {seoData.experiencia.pensamientos_habituales.map((pen: string, i: number) => (
                            <span key={i} className={`${styles.badge} ${styles.badgePensamiento}`}>{pen}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <strong>Sensaciones Corporales:</strong>
                        <div className={styles.badgeList}>
                          {seoData.experiencia.sensaciones_corporales.map((sen: string, i: number) => (
                            <span key={i} className={`${styles.badge} ${styles.badgeSensacion}`}>{sen}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <p><strong>Comportamiento:</strong> {seoData.experiencia.comportamiento}</p>
                        <p style={{ marginTop: "0.8rem" }}><strong>Conflictos internos:</strong> {seoData.experiencia.conflictos_internos}</p>
                        <p style={{ marginTop: "0.8rem" }}><strong>Oportunidades de crecimiento:</strong> {seoData.experiencia.oportunidades_crecimiento}</p>
                        <p style={{ marginTop: "0.8rem" }}><strong>Manifestaciones cotidianas:</strong> {seoData.experiencia.manifestaciones_cotidianas}</p>
                        <div className={styles.aspectGrid} style={{ marginTop: "1.2rem" }}>
                          <div className={styles.aspectCard}>
                            <h3>🌱 Evolución</h3>
                            <p>{seoData.experiencia.senales_evolucion}</p>
                          </div>
                          <div className={styles.aspectCard}>
                            <h3>⚠️ Bloqueo</h3>
                            <p>{seoData.experiencia.senales_bloqueo}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              )}

              {/* 5. Lecturas de la Vida Cotidiana */}
              <details className={styles.acordeonItem} open>
                <summary className={styles.acordeonSummary}>💼 Significado en la Vida Cotidiana</summary>
                <div className={styles.acordeonContent}>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3>Significado al Derecho (Upright)</h3>
                    <p>{carta.meaning_upright}</p>
                    {seoData.amor && (
                      <div className={styles.aspectGrid}>
                        <div className={styles.aspectCard}>
                          <h3>❤️ Amor</h3>
                          <p>{seoData.amor.derecho}</p>
                        </div>
                        {seoData.trabajo && (
                          <div className={styles.aspectCard}>
                            <h3>💼 Trabajo</h3>
                            <p>{seoData.trabajo.derecho}</p>
                          </div>
                        )}
                        {seoData.finanzas && (
                          <div className={styles.aspectCard}>
                            <h3>🪙 Finanzas</h3>
                            <p>{seoData.finanzas.derecho}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div style={{ borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
                    <h3>Significado Invertido (Reversed)</h3>
                    <p>{carta.meaning_reversed}</p>
                    {seoData.amor && (
                      <div className={styles.aspectGrid}>
                        <div className={styles.aspectCard}>
                          <h3>💔 Amor</h3>
                          <p>{seoData.amor.invertido}</p>
                        </div>
                        {seoData.trabajo && (
                          <div className={styles.aspectCard}>
                            <h3>💼 Trabajo</h3>
                            <p>{seoData.trabajo.invertido}</p>
                          </div>
                        )}
                        {seoData.finanzas && (
                          <div className={styles.aspectCard}>
                            <h3>🪙 Finanzas</h3>
                            <p>{seoData.finanzas.invertido}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {(seoData.salud_emocional || seoData.desarrollo_personal || seoData.espiritualidad) && (
                    <div style={{ borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                      <h3>Desarrollo y Bienestar</h3>
                      {seoData.salud_emocional && <p style={{ marginTop: "0.8rem" }}><strong>Salud Emocional:</strong> {seoData.salud_emocional}</p>}
                      {seoData.desarrollo_personal && <p style={{ marginTop: "0.8rem" }}><strong>Desarrollo Personal:</strong> {seoData.desarrollo_personal}</p>}
                      {seoData.espiritualidad && <p style={{ marginTop: "0.8rem" }}><strong>Dimensión Espiritual:</strong> {seoData.espiritualidad}</p>}
                    </div>
                  )}
                </div>
              </details>

              {/* 6. Consejos y Pedagogía */}
              {(seoData.consejo || seoData.preguntas_reflexionar || seoData.errores_comunes_interpretacion) && (
                <details className={styles.acordeonItem}>
                  <summary className={styles.acordeonSummary}>🔮 Consejos y Pedagogía</summary>
                  <div className={styles.acordeonContent}>
                    {seoData.consejo && (
                      <div style={{ marginBottom: "1rem" }}>
                        <strong>Consejo de la Carta:</strong>
                        <p>{seoData.consejo}</p>
                      </div>
                    )}
                    {seoData.preguntas_reflexionar && (
                      <div style={{ marginBottom: "1rem" }}>
                        <strong>Preguntas para reflexionar:</strong>
                        <ul>
                          {seoData.preguntas_reflexionar.map((p: string, i: number) => (
                            <li key={i} style={{ marginLeft: "1.2rem", listStyleType: "disc" }}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {seoData.errores_comunes_interpretacion && (
                      <div>
                        <strong>Errores comunes de interpretación:</strong>
                        <p>{seoData.errores_comunes_interpretacion}</p>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* 7. Relaciones y Combinaciones */}
              {(seoData.relaciones_mismo_palo || seoData.relaciones_arcanos_mayores || seoData.combinaciones_frecuentes) && (
                <details className={styles.acordeonItem}>
                  <summary className={styles.acordeonSummary}>🔗 Relaciones e Interlinking</summary>
                  <div className={styles.acordeonContent}>
                    {seoData.relaciones_mismo_palo && (
                      <p style={{ marginBottom: "0.8rem" }}>
                        <strong>Relaciones en el {palo.nameEs}:</strong>{" "}
                        {seoData.relaciones_mismo_palo.join(", ")}
                      </p>
                    )}
                    {seoData.relaciones_arcanos_mayores && (
                      <p style={{ marginBottom: "0.8rem" }}>
                        <strong>Correspondencia con Arcanos Mayores:</strong>{" "}
                        {seoData.relaciones_arcanos_mayores.join(", ")}
                      </p>
                    )}
                    {seoData.combinaciones_frecuentes && (
                      <div>
                        <strong>Combinaciones comunes:</strong>
                        <div style={{ marginTop: "0.5rem" }}>
                          {seoData.combinaciones_frecuentes.map((comb: any, i: number) => (
                            <div key={i} style={{ marginBottom: "0.8rem", paddingLeft: "1rem", borderLeft: "2px solid var(--accent-gold)" }}>
                              <strong>{carta.name} + {comb.carta}:</strong>
                              <p>{comb.significado}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              )}

            </div>
          ) : (
            <>
              {/* Renderizado de fallback tradicional */}
              <section className={styles.meaningSection}>
                <div className={styles.meaningCard} data-type="upright">
                  <div className={styles.meaningHeader}>
                    <span className={styles.meaningIcon}>⬆️</span>
                    <h2 className={styles.meaningTitle}>Significado Upright (Derecha)</h2>
                  </div>
                  <p className={styles.meaningText}>{carta.meaning_upright}</p>
                </div>

                <div className={styles.meaningCard} data-type="reversed">
                  <div className={styles.meaningHeader}>
                    <span className={styles.meaningIcon}>⬇️</span>
                    <h2 className={styles.meaningTitle}>Significado Invertida (Al revés)</h2>
                  </div>
                  <p className={styles.meaningText}>{carta.meaning_reversed}</p>
                </div>
              </section>

              {/* Consejo */}
              <section className={styles.adviceSection}>
                <div className={styles.adviceCard}>
                  <div className={styles.adviceIcon}>🔮</div>
                  <div>
                    <h2 className={styles.adviceTitle}>Consejo de la Carta</h2>
                    <p className={styles.adviceText}>{carta.advice}</p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Navegación entre cartas del mismo palo */}
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Más cartas del {palo.nameEs}</h2>
            <div className={styles.relatedGrid}>
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/aprendizaje/arcanos-menores/${paloSlug}/${rel.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedNum}>{rel.numero}</span>
                  <span className={styles.relatedName}>{rel.name}</span>
                  <span className={styles.relatedArrow}>→</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Sobre este Palo</h3>
            <p className={styles.sidebarText}>{palo.description}</p>
            <Link
              href={`/aprendizaje/arcanos-menores/${paloSlug}`}
              className={styles.sidebarLink}
            >
              Ver las 14 cartas del {palo.name} →
            </Link>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Palabras clave</h3>
            <div className={styles.sidebarKeywords}>
              {carta.keywords.map((kw) => (
                <span key={kw} className={styles.sidebarKw}>
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Elemento: {palo.element}</h3>
            <p className={styles.sidebarText}>
              {palo.element === 'Fuego' &&
                'El Fuego representa la voluntad, la energía vital y el impulso creador. Es el motor de la acción.'}
              {palo.element === 'Agua' &&
                'El Agua representa el mundo emocional, la intuición y el inconsciente. Es el origen del sentimiento.'}
              {palo.element === 'Aire' &&
                'El Aire representa el pensamiento, la comunicación y el conflicto. Es el poder de la mente.'}
              {palo.element === 'Tierra' &&
                'La Tierra representa la materia, el cuerpo y los recursos. Es la base de la manifestación concreta.'}
            </p>
          </div>

          <Link href="/tirada" className={styles.ctaButton}>
            🃏 Hacer una tirada de Tarot gratis
          </Link>
        </aside>
      </div>
    </main>
  );
}
